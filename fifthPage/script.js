document.addEventListener("DOMContentLoaded", () => {
    const entryBox = document.getElementById("entryBox");
    const imageFlipper = document.getElementById("imageFlipper");
    const correctWord = "Mew"; // Replace with your desired word

    entryBox.addEventListener("input", () => {
        if (entryBox.value.toLowerCase() === correctWord.toLowerCase()) {
            imageFlipper.classList.add("flipped");
        } else {
            imageFlipper.classList.remove("flipped");
        }
    });
});