import { useEffect, useRef } from "react";
import Ayah from "./Ayah";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

const RightSideBottomContainer = ({
  fullSurah,
  saveToReadLater,
  readLater,
  lastReadedAyah,
  arabicTextSize,
  banglaTextSize,
  englishTextSize,
  enableTazweed,
}) => {
  const ayahRef = useRef();
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  useEffect(() => {
    if (ayahRef.current) {
      ayahRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div
        className={`h-full ${enableTazweed ? "colorTxt" : ""} ${
          fullSurah.verses.length > 15 ? "" : "space-y-2 overflow-y-auto"
        }`}
      >
        {fullSurah.verses.length > 15 ? (
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                scrollToAlignment="start"
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                rowCount={fullSurah.verses.length}
                data={fullSurah.verses}
                scrollToIndex={lastReadedAyah - 1}
                rowRenderer={({ key, index, style, parent }) => {
                  const ayah = fullSurah.verses[index];
                  return (
                    <CellMeasurer
                      key={key}
                      cache={cache.current}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}
                    >
                      <div style={{ ...style, paddingBottom: "7px" }}>
                        <Ayah
                          ayah={ayah}
                          surahNumber={fullSurah.id}
                          saveToReadLater={saveToReadLater}
                          readLater={readLater}
                          lastReadedAyah={lastReadedAyah}
                          ayahRef={ayahRef}
                          arabicTextSize={arabicTextSize}
                          banglaTextSize={banglaTextSize}
                          englishTextSize={englishTextSize}
                        />
                      </div>
                    </CellMeasurer>
                  );
                }}
              />
            )}
          </AutoSizer>
        ) : (
          <>
            {fullSurah.verses.map((vers) => (
              <Ayah
                key={vers.id}
                ayah={vers}
                surahNumber={fullSurah.id}
                saveToReadLater={saveToReadLater}
                readLater={readLater}
                lastReadedAyah={lastReadedAyah}
                ayahRef={ayahRef}
                arabicTextSize={arabicTextSize}
                banglaTextSize={banglaTextSize}
                englishTextSize={englishTextSize}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default RightSideBottomContainer;
