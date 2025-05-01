document.addEventListener("DOMContentLoaded", () => {
    const entryBox = document.getElementById("entryBox");
    const imageFlipper = document.getElementById("imageFlipper");
    const correctWord = "Charizard"; // Replace with your desired word

    entryBox.addEventListener("input", () => {
        if (entryBox.value.toLowerCase() === correctWord.toLowerCase()) {
            imageFlipper.classList.add("flipped");
        } else {
            imageFlipper.classList.remove("flipped");
        }
    });
});


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