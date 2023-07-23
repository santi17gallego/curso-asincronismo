const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI);
}

fetchData(`${API}/products`)
    .then((response) => response.json())
    .then((products) => {
        console.log(products[0])
        console.log(products[0].category.id)
        return fetchData(`${API}/categories/${products[0].category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category)
    })