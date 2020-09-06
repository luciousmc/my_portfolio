const navBar = document.querySelector(".nav-container");
const menu = document.getElementById("menu");
const aboutSection = document.getElementById("about");
const toTopEl = document.getElementById("to-top");
const scrollDownEl = document.getElementById("scroll-down");

// SHOW HIDE MENU ON MOBILE
navBar.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav-toggle")) {
    menu.classList.toggle("show-menu");
  }
});

// SMOOTH SCROLLING
function getScrollPos(element) {
  let xPos = 0;
  let yPos = 0;

  xPos += element.offsetLeft - element.scrollLeft + element.clientLeft;
  yPos += element.offsetTop - element.scrollTop + element.clientTop;

  return {
    top: yPos,
    left: xPos,
  };
}

menu.addEventListener("click", function (event) {
  event.preventDefault();
  const hash = event.target.hash.replace("#", "");
  const scrollTarget = document.getElementById(hash);
  const { top: scrollTop } = getScrollPos(scrollTarget);
  let top;

  if (window.screen.width > 750) {
    top = scrollTop;
  } else {
    top = scrollTop - navBar.offsetHeight;
  }

  window.scroll({
    top,
    left: 0,
    behavior: "smooth",
  });
});

// Back to top icon
window.addEventListener("scroll", () => {
  const { top } = getScrollPos(aboutSection);
  if (window.pageYOffset >= top) {
    toTopEl.style.display = "flex";
    scrollDownEl.style.display = "none";
  } else {
    toTopEl.style.display = "none";
    scrollDownEl.style.display = "flex";
  }
});

scrollDownEl.addEventListener("click", () => {
  const { top } = getScrollPos(aboutSection);

  if (window.screen.width > 750) {
    top = scrollTop;
  } else {
    top = scrollTop - navBar.offsetHeight;
  }

  window.scroll({
    top,
    left: 0,
    behavior: "smooth",
  });
});

toTopEl.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
