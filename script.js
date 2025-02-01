// 1. Displays hint when submitting empty fields

// Selects the form
const form = document.querySelector("form");

// Selects title input and textarea
const titleInput = document.querySelector("#title");
const textareaInput = document.querySelector("#text");

// Selects both the title and textarea's hint message
const hints = document.querySelectorAll("span");

// Add event listener to toggle hints 
const hintsOn = document.querySelector('#hints-on');
const hintsOff = document.querySelector('#hints-off');

// Add event listener to toggle placeholders
const bareModeOn = document.querySelector('#bare-mode-on');
const bareModeOff = document.querySelector('#bare-mode-off');

const placeholders = document.querySelectorAll('[placeholder]');

bareModeOn.addEventListener('click', () => {
  placeholders.forEach((item) => {
    item.placeholder = '';
  });

  charCount.style.display = 'none';
});

bareModeOff.addEventListener('click', () => {
  var titlePlaceholder = "Enter your title here";
  var textareaPlaceholder = "Write your story here";

  placeholders[0].placeholder = titlePlaceholder;
  placeholders[1].placeholder = textareaPlaceholder;

  charCount.style.display = 'block';
});

// 2. Shows characters remaining when typing

// Selects character count display field
const charCount = document.querySelector("#char-count");

// Declares a variable and sets the minimum character count
const minLength = 180;

// Adds an eventListener to the textarea
textareaInput.addEventListener("input", () => {
  const currentLength = textareaInput.value.length;
  let remainingChars = minLength - currentLength;

  if (remainingChars === 0) {
    charCount.style.display = "none";
    console.log("hello world!");
  } else if (remainingChars > 0 && bareModeOff.checked) {
    charCount.style.display = "block";
  }

  // Updates the displayed character count
  charCount.textContent = `Characters left to reach minimum: ${remainingChars}`;
});

// Added an eventListener on the button to listen for submissions
let formSubmitted = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formSubmitted = true;

  if (titleInput.value === "" && hintsOn.checked) {
    hints[0].style.display = "block";
  }

  if (textareaInput.value.length < 180 && hintsOn.checked) {
    hints[1].style.display = "block";
  }
});

hintsOn.addEventListener('click', () => {
  if (formSubmitted) {
    hints.forEach((hint) => {
      hint.style.display = 'block';
    });
  };
});

hintsOff.addEventListener('click', () => {
  hints.forEach((hint) => {
    hint.style.display = 'none';
  });
});

