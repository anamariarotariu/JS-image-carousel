const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
const imageList = document.querySelectorAll(".image--container img");
const imageNumber = document.querySelector(".image--container--number");
let index = 0;
const defaultText = `${index + 1} / ${imageList.length}`;
imageNumber.innerText = defaultText;

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

  imageNumber.innerText = `${index + 1} / ${imageList.length}`;
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
