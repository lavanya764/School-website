let showPassword = () =>{
    let passwordBox=document.querySelector("#form2Example2");
    let typeAttribute=passwordBox.getAttribute("type");
    if(typeAttribute==="text"){
        passwordBox.setAttribute("type", "password");

        }
        else{
            passwordBox.setAttribute("type","text");
        }
    }
    let checkBox=document.querySelector("#check");
    checkBox.addEventListener("click", function(){
        showPassword();
    });

