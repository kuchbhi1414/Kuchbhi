// Event listener for the "Tap for something special" button
document.getElementById('startButton').addEventListener('click', () => {
  // Hide the first scene
  const scene1 = document.getElementById('scene1');
  scene1.classList.add('hidden');

  // Show the third scene
  const scene3 = document.getElementById('scene3');
  scene3.classList.remove('hidden');

  // Add balloons and images dynamically
  const balloonsContainer = document.getElementById('balloonsContainer');
  const photos = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with actual image paths

  // Create balloons for each photo
  photos.forEach((src, index) => {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${30 + index * 100}px`;
    balloon.style.animationDelay = `${index * 1.5}s`;

    const img = document.createElement('img');
    img.src = src;

    balloon.appendChild(img);
    balloonsContainer.appendChild(balloon);
  });

  // Show the message text after a delay
  setTimeout(() => {
    const messageText = document.getElementById('messageText');
    messageText.classList.remove('hidden');
  }, 5000); // Adjust delay as needed
});

// Event listener for the "Tap for Surprise" button
document.getElementById('surpriseButton').addEventListener('click', () => {
  // Navigate to the surprise page
  window.location.href = 'surprise.html';
});