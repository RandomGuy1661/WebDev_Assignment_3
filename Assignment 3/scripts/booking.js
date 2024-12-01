/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay=35;
let daysSelected=0;

let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");

mon.addEventListener("click", () => {selectDay("monday")});
tue.addEventListener("click", () => {selectDay("tuesday")});
wed.addEventListener("click", () => {selectDay("wednesday")});
thu.addEventListener("click", () => {selectDay("thursday")});
fri.addEventListener("click", () => {selectDay("friday")});
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function selectDay(day){
    let weekDay = document.getElementById(day);
    if(weekDay.classList.contains("clicked")){
        weekDay.classList.remove("clicked");
        daysSelected -= 1;
    }else{
        weekDay.classList.add("clicked");
        daysSelected += 1;
    }
    console.log(daysSelected);
    calculate(daysSelected, costPerDay);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

function clear(){
    console.log("working");
    document.getElementById("monday").classList.remove("clicked");
    document.getElementById("tuesday").classList.remove("clicked");
    document.getElementById("wednesday").classList.remove("clicked");
    document.getElementById("thursday").classList.remove("clicked");
    document.getElementById("friday").classList.remove("clicked");
    
    daysSelected = 0;
    calculate(daysSelected, costPerDay);
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let half = document.getElementById("half");
let full = document.getElementById("full");

half.addEventListener("click", () => {changeRate("half")});
full.addEventListener("click", () => {changeRate("full")});


function changeRate(time){
    if(time == "half"){
        costPerDay = 20;
        document.getElementById(time).classList.add("clicked");
        document.getElementById("full").classList.remove("clicked");
    }else{
        costPerDay = 35;
        document.getElementById(time).classList.add("clicked");
        document.getElementById("half").classList.remove("clicked");
    }
    console.log(costPerDay);
    calculate(daysSelected, costPerDay);
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(days, rate){
    let total = days*rate;
    document.getElementById("calculated-cost").innerHTML = total;
}

