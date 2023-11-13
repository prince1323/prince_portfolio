// ******************NAVBAR************
let t1 = gsap.timeline()

t1.from("#logo-img", {
    x: -100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.4,
})

t1.from(".navitems", {
    y: -100,
    duration: 0.3,
    // delay:0.5,
    opacity: 0,
    stagger: 0.4,
})

t1.from("#nav-btn", {
    x: 100,
    duration: 0.5,
    // delay:0.5,
    opacity: 0,
    stagger: 0.4,
})


gsap.from("#wel-sect2", {
    x: 600,
    duration: 1,
    delay: 0.5,
    opacity: 0,
})

gsap.from("#textDivh3", {
    x: -600,
    duration: 1,
    delay: 0.5,
    opacity: 0,
})

gsap.from("#textDivh1", {
    duration: 1,
    delay: 1,
    opacity: 0,
})

gsap.from("#Specification", {
    y: 400,
    duration: 1,
    delay: 1,
    opacity: 0,
})



// **************************************ABOUT SECTION************************************

gsap.from("#box1", {
    x: -300,
    y: 300,
    rotate: 0,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#box1",
        scroller: "body",
        end: "top 50%",
        scrub: 2,
    }
})

gsap.from("#box2", {
    x: -400,
    y: -400,
    rotate: 200,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        start: "top 40%",
        scrub: 2,
    }
})

gsap.from("#about-heading", {
    x: 400,
    y: -400,
    opacity: 0,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: "#about-span1",
        scroller: "body",
        scrub: 1,
    }
})


gsap.from("#about-para", {
    x: -400,
    y: 400,
    opacity: 0,
    stagger: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#about-span1",
        scroller: "body",
        scrub: 1,
    }
})





// *********************************CONTACT PAGE*****************************************************

let t2 = gsap.timeline();

t2.from("#form-heading", {
    x: -400,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#form-heading",
        scroller: "body",
        end: "top 50%",
        scrub: 2,
    }
})
t2.from(".input-text", {
    y: -400,
    opacity: 0,
    delay: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".input-text",
        scroller: "body",
        // end:"top 50%",
        scrub: 3,
    }
})

gsap.from(".contact-footer", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".contact-footer",
        scroller: "body",
        end: "top 70%",
        scrub: 2,
    }
})

gsap.from("#contact-img", {
    x: 400,
    opacity: 0,
    delay: 1,
    duration: 1,
    rotate: 270,
    scrollTrigger: {
        trigger: "#contact-img",
        scroller: "body",
        end: "top 20%",
        scrub: 2,
    }
})




// **************************************SKILL CARD*****************************

gsap.from("#continer-1", {
    x: -300,
    y: 300,
    rotate: 0,
    duration: 1,
    delay: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#continer-1",
        scroller: "body",
        end: "top 50%",
        scrub: 2,
    }
})

gsap.from("#continer-2", {
    x: -300,
    y: 300,
    rotate: 360,
    duration: 1,
    delay: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#continer-2",
        scroller: "body",
        end: "top 50%",
        scrub: 2,
    }
})

gsap.from("#continer-3", {
    x: 300,
    y: 300,
    rotate: 90,
    duration: 1,
    delay: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#continer-3",
        scroller: "body",
        end: "top 50%",
        scrub: 2,
    }
})

gsap.from("#continer-4", {
    x: -300,
    y: 300,
    rotate: -60,
    duration: 1,
    delay: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#continer-4",
        scroller: "body",
        end: "top 50%",
        scrub: 2,
    }
})

gsap.from("#continer-5", {
    x: 100,
    y: 700,
    rotate: 360,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#continer-4",
        scroller: "body",
        end: "top 30%",
        scrub: 4,
    }
})

gsap.from("#continer-6", {
    x: -300,
    y: 50,
    rotate: 180,
    duration: 1,
    delay: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#continer-6",
        scroller: "body",
        end: "top 90%",
        scrub: 2,
    }
})

gsap.from("#continer-7", {
    x: 300,
    y: 50,
    rotate: 360,
    duration: 1,
    delay: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#continer-7",
        scroller: "body",
        end: "top 90%",
        scrub: 2,
    }
})




// **************************************HAMBURGER MENU*************************************

gsap.from("#cancel", {
    rotate: 360,
    duration: 1,
    delay: 2,
    opacity: 0,
    stagger:0.5,
    // scrollTrigger: {
    //     trigger: "#continer-7",
    //     scroller: "body",
    //     end: "top 90%",
    //     scrub: 2,
    // }

})

gsap.from(".menuitems", {
    x:400,
    rotate: 360,
    duration: 1,
    delay: 2,
    opacity: 0,
    // scrollTrigger: {
    //     trigger: "#continer-7",
    //     scroller: "body",
    //     end: "top 90%",
    //     scrub: 2,
    // }
})




let menuIcon = document.querySelector("#menu-icon");

let menuOpen = document.querySelector("#mini-menu");
let menuClose = document.querySelector("#cancel");

let hamItem = document.querySelector("#menu-links");
let menuItem = document.querySelector(".menuitems");

let flag = true;

menuIcon.addEventListener("click", function(){
    if(flag){
        menuOpen.style.display = "none"; 
        menuClose.style.display = "block";
        hamItem.style.display = "flex";
        flag = false;
    }else{
        menuOpen.style.display = "block"; 
        menuClose.style.display = "none";
        hamItem.style.display = "none";
        flag = true;
    }
       
});
