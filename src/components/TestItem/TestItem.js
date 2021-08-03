import TestListItem from "../styled/TestListItem";
import { useRef, useState } from "react";

const TestItem = ({ name, key, status, clickedAnswer }) => {
  const [disableClick, setDisableClick] = useState(false);
  const answerIsClicked = () => {
    setDisableClick(true);
    console.log("clickedAnswer " + name);
    clickedAnswer(name);
  };

  return (
    <TestListItem
      key={key}
      onClick={answerIsClicked}
      disabled={disableClick}
      status={status}
    >
      {name}
    </TestListItem>
  );
};

export default TestItem;
