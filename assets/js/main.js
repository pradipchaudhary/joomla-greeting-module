// alert
// window.addEventListener('load', (event) => {
//   alert('page is fully loaded');
// });


(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();


// Banner Section
// $(".banner").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   autoplay: true,
//   animateOut: "fadeOut",
//   autoplayTimeout: 10000,
//   navText: [
//     "<i class='fa-solid fa-arrow-right'></i>",
//     "<i class='fa-solid fa-arrow-left'></i>",
//   ],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

$('.banner').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay: true,
  animateOut: "fadeOut",
  autoplayTimeout: 10000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('.program').owlCarousel({
  loop:true,
  margin:15,
  nav:true,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})
// testimonial
$('.testimonial').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  dots: false,
  animateOut: "fadeOut",
  autoplayTimeout: 5000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

// Limit 
// Text Limit for Title
$(document).ready(function () {
  $(".limit100").each(function (i) {
    var len = $(this).text().trim().length;
    if (len > 100) {
      $(this).text($(this).text().substr(0, 100) + "...");
    }
  });
});

$(document).ready(function () {
  $(".limit150").each(function (i) {
    var len = $(this).text().trim().length;
    if (len > 150) {
      $(this).text($(this).text().substr(0, 150) + "...");
    }
  });
});