const main = () => {
  const elem = document.querySelector("#product-dropdown");
  if (elem) {
    elem.addEventListener("mouseenter", (e) => {
      let dropdown = e.target.querySelector("#dropdown");
      dropdown.setAttribute("data-show", 1);
    });
    elem.addEventListener("mouseleave", (e) => {
      let dropdown = e.target.querySelector("#dropdown");
      dropdown.setAttribute("data-show", 0);
    });
    elem.addEventListener("click", (e) => {
      let dropdown = e.target.querySelector("#dropdown");
      console.log(dropdown.getAttribute("data-show"));
      if (dropdown.getAttribute("data-show") == 1) {
        dropdown.setAttribute("data-show", 0);
      } else {
        dropdown.setAttribute("data-show", 1);
      }
    });
  }
};

const product_gallery = () => {
  // get all image containers
  let imgContainers = [...document.querySelectorAll(".product-img")];
  for (let i = 0; i < imgContainers.length; i++) {
    imgContainers[i].addEventListener("click", (event) => {
      let activeImg = document.querySelector(".product-img-active");
      if (activeImg) {
        let newSrc = "";
        let newImg = event.target;
        newSrc = newImg.getAttribute("src");
        activeImg.setAttribute("src", newSrc);
      } else {
        console.log("no active img");
      }
    });
  }
};

window.onload = () => {
  main();
  product_gallery();
};
