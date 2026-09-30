const startBtn = document.getElementById('startBtn');
const output = document.getElementById('output');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US'; // தமிழ் குரலுக்கு 'ta-IN' என மாற்றலாம்

  startBtn.addEventListener('click', () => {
    recognition.start();
    output.innerText = "Listening...";
    output.style.color = "blue";
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.innerText = transcript;
    output.style.color = "#333";
  };

  recognition.onerror = () => {
    output.innerText = "Error recognizing voice. Try again!";
    output.style.color = "red";
  };
} else {
  output.innerText = "Browser does not support Speech Recognition.";
}