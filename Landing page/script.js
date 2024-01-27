// Navigation bar toggles on mobile by clicking buttons
let menuToggle = document.querySelector(".menu-toggle");
let menuClose = document.querySelector(".menu-close");
let navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener('click', () => {
    gsap.to(navMenu, {
        right: "0%"
    })
})

menuClose.addEventListener('click', () => {
    gsap.to(navMenu, {
        right: "-100%"
    })
})

// Navigation Bar closes on clicking of any nav link
const handleLinkAction = () => {
    gsap.to(navMenu, {
        top: "-100%"
    })
}

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(n => n.addEventListener('click', handleLinkAction));

// Used SwiperJS to make a slider of images
let swiperShoes = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            opacity: 0,
        },
        next: {
            translate: [100, 0, -500],
            opacity: 0,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

//   Navigation Bar on scrolling of the page
const handleShadowHeader = () => {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) {
        gsap.to(header, {
            boxShadow: "0px 1px 16px hsla(0, 0%, 0%, .1)",
        })
    } else {
        gsap.to(header, {
            boxShadow: "0px 0px 0px",
        })
    }
}
windows.addEventListener('scroll', handleShadowHeader);