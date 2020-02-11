import GameService from "../Services/GameService.js";
import store from "../store.js";

let categoryElem = document.getElementById("category");
let valueElem = document.getElementById("value");
let questionElem = document.getElementById("question");
let answerElem = document.getElementById("answer");
let scoreElem = document.getElementById("score");
//Private
function _draw() {
  let currData = store.State.gamedata;
  console.log("gamedata from controller", currData);
  categoryElem.innerText = currData.category;
  valueElem.innerText = currData.value.toString();
  questionElem.innerText = currData.question;
  answerElem.innerText = currData.answer;
  answerElem.style.visibility = "hidden";
  // categoryElem.innerText = currData.category;


}

//Public
export default class GameController {
  constructor() {
    store.subscribe("gamedata", _draw);
  }
  getApiGamedata() {
    GameService.getApiGamedata();
  }
  showAnswer() {
    console.log("showAnswer method called");
    if (answerElem.style.visibility == "hidden") {
      answerElem.style.visibility = "visible";
    } else {
      answerElem.style.visibility = "hidden";
    }
    // _draw();
  }
}
