# Задача 7

Создать сервис авторизации:

В массиве users хранить объекты пользователей (минимум 5 пользователей).
- Объект пользователя должен иметь свойство auth где хранится пара логин и пароль (массив) - user.auth = ['login', 'password']
- Объект должен иметь свойство name
- Объект должен иметь свойство age
- Объект должен иметь метод sayHi() - который выводит приветствие

При попадании на страницу появляется форма авторизации, вводим логин и пароль.
Если какие-то введенные данные подходят под пользователя из массива users, то выводим на экран сообщение - Добро пожаловать, name!
Ставим ограничение по возрасту, если пользователь авторизовался и ему меньше 18 лет, то выводим что посещение сайта возможно только с 18 лет.
