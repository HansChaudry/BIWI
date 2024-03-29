import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from "react-cookie";
import App from './App.js';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);

// var slidePosition = 1;
// setTimeout(function () {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   console.log(slides);
//   if (slidePosition > slides.length) {slidePosition = 1}
//   if (slidePosition < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slidePosition-1].style.display = "flex";
// } , 1000)


// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// // function currentSlide(n) {
// //   SlideShow(slidePosition = n);
// // }

// function SlideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   console.log(slides);
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slidePosition-1].style.display = "flex";
// } 

// $("#Back-Btn").on("click", () => plusSlides(-1))
// $("#Forward-Btn").on("click", () => plusSlides(1))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

