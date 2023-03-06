$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1.4,
        margin: 32,
      },
      // breakpoint from 480 up
      601: {
        items: 2,
      },
      // breakpoint from 768 up
      1001: {
        items: 2.4,
        margin: 48,
      },
    },
  });
});

// video

const videoBtn = document.querySelector("#video-btn");

const videoPicture = document.querySelector("#video__picture");

const videoWrapper = document.querySelector(".video");

const video = document.querySelector(".video__object");

videoWrapper.addEventListener("click", () => {
  if (video.paused) {
    videoPicture.classList.add("none");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");
    video.play();
  } else {
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
});

// OpenMobileNav

const openNavBtn = document.querySelector("#openNavBtn");

const mobileNav = document.querySelector("#mobileNav");

openNavBtn.onclick = () => {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
};

// closeMobileNav

const closeMobileNav = document.querySelector("#closeMobileNav");

closeMobileNav.onclick = () => {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};
