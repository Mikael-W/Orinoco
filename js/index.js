async function CamerasList() {
    try {
     let response = await fetch("http://localhost:3000/api/cameras" );
     if (response.ok) {
         let cameras = await response.json();
         console.log(cameras);
         camerasListItems(cameras);
     } else {
         console.error('server return: ', response.status)
     }
 } catch (e) {
     console.log(e);
 }
}
CamerasList();

// display Cameras on home page
function camerasListItems(createCameras) {
    let productList = document.querySelector("#productList");

    createCameras.forEach((camera)=>{
    //html building elements//
    let productContainer = document.createElement("div");
    let productLink = document.createElement("a");
    let cardImgLink = document.createElement("a");
    let cardImg = document.createElement("img");
    let productCardBody = document.createElement("div");
    let productRef = document.createElement("div");
    let productName = document.createElement("div");
    let productPrice = document.createElement("div", "class");
    let productDescription = document.createElement("div");
    // elements attribute//
    productContainer.setAttribute("class","col-10 col-md-4 shadow border-secondary p-0 m-5 greybg");
    cardImgLink.setAttribute("href","./html/product.html?id=" + camera._id);
    cardImg.setAttribute("class","card-img-top img-fluid");
    cardImg.setAttribute("src",camera.imageUrl);
    productCardBody.setAttribute("class","card-body text-center greybg");
    productRef.setAttribute("class","d-flex justify-content-between");
    productName.setAttribute("class","font-weight-bold");
    productPrice.setAttribute("class","font-weight-bold");
    productDescription.setAttribute("class","mt-3 text-left");
    productLink.setAttribute("href","./html/product.html?id=" + camera._id);
    productLink .setAttribute("class","btn btn-dark mt-3");
    //elmements html creation//
    productList.appendChild(productContainer);
    productContainer.appendChild(cardImgLink);
    cardImgLink.appendChild(cardImg);
    productContainer.appendChild(productCardBody);
    productCardBody.appendChild(productRef)
    productRef.appendChild(productName);
    productRef.appendChild(productPrice);
    productCardBody.appendChild(productDescription);
    productCardBody.appendChild(productLink);
    /* Contenu des balises index HTML */
    productName.textContent = camera.name;
    productPrice.textContent = camera.price / 100 + " €";
    productDescription.textContent= camera.description;
    productLink.textContent = "En savoir plus";
});
};
