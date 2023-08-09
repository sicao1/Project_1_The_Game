// Choose your fighter, cycle through choices and select one
const imagePairTags = [
  ["#McDonalds", "#select-McDonalds"],
  ["#InNOut", "#select-InNOut"],
  ["#PandaExpress", "#select-PandaExpress"],
  ["#Popeyes", "#select-popeyes"],
  ["#Wendys", "#select-wendys"],
  ["#BurgerKing", "#select-burgerKing"],
  ["#KFC", "#select-kfc"],
  ["#Mark", "#select-wahlburgers"],
  ["#Chipotle", "#select-chipotle"],
  ["#TacoBell", "#select-tacoBell"],
];
const chooseFighter = () => {
  let clicked = false;

  for (const [imageSelection, targetSelection] of imagePairTags) {
    const image = document.querySelector(imageSelection);
    const showImage = document.querySelector(targetSelection);

    image.addEventListener("mouseover", function () {
      if (!clicked) {
        showImage.classList.toggle("hidden");
      }
    });
    image.addEventListener("mouseout", function () {
      if (!clicked) {
        showImage.classList.toggle("hidden");
      }
    });
    image.addEventListener("click", function () {
      if (!clicked) {
        showImage.classList.remove("hidden");
        console.log(showImage);
        clicked = true;
        chooseFighter2();
      }
    });
  }
};

const imagePairTags2 = [
  ["#McDonalds", "#select-McDonalds2"],
  ["#InNOut", "#select-InNOut2"],
  ["#PandaExpress", "#select-PandaExpress2"],
  ["#Popeyes", "#select-popeyes2"],
  ["#Wendys", "#select-wendys2"],
  ["#BurgerKing", "#select-burgerKing2"],
  ["#KFC", "#select-kfc2"],
  ["#Mark", "#select-wahlburgers2"],
  ["#Chipotle", "#select-chipotle2"],
  ["#TacoBell", "#select-tacoBell2"],
];

const chooseFighter2 = () => {
  let clicked = false;

  for (const [imageSelection, targetSelection] of imagePairTags2) {
    const image = document.querySelector(imageSelection);
    const showImage = document.querySelector(targetSelection);

    image.addEventListener("mouseover", function () {
      if (!clicked) {
        showImage.classList.add("hidden");
        showImage.classList.remove("hidden");
      }
    });
    image.addEventListener("mouseout", function () {
      if (!clicked) {
        showImage.classList.toggle("hidden");
      }
    });
    image.addEventListener("click", function () {
      if (!clicked) {
        showImage.classList.remove("hidden");
        clicked = true;
        console.log(showImage);

        // Add prompt here to init the series of Prompts to start fight
        document.querySelector(".prompt-ready").classList.toggle("hidden");
      }
    });
  }
};
chooseFighter();

// LET THE FIGHTING BEGIN

// globally scoped stats
let player1Health = 100;
let player2Health = 100;
let hitPoints;
let keyPressCountPlayer0 = 0;
let keyPressCountPlayer1 = 0;
let playerActive = 0;
let keyPressCountPlayer = [0, 0];

// switch player function
const switchPlayer = () => {
  playerActive = playerActive === 0 ? 1 : 0;
  return playerActive;
};

// Display start prompts and instructions for player 1
const starterPrompt = document.querySelector(".prompt-ready");
starterPrompt.addEventListener("click", () => {
  document.querySelector(".prompt-ready").classList.toggle("hidden");

  const promptPlayer1 = document.querySelector(".prompt-directions");
  promptPlayer1.classList.toggle("hidden");
  promptPlayer1.addEventListener("click", () => {
    promptPlayer1.classList.add("hidden");
  });
});

// Game Logic & Timed keypresses
const timedKeyPress = () => {
  const startTimestamp = Date.now();
  const duration = 5000; // 5 seconds

  const countKeyPress = (event) => {
    if (event.key === " ") {
      keyPressCountPlayer[playerActive]++;
    }
  };

  document.addEventListener("keydown", countKeyPress);

  const interval = setInterval(() => {
    const currentTime = Date.now();
    const totalTime = currentTime - startTimestamp;

    if (totalTime >= duration) {
      clearInterval(interval);
      if (playerActive === 1) {
        console.log(
          `Number of key presses: ${keyPressCountPlayer[playerActive] / 2}`
        );
      } else {
        console.log(
          `Number of key presses: ${keyPressCountPlayer[playerActive]}`
        );
      }
      if (playerActive === 0) {
        const promptPlayer2 = document.querySelector(
          ".prompt-directions-player2"
        );
        promptPlayer2.classList.toggle("hidden");
        promptPlayer2.addEventListener("click", () => {
          promptPlayer2.classList.add("hidden");
        });
      }
    }
  }, 100);
};
console.log(playerActive);
// First occurance of Figther 1 collecting keypresses
document.querySelector(".prompt-directions").addEventListener("click", () => {
  timedKeyPress();
});

// First occurance of Fighter 2 collecting keypresses
document
  .querySelector(".prompt-directions-player2")
  .addEventListener("click", () => {
    switchPlayer();
    timedKeyPress();
  });
