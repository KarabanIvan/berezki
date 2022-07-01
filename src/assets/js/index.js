/* eslint-disable */
import '../scss/main.scss';
import Swiper from 'swiper/bundle';
import 'jquery-nice-select';

$('.select-init').niceSelect();

const products = new Swiper(".products-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 3
      },
      1199: {
        slidesPerView: 4
      }
    }
  });


const reviews = new Swiper(".reviews-slider", {
slidesPerView: 2,
spaceBetween: 50,
loop: true,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});


const sliderThumbs = new Swiper('.gallery-thumbs', {
	slidesPerView: 3,
	spaceBetween: 25,
	navigation: { 
		nextEl: '.swiper-b-next',
		prevEl: '.swiper-b-prev'
	},
	freeMode: true,
});

const sliderImages = new Swiper('.gallery-slider', {
	slidesPerView: 1,
	spaceBetween: 32,
	mousewheel: true, 
	navigation: {
		nextEl: '.swiper-b-next',
		prevEl: '.swiper-b-prev' 
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderThumbs
	},
});

$('ul.category__tab-nav').on('click', 'li:not(.active)', function () {
  $(this).addClass('active').siblings().removeClass('active').closest('div.category__tab').find('div.category__block').removeClass('active').eq($(this).index()).addClass('active');
});

$('.lk-my__buttons-edit').click(function () {
  if($(this).hasClass('edited')) {
    $('.lk-my__control').prop('disabled', true);
    $('#edit-txt').html('РЕДАКТИРОВАТЬ ЛИЧНЫЕ ДАННЫЕ');
    $(this).removeClass('edited');
  } else {
    $('.lk-my__control').prop('disabled', false);
    $('#edit-txt').html('СОХРАНИТЬ');
    $(this).addClass('edited');
  }
});

$('.order-block__header').click(function () {
  $(this).toggleClass('active');
});

$(function() {
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
 
  $(".promo-item__copy").on("click", function() {
    const blockTxt = $(this).parent().children('.promocode');
    copyToClipboard(blockTxt);
    alert(`Промокод скопирован в буфер обмена`);
  });
  $(".lk-ref__field-button").on("click", function() {
    const blockTxt = $(this).parent().children('.lk-ref__field-txt');
    copyToClipboard(blockTxt);
    alert(`Промокод скопирован в буфер обмена`);
  });
});

$('ul.card__accord-nav').on('click', 'li:not(.active)', function () {
  $(this).addClass('active').siblings().removeClass('active').closest('div.card__accord').find('div.card__accord-block').removeClass('active').eq($(this).index()).addClass('active');
});

$('.card-count__minus').click(function () {
  let inputValue = parseInt($(this).parent().children('input').val());
  console.log(inputValue);
  if (inputValue < 2){
      return false;
  } else {
      inputValue = inputValue - 1;
  }
  $(this).parent().children('input').val(inputValue);
});

$('.card-count__plus').click(function () {
  let inputValue = parseInt($(this).parent().children('input').val());
  console.log(inputValue);
  inputValue = inputValue + 1;
  $(this).parent().children('input').val(inputValue);
});

$('.order__next_1').click(function () {
  $('.order__block_1').removeClass('active');
  $('.order__status').addClass('step2');
  $('.order__block_2').addClass('active');
});

$('.order__next_2').click(function () {
  $('.order__block_2').removeClass('active');
  $('.order__status').removeClass('step2');
  $('.order__status').addClass('step3');
  $('.order__block_3').addClass('active');
});

$('.order__back_2').click(function () {
  $('.order__block_2').removeClass('active');
  $('.order__status').removeClass('step2');
  $('.order__block_1').addClass('active');
});

$('.order__back_3').click(function () {
  $('.order__block_3').removeClass('active');
  $('.order__status').removeClass('step3');
  $('.order__status').addClass('step2');
  $('.order__block_2').addClass('active');
});

$('.js--openNav').click(function () {
  if ($(this).hasClass('active')) {
    $('html').removeClass('locked');
  } else {
    $('html').addClass('locked');
  }
  $(this).toggleClass('active');
  $('.nav').toggleClass('active');
  $('.js--openCatalog').removeClass('active');
  $('.catalog-dropdown').removeClass('active');
});

$('.js--searchOpen').click(function () {
  if ($('.search').hasClass('active')) {
    $('html').removeClass('locked');
  } else {
    $('html').addClass('locked');
  }
    $(this).toggleClass('active');
    $('.search').toggleClass('active');
    $('.search-backdrop').toggleClass('active');
});

$('.search-backdrop').click(function () {
  $('.js--searchOpen').removeClass('active');
  $('.search').removeClass('active');
  $('html').removeClass('locked');
  $('.search-backdrop').removeClass('active');
});

$('.js--openCart').click(function () {
  if ($('.cart').hasClass('active')) {
    $('html').removeClass('locked');
  } else {
    $('html').addClass('locked');
  }
  $('.cart').toggleClass('active');
  $('.cart-backdrop').toggleClass('active');
});

$('.cart__close, .cart-backdrop').click(function () {
  $('.cart').removeClass('active');
  $('.cart-backdrop').removeClass('active');
  $('html').removeClass('locked');
});

$('.js--openCatalog').click(function () {
  if ($(this).hasClass('active')) {
    $('html').removeClass('locked');
  } else {
    $('html').addClass('locked');
  }
  $(this).toggleClass('active');
  $('.catalog-dropdown').toggleClass('active');
  $('.js--openNav').removeClass('active');
  $('.nav').removeClass('active');
});

$('.lk__open').click(function () {
  $('.lk__nav').addClass('open');
  $('html').addClass('locked');
});

$('.lk__close').click(function () {
  $('.lk__nav').removeClass('open');
  $('html').removeClass('locked');
});
