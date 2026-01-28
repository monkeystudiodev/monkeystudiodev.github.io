// Load in animation
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
});

// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  function checkScroll() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

// Stat Counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  function animateCounters() {
    counters.forEach((counter) => {
      const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const speed = 200;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  }

  animateCounters();
});

// Dynamic Custom Clicking Cursor
const defaultCursor = 'url("images/monkey-cursor.png"), default';
const clickCursor = 'url("images/monkey-click.png"), default';
const linkClickCursor = 'url("images/monkey-hand.png"), default';

function isClickableElement(el) {
  return el.closest(
    'a, button, [role="button"], [onclick], input, textarea, select, [role="context-menu"], context-menu'
  );
}

document.addEventListener("mousedown", (e) => {
  if (e.button !== 0) return;

  const target = e.target;
  const newCursor = isClickableElement(target) ? linkClickCursor : clickCursor;

  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    element.style.cursor = newCursor;
  });
});

document.addEventListener("mouseup", () => {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => {
      element.style.cursor = defaultCursor;
    });
});

document.addEventListener("mousehover", () => {
  const allElements = document.querySelectorAll("a");
  allElements.forEach((element) => {
    element.style.cursor = defaultCursor;
  });
});

// Background particles
tsParticles.load("monkeyparticles", {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        area: 400,
      },
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      speed: 1,
    },
    shape: {
      type: "image",
      image: {
        src: "images/monkey-face10x.png",
        width: 32,
        height: 32,
      },
    },
    size: {
      value: 16,
      random: true,
    },
    opacity: {
      value: 1,
    },
  },
  detectRetina: true,
});

tsParticles.load("bananaparticles", {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        area: 400,
      },
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      speed: 1,
    },
    shape: {
      type: "image",
      image: {
        src: "images/banana.png",
        width: 32,
        height: 32,
      },
    },
    rotate: {
      value: { min: -540, max: 0 },
      animation: {
        enable: true,
        speed: 10,
        sync: false
      }
    },
    size: {
      value: 16,
      random: true,
    },
    opacity: {
      value: 1,
    },
  },
  detectRetina: true,
});

tsParticles.load("fun-banana-particles", {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 800,
      },
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out",
      },
      speed: 10,
    },
    shape: {
      type: "image",
      image: {
        src: "images/banana10x.png",
        width: 64,
        height: 64,
      },
    },
    size: {
      value: 32,
      random: true,
    },
    opacity: {
      value: 1,
    },
  },
  detectRetina: true,
});

document.getElementById('theme-toggle').onclick = () => {
  document.body.classList.toggle('light-mode');
};

function playBananaSound() {
  const sound = new Audio('sounds/monkey.mp3');
  sound.volume = 0.1;
  sound.pause();
  sound.load();
  sound.play();
}

// let isSnapping = false;
// window.addEventListener('wheel', (e) => {
//   if (isSnapping) {
//     e.preventDefault(); // Prevent repeated inputs while snapping
//   }
//   isSnapping = true;
//   setTimeout(() => {
//     isSnapping = false;
//   }, 100); // Adjust if needed
// }, { passive: false });