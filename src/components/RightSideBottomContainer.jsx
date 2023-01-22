import { useRef } from "react";
import Ayah from "./Ayah";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

const RightSideBottomContainer = ({ fullSurah }) => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  return (
    <div className="h-full">
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            scrollToAlignment="start"
            rowHeight={cache.current.rowHeight}
            deferredMeasurementCache={cache.current}
            rowCount={fullSurah.verses.length}
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
                  <div
                    style={{ ...style }}
                    className={`${
                      index === fullSurah.verses.length - 1 ? "pb-0" : "pb-2"
                    }`}
                  >
                    <Ayah ayah={ayah} surahNumber={fullSurah.id} />
                  </div>
                </CellMeasurer>
              );
            }}
          />
        )}
      </AutoSizer>

      {/* {fullSurah?.verses?.map((ayah) => {
        return <Ayah key={ayah.id} ayah={ayah} surahNumber={fullSurah.id} />;
      })} */}
    </div>
  );
};

export default RightSideBottomContainer;
