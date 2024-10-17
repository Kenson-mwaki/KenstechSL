document.querySelector('form').addEventListener('submit', function (event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.checkValidity()) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});
