const imagesContainer = document.querySelector("#imgs");
const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
const imageList = document.querySelectorAll("#imgs img");
let index = 0;

// change the index of the picture and translate value for the next image

function switchImage() {
  if (index > imageList.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imageList.length - 1;
  }
  imagesContainer.style.transform = `translateX(${-index * 500}px)`;
}

// event listener on buttons

prevBtn.addEventListener("click", () => {
  index--;
  switchImage();
});
nextBtn.addEventListener("click", () => {
  index++;
  switchImage();
});
