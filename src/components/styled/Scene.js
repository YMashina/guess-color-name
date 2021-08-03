import styled from "styled-components";
import { CUBE_WIDTH } from "../CubeSlider/constants";

const Scene = styled.div`
  width: ${CUBE_WIDTH}rem;
  height: ${CUBE_WIDTH}rem;
  perspective: ${CUBE_WIDTH * 2}rem;
  box-sizing: border-box;
  text-align: center;
  margin: 2rem auto;
`;

export default Scene;
