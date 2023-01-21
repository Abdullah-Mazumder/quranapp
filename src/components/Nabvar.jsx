import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import logo from "./../media/quranLogo.png";
import bismillah from "../media/bismillah.png";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Fab } from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

const Nabvar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(deviceTheme.matches);
  }, []);

  const toggleSidebar = () => {
    const sideBar = document.querySelector("#sidebar");
    if (sideBar.classList.contains("translate-x-[-130%]")) {
      sideBar.classList.add("transition-all");
      sideBar.classList.remove("translate-x-[-130%]");
      sideBar.classList.add("translate-x-[0%]");
    } else {
      sideBar.classList.add("transition-all");
      sideBar.classList.add("translate-x-[-130%]");
      sideBar.classList.remove("translate-x-[0%]");
    }
  };

  useEffect(() => {
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
    <>
      <Box sx={{ flexGrow: 1, zIndex: "999" }}>
        <AppBar
          position="fixed"
          className="bgColor1 flex justify-center"
          sx={{ height: "60px" }}
        >
          <Toolbar variant="dense">
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <div className="logo">
                  <img src={logo} alt="quran" className="w-11 md:w-14" />
                </div>
                <div className="w-60 flex justify-center">
                  <img
                    src={bismillah}
                    alt="bismillah"
                    className="bismillahImg w-32 md:w-auto"
                  />
                </div>
                <div className="right scale-[1.6] hidden md:block mr-3">
                  <DarkModeSwitch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    moonColor="#24889C"
                    sunColor="#24889C"
                  />
                </div>
                <div className="right md:hidden">
                  <Box component="div" className="">
                    <Fab
                      aria-label="add"
                      size="small"
                      className="bgColor2 hoverBg txtColor"
                      onClick={toggleSidebar}
                    >
                      <MenuBookTwoToneIcon
                        fontSize="inherit"
                        className="txtColor"
                      />
                    </Fab>
                  </Box>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nabvar;
