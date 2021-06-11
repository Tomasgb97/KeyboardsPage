const menuButton = document.getElementById('menubutt');

menuButton.addEventListener('click', function(){

    const menuNav = document.getElementById('menunav');
    menuNav.classList.toggle('menushow');
    menuNav.classList.toggle('menuhidd');

});


const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

const nextSlide = () => {

    const images = document.querySelectorAll('.slide');
    let actual;

    images.forEach(function(one){

       const attr = one.getAttribute('style');
       if(attr == 'display: block'){

        const number = one.getAttribute('id');
        if(number == 5){
            actual = 0;
        }else{
        actual = parseInt(number);}
       }

       one.setAttribute('style', 'display: none');
    })
    console.log(actual)
    document.getElementById(`${actual + 1}`).setAttribute('style', 'display: block');

}




const previousSlide = () => {

    const images = document.querySelectorAll('.slide');
    let actual;

    images.forEach(function(one){

       const attr = one.getAttribute('style');
       if(attr == 'display: block'){

        const number = one.getAttribute('id');
        if(number == 1){
            actual = 5;
        }else{
        actual = parseInt(number);}
       }

       one.setAttribute('style', 'display: none');
    })
    console.log(actual)
    document.getElementById(`${actual - 1}`).setAttribute('style', 'display: block');
}




nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('click', previousSlide)

function runner() {
    nextSlide();
    setTimeout(function() {
        runner();
    }, 5000);
}

runner();