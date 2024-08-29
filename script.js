const text = "I'm a ...";
const typedTextElement = document.getElementById('typed-text');
let index = 0;

function type() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150); // Adjust the speed of typing here
    }
}

document.addEventListener('DOMContentLoaded', type);
