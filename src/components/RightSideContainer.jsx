/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import RightSideTop from "./RightSideTop";
import RightSideTopSkeleton from "./RightSideTopSkeleton";

const RightSideContainer = ({ fullSurah }) => {
  const rightSideTopRef = useRef();
  const rightSideBottomRef = useRef();

  const { loading, surah } = fullSurah;

  useEffect(() => {
    const rightSideTopHeight = rightSideTopRef?.current?.offsetHeight;
    if (window.innerWidth < 768) {
      rightSideBottomRef.current.style.height = `${
        window.innerHeight - (60 + 50 + rightSideTopHeight)
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
        className={`rightSideBottom bgColor1 h-[calc(100vh-230px)] md:h-full mt-2 rounded-lg p-2 md:p-3 lg:p-4`}
        ref={rightSideBottomRef}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam
        praesentium ea fugiat laudantium numquam cupiditate maxime libero qui?
        Eligendi nam cum tenetur commodi qui dolores perferendis vero sapiente
        exercitationem.
      </div>
    </div>
  );
};

export default RightSideContainer;
