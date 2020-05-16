// SHOW HIDE MENU ON MOBILE
const navBar = document.querySelector('.nav-container');
const menu = document.getElementById('menu');

navBar.addEventListener('click', function(event) {

  if (event.target.attributes.class){
    const { value } = event.target.attributes.class;

    if (value === 'nav-toggle') {
      if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
      } else {
        menu.classList.add('show-menu');
      }
    }
  }

});
