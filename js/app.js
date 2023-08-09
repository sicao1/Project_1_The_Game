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
let playerHealth = 100;
let hitPoints;
let keyPressCount = 0;

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

// Timed keypresses
const prompt2 = document.querySelector(".prompt-directions");
prompt2.addEventListener("click", () => {
  const startTimestamp = Date.now();
  const duration = 5000; // 5 seconds
  let keyPressCount = 0;

  const countKeyPress = (event) => {
    if (event.key === " ") {
      keyPressCount++;
    }
  };

  document.addEventListener("keydown", countKeyPress);

  const interval = setInterval(() => {
    const currentTime = Date.now();
    const totalTime = currentTime - startTimestamp;

    if (totalTime >= duration) {
      clearInterval(interval);
      console.log(`Number of key presses: ${keyPressCount}`);
      console.log((playerHealth = playerHealth - keyPressCount));
      document.querySelector(
        ".player--1"
      ).innerHTML = `Health: ${playerHealth}`;
    }
  }, 100); // Check every 100 milliseconds
});

//Show health and hit points
