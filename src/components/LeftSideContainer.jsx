/* eslint-disable no-unused-vars */
import LeftSideSkeleton from "./LeftSideSkeleton";
import ShortSurahContainer from "./ShortSurahContainer";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

import allahIcon from "../media/allah.png";
import { Box } from "@mui/system";
import { Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LeftSideContainer = ({ shortSurahList }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    const sideBar = document.querySelector("#sidebar");
    sideBar.classList.add("transition-all");
    sideBar.classList.add("translate-x-[-130%]");
    sideBar.classList.remove("translate-x-[0%]");
  };

  useEffect(() => {
    const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(deviceTheme.matches);
  }, []);

  useEffect(() => {
    const transitionEle = document.querySelector(".transition-all");
    if (transitionEle) {
      transitionEle.classList.remove("transition-all");
    }
    const holyQuranContainer = document.querySelector("#holyQuran");
    if (darkMode) {
      holyQuranContainer.classList.add("dark");
      holyQuranContainer.classList.remove("light");
    } else {
      holyQuranContainer.classList.add("light");
      holyQuranContainer.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div
      className="mb-2 md:mb-4 lg:mb-2 md:my-0 md:!mt-2 absolute top-0 left-0 md:static h-[99vh] w-[98%] md:w-[inherit] md:h-auto bgColor1 z-[9999] rounded-lg p-3 mx-1 md:mx-0 overflow-hidden pb-1 md:pb-3 translate-x-[-130%] md:translate-x-0"
      id="sidebar"
    >
      <div className="md:hidden bgColor2 mb-3 rounded-lg p-4 py-3 flex items-center justify-between">
        <div className="right scale-[1.4] !z-[99999]">
          <div className="">
            <DarkModeSwitch
              checked={darkMode}
              onChange={toggleDarkMode}
              moonColor="#24889C"
              sunColor="#24889C"
            />
          </div>
        </div>
        <div className="w-24">
          <img src={allahIcon} alt="allah icon" />
        </div>
        <div className="closeIcon">
          <Box component="div" className="">
            <Fab
              aria-label="add"
              size="small"
              className="bgColor2 hoverBg txtColor"
              onClick={toggleSidebar}
            >
              <CloseIcon />
            </Fab>
          </Box>
        </div>
      </div>

      <div className="overflow-y-auto overflow-x-hidden h-[87%] md:h-[100%]">
        {shortSurahList.loading ? (
          <LeftSideSkeleton />
        ) : (
          <ShortSurahContainer surahList={shortSurahList.list.allSurahList} />
        )}
      </div>
    </div>
  );
};

export default LeftSideContainer;
