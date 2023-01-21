import { Box } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const ShortSurah = ({ surah, style }) => {
  const {
    arabicName,
    banglaName,
    englishName,
    arLocation,
    enLocation,
    enTranslatedName,
    id,
    totalAyah,
  } = surah;
  return (
    <div
      className={`bgColor2 hoverBg p-2 cursor-pointer rounded-md w-full mr-1 short-surah`}
      // style={{ height: style.hight }}
    >
      <div className="flex items-center justify-evenly md:justify-between gap-3">
        <div className="surahLogo w-[45px] h-[45px] flex items-center justify-center">
          <span className="text-sm">{id}</span>
        </div>
        <div className="details w-[200px] lg:w-[280px]">
          <div className="name flex flex-col gap-0 text-md md:text-lg">
            <div className="my-1">
              <Box component="div" className="">
                <span className="arabicTxt text-lg md:text-xl">
                  {arabicName}{" "}
                </span>
                <span className="text-sm">( {banglaName} )</span>
              </Box>
            </div>
            <Box style={{ marginTop: "-5px" }} className="">
              <span>{enTranslatedName} </span>
              <span className="text-sm">( {englishName} )</span>
            </Box>
          </div>
          <div className="bottom flex gap-3 mt-1 text-xs md:text-sm">
            <Box component="span" className="">
              <span className="arabicTxt">{arLocation} </span>
              <span className="text-sm">( {enLocation} )</span>
            </Box>
            <Box component="span" className="">
              Ayah: {totalAyah}
            </Box>
          </div>
        </div>
        <RestoreIcon />
      </div>
    </div>
  );
};

export default ShortSurah;
