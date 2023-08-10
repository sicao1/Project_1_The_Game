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

// LETS FIGHT

// globally scoped stats
let player1Health = 10;
let player2Health = 10;
let hitPoints;
let keyPressCountPlayer1 = 0;
let keyPressCountPlayer2 = 0;
let playerActive = true;
let playerNonActive = 2;

// init prompts and directions for user
const promptPlayer1 = document.querySelector(".prompt-ready");
promptPlayer1.addEventListener("click", () => {
  document.querySelector(".prompt-ready").classList.toggle("hidden");

  const promptPlayer1Fight = document.querySelector(".prompt-directions");
  promptPlayer1Fight.classList.toggle("hidden");
  promptPlayer1Fight.addEventListener("click", () => {
    promptPlayer1Fight.classList.add("hidden");
  });

  // Timed keypresses for Player 1
  const player1 = () => {
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
  };
  // player1();

  // Timed keypresses for Player 2
  // After player 2 turn decrease health accordingly
  const player2 = () => {
    const beginCountPlayer2 = document.querySelector(
      ".prompt-directions-player2"
    );
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
          } else if (keyPressCountPlayer1 === keyPressCountPlayer2) {
            player1Health = player1Health - keyPressCountPlayer2;
            player2Health = player2Health - keyPressCountPlayer1;
            document.querySelector(
              ".player--1"
            ).innerHTML = `Health: ${player1Health}`;
            document.querySelector(
              ".player--2"
            ).innerHTML = `Health: ${player2Health}`;
          } else {
            player1Health = player1Health - keyPressCountPlayer2;
            document.querySelector(
              ".player--1"
            ).innerHTML = `Health: ${player1Health}`;
          }
          checkHealth();
          document
            .querySelector(".prompt-directions")
            .classList.toggle("hidden");
        }
      }, 100);
    });
  };
  // player2();

  player1();
  player2();

  const checkHealth = () => {
    if (player1Health <= 0) {
      console.log(`Player 2 is the winner`);
    } else if (player1Health <= 0 && player2Health <= 0) {
      console.log(`It's a draw, eat healthier`);
    } else if (player2Health <= 0) {
      console.log(`Player 1 is the winner`);
    }
  };
});
