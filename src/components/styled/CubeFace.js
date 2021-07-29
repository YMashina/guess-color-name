import styled from "styled-components";

const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;

  background: rgb(
    ${(props) => props.R},
    ${(props) => props.G},
    ${(props) => props.B}
  );

  ${(props) => {
    switch (props.cubeSide) {
      case "front":
        return "transform: rotateY( 0deg) translateZ(100px);";
      case "right":
        return "transform: rotateY( 90deg) translateZ(100px);";
      case "back":
        return "transform: rotateY(180deg) translateZ(100px);";
      case "left":
        return "transform: rotateY(-90deg) translateZ(100px);";
      case "top":
        return "transform: rotateX( 90deg) translateZ(100px);";
      case "bottom":
        return "transform: rotateX(-90deg) translateZ(100px);";
      default:
        break;
    }
  }}
`;

export default CubeFace;
