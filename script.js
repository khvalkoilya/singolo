const scrollNav = (event) => {
    let y=scrollY;
    if(y>=0&&y<600) {
        document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
        document.querySelectorAll('.header__nav > a')[0].classList.add('a-red');
    }
    if(y>=600&&y<1100) {
        document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
        document.querySelectorAll('.header__nav > a')[1].classList.add('a-red');
    }
    if(y>1102&&y<1966) {
        document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
        document.querySelectorAll('.header__nav > a')[2].classList.add('a-red');
    }
    if(y>1968&&y<2700) {
        document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
        document.querySelectorAll('.header__nav > a')[3].classList.add('a-red');
    }
    if(y>2700) {
        document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
        document.querySelectorAll('.header__nav > a')[4].classList.add('a-red');
    }
};

const headerNav = (event) => {
    document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
    if(event.target!=event.currentTarget) {
        event.target.classList.add('a-red');
    }
};

const sliderFunc = (event) => {
    if(document.querySelector('.slider').classList.contains('slider2-bg')){
        document.querySelector('.slider').classList.remove('slider2-bg');
    }
    else document.querySelector('.slider').classList.add('slider2-bg');
}

const portfolioNav = (event) => {
    document.querySelectorAll('.portfolio-nav > p').forEach(p=> { p.classList.remove('p-white') });
    if(event.target.parentElement===document.querySelector('.portfolio-nav')) {
        event.target.classList.add('p-white');
        let array=[];
        for(let i=0;i<12;i++) {
            array.push(Math.floor(Math.random()*100));
        }
        let images=Array.from(document.querySelector('.portfolio-images').children);
        for(let item of images) {
            item.style.order=array.shift();
        }
    }
};

const portfolioBorder = (event) => {
    if (event.target.parentElement.classList.contains("portfolio-border"))
        event.target.parentElement.classList.remove('portfolio-border');
    else {
        document.querySelectorAll('.portfolio-images__image').forEach(div=> { div.classList.remove('portfolio-border') });
        if(event.target!=event.currentTarget) { 
            event.target.parentElement.classList.add('portfolio-border'); 
        }
    }
};

const messageForm = (event) => {
    let inputs=document.querySelectorAll('input');
    if(inputs[0].validity.valid && inputs[1].validity.valid) {
        document.querySelector('.message').classList.add('fixed-back');
        event.preventDefault();
    }
};

window.addEventListener('scroll', scrollNav);
document.querySelector('.header__nav').addEventListener('click', headerNav);
document.querySelector('.arrow.right').addEventListener('click', sliderFunc);
document.querySelector('.arrow.left').addEventListener('click', sliderFunc);
document.querySelector('.portfolio-nav').addEventListener('click', portfolioNav);
document.querySelector('.portfolio-images').addEventListener('click', portfolioBorder);
document.querySelector('button').addEventListener('click', messageForm);