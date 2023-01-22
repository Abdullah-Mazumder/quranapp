/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import RightSideBottomContainer from "./RightSideBottomContainer";
import RightSideTop from "./RightSideTop";
import RightSideTopSkeleton from "./RightSideTopSkeleton";
import RightSideBottomSkeleton from "./RightSideBottomSkeleton";

const RightSideContainer = ({ fullSurah }) => {
  const { loading, surah } = fullSurah;

  return (
    <div className="mx-1 md:mx-0 h-[calc(100vh-70px)] md:w-full overflow-hidden">
      <div className="rightSideTop h-[90px]">
        {loading ? (
          <RightSideTopSkeleton />
        ) : (
          <RightSideTop surahDetails={surah.surahDetails} />
        )}
      </div>
      <div className="h-[calc(100vh-170px)] bgColor1 rounded-lg overflow-hidden mt-2 p-2 lg:p-3">
        <div className="h-[100%] w-[inherit]">
          {loading ? (
            <RightSideBottomSkeleton />
          ) : (
            <RightSideBottomContainer fullSurah={surah.surah} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSideContainer;
