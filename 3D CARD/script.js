/* --------------------------
   3D Tilt Effect
--------------------------- */
const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 20;
  const y = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

/* --------------------------
   LOAD PRODUCT (U.S. Polo)
--------------------------- */

async function loadProduct() {
  const mainImg =
    "https://uspoloassn.in/cdn/shop/files/1_a017eb72-48e9-4368-946f-3afc8c7ac6f0.jpg";

  // PRODUCT DETAILS
  document.getElementById("title").textContent = "U.S. POLO ASSN. Premium Tee";
  document.getElementById("subtitle").textContent =
    "100% Cotton • Latest Collection";
  document.getElementById("price").textContent = "₹1,499";

  // MAIN IMAGE
  document.getElementById("productImage").src = mainImg;

  // CAROUSEL WITH ONE IMAGE (you can add more)
  loadCarousel([mainImg]);
}

loadProduct();

/* --------------------------
   CAROUSEL FUNCTION
--------------------------- */

function loadCarousel(images) {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  images.forEach((img, index) => {
    let div = document.createElement("div");
    div.className = "thumb" + (index === 0 ? " active" : "");
    div.onclick = () => changeImage(div, img);

    let image = document.createElement("img");
    image.src = img;

    div.appendChild(image);
    carousel.appendChild(div);
  });
}

function changeImage(element, img) {
  document.getElementById("productImage").src = img;

  document
    .querySelectorAll(".thumb")
    .forEach((t) => t.classList.remove("active"));
  element.classList.add("active");
}

/* --------------------------
   ADD TO CART POPUP
--------------------------- */

function addToCart() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 1500);
}
