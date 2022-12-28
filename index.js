 
 var swiper = new Swiper(".card_slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          586: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
    
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1360: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          }
        }

});


function clickEvent(first,last){
  if(first.value.length){
    document.getElementById(last).focus();
  }
}




 
//  var swiper = new Swiper(".card_slider", {
//     slidesPerView: 5,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       586: {
//         slidesPerView: 2,
//       },

//       768: {
//         slidesPerView: 3,
//       },
//       1200: {
//         slidesPerView: 4,
//       },
//       1360: {
//         slidesPerView: 5,
//       }
//     }
//   });


// document.getElementById('nextbutton').style.height="10px";


// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     var swiper = new Swiper(".card_slider", {
//       slidesPerView: 5,
//       spaceBetween: 30,
//       slidesPerGroup: 1,
//       loop: true,
//       loopFillGroupWithBlank: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
