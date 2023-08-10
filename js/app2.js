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

const playPlayer1 = () => {};
