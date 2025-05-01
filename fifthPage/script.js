document.addEventListener("DOMContentLoaded", () => {
    const entryBox = document.getElementById("entryBox");
    const imageFlipper = document.getElementById("imageFlipper");
    const correctWord = "Mew"; //

    entryBox.addEventListener("input", () => {
        if (entryBox.value.toLowerCase() === correctWord.toLowerCase()) {
            imageFlipper.classList.add("flipped");
        } else {
            imageFlipper.classList.remove("flipped");
        }
    });
});

// - -----------------

document.getElementById('hintButton').addEventListener('click', () => {
    const hintText = document.getElementById('hintText');
    const showing = hintText.style.display === 'block';
    hintText.style.display = showing ? 'none' : 'block';
    setTimeout(() => hintText.style.opacity = showing ? 0 : 1, 0);
    if (showing) setTimeout(() => hintText.style.display = 'none', 500);
});