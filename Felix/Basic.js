var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`

let sandwiches_final = JSON.parse(sandwiches);
let fries_final = JSON.parse(fries);

console.log(sandwiches_final)

console.log(`My favorite sandwich is a ${sandwiches_final.sandwich} which has approximately ${sandwiches_final.calories} calories, along with it I enjoy eating ${fries_final.fries_size} which have about ${fries_final.calories} calories.`)