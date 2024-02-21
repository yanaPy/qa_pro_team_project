"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */

 var validationPassport = /^[А-ЯІЇ]{2}[0-9]{6}$/;
 var validationCreditCardNumber = /^[0-9]{16}$/;
 var validationCvv = /^[0-9]{3}$/;


buttonSubmit.addEventListener('click',payFine);

function payFine(){

    if(!numberAndAmountValidation()){
    } else if(!passport.value.match(validationPassport)){
        alert("Не вірний паспортний номер");
    } else if(!creditCardNumber.value.match(validationCreditCardNumber)){
        alert("Не вірна кредитна картка");
    }else if(!cvv.value.match(validationCvv)){
        alert("Не вірний cvv");
    } else{
        deleteFine();
    }
        console.log(DB);
}

function numberAndAmountValidation(){
    var fineNumberFinded = false;
    var amountFinded = false;

    for (var i = 0; i < DB.length; i++) {
        var object = DB[i];
        if (fineNumber.value == object.номер) {
            fineNumberFinded = true;
            if (amount.value != object.сума) {
                break;
            } else {
                amountFinded = true;
                break;
            }
        }
    }

    if(!fineNumberFinded){
        alert("Номер не співпадає");
        return false;
    } else if(!amountFinded){
        alert("Сума не співпадає");
        return false;
    }
    return true;
}

function deleteFine(){
    DB.forEach(function(object, index) {
        if (fineNumber.value === object.номер) {
            DB.splice(index, 1);
        }
    });   
}