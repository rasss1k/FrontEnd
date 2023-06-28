const divElements = document.querySelectorAll('.row__item');

divElements.forEach(function(divElement) {
  divElement.addEventListener('mouseenter', function() {
    divElement.style.backgroundColor = '#1D337E';
    divElement.style.transform = 'scale(1.1)';
  });

  divElement.addEventListener('mouseleave', function() {
    divElement.style.backgroundColor = 'white';
    divElement.style.transform = 'scale(1)';
  });
});

const imageElement = document.querySelector('.pic');

imageElement.addEventListener('mouseenter', function() {
  imageElement.style.width = '50px';
});

imageElement.addEventListener('mouseleave', function() {
  imageElement.style.width = '20px';
});

const animatedText = document.querySelector('.info__about__us');

    function fadeInOnScroll() {
      const elementOffset = animatedText.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > elementOffset - windowHeight + 100) {
        animatedText.classList.add('fade-in');
      }
    }

    window.addEventListener('scroll', fadeInOnScroll);


    const divElement = document.querySelector('.intro__text__btn');
    const gradientColorsOrig = ["#3553BF", "#294194"]; 
    const gradientColors = ["#00008B", "#191970"]; 
    

    divElement.addEventListener('mouseenter', function() {
      divElement.style.background = `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`;
    });

    divElement.addEventListener('mouseleave', function() {
        divElement.style.background = `radial-gradient(100% 100% at 50% 0%, ${gradientColorsOrig[0]}, ${gradientColorsOrig[1]})`;
    });

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
      if (document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });

    function scrollToTop() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    

    function toggleTheme() {
      var themeElement = document.getElementById('theme');
      var icon = document.getElementById('themeIcon');
    
      if (themeElement.href.includes('styles.css')) {
        themeElement.href = 'black.css';
        icon.src = 'acesst/sunny.png';
      } else {
        themeElement.href = 'styles.css';
        icon.src = 'acesst/moon.png';
      }
      
    }


    const productDescriptions = document.querySelectorAll('.product-description');

    productDescriptions.forEach((description) => {
      description.addEventListener('mouseenter', () => {
        description.classList.add('animate__animated', 'animate__fadeInUp');
      });
    
      description.addEventListener('animationend', () => {
        description.classList.remove('animate__animated', 'animate__fadeInUp');
      });
    });

    const element = document.getElementById('element');

function fadeLeft() {
  element.classList.add('fade-left-active');
}

setTimeout(fadeLeft, 10000);

const element1 = document.getElementById('element');

function fadeInRight() {
  element1.classList.add('fade-in-right-active');
}

setTimeout(fadeInRight, 1000);