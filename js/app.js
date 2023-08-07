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

for (const [imageSelection, targetSelection] of imagePairTags) {
  const image = document.querySelector(imageSelection);
  const showImage = document.querySelector(targetSelection);

  image.addEventListener("mouseover", function () {
    showImage.classList.toggle("hidden");
  });
  image.addEventListener("mouseout", function () {
    showImage.classList.toggle("hidden");
  });
}

// const image = document.querySelector("#McDonalds");

// const showImage = document.querySelector("#select-McDonalds");

// const image2 = document.querySelector("#InNOut");
// const showImage2 = document.querySelector("#select-InNOut");

// image2.addEventListener("mouseover", function () {
//   showImage2.classList.toggle("hidden");
// });
// image2.addEventListener("mouseout", function () {
//   showImage2.classList.toggle("hidden");
// });
