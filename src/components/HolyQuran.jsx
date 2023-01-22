import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import HolyQuranContainer from "./HolyQuranContainer";
import TopNavbar from "./TopNavbar";

const HolyQuran = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    localStorage.setItem("isShowedQuranModal", JSON.stringify(true));
    setModalOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("isShowedQuranModal")) {
        setModalOpen(true);
      }
    }, 3000);
  }, []);
  return (
    <div className="holyQuran" id="holyQuran">
      <TopNavbar />
      <HolyQuranContainer />
      {modalOpen && (
        <div
          className="modal absolute w-screen h-screen flex items-center justify-center top-0 left-0 !z-[99999]"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="dialog bgColor2 txtColor max-w-[350px] p-5 rounded-sm m-2 md:m-0">
            <div className="title divider">
              <Box component={"p"} className="text-xl mb-1 font-semibold">
                Browser Compatibility
              </Box>
            </div>
            <div className="content my-1 mb-2">
              For optimal performance and a seamless browsing experience, it is
              recommended to use the latest version of popular browsers such as
              Chrome, Firefox, Safari, and Edge.
            </div>
            <div className="bottom flex justify-center mt-3">
              <Button
                size="small"
                variant="contained"
                onClick={() => handleModal()}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolyQuran;
