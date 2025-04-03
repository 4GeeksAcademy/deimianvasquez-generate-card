import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  const cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suitAll = ["♦", "♥", "♠", "♣"]

  const card = document.createElement("div")
  const number = document.createElement("p")
  const suitTop = document.createElement("div")
  const suitTopSpan = document.createElement("span")
  const suitBottom = document.createElement("p")
  const suitBottomSpan = document.createElement("span")

  const root = document.querySelector("#root")
  root.classList.add("root-container")

  const selectedSuit = suitAll[Math.floor(Math.random() * suitAll.length)]

  suitTopSpan.innerHTML = selectedSuit
  number.innerHTML = cardNumber[Math.floor(Math.random() * cardNumber.length)]
  suitBottomSpan.innerHTML = selectedSuit

  suitTop.classList.add("suit")
  suitBottom.classList.add("suit", "suit-bottom")
  number.classList.add("number")

  if (selectedSuit == "♥" || selectedSuit == "♦") {
    suitBottom.classList.add("seleted-red")
    suitTop.classList.add("seleted-red")
    number.classList.add("seleted-red")
  }

  root.appendChild(card)
  card.classList.add("card")
  card.appendChild(suitTop)
  suitTop.appendChild(suitTopSpan)
  card.appendChild(number)
  card.appendChild(suitBottom)
  suitBottom.appendChild(suitBottomSpan)


  const buttonRefresh = document.createElement("button")
  root.appendChild(buttonRefresh)
  buttonRefresh.textContent = "Refresh"
  buttonRefresh.classList.add("btn", "btn-secondary", "mt-5")
  buttonRefresh.addEventListener("click", ()=>{
    window.location.reload()
  })
};
