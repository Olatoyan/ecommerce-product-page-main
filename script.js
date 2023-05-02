"use strict";
const plusBtn = document.querySelector(".icon__plus");
const minusBtn = document.querySelector(".icon__minus");
const cartNumber = document.querySelector(".cart__amount-number");
const submitBox = document.querySelector(".submit__box");
const cart = document.querySelector(".cart__logo");
const numProductsChosen = document.querySelector(".cart__number");
const numProducts = document.querySelector(".product__number");
const mainPrice = document.querySelector(".main__price-number");
const finalPrice = document.querySelector(".final__price-number");
const cartSelection = document.querySelector(".cart__selection");
const emptyCart = document.querySelector(".cart__selection-empty");
const fullCart = document.querySelector(".cart__selection-full");
const deleteBtn = document.querySelector(".delete__icon");
const smallImg = document.querySelectorAll(".small__img");
const bigImg = document.querySelector(".big__img");
const smallImgWrapper = document.querySelectorAll(".small__img-wrapper");
const lightBox = document.querySelector(".light");
const closeIcon = document.querySelector(".close__icon");
const overlay = document.querySelector(".box__overlay");
const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");
const lightBoxSmallImg = document.querySelectorAll(".light__img__box");
const lightSmallBox = document.querySelector(".light__small-box");
const productImage = document.querySelectorAll(".product__img");
const productImgSliders = document.querySelector(".product--img__sliders");
const productImgBox = document.querySelectorAll(".box");

plusBtn.addEventListener("click", function () {
  cartNumber.textContent++;
});

minusBtn.addEventListener("click", function () {
  cartNumber.textContent = Number(cartNumber.textContent);
  if (cartNumber.textContent > 0) {
    cartNumber.textContent--;
  } else {
    cartNumber.textContent === 0;
  }
});

submitBox.addEventListener("click", function (e) {
  e.preventDefault();
  if (cartNumber.textContent > 0) {
    numProductsChosen.textContent = cartNumber.textContent;
    numProductsChosen.style.display = "block";
  } else if (cartNumber.textContent < 1) {
    numProductsChosen.textContent = cartNumber.textContent;
    // numProductsChosen.style.display = "block";
  }
});

cart.addEventListener("click", function () {
  if (Number(numProducts.textContent) > 0) {
    fullCart.style.display = "flex";
    numProducts.textContent = Number(numProductsChosen.textContent);
    finalPrice.textContent = (
      Number(mainPrice.textContent) * Number(numProducts.textContent)
    ).toFixed(2);
  }

  if (Number(cartNumber.textContent) === 0) {
    fullCart.style.display = "none";
    emptyCart.style.display = "block";
  }
});

document.querySelector("body").addEventListener("click", function (e) {
  if (
    (fullCart.style.display === "flex" ||
      emptyCart.style.display === "block") &&
    e.target !== cart &&
    !cartSelection.contains(e.target)
  ) {
    fullCart.style.display = "none";
    emptyCart.style.display = "none";
  }
});

deleteBtn.addEventListener("click", function () {
  fullCart.style.display = "none";
  emptyCart.style.display = "block";
  numProductsChosen.textContent = 0;
  numProductsChosen.style.display = "none";
  cartNumber.textContent = 0;
});

smallImgWrapper.forEach((wrapper) => {
  wrapper.addEventListener("click", function () {
    smallImgWrapper.forEach((wrapper) => {
      wrapper.classList.remove("small__img-active");
    });
    this.classList.add("small__img-active");
  });
});

bigImg.addEventListener("click", function () {
  overlay.style.display = "block";
  lightBox.style.display = "flex";
});

const goToSlide = function (slide) {
  productImgBox.forEach(
    (slides, i) =>
      (slides.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
let curSlide = 0;
const maxSlide = productImgBox.length;

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// document.querySelector("body").addEventListener("click", function (e) {
//   if (lightBox.style.display === "flex" && e.target !== lightBox) {
//     lightBox.style.display = "none";
//   }
// });

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

lightSmallBox.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.classList.contains("light__overlay")) {
    const { img } = e.target.dataset;
    goToSlide(img);
    // e.tar
  }
});
const closeLightBox = function () {
  lightBox.style.display = "none";
  overlay.style.display = "none";
};

overlay.addEventListener("click", closeLightBox);
closeIcon.addEventListener("click", closeLightBox);
