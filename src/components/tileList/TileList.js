import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ object }) => {
  return (
    <div>
      {object.map((val, index) => {
        return <Tile value={val} index={index} key={index} />;
      })}
    </div>
  );
};
