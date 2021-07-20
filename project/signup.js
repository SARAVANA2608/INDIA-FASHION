function showpopup(){
    let popup=document.getElementsByClassName("popup")[0];
    popup.style.display="block";
}
function closepopup(){
    let popup=document.getElementsByClassName("popup")[0];
    popup.style.display="none";
}

function showpassword(){
    let pass=document.getElementsByClassName("login");
    pass[3].type="text";
}
function hidepassword(){
    let pass=document.getElementsByClassName("login");
    pass[3].type="password";
}

function login(event){
    event.preventDefault();
}