function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

var one = document.querySelector("#one");
var two = document.querySelector("#two");
var skill1 = document.querySelector("#prog-card1");
var skill2 = document.querySelector("#prog-card2");

var flag = 0;

one.addEventListener("click", function () {
  if (flag == 0) {
    skill1.style.display = "none";
    flag = 1;
  } else if (flag == 1) {
    skill1.style.display = "initial";
    flag = 0;
  }
});

two.addEventListener("click", function () {
  if (flag == 0) {
    skill2.style.display = "none";
    flag = 1;
  } else if (flag == 1) {
    skill2.style.display = "initial";
    flag = 0;
  }
});

var education = document.querySelector("#map>h1");
var work = document.querySelector("#map>h2");

var ls1 = document.querySelector("#ls1");
var ls2 = document.querySelector("#ls2");
var ls3 = document.querySelector("#ls3");
var school1 = document.querySelector("#school1");
var college1 = document.querySelector("#college1");
var cc1 = document.querySelector("#cc1");

var ls4 = document.querySelector("#ls4");
var ls5 = document.querySelector("#ls5");
var ls6 = document.querySelector("#ls6");
var school2 = document.querySelector("#school2");
var college2 = document.querySelector("#college2");
var cc2 = document.querySelector("#cc2");

work.addEventListener("click", function () {
  work.style.color = "#6E57E0";
  education.style.color = "#000";
  ls1.style.display = "none";
  ls2.style.display = "none";
  ls3.style.display = "none";
  school1.style.display = "none";
  college1.style.display = "none";
  cc1.style.display = "none";

  ls4.style.display = "initial";
  ls5.style.display = "initial";
  ls6.style.display = "initial";
  school2.style.display = "initial";
  college2.style.display = "initial";
  cc2.style.display = "initial";
});

education.addEventListener("click", function () {
  education.style.color = "#6E57E0";
  work.style.color = "#000";
  ls1.style.display = "initial";
  ls2.style.display = "initial";
  ls3.style.display = "initial";
  school1.style.display = "initial";
  college1.style.display = "initial";
  cc1.style.display = "initial";

  ls4.style.display = "none";
  ls5.style.display = "none";
  ls6.style.display = "none";
  school2.style.display = "none";
  college2.style.display = "none";
  cc2.style.display = "none";
});

var service = document.querySelector("#overlay");

var close = document.querySelector("#close");
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var s3 = document.querySelector("#s3");
var p1 = document.querySelector("#card>#p1");
var p2 = document.querySelector("#card>#p2");
var p3 = document.querySelector("#card>#p3");
var p4 = document.querySelector("#card>#p4");
var h3 = document.querySelector("#card>h3");

s1.addEventListener("click", function () {
  service.style.display = "initial";
  p1.innerHTML = "I develop the user interface";
  p2.innerHTML = "Web page developement";
  p3.innerHTML = "I create ux element intraction";
  p4.innerHTML = "I position your company brand";
  h3.innerHTML = "Ui/Ux <br> Designer";
});

s2.addEventListener("click", function () {
  service.style.display = "initial";
  p1.innerHTML = "I develop the user interface";
  p2.innerHTML = "Web page developement";
  p3.innerHTML = "I create animated web design";
  p4.innerHTML = "I create responsive web design";
  h3.innerHTML = "Frontend <br> Developer";
});

s3.addEventListener("click", function () {
  service.style.display = "initial";
  p1.innerHTML = "I develop the user interface";
  p2.innerHTML = "I create infographic";
  p3.innerHTML = "I create thumbnails and posters";
  p4.innerHTML = "I create presentation / ppt";
  h3.innerHTML = "Graphic <br> Designer";
});

