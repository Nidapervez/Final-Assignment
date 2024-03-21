function carInfo(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Process additional options
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let myCar = carInfo("Toyota", "Camry", "color", "blue", "year", 2022);

// Print the object returned to ensure all the information was stored correctly
console.log(myCar);
