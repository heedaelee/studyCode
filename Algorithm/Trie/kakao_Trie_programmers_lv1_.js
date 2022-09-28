const data = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
let tries = {};

function buildTries() {
  for (let [key, val] of Object.entries(data)) {
    // console.log(key, val);
    let root = tries;
    for (let c of key) {
      if (!root[c]) {
        root[c] = {};
      }
      //root 하위로
      root = root[c];
    } //끝나면 숫자가 endmark가 아니라 '*'를 키로, 숫자를 val로 넣어준다.
    root["*"] = val;
  }
}

function solution(s) {
  let result = "";
  buildTries();
  let root = tries;

  for (let x of s) {
    //문자
    if (isNaN(x)) {
      //단순 해당 단어까지 탐색이면 DFS가 필요 없음. 해당 객체 선택 후 객체를 반환하면 됨
      root = root[x];
      if (root["*"]) {
        result += root["*"];
        root = tries;
      }
    } else {
      //숫자
      result += x;
    }
  }
  return result;
}

const inputS = [
  "one4seveneight",
  "23four5six7",
  "2three45sixseven",
  "123",
];

const answer = solution(inputS[0]);
console.log(answer);

/* 
input output
s	result
"one4seveneight"	1478
"23four5six7"	234567
"2three45sixseven"	234567
"123"	123

*/
