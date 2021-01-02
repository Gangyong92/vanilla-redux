import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    // 초기화 루틴. ADD, MINUS가 없을 거니까.
    return count;
  }
};
const countStore = createStore(countModifier);

// 초기화 될때는 subscribe에 연결 전이기 때문에 0은 출력 안될 거임. 그래서 위에
// 0으로 초기화.
const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
