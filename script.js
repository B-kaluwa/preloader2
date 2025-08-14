document.addEventListener("DOMContentLoaded", () => {
  const terminalText = document.getElementById("terminalText");
  const progressBar = document.getElementById("progressBar");
  const percentage = document.getElementById("percentage");
  const preloader = document.getElementById("preloader");
  const mainContent = document.querySelector("main");

  const lines = [
    "Initializing system...",
    "Loading resources...",
    "Compiling assets...",
    "Establishing secure connection...",
    "Launching experience..."
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let progress = 0;

  // Typing effect
  function typeLine() {
    if (charIndex < lines[lineIndex].length) {
      terminalText.textContent += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      setTimeout(() => {
        lineIndex++;
        if (lineIndex < lines.length) {
          terminalText.textContent = "";
          charIndex = 0;
          typeLine();
        }
      }, 500);
    }
  }

  // Progress bar fill
  function updateProgress() {
    if (progress < 100) {
      progress += Math.floor(Math.random() * 5) + 1;
      if (progress > 100) progress = 100;
      progressBar.style.width = progress + "%";
      percentage.textContent = progress + "%";
      setTimeout(updateProgress, 200);
    }
  }

  // Run animations
  typeLine();
  updateProgress();

  // Ensure preloader stays for at least 3 seconds
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        preloader.style.display = "none";
        mainContent.style.display = "block";
      }, 500);
    }, 7000);
  });
});
