const elementUSD = document.querySelector('[data-value="USD"]'); // получаем элементы для дальнейшей манипуляции над ними
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const input = document.querySelector('#input');
const select = document.querySelector('#select');
const result = document.querySelector('#result');

const rates = {}; // сщздаем объект и записываем необхадимые нам данные

fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (result0) {
    return result0.json()
}).then(function (data) { // получаем и потребляем json данные
    rates.USD = data.Valute.USD;
    rates.EUR = data.Valute.EUR;
    rates.GBP = data.Valute.GBP;
    console.log(rates.GBP)

    elementUSD.textContent = rates.USD.Value; // отображаем курсы на странице
    elementEUR.textContent = rates.EUR.Value;
    elementGBP.textContent = rates.GBP.Value;

    if (rates.USD.Value > rates.USD.Previous) { //цвет отображения курса валют меняется в зависимости выросла она или нет.
        elementUSD.classList.add('top');
    } else {
        elementUSD.classList.add('bottom');
    }

    if (rates.GBP.Value > rates.GBP.Previous) {
        elementGBP.classList.add('top');
    } else {
        elementGBP.classList.add('bottom');
    }

    if (rates.EUR.Value > rates.EUR.Previous) {
        elementEUR.classList.add('top');
    } else {
        elementEUR.classList.add('bottom');
    }
})

input.oninput = function (){ // выводим результат на страницу после расчета
    result.value = parseFloat(input.value) / rates[select.value].value;
}





