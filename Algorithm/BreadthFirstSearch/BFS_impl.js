const inputs = [
  ["J", "Mex"],
  ["Mor", "H"],
  ["Mex", "Jap"],
  ["Jap", "C"],
  ["J", "Mor"],
  ["Jap", "F"],
  ["I", "F"],
  ["Jap", "E"],
  ["S", "J"],
  ["Mor", "Jap"],
  ["S", "I"],
];
/**
 * 1. make arranged Map
 * 2. find the first point.
 * 3. make, use queue
 * 4. if target is right in condition, return the value;
 *  */

const arrangedData = (list) => {
  const map = {}; //{incoming:number, dest : string[]}

  for (let i = 0; i < list.length; i++) {
    const [depart, destination] = list[i];

    if (map[depart]) {
      map[depart].dest.push(destination);
    } else {
      map[depart] = {
        incoming: 0,
        dest: [destination],
      };
    }

    if (map[destination]) {
      map[destination].incoming++;
    } else {
      map[destination] = {
        incoming: 1,
        dest: [],
      };
    }
  }

  return map;
};

const findStart = (data) => {
  for ([key, value] of Object.entries(data)) {
    // console.log(key, value);
    if (value.incoming === 0) {
      return key;
    }
  }

  return false;
};

function solution(inputs, target) {
  /**
   * airport : {
   *  incoming:number,
   *  dest:[]
   * }
   */

  const arData = arrangedData(inputs);

  const startPoint = findStart(arData);
  // console.log("startPoint", startPoint);

  // console.log(arData);
  //forNaming
  const path = startPoint;

  //NOTE: 2차원 배열 사용
  const queue = [[startPoint, path]];

  while (queue.length !== 0) {
    const [key, currentPath] = queue.shift();
    const nextDestArr = arData[key]["dest"];

    if (key === target) {
      return currentPath;
    }

    for (let i = 0; i < nextDestArr.length; i++) {
      const nextDest = nextDestArr[i];
      queue.push([nextDest, `${currentPath} -> ${nextDest}`]);
    }
  }

  // console.log(arData);
}

console.log(solution(inputs, "F"));
