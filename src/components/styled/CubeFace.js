import styled from "styled-components";
import { CUBE_WIDTH } from "../CubeSlider/constants";

const CubeFace = styled.div`
  position: absolute;
  width: ${CUBE_WIDTH}rem;
  height: ${CUBE_WIDTH}rem;
  line-height: ${CUBE_WIDTH}rem;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: ${(props) => props.rgb};

  ${(props) => {
    switch (props.cubeSide) {
      case "front":
        return `transform: rotateY( 0deg) translateZ(${CUBE_WIDTH / 2}rem);`;
      case "right":
        return `transform: rotateY( 90deg) translateZ(${CUBE_WIDTH / 2}rem);`;
      case "back":
        return `transform: rotateY(180deg) translateZ(${CUBE_WIDTH / 2}rem);`;
      case "left":
        return `transform: rotateY(-90deg) translateZ(${CUBE_WIDTH / 2}rem);`;
      case "top":
        return `transform: rotateX( 90deg) translateZ(${CUBE_WIDTH / 2}rem);`;
      case "bottom":
        return `transform: rotateX(-90deg) translateZ(${CUBE_WIDTH / 2}rem);`;
      default:
        break;
    }
  }}
`;

export default CubeFace;
