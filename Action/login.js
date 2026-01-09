document.getElementById("loginForm").addEventListener("submit", function(e){
e.preventDefault(); //This is used to prevent the automation reloading of the file and enbales to be stay passive and allows to step to the next page automatically.

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    if(username && password ==""){
         alert("Please fullfil the boxes.");
         
    }else{
        localStorage.setItem("user", JSON.stringify({username}));
        window.location.href="myAccount.html";
    }
});

// Source - https://stackoverflow.com/a/33493657
// Posted by Anand Singh
// Retrieved 2026-01-09, License - CC BY-SA 3.0


document.getElementById("loginForm").addEventListener("reset",function(e)
{
        var oldP=document.getElementById("password").value="";
        var newP=document.getElementById("newP").value="";
        var confirmP =document.getElementById("confirmP").value="";
});
