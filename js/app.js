const image = document.querySelector("#McDonalds");
const showImage = document.querySelector("#select-McDonalds");

image.addEventListener("mouseover", function () {
  showImage.classList.toggle("hidden");
});
image.addEventListener("mouseout", function () {
  showImage.classList.toggle("hidden");
});

const image2 = document.querySelector("#InNOut");
const showImage2 = document.querySelector("#select-InNOut");

image2.addEventListener("mouseover", function () {
  showImage2.classList.toggle("hidden");
});
image2.addEventListener("mouseout", function () {
  showImage2.classList.toggle("hidden");
});
