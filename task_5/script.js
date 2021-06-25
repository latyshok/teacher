
alert(guestArr());

function guestArr() {
	let guest = [];

	while (true) {
		let name = prompt("Введите ваше имя.");

		if (name === "" || name === null) break;

		let foundPos = name.indexOf(' ', 0);
		if (foundPos != -1) {
			alert("Имя должо быть одним словом!");
			continue;
		}

		name = name[0].toUpperCase() + name.slice(1).toLowerCase();

		guest.push(name);
	}
	return guest;
}