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
// console.log(encrypt("manas", 1));

// ! The decrypt method allows us to decrypt an encrypted message and return plain text
const decrypt = (encryptedMessage, key) => {
  let plainTextArray = [];
  for (let letter of encryptedMessage) {
    plainTextArray.push(
      arrayOfLetters[
        (arrayOfLetters.indexOf(letter) - key) % arrayOfLetters.length
      ]
    );
  }
  return plainTextArray.join("");
};

// console.log(decrypt("nbobt", 1));

// ! Picking DOM elements to render
const encryptInput = document.querySelector("#encrypt-input");
const decryptInput = document.querySelector("#decrypt-input");
const encryptButton = document.querySelector(".encryptButton");
const decryptButton = document.querySelector(".decryptButton");
const encryptedText = document.querySelector(".encryptedText");
const decryptedText = document.querySelector(".decryptedText");
const encryptKey = document.querySelector("#encryptKey");
const decryptKey = document.querySelector("#decryptKey");

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
