/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { Slider, Switch, Tooltip, Zoom } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";
import { styled } from "@mui/material/styles";

const HolyQuranContainer = () => {
  const leftSideRef = useRef(null);
  const settingBoxRef = useRef(null);
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
  const [settingsBox, setSettingsBox] = useState(false);

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

  useEffect(() => {
    if (settingsBox) {
      settingBoxRef.current.classList.add("transition-all");
      settingBoxRef.current.classList.remove("translate-y-[550px]");
    } else {
      settingBoxRef.current.classList.add("transition-all");
      settingBoxRef.current.classList.add("translate-y-[550px]");
    }
  }, [settingsBox]);

  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
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
      <div className="absolute bottom-3 md:bottom-2 left-0 txtColor w-full">
        <div className="flex justify-center items-center">
          <Tooltip
            TransitionComponent={Zoom}
            title="Settings"
            arrow={true}
            placement="top"
            className=""
            classes={{
              tooltip: "darkBgColor1",
              tooltipArrow: "darkBgColor1",
            }}
          >
            <div
              className="border-2 border-slate-500 rounded-full p-2 cursor-pointer bgColor1 hoverBg"
              onClick={() => setSettingsBox(true)}
            >
              <TuneIcon size="2rem" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div
        className="absolute bottom-3 md:bottom-2 txtColor z-[9999] w-full translate-y-[550px]"
        ref={settingBoxRef}
      >
        <div className="absolute top-[-25px] w-[100%] flex justify-center items-center">
          <div className="w-[45px] z-[99999]">
            <Tooltip
              TransitionComponent={Zoom}
              title="Close"
              arrow={true}
              placement="top"
              className=""
              classes={{
                tooltip: "darkBgColor1",
                tooltipArrow: "darkBgColor1",
              }}
            >
              <div
                className="border-2 border-slate-500 rounded-full p-2 cursor-pointer bgColor1 hoverBg"
                onClick={() => setSettingsBox(false)}
              >
                <CloseIcon size="2rem" />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="container mx-auto bgColor1 p-3 rounded-lg">
          <div className="md:flex items-start justify-between gap-3 space-y-3 md:space-y-0">
            <div className="size bgColor2 hoverBg p-3 rounded-lg flex-1">
              <div className="text-center mb-3">
                <span className="divider text-xl md:text-xl px-4 pb-1 font-semibold md:font-bold">
                  Text Size
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-8">
                  <p className="text-sm md:text-lg font-semibold">Arabic</p>
                  <div className="range w-full flex items-center">
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={20}
                      max={30}
                      min={14}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <p className="text-sm md:text-lg font-semibold">Bangla</p>
                  <div className="range w-full flex items-center">
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={20}
                      max={30}
                      min={14}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <p className="text-sm md:text-lg font-semibold">English</p>
                  <div className="range w-full flex items-center">
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={20}
                      max={30}
                      min={14}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="font bgColor2 hoverBg p-3 rounded-lg h-full flex-1">
              <div className="text-center mb-3">
                <span className="divider text-xl md:text-xl px-4 pb-1 font-semibold md:font-bold">
                  Text Size
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <p className="text-sm md:text-lg font-semibold">Tazweed</p>
                  <div>
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      color="success"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <p className="text-sm md:text-lg font-semibold">
                    Arabic Font ( Hafezi )
                  </p>
                  <div>
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      color="success"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolyQuranContainer;
