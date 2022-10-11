/* 입출력 예
N	stages	result
5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
4	[4,4,4,4,4]	[4,1,2,3]
 */

// let N = 8;
// const stages = [1, 2, 3, 4, 5, 6, 7];

let N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

// let N = 8;
// const stages = [1, 2, 3, 4, 5, 6, 7];

solution(N, stages);

function solution(N, stages) {
  let cnt = 0;
  const answer = [];
  let usersNum = stages.length;
  for (let i = 1; i <= N; i++) {
    cnt = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] == i) cnt++;
    }
    if (usersNum == 0) {
      answer.push(0);
      continue;
    }
    answer.push(cnt / usersNum);
    // console.log('usersNum : ', usersNum, cnt, cnt/usersNum);
    usersNum -= cnt;
  }

  console.log(answer);

  let max = 0;
  const newAnswer = [];
  for (let i = 0; i < answer.length; i++) {
    max = Math.max(...answer);

    for (let j = 0; j < answer.length; j++) {
      if (answer[j] >= 0 && answer[j] == max) {
        // console.log(i, j, max)
        newAnswer.push(j + 1);
        answer[j] = -1;
        //continue; 를 여기 쓰면 안되지, max값을 찾았으면 for문을 끝내야함!!break. 실수
        break;
      }
    }
  }
  // console.log(newAnswer);
  return newAnswer;
}
