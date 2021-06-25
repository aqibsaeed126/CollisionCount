// String s = "<<>><><"
 
// s1 = "<<<" //0
// s2 = ">>>" //0
// s3 = "><" //1
// s4 = ">><<" // 4
 
// s5 = "<>" //0
// s6 = ">>><" === [1,1,1,0] // 3
 
// < = 0
// > = 1
// collision = 1 -> 0 (><)
// non-collision = 0 -> 0 (<<) | 0 -> 1 (<>) | 1 -> 1 (>>)
 
 
// Goal is 
// 1- Move all 0's to left
// 2- Move all 1's to right
 
const findCollisions = (s) => {
      let collisionCount = 0; 
      let newStringArray = createNewStringArray(s); // [1,1,0,1,0]
      
      for (let i=0; i<newStringArray.length; i++ ) {
        for (let j=0; j<newStringArray.length-i; j++) {
          if (newStringArray[i] > newStringArray[i+1]) {
            swap(newStringArray , i, i+1);
            collisionCount++;
          } 
        }
      }
      return collisionCount;
}
function createNewStringArray(str) {
  let arr = str.split('');
  return arr.map((ch) => {
    return ch === '<' ? 0 : 1;
  });
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
 
let inputStr = '>>><'; // [1,1,1,0]
console.log (findCollisions(inputStr));
 
 
 
 
const findCollisionWay2 = (s) => {
  let collisionCount = 0; 
  let newStringArray = createNewStringArray(s); // [1,1,0,1,0]
  createLinkList(newStringArray);
}
 
function createLinkList(arr) {
  let onesCount = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 1) {
      onesCount++;
      insert(arr[i], 0)
    }
    if (arr[i] === 0) {
      insert(arr[i], onesCount)
    }
  }
  // Iterate over Linked list and Sum onesCount on all Zeros Node
}
 
LinkedList {
  Node start;
}
 
Node {
  let value ;
  let swappingCount;
   Node next; 
}
