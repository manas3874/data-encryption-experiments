// ! Considering all the lower and uppercase alphabets
// ! this array will help us get the location/ index of a particular letter
const arrayOfLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);

// ! The encrypt method will require amessage to encrypt and a key to encrypt it
const encrypt = (message, key) => {
  let encryptedArray = [];
  for (let letter of message) {
    encryptedArray.push(
      arrayOfLetters[
        (arrayOfLetters.indexOf(letter) + key) % arrayOfLetters.length
      ]
    );
  }

  return encryptedArray.join("");
};

// ! The decrypt method allows us to decrypt an encrypted message and return plain text
const decrypt = (encryptedMessage, key) => {
  let plainTextArray = [];
  for (let letter of encryptedMessage) {
    var theIndex =
      (arrayOfLetters.indexOf(letter) - key) % arrayOfLetters.length;
    if (theIndex < 0) {
      theIndex = Math.abs(arrayOfLetters.length + theIndex);
    }
    plainTextArray.push(arrayOfLetters[theIndex]);
  }
  return plainTextArray.join("");
};

// ! brute force plain texts method
const bruteForce = (encryptedMessage) => {
  console.log(encryptedMessage);
  let arrOfPlainTexts = [];
  for (let i = 0; i < arrayOfLetters.length; i++) {
    arrOfPlainTexts.push(decrypt(encryptedMessage, i));
  }
  return arrOfPlainTexts;
};


// ! Picking DOM elements to render
const encryptInput = document.querySelector("#encrypt-input");
const decryptInput = document.querySelector("#decrypt-input");
const bruteForceInput = document.querySelector("#brute-force-input");

const encryptButton = document.querySelector(".encryptButton");
const decryptButton = document.querySelector(".decryptButton");
const bruteForceButton = document.querySelector(".bruteForceButton");

const encryptedText = document.querySelector(".encryptedText");
const decryptedText = document.querySelector(".decryptedText");
const encryptKey = document.querySelector("#encryptKey");
const decryptKey = document.querySelector("#decryptKey");

const plainTexts = document.querySelector(".program__bruteforce");

encryptButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  let message = encryptInput.value;
  const encryptedMessage = encrypt(message, Number(encryptKey.value));
  encryptedText.innerHTML = encryptedMessage;
});

decryptButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  let encryptedMessage = decryptInput.value;
  const decryptedMessage = decrypt(encryptedMessage, Number(decryptKey.value));
  decryptedText.innerHTML = decryptedMessage;
});

bruteForceButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const bruteforceInput = bruteForceInput.value;
  for (let i = 0; i < arrayOfLetters.length; i++) {
    let plaintext = decrypt(bruteforceInput, i);
    console.log(plaintext);
    plainTexts.insertAdjacentHTML(
      "beforeend",
      `<h3>for key = ${i} , plain text is ${plaintext}</h3>`
    );
  }
});
