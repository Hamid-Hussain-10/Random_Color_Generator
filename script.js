// let my_bio = {
//   name: "Hamid Hussain",
//   phone_no: 3342354326,
//   marks: 95,
// };

// console.log(my_bio);

let boxes = document.querySelector(".container").children;

function getRandomColor() {
  let value1 = Math.floor(Math.random() * 250);
  let value2 = Math.floor(Math.random() * 250);
  let value3 = Math.floor(Math.random() * 250);
  return `rgb(${value1}, ${value2}, ${value3})`; // Corrected RGB format
}

Array.from(boxes).forEach(e => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});

