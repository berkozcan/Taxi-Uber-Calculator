function fStartFee() {
var car_selectedIndex = document.getElementById("select_car").selectIndex;
var people = document.getElementById("input_people");

if (car_selectedIndex == 0) {
    document.getElementById("small_info_fee").innerHTML = "Start price = 3 PLN";
    people.max = "4";
}
if (car_selectedIndex == 1) {
    document.getElementById("small_info_fee").innerHTML = "Start price = 5 PLN";
    people.max = "4";
}
if (car_selectedIndex == 2) {
    document.getElementById("small_info_fee").innerHTML = "Start price = 7 PLN";
    people.max = "3";
}
if (car_selectedIndex == 3) {
    document.getElementById("small_info_fee").innerHTML = "Start price = 10 PLN";
    people.max = "6";
}
 if (car_selectedIndex == 4) {
    document.getElementById("small_info_fee").innerHTML = "Start price = 15 PLN";
    people.max = "2";
}
}
function fRate() {
var bonus_selectedIndex = document.getElementById("select_bonus").selectIndex;

switch(bonus_selectedIndex){
    case 0:
        document.getElementById("small_info_tip").innerHTML = "(Each ☆ +5% to the tip)";
    break;
    case 1:
        document.getElementById("small_info_tip").innerHTML = "☆ +5%";
    break;
    case 2:
        document.getElementById("small_info_tip").innerHTML = "☆☆ +10%";
    break;
    case 3:
        document.getElementById("small_info_tip").innerHTML = "☆☆☆ +15%";
    break;
    case 4:
        document.getElementById("small_info_tip").innerHTML = "☆☆☆☆ +20%";
    break;
    case 5:
        document.getElementById("small_info_tip").innerHTML = "☆☆☆☆☆ +25%";
    break;
    
    }
}

function fCalculate() {

    var km_value = document.getElementById("input_km").value;
    var price_value = document.getElementById("input_price").value;
    var car_selectedIndex = document.getElementById("select_car").selectedIndex;
    var people_value = document.getElementById("input_people").value;
    var people = document.getElementById("input_people");
    var bonus_selectedIndex= document.getElementById("select_bonus").selectedIndex;
    var covid_checked = document.getElementById("input_covid");
    var gift_checked = document.getElementById("input_gift");

if (isNaN(km_value) || km_value <= 0)
alert("Distance is incorrect!")
else 
if (isNaN(price_value) || price_value <=0)
alert("Price is incorrect!")
else
if (isNaN(people_value) || people_value <=0)
alert("Number of people is incorrect!")
else 
{
    var information_div = document.getElementsByClassName('information');
    var results_div = document.getElementsByClassName('results');

    information_div[0].style.width = "70%";
    results_div[0].style.display = "block";

    var cost = 0;
    var tip = 1;

    switch(car_selectedIndex)
    {
        case 0:
            cost=cost+3;
            break;
        case 1:
            cost=cost+5;
            break;
        case 2:
            cost=cost+7;
            break;
        case 3:
            cost=cost+10;
            break;
        case 4:
            cost=cost+15;
            break;

    }

cost = cost + (km_value*price_value);
tip = tip + (bonus_selectedIndex*0.05)
if (covid_checked.checked)
tip=tip+0.05;
if (gift_checked.checked)
tip=tip+0.03

document.getElementById("p_cost_result").innerHTML = (cost).toFixed(2) + "PLN";
document.getElementById("p_cost_result_person").innerHTML = (cost/people_value).toFixed(2) + "PLN/person";
document.getElementById("p_tip_result").innerHTML = (cost*(tip-1)).toFixed(2) + "PLN";
document.getElementById("p_tip_result_person").innerHTML = (cost*(tip-1)/people_value).toFixed(2) + "PLN/person";

document.getElementById("p_total_result").innerHTML = (cost*tip).toFixed(2) + "PLN";
document.getElementById("p_total_result_person").innerHTML = ((cost*tip)/people_value).toFixed(2) + "PLN/person"; 
}

}

