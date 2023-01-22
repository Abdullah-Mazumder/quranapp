import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Zoom,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import icon from "../media/icon.png";
import useAudioPlayer from "../hooks/useAudioPlay";

const RightSideTop = ({ rightSideTopRef, surahDetails }) => {
  const {
    id,
    arabicName,
    banglaName,
    englishName,
    arLocation,
    enLocation,
    enTranslatedName,
    totalAyah,
    audio,
  } = surahDetails;
  const { audioRef, isLoading, isPlaying, audioUrlHandler, setIsPlaying } =
    useAudioPlayer();
  return (
    <div id="rightsidetop" ref={rightSideTopRef}>
      <div>
        <div className="bgColor1 p-2 rounded-lg flex justify-center">
          <div className="w-[90%] md:w-[400px] lg:w-[600px]">
            <div className="w-full flex items-center justify-between flex-row-reverse">
              <div className="w-[50px] flex items-center justify-end">
                <audio ref={audioRef} />
                {!isPlaying && !isLoading && (
                  <div className="button p-0">
                    <Tooltip
                      TransitionComponent={Zoom}
                      title="Play The Surah"
                      arrow={true}
                      placement="right"
                      classes={{
                        tooltip: "darkBgColor1",
                        tooltipArrow: "darkBgColor1",
                      }}
                    >
                      <IconButton
                        aria-label="play"
                        size="medium"
                        onClick={() => audioUrlHandler(audio)}
                        sx={{ padding: "8px" }}
                      >
                        <PlayArrow fontSize="inherit" className="txtColor" />
                      </IconButton>
                    </Tooltip>
                  </div>
                )}
                {isPlaying && !isLoading && (
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Pause The Surah"
                    arrow={true}
                    placement="right"
                    classes={{
                      tooltip: "darkBgColor1",
                      tooltipArrow: "darkBgColor1",
                    }}
                  >
                    <div
                      className="wave-container cursor-pointer h-full"
                      onClick={() => setIsPlaying(false)}
                    >
                      <div className="wave-animation flex items-center gap-1 w-full h-full cursor-pointer">
                        <div
                          className="wave-pillar w-[2px] h-[12px] waveBg rounded-sm"
                          onClick={() => setIsPlaying(false)}
                        ></div>
                        <div
                          className="wave-pillar w-[2px] h-[12px] waveBg rounded-sm"
                          onClick={() => setIsPlaying(false)}
                        ></div>
                        <div
                          className="wave-pillar w-[2px] h-[12px] waveBg rounded-sm"
                          onClick={() => setIsPlaying(false)}
                        ></div>
                        <div
                          className="wave-pillar w-[2px] h-[12px] waveBg rounded-sm"
                          onClick={() => setIsPlaying(false)}
                        ></div>
                        <div
                          className="wave-pillar w-[2px] h-[12px] waveBg rounded-sm"
                          onClick={() => setIsPlaying(false)}
                        ></div>
                      </div>
                    </div>
                  </Tooltip>
                )}
                {isLoading && (
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Loading..."
                    arrow={true}
                    placement="right"
                    classes={{
                      tooltip: "darkBgColor1",
                      tooltipArrow: "darkBgColor1",
                    }}
                  >
                    <IconButton aria-label="play" size="medium">
                      <CircularProgress
                        classes={{
                          circle: "txtColor",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </div>

              <div className="details flex justify-around items-center gap-3">
                <div>
                  <div className="top">
                    <Box component="div" className="txtColor">
                      <span className="arabicTxt text-lg">{arabicName} </span>
                      <span className="text-sm">( {banglaName} )</span>
                    </Box>
                    <Box style={{ marginTop: "" }} className="txtColor">
                      <span>{enTranslatedName} </span>
                      <span
                        className="text-sm"
                        onClick={() => setIsPlaying(false)}
                      >
                        ({" "}
                        {englishName.length > 15
                          ? `${englishName.slice(0, 12)}...`
                          : englishName}{" "}
                        )
                      </span>
                    </Box>
                  </div>
                  <div
                    className="bottom flex gap-3 text-xs md:text-sm"
                    onClick={() => setIsPlaying(false)}
                  >
                    <Box component="span" className="txtColor">
                      <span className="arabicTxt">{arLocation} </span>
                      <span
                        className="text-sm"
                        onClick={() => setIsPlaying(false)}
                      >
                        ( {enLocation === "meccan" ? "Makki" : "Madani"} )
                      </span>
                    </Box>
                    <Box component="span" className="txtColor">
                      Ayah: {totalAyah}
                    </Box>
                  </div>
                </div>
              </div>
              <div>
                <div className="surahLogo w-[45px] h-[45px] flex items-center justify-center">
                  <span className="text-xs md:text-sm">{id}</span>
                </div>
              </div>
              <div className="icon hidden md:block h-16">
                <img
                  src={icon}
                  style={{ height: "100%", width: "auto" }}
                  alt="icn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideTop;
