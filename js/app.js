/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");
const Pheader = document.querySelector(".page__header");
const btn = document.querySelector("#buttonTop");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function scrollFunction() {
  if (document.documentElement.scrollTop > 250) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
}

function topFunction(e) {
  e.preventDefault();
  document.documentElement.scrollTop = 0;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let buildNav = function () {
  const navlinks = document.createDocumentFragment();
  for (const section of sections) {
    const sectionId = section.getAttribute("id");
    const navLink = document.createElement("li");
    navLink.innerHTML = `<a href="#${sectionId}">${sectionId}</a>`;
    navlinks.appendChild(navLink);
  }
  navList.appendChild(navlinks);
};

// Add class 'active' to section when near top of viewport

let isInViewport = function () {
  for (const section of sections) {
    // check wich section is in the viewPort
    bounding = section.getBoundingClientRect();
    if (bounding.top <= 150 && bounding.bottom >= 150) {
      // add active class to the active section
      section.classList.add("your-active-class");
      // add active class to the active Li
      document
        .querySelector(`a[href='#${section.getAttribute("id")}']`)
        .classList.add("activeLi");
    } else {
      // remove active class from un-active sections
      section.classList.remove("your-active-class");
      // remove active class from un-active LIs
      document
        .querySelector(`a[href='#${section.getAttribute("id")}']`)
        .classList.remove("activeLi");
    }
  }
};

// Scroll to anchor ID using scrollTO event
let scrollToSec = function (e) {
  e.preventDefault();
  const section = document.querySelector(`#${e.target.innerHTML}`);
  section.scrollIntoView();
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener("DOMContentLoaded", buildNav);

// Scroll to section on link click
navList.addEventListener("click", scrollToSec);
// Set sections as active
document.addEventListener("scroll", isInViewport);

// show To top button on scrolling
window.onscroll = function () {
  scrollFunction();
};
// scroll to top on click
btn.addEventListener("click", topFunction);
