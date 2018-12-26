//alert("Hello! I am an alert box!!");





function myFunction() {
    var str = "Angular Avengers";
    var res = str.charCodeAt(8)
    document.getElementById("demo").innerHTML = res;
  }


//   15. Write program to Check if “Angular ”  is part of give string   “I am from Angular Avengers”.
  function myFunction2() {
    var str = "I am from Angular Avengers";
    var res = str.includes("Angular")
    document.getElementById("demo2").innerHTML = res;
  }

//   16 what is difference between lastIndexOf and indexOf write program.
  function UseLastIndexOf() {
    var str = "Hello planet earth, you are a great planet.";
    var n = str.lastIndexOf("planet");
    document.getElementById("demo3").innerHTML = n;
}


function UseIndexOf() {
    var str = "Hello planet earth, you are a great planet.";
    var n = str.indexOf("planet");
    document.getElementById("demo4").innerHTML = n;
}

// 17. What is replace,search.

function FunReplace() {
    var str = document.getElementById("demo5").innerHTML;
    var n = str.replace("planet","Moon");
    document.getElementById("demo5").innerHTML = n;
}

function FunSearch() {
    var str = "Hello planet earth, you are a great planet.";
    var n = str.search("planet")
    document.getElementById("demo6").innerHTML = n;
}

//18. Get ‘Angular’ from “I am from Angular Avengers” using slice method
function FunSlice() {
    var str = document.getElementById("demo7").innerHTML;
    var n = str.slice(9,17)
    document.getElementById("demo7").innerHTML = n;
}

//19 Get ‘Angular’ from “I am from Angular Avengers” using substring method

function FunSubstring() {
    var str = document.getElementById("demo8").innerHTML;
    var n = str.substring(9,17);
    document.getElementById("demo8").innerHTML = n;
}

//20. Get ‘Angular’ from “I am from Angular Avengers” using substr method

function Funsubstr() {
    var str = document.getElementById("demo9").innerHTML;
    var n = str.substr(9,9);
    document.getElementById("demo9").innerHTML = n;
}


// 22 get Get ‘Angular’ from “I am from Angular Avengers” using substring negative start and        end.
function Funsubstr_N() {
    var str = document.getElementById("demo10").innerHTML;
    var n = str.substr(str.length - 10, str.length-2);
    document.getElementById("demo10").innerHTML = n;
}


//23. Write function to get sum of 2 numbers.





function FunSum(){
    var a,b,c;  
    a=5;
    b=6;
    c =a+b
    alert(c);
     
    
    document.getElementById("demo11").innerHTML = c;
}


// 24. Give examples for below operator(give 5 example for all)
//             = ,+= ,-= ,*= ,/= ,%= 

function FunExp(){
var x1 = 10;
document.getElementById("demo12").innerHTML = x1;
}

function FunExp2(){
    var x = 10;
    x += 5;
    document.getElementById("demo13").innerHTML = x;
}
var x = 10;
x += 5;
document.getElementById("demo14").innerHTML = x;