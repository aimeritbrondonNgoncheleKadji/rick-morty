import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div>
      <div className="d-flex flex-wrap gap-3">
        {status.map((item, index) => (
          <FilterBTN
            key={index}
            index={index}
            name="status"
            task={updateStatus}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Status;
