import TestList from "../styled/TestList";
import TestListItem from "../styled/TestListItem";
import { useEffect, useState } from "react";
import TestItem from "../TestItem/TestItem";
import Label from "../styled/Label";

const Test = ({
  colorNames,
  correctAnswer,
  changeColors,
  testPointsCounter,
}) => {
  useEffect(() => {
    setDisabled(false);
  }, [correctAnswer]);
  const [answerClicked, setAnswerClicked] = useState("");
  const [disabled, setDisabled] = useState(false);
  const clickedAnswerStatus = (name) => {
    //changeColors();
    return name === correctAnswer ? "correct" : "uncorrect";
  };

  const clickedAnswer = (name) => {
    setAnswerClicked(name);
    if (name === correctAnswer) {
      testPointsCounter();
    }
  };

  const clickNext = () => {
    setAnswerClicked("");
    changeColors();
  };

  const settingDisabled = () => {
    setDisabled(true);
  };

  //useEffect(() => {}, [clickedAnswer]);
  return (
    <>
      <TestList>
        {colorNames.map((name, index) => (
          <TestItem
            key={index.toString()}
            name={name}
            status={
              answerClicked.length > 0 ? clickedAnswerStatus(name) : "none"
            }
            clickedAnswer={(name) => clickedAnswer(name)}
            disabled={disabled}
            settingDisabled={settingDisabled}
          />
        ))}
      </TestList>
      {answerClicked.length > 0 ? (
        <Label onClick={clickNext}>NEXT</Label>
      ) : null}
    </>
  );
};

export default Test;
