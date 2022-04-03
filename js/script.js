
fetch('https://live-coding-apr.herokuapp.com/api/allProducts')
    .then(res => res.json())
    .then(response => printProducts(response))



categorySelect.onchange = event => {

    const { value } = event.currentTarget

    let url = ''

    if (value === 'reset') {
        url = 'https://live-coding-apr.herokuapp.com/api/allProducts'
    } else {
        url = `https://live-coding-apr.herokuapp.com/api/category/${value}`
    }

    fetch(url)
        .then(res => res.json())
        .then(response => printProducts(response))
}



brandSelect.onchange = event => {

    const { value } = event.currentTarget

    // Condicional ternario, yay!
    let url = value === 'reset' ? 'https://live-coding-apr.herokuapp.com/api/allProducts' : `https://live-coding-apr.herokuapp.com/api/brand/${value}`

    fetch(url)
        .then(res => res.json())
        .then(response => printProducts(response))
}


function printProducts(products) {

    let text = ''

    products.forEach(prod => {
        text += ` 
        <div class="product">
            <figure>
                <img src="${prod.thumbnail}">
            </figure>
            <article>
                <h3>${prod.title}</h3>
                <p>Marca: ${prod.brand} | Precio: ${prod.price}€  | Stock actual: ${prod.stock}  unidades | Puntuación: ${prod.rating} </p>
            </article>
        </div>`
    })

    catalogue.innerHTML = text
}


