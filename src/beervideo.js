"use strict"


const elArrow = document.querySelector(".arrow-before");
console.log(elArrow)
const playVideo = document.querySelector(".videos");
console.log(playVideo)

    elArrow.addEventListener("click", function () {
        let marker = elArrow.classList.replace(
            "arrow-before",
            "arrow-before-active"
        );
        if (!marker) {
            elArrow.classList.replace("arrow-before-active", "arrow-before");
    }
        let video = playVideo.classList.replace(
            "videos",
            "videos-active"
        );
        if (!video) {
            playVideo.classList.replace("videos-active", "videos");
        }
})


const elArrow2 = document.querySelector(".arrow-before2");
const playVideo2 = document.querySelector(".videos2");

    elArrow2.addEventListener("click", function () {
        let marker = elArrow2.classList.replace(
            "arrow-before2",
            "arrow-before-active"
        );
        if (!marker) {
            elArrow2.classList.replace("arrow-before-active", "arrow-before2");
    }
        let video = playVideo2.classList.replace(
            "videos2",
            "videos-active"
        );
        if (!video) {
            playVideo2.classList.replace("videos-active", "videos2");
        }
})

const elArrow3 = document.querySelector(".arrow-before3");
const playVideo3 = document.querySelector(".videos3");

    elArrow3.addEventListener("click", function () {
        let marker = elArrow3.classList.replace(
            "arrow-before3",
            "arrow-before-active"
        );
        if (!marker) {
            elArrow3.classList.replace("arrow-before-active", "arrow-before3");
    }
        let video = playVideo3.classList.replace(
            "videos3",
            "videos-active"
        );
        if (!video) {
            playVideo3.classList.replace("videos-active", "videos3");
        }
})
