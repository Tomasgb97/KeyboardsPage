const menuButton = document.getElementById('menubutt');

menuButton.addEventListener('click', function(){

    const menuNav = document.getElementById('menunav');
    menuNav.classList.toggle('menushow');
    menuNav.classList.toggle('menuhidd');

})