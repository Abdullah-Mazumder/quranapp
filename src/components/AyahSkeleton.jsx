import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

const AyahSkeleton = () => {
  return (
    <>
      <div className={`bgColor2 p-4 rounded-md`}>
        <div className="">
          <Box>
            <Skeleton
              width="100%"
              variant="text"
              animation="pulse"
              classes={{
                text: "skBg ml-auto",
              }}
            >
              <Typography className="bgColor1">.</Typography>
            </Skeleton>
            <Skeleton
              width="90%"
              variant="text"
              animation="pulse"
              classes={{
                text: "skBg ml-auto",
              }}
            >
              <Typography className="bgColor1">.</Typography>
            </Skeleton>
            <Skeleton
              width="80%"
              variant="text"
              animation="pulse"
              classes={{
                text: "skBg ml-auto",
              }}
            >
              <Typography className="bgColor1">.</Typography>
            </Skeleton>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AyahSkeleton;
