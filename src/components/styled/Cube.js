import styled from "styled-components";

const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;

  ${(props) => {
    switch (props.showSide) {
      case "front":
        return "transform: translateZ(-100px) rotateY(   0deg);";
      case "right":
        return "transform: translateZ(-100px) rotateY( -90deg);";
      case "back":
        return "transform: translateZ(-100px) rotateY(-180deg);";
      case "left":
        return "transform: translateZ(-100px) rotateY(  90deg);";
      case "top":
        return "transform: translateZ(-100px) rotateX( -90deg);";
      case "bottom":
        return "transform: translateZ(-100px) rotateX(  90deg);";
      default:
        break;
    }
  }}
`;

export default Cube;