close.addEventListener("click", function () {
  service.style.display = "none";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  // autoplay:{
  //     delay: 2000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var pg1 = document.querySelector("#page1");
var pg2 = document.querySelector("#page2");
var pg3 = document.querySelector("#page3");
var pg4 = document.querySelector("#page4");
var pg5 = document.querySelector("#page5");
var pg6 = document.querySelector("#page6");
var pg7 = document.querySelector("#page7");
var pg8 = document.querySelector("#page8");
var pg9 = document.querySelector("#page9");
var pg10 = document.querySelector("#page10");
var moon = document.querySelector("#moon");
var sun = document.querySelector("#sun");
var page1elem1 = document.querySelector("#intro>h1");
var page1elem2 = document.querySelector("#intro>h5");
var page1elem3 = document.querySelector("#intro>p");
var page1elem4 = document.querySelector("#scroll");
var header = document.querySelector("#header");
var lst1 = document.querySelector("#lst1");
var lst2 = document.querySelector("#lst2");
var lst3 = document.querySelector("#lst3");
var lst4 = document.querySelector("#lst4");
var lst5 = document.querySelector("#lst5");
var lst6 = document.querySelector("#lst6");
var logo = document.querySelector("#logo");
var one = document.querySelector("#one");
var two = document.querySelector("#two");

sun.addEventListener("click", function () {
  sun.style.display = "none";
  moon.style.display = "block";
  moon.style.color - "#fff";
  //page1
  pg1.style.backgroundColor = "#E9E9E9";
  page1elem1.style.color = "#000";
  page1elem2.style.color = "rgba(0, 0, 0, 0.678)";
  page1elem3.style.color = "rgba(0, 0, 0, 0.678)";
  page1elem4.style.color = "#000";
  header.style.backgroundColor = "#E9E9E9";
  lst1.style.color = "initial";
  lst2.style.color = "initial";
  lst3.style.color = "initial";
  lst4.style.color = "initial";
  lst5.style.color = "initial";
  lst6.style.color = "initial";
  logo.style.color = "initial";
  header.style.borderBottom = "2px solid #dfdfdf";

  //page2
  pg2.style.backgroundColor = "#E9E9E9";
  document.querySelector("#about>h1").style.color = "initial";
  document.querySelector("#about>h5").style.color = "initial";
  document.querySelector("#card>p").style.color = "initial";
  document.querySelector(".stats1").style.color = "initial";
  document.querySelector(".stats2").style.color = "initial";
  document.querySelector(".stats3").style.color = "initial";
  document.querySelector("#disc1").style.color = "initial";
  document.querySelector("#disc2").style.color = "initial";
  document.querySelector("#disc3").style.color = "initial";
  document.querySelector("#photo").style.border = "none";

  //page3
  pg3.style.backgroundColor = "#E9E9E9";
  document.querySelector("#page3>h1").style.color = "initial";
  document.querySelector("#page3>p").style.color = "initial";
  document.querySelector(".folder1>h2").style.color = "initial";
  document.querySelector(".folder1>p").style.color = "rgba(0, 0, 0, 0.541)";
  document.querySelector(".folder2>h2").style.color = "initial";
  document.querySelector(".folder2>p").style.color = "rgba(0, 0, 0, 0.541)";
  document.querySelector("#b1").style.color = "initial";
  document.querySelector("#b2").style.color = "initial";
  document.querySelector("#b3").style.color = "initial";
  document.querySelector("#b4").style.color = "initial";
  document.querySelector("#b5").style.color = "initial";
  document.querySelector("#b6").style.color = "initial";
  document.querySelector("#b7").style.color = "initial";
  document.querySelector("#b8").style.color = "initial";
  document.querySelector(".per1").style.color = "initial";
  document.querySelector(".per2").style.color = "initial";
  document.querySelector(".per3").style.color = "initial";
  document.querySelector(".per4").style.color = "initial";
  document.querySelector(".per5").style.color = "initial";
  document.querySelector(".per6").style.color = "initial";
  document.querySelector(".per7").style.color = "initial";
  document.querySelector(".per8").style.color = "initial";
  one.style.color = "initial";
  two.style.color = "initial";

  //page4
  document.querySelector("#page4").style.backgroundColor = "#E9E9E9";
  document.querySelector("#page4>h1").style.color = "initial";
  document.querySelector("#page4>p").style.color = "initial";
  document.querySelector("#map>h1").style.color = "#6E57E0";
  document.querySelector("#map>h2").style.color = "initial";
  document.querySelector("#ls1").style.color = "initial";
  document.querySelector("#ls2").style.color = "initial";
  document.querySelector("#ls3").style.color = "initial";
  document.querySelector("#ls4").style.color = "initial";
  document.querySelector("#ls5").style.color = "initial";
  document.querySelector("#ls6").style.color = "initial";
  document.querySelector("#school1").style.color = "initial";
  document.querySelector("#college1").style.color = "initial";
  document.querySelector("#cc1").style.color = "initial";
  document.querySelector("#school2").style.color = " initial";
  document.querySelector("#college2").style.color = "initial";
  document.querySelector("#cc2").style.color = "initial";

  //logic build
  document.querySelector("#map>h2").addEventListener("click", function () {
    document.querySelector("#map>h2").style.color = "#6E57E0";
    document.querySelector("#map>h1").style.color = "#000";
  });
  document.querySelector("#map>h1").addEventListener("click", function () {
    document.querySelector("#map>h2").style.color = "#000";
    document.querySelector("#map>h1").style.color = "#6E57E0";
  });

  //page5

  document.querySelector("#page5").style.backgroundColor = "#E9E9E9";
  document.querySelector("#page5>h1").style.color = "initial";
  document.querySelector("#page5>p").style.color = "initial";
  document.querySelector("#s1").style.color = "initial";
  document.querySelector("#s2").style.color = "initial";
  document.querySelector("#s3").style.color = "initial";

  document.querySelector("#s1").style.backgroundColor = "#E9E9E9";
  document.querySelector("#s2").style.backgroundColor = "#E9E9E9";
  document.querySelector("#s3").style.backgroundColor = "#E9E9E9";

  //page6
  document.querySelector("#page6").style.backgroundColor = "#E9E9E9";
  document.querySelector("#slide1").style.backgroundColor = "#E9E9E9";
  document.querySelector("#slide2").style.backgroundColor = "#E9E9E9";
  document.querySelector("#slide3").style.backgroundColor = "#E9E9E9";
  document.querySelector("#page6>h1").style.color = "initial";
  document.querySelector("#page6>p").style.color = "initial";

  //page7
  document.querySelector("#page7").style.backgroundColor = "#E9E9E9";

  //page8
  document.querySelector("#page8").style.backgroundColor = "#E9E9E9";
  document.querySelector("#slide4").style.backgroundColor = "#E9E9E9";
  document.querySelector("#slide5").style.backgroundColor = "#E9E9E9";
  document.querySelector("#slide6").style.backgroundColor = "#E9E9E9";
  document.querySelector("#slide7").style.backgroundColor = "#E9E9E9";

  document.querySelector("#client1").style.color = "initial";
  document.querySelector("#client2").style.color = "initial";
  document.querySelector("#client3").style.color = "initial";
  document.querySelector("#client4").style.color = "initial";
  document.querySelector("#client5").style.color = "initial";
  document.querySelector("#client6").style.color = "initial";
  document.querySelector("#client7").style.color = "initial";
  document.querySelector("#client8").style.color = "initial";
  document.querySelector("#page7>h2").style.color = "initial";
  document.querySelector("#page7>h3").style.color = "initial";

  //page9
  document.querySelector("#page9").style.backgroundColor = "#E9E9E9";
  document.querySelector("#i1").style.color = "initial";
  document.querySelector("#i2").style.color = "initial";
  document.querySelector("#i3").style.color = "initial";
  document.querySelector("#i4").style.color = "initial";
  document.querySelector("#i5").style.color = "initial";
  document.querySelector("#i6").style.color = "initial";
  document.querySelector("#name").style.backgroundColor = "#D7D3E8";
  document.querySelector("#email").style.backgroundColor = "#D7D3E8";
  document.querySelector("#prj").style.backgroundColor = "#D7D3E8";
  document.querySelector("#msg").style.backgroundColor = "#D7D3E8";
  document.querySelector("#page9>h1").style.color = "initial";
  document.querySelector("#page9>p").style.color = "initial";

  //page10
  document.querySelector("#page10").style.backgroundColor = "#E9E9E9";
  document.querySelector(".prjdis").style.color = "rgba(0, 0, 0, 0.637)";
});

moon.addEventListener("click", function () {
  //page1
  pg1.style.backgroundColor = "#252525";
  page1elem1.style.color = "#fff";
  page1elem2.style.color = "#fff";
  page1elem3.style.color = "#fff";
  page1elem4.style.color = "#fff";
  moon.style.display = "none";
  sun.style.display = "block";
  sun.style.color = "#fff";
  header.style.backgroundColor = "#252525";
  lst1.style.color = "#fff";
  lst2.style.color = "#fff";
  lst3.style.color = "#fff";
  lst4.style.color = "#fff";
  lst5.style.color = "#fff";
  lst6.style.color = "#fff";
  logo.style.color = "#fff";
  header.style.borderBottom = "1px solid grey";

  //page2
  pg2.style.backgroundColor = "#252525";
  document.querySelector("#about>h1").style.color = "#fff";
  document.querySelector("#about>h5").style.color = "#fff";
  document.querySelector("#card>p").style.color = "#E9E9E9";
  document.querySelector(".stats1").style.color = "#6E57E0";
  document.querySelector(".stats2").style.color = "#6E57E0";
  document.querySelector(".stats3").style.color = "#6E57E0";
  document.querySelector("#disc1").style.color = "#fff";
  document.querySelector("#disc2").style.color = "#fff";
  document.querySelector("#disc3").style.color = "#fff";
  document.querySelector("#photo").style.border = "1px solid #6E57E0";
  // document.querySelector("#photo").style.boxShadow = "1px 1px 8px 1px #6E57E0";

  //page3
  pg3.style.backgroundColor = "#252525";
  document.querySelector("#page3>h1").style.color = "#fff";
  document.querySelector("#page3>p").style.color = "#fff";
  document.querySelector(".folder1>h2").style.color = "#fff";
  document.querySelector(".folder1>p").style.color = "#fff";
  document.querySelector(".folder2>h2").style.color = "#fff";
  document.querySelector(".folder2>p").style.color = "#fff";
  document.querySelector("#b1").style.color = "#fff";
  document.querySelector("#b2").style.color = "#fff";
  document.querySelector("#b3").style.color = "#fff";
  document.querySelector("#b4").style.color = "#fff";
  document.querySelector("#b5").style.color = "#fff";
  document.querySelector("#b6").style.color = "#fff";
  document.querySelector("#b7").style.color = "#fff";
  document.querySelector("#b8").style.color = "#fff";
  document.querySelector(".per1").style.color = "#fff";
  document.querySelector(".per2").style.color = "#fff";
  document.querySelector(".per3").style.color = "#fff";
  document.querySelector(".per4").style.color = "#fff";
  document.querySelector(".per5").style.color = "#fff";
  document.querySelector(".per6").style.color = "#fff";
  document.querySelector(".per7").style.color = "#fff";
  document.querySelector(".per8").style.color = "#fff";
  one.style.color = "#fff";
  two.style.color = "#fff";

  //page-4
  document.querySelector("#page4").style.backgroundColor = "#252525";
  document.querySelector("#page4>h1").style.color = "#fff";
  document.querySelector("#page4>p").style.color = "#fff";
  document.querySelector("#map>h1").style.color = "#6E57E0";
  document.querySelector("#map>h2").style.color = "#fff";
  //logic build
  document.querySelector("#map>h2").addEventListener("click", function () {
    document.querySelector("#map>h2").style.color = "#6E57E0";
    document.querySelector("#map>h1").style.color = "#fff";
  });
  document.querySelector("#map>h1").addEventListener("click", function () {
    document.querySelector("#map>h2").style.color = "white";
    document.querySelector("#map>h1").style.color = "#6E57E0";
  });
  document.querySelector("#ls1").style.color = "#fff";
  document.querySelector("#ls2").style.color = "#fff";
  document.querySelector("#ls3").style.color = "#fff";
  document.querySelector("#ls4").style.color = "#fff";
  document.querySelector("#ls5").style.color = "#fff";
  document.querySelector("#ls6").style.color = "#fff";
  document.querySelector("#school1").style.color = "#fff";
  document.querySelector("#college1").style.color = "#fff";
  document.querySelector("#cc1").style.color = "#fff";
  document.querySelector("#school2").style.color = "#fff";
  document.querySelector("#college2").style.color = "#fff";
  document.querySelector("#cc2").style.color = "#fff";

  //page5
  document.querySelector("#page5").style.backgroundColor = "#252525";
  document.querySelector("#page5>h1").style.color = "#fff";
  document.querySelector("#page5>p").style.color = "#fff";
  document.querySelector("#s1").style.color = "#fff";
  document.querySelector("#s2").style.color = "#fff";
  document.querySelector("#s3").style.color = "#fff";

  document.querySelector("#s1").style.backgroundColor = "#36454F";
  document.querySelector("#s2").style.backgroundColor = "#36454F";
  document.querySelector("#s3").style.backgroundColor = "#36454F";

  //page6
  document.querySelector("#page6").style.backgroundColor = "#252525";
  document.querySelector("#page6>h1").style.color = "#fff";
  document.querySelector("#page6>p").style.color = "#fff";
  document.querySelector("#slide1").style.backgroundColor = "#252525";
  document.querySelector("#slide2").style.backgroundColor = "#252525";
  document.querySelector("#slide3").style.backgroundColor = "#252525";
  document.querySelector(".prjdis").style.color = "#fff";

  //page7
  document.querySelector("#page7").style.backgroundColor = "#252525";

  //page8
  document.querySelector("#page8").style.backgroundColor = "#252525";
  document.querySelector("#slide4").style.backgroundColor = "#252525";
  document.querySelector("#slide5").style.backgroundColor = "#252525";
  document.querySelector("#slide6").style.backgroundColor = "#252525";
  document.querySelector("#slide7").style.backgroundColor = "#252525";

  document.querySelector("#client1").style.color = "#fff";
  document.querySelector("#client2").style.color = "#fff";
  document.querySelector("#client3").style.color = "#fff";
  document.querySelector("#client4").style.color = "#fff";
  document.querySelector("#client5").style.color = "#fff";
  document.querySelector("#client6").style.color = "#fff";
  document.querySelector("#client7").style.color = "#fff";
  document.querySelector("#client8").style.color = "#fff";
  document.querySelector("#page7>h2").style.color = "#fff";
  document.querySelector("#page7>h3").style.color = "#fff";

  //page9
  document.querySelector("#page9").style.backgroundColor = "#252525";
  document.querySelector("#page9>h1").style.color = "#fff";
  document.querySelector("#page9>p").style.color = "#fff";
  document.querySelector("#i1").style.color = "#fff";
  document.querySelector("#i2").style.color = "#fff";
  document.querySelector("#i3").style.color = "#fff";
  document.querySelector("#i4").style.color = "#fff";
  document.querySelector("#i5").style.color = "#fff";
  document.querySelector("#i6").style.color = "#fff";
  document.querySelector("#name").style.backgroundColor = "#969696";
  document.querySelector("#email").style.backgroundColor = "#969696";
  document.querySelector("#prj").style.backgroundColor = "#969696";
  document.querySelector("#msg").style.backgroundColor = "#969696";

  //page10
  document.querySelector("#page10").style.backgroundColor = "#252525";
});

//GSAP Animation

gsap.from("#intro>h1", {
  opacity: 0,
  x: -20,
  duration: 1.8,
});

gsap.from("#intro>p", {
  opacity: 0,
  x: -20,
  duration: 1.8,
  delay: 1,
});

gsap.from("#intro>h5", {
  opacity: 0,
  x: -20,
  duration: 1.8,
  delay: 0.5,
});

gsap.from("#mouse", {
  y: -15,
  ease: "circ.in",
  repeat: -1,
  yoyo: true,
  duration: 0.5,
});

gsap.from("#card>p", {
  duration: 1,
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#card>p",
    scroller: "body",
    start: "top 90%",
    // toggleActions: "play none play none",
  },
});

let experiance = document.querySelector("#experiance");
let prjcomp = document.querySelector("#prjcomp");
let workcomp = document.querySelector("#workcomp");

let counter = {
  exp: 00,
  completed: 00,
  comp: 00,
};

gsap.to(counter, {
  exp: 02,
  onUpdate: () => (experiance.innerHTML = Math.floor(counter.exp) + "+"),
  scrollTrigger: {
    trigger: "#score",
    scroller: "body",

    start: "top: 95%",
  },
});
gsap.to(counter, {
  completed: 20,
  onUpdate: () => (prjcomp.innerHTML = Math.floor(counter.completed) + "+"),
  scrollTrigger: {
    trigger: "#score",
    scroller: "body",
    start: "top: 95%",
  },
});
gsap.to(counter, {
  comp: 05,
  onUpdate: () => (workcomp.innerHTML = Math.floor(counter.comp) + "+"),
  scrollTrigger: {
    trigger: "#score",
    scroller: "body",
    start: "top: 95%",
  },
});

gsap.from("#learn1", {
  width: "0%",
  duration: 2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".folder1",

    start: "top: 65%",
  },
});
gsap.from("#learn2", {
  width: "0%",
  duration: 2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".folder1",

    start: "top: 65%",
  },
});
gsap.from("#learn3", {
  width: "0%",
  duration: 2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".folder1",

    start: "top: 65%",
  },
});
gsap.from("#learn4", {
  width: "0%",
  duration: 2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".folder1",

    start: "top: 65%",
  },
});
gsap.from("#learn5", {
  width: "0%",
  duration: 2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".folder1",

    start: "top: 65%",
  },
});

