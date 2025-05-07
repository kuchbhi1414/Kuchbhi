 document.addEventListener("DOMContentLoaded", () => {
        const heartContainer = document.getElementById("heart-container");

        // Function to create a heart
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.textContent = "❤️";

            // Random position and size
            heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
            heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Random size
            heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random animation time

            heartContainer.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000); // Match animation duration
        }
  // Function to create multiple hearts at once
        function createMultipleHearts() {
            const numberOfHearts = 50; // Adjust this number for more hearts at once
            for (let i = 0; i < numberOfHearts; i++) {
                createHeart();
            }
        }

        // Generate hearts every 300ms
        setInterval(createHeart, 300);
    });
document.getElementById("startButton").addEventListener("click", () => {
  const audio = new Audio("birthday_music(1).mp3");
  audio.loop = true;
  audio.play().catch(error => {
    console.log("Autoplay prevented:", error);
  });
  document.getElementById("scene1").classList.add("hidden");
  const scene3 = document.getElementById("scene3");
  scene3.classList.remove("hidden");
     
  const balloonsContainer = document.getElementById("balloonsContainer");
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
