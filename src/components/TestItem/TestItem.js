import TestListItem from "../styled/TestListItem";
import { useEffect, useRef, useState } from "react";

const TestItem = ({
  name,
  key,
  status,
  clickedAnswer,
  settingDisabled,
  disabled,
}) => {
  const answerIsClicked = () => {
    settingDisabled();
    //console.log("clickedAnswer " + name);
    clickedAnswer(name);
  };

  return (
    <TestListItem
      key={key}
      onClick={answerIsClicked}
      status={status}
      disabled={disabled}
    >
      {name}
    </TestListItem>
  );
};

export default TestItem;
