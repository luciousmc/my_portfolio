// SHOW HIDE MENU ON MOBILE
const navBar = document.querySelector(".nav-container");
const menu = document.getElementById("menu");
const toTopEl = document.getElementById("to-top");

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
  const about = document.getElementById("about");
  const { top } = getScrollPos(about);
  if (window.pageYOffset > top) {
    toTopEl.style.display = "flex";
  } else {
    toTopEl.style.display = "none";
  }
});

toTopEl.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
