// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');
  const synth = window.speechSynthesis;

  // Load voices when they become available
  function loadVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  // Load voices on page load
  loadVoices();

  // Reload voices when they become available (some browsers load async)
  synth.addEventListener('voiceschanged', loadVoices);

  // Handle talk button click
  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    if (!text || voiceSelect.value === 'select') {
      return;
    }

    // Cancel any ongoing speech
    synth.cancel();

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set the selected voice
    const voices = synth.getVoices();
    utterance.voice = voices[voiceSelect.value];

    // Swap to open-mouth face when speaking starts
    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    // Swap back to normal face when speaking ends
    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    // Speak the text
    synth.speak(utterance);
  });
}