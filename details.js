import { menu } from "./db.js";

//send interface from html
const outlet = document.getElementById("outlet");

console.log(window.location.search);

const searchParams = new URLSearchParams(window.location.search);

const paramid = searchParams.get("id");

// find item with id, from menu

const product = menu.find((item) => item.id === Number(paramid));

console.log(product);

//printing the interface to the screen according to the selected product

outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
    <a href="/">
       <i class="bi bi-house fs-1 text-dark"></i>
     </a>
     <div>
     homapage / ${product.category} / ${product.title.toLocaleLowerCase()}
     </div>
    </div>
      <h1 class="text-center my-3 shadow p-2 text-dark">${product.title}</h1>
      <div class="d-flex align-items-center justify-content-center">
        <img
          class="img-fluid rounded shadow-lg"
          src="${product.img}"
          style="max-width: 500px"
        />
      </div>
      <div>
      <h3 class="my-5">Category: <span class="text-success">${
        product.category
      }</span> </h3>
      <h3 class="my-5">Price: $ <span class="text-success">${
        product.price
      }</span></h3>
      </div>
      <p class="lead fs-4">
      ${product.desc}
      </p>`;
