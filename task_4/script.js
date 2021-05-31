let vasya = new Person('Вася', 21, 'Москва');
let kolya = new Person('Коля', 16, 'Волгоград');

vasya.sayAboutMe();
kolya.sayAboutMe();

vasya.growOld();
vasya.sayAboutMe();

vasya.getAgeDifference(kolya);
kolya.getAgeDifference(vasya);



function Person(name, age, city) {

	this.name = name;
	this.age = age;
	this.city = city;

	this.sayAboutMe = function () {
		alert(`Меня зовут ${this.name}, мне ${this.age} лет. Я живу в городе ${this.city}`)
	}

	this.growOld = function () {
		return this.age++;
	}

	this.getAgeDifference = function (Person) {

	}
}

