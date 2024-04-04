document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('animatedContainer');
  const animatedText = document.getElementById('animatedText');
  
  const textContent = [
    "I am a driven professional with a passion for innovation in design and technology.",
    "With a solid background in game development, I excel at pushing the boundaries of interactive experiences.",
    "My work is characterized by a commitment to excellence and meticulous attention to detail.",
    "I thrive on creative challenges, consistently delivering captivating and inspiring solutions.",
    "Beyond my professional pursuits, I value continuous learning and seek opportunities to broaden my knowledge and perspective.",
    "I am particularly interested in projects that encourage intellectual growth and challenge conventional thinking.",
    "Looking forward, I am eager to contribute to technological advancement and drive positive change through innovative design and problem-solving.",
    "My goal is to create not only visually striking experiences but also meaningful connections with users.",
    "I am ready to leverage my skills and insights to make a lasting impact in the fields of art, technology, and beyond."
 ];

  function animateText() {
    textContent.forEach((line, index) => {
      const words = line.split(' ');
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        animatedText.appendChild(span);
        anime({
          targets: span,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 2000,
          delay: index * 500 + i * 50,
          easing: 'easeInOutQuad'
        });
      });
      animatedText.appendChild(document.createElement('br'));
    });
  }

  function animateContainer() {
    anime({
      targets: container,
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: animateText // Call animateText function after container animation is complete
    });
  }

  animateContainer();
});
