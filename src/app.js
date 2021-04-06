const date = document.querySelector("input[type=date]");
const luckyNo = document.querySelector("input[type=text]");
const check = document.querySelector("#check");
const reset = document.querySelector("#reset");
// console.log(luckyNo);

const birthday = date.value.split('-');


console.log(sumOfDates);
const day = parseInt(birthday[2]);
const month = parseInt(birthday[1]);
const year = parseInt(birthday[0]);

const num = parseInt(luckyNo.value);

check.addEventListener('click', (day,month,year,num) => {
    
    total = day+month+year;

    if(total % num === 0){
        console.log("Oye Lucky !!!");
    }else{
        console.log("Not Lucky :(");
    }
})

reset.addEventListener('click', () => {
    date.value =  null; 
    luckyNo.value = null ;
});
// console.log(num);