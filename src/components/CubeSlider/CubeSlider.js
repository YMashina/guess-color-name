import React, { useEffect, useState } from "react";
import CubeFace from "../styled/CubeFace";
import Scene from "../styled/Scene";
import Cube from "../styled/Cube";
import axios from "axios";
import { Spinner } from "grommet";
import { cubeSides, randomColor, randomCubeSide } from "./constants";
import Test from "../Test/Test";
import LabelTestPoints from "../styled/LabelTestPoints";

const CubeSlider = () => {
  let correctAnswer = "";
  const [currentShowSide, setShowSide] = useState(cubeSides[randomCubeSide()]);
  const [lastShowSide, setLastShowSide] = useState(currentShowSide);
  const [isLoading, setIsloading] = useState(true);
  const [testPoints, setTestPoints] = useState(0);
  const [changeColorsState, setChangeColorsState] = useState(true);
  const [colors, setColors] = useState([]);
  const [lastCurrentColor, setLastCurrentColor] = useState();

  const getColors = async () => {
    await axios
      .get(
        `https://www.thecolorapi.com/scheme?hex=${randomColor()}&mode=analogic&count=4`
      )
      .then((response) => {
        const uniqueColors = [
          ...new Map(
            response.data.colors.map((color) => [color.name.value, color])
          ).values(),
        ];
        if (uniqueColors.length < 2) {
          getColors();
        } else {
          setColors(uniqueColors);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    let newShowSide = cubeSides[randomCubeSide()];
    while (newShowSide === lastShowSide)
      newShowSide = cubeSides[randomCubeSide()];
    setShowSide(newShowSide);

    getColors().then(() => {
      setIsloading(false);
    });
  }, [changeColorsState]);

  const changeColors = () => {
    setLastCurrentColor(getCurrentCubeSideColor());
    setLastShowSide(currentShowSide);
    setChangeColorsState(!changeColorsState);
  };

  const testPointsCounter = () => {
    setTestPoints(testPoints + 1);
  };

  const getCurrentCubeSideColor = () => {
    let color = "";
    cubeSides.forEach((side, index) => {
      let colorIndex = index;
      if (colorIndex > colors.length - 1) {
        colorIndex = 0;
      }
      if (side === currentShowSide) {
        color = colors[colorIndex].rgb.value;
      }
    });
    return color;
  };

  const renderCubeSides = () => {
    let renderSides = cubeSides.map((side, index) => {
      let colorIndex = index;
      if (colorIndex > colors.length - 1) {
        colorIndex = 0;
      }

      if (side === currentShowSide) {
        correctAnswer = colors[colorIndex].name.value;
      }
      if (side === lastShowSide) {
        return <CubeFace rgb={lastCurrentColor} cubeSide={side} />;
      }
      return <CubeFace rgb={colors[colorIndex].rgb.value} cubeSide={side} />;
    });
    return renderSides;
  };

  return (
    <div>
      <LabelTestPoints>Test points: {testPoints}</LabelTestPoints>
      {isLoading ? (
        <Spinner />
      ) : (
        <Scene>
          <Cube showSide={currentShowSide}>{renderCubeSides()}</Cube>
        </Scene>
      )}
      <Test
        colorNames={colors.map((color) => color.name.value)}
        correctAnswer={correctAnswer}
        changeColors={changeColors}
        testPointsCounter={testPointsCounter}
      />
    </div>
  );
};

export default CubeSlider;
