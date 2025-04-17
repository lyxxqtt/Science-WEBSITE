const images = [
    '/images/MAIN-TOPIC-IMAGE-01.png',
    '/images/MAIN-TOPIC-IMAGE-02.png',
  ];

  let currentImage = 0;

  function changeBackground() {
    currentImage = (currentImage + 1) % images.length;
    const topic = document.getElementById("topic");
    topic.style.backgroundImage = `url('${images[currentImage]}')`;
  }

  setInterval(changeBackground, 5000); 
