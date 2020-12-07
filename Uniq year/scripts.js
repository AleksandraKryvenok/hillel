"use strict";


function nextUniq(numberValue){
    
    if (numberValue < 1000 || numberValue > 9000){
        console.log("Incorrect value");
        return;
    }

    const arr  = Array.from(String(numberValue));
    const set = new Set(arr);

    if (arr.length === set.size) {
        console.log(numberValue);
    } else {
        nextUniq(numberValue + 1);
    }

};

nextUniq(999);
nextUniq(2019) // 2019
nextUniq(2021) // 2031
nextUniq(1900) // 1902
nextUniq(1931) // 1932
nextUniq(1290) // 1293
nextUniq(2000) // 2012
nextUniq(9001);


