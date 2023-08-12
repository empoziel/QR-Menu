import { menu, buttonsData } from "./db.js";

const menuArea = document.getElementById("menu-area");
const buttonsArea = document.getElementById("buttons-area");

//watch the page load
document.addEventListener("DOMContentLoaded", () => {
  renderButtons("all");
  renderMenuItems(menu);
});

//watch button click event
buttonsArea.addEventListener("click", searchCategory);

//print menu elements on screen
function renderMenuItems(menuItems) {
  // create an html for every object from array.
  //transfer the html to array.
  //cover the string.

  let menuHtml = menuItems
    .map(
      (item) => `
      
       <a href="/productDetail.html?id=${item.id}"
        id="card" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
        <img 
         class="rounded shadow" 
         src="${item.img}" alt=""
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success">$ ${item.price}</p>
          </div>
          <p class="lead">${item.desc}
          </p>
        </div>
       </a>

  `
    )
    .join(" ");

  //html we created . print to screen
  menuArea.innerHTML = menuHtml;
}

//filter product category and list them
function searchCategory(e) {
  const category = e.target.dataset.category;

  //match the button category and element category
  const filtredMenu = menu.filter((item) => item.category === category);

  if (category === "all") {
    renderMenuItems(menu);
  } else {
    //print the filtred menu on screen
    renderMenuItems(filtredMenu);
  }

  //update buttons
  renderButtons(category);
}

//print the buttons to screen
function renderButtons(active) {
  //delete old buttons
  buttonsArea.innerHTML = " ";

  // create new buttons
  buttonsData.forEach((btn) => {
    const buttonEle = document.createElement("button");

    //add the classes we need to the button
    buttonEle.className = "btn btn-outline-dark filter-btn";

    //change the text
    buttonEle.innerText = btn.text;

    //find category data and add the button element
    buttonEle.dataset.category = btn.value;

    // if active button and category match . add the button new class
    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }

    //sende to html
    buttonsArea.appendChild(buttonEle);
  });
}
