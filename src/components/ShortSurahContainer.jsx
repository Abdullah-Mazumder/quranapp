import ShortSurah from "./ShortSurah";
// import { FixedSizeList as List } from "react-window";
// import { useEffect } from "react";
// import { useState } from "react";

const ShortSurahContainer = ({ surahList }) => {
  // const [sideBarHight, setSideBarHight] = useState(0);
  // const [childHeights, setChildHeights] = useState([]);

  // useEffect(() => {
  //   let childElements = document.getElementsByClassName("short-surah");
  //   childElements = [...childElements];

  //   const newChildHeights = childElements?.map((child) => child.offsetHeight);
  //   setChildHeights(newChildHeights);
  // }, [surahList]);

  // useEffect(() => {
  //   const sideBarHight = document.querySelector("#sidebar").offsetHeight;
  //   setSideBarHight(sideBarHight);
  // }, []);
  return (
    <div className="space-y-2 w-full h-full">
      {/* {sideBarHight && (
        <List
          height={sideBarHight}
          width={"100%"}
          itemCount={surahList.length}
          itemSize={60}
        >
          {({ index, style }) => (
            <ShortSurah surah={surahList[index]} style={style} />
          )}
        </List>
      )} */}

      {surahList.map((surah) => {
        return <ShortSurah key={surah.id} surah={surah} />;
      })}
    </div>
  );
};

export default ShortSurahContainer;
