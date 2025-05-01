document.getElementById('hintButton').addEventListener('click', function () {
    const hintText = document.getElementById('hintText');
    if (hintText.style.display === 'none' || hintText.style.display === '') {
        hintText.style.display = 'block';
        setTimeout(() => {
            hintText.style.opacity = 1;
        }, 0);
    } else {
        hintText.style.opacity = 0;
        setTimeout(() => {
            hintText.style.display = 'none';
        }, 500);
    }
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});