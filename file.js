const gsap = require("gsap");
const ScrollTrigger = require("ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("./section").foreach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});
