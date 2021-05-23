

const darkmode = document.getElementById('dark');

darkmode.addEventListener('click', ()=>{
    document.body.classList.toggle('darktheme');

    
    
});


const icon = document.getElementById('icon');
const icon2 = document.querySelector('.fa.fa-bars');
icon.addEventListener('click', (icon2) =>{
    document.body.classList.toggle('bouton');
    icon2.target.classList.toggle("fa-times");
    icon2.target.classList.toggle("fa fa-bars");
})


const scrollBtn = document.querySelector('.scroll-btn');


window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = 'block';
    }
    else {
        scrollBtn.style.display = 'none';
    }
})
scrollBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})


let imagens = document.querySelectorAll('.small-img');
let modal = document.querySelector('.base-modal');
let modalimage = document.getElementById('modal-img');
let butonclose = document.getElementById('bt-close');
let linkimage = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', () => {

        linkimage = imagens[i].getAttribute('src');
        modalimage.setAttribute('src', linkimage);
        modal.classList.toggle('modal-active');
    });

}


butonclose.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
});




