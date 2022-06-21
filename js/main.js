// storing navbar in a variable
var navBarList = document.getElementById("navbar__list");
// storing sections in a HTML collection to loop on it
var sections = document.getElementsByTagName("section");
// a function loops on the section names and append a li tag as a child of the navbar
// depending on the number of sections
const navBarFunction = () => {
  for (let i = 0; i < sections.length; i++) {
    var navItem = document.createElement("li");
    navItem.innerHTML = `<a  data-nav='${sections[i].id}' class="navbar__menu menu__link" href="#${sections[i].id}">${sections[i].id}</a>`;
    navBarList.appendChild(navItem);
  }
};

/* 
function when scrolling in the window at certain postion for each section
it adds the 'your-active-class' to the class list of that section
and when scrolling and passing the section it removes the class from the class list
//  */

window.onscroll = () => {
  Array.from(sections).forEach((section) => {
    section.getBoundingClientRect().top <= 200 &&
    section.getBoundingClientRect().top >= -300
      ? section.classList.add("your-active-class")
      : section.classList.remove("your-active-class");
  });
};

/**
 * this function using onclick event to listen on the navbar on clicking,
 * after clicking on the nav item it prevent it default event and not scrolling
 * the it checks if the target list item of data set (declared before using id of the section)
 * if it exists then we select it and using the scrollIntoView method it set its scrolling
 * behaviour to smooth
 */
navBarList.onclick = (listItem) => {
  listItem.preventDefault();
  if (listItem.target.dataset.nav) {
    document
      .getElementById(`${listItem.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
};

navBarFunction();
