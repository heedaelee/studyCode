/* 입출력 예
N	stages	result
5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
4	[4,4,4,4,4]	[4,1,2,3]
 */
/* 
let N = 8;
const stages = [1, 2, 3, 4, 5, 6, 7];
 */

let N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

/* 
let N = 8;
const stages = [1, 2, 3, 4, 5, 6, 7];
 */
const val = solution(N, stages);
console.log(val);

function solution(N, stages) {
  let cnt = 0;
  const answer = [];
  let usersNum = stages.length;

  //Stage 별로 계산..
  for (let i = 1; i <= N; i++) {
    cnt = 0;
    //전체 명 수 대로 count ..
    for (let j = 0; j < stages.length; j++) {
      //stage앞 서있는 애들 cnt
      if (stages[j] == i) cnt++;
    }
    //NOTE: 남은 유저(=usersNum)가 없으면, answer 배열에 0을 넣어줘야 한다. 이걸 안해서 최종 제출때 30% 오답남.
    if (usersNum == 0) {
      answer.push(0);
      continue;
    }
    //실패율 계산
    answer.push(cnt / usersNum);
    // console.log('usersNum : ', usersNum, cnt, cnt/usersNum);
    //전체인원중 실패자 차감
    usersNum -= cnt;
  }

  //answer [] 에 stage별 실패율 다 들어간 상태
  console.log("FailRate", answer);
  //TODO: 내림차순이므로, answer[]의 max값부터 idx를 realAnswer에 push()해줌

  let max = 0;
  const newAnswer = [];
  //배열의 내림차순 max값 idx 구하기 => return [];
  for (let i = 0; i < answer.length; i++) {
    max = Math.max(...answer);

    for (let j = 0; j < answer.length; j++) {
      //max와 같은 값의 idx를 push
      if (answer[j] >= 0 && answer[j] == max) {
        newAnswer.push(j + 1);
        // NOTE:배열을 지우지 말고 0이나 -1을 넣어주고, 상위 조건을 >=0으로 해줘서 조건을 안타게 해준다.
        answer[j] = -1;
        //continue; 를 여기 쓰면 안되지, max값을 찾았으면 for문을 끝내야함!!break. 실수
        break;
      }
    }
  }
  // console.log(newAnswer);
  return newAnswer;
}
