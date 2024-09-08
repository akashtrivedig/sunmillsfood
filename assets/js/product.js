function main() {
  // get all image containers
  let imgContainers = [...document.querySelectorAll('.product-img')];

  for (let i = 0; i < imgContainers.length; i++) {
    imgContainers[i].addEventListener('click', (event) => {
      let activeImg = document.querySelector('.product-img-active');
      if (activeImg) {
        let newSrc = '';
        let newImg = event.target;
        newSrc = newImg.getAttribute('src');
        activeImg.setAttribute('src', newSrc);
      } else {
        console.log('no active img');
      }
    })
  }
}

window.onload = () => {
  main();
}