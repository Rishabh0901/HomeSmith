const emailInput = document.getElementById('email');
const form = document.getElementById('x');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Email updated successfully!');
});