import store from "../store.js";
import Gamedata from "../Models/Gamedata.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "http://jservice.io/api",
  timeout: 3000
});

class GameService {
  constructor() {
    console.log("GameService constructor loaded");
  }
  getApiGamedata() {
    _api
      .get("random")
      .then(result => {
        // the axios api is returning to the result var, but the data I want is in "data" from jservice.io  or result.data
        console.log("result from game service", result)
        let newGamedata = new Gamedata(result.data[0]);
        console.log("new game data from service", newGamedata)
        store.commit("gamedata", newGamedata);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const service = new GameService();
export default service;
