function validate(){
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var cpassword=document.getElementById("cpassword");

if (username.value==""){
    alert("Enter username");
    document.form1.username.focus();
    return false;
}
if (email.value==""){
    alert("Enter email");
    document.form1.email.focus();
    return false;
}
if (password.value==""){
    alert("Enter password");
    document.form1.password.focus();
    return false;
}
if(cpassword.value==""){
    alert("Confirm password");
    document.form1.cpassword.focus();
    return false;
}
if(cpassword.value !=password.value){
    alert("Enter correct password");
    document.form1.cpassword.focus();
}
return true;
}


