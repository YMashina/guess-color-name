const cubeSides = ["front", "right"];

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const randomCubeSide = () => Math.floor(Math.random() * 5);

const CUBE_WIDTH = 20;

const shuffleArray = (array) => {
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

export { cubeSides, randomColor, CUBE_WIDTH, randomCubeSide, shuffleArray };
