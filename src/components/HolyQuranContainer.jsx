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
  const [currentSurahNumber, setCurrentSurahNumber] = useState(null);
  const [readLater, setReadLater] = useState("");
  const [lastReadedAyah, setLastReadedAyah] = useState(null);

  const saveToReadLater = (surah, ayah) => {
    if (!localStorage.getItem("holyQuran")) {
      localStorage.setItem("holyQuran", JSON.stringify({}));
    }
    const holyQuranLocal = JSON.parse(localStorage.getItem("holyQuran"));
    // eslint-disable-next-line eqeqeq
    if (holyQuranLocal[surah] && holyQuranLocal[surah] == ayah) {
      delete holyQuranLocal[surah];
      delete holyQuranLocal.lastRead;
    } else {
      holyQuranLocal[surah] = ayah.toString();
      holyQuranLocal.lastRead = surah;
    }
    setReadLater(holyQuranLocal);
    localStorage.setItem("holyQuran", JSON.stringify(holyQuranLocal));
  };

  useEffect(() => {
    if (readLater?.lastRead) {
      setCurrentSurahNumber(readLater.lastRead);
      setLastReadedAyah(readLater[readLater.lastRead]);
    } else {
      setCurrentSurahNumber(1);
      setLastReadedAyah(1);
    }
  }, [readLater]);

  useEffect(() => {
    if (localStorage.getItem("holyQuran")) {
      setReadLater(JSON.parse(localStorage.getItem("holyQuran")));
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolyQuranContainer;