gsap.from(".bucket>h6", {
  opacity: 0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".folder1",

    start: "top: 65%",
  },
});

gsap.from("#ls1", {
  opacity: 0,
  x: 10,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#map",

    start: "top 60%",
  },
});
gsap.from("#ls2", {
  opacity: 0,
  x: 10,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#map",

    start: "top 60%",
  },
});
gsap.from("#ls3", {
  opacity: 0,
  x: 10,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#map",

    start: "top 60%",
  },
});
gsap.from("#school1", {
  opacity: 0,
  x: 10,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#map",

    start: "top 60%",
  },
});
gsap.from("#college1", {
  opacity: 0,
  x: 10,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#map",

    start: "top 60%",
  },
});
gsap.from("#cc1", {
  opacity: 0,
  x: 10,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#map",

    start: "top 60%",
  },
});

gsap.from("#s1", {
  y: 80,
  duration: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page5>p",

    start: "top: 65%",
  },
});
gsap.from("#s2", {
  y: 80,
  duration: 0.5,
  delay: 0.3,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page5>p",

    start: "top: 65%",
  },
});
gsap.from("#s3", {
  y: 80,
  duration: 0.5,
  delay: 0.6,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page5>p",

    start: "top: 65%",
  },
});

gsap.from("#long-box", {
  y: 30,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#long-box",

    start: "top: 90%",
  },
});

gsap.from(".item>h5", {
  x: -20,
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page9",
    start: "top 85%",
  },
});
gsap.from(".item>p", {
  x: -20,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page9",
    start: "top 85%",
  },
});
