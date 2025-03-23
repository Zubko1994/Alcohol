"use strict";

const elem = document.querySelector(".summary-before");
const tabl = document.querySelector(".kinds__description");

    elem.addEventListener("click", function () {
        let marker = elem.classList.replace(
            "summary-before",
            "summary-before__active"
        );
        if (!marker) {
            elem.classList.replace("summary-before__active", "summary-before");
    }
        let table = tabl.classList.replace(
            "kinds__description",
            "kinds__description-active"
        );
        console.log(table)
        if (!table) {
            tabl.classList.replace("kinds__description-active", "kinds__description");
        }
})

const elem2 = document.querySelector(".summary-before2");
const tabl2 = document.querySelector(".kinds__description2");
elem2.addEventListener("click", function () {
        let marker = elem2.classList.replace(
            "summary-before2",
            "summary-before__active"
        );
        if (!marker) {
            elem2.classList.replace("summary-before__active", "summary-before2");
    }
        let table = tabl2.classList.replace(
            "kinds__description2",
            "kinds__description-active"
        );
        console.log(table)
        if (!table) {
            tabl2.classList.replace("kinds__description-active", "kinds__description2");
        }
})

const elem3 = document.querySelector(".summary-before3");
const tabl3 = document.querySelector(".kinds__description3");
elem3.addEventListener("click", function () {
        let marker = elem3.classList.replace(
            "summary-before3",
            "summary-before__active"
        );
        if (!marker) {
            elem3.classList.replace("summary-before__active", "summary-before3");
    }
        let table = tabl3.classList.replace(
            "kinds__description3",
            "kinds__description-active"
        );
        console.log(table)
        if (!table) {
            tabl3.classList.replace("kinds__description-active", "kinds__description3");
        }
})
