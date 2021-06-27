let men = [
	{ name: 'Vasya', age: 21 },
	{ name: 'Kirill', age: 17 },
	{ name: 'Oleg', age: 25 },
	{ name: 'Dmitry', age: 15 },
	{ name: 'Kolya', age: 56 },
];

let commonAge = getCommonAge(men);
alert(commonAge);

men.sort((p1, p2) => p1.age - p2.age);

let someUsers = men.filter(item => item.name != "Kolya");
alert(getCommonAge(someUsers));



function getCommonAge(men) {
	let newArr = men.reduce((sum, item) => sum + item.age, 0)
	return newArr;
}


