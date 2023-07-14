// Se realiza una función que recibe la API y eso retorna fetch, que es una promesa y permite usar then catch y finally, con esto hacer múltiples llamados


const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products)
//     })
//     .then(()=> {
//         console.log('Hola')
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        // console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(responde => responde.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))