let users = [{
	name: "Кирилл",
	age: 17,
	auth: ['kirich', '12'],
	sayHi() {
		alert(`Добро пожаловать, ${this.name}!`)
	}
}, {
	name: "Олег",
	age: 24,
	auth: ['oleg', '34'],
	sayHi() {
		alert(`Добро пожаловать, ${this.name}!`)
	}
}, {
	name: "Ваня",
	age: 87,
	auth: ['ivan', '56'],
	sayHi() {
		alert(`Добро пожаловать, ${this.name}!`)
	}
}, {
	name: "Дима",
	age: 20,
	auth: ['dima', '78'],
	sayHi() {
		alert(`Добро пожаловать, ${this.name}!`)
	}
}, {
	name: "Радик",
	age: 11,
	auth: ['radik', '90'],
	sayHi() {
		alert(`Добро пожаловать, ${this.name}!`)
	}
}]

let login = prompt("Введите логин.");
let password = prompt("Введите пароль.");

showMessage(users);

function showMessage(user) {

	for (let item of users) {
		if (item.auth[0] == login && item.auth[1] == password) {

			if (item.age < 18) {
				alert('Посещение сайта возможно только с 18 лет.');
			}

			if (item.age > 18) {
				item.sayHi();
			}

		}
	}
}


