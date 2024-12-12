import * as data from "../helpers/default_data.json"

describe('Автотесты для формы логина и пароля', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль
     });

    afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
     });

    it('Правильный логин и правильный пароль', function () {
         cy.get('#mail').type(data.login); // Ввести логин
         cy.get('#pass').type(data.password); // Ввести пароль
         cy.get('#loginButton').click(); // Нажать кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Появляется текст, после аторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден
     })
     
    it('Проверяем логику восстановления пароля', function () {
        cy.get('#forgotEmailButton').click(); // Нажимаю кнопку забыли пароль
        cy.get('#mailForgot').type(data.login); // Ввести почту
        cy.get('#restoreEmailButton').click(); // Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Появляется текст успешной отправки пароля
        cy.get('#messageHeader').should('be.visible'); // Текст виден
     })

    it('Правильный логин и неправильный пароль', function () {
        cy.get('#mail').type(data.login); // Ввести логин
        cy.get('#pass').type('iLoveqastudio'); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Появляется текст, логина или пароля нет
        cy.get('#messageHeader').should('be.visible'); // Текст виден
     })
    
    it('Неправильный логин и правильный пароль', function () {
        cy.get('#mail').type('ger@dolnikov.ru'); // Ввести логин
        cy.get('#pass').type(data.password); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Появляется текст, логина или пароля нет
        cy.get('#messageHeader').should('be.visible'); // Текст виден
     })
       
    it('Невалидный логин без @', function () {
        cy.get('#mail').type('germandolnikov.ru'); // Ввести логин
        cy.get('#pass').type(data.password); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Появляется текст про валидацию
        cy.get('#messageHeader').should('be.visible'); // Текст виден
     })
           
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин
        cy.get('#pass').type(data.password); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Появляется текст, успешная авторизация
        cy.get('#messageHeader').should('be.visible'); // Текст виден
     })
 }) 