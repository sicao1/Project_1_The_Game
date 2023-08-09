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

        // Prompt player 1 ready
        document.querySelector(".prompt-ready").classList.toggle("hidden");
      }
    });
  }
};
chooseFighter();

// linked actions of selecting characters to begin fight on "Ready to Fight?"
// and display instructions

// globally scoped stats
let player1Health = 100;
let player2Health = 100;
let hitPoints;
let keyPressCountPlayer1 = 0;
let keyPressCountPlayer2 = 0;
let playerActive = 1;
let playerNonActive = 2;

const promptPlayer1 = document.querySelector(".prompt-ready");
promptPlayer1.addEventListener("click", () => {
  document.querySelector(".prompt-ready").classList.toggle("hidden");

  const promptPlayer1Fight = document.querySelector(".prompt-directions");
  promptPlayer1Fight.classList.toggle("hidden");
  promptPlayer1Fight.addEventListener("click", () => {
    promptPlayer1Fight.classList.add("hidden");
  });
});

// switch player function
const switchPlayer = () => {
  playerActive = playerActive === 1 ? 2 : 1;
  return playerActive;
};
console.log(playerActive);

// Timed keypresses
const beginCountPlayer1 = document.querySelector(".prompt-directions");
beginCountPlayer1.addEventListener("click", () => {
  const startTimestamp = Date.now();
  const duration = 5000; // 5 seconds

  const countKeyPress = (event) => {
    if (event.key === " ") {
      keyPressCountPlayer1++;
    }
  };

  document.addEventListener("keydown", countKeyPress);

  const interval = setInterval(() => {
    const currentTime = Date.now();
    const totalTime = currentTime - startTimestamp;

    if (totalTime >= duration) {
      clearInterval(interval);
      console.log(`Number of key presses: ${keyPressCountPlayer1}`);
      const promptPlayer2 = document.querySelector(
        ".prompt-directions-player2"
      );
      promptPlayer2.classList.toggle("hidden");
      promptPlayer2.addEventListener("click", () => {
        promptPlayer2.classList.add("hidden");
      });
    }
  }, 100);
});

const beginCountPlayer2 = document.querySelector(".prompt-directions-player2");
beginCountPlayer2.addEventListener("click", () => {
  const startTimestamp = Date.now();
  const duration = 5000;

  const countKeyPress = (event) => {
    if (event.key === " ") {
      keyPressCountPlayer2++;
    }
  };
  document.addEventListener("keydown", countKeyPress);
  const interval = setInterval(() => {
    const currentTime = Date.now();
    const totalTime = currentTime - startTimestamp;

    if (totalTime >= duration) {
      clearInterval(interval);
      console.log(`Number of key presses: ${keyPressCountPlayer2}`);
      keyPressCountPlayer1 = keyPressCountPlayer1 - keyPressCountPlayer2;

      if (keyPressCountPlayer1 > keyPressCountPlayer2) {
        player2Health = player2Health - keyPressCountPlayer1;
        document.querySelector(
          ".player--2"
        ).innerHTML = `Health: ${player2Health}`;
      } else {
        player1Health = player1Health - keyPressCountPlayer2;
        document.querySelector(
          ".player--1"
        ).innerHTML = `Health: ${player1Health}`;
      }
    }
  }, 100);
});
