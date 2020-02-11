import GameService from "../Services/GameService.js";
import store from "../store.js";

//Private
function _draw() {
  let gamedata = store.State.gamedata;
  console.log("gamedata from controller", gamedata);
  let template = ""
  template = gamedata.Template;
  document.getElementById("game-data").innerHTML = template;
}

//Public
export default class GameController {
  constructor() {
    store.subscribe("gamedata", _draw);
  }
  getApiGamedata() {
    GameService.getApiGamedata();
  }
}
