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
  const [answerClicked, setAnswerClicked] = useState("");
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

  //useEffect(() => {}, [clickedAnswer]);
  return (
    <>
      {answerClicked.length > 0 ? (
        <Label onClick={clickNext}>NEXT</Label>
      ) : null}
      <TestList>
        {colorNames.map((name, index) => (
          <TestItem
            key={index.toString()}
            name={name}
            status={
              answerClicked.length > 0 ? clickedAnswerStatus(name) : "none"
            }
            clickedAnswer={(name) => clickedAnswer(name)}
          />
        ))}
      </TestList>
    </>
  );
};

export default Test;
