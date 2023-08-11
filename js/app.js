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
        showImage.classList.remove("hidden");
      }
    });
    image.addEventListener("mouseout", function () {
      if (!clicked) {
        showImage.classList.add("hidden");
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
        showImage.classList.remove("hidden");
      }
    });
    image.addEventListener("mouseout", function () {
      if (!clicked) {
        showImage.classList.add("hidden");
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

// Create a function to handle timed keypresses for players
// start timer function
const timedKeyPresses = (player, duration, elementToShowNext) => {
  let keyPressCount = 0;
  let startTimestamp = Date.now();
  let interval;

  // record keypress function
  const countKeyPress = (event) => {
    if (event.key === " ") {
      keyPressCount++;
      console.log(`Player ${player} key presses: ${keyPressCount}`);
    }
  };

  document.addEventListener("keydown", countKeyPress);

  // stop timer function
  interval = setInterval(() => {
    const currentTime = Date.now();
    const totalTime = currentTime - startTimestamp;

    // when the 5 second timer is up
    if (totalTime >= duration) {
      clearInterval(interval);
      // troubleshoot the double ++ due to eventlistener doubling up
      document.removeEventListener("keydown", countKeyPress);

      console.log(`Player ${player} ended with key presses: ${keyPressCount}`);

      if (player === 1) {
        player1.keyPressCount = keyPressCount;
      } else if (player === 2) {
        player2.keyPressCount = keyPressCount;
      }

      elementToShowNext.classList.remove("hidden");
    }
  }, 100);
};

const player1 = {
  health: 10,
  keyPressCount: 0,
};

const player2 = {
  health: 10,
  keyPressCount: 0,
};

// init prompts and directions for user
const promptPlayer1 = document.querySelector(".prompt-ready");
const promptPlayer2 = document.querySelector(".prompt-directions-player2");

promptPlayer1.addEventListener("click", () => {
  promptPlayer1.classList.toggle("hidden");
  const promptPlayer1Fight = document.querySelector(".prompt-directions");
  promptPlayer1Fight.classList.toggle("hidden");
  promptPlayer1Fight.addEventListener("click", () => {
    promptPlayer1Fight.classList.add("hidden");
    timedKeyPresses(1, 5000, promptPlayer2);
    results();
  });
});

// Timed keypresses for Player 2
// After player 2 turn decrease health accordingly
const startPlayer2 = () => {
  const beginCountPlayer2 = document.querySelector(
    ".prompt-directions-player2"
  );
  beginCountPlayer2.addEventListener("click", () => {
    beginCountPlayer2.classList.add("hidden");
    timedKeyPresses(2, 5000, document.querySelector(".prompt-directions"));
  });
};

const results = () => {
  if (player1.keyPressCount > player2.keyPressCount) {
    player2.health -= player1.keyPressCount;
    document.querySelector(
      ".player--2"
    ).innerHTML = `Health: ${player2.health}`;
  } else if (player1.keyPressCount === player2.keyPressCount) {
    player1.health -= player2.keyPressCount;
    player2.health -= player1.keyPressCount;
    document.querySelector(
      ".player--1"
    ).innerHTML = `Health: ${player1.health}`;
    document.querySelector(
      ".player--2"
    ).innerHTML = `Health: ${player2.health}`;
  } else {
    player1.health -= player2.keyPressCount;
    document.querySelector(
      ".player--1"
    ).innerHTML = `Health: ${player1.health}`;
  }
  checkHealth();
};

const checkHealth = () => {
  if (player1.health <= 0) {
    console.log(`Player 2 is the winner`);
  } else if (player2.health <= 0) {
    console.log(`Player 1 is the winner`);
  } else if (player1.health <= 0 && player2.health <= 0) {
    console.log(`It's a draw, eat healthier`);
  }
};

startPlayer2();
