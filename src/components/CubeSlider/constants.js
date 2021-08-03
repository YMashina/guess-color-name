const cubeSides = ["front", "right", "left", "top", "bottom", "back"];

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const randomCubeSide = () => Math.floor(Math.random() * 5);

const CUBE_WIDTH = 20;

export { cubeSides, randomColor, CUBE_WIDTH, randomCubeSide };
