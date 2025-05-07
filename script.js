document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("scene1").classList.add("hidden");
  const scene3 = document.getElementById("scene3");
  scene3.classList.remove("hidden");

  const balloonsContainer = document.getElementById("balloonsContainer");
  // Add the audio element dynamically
    const audio = new Audio(birthday_music.mp3); // Replace with your music file path
    audio.loop = true; // Set the music to loop
  const photos = ["img1.jpeg", "img2.jpeg", "img3.jpeg"]; // Replace with actual image paths

  photos.forEach((src, index) => {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${30 + index * 100}px`;
    balloon.style.animationDelay = `${index * 1.5}s`;

    const img = document.createElement("img");
    img.src = src;

    balloon.appendChild(img);
    balloonsContainer.appendChild(balloon);
  });

  document.getElementById("messageText").classList.remove("hidden");
});

document.getElementById("surpriseButton").addEventListener("click", () => {
  window.location.href = "surprise.html";
});
