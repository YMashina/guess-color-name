import styled from "styled-components";

const TestListItem = styled.li`
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  word-wrap: break-word;
  border: 0.1rem #9e9e9e solid;
  padding: 1rem 1.5rem;
  text-align: center;

  &:first-child {
    margin-top: 1rem;
    border-radius: 5px 5px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 5px 5px;
  }
  &:not(first-child):not(last-child) {
    margin: -1px 0px;
  }
  &:hover {
    ${(props) => {
      if (props.status === "none") return "background: #e6e6e6;";
      else return "";
    }}
    cursor: pointer;
  }

  ${(props) => {
    switch (props.status) {
      case "correct":
        return "background: #baffcd";
      case "uncorrect":
        return "background: #ffbaba";
      default:
        return "background: none";
    }
  }}
`;

export default TestListItem;
