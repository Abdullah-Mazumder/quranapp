import ShortSurah from "./ShortSurah";

const ShortSurahContainer = ({ surahList }) => {
  return (
    <div className="space-y-2 w-full h-full">
      {surahList.map((surah) => {
        return <ShortSurah key={surah.id} surah={surah} />;
      })}
    </div>
  );
};

export default ShortSurahContainer;
