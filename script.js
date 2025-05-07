<script>
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

        // Generate hearts every 300ms
        setInterval(createHeart, 300);
    });
</script>
document.getElementById("startButton").addEventListener("click", () => {
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
