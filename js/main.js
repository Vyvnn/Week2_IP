const MALE_NAMES =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const DAY_OF_WEEK =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var day 
var month 
var gender


//To save user birthday
let date = document.querySelector("#Date");
console.log(date);

// fetch date figure from user section in string form
date.valueAsDate = new Date();

date.onchange = function(){

   console.log(date.value);
   {
    return date;
   }
}

function getUserGender() {
    gender= document.querySelector (".form-select").value;
    console.log(gender)
}

function getAkhanName(){

    if (gender === "Male"){

    indexOfDay = DAY_OF_WEEK.indexOf("Day");

      akhanName = MALE_NAMES[indexOfDay];

      console.log("Your Akhan Name is " + AkhanName);

    }else if (gender === "Female"){

     indexOfDay = DAY_OF_WEEK.indexOf("Saturday");

        akhanName = FEMALE_NAMES[indexOfDay];

       console.log("Your Akhan Name is " + akhanName);}

    else {console.log("Please Pick Your Gender");





  

//Calculate day of the week


//var dayofTheWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

//CC - is the century digits. For example 1989 has CC = 19

//YY - is the Year digits (1989 has YY = 89)

//MM - is the Month

//DD - is the Day of the month

//mod - is the modulus function ( % )


//date.tostring
//var century =date.slice (0,2);
//var YY = date.slice (2,4);
//var MM = date.slice(5,7);
//var DD = date.slice (8,9);


//get user input
    //get user's birthday, 31.12.1900
    //get user's gender m,f



//var dayOfTheWeek ={(cc/4)}
//get user's akhan name

// function getUserInput(){
// day = prompt("Enter your day:");
// month=prompt("Enter your month:");
// year=prompt("Enter your year:");
// gender=prompt("Enter your gender:");
// century=prompt("Enter your century:");year,slice(0,2);
// }
// function getAkhanNames(day,month,year,gender){
//     var dayOfTheWeek =
//     var indexOfDay = DAY_OF_WEEK.indexOf(dayOfTheWeek);
//     var name= null;
//     if (gender.toLocaleLowercase().startswith('m')){
//         name= MALE_NAMES[indexOfDay];
//     }else if (gender.toLocaleLowercase().startswith('f')){
//         name = FEMALE_NAMES[indexOfDay]
//     }else {
//         console.log ("Invalid gender!")
//     }
//     return name;
// }
// function main(){
//     getUserInput{};

// }





// //document.getElementById ("Your Akhan name is").innerText= Kwasi
