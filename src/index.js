"use strict";

const elem = document.querySelectorAll(".summary-before");

elem.forEach((elem) => {
    elem.addEventListener("click", function (e) {
        const parrentButton = e.currentTarget.parentElement.parentElement;
        console.log(parrentButton)
        const elemSibling = parrentButton.nextElementSibling;
        console.log(elemSibling)
        elem.classList.toggle('summary-before__active')
        elemSibling.classList.toggle('kinds__description-active')
    });
});


const button = document.querySelectorAll(".beer__item")

button.forEach((button) => {
    button.addEventListener('click', function(){
        button.classList.add('beer__item-active')

    })
})

// const elem2 = document.querySelector(".summary-before2");
// const tabl2 = document.querySelector(".kinds__description2");
// elem2.addEventListener("click", function () {
//         let marker = elem2.classList.replace(
//             "summary-before2",
//             "summary-before__active"
//         );
//         if (!marker) {
//             elem2.classList.replace("summary-before__active", "summary-before2");
//     }
//         let table = tabl2.classList.replace(
//             "kinds__description2",
//             "kinds__description-active"
//         );
//         console.log(table)
//         if (!table) {
//             tabl2.classList.replace("kinds__description-active", "kinds__description2");
//         }
// })

// const elem3 = document.querySelector(".summary-before3");
// const tabl3 = document.querySelector(".kinds__description3");
// elem3.addEventListener("click", function () {
//         let marker = elem3.classList.replace(
//             "summary-before3",
//             "summary-before__active"
//         );
//         if (!marker) {
//             elem3.classList.replace("summary-before__active", "summary-before3");
//     }
//         let table = tabl3.classList.replace(
//             "kinds__description3",
//             "kinds__description-active"
//         );
//         console.log(table)
//         if (!table) {
//             tabl3.classList.replace("kinds__description-active", "kinds__description3");
//         }
// })


// burger.addEventListener('click',() => {
//     document.body.style.overflow = "hidden"
//     if(burger.classList.contains("burger-active")) document.body.style.overflow = "auto"
//     burger.classList.toggle('burger-active')
//     menu.classList.toggle('header__nav-active')
// })
