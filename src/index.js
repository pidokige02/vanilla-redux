import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// below is a function
// count = 0 means if count is undefined, count defaul is 0
const countModifier = (count = 0) => {
  return count;
  // return "Hello" // getState () return "Hello".
}

// put reducer as param, when cretaStore is called.
const countStore = createStore(countModifier);

console.log(countStore.getState());