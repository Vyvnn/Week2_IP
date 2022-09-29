const MALE_NAMES =["Kwasi"];
const FEMALE_NAMES =["Akosua"];
const DAY_OF_WEEK =["sunday"];
var day = null;
var month = null;

//get user input
    //get user's birthday, 31.12.1900
    //get user's gender m,f

//calculate day of birth

//var dayOfTheWeek ={(cc/4)}
//get user's akhan name

function getUserInput(){
day = prompt("Enter your day:");
month=prompt("Enter your month:");
year=prompt("Enter your year:");
gender=prompt("Enter your gender:");
century=prompt("Enter your century:");year,slice(0,2);
}
function getAkhanNames(day,month,year,gender){
    var dayOfTheWeek =
    var indexOfDay = DAY_OF_WEEK.indexOf(dayOfTheWeek);
    var name= null;
    if (gender.toLocaleLowercase().startswith('m')){
        name= MALE_NAMES[indexOfDay];
    }else if (gender.toLocaleLowercase().startswith('f')){
        name = FEMALE_NAMES[indexOfDay]
    }else {
        console.log ("Invalid gender!")
    }
    return name;
}
function main(){
    getUserInput{};
    
}





//document.getElementById ("Your Akhan name is").innerText= Kwasi
