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
var dateToday = new Date();


// to get date
function getDate () {

date = document.querySelector("#Date").value;

console.log(date);
date= date.toString();
console.log(date);

century = date.slice(0,2);
console.log(century);
var YY = date.slice(2,4);
var MM = date.slice(5,7);
var DD = date.slice(8,10);
console.log(day);

//date to interger
century =parseInt(century);
year =parseInt(YY);
day =parseInt(DD);
month =parseInt(MM);

console.log(century);
console.log(year);
console.log(day);
console.log(month);
console.log (typeof(century));


dayOfWeek= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + (day-0.5) )% 7;

dayOfWeek=Math.floor (dayOfWeek);


return date;


}

//to get usergender
function getUserGender() {
    gender= document.querySelector ("#floatingSelect").value;
    console.log(gender);
}

//to get alert on invalid date of birth selected
function noLaterDate(){

    parseddateToday = Date.parse(dateToday);
  
    parsedDateNow = Date.parse(date);

    //to subtract 3 hours to convert to local time
   parsedDateNow = parsedDateNow - 10800000;

    if (parsedDateNow > parseddateToday) {
  
      alert("Date cannot be greater than today");
  location.reload();
      throw Error();
  
     }
  
  };


// to get Akhan Name
function getAkhanName(){
        getUserGender();
        getDate();
        noLaterDate()

        if (!date){alert("Please pick your birthday");

        return false;
    
        };

        console.log(gender);
        console.log(date);


    if (gender === "Male"){


    indexOfDay = dayOfWeek;

      akhanName = MALE_NAMES[indexOfDay];

      document.getElementById("Click_here").innerHTML = "You were born on " + DAY_OF_WEEK[dayOfWeek] + ". Your Akhan name is " + akhanName;
   

    }else if (gender === "Female"){

     indexOfDay = dayOfWeek;

        akhanName = FEMALE_NAMES[indexOfDay];

document.getElementById("Click_here").innerHTML = "You were born on " + DAY_OF_WEEK[dayOfWeek] + ". Your Akhan name is " + akhanName;

       //console.log("Your Akhan Name is " + akhanName);}

    }else {

    alert("Please Pick Your Gender");} 

console.log(DAY_OF_WEEK[dayOfWeek])

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
