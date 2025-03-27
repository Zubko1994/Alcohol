import './scss/style.scss'

const burger = document.querySelector('.burger__menu')
// const menu = document.querySelector('.header__nav')
burger.addEventListener('click',() => {
    burger.classList.toggle('burger-active')
    console.log(burger)
    
    // menu.classList.toggle('header__nav-active')
})
