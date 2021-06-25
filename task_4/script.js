let vasya = new Person('Вася', 21, 'Москва');
let kolya = new Person('Коля', 38, 'Волгоград');

vasya.sayAboutMe();
kolya.sayAboutMe();

vasya.growOld();
vasya.sayAboutMe();

alert(vasya.getAgeDifference(kolya));
alert(kolya.getAgeDifference(vasya));



function Person(name, age, city) {

	this.name = name;
	this.age = age;
	this.city = city;

	this.sayAboutMe = function () {
		alert(`Меня зовут ${this.name}, мне ${this.age} ${pluralize(this.age, "год", "года", "лет")}. Я живу в городе ${this.city}`)
	}

	this.growOld = function () {
		return this.age++;
	}

	this.getAgeDifference = function (person) {
		let message = '';

		if (person.age > this.age) {
			let older = person.age - this.age;
			message = `${person.name} старше чем ${this.name} на ${older} ${pluralize(older, "год", "года", "лет")}`;
		} else {
			let younger = this.age - person.age;
			message = `${person.name} младше чем ${this.name} на ${younger} ${pluralize(younger, "год", "года", "лет")}`
		}

		return message;
	}
}


function pluralize(number, one, two, five) {
	let n = Math.abs(number);

	n %= 100;

	if (n >= 11 && n <= 19) {
		return five;
	}

	n %= 10;

	if (n == 1) {
		return one;
	}

	if (n >= 2 && n <= 4) {
		return two;
	}

	return five;
}


