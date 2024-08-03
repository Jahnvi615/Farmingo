document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can add form submission logic here, like sending data to a server
    alert('Form submitted!');

    // Clear the form
    this.reset();
});
