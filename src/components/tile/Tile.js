import React from "react";

export const Tile = ({ value, index }) => {
  const arr = Object.values(value);

  return (
    <div className="tile-container">
      {arr.map((val, i) => {
        if (i === 0) {
          return (
            <p className="tile-title" key={`${index}.${i}`}>
              {val}
            </p>
          );
        } else {
          return (
            <p className="tile" key={`${index}.${i}`}>
              {val}
            </p>
          );
        }
      })}
    </div>
  );
};
