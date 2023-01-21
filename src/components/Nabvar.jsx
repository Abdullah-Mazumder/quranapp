import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import logo from "./../media/quranLogo.png";
import bismillah from "../media/bismillah.png";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Nabvar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(deviceTheme.matches);
  }, []);

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
              <div className="flex items-center justify-between mb-1">
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
                <div className="right scale-[1.4] lg:scale-[1.6]">
                  <DarkModeSwitch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    moonColor="#24889C"
                    sunColor="#24889C"
                  />
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
