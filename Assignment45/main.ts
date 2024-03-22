//Function Declaration
function carInfo(manufacturer: string, model: string, ...options: [string, any][]) {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // for loop for iteration
    for (let i = 0; i < options.length; i++) {
        let [key, value] = options[i];
        car[key] = value;
    }

    return car;
}

// Call the function
let myCar = carInfo("Suzuki", "Alto", ["color", "pink"], ["year", 2025]);

// Print the object
console.log(myCar);
