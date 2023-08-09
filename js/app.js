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

        // added prompt to init fighting
        const prompt = document.querySelector(".prompt-ready");
        prompt.classList.toggle("hidden");
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

const startFight = document.querySelector(".prompt-ready");
startFight.addEventListener("click", () => {
  const prompt = document.querySelector(".prompt-ready");
  prompt.classList.toggle("hidden");

  const prompt2 = document.querySelector(".prompt-directions");
  prompt2.classList.toggle("hidden");
  prompt2.addEventListener("click", () => {
    prompt2.classList.add("hidden");
  });
});

// switch player function
const switchPlayer = () => {
  playerActive = playerActive === 1 ? 2 : 1;
  return playerActive;
};
console.log(switchPlayer());

// Timed keypresses
const prompt2 = document.querySelector(".prompt-directions");
prompt2.addEventListener("click", () => {
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
      // console.log((player2Health = player2Health - keyPressCountPlayer1));
      // document.querySelector(
      //   `.player--${playerActive}`
      // ).innerHTML = `Health: ${player2Health}`;
      const prompt3 = document.querySelector(".prompt-directions-player2");
      prompt3.classList.toggle("hidden");
      prompt3.addEventListener("click", () => {
        prompt3.classList.add("hidden");
      });
    }
  }, 100);
});

const prompt3 = document.querySelector(".prompt-directions-player2");
prompt3.addEventListener("click", () => {
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
    }
  });
});
