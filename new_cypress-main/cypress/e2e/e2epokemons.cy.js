import * as data from "../helpers/login_password_pokemons.json"

describe('Покупка нового аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); // Заходим на сайт
         cy.wait(1000);

         cy.get('.auth__title').should('be.visible'); // Проверяю надпись Битва покемонов и что она видна
         cy.get('p.auth__text').should('be.visible'); // Проверяю надпись Вход через соцсети и что она видна
         cy.get('.auth__social-icon').should('be.visible'); // Проверяю иконку ВК и что она видна
         cy.get('.auth__restore').should('be.visible'); // Проверею кнопку Востановить и что она видна
         cy.get('.auth__button').should('be.visible'); // Проверяю наличие кнопки Войти
         cy.get('.auth__form > .auth__text').should('be.visible'); // Проверяю кнопку Зарегистрироваться и что она видна

         cy.get(':nth-child(1) > .auth__input').type(data.login); // Вводим логин
         cy.get('#password').type(data.password); // Вводим пароль
         cy.get('.auth__button').click(); // Нажимаем войти
         cy.wait(2000);

         cy.get('.header__container > .header__id').click({ force: true }); // Клик на аватарку в шапке
         cy.get('[href="/shop"]').click(); // Нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара

         cy.get('.pay__main-header').should('be.visible'); // Проверяю надпись ПИКАЧУНЬКОФФ и что она видна
         cy.get('.pay__main-subtitle').should('be.visible'); // Проверяю надпись Касса и что она видна
         cy.get('.pay__header-logoimage').should('be.visible'); // Проверяю Лого в шапке и что он видна
         cy.get('.pay__select-block').should('be.visible'); // Проверяю поле с ценой и что оно видна
         cy.get('.pay__pay-header-v2').should('be.visible'); // Проверяю надпись Карта в боксе для заполнения данных карты и что она видна
         cy.get('.pay-btn').should('be.visible'); // Проверяю кнопку Оплатить и что она видна
         cy.get('font').should('be.visible'); // Проверяю кнопку Вернуться в магазин и что она видна

         cy.get('.credit').type('4111111111111111');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1224');                           // вводим срок действия карты
         cy.get('.k_input_name').type('EUGENE');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить

         cy.get('.payment__bigtext').should('be.visible'); // Проверяю надпись ПИКАЧУНЬКОФФ и что она видна
         cy.get('.payment__logo-img').should('be.visible'); // Проверяю Лого в шапке и что он видна
         cy.get('.pay__select-block').should('be.visible'); // Проверяю поле с ценой и что оно видна
         cy.get('.payment__fielheader').should('be.visible'); // Проверяю надпись Подтверждение покупики в боксе для кода из смс
         cy.get('.payment__span-defolt').should('be.visible'); // Проверяю наличие кнопки Отправить код повторно
         cy.get('.payment__defolt-decline').should('be.visible'); // Проверяю наличие кнопки Отменить

         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке

         cy.get('.payment__bigtext').should('be.visible'); // Проверяю надпись ПИКАЧУНЬКОФФ и что она видна
         cy.get('.payment__logo-img').should('be.visible'); // Проверяю Лого в шапке и что он видна
         cy.get('.pay__select-block').should('be.visible'); // Проверяю поле с ценой и что оно видна
         cy.get('.payment__adv').should('be.visible'); // Проверяю наличие кнопки Вернуться в магазин
     })
 }) 