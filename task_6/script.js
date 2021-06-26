let men = [
	{ name: 'Vasya', age: 21 },
	{ name: 'Kirill', age: 17 },
	{ name: 'Oleg', age: 25 },
	{ name: 'Dmitry', age: 15 },
	{ name: 'Kolya', age: 56 },
];

let commonAge = getCommonAge(men);
alert(commonAge);

let sortByAge = men.sort((p1, p2) => p1.age - p2.age);

let someUsers = men.filter(item => item.name != "Kolya");
console.log(someUsers);

alert(getCommonAge(someUsers));



function getCommonAge(men) {
	let newArr = men.map(value => value.age);
	let sum = 0;

	for (let number of newArr) {
		sum += number;
	}

	return sum;
}
