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

const player1 = {
  health: 10,
  keyPressCount: 0,
};

const player2 = {
  health: 10,
  keyPressCount: 0,
};

// prompt 1 and 2 after this timer should start and record keypresses
const prompts = () => {
  document.querySelector(".prompt-ready").addEventListener("click", () => {
    // toggle Ready? button off
    document.querySelector(".prompt-ready").classList.toggle("hidden");

    // prompts player 1 instruction to pop up, then adds eventlistner that makes it go away on click
    const promptPlayer1Fight = document.querySelector(".prompt-directions");
    promptPlayer1Fight.classList.toggle("hidden");
    promptPlayer1Fight.addEventListener("click", () => {
      promptPlayer1Fight.classList.add("hidden");
    });
  });
};
// prompts();

const keypressTimer1 = () => {
  const beginCountPlayer1 = document.querySelector(".prompt-directions");
  beginCountPlayer1.addEventListener("click", () => {
    const startTimestamp = Date.now();
    const duration = 5000; // 5 seconds

    const countKeyPress = (event) => {
      if (event.key === " ") {
        player1.keyPressCount++;
      }
    };

    document.addEventListener("keydown", countKeyPress);

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const totalTime = currentTime - startTimestamp;

      if (totalTime >= duration) {
        clearInterval(interval);
        console.log(`Number of key presses: ${player1.keyPressCount}`);
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
// keypressTimer1();

const keypressTimer2 = () => {
  const beginCountPlayer2 = document.querySelector(".prompt-directions");
  beginCountPlayer2.addEventListener("click", () => {
    const startTimestamp = Date.now();
    const duration = 5000; // 5 seconds

    const countKeyPress = (event) => {
      if (event.key === " ") {
        player2.keyPressCount++;
      }
    };

    document.addEventListener("keydown", countKeyPress);

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const totalTime = currentTime - startTimestamp;

      if (totalTime >= duration) {
        clearInterval(interval);
        console.log(`Number of key presses: ${player2.keyPressCount}`);
        const promptPlayer2 = document.querySelector(
          ".prompt-directions-player2"
        );
        if (player1.keyPressCount > player2.keyPressCount) {
          player2.health = player2.health - player1.keyPressCount;
          document.querySelector(
            ".player--2"
          ).innerHTML = `Health: ${player2.health}`;
        } else if (player1.keyPressCount === player2.keyPressCount) {
          player1.health = player1.health - player2.keyPressCount;
          player2.health = player2.health - player1.keyPressCount;
          document.querySelector(
            ".player--1"
          ).innerHTML = `Health: ${player1.health}`;
          document.querySelector(
            ".player--2"
          ).innerHTML = `Health: ${player2.health}`;
        } else {
          player1.health = player1.health - player2.keyPressCount;
          document.querySelector(
            ".player--1"
          ).innerHTML = `Health: ${player1.health}`;
        }
        checkHealth();
        document.querySelector(".prompt-directions").classList.toggle("hidden");
      }
    }, 100);
  });
};
// keypressTimer2();

const startPlayer1 = () => {
  prompts();
  keypressTimer1();
};

const startPlayer2 = () => {
  keypressTimer2();
};

startPlayer1();
startPlayer2();

const checkHealth = () => {
  if (player1.health <= 0) {
    console.log(`Player 2 is the winner`);
  } else if (player1.health <= 0 && player2.health <= 0) {
    console.log(`It's a draw, eat healthier`);
  } else if (player2.health <= 0) {
    console.log(`Player 1 is the winner`);
  }
};
