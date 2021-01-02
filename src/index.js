import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

// 초기화 될때는 subscribe에 연결 전이기 때문에 0은 출력 안될 거임. 그래서 위에
// 0으로 초기화.
const onChange = () => {
  number.innerText = countStore.getState();
};
// subscribe는 state의 변화를 감지함. 변화시 동작할 함수를 args로 넣어줘야 함.
countStore.subscribe(onChange);

// dispatch로 reducer을 호출할 수 있음. object로 args를 넘겨야 함.
// 그리고 action은 type이 꼭 있어야 함. type을 이름 바꾸면 안됨.
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
