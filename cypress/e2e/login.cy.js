describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета восст пароля
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();// Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //
        cy.get('#exitMessageButton >.exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
     })
 })
 
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажал на кнопку восстановить пароль
        cy.get('#mailForgot').click(); // нажал на кнопку ввести почту 
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту
        cy.get('#restoreEmailButton').click(); // нажал на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю,что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');//Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');//Ввели верный логин
        cy.get('#pass').type('iLoveqastudio2');//Ввели не верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю,что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })
    it(' Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');//Зашли на сайт
        cy.get('#mail').type('german@dolnikov123.ru');//Ввели  не верный логин
        cy.get('#pass').type('iLoveqastudio2');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю,что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })
    it('Ввожу почту без "@" ', function () {
        cy.visit('https://login.qa.studio');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверка цвета восст пароля
        cy.get('#mail').type('germandolnikov.ru');//Ввели не верный логин
        cy.get('#pass').type('iLoveqastudio');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').should('be.visible');// Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })
    it('Приведение к строчным буквам в логине ', function () {
        cy.visit('https://login.qa.studio');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверка цвета восст пароля
        cy.get('#mail').type('GerMan@Dolnikov.ru');//Ввели  не верный логин
        cy.get('#pass').type('iLoveqastudio');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Проверяю,что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя
    })
    