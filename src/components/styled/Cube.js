import styled from "styled-components";
import { CUBE_WIDTH } from "../CubeSlider/constants";

const Cube = styled.div`
  margin-top: 1rem;
  width: ${CUBE_WIDTH}rem;
  height: ${CUBE_WIDTH}rem;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;

  ${(props) => {
    switch (props.showSide) {
      case "front":
        return `transform: translateZ(-${CUBE_WIDTH / 2}rem) rotateY(   0deg);`;
      case "right":
        return `transform: translateZ(-${CUBE_WIDTH / 2}rem) rotateY( -90deg);`;
      case "back":
        return `transform: translateZ(-${CUBE_WIDTH / 2}rem) rotateY(-180deg);`;
      case "left":
        return `transform: translateZ(-${CUBE_WIDTH / 2}rem) rotateY(  90deg);`;
      case "top":
        return `transform: translateZ(-${CUBE_WIDTH / 2}rem) rotateX( -90deg);`;
      case "bottom":
        return `transform: translateZ(-${CUBE_WIDTH / 2}rem) rotateX(  90deg);`;
      default:
        break;
    }
  }}
`;

export default Cube;
