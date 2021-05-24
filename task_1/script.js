let massa;
let height;

while (true) {

	if (!massa) {
		massa = +prompt("Введите свой вес в [кг].");

		if (!massa) {
			alert("Вводите в числах!");
			continue;
		}
	}

	if (!height) {
		height = +prompt("Введите свой рост в [см].");

		if (!height) {
			alert("Вводите в числах!");
			continue;
		}



	}

	if (massa && height) {
		break;
	}
}


let index = getIndex(massa, height)

showMassage(index);


function getIndex(massa, height) {
	massa = Math.abs(massa);

	height = Math.abs(height);
	height /= 100;

	let indexMassa = massa / height ** 2;
	return indexMassa;
}

function showMassage(indexMassa) {

	if (indexMassa < 16.6) {
		alert("Выраженный дефицит массы.");
	}

	if (indexMassa >= 16.6 && indexMassa <= 18.49) {
		alert("Недостаточная (дефицит) масса тела.");
	}

	if (indexMassa >= 18.5 && indexMassa <= 24.99) {
		alert("Норма.");
	}

	if (indexMassa >= 25 && indexMassa <= 29.99) {
		alert("Избыточная масса тела (предожирение).");
	}

	if (indexMassa >= 30 && indexMassa <= 34.99) {
		alert("Ожирение первой степени.");
	}

	if (indexMassa >= 35 && indexMassa <= 39.99) {
		alert("Ожирение второй степени.");
	}

	if (indexMassa >= 40) {
		alert("Ожирение третьей степени(морбидное).");
	}
}