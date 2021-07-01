let user = [{
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

getMassege(user);

function getMassege(user) {
	let login = prompt("Введите логин.");
	let password = prompt("Введите пароль.");

	user.map(function (item) {

		if (item.auth[0] == login && item.auth[1] == password) {

			if (item.age < 18) {
				alert('посещение сайта возможно только с 18 лет.');
			}

			if (item.age > 18) {
				item.sayHi();
			}

		}
	})
}


