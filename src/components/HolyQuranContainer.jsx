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
  const [fullSurah, setFullSurah] = useState({
    loading: true,
    surah: "",
  });
  const [currentSurahNumber, setCurrentSurahNumber] = useState(1);

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

  useEffect(() => {
    setFullSurah({
      loading: true,
      surah: "",
    });
    setTimeout(() => {
      import(`./../data/allSurah/${currentSurahNumber}.json`).then((data) => {
        setFullSurah({
          loading: false,
          surah: data.default,
        });
      });
    }, 2000);
  }, [currentSurahNumber]);

  return (
    <div className="mt-[60px] h-full w-full">
      <div className="container mx-auto h-full">
        <div className="md:h-[92%] h-[94%] lg:h-[94%] w-ful">
          <div className="txtColor md:flex gap-2 h-full">
            <LeftSideContainer
              shortSurahList={shortSurahList}
              currentSurahNumber={currentSurahNumber}
              setCurrentSurahNumber={setCurrentSurahNumber}
            />
            <RightSideContainer fullSurah={fullSurah} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolyQuranContainer;
