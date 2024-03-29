//--------------------------getDAta request from API-------------------------//
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

//--------------------------Get product details from API-------------------------//


async function displayProduct() {
    const urlSearchId = (new URL(window.location).searchParams);
    productId = urlSearchId.get("id")
    try {
        let url = "http://localhost:3000/api/cameras/" + productId;
        let response = await fetch(url);
        if (response.ok) {
            let cameraProduct = await response.json();
            createProductCard(cameraProduct);
        } else {
            console.error('server return: ', response.status)
        }
    } catch (e) {
        console.log(e);
    }
}
displayProduct();

