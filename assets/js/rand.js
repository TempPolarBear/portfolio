function random(min, max) {
    try {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    } catch (error) {
        document.getElementById("display").value = error;
    }
}

function randomWord(input) {
    try {
        const words = input.split(",");
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].trim();
    } catch (error) {
        document.getElementById("display").value = error;
    }
}