//Selectors
const shareBtn = document.querySelector(".share-btn");
const share = document.querySelector(".share");

let x = window.matchMedia("max-width: 375px");

shareBtn.addEventListener("click", showShare);

function showShare() {
  share.classList.toggle("show");
  shareBtn.classList.toggle("active");
}
