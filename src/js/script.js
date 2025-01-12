function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    event.target.reset();
}
