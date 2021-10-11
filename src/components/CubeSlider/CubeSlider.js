import React, { useEffect, useMemo, useState } from "react";
import CubeFace from "../styled/CubeFace";
import Scene from "../styled/Scene";
import Cube from "../styled/Cube";
import axios from "axios";
import Spinner from "../styled/Spinner";
import { cubeSides, randomColor, shuffleArray } from "./constants";
import Test from "../Test/Test";
import LabelTestPoints from "../styled/LabelTestPoints";
import ConfettiDiv from "../TestItem/styled/ConfettiDiv";

const CubeSlider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [testPoints, setTestPoints] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [changeColorsState, setChangeColorsState] = useState(true);
  const [colors, setColors] = useState([]);
  const [lastCurrentColor, setLastCurrentColor] = useState();
  const [currentShowSide, setShowSide] = useState(0);
  const [lastShowSide, setLastShowSide] = useState(currentShowSide);

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
        if (uniqueColors.length < 3) {
          getColors();
        } else {
          setColors(uniqueColors.slice(0, 3));
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const shuffledColors = useMemo(() => shuffleArray(colors), [colors]);

  useEffect(async () => {
    setShowSide(currentShowSide ? 0 : 1);
    await getColors();
  }, [changeColorsState]);

  const changeColors = () => {
    setLastCurrentColor(getCurrentCubeSideColor());
    setLastShowSide(currentShowSide);
    setChangeColorsState(!changeColorsState);
  };

  const testPointsCounter = () => {
    setTestPoints(testPoints + 1);
  };

  const answersCounter = () => {
    setAnswerCounter(answerCounter + 1);
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

  const correctAnswer = useMemo(
    () => colors[currentShowSide]?.name.value,
    [colors]
  );

  const renderCubeSides = () => {
    return cubeSides.map((side, index) => {
      if (side === cubeSides[lastShowSide]) {
        return <CubeFace rgb={lastCurrentColor} cubeSide={side} />;
      }
      return <CubeFace rgb={colors[index].rgb.value} cubeSide={side} />;
    });
  };

  return (
    <ConfettiDiv>
      <LabelTestPoints>
        Test points: {testPoints}/{answerCounter}
      </LabelTestPoints>
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
        answersCounter={answersCounter}
      />
    </ConfettiDiv>
  );
};

export default CubeSlider;
