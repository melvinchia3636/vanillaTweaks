import React from "react";
import { Icon } from "@iconify/react";

function VersionSelector({
  version,
  setVersion,
  versionCount,
  versionStart,
}: {
  version: number;
  setVersion: (_version: number) => void;
  versionCount: number;
  versionStart: number;
}) {
  return (
    <div className="flex items-center text-white gap-2">
      <button
        type="button"
        onClick={() => version > versionStart && setVersion(version - 1)}
      >
        <Icon icon="uil:angle-left" className="text-2xl" />
      </button>
      <div className="hidden lgxl:flex items-center gap-2">
        {Array(versionCount)
          .fill(0)
          .map((_, i) => (
            <>
              {i > 0 && <span className="text-lg font-medium">/</span>}
              <button
                type="button"
                onClick={() => setVersion(i + versionStart)}
                className={`text-lg tracking-wider after:absolute after:border-b-2 after:border-b-[#E99743] after:-bottom-0.5 after:shadow-md after:left-1/2 after:-translate-x-1/2 after:transition-all relative drop-shadow-md transition-all after:rounded-md after:w-0 ${
                  version === i + versionStart && "after:!w-1/2 !text-[1.6rem]"
                }`}
              >
                1.
                {i + versionStart}
              </button>
            </>
          ))}
      </div>
      <div className="text-[1.6rem] tracking-wider block lgxl:!hidden">
        1.{version}
      </div>
      <button
        type="button"
        onClick={() =>
          version < versionStart + versionCount - 1 && setVersion(version + 1)
        }
      >
        <Icon icon="uil:angle-right" className="text-2xl" />
      </button>
    </div>
  );
}

export default VersionSelector;
