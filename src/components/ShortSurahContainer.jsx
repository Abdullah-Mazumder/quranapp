import ShortSurah from "./ShortSurah";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { useEffect, useRef } from "react";

const ShortSurahContainer = ({
  surahList,
  currentSurahNumber,
  setCurrentSurahNumber,
  toggleSidebar,
  readLater,
}) => {
  const leftSideRef = useRef(null);
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  useEffect(() => {
    if (leftSideRef.current && currentSurahNumber) {
      leftSideRef?.current?.scrollToRow(currentSurahNumber - 1);
    }
  }, [currentSurahNumber]);
  return (
    <div className="space-y-2 w-full h-[100%]">
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={leftSideRef}
            width={width}
            height={height}
            rowHeight={cache.current.rowHeight}
            deferredMeasurementCache={cache.current}
            rowCount={114}
            rowRenderer={({ key, index, style, parent }) => {
              const surah = surahList[index];
              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  <div
                    style={{ ...style, paddingBottom: "7px" }}
                    id={`short-surah-${surah.id}`}
                  >
                    <ShortSurah
                      surah={surah}
                      currentSurahNumber={currentSurahNumber}
                      setCurrentSurahNumber={setCurrentSurahNumber}
                      toggleSidebar={toggleSidebar}
                      readLater={readLater}
                    />
                  </div>
                </CellMeasurer>
              );
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default ShortSurahContainer;
