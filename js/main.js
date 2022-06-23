// Declarations
let navBarList = document.getElementsByTagName("ul")[0];
let sectionsArray = document.getElementsByTagName("section");

// first request:
(function () {
  for (let i = 0; i < sectionsArray.length; i++) {
    let navLink = document.createElement("a");
    navLink.classList.add("menu__link");
    navLink.setAttribute("href", `#${sectionsArray[i].id}`);
    navLink.innerHTML = sectionsArray[i].id;
    let listItem = document.createElement("li");
    listItem.appendChild(navLink);
    navBarList.appendChild(listItem);
  }
})();

// second request
window.onscroll = () => {
  for (let i = 0; i < sectionsArray.length; i++) {
    if (
      sectionsArray[i].getBoundingClientRect().bottom >= 200 &&
      sectionsArray[i].getBoundingClientRect().top <= 100
    ) {
      sectionsArray[i].classList.add("your-active-class");
    } else {
      sectionsArray[i].classList.remove("your-active-class");
    }
  }
};
// third request
navBarList.onclick = (event) => {
  event.preventDefault();
  if (event.target.text) {
    document
      .getElementById(`${event.target.text}`)
      .scrollIntoView({ behavior: "smooth" });
  }
};
