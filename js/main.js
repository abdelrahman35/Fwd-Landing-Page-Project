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

navBarFunction();
