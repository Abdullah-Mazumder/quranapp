import React from "react";
import Ayah from "./Ayah";

const RightSideBottomContainer = ({ fullSurah }) => {
  return (
    <div className="h-full overflow-y-auto">
      {fullSurah?.verses?.map((ayah) => {
        return <Ayah key={ayah.id} ayah={ayah} surahNumber={fullSurah.id} />;
      })}
    </div>
  );
};

export default RightSideBottomContainer;
