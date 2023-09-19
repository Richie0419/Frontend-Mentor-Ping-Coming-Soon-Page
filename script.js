const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');
const submitButton = document.querySelector('.sub-btn');

// Regular expression for email validation
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Function to validate email and show the error message
function validateEmail() {
    const email = emailInput.value.trim();

    if (!emailPattern.test(email)) {
        errorMsg.style.display = 'block';
        emailInput.classList.add('error-input');

        setTimeout(() => {
            errorMsg.style.display = 'none';
            emailInput.classList.remove('error-input');
            emailInput.value = '';
        }, 5000); 
    }
}

// Event listener for form submission
submitButton.addEventListener('click', function(event) {
    validateEmail();

    // Prevent form submission if the email is not valid
    if (!emailPattern.test(emailInput.value.trim())) {
        event.preventDefault();
    }
});

emailInput.addEventListener('input', function() {
    errorMsg.style.display = 'none';
    emailInput.classList.remove('error-input');
});