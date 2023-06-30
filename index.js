// let students = ['ayub' , 'islom', 'daler', 'shaxzod']


// let idx = students.indexOf(prompt(students))

// students.splice(idx, 1)


// console.log(students)

// Even and Odd
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = nums.filter(nums => nums % 2 === 0);
let odd = nums.filter(nums => nums % 2 !== 0);

confirm(`
Even numbers: ${even}
Odd numbers: ${odd}
`)



// // The Longest Name
let students = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod'];
let ln = '';

students.forEach(name => {
    if (name.length > ln.length) {
        ln = name;
    }
});

confirm('The longest name is' + " " + ln)


// Delete name
let someone = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod'];
confirm(`Список элементов: ${someone}`);
let index = prompt("Введите индекс элемента, который вы хотите удалить:");

if (index < someone.length) {
    someone.splice(index, 1);
    confirm("Элемент успешно удален.");
} else {
    confirm("Индекс выходит за пределы массива.");
}

confirm(`Новый список: ${someone}`);

//CARS
let cars = [20000, 16000, 40000, 30000, 60000, 13000, 15000, 45000, 110000];
let from = prompt('От скольки сумм:');
let up = prompt('До скольки сумм:');

for (let i = 0;
    i < cars.length;
    i++ ) {
    if (cars[i] >= from && cars[i] <= up) {
        console.log("Список доступных автомобилей:" + cars[i]);
    }
}




