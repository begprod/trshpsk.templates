function showMainMenu(){var n=$(".menu-triger"),a=$(".menu");n.click(function(n){a.slideToggle(200)})}function animatMenu(){var n=$(".menu-triger");n.click(function(n){$(this).toggleClass("active")})}function animateDescMainPage(){var n=$(".desc-cat-unit"),a=$(".category-unit");$(window).width()>1024?(n.css("display","none"),a.hover(function(){$(this).find(".desc-cat-unit").fadeIn(200)},function(){n.fadeOut(200)})):n.css("display","block")}function modalWindow(){var n=$(".btn-all--watch-trailer"),a=$(".modal-body__close-btn"),t=$(".modal-bg-layer"),o=$(".modal-body");n.click(function(n){t.fadeIn(200),o.fadeIn(200)}),a.click(function(n){t.fadeOut(200),o.fadeOut(200)}),t.click(function(n){$(this).fadeOut(200),o.fadeOut(200)})}function btnTrailer(){var n=$("div.modal-body iframe"),a=$(".btn-all--watch-trailer");n.length>0&&a.css("display","block")}function stopPlayVideo(){var n=$(".btn-all--watch-trailer"),a=$(".modal-body__close-btn"),t=$(".modal-bg-layer"),o=$(".modal-body > iframe"),c=o.attr("src");n.click(function(n){o.attr("src",c+"?rel=0&autoplay=1&controls=2")}),a.click(function(n){o.attr("src",c-"?rel=0&autoplay=1&controls=2")}),t.click(function(n){o.attr("src",c-"?rel=0&autoplay=1&controls=2")})}function randomPhrases(){var n=new Array("Всеж мы люди","Моча какая-то","Найди Свое Говно","Чего только не придумают","Креативная дезориентация","Это классика, это знать надо","Проходи, не задерживайся","Дешёвая провокация","Одиночный пикет","Смазка для общества","Что ж вы люди делаете?","Кетчупа не найдётся?","Бесплатные спецэффекты"),a=n[Math.floor(Math.random()*n.length)],t=document.querySelector(".slogan");t.innerHTML=a}function scrollUp(){var n=$(".scroll-up"),a=$("html, body");n.click(function(n){return a.animate({scrollTop:0},400),!1}),$(window).scroll(function(){$(document).scrollTop()>700?n.fadeIn(300):n.fadeOut(300)})}$(document).ready(function(){showMainMenu(),animatMenu(),animateDescMainPage(),modalWindow(),btnTrailer(),stopPlayVideo(),randomPhrases(),scrollUp()}),$(document).ready(function(){var n=$(".preloader-block");n.delay(1e3).fadeOut(400)});
