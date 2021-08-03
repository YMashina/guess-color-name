import TestListItem from "../styled/TestListItem";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { confettiConfig } from "../CubeSlider/constants";

const TestItem = ({
  name,
  key,
  status,
  clickedAnswer,
  settingDisabled,
  disabled,
  correctAnswer,
}) => {
  const [confetti, setConfetti] = useState(false);
  const answerIsClicked = () => {
    if (name === correctAnswer) {
      setConfetti(true);
    }
    settingDisabled();
    //console.log("clickedAnswer " + name);
    clickedAnswer(name);
  };

  useEffect(() => {
    setConfetti(false);
  }, [correctAnswer]);

  return (
    <>
      <TestListItem
        key={key}
        onClick={answerIsClicked}
        status={status}
        disabled={disabled}
      >
        <Confetti active={confetti} config={confettiConfig} />
        {name}
      </TestListItem>
    </>
  );
};

export default TestItem;
