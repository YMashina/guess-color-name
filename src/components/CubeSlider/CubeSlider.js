import React, { useEffect, useState } from "react";
import CubeFace from "../styled/CubeFace";
import Scene from "../styled/Scene";
import Cube from "../styled/Cube";
import axios from "axios";
import { Spinner } from "grommet";
import { cubeSides, randomColor, shuffleArray } from "./constants";
import Test from "../Test/Test";
import LabelTestPoints from "../styled/LabelTestPoints";

const CubeSlider = () => {
  let correctAnswer = "";
  const [currentShowSide, setShowSide] = useState(0);
  const [lastShowSide, setLastShowSide] = useState(currentShowSide);
  const [isLoading, setIsloading] = useState(true);
  const [testPoints, setTestPoints] = useState(0);
  const [changeColorsState, setChangeColorsState] = useState(true);
  const [colors, setColors] = useState([]);
  const [lastCurrentColor, setLastCurrentColor] = useState();
  const [shuffledColors, setShuffledColors] = useState([]);

  const getColors = async () => {
    await axios
      .get(
        `https://www.thecolorapi.com/scheme?hex=${randomColor()}&mode=analogic&count=7`
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
          setColors(uniqueColors.slice(0, 3));
          setShuffledColors(shuffleArray(uniqueColors.slice(0, 3)));
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setShowSide(currentShowSide ? 0 : 1);

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
      if (side === cubeSides[currentShowSide]) {
        color = colors[colorIndex].rgb.value;
      }
    });
    return color;
  };

  const renderCubeSides = () => {
    let renderSides = cubeSides.map((side, index) => {
      if (side === cubeSides[currentShowSide]) {
        correctAnswer = colors[index].name.value;
      }
      if (side === cubeSides[lastShowSide]) {
        return <CubeFace rgb={lastCurrentColor} cubeSide={side} />;
      }
      return <CubeFace rgb={colors[index].rgb.value} cubeSide={side} />;
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
          <Cube showSide={cubeSides[currentShowSide]}>{renderCubeSides()}</Cube>
        </Scene>
      )}
      <Test
        colorNames={shuffledColors.map((color) => color.name.value)}
        correctAnswer={correctAnswer}
        changeColors={changeColors}
        testPointsCounter={testPointsCounter}
      />
    </div>
  );
};

export default CubeSlider;
