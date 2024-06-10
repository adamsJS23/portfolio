const scroller = document.querySelector(".scroller");

if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.setAttribute("data-animated", true);
}
