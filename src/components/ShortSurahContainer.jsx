import ShortSurah from "./ShortSurah";
// import { VariableSizeList as List } from "react-window";
// import { createRef, useEffect, useRef } from "react";
// import { useState } from "react";

const ShortSurahContainer = ({ surahList }) => {
  // const [sideBarHight, setSideBarHight] = useState(0);
  // const refs = useRef(
  //   new Array(surahList.length).fill().map(() => createRef())
  // );

  // useEffect(() => {
  //   refs.current = refs.current.slice(0, surahList.length);
  //   while (refs.current.length < surahList.length) {
  //     refs.current.push(createRef());
  //   }
  //   console.log(refs);
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
          itemSize={({ index }) => refs?.current[index]?.current?.offsetHeight}
        >
          {({ index, style }) => (
            <ShortSurah
              surah={surahList[index]}
              style={style}
              ref={refs.current[index]}
            />
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
