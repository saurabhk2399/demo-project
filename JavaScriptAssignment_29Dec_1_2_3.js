

// document.getElementById("demo3").innerHTML = objEmp.FirstName

var objEmp = {
    firstName: "saurabh",
    lastName : "Singh",
    Department     : "IT",
    fullName : function() {
    return this.firstName + " " + this.lastName + "" + " " + this.Department;
}
};


var person = {
    firstName: "John",
    lastName : "Doe",
    basicsalary     : 4000,
    totalsal : function() {
      return this.basicsalary + 4000*12/100 + 4000*2/100;
    }
  };


//   WAY OF ARRAY CREATION
  var cars = ["bmw", "aUDI", "BMW"];
  var cars2 = [
    "Saab",
    "Volvo",
    "BMW"
  ];

  var car4 = "Saab";
var car5 = "Volvo";
var car6 = "BMW";


// var objEmp2 = {
//     firstName: "saurabh",
//     empid= "5659",
//     basicsalary : "4000",
    
//     totalsal : function() {
//     return this.basicsalary ;
// }
// 

// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id     : 5566,
//     fullName : function() {
//       return this.id + 55;
//     }
//   };