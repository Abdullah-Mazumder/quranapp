/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";

const HolyQuranContainer = () => {
  const leftSideRef = useRef(null);
  const [shortSurahList, setShortSurahList] = useState({
    loading: true,
    list: null,
  });
  const [fullSurah, setFullSurah] = useState({
    loading: true,
    surah: "",
  });
  const [currentSurahNumber, setCurrentSurahNumber] = useState();
  const [readLater, setReadLater] = useState("");
  const [lastReadSurah, setLastReadSurah] = useState();
  const [lastReadedAyah, setLastReadedAyah] = useState();

  const saveToReadLater = (surah, ayah) => {
    if (!localStorage.getItem("holyQuran")) {
      localStorage.setItem("holyQuran", JSON.stringify({}));
    }
    const holyQuranLocal = JSON.parse(localStorage.getItem("holyQuran"));
    if (
      holyQuranLocal.readLater &&
      holyQuranLocal.readLater[surah] &&
      holyQuranLocal.readLater &&
      holyQuranLocal.readLater[surah] == ayah
    ) {
      delete holyQuranLocal.readLater[surah];
      holyQuranLocal.lastRead =
        Object.keys(holyQuranLocal.readLater)[
          Object.keys(holyQuranLocal.readLater).length - 1
        ] || null;
    } else {
      holyQuranLocal.readLater = { ...holyQuranLocal.readLater, [surah]: ayah };

      holyQuranLocal.lastRead = surah;
    }
    setReadLater({ ...holyQuranLocal.readLater });
    localStorage.setItem("holyQuran", JSON.stringify(holyQuranLocal));
  };

  useEffect(() => {
    if (localStorage.getItem("holyQuran")) {
      setReadLater(
        JSON.parse(localStorage.getItem("holyQuran")).readLater || null
      );
      setLastReadSurah(
        JSON.parse(localStorage.getItem("holyQuran")).lastRead || null
      );
    }
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
    if (currentSurahNumber) {
      setTimeout(() => {
        import(`./../data/allSurah/${currentSurahNumber}.json`).then((data) => {
          setFullSurah({
            loading: false,
            surah: data.default,
          });
        });
      }, 2000);
    }
  }, [currentSurahNumber]);

  useEffect(() => {
    if (readLater[currentSurahNumber]) {
      setLastReadedAyah(readLater[currentSurahNumber]);
    } else {
      setLastReadedAyah(1);
    }
  }, [currentSurahNumber]);

  useEffect(() => {
    if (lastReadSurah) {
      setCurrentSurahNumber(lastReadSurah);
    } else {
      setCurrentSurahNumber(1);
    }
  }, [lastReadSurah]);

  return (
    <div className="mt-[60px] h-full w-full">
      <div className="container mx-auto h-full">
        <div className="holyQuranContainer w-ful">
          <div className="my-[4.2rem] h-full">
            <div className="txtColor md:flex gap-2 h-full">
              <LeftSideContainer
                shortSurahList={shortSurahList}
                currentSurahNumber={currentSurahNumber}
                setCurrentSurahNumber={setCurrentSurahNumber}
                readLater={readLater}
                leftSideRef={leftSideRef}
              />
              <RightSideContainer
                fullSurah={fullSurah}
                saveToReadLater={saveToReadLater}
                readLater={readLater}
                lastReadedAyah={lastReadedAyah}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolyQuranContainer;
