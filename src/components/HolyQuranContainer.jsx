import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";

const HolyQuranContainer = () => {
  const [shortSurahList, setShortSurahList] = useState({
    loading: true,
    list: null,
  });

  useEffect(() => {
    setTimeout(() => {
      import("./../data/allSurah").then((data) => {
        setShortSurahList({
          loading: false,
          list: data,
        });
      });
    }, 2000);
  }, []);

  return (
    <div className="mt-[60px] h-full w-full">
      <div className="container mx-auto h-full">
        <div className="h-[94%] w-ful">
          <div className="txtColor md:flex gap-2 h-full">
            <LeftSideContainer shortSurahList={shortSurahList} />
            <RightSideContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolyQuranContainer;
