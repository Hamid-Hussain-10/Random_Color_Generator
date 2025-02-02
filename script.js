let my_bio = {
  name: "Hamid Hussain",
  phone_no: 3342354326,
  marks: 95,
};
console.log(my_bio);

let boxes = document.querySelector(".container").children;

function getRandomColor() {
  let value1 = Math.floor(Math.random() * 256);
  let value2 = Math.floor(Math.random() * 256);
  let value3 = Math.floor(Math.random() * 256);
  return `rgb(${value1}, ${value2}, ${value3})`;
}

function changeColors() {
  Array.from(boxes).forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.style.color = getRandomColor();
  });
}

setInterval(changeColors, 3000);

function changeText() {
  document.getElementById("demo").innerText = "Hello, Guuuys!";
}
