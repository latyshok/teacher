let kirill = new User("Кирилл", 17, ['kirill', '12'],);
let oleg = new User("Олег", 24, ['oleg', '34'],);
let ivan = new User("Ваня", 65, ['ivan', '56'],);
let dima = new User("Дима", 20, ['dima', '78'],);
let radik = new User("Радик", 11, ['radik', '90'],);

let users = [kirill, oleg, ivan, dima, radik]

let login = prompt("Введите логин.");
let password = prompt("Введите пароль.");

showMessage(users);



function User(name, age, auth) {
	this.name = name;
	this.age = age;
	this.auth = auth;
	this.sayHi = function () {
		alert(`Добро пожаловать, ${this.name}!`)
	}
}

function showMessage(users) {

	for (let user of users) {
		if (user.auth[0] == login && user.auth[1] == password) {

			if (user.age < 18) {
				alert('Посещение сайта возможно только с 18 лет.');
			}

			if (user.age > 18) {
				user.sayHi();
			}

		}
	}
}


