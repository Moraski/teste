const myHeading = document.querySelector("h1");
myHeading.textContent = "Olá mundo!"; 
let nome = document.querySelector("p");
document.querySelector("h1").addEventListener("click", function () {
    alert("Ai! Pare de me cutucar!");
  });
  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "castle.jpg") {
    myImage.setAttribute("src", "blea.webp");
    nome.textContent = "Bleach";

  } else {
    myImage.setAttribute("src", "castle.jpg");
    nome.textContent = "Castlevania";
  }
};

let myButton = document.querySelector("button");
let Head3 = document.querySelector("h3");

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    Head3.textContent = `, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} 
else{
  const storedName = localStorage.getItem("name");
  Head3.textContent = `tu nn me é estranho não ${storedName}, já esteve por aqui?? `;
}
myButton.onclick = () => {
  setUserName();
};