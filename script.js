// 1

const x = "Hello";
const y = "World!";
console.log(`${x} ${y}`);

//2

const multiply = (x = 1, y = 1) => console.log(`${x * y}`);

multiply(2, 5);
multiply(6, 6);
multiply(5);
multiply();

//3

const average = (...cokolwiek) => console.log(cokolwiek.reduce((q, v) => q + v)/cokolwiek.length);

average(1);
average(1, 3);
average(1, 3, 6, 6);

//4

const average = (...cokolwiek) => console.log(cokolwiek.reduce((q, v) => q + v)/cokolwiek.length);
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//5

const tablica = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = tablica;

console.log(`${firstname} ${lastname}`);


