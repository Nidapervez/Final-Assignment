//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

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
