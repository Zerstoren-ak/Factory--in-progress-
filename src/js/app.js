import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import {carouselSettings} from './swiper-settings';
import '@/css/styles.scss';
import logo from '@/img/logo.png';


//// Swiper set & initialization + import all test (* as)
// const swiper = new Swiper ('.swiper-container', carouselSettings);
////

///jQuery test
// $('.logo').click(function() {$(this).toggleClass('border')});
////


////Single import test
// import {testFunction} from "./analytics";
// testFunction();
////

const swiper = new Swiper('.swiper-hero', carouselSettings);

const navBar = document.getElementById(`navbar`);
const header = document.getElementById(`header`);

window.addEventListener(`scroll`, function () {
    if(window.pageYOffset >= 200) {
        navBar.classList.add(`navbar-fixed`);
    } else {
        navBar.classList.remove(`navbar-fixed`);
    }
    // if(window.pageYOffset > (header.offsetTop + 10)) {
    //     navBar.classList.add(`animated`);
    // } else {
    //     navBar.classList.remove(`animated`);
    // }
});