
// Check for browser speech recognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Invoke speech recognition object
const recognition = new SpeechRecognition();

recognition.interimResults = true;

// Create paragraph element
let p = document.createElement('p');

// Select words container
const container = document.querySelector('.para-container');

container.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    p.innerText = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement('p')
        container.appendChild(p);
    }

    console.log(transcript);
})

recognition.addEventListener('end', recognition.start);

recognition.start();