// Funkcjonalność 1: Zmiana koloru tła
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f9c74f', '#90be6d', '#f94144', '#577590', '#f3722c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Funkcjonalność 2: Wyświetlanie wpisanego tekstu
document.getElementById('submitButton').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;
    document.getElementById('displayText').textContent = inputText;
});