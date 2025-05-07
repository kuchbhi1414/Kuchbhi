document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('scene1').classList.add('hidden');
  const scene3 = document.getElementById('scene3');
  scene3.classList.remove('hidden');

  const balloonsContainer = document.getElementById('balloonsContainer');
  const photos = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with actual image paths

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

  setTimeout(() => {
    document.getElementById('messageText').classList.remove('hidden');
  }, 5000);
});

document.getElementById('surpriseButton').addEventListener('click', () => {
  window.location.href = 'surprise.html';
});