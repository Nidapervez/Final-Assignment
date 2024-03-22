function carInfo(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function
let myCar = carInfo("Hilux", "mehraaan", "color", "yellow", "year", 1990);

// Print the object 
console.log(myCar);
