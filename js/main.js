const MALE_NAMES =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const DAY_OF_WEEK =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var day 
var date 
var month 
var gender
var akhanName
var dayOfWeek
var century


//To save user birthday
// let date = document.querySelector("#Date");
// console.log(date);

// // fetch date figure from user section in string form
// date.valueAsDate = new Date();

// date.onchange = function(){

//    console.log(date.value);
//    {
//     return date;
//    }
// }

function getDate () {

    date = document.querySelector("#Date").value;


}

    // document.getElementById("demo").innerHTML = x;





    




function getUserGender() {
    gender= document.querySelector ("#floatingSelect").value;
    console.log(gender)
}


    

    function getAkhanName(){
        getUserGender();
        getDate();

        console.log(gender)
        console.log(date)

//Calculate day of the week


//var dayofTheWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

//CC - is the century digits. For example 1989 has CC = 19

//YY - is the Year digits (1989 has YY = 89)

//MM - is the Month

//DD - is the Day of the month

//mod - is the modulus function ( % )


date= date.toString()
console.log(date)

century = date.slice(0,2);
console.log(century)
var YY = date.slice(2,4);
var MM = date.slice(5,7);
var DD = date.slice(8,9);


century =parseInt(century)
year =parseInt(YY)
day =parseInt(DD)
month =parseInt(MM)

console.log(century)
console.log(year)
console.log(day)
console.log(month)
console.log (typeof(century))


dayOfWeek= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7

dayOfWeek=Math.round(dayOfWeek)

    if (gender === "Male"){


    indexOfDay = dayOfWeek;

      akhanName = MALE_NAMES[indexOfDay];

   

    }else if (gender === "Female"){

     indexOfDay = dayOfWeek

        akhanName = FEMALE_NAMES[indexOfDay];

       //console.log("Your Akhan Name is " + akhanName);}

    }else {

        console.log("Please Pick Your Gender");} 

console.log(DAY_OF_WEEK[dayOfWeek])

document.getElementById("Click_here").innerHTML = "You were born on " + DAY_OF_WEEK[dayOfWeek] + ". Your Akhan name is " + akhanName;



    }
    




    





//get user input
    //get user's birthday, 31.12.1900
    //get user's gender m,f




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
