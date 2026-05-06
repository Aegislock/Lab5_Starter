// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const imageElement = document.querySelector('img');
  const audioElement = document.querySelector('audio');
  const volumeIcon = document.querySelector('#volume-controls img');

  // Map horn types to their image and audio paths
  const hornData = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3'
    }
  };

  // Handle horn selection
  hornSelect.addEventListener('change', (e) => {
    const selectedHorn = e.target.value;
    if (hornData[selectedHorn]) {
      imageElement.src = hornData[selectedHorn].image;
      audioElement.src = hornData[selectedHorn].audio;
    }
  });

  // Handle volume slider changes
  volumeSlider.addEventListener('input', (e) => {
    const volume = parseInt(e.target.value);
    
    // Update volume icon based on volume level
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    
    // Set audio volume (0-1 range instead of 0-100)
    audioElement.volume = volume / 100;
  });

  // Handle play button click
  playButton.addEventListener('click', () => {
    // Play the audio
    audioElement.currentTime = 0;
    audioElement.play();
    
    // If party horn is selected, trigger confetti
    if (hornSelect.value === 'party-horn') {
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  });
}