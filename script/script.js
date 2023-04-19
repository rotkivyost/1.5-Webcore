const showAll = document.querySelector(".see-more");
const hideAll = document.querySelector(".hide");
const swiperBlock = document.querySelector(".section-brands__block");
const brands = document.querySelectorAll(".section-brands__item");
const swiperBtn = document.querySelectorAll(".swiper-buttons__item");
let swipeToRight = 0;


// Изменение активной кнопки слайдера 
for (let i = 0; i < swiperBtn.length; i++) {
  swiperBtn[i].addEventListener("click", function () {
    for (let j = 0; j < swiperBtn.length; j++) {
      swiperBtn[j].classList.remove("swiper-buttons__item_active");
    }
    swiperBtn[i].classList.add("swiper-buttons__item_active");
  })
}

// движение слайдера 
if (window.outerWidth < 768) {
  for (let i = 0; i < swiperBtn.length; i++) {
    swiperBtn[i].addEventListener("click", function () {
      if (i === 0) {
        swiperBlock.style.marginLeft = `${swipeToRight}px`;
      } else if (i === 1) {
        swiperBlock.style.marginLeft = `-256px`;
      } else if (i === 2) {
        swiperBlock.style.marginLeft = `-${256 * 2}px`;
      } else if (i === 3) {
        swiperBlock.style.marginLeft = `-${256 * 3}px`;
      } else if (i === 4) {
        swiperBlock.style.marginLeft = `-${256 * 4}px`;
      } else if (i === 5) {
        swiperBlock.style.marginLeft = `-${256 * 5}px`;
      } else if (i === 6) {
        swiperBlock.style.marginLeft = `-${256 * 6}px`;
      } else if (i === 7) {
        swiperBlock.style.marginLeft = `-${256 * 7}px`;
      } else if (i === 8) {
        swiperBlock.style.marginLeft = `-${256 * 8}px`;
      }
    })
  }
}


// клик на "показать все"
showAll.addEventListener("click", function () {
    swiperBlock.style.cssText = `animation: smoothAction 1s linear forwards;`
    swiperBlock.style.maxHeight = `100%`;
    showAll.style.display = "none";
    hideAll.style.display = "inline-block";
  })


// клик на "скрыть все"
hideAll.addEventListener("click", function () {
    swiperBlock.style.cssText = `animation: smoothAction 1s linear forwards;`
    showAll.style.display = "inline-block";
    hideAll.style.display = "none";
})

// отображение "показать все" и "скрыть все" на мобилках и планшетах
window.addEventListener("resize", function () {
  if (window.outerWidth === 320){
    location.reload();
  }
  if (window.outerWidth === 375){
    location.reload();
  }
  if (window.outerWidth === 425){
    location.reload();
  }
  if (window.outerWidth === 768){
    location.reload();
  }
  if (window.outerWidth === 1024){
    location.reload();
  }
  if (window.outerWidth === 1440){
    location.reload();
  }
  if (window.outerWidth < 768) {
    showAll.style.display = "none";
    hideAll.style.display = "none";
  } else if(window.outerWidth >= 768){
    showAll.style.display = "inline-block";
  }
});




