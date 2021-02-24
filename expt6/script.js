const t = [
  0xad20177d,
  0x470678db,
  0x31da48d0,
  0x47ab5b7d,
  0x6c762d20,
  0x52c4f80d,
  0xe4133523,
  0x8ce29268,
  0x0a5e4f61,
  0x37c6cd99,
];

var j = 0;
const w1 = [0x2475a2b3, 0x34755688, 0x31e21200, 0x13aa5487];

for (let i = 4; i < 44; i++) {
  if (i % 4 == 0) {
    var temp1 = t[j] ^ w1[i - 4];
    w1.push(temp1);
    j += 1;
  } else {
    temp2 = w1[i - 1] ^ w1[i - 4];
    w1.push(temp2);
  }
}
// console.log(w1);
var word = [];
for (let i = 0; i < 44; i++) {
  if (w1[i] < 0) {
    var temp = 0xffffffff + w1[i] + 1;
    word.push(temp.toString(16));
    continue;
  }
  word.push(w1[i].toString(16));
}

console.log(word);

const matrix = [
  [
    0x63,
    0x7c,
    0x77,
    0x7b,
    0xf2,
    0x6b,
    0x6f,
    0xc5,
    0x30,
    0x01,
    0x67,
    0x2b,
    0xfe,
    0xd7,
    0xab,
    0x76,
  ],
  [
    0xca,
    0x82,
    0xc9,
    0x7d,
    0xfa,
    0x59,
    0x47,
    0xf0,
    0xad,
    0xd4,
    0xa2,
    0xaf,
    0x9c,
    0xa4,
    0x72,
    0xc0,
  ],
  [
    0xb7,
    0xfd,
    0x93,
    0x26,
    0x36,
    0x3f,
    0xf7,
    0xcc,
    0x34,
    0xa5,
    0xe5,
    0xf1,
    0x71,
    0xd8,
    0x31,
    0x15,
  ],
  [
    0x04,
    0xc7,
    0x23,
    0xc3,
    0x18,
    0x96,
    0x05,
    0x9a,
    0x07,
    0x12,
    0x80,
    0xe2,
    0xeb,
    0x27,
    0xb2,
    0x75,
  ],
  [
    0x09,
    0x83,
    0x2c,
    0x1a,
    0x1b,
    0x6e,
    0x5a,
    0xa0,
    0x52,
    0x3b,
    0xd6,
    0xb3,
    0x29,
    0xe3,
    0x2f,
    0x84,
  ],
  [
    0x53,
    0xd1,
    0x00,
    0xed,
    0x20,
    0xfc,
    0xb1,
    0x5b,
    0x6a,
    0xcb,
    0xbe,
    0x39,
    0x4a,
    0x4c,
    0x58,
    0xcf,
  ],
  [
    0xd0,
    0xef,
    0xaa,
    0xfb,
    0x43,
    0x4d,
    0x33,
    0x85,
    0x45,
    0xf9,
    0x02,
    0x7f,
    0x50,
    0x3c,
    0x9f,
    0xa8,
  ],
  [
    0x51,
    0xa3,
    0x40,
    0x8f,
    0x92,
    0x9d,
    0x38,
    0xf5,
    0xbc,
    0xb6,
    0xda,
    0x21,
    0x10,
    0xff,
    0xf3,
    0xd2,
  ],
  [
    0xcd,
    0x0c,
    0x13,
    0xec,
    0x5f,
    0x97,
    0x44,
    0x17,
    0xc4,
    0xa7,
    0x7e,
    0x3d,
    0x64,
    0x5d,
    0x19,
    0x73,
  ],
  [
    0x60,
    0x81,
    0x4f,
    0xdc,
    0x22,
    0x2a,
    0x90,
    0x88,
    0x46,
    0xee,
    0xb8,
    0x14,
    0xde,
    0x5e,
    0x0b,
    0xdb,
  ],
  [
    0xe0,
    0x32,
    0x3a,
    0x0a,
    0x49,
    0x06,
    0x24,
    0x5c,
    0xc2,
    0xd3,
    0xac,
    0x62,
    0x91,
    0x95,
    0xe4,
    0x79,
  ],
  [
    0xe7,
    0xc8,
    0x37,
    0x6d,
    0x8d,
    0xd5,
    0x4e,
    0xa9,
    0x6c,
    0x56,
    0xf4,
    0xea,
    0x65,
    0x7a,
    0xae,
    0x08,
  ],
  [
    0xba,
    0x78,
    0x25,
    0x2e,
    0x1c,
    0xa6,
    0xb4,
    0xc6,
    0xe8,
    0xdd,
    0x74,
    0x1f,
    0x4b,
    0xbd,
    0x8b,
    0x8a,
  ],
  [
    0x70,
    0x3e,
    0xb5,
    0x66,
    0x48,
    0x03,
    0xf6,
    0x0e,
    0x61,
    0x35,
    0x57,
    0xb9,
    0x86,
    0xc1,
    0x1d,
    0x9e,
  ],
  [
    0xe1,
    0xf8,
    0x98,
    0x11,
    0x69,
    0xd9,
    0x8e,
    0x94,
    0x9b,
    0x1e,
    0x87,
    0xe9,
    0xce,
    0x55,
    0x28,
    0xdf,
  ],
  [
    0x8c,
    0xa1,
    0x89,
    0x0d,
    0xbf,
    0xe6,
    0x42,
    0x68,
    0x41,
    0x99,
    0x2d,
    0x0f,
    0xb0,
    0x54,
    0xbb,
    0x16,
  ],
];

console.log(matrix);
const obj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

// ! Array of Rcon to XOR with key
const constant = [
  0x01000000,
  0x02000000,
  0x04000000,
  0x08000000,
  0x10000000,
  0x20000000,
  0x40000000,
  0x80000000,
  0x1b000000,
  0x36000000,
];
// ! function to insert leading zeros
const padLeadingZeros = (num, size) => {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};
const generateT = () => {
  var arrOfT = [];
  for (let i = 1; i < 11; i++) {
    // ! for t4 ==> t=4*i
    var current = word[4 * i - 1];
    current = current.split("");
    current.push(current.shift());
    current.push(current.shift());
    current = current.join("");
    // ! current newword initialisation
    var newWord = "";
    // ! first slice 0, 2
    var first = current.slice(0, 2);
    newWord =
      newWord +
      padLeadingZeros(matrix[obj[first[0]]][obj[first[1]]].toString(16), 2);
    // ! second slice 2, 4
    var second = current.slice(2, 4);
    newWord =
      newWord +
      padLeadingZeros(matrix[obj[second[0]]][obj[second[1]]].toString(16), 2);
    // ! third slice 4, 6
    var third = current.slice(4, 6);
    newWord =
      newWord +
      padLeadingZeros(matrix[obj[third[0]]][obj[third[1]]].toString(16), 2);
    // ! fourth slice 6, 8
    var fourth = current.slice(6, 8);
    newWord =
      newWord +
      padLeadingZeros(matrix[obj[fourth[0]]][obj[fourth[1]]].toString(16), 2);
    // ! XORing the constant
    var finalKey = Number("0x" + newWord) ^ constant[i - 1];
    // ! handling the negative keys
    if (finalKey < 0) {
      var temp = 0xffffffff + finalKey + 1;
      finalKey = temp.toString(16);
    } else {
      finalKey = finalKey.toString(16);
    }
    // ! pushing the keys into an array
    arrOfT.push(finalKey);
  }
  // ! Final keys array
  console.log(arrOfT);
};

generateT();
