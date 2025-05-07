document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const scene1 = document.getElementById('scene1');
  const scene3 = document.getElementById('scene3');
  const balloonsContainer = document.getElementById('balloonsContainer');
  const messageText = document.getElementById('messageText');
  const surpriseButton = document.getElementById('surpriseButton');

  const photoList = [
    'img1.jpg', // Replace with actual photo paths
    'img2.jpg',
    'img3.jpg',
    'img4.jpg'
  ];

  startButton.addEventListener('click', () => {
    scene1.classList.add('hidden');
    scene3.classList.remove('hidden');
    loadBalloons();
  });

  function loadBalloons() {
    photoList.forEach((src, i) => {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = `${40 + i * 80}px`;
      balloon.style.animationDelay = `${i * 0.8}s`;

      const img = document.createElement('img');
      img.src = src;
      balloon.appendChild(img);
      balloonsContainer.appendChild(balloon);
    });

    setTimeout(() => {
      messageText.classList.remove('hidden');
    }, 4000);
  }

  surpriseButton.addEventListener('click', () => {
    window.location.href = 'surprise.html';
  });
});