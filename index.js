    var myName="Olalekan"
    var myStr="My name is " + myName + " and I am a web developer"
   alert(myStr);

   var num= '1';
   var myNum= '1'+ num;
   console.log(myNum)

   var digit='67';
   var minus=70-digit;
   console.log(minus)

    var lastNameLength=0;
    var lastName="Emmanuel";
    lastNameLength=lastName.length;
    console.log(lastNameLength)

    var myArray=[30, 50,49];
    var myData=myArray[2];
    console.log(myData)

   var myArray = [30, 50, 49];
myArray[2]=78;
console.log(myArray)

var myArray = [ [30, 50, 49], [45,87,95], [32, 67,43] ];
myArray[2][2]=50;
console.log(myArray)

var mySessionList=[ ['jean',2],['top',3],['bedspread',1],['deck',1],['blender',1],['bucket',3] ];
mySessionList[5][1]=4;
console.log(mySessionList)

var ourArray=["Lexy", "Santos"];
ourArray.push(["Sir-luku", "ebacom"]);
console.log(ourArray)  

var myArray = [30, 50, 49];
 var removedFromMyArray=myArray.pop();
console.log(myArray)

console.log(removedFromMyArray);

var myArray = [ [30, 50, 49], [350, 454, 49] ];
var removedFromMyArray=myArray.shift;
console.log(myArray);

function functionWithArgs(a,b){
    console.log(a+b);
}
functionWithArgs(38, 43);

var mySum=87*5/2; 
console.log(mySum)
var remainder= mySum % 5         // This will give a remainder of 2.5 left after dividing mySum by 5 
console.log(remainder)

let goToSchool=false;

if(goToSchool){
    alert("Wake Up and Get Ready");
}else {
    alert("Chill and Sleep more");
}
console.log(goToSchool)

var passMark=70;

function didIPass(mark) {
    if (mark >= passMark){
        alert("Yes,You Passed");
    } else{
        alert("No,You Failed, Olodo ni e")
    }
}

didIPass(32);
    