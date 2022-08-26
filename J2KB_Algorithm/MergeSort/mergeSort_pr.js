const num = 4;
const array = [4, 3, 2, 1];

function mergeSort(block: Array) {
  if (block.length === 1) return block[0];

  const middle = Math.floor(block.length / 2);

  const left = mergeSort(block.slice(0, middle));
  const right = mergeSort(block.slice(middle));

  return merge(left, right);
}

function merge(params) {

  


}

console.log(mergeSort(array));
