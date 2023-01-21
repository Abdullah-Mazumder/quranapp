/* eslint-disable no-unused-vars */
import LeftSideSkeleton from "./LeftSideSkeleton";
import ShortSurahContainer from "./ShortSurahContainer";

const LeftSideContainer = () => {
  return (
    <div className="mb-2 md:mb-0 md:my-0 md:!mt-2 absolute top-0 left-0 md:static h-[100vh] w-[98%] md:w-[inherit] md:h-auto bgColor1 z-[9999] rounded-lg p-3 mx-1 md:mx-0 overflow-hidden pb-8 md:pb-3">
      <div className="md:hidden bgColor2 mb-3 rounded-lg p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quia?
      </div>
      <div className="overflow-y-auto overflow-x-hidden h-[91%] md:h-[100%]">
        {/* <LeftSideSkeleton /> */}
        <ShortSurahContainer />
      </div>
    </div>
  );
};

export default LeftSideContainer;
