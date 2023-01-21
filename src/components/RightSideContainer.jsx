/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import RightSideBottomContainer from "./RightSideBottomContainer";
import RightSideTop from "./RightSideTop";
import RightSideTopSkeleton from "./RightSideTopSkeleton";
import RightSideBottomSkeleton from "./RightSideBottomSkeleton";

const RightSideContainer = ({ fullSurah }) => {
  const rightSideTopRef = useRef();
  const rightSideBottomRef = useRef();
  const { loading, surah } = fullSurah;

  useEffect(() => {
    const rightSideTopHeight = rightSideTopRef?.current?.offsetHeight;
    if (window.innerWidth < 768) {
      rightSideBottomRef.current.style.height = `${
        window.innerHeight - (60 + 30 + rightSideTopHeight)
      }px`;
    }
  }, [loading]);
  return (
    <div className="my-[4rem] md:my-2 md:w-full mx-1 md:mx-0 h-full md:h-auto overflow-hidden">
      <div className="rightSideTop">
        {loading ? (
          <RightSideTopSkeleton />
        ) : (
          <RightSideTop
            rightSideTopRef={rightSideTopRef}
            surahDetails={surah.surahDetails}
          />
        )}
      </div>
      <div
        className={`rightSideBottom bgColor1 md:h-[90%] lg:h-[89%] mt-2 rounded-lg p-2 md:p-3 lg:p-4 ${
          loading ? "overflow-hidden" : "overflow-y-auto"
        }`}
        ref={rightSideBottomRef}
      >
        {loading ? (
          <RightSideBottomSkeleton />
        ) : (
          <RightSideBottomContainer fullSurah={surah.surah} />
        )}
      </div>
    </div>
  );
};

export default RightSideContainer;
