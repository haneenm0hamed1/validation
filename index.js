let password = document.getElementById("password");
let confirm = document.getElementById("Confirm");
let btn =document.getElementById("btn");
let matched = document.getElementById("matched")
let length = document.getElementById("length")
let required= document.getElementById("required")
btn.onclick = function(){
    if(password.value=='' || confirm.value==''){
required.innerHTML=`the password is required`
matched.innerHTML=``
    }else if(password.value==confirm.value){
required.innerHTML=``
         matched.innerHTML=`Your Password Matched`;
        length.innerHTML=`Your character is ${password.value.length}  `
    }else{
        matched.innerHTML=`Your Passoword Don't Matched`
        length.innerHTML=` `

    }

}
