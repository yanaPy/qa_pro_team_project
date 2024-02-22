"use strict";
window.fineList = {
    searchFines: searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey, typeSearchData) {
    
    let checkTypeSearchdata= typeSearchData.id; // получаем в каком поле заполненны данные "пошук за номером" чи "пошук за типом" 
    let checkSearchKey;
    let arrOfFoundFines = [];
    let typeOfTrafficFines;

    /*Проверка вводим ли мы корректное значение для корректного поля
      Так как можно ввести 003 в поле "пошук за типом" 
      и без данной проверки вернет значение, как будто мы ввели в поле "пошук за номером"*/
    if (checkTypeSearchdata === "searchInput2" ) {
        checkSearchKey = Number.isInteger(Number(searchKey));
        if (!checkSearchKey)  return alert("Введіть корректне значення");
        
        };
    if (checkTypeSearchdata === "searchInput") {
        checkSearchKey = Number.isNaN(Number(searchKey));
        if (!checkSearchKey) return alert("Введіть корректне значення");
        
    };

    
    for (let i = 0; i < DB.length; i++) {
        for (let key in DB[i]) {
            if (DB[i][key] == searchKey) typeOfTrafficFines = key;
        }
    };

    for (let i = 0; i < DB.length; i++) {
        if (DB[i][typeOfTrafficFines] === searchKey)
            arrOfFoundFines.push(DB[i]);
    };

    if (arrOfFoundFines.length < 1) return alert("Введіть корректне значення");
    return arrOfFoundFines;
};

