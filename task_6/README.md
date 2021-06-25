Имеется массив с объектами (люди), требуется написать функцию getCommonAge, которая принимает в качестве параметра объект и выводит общий возраст.


- отсортировать массив по возрасту, исключить из массива объект с name Kolya и снова вывести возраст на экран
    
```
let men = [
    { name: 'Vasya', age: 21 },
    { name: 'Kirill', age: 17 },
    { name: 'Oleg', age: 25 },
    { name: 'Dmitry', age: 15 },
    { name: 'Kolya', age: 56 },
];

let commonAge = getCommonAge(men); 
alert(commonAge) // 134

 ... your code ...
отсортировать массив по возрасту, исключить из массива объект с name Kolya и снова вывести возраст на экран

function getCommonAge(obj) {
    ... your code ...
}

```