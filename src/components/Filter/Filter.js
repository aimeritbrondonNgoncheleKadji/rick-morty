import React, { useState } from 'react';
import styled from 'styled-components';
import Species from './category/Species'
import Status from './category/Status'
import Gender from './category/Gender';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['status', 'Gender', 'Species'];
const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  const [active, setActive] = useState(types[0]);

  return (
    <div className="col-12 mb-5">
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <ButtonGroup>
        {types.map(type => (
          <ButtonToggle
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </ButtonToggle>
        ))}
      </ButtonGroup>
      {(() => {
        if (active === "status") {
          return (
            <Status
              updatePageNumber={updatePageNumber}
              updateStatus={updateStatus}
            />
          );
        } else if (active === "Gender") {
          return (
            <Gender
              updatePageNumber={updatePageNumber}
              updateGender={updateGender}
            />
          );
        } else {
          return (
            <Species
              updatePageNumber={updatePageNumber}
              updateSpecies={updateSpecies}
            />
          );
        }
      })()}
    </div>

  );
}

export default Filter;
