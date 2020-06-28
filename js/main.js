// SHOW HIDE MENU ON MOBILE
const navBar = document.querySelector(".nav-container");
const menu = document.getElementById("menu");

navBar.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav-toggle")) {
    menu.classList.toggle("show-menu");
  }
});

// SMOOTH SCROLLING
function getScrollPos(element) {
  let xPos = 0,
    yPos = 0;

  xPos += element.offsetLeft - element.scrollLeft + element.clientLeft;
  yPos += element.offsetTop - element.scrollTop + element.clientTop;

  return {
    top: yPos,
    left: xPos,
  };
}

menu.addEventListener("click", function (event) {
  event.preventDefault();
  const hash = event.target.hash;
  const scrollTarget = document.querySelector(hash);
  const { top: scrollTop } = getScrollPos(scrollTarget);
  let top;

  if (window.getComputedStyle(navBar).display === "none") {
    top = navBar.offsetHeight;
  } else {
    top = scrollTop - navBar.offsetHeight;
  }

  window.scroll({
    top,
    left: 0,
    behavior: "smooth",
  });
});
