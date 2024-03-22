//Function Declaration
function carInfo(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
//for loop for iteration
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function
let myCar = carInfo("Hilux", "mehraaan", "color", "yellow", "Texture","Smooth");

// Print the object 
console.log(myCar);
