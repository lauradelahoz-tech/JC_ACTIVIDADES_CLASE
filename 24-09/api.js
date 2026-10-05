document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("#product-form")
const input = document.querySelector("#product-input")
const list = document.querySelector("#product-list")
const priceInput = document.querySelector("#price-input")
const loadButton = document.querySelector("#load-product")
const apiProducts = document.querySelector("#api-product")
const statusText = document.querySelector("#status")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const productName = input.value.trim()
    const productPrice = Number(priceInput.value)

    if (!productName || productPrice <= 0) {
        statusText.textContent = "Completa correctamente el nombre y precio, no dejes espacios en blanco ni valores en cero."
        return
    }

    const li = document.createElement("li")
    li.classList.add("product-card")

    const title = document.createElement("strong")
    title.textContent = `${productName} `

    const price = document.createElement("span")
    price.textContent = `$${productPrice} `

    // 1. Crear el botón de eliminar antes de usarlo
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Eliminar"
    deleteButton.type = "button"

    deleteButton.addEventListener("click", () => {
        li.remove()
    })

    li.append(title, price, deleteButton)
    list.appendChild(li)

    // Limpiar campos
    input.value = ""
    priceInput.value = ""
    statusText.textContent = `Producto "${productName}" agregado con éxito.`
})

async function loadProduct() {
    statusText.textContent = "Buscando ofertas en el proveedor..."

    try {
        const response = await fetch("https://dummyjson.com/products/category/groceries")
        if (!response.ok) {
            throw new Error("El proveedor no respondió correctamente")
        }
        
        const data = await response.json()

        // 2. Corregido: data.products (no data.prodcts)
        const cheapProducts = data.products.filter((product) => {
            return product.price < 5
        })

        apiProducts.innerHTML = ""
        cheapProducts.forEach((product) => {
            const card = document.createElement("article")
            card.classList.add("api-card")
            card.innerHTML = `
                <h3>${product.title}</h3>
                <p>Precio: $${product.price}</p>
            `
            apiProducts.appendChild(card)
        })

        // 3. Corregido: comillas invertidas ` ` y variable statusText
        statusText.textContent = `Encontramos ${cheapProducts.length} ofertas menores a $5`

    } catch (error) {
        statusText.textContent = "No se pudo consultar el proveedor"
        console.error(error)
    }
}

// 4. Completado el escuchador de eventos
if (loadButton) {
    loadButton.addEventListener("click", loadProduct)
}
}