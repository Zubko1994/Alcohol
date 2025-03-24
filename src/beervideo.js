"use strict"


const elem = document.querySelectorAll(".arrow-before");
console.log(elem)

elem.forEach((elem) => {
    elem.addEventListener('click', function(e) {
        const parentElem = e.currentTarget.parentElement.parentElement
        console.log(parentElem)
        const elemSibling = parentElem.nextElementSibling.nextElementSibling;
        console.log(elemSibling)
        elem.classList.toggle('arrow-before-active')
        elemSibling.classList.toggle('videos-active')
    })
})
