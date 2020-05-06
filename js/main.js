// SHOW HIDE MENU ON MOBILE
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
let showMenu = false;

menuButton.addEventListener("click", function(event){
  if (!showMenu){
    menu.classList.add('show-menu');
    showMenu = true;
  } else {
    menu.classList.remove('show-menu');
    showMenu = false;
  }
});