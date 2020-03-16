// HEADER NAVIGATION WHICH CHANGE COLOR WITH SCROLL

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

// MAKE ELEMENT OF HEADER NAVIGATION RED

const headerNav = (event) => {
    document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
    if(event.target!=event.currentTarget) {
        event.target.classList.add('a-red');
    }
};




//BIG PART WITH SLIDER

let items = document.querySelectorAll('.iphones');
let currentItem=0;
let isEnabled = true;

function changeBG() {
    if(document.querySelector('.slider').classList.contains('slider2-bg')){
        document.querySelector('.slider').classList.remove('slider2-bg');
    }
    else document.querySelector('.slider').classList.add('slider2-bg');
}

document.querySelector('.arrow.left').addEventListener('click', function(){
    changeBG();
    if(isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.arrow.right').addEventListener('click', function(){
    changeBG();
    if(isEnabled) {
        nextItem(currentItem);
    }
});

function changeCurrentItem (number) {
    currentItem = (number + items.length) % items.length;
}

function previousItem(number) {
    hideItem('to-right');
    changeCurrentItem(number-1);
    showItem('from-left');
}

function nextItem(number) {
    hideItem('to-left');
    changeCurrentItem(number+1);
    showItem('from-right');
}

function hideItem (direction) {
    isEnabled=false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem (direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled=true;
    });
}

// END OF SLIDER




// MAKE PORTFOLIO NAVIGATION AND CHANGE PLACES FOR PHOTOS

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

// MAKE BORDERS FOR PHOTOS

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

// MAKE HALF-OPACITY BACKGROUND AND FORM WITH SUBJECT AND DESCRIPTION

const messageForm = (event) => {
    let inputs=document.querySelectorAll('input');
    if(inputs[0].validity.valid && inputs[1].validity.valid) {
        document.querySelector('.message').classList.add('fixed-back');
        document.querySelector('.message-window').classList.add('window-text');
        document.querySelector('.message-window__text').innerHTML="<p>The letter was sent</p>";
        if(inputs[2].value.length==0) 
            document.querySelector('.message-window__text').innerHTML+="<p>Without subject</p>";
        else document.querySelector('.message-window__text').innerHTML+="<p>Subject : "+inputs[2].value+"</p>";

        if(inputs[3].value.length==0) 
            document.querySelector('.message-window__text').innerHTML+="<p>Without description</p>";
        else document.querySelector('.message-window__text').innerHTML+="<p>Description : "+inputs[3].value+"</p>";
        document.querySelector('.window-button').addEventListener('click', function() {
            document.querySelector('.message').classList.remove('fixed-back');
            document.querySelector('.message-window').classList.remove('window-text');
            document.querySelector('.message-window__text').innerHTML="";
            inputs.forEach(item=>item.value="");
        });
        event.preventDefault();
    }
};

window.addEventListener('scroll', scrollNav);
document.querySelector('.header__nav').addEventListener('click', headerNav);

document.querySelector('.portfolio-nav').addEventListener('click', portfolioNav);
document.querySelector('.portfolio-images').addEventListener('click', portfolioBorder);
document.querySelector('button').addEventListener('click', messageForm);