const date = document.querySelector("input[type=date]");
const number = document.querySelector("input[type=text]");
const check = document.querySelector("#check");
const reset = document.querySelector("#reset");

// To check if lucky or not
check.addEventListener('click', () => {

    const birthday = date.value.split('-');
    const luckyNo = number.value;
    
    if(birthday.length != 1 && luckyNo != ''){
        sum = birthday.reduce((sum, date) => sum + parseInt(date),0);
        luckyOrNot(sum, parseInt(luckyNo));
    }else{
        alert("Please fill all fields !");
    }
});
// To reset/clear values
reset.addEventListener('click', () => {
    date.value =  null; 
    number.value = null ;
    document.querySelector('.message').innerText = '';
});
// Logic
const luckyOrNot = (sumOfDates, luckyNum) => sumOfDates % luckyNum === 0 ? showMessage(true) : showMessage(false); 
// Show Response
const showMessage = (response) => {
    const output = document.querySelector('.message');
    if(response){
        output.innerText = "Oye Lucky !!!";
    }else{
        output.innerText = "Not lucky :(";
    }
}