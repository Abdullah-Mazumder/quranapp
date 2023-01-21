import React from "react";
import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";

const HolyQuranContainer = () => {
  return (
    <div className="mt-[60px] h-full w-full">
      <div className="container mx-auto h-full">
        <div className="h-[93%] w-ful">
          <div className="txtColor md:flex gap-2 h-full">
            <LeftSideContainer />
            <RightSideContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolyQuranContainer;
