const Perm1 = [
  57,
  49,
  41,
  33,
  25,
  17,
  9,
  1,
  58,
  50,
  42,
  34,
  26,
  18,
  10,
  2,
  59,
  51,
  43,
  35,
  27,
  19,
  11,
  3,
  60,
  52,
  44,
  36,
  63,
  55,
  47,
  39,
  31,
  23,
  15,
  7,
  62,
  54,
  46,
  38,
  30,
  22,
  14,
  6,
  61,
  53,
  45,
  37,
  29,
  21,
  13,
  25,
  28,
  20,
  12,
  4,
];

// ! initial keys
var keys = [];
for (let i = 1; i < 65; i++) {
  keys.push(i);
}
// console.log(keys);

// ! parity drop operations
var keys1 = [];
for (let item of Perm1) {
  keys1.push(keys[item]);
}
// console.log(keys1);

// ! left rotation function

const rotateLeft = (keys, iteration) => {
  let newKey;
  if (iteration == 1 || iteration == 2 || iteration == 9 || iteration == 16) {
    //! double rotation
    keys.push(keys.shift());
    newKey = keys;
    keys.push(keys.shift());
    newKey = keys;
  } else {
    // ! single rotation
    keys.push(keys.shift());
    newKey = keys;
  }
  return newKey;
};
const rotateLeft16 = (keys) => {
  var arrayOfKeys = [];
  var currentKeys = [];
  for (let i = 1; i < 17; i++) {
    if (i == 1) {
      arrayOfKeys.push(rotateLeft(keys, i));
      currentKeys = arrayOfKeys[0];
    }
    currentKeys = rotateLeft(currentKeys, i);
    arrayOfKeys.push(currentKeys);
    // console.log(arrayOfKeys);
  }
  console.log(arrayOfKeys);
  return arrayOfKeys;
};

// ! left rotations 16 rounds

const get56BitKeys = () => {
  // var keys56Bit = rotateLeft16(keys1);
  for (let i = 1; i < 17; i++) {
    if (i == 1) {
      currentKeys = rotateLeft(keys, i);
      // currentKeys = arrayOfKeys[0];
    } else {
      currentKeys = rotateLeft(currentKeys, i);
    }
    // arrayOfKeys.push(currentKeys);
    // console.log(arrayOfKeys);
    console.log([
      ...rotateLeft(currentKeys.slice(0, 28), i),
      ...rotateLeft(currentKeys.slice(28, 56), i),
    ]);
  }

  // var newKeys = keys56Bit.map((item, index) => {
  //   return;
  // });
  // console.log(newKeys);
};
get56BitKeys();
