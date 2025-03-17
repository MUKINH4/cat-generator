
async function getCat() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {"Content-Type": "application/json"},
        method: "GET",

    }).then(
        response => response.json()
    ).catch(error => console.log(error))
    return response
}
    
let cats = []
    

async function insertCat() {
    const text = document.getElementById("text")
    const response = await getCat()
    const cat = await response;
    catImage = document.getElementById("cat");
    catImage.innerHTML += `<img src='${cat[0].url}' class='image' />`
    text.style.display = "none"
    
}


document.addEventListener('keydown', insertCat)