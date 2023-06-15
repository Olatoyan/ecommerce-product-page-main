"use strict";
const main = document.querySelector(".main");
const plusBtn = document.querySelector(".icon__plus");
const minusBtn = document.querySelector(".icon__minus");
const cartNumber = document.querySelector(".cart__amount-number");
const submitBox = document.querySelector(".submit__box");
const cart = document.querySelector(".cart__logo");
const numProductsChosen = document.querySelector(".cart__number");
const numProducts = document.querySelector(".product__number");
const mainPrice = document.querySelector(".main__price-number");
const finalPrice = document.querySelector(".final__price-number");
const cartSelection = document.querySelectorAll(".cart__selection");
const emptyCart = document.querySelector(".cart__selection-empty");
const fullCart = document.querySelector(".cart__selection-full");
const deleteBtn = document.querySelector(".delete__icon");
const smallImgBox = document.querySelectorAll(".small__img-box");
const smallImg = document.querySelectorAll(".small__img");
const bigImg = document.querySelectorAll(".big__img");
const smallImgWrapper = document.querySelectorAll(".small__img-wrapper");
const lightBox = document.querySelector(".light");
const closeIcon = document.querySelector(".close__icon");
const overlay = document.querySelector(".box__overlay");
const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");
const btnRight = document.querySelector(".right--btn");
const btnLeft = document.querySelector(".left--btn");
const lightBoxSmallImg = document.querySelectorAll(".light__img__box");
const lightSmallBox = document.querySelector(".light__small-box");
const smallImages = document.querySelectorAll(".light__img__box");
const lightSmBox = document.querySelectorAll(".light__img_box");
const productImage = document.querySelectorAll(".product__img");
const productImgSliders = document.querySelector(".product--img__sliders");
const productImgBox = document.querySelectorAll(".box");
const bigImgBox = document.querySelectorAll(".big__box");
const mobileProductImgBox = document.querySelectorAll(".boxx");
const header = document.querySelector(".header");
const navOpen = document.querySelector(".nav-open");
const openBtn = document.querySelector(".open-icon");
const closeBtn = document.querySelector(".close-icon");
const navLinks = document.querySelectorAll(".nav__link");
const headerOverlay = document.querySelector(".header__overlay");
const closeOverlay = function () {
  header.classList.remove("nav-open");
};

openBtn.addEventListener("click", function () {
  header.classList.add("nav-open");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeOverlay);
});

closeBtn.addEventListener("click", closeOverlay);
headerOverlay.addEventListener("click", closeOverlay);

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
    numProductsChosen.style.display = "none";
  }
});

cart.addEventListener("click", function (e) {
  // e.stopPropagation();

  if (Number(cartNumber.textContent) === 0) {
    fullCart.style.display = "none";
    emptyCart.style.display = "block";
    numProductsChosen.style.display = "none";
  } else if (Number(numProducts.textContent) > 0) {
    fullCart.style.display = "flex";
    numProducts.textContent = Number(numProductsChosen.textContent);
    finalPrice.textContent = (
      Number(mainPrice.textContent) * Number(numProducts.textContent)
    ).toFixed(2);
  }
});

const closeCart = function (e) {
  if (
    !e.target.closest(".cart__selection") &&
    !e.target.closest(".cart__logo")
  ) {
    fullCart.style.display = "none";
    emptyCart.style.display = "none";
  }
};
document.addEventListener("click", closeCart);

// cartSelection.forEach((cart) => cart.addEventListener("click", closeCart));
// document.addEventListener("click", function (e) {
//   e.stopPropagation();
//   if (
//     !cart.contains(e.target) &&
//     e.target !== cart &&
//     !cart.contains(e.target.parentNode)
//   ) {
//     fullCart.style.display = "none";
//     emptyCart.style.display = "none";
//   }
// });

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

bigImg.forEach((big) => {
  big.addEventListener("click", function () {
    overlay.style.display = "block";
    lightBox.style.display = "flex";
  });
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

const goToSlide3 = function (slidee) {
  bigImgBox.forEach((slides, i) => {
    slides.style.transform = `translateX(${100 * (i - slidee)}%)`;
  });
};
goToSlide3(0);
let curSlide3 = 0;
const maxSlide3 = bigImgBox.length;

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

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

lightSmallBox.addEventListener("click", function (e) {
  const clickedElement = e.target.closest(".light__img__box");

  if (clickedElement) {
    const { img } = clickedElement.querySelector(".light__overlay").dataset;

    smallImages.forEach((box) => {
      box.classList.remove("light__small__img-active");
    });

    clickedElement.classList.toggle("light__small__img-active");
    goToSlide(img);
  }
});

lightSmBox.forEach((light) => {
  light.addEventListener("click", function (e) {
    const clickedElement = e.target.closest(".light__img_box");

    if (clickedElement) {
      const { img } = clickedElement.querySelector(".light__overlay").dataset;

      lightSmBox.forEach((box) => {
        box.classList.remove("light__small__img-active");
      });

      clickedElement.classList.add("light__small__img-active");
      goToSlide3(img);
    }
  });
});

const goToSlide2 = function (slider) {
  mobileProductImgBox.forEach(
    (slides, i) =>
      (slides.style.transform = `translateX(${100 * (i - slider)}%)`)
  );
};
goToSlide2(0);
let curSlide2 = 0;
const maxSlide2 = mobileProductImgBox.length;

const nextSlide2 = function () {
  if (curSlide2 === maxSlide2 - 1) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }
  goToSlide2(curSlide2);
};

const prevSlide2 = function () {
  if (curSlide2 === 0) {
    curSlide2 = maxSlide2 - 1;
  } else {
    curSlide2--;
  }
  goToSlide2(curSlide2);
};
const nextSlide3 = function () {
  if (curSlide3 === maxSlide3 - 1) {
    curSlide3 = 0;
  } else {
    curSlide3++;
  }
  goToSlide3(curSlide3);
};

const prevSlide3 = function () {
  if (curSlide3 === 0) {
    curSlide3 = maxSlide3 - 1;
  } else {
    curSlide3--;
  }

  goToSlide3(curSlide3);
};

btnRight.addEventListener("click", nextSlide2);
btnLeft.addEventListener("click", prevSlide2);
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft")
//     prevSlide2(), prevSlide3(), prevSlide();
//   if (e.key === "ArrowRight")
//     nextSlide2(), nextSlide3(), nextSlide();
// });

const closeLightBox = function () {
  lightBox.style.display = "none";
  overlay.style.display = "none";
};

overlay.addEventListener("click", closeLightBox);
closeIcon.addEventListener("click", closeLightBox);

let SE;
