const images = [
  "bgimg1.jpg",
  "bgimg2.jpg",
  "bgimg3.jpg",
  "bgimg4.jpg",
  "bgimg5.jpg",
];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);
