// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#restOfThePage"),
//     smooth: true
// });

// gsap.to(".boundingElem",{
//     y:10,
//     duration:2
// })

// Global-Varibales

var timeout;

function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-100",
    duration: 1.5,
    opacity: 0,
    ease: Expo.easeInOut,
  })
    .to(".boundingElem", {
      y: "0",
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: 0.3,
    })
    .from("#heroFooter", {
      y: "-20",
      duration: 1,
      opacity: 0,
      delay: -0.5,
      ease: Expo.easeInOut,
    });
}
function mouseDistortion() {
  var xScale = 1;
  var yScale = 1;

  var xPrev = 0;
  var yPrev = 0;
  window.addEventListener("mousemove", function (val) {
    xScale = gsap.utils.clamp(0.8, 1.2, val.clientX - xPrev);
    xScale = gsap.utils.clamp(0.8, 1.2, val.clientY - yPrev);
    xPrev = val.clientX;
    yPrev = val.clientY;

    mouseMovement(xScale, yScale);
    timeout = setTimeout(function () {
      document.querySelector(
        "#miniCircle"
      ).style.transform = `translate(${val.clientX}px, ${val.clientY}px), scale(1,1)`;
    }, 100);
  });
}
function mouseMovement(xScale, yScale) {
  clearTimeout(timeout);
  window.addEventListener("mousemove", function (val) {
    document.querySelector(
      "#miniCircle"
    ).style.transform = `translate(${val.clientX}px, ${val.clientY}px) scale(${xScale}, ${yScale})`;
  });
}

//EventListener for elemImage-----
document.querySelectorAll(".elem").forEach(function (element) {
  var yDiffImg = 0;
  var rotate = 0;
  var imgWidth = element.querySelector("img").getBoundingClientRect().width;

  //Event Listeners--------------
  element.addEventListener("mouseleave", function (val) {
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  element.addEventListener("mousemove", function (val) {
    var yDiffImg = val.clientY - element.getBoundingClientRect().top;
    var diffRot = val.clientX - rotate;
    rotate = val.clientX;
    var imgLeft = element.querySelector("img").getBoundingClientRect();
    //Animation--------------------------------------------------
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: yDiffImg - element.querySelector("img").getBoundingClientRect().height/2,
      left: val.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffRot),
    });
  });



});

mouseDistortion();
mouseMovement();
firstPageAnimation();
