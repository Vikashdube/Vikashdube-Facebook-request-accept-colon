var istatus = document.querySelector("h6");

var addfriend = document.querySelector("#add");

var removefriend = document.querySelector("#remove");


addfriend.addEventListener("click",function(){
    istatus.innerHTML = "Add Friend Successful !" 
});

removefriend.addEventListener("click", function(){
    istatus.innerHTML = "Remove Friend Successful !"
});