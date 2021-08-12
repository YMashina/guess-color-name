import Confetti from "react-dom-confetti";

const cubeSides = ["front", "right"];

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const randomCubeSide = () => Math.floor(Math.random() * 5);

const CUBE_WIDTH = 20;

const shuffleArray = (arrayToShuffle) => {
  const array = [...arrayToShuffle];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const confettiConfig = {
  angle: "0",
  spread: "353",
  startVelocity: "53",
  elementCount: 70,
  dragFriction: "0.23",
  duration: 3000,
  stagger: 3,
  width: "6px",
  height: "11px",
  perspective: "695px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export {
  cubeSides,
  randomColor,
  CUBE_WIDTH,
  randomCubeSide,
  shuffleArray,
  confettiConfig,
};
