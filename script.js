const scroller2 = document.querySelector(".scroller-2");
const scroller = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller2.setAttribute("data-animated", true);
  scroller.forEach((scroll) => {
    scroll.setAttribute("data-animated", true);
  });
}
