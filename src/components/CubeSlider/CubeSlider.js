import React, { useState } from "react";
import CubeFace from "../styled/CubeFace";
import Scene from "../styled/Scene";
import Cube from "../styled/Cube";

const CubeSlider = () => {
  const [showSide, setShowSide] = useState("back");
  const click = () => {
    if (showSide !== "left") setShowSide("left");
    else setShowSide("back");
  };

  useState();

  return (
    <>
      <button onClick={click}>Turn </button>
      <Scene>
        <Cube showSide={showSide}>
          <CubeFace R={"100"} G={"80"} B={"190"} cubeSide={"front"} />
          <CubeFace R={"170"} G={"200"} B={"50"} cubeSide={"right"} />
          <CubeFace R={"170"} G={"200"} B={"50"} cubeSide={"left"} />
          <CubeFace R={"170"} G={"200"} B={"50"} cubeSide={"top"} />
          <CubeFace R={"170"} G={"200"} B={"50"} cubeSide={"bottom"} />
          <CubeFace R={"170"} G={"200"} B={"50"} cubeSide={"back"} />
        </Cube>
      </Scene>
    </>
  );
};

export default CubeSlider;
