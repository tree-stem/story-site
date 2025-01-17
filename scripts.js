// 1. Displays hint when submitting empty fields

// Selects the form
const form = document.querySelector('form');

// Selects title input and textarea
const titleInput = document.querySelector('#title');
const textareaInput = document.querySelector('#text');

// Selects both the title and textarea's hint message
const titleHint = document.querySelector('#title-hint');
const textHint = document.querySelector('#text-hint');

// Added an eventListener on the button to listen for submissions
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (titleInput.value === '') {
    titleHint.style.display = 'block';
  }

  if (textareaInput.value.length < 180) {
    textHint.style.display = 'block';
  }
});

// 2. Shows characters remaining when typing

// Selects character count display field
const charCount = document.querySelector('#char-count');

// Declares a variable and sets the minimum character count
const minLength = 180;

// Adds an eventListener to the textarea
textareaInput.addEventListener('input', () => {
  const currentLength = textareaInput.value.length;
  let remainingChars = minLength - currentLength;

  if (remainingChars === 0) {
    charCount.style.display = 'none';
  } else if (remainingChars > 0) {
    charCount.style.display = 'block';
  }

  // Updates the displayed character count
  charCount.textContent = `Characters left to reach minimum: ${remainingChars}`;
});
