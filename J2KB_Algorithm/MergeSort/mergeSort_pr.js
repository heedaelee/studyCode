// const array = [4, 3, 2, 1];
const array = [4, 5, 6, 1, 2, 3, 8, 7];

function mergeSort(block) {
  if (block.length === 1) return block;

  const middle = Math.floor(block.length / 2);

  const left = mergeSort(block.slice(0, middle));
  const right = mergeSort(block.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const newArray = [];

  // left, right 블록 첫번째 인덱스 부터 비교
  while (left[i] && right[j]) {
    if (left[i] <= right[j]) {
      newArray.push(left[i]);
      i++;
    }
    if (right[j] <= left[i]) {
      newArray.push(right[j]);
      j++;
    }
  }

  //left 블록이 남아 있다면
  while (left[i]) {
    newArray.push(left[i]);
    i++;
  }

  //right 블록이 남아 있다면
  while (right[j]) {
    newArray.push(right[j]);
    j++;
  }

  return newArray;
}

console.log(mergeSort(array));
