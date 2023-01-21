import ShortSurah from "./ShortSurah";

const ShortSurahContainer = ({
  surahList,
  currentSurahNumber,
  setCurrentSurahNumber,
  toggleSidebar,
}) => {
  return (
    <div className="space-y-2 w-full h-full">
      {surahList.map((surah) => {
        return (
          <ShortSurah
            key={surah.id}
            surah={surah}
            currentSurahNumber={currentSurahNumber}
            setCurrentSurahNumber={setCurrentSurahNumber}
            toggleSidebar={toggleSidebar}
          />
        );
      })}
    </div>
  );
};

export default ShortSurahContainer;
