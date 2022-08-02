const colorDOM = document.querySelector(".color");
const body = document.querySelector("body");
const info = document.querySelector("h4");

//An array of possible chars that might be in a HEX code.
let hexChars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

window.addEventListener("DOMContentLoaded", displayColor); //Calls the createHexCode function when the DOM is loaded.
colorDOM.addEventListener("click", () => {
  copyToClipboard(colorDOM.textContent);
});

function createHexCode() {
  let hexCode = "";
  //HEX colors have six chars, so this loop will be iterated for six times to create a HEX color.
  for (let i = 0; i < 6; i++) {
    let randChar = Math.floor(Math.random() * hexChars.length); //Creates a random number between 0 and the number of hexChars items which is 16.
    hexCode += hexChars[randChar];
  }

  return hexCode;
}

function displayColor() {
  let hexColorCodes = createHexCode();
  let hexColor = `#${hexColorCodes}`;
  colorDOM.textContent = hexColor;
  body.style.backgroundColor = hexColor;
}

function copyToClipboard(copyText) {
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);
  info.textContent = "Copied to the clipboard.";
  setTimeout(() => {
    info.textContent = "Refresh the page to get a new color.";
  }, 1500);
}
