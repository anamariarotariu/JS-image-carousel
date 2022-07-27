const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
const imageList = document.querySelectorAll("#imgs img");
let index = 0;

// change the index of the picture and display only the image with the specific index

function switchImage() {
  if (index > imageList.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imageList.length - 1;
  }
  for (let i = 0; i < imageList.length; i++) {
    imageList[i].style.display = "none";
  }
  imageList[index].style.display = "block";
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
