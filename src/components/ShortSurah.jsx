import { Box } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const ShortSurah = () => {
  return (
    <div
      className={`bgColor2 hoverBg p-2 cursor-pointer rounded-md w-full mr-1`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="surahLogo w-[45px] h-[45px] flex items-center justify-center">
          <span className="text-sm">100</span>
        </div>
        <div className="details">
          <div className="name flex flex-col gap-0 text-md md:text-lg">
            <div className="my-1">
              <Box component="div" className="">
                <span className="arabicTxt text-lg md:text-xl">
                  Arabicname{" "}
                </span>
                <span className="text-sm">( {"Name"} )</span>
              </Box>
            </div>
            <Box style={{ marginTop: "-5px" }} className="">
              <span>{"latedName"} </span>
              <span className="text-sm">( {"englishName"} )</span>
            </Box>
          </div>
          <div className="bottom flex gap-3 mt-1 text-xs md:text-sm">
            <Box component="span" className="">
              <span className="arabicTxt">{"arLocation"} </span>
              <span className="text-sm">( {"enLocation"} )</span>
            </Box>
            <Box component="span" className="">
              Ayah: {300}
            </Box>
          </div>
        </div>
        <RestoreIcon />
      </div>
    </div>
  );
};

export default ShortSurah;
