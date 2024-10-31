const testText = [
    "The mountain trail was quiet, with only the sound of the wind rustling through the trees. The sun was setting, casting a warm glow over the peaks and valleys. As they reached the summit, a sense of peace and accomplishment washed over them.",
    "Learning to code can be both challenging and rewarding. Every error you encounter helps you grow, and every program you complete boosts your confidence. With practice and persistence, anyone can become proficient in coding.",
    "A rainy day offers the perfect excuse to cozy up with a good book and a hot cup of tea. The sound of raindrops pattering on the window creates a soothing atmosphere. With each page turned, you find yourself lost in a world far from your own.",
    "In the heart of the bustling city, there's a small café known for its homemade pastries. Every morning, the aroma of freshly baked bread fills the air, drawing people in. The café has become a favorite spot for locals and visitors alike.",
    "Space exploration has always fascinated humanity, inspiring dreams of distant planets and galaxies. Each discovery brings us closer to understanding the universe and our place in it. One day, humans may even set foot on worlds beyond our own."
  ];

  let startTime;
  let timerRunning = false;
  const testArea = document.getElementById("testArea");
  const typingArea = document.getElementById("typingArea");
  const resultDisplay = document.getElementById("result");
  const startButton = document.getElementById("startButton");
  const submitButton = document.getElementById("submitButton");
  const resetButton = document.getElementById("resetButton");

  
  function startTypingTest() {
    const randomText = testText[Math.floor(Math.random() * testText.length)];
    testArea.textContent = randomText;
    typingArea.value = "";
    typingArea.disabled = false;
    typingArea.focus();
    startButton.disabled = true;
    submitButton.disabled = false;
    resetButton.disabled = false;
    resultDisplay.textContent = "";
    startTime = new Date();
    timerRunning = true;
  }

  
  function submitTypingTest() {
    if (timerRunning) {
      const endTime = new Date();
      const timeDiff = (endTime - startTime) / 1000;  
      const timeInMinutes = timeDiff / 60;

      const text = typingArea.value.trim();
      const wordCount = text.split(/\s+/).length;

      const wpm = Math.round(wordCount / timeInMinutes);
      resultDisplay.textContent = `Words Per Minute (WPM): ${wpm}`;
      timerRunning = false;
      submitButton.disabled = true;  
    }
  }

 
  function resetTypingTest() {
    typingArea.value = "";
    typingArea.disabled = true;
    startButton.disabled = false;
    submitButton.disabled = true;
    resetButton.disabled = true;
    resultDisplay.textContent = "";
    testArea.textContent = "Click 'Start' to begin typing the paragraph displayed here.";
    timerRunning = false;
  }

  
  startButton.addEventListener("click", startTypingTest);
  submitButton.addEventListener("click", submitTypingTest);
  resetButton.addEventListener("click", resetTypingTest);