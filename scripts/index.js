// make hidden copyright section in footer appear

// select the copyright element
const copyright = document.getElementById("copyright");

// defind observer

const observer = new IntersectionObserver(
  (entry) => {
    entry.forEach((entry) => {
      // check if element is in view
      if (entry.isIntersecting) {
        copyright.classList.add("appear");
        observer.unobserve(entry.target); // stop watching after the animation trigger
      }
    });
  },
  { threshold: 0.15 }, // trigger when 15% of copyright is visible
);

observer.observe(copyright);
