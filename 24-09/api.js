const form = document.querySelector("#product-form")
const input = document.querySelector("#product-input")
const list = document.querySelector("#product-list")
const priceInput = document.querySelector("#price-input")
const loadButton = document.querySelector("#load-product")
const apiProducts = document.querySelector("#api-product")
const statusText = document.querySelector("#status")

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    const productName = input.value.trim()
    const productPrice = Number(priceInput.value)


    if (!productName || productPrice <= 0 ) {
        statusText.textContent = "Completa correctamente el nombre y precio, no me deje espacios en blanco ni simbolos"
   return
    }

    const li = document.createElement("li")
    li.classList.add("product-card")

    const title = document.createElement("strong")
    title.textContent = `${productName} `
    
    const price = document.createElement("span")
    price.textContent = `${productPrice} `

    deleteButton.addEventListener("click", () =>{
        li.remove()
    })
    li.append(
        title,
        price,
        deleteButton
    )
    //appendechild agrega el list dentro d la lista
    list.appendChild(li)

   
    input.value = ""
    priceInput.value = " "
    statusText.textContent = `${productName}`
})

async function loadProduct() {
    statusText.textContent = "Buscando ofertas en el provedor"

    try {
        const response = await fetch("https://dummyjson.com/products/category/groceries")
        if (!response.ok) {
            throw new Error(
                "el provedor no respondió correctamente"
            )
        }
        const data = await response.json()
        console.log(data)
        const cheapProduct = data.prodcts.filter((prodct) => {
            return prodct.price <5
        })

        apiProducts.innerHTML = ""
        cheapProduct.forEach((product) => {
            const card = document.createElement("article")
            card.classList.add("api-card")
            card.innerHTML = `
            <h3>${product.title} </h3>
            <p> Precio: $${product.price}</p>

            `
            apiProducts.appendChild(card)
        })

        status.textContent = " Encontramos ${cheapProducts.length} ofertas menores a cinco "
    } catch (error){
        statusText.textContent = "No se pud cpnsultar proveedor"
        console.error(error)
    }

}

loadButton.addEventListener