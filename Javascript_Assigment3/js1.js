//alert("tEST");


var ulElement= document.querySelector("ul");


var liList = document.querySelectorAll(".list-group-item");
   var searchStudent = document.querySelector(".searchStudent"); 
   //console.log(liList);
   console.log(searchStudent);
   ulElement.addEventListener("click",function(event){
      console.log("I am from UL");
     if (event.target.className=="delete"){ 
       //console.log("Removed from DOM..")
        event.target.parentElement.remove();  
     }
     },false) //caputuring false

function additem(){

    event.preventDefault();  //remove submit 
    
         var inputValue = document.querySelector('.form-control');
          var li  = document.createElement("li");
           var spanStudent  = document.createElement("span");
           var spanDelete  = document.createElement("span");
           
           li.className="list-group-item";
           spanStudent.className="student";
           spanDelete.className="delete";
           
           li.append(spanStudent);
           li.append(spanDelete);
           
           ulElement.append(li);
           
           spanStudent.innerText=inputValue.value;
           spanDelete.innerText="Remove";
           inputValue.value= "";

}