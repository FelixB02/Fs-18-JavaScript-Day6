let books = `
[{
    "title": "Javascript for Dummies",
    "auhtor": "Warum liegt hier Stroh?",
    "read": true,
    "picture": "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
}, {
    "title": "Javascript for Dummies",
    "auhtor": "Warum liegt hier Stroh?",
    "read": false,
    "picture": "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
}, {
    "title": "Javascript for Dummies",
    "auhtor": "Warum liegt hier Stroh?",
    "read": true,
    "picture": "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
}, {
    "title": "Javascript for Dummies",
    "auhtor": "Warum liegt hier Stroh?",
    "read": false,
    "picture": "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
}, {
    "title": "Javascript for Dummies",
    "auhtor": "Warum liegt hier Stroh?",
    "read": true,
    "picture": "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
}]`

let books_final = JSON.parse(books);
console.log(books_final)

for (let count of books_final) {
    if (count.read == true) {
        document.getElementById("container").innerHTML += `<div style="color: red;"> <img src="${count.picture}"> ${count.title} <br> ${count.auhtor} </div>`
    } else {
        document.getElementById("container").innerHTML += `<div style="color: green;"> <img src="${count.picture}"> ${count.title} <br> ${count.auhtor} </div>`
    }
}