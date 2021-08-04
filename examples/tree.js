let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере

function createTree (container, data) {
    let html = '<ul>';

    html += createList(data);

    html += '</ul>';

    alert(html);

    container.innerHTML = html;
}

function createList(data) {
    let html = '';

    for (let key in data) {
        let length = Object.values(data[key]).length

        if (length) {
            html += '<li>' + key + '<ul>' + createList(data[key]) + '</ul></li>';
        } else {
            html += '<li>' + key + '</li>';
        }
    }

    return html;
}