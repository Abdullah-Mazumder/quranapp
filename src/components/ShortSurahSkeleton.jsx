import { Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";

const ShortSurahSkeleton = () => {
  return (
    <>
      <div className="bgColor2 p-2 rounded-md w-full">
        <div className="flex items-center justify-between gap-3">
          <Box>
            <Skeleton
              variant="circular"
              width={50}
              height={50}
              animation="pulse"
              classes={{
                circular: "skBg",
              }}
            />
          </Box>
          <div className="w-full">
            <Box>
              <Skeleton
                width="100%"
                variant="text"
                animation="pulse"
                classes={{
                  text: "skBg w-36",
                }}
              >
                <Typography className="bgColor1">.</Typography>
              </Skeleton>
              <Skeleton
                width="80%"
                variant="text"
                animation="pulse"
                classes={{
                  text: "skBg",
                }}
              >
                <Typography className="bgColor1">.</Typography>
              </Skeleton>
              <Skeleton
                width="60%"
                variant="text"
                animation="pulse"
                classes={{
                  text: "skBg",
                }}
              >
                <Typography className="bgColor1">.</Typography>
              </Skeleton>
            </Box>
          </div>
          <Box>
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              animation="pulse"
              classes={{
                circular: "skBg",
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default ShortSurahSkeleton;
