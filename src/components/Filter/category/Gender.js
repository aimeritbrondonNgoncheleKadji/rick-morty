import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div>
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => {
            return (
              <FilterBTN
                name="gender"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateGender}
                input={items}
              />
            );
          })}
        </div>
    </div>
  );
};

export default Gender;
