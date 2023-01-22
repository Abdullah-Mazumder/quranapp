import ShortSurah from "./ShortSurah";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { useRef } from "react";

const ShortSurahContainer = ({
  surahList,
  currentSurahNumber,
  setCurrentSurahNumber,
  toggleSidebar,
}) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  return (
    <div className="space-y-2 w-full h-[100%]">
      <AutoSizer>
        {({ width, height }) => (
          <List
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
                  <div style={{ ...style, paddingBottom: "5px" }}>
                    <ShortSurah
                      surah={surah}
                      currentSurahNumber={currentSurahNumber}
                      setCurrentSurahNumber={setCurrentSurahNumber}
                      toggleSidebar={toggleSidebar}
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
