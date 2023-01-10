// Retrieve the form and log it
const form = document.forms[0];
console.log(form);

// Retrieve the inputs by their id and log them
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput);
console.log(lastNameInput);

// Retrieve the inputs by their name attribute and log them
const inputsByName = form.elements;
console.log(inputsByName.fname);
console.log(inputsByName.lname);

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the input tags
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    // Make sure the values are not empty
    if (firstName === '' || lastName === '') {
        alert('Please enter both first and last name.');
        return;
    }

    // Create an li element for each input value
    const firstNameItem = document.createElement('li');
    firstNameItem.textContent = firstName;
    const lastNameItem = document.createElement('li');
    lastNameItem.textContent = lastName;

    // Append the li elements to the ul element
    const answerList = document.querySelector('.usersAnswer');
    answerList.appendChild(firstNameItem);
    answerList.appendChild(lastNameItem);
});
