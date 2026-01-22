# Interactive User Registration Form

This project is a simple, interactive registration form built with HTML, CSS, and JavaScript. It features **real-time validation** for username, email, password, and confirm password fields, and saves the username in localStorage for convenience.

## Features

- Real-time input validation using JavaScript.
- HTML5 validation attributes (required, type, minlength, pattern).
- Custom error messages displayed under each input field.
- Confirm password validation.
- Username persistence using localStorage.
- Cozy dark forest cottagecore styling.

## How to Use

1. Open `index.html` in your browser.
2. Fill out all fields:
   - Username: at least 3 characters.
   - Email: must be valid.
   - Password: at least 8 characters, include uppercase, lowercase, and a number.
   - Confirm Password: must match the password.
3. Submit the form.
4. On successful submission:
   - An alert confirms registration.
   - Username is saved in localStorage and pre-filled next time.

## Reflection Questions

1. How did `event.preventDefault()` help with form submission?  
   - It stops the form from reloading the page so we can run custom validation.

2. What is the difference between HTML5 validation attributes and JavaScript validation?  
   - HTML5 gives built-in browser checks; JavaScript allows custom messages and more control.

3. How did you use localStorage? Any limitations?  
   - The username is saved in localStorage to pre-fill the field. Sensitive info like passwords shouldn’t be stored here.

4. What challenge did you face with real-time validation?  
   - Ensuring errors update live as the user types without being too aggressive.

5. How did you make error messages user-friendly?  
   - They appear under the input, are cleared when valid, and are concise and readable.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage

## Author

Autumn Thomas
