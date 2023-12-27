// 1.1 create empty array fruits
let fruits = [];
console.log(fruits);
// 1.2 Add items
fruits.push("apple", "banana", "orange");
console.log(fruits);
// 1.3 Remove the first fruit from the array.
fruits.splice(0,1); // we can also use shift method
console.log(fruits);
// 1.4 Add "grape" to the end of the array.
fruits.push("grape");
console.log(fruits);
// 1.5. Update the second fruit in the array to "pear".
fruits[1] = "pear";
// 1.6. Print the final "fruits" array after performing the above operations
console.log(fruits);

// Assignment 2: Object Operations
// 2.1 and 2.2 Create an empty object called "person" and add details
let person = {
     name: "John",
     age: 30,
     city: "New York"
} 
console.log(person);
// 2.3 Remove the "age" property from the "person" object.
delete person.age;
console.log(person);
// 2.4. Add a new property called "job" with the value "Engineer"
person.job = "Engineer";
console.log(person);
// 2.5. Update the "city" property
person.city = "San Francisco";

//2.6. Print the final "person" object
console.log(person);

// Assignment 3: Array of Objects Operations
// 3.1. Create an empty array called "cars"
let cars = [];

// 3.2 Add three car objects to the "cars" array
cars.push({make:"Toyota", model:"Camry", year:2018},
          {make:"Honda", model:"Civic", year:2019},
          {make:"Ford", model:"Mustang", year:2020});
console.log(cars);

// 3.3. Remove the first car object from the "cars" array
cars.splice(0,1); // shift();
console.log(cars);

// 3.4. Add a new car object to the "cars" array
cars.push({make:"Honda", model:"Civic", year:2020})
console.log(cars);

// 3.5 Update the "model" property of the second car object.
cars[1].model="Accord";
// 3.6 Print the final "cars" array
console.log(cars);
