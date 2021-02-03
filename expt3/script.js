// ! Considering all the lower and uppercase alphabets
// ! this array will help us get the location/ index of a particular letter
const arrayOfLetters = "abcdefghijklmnopqrstuvwxyz".split("");

const giveKeyOne = () => {
  // ! The must be such that key and m are coprime
  // ! find GCD
  const gcd = (a, b) => {
    if (a == 0 || b == 0) {
      return 0;
    }
    if (a == b) {
      return a;
    }
    if (a > b) {
      return gcd(a - b, b);
    }
    return gcd(a, b - a);
  };
  // return gcd(2, 3);
  // ! Return key
  for (let i = 7; i < arrayOfLetters.length; i++) {
    if (gcd(i, arrayOfLetters.length) == 1) {
      return i;
    }
  }
};

const keyOne = giveKeyOne();

// ! The encrypt method will require a message to encrypt and 2 keys to encrypt it
const encrypt = (message, key1, key2) => {
  let encryptedArray = [];
  for (let letter of message) {
    encryptedArray.push(
      arrayOfLetters[
        (arrayOfLetters.indexOf(letter) * key1 + key2) % arrayOfLetters.length
      ]
    );
  }

  return encryptedArray.join("");
};

// ! The decrypt method allows us to decrypt an encrypted message and return plain text
const decrypt = (encryptedMessage, key1, key2) => {
  let plainTextArray = [];
  var inverse = 0;
  for (let i = 0; i < arrayOfLetters.length + 1; i++) {
    let flag = (key1 * i) % arrayOfLetters.length;
    // console.log(flag);
    if (flag == 1) {
      inverse = i;
      console.log(inverse);
      break;
    }
  }
  for (let letter of encryptedMessage) {
    // console.log(keyOne);
    var theIndex =
      ((arrayOfLetters.indexOf(letter) - key2) * inverse) %
      arrayOfLetters.length;

    console.log(theIndex);
    if (theIndex < 0) {
      theIndex = Math.abs(arrayOfLetters.length + theIndex);
    }
    plainTextArray.push(arrayOfLetters[theIndex]);
  }
  return plainTextArray.join("");
};

// console.log(encrypt("manas", keyOne, 3));
// console.log(decrypt("jdqdz", keyOne, 3));

// // ! brute force plain texts method
// const bruteForce = (encryptedMessage) => {
//   console.log(encryptedMessage);
//   let arrOfPlainTexts = [];
//   for (let i = 0; i < arrayOfLetters.length; i++) {
//     arrOfPlainTexts.push(decrypt(encryptedMessage, i));
//   }
//   return arrOfPlainTexts;
// };

// // ! Picking DOM elements to render
const encryptInput = document.querySelector("#encrypt-input");
const decryptInput = document.querySelector("#decrypt-input");
// const bruteForceInput = document.querySelector("#brute-force-input");

const encryptButton = document.querySelector(".encryptButton");
const decryptButton = document.querySelector(".decryptButton");
// const bruteForceButton = document.querySelector(".bruteForceButton");

const encryptedText = document.querySelector(".encryptedText");
const decryptedText = document.querySelector(".decryptedText");
const encryptKey = document.querySelector("#encryptKey");
const decryptKey = document.querySelector("#decryptKey");

// const plainTexts = document.querySelector(".program__bruteforce");

encryptButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  let message = encryptInput.value;
  const encryptedMessage = encrypt(message, keyOne, Number(encryptKey.value));
  encryptedText.innerHTML = encryptedMessage;
});

decryptButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  let encryptedMessage = decryptInput.value;
  const decryptedMessage = decrypt(
    encryptedMessage,
    keyOne,
    Number(decryptKey.value)
  );
  decryptedText.innerHTML = decryptedMessage;
});

// bruteForceButton.addEventListener("click", (ev) => {
//   ev.preventDefault();
//   const bruteforceInput = bruteForceInput.value;
//   for (let i = 0; i < arrayOfLetters.length; i++) {
//     let plaintext = decrypt(bruteforceInput, i);
//     console.log(plaintext);
//     plainTexts.insertAdjacentHTML(
//       "beforeend",
//       `<h3>for key = ${i} , plain text is ${plaintext}</h3>`
//     );
//   }
// });
