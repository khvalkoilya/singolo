// HEADER NAVIGATION WHICH CHANGE COLOR WITH SCROLL

const scrollNav = (event) => {
    let y=scrollY;
    if(window.innerWidth>1020) {
        if(y>=0&&y<600) {
            document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
            document.querySelectorAll('.header__nav > a')[0].classList.add('a-red');
        }
        if(y>=600&&y<1090) {
            document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
            document.querySelectorAll('.header__nav > a')[1].classList.add('a-red');
        }
        if(y>1090&&y<1966) {
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
    }
    else {
        if(window.innerWidth>768) {
            if(y>=0&&y<452) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[0].classList.add('a-red');
            }
            if(y>=452&&y<1192) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[1].classList.add('a-red');
            }
            if(y>1192&&y<2293) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[2].classList.add('a-red');
            }
            if(y>2293&&y<3000) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[3].classList.add('a-red');
            }
            if(y>3000) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[4].classList.add('a-red');
            }
        }
        else {
            console.log(y);
            if(y>=0&&y<225) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[0].classList.add('a-red');
            }
            if(y>=226&&y<1118) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[1].classList.add('a-red');
            }
            if(y>1220&&y<2093) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[2].classList.add('a-red');
            }
            if(y>=2095&&y<3860) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[3].classList.add('a-red');
            }
            if(y>3863) {
                document.querySelectorAll('.header__nav > a').forEach(a=> { a.classList.remove('a-red') });
                document.querySelectorAll('.header__nav > a')[4].classList.add('a-red');
            }
        }
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

// MAKE SCREEN ON/OFF 

const verticalScreen = () => {
    if(document.querySelector('.vertical-blackRect').classList.length==2)
        document.querySelector('.vertical-blackRect').classList.remove('display-of-iphones');
    else document.querySelector('.vertical-blackRect').classList.add('display-of-iphones');
}

const horizontalScreen = () => {
    if(document.querySelector('.horizontal-blackRect').classList.length==2)
        document.querySelector('.horizontal-blackRect').classList.remove('display-of-iphones');
    else document.querySelector('.horizontal-blackRect').classList.add('display-of-iphones');
}

// MAKE PORTFOLIO NAVIGATION AND CHANGE PLACES FOR PHOTOS

const portfolioNav = (event) => {
    document.querySelectorAll('.portfolio-nav > p').forEach(p=> { p.classList.remove('p-white') });
    if(event.target.parentElement===document.querySelector('.portfolio-nav')) {
        event.target.classList.add('p-white');
        let images=Array.from(document.querySelector('.portfolio-images').children);
        images=shuffle(images);
        function shuffle(arr){
            let j, temp;
            for(var i = arr.length - 1; i > 0; i--){
                j = Math.floor(Math.random()*(i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            return arr;
        }
        document.querySelector('.portfolio-images').innerHTML="";
        let outer="";
        for(let item=0; item<images.length; item++) {
            outer+=images[item].outerHTML;
        }
        document.querySelector('.portfolio-images').innerHTML=outer; 

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
        document.querySelector('.message').addEventListener('click', function() {
            document.querySelector('.message').classList.remove('fixed-back');
            document.querySelector('.message-window').classList.remove('window-text');
            document.querySelector('.message-window__text').innerHTML="";
            inputs.forEach(item=>item.value="");
        });
        event.preventDefault();
    }
};

const rotateBurger = () => {
    let burger=document.querySelector('.burger-icon').classList;
    if(burger.length==2) {
        burger.remove('transform__burger-icon');
        document.querySelector('.bg-for-burger').classList.remove('fixed-back');
        document.querySelector('.header-name').classList.remove('header-name__burger');
        document.querySelector('.header__nav').classList.remove('header__nav__transform');
    }
    else  {
        burger.add('transform__burger-icon');
        document.querySelector('.bg-for-burger').classList.add('fixed-back');
        document.querySelector('.header-name').classList.add('header-name__burger');
        document.querySelector('.header__nav').classList.add('header__nav__transform');
    }
};

window.addEventListener('scroll', scrollNav);
document.querySelector('.header__nav').addEventListener('click', headerNav);
document.querySelector('.vertical-home').addEventListener('click', verticalScreen);
document.querySelector('.horizontal-home').addEventListener('click', horizontalScreen);
document.querySelector('.portfolio-nav').addEventListener('click', portfolioNav);
document.querySelector('.portfolio-images').addEventListener('click', portfolioBorder);
document.querySelector('button').addEventListener('click', messageForm);

document.querySelector('.burger-icon').addEventListener('click', rotateBurger);
document.querySelector(".bg-for-burger").addEventListener('click',rotateBurger);