// Change text content dynamically
const changeTextButton = document.getElementById('changeTextButton');
const dynamicText = document.getElementById('dynamicText');

changeTextButton.addEventListener('click', () => {
  dynamicText.textContent = 'The text has been changed dynamically!';
  dynamicText.style.color = 'blue'; // Modify CSS style
  dynamicText.style.fontWeight = 'bold';
});

// Add or remove an element when a button is clicked
const exampleSection = document.getElementById('example');

// Add Element
const addElementButton = document.createElement('button');
addElementButton.textContent = 'Add Element';
exampleSection.appendChild(addElementButton);

addElementButton.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new paragraph added dynamically!';
  newElement.style.color = 'green';
  exampleSection.appendChild(newElement);
});

// Remove Element
const removeElementButton = document.createElement('button');
removeElementButton.textContent = 'Remove Last Element';
exampleSection.appendChild(removeElementButton);

removeElementButton.addEventListener('click', () => {
  const lastElement = exampleSection.querySelector('p:last-of-type');
  if (lastElement) {
    exampleSection.removeChild(lastElement);
  }
});