import { Box } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";
import { Typography } from "@mui/material";

const RightSideTopSkeleton = () => {
  return (
    <div>
      <div className="bgColor1 p-2 rounded-lg flex justify-center">
        <div className="w-[300px] md:w-[400px] lg:w-[600px]">
          <div className="w-full flex items-center justify-between">
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
            <div className="w-full mx-4">
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
                width={50}
                height={50}
                animation="pulse"
                classes={{
                  circular: "skBg",
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideTopSkeleton;
