/*
Given an integer array  nums, return  true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/*
Interview Template
45 mins
{
	input,
	ouput,
	edge case
	
	brute force solution
		psuedo code
		*** time complexity 
		*** space complexity
	
	optimal solution
		psuedo code
		*** time complexity
		*** space complexity

	test cases

}


const template = {
  firstStep: {
    I: input, 
    O: output, 
    C: constraints, --> input length
    E: edge cases,
  },
  secondStep: {
    DS: '',
    Alg: '',
    bruteForce: solution = () => {
        // pseudo code
    }
    time: O(),
    space: O()
  }

  thirdStep: {
    DS: '',
    Alg: '',
    optimalSolution: solution = () => {
        // pseudo code
    },
    time: O(),
    space: O(),
  },
  fourthStep: {
    actualSolution: () => {
      /// Actual Code
    }
  },
  fifthStep: {
    testCases: (givenInput, expectedOutput, func) => {

      const result = func(givenInput)
      if(result === expectedOutput) {
         println(`SUCCESS(O)`)
      } else {
         println(`FAILED(X)`)
      }
      
    }
  }
}


input: int -1 0 1
output: boolean

brute force --> slow solution --> O(N^2);  -> optional solution

[1,2,3,4,5,6,1, -1, -3]  ==> output true;
                           i

{
1: true,
2: true,
3: true,
4: true,
5: true,
6: true,
}
 */

function findDuplicate(num) {
  // edge case [], [1]
  if (num.length <= 1) return false;

  const hashMap = new Map();

  for (let i = 0; i < num.length; i++) {
    const currentNum = num[i];
    if (hashMap.has(currentNum)) return true;
    else hashMap.set(currentNum, true);
  }

  return false;
}

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


input: str arr;
output: str arr => [anagrams,...];
constraints: arr possibly empty 
1 <= strs.length <= 104
0 <= strs[i].length <= 100
edge cases:
	“a-z”  +, ,-.,~, --> question, 26 chars
	[“”], [‘’]

- brute force
  time complexty >= O(N^2);
  space complexity: O(N)
  double for loop => O(N^2 * (2*M)) M -> maximum string size
  {
    e: 2
    a: 1
    t: 
  } => 1000
    ["eat","teaa","tan","ate","nat","bat"]
      
      i
            j
  arr[i].length !== arr[j].length
  char frequency map -> char find

- optimal solution

  sorting ==> O(nlogn);

	divide conquer --> merge sort

	time complexity: O(N * (MlogM));
	space complexity: O(N);
  // time complexity = O(N * M*logM); upper bound, dominent
	// space complexity = O(N);
	
	["eat","tea","tan","ate","nat","bat"]
	   ^
		  aet
  {
    aet: [‘eat’, ‘tea’, ‘ate’],
    ant: [‘tan’, ‘nat’],
    abt: [‘bat’]
  }

  string ==> immutable ==> destruction(X)
  0x11233 => ‘apple’ + ‘s’;
  ‘apples’ ---> time complexty;
  */

function findAllAnagram(strArr) {
  // edge case
  //***
  const hashMap = {};

  for (let i = 0; i < strArr.length; i++) {
    const currentStr = strArr[i];
    //sort 활용해 obj의 공식 키만들어 주기
    const anagram = currentStr.split("").sort().join("");
    // time complexity = O(2*M + MlogM);
    // 여기서 M은 한개 string 요소의 갯수 => M, sort()는 MlogM, split("") + join("") 은 2*M
    if (hashMap[anagram]) hashMap[anagram].push(currentStr); //여기서 push는 obj관한게 아닌, obj의 value가 array라 array.push()가 가능한거임
    else hashMap[anagram] = [currentStr]; // obj의 value를 []로 만듦.
  }

  const result = [];

  // time complexity = O(N)
  for (const [key, val] of Object.entries(hashMap)) {
    result.push(val);
  }

  return result;
}

//test cases
