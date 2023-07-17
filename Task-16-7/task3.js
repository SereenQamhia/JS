let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let bdate = document.getElementById("bdate");
let email = document.getElementById("email");
let confemail = document.getElementById("confemail");
let pass = document.getElementById("pass");
let confpass= document.getElementById("confpass");
fname.addEventListener("input", check)
lname.addEventListener("input", check1)
bdate.addEventListener("input", check2)
email.addEventListener("input", check3)
confemail.addEventListener("input", check4)
pass.addEventListener("input", check5)
confpass.addEventListener("input", check6)



function check() {
    let r = /^[^\d]+$/
     if (r.test(fname.value)){
     document.getElementById('text').innerHTML= "correct name"
     }
     else { document.getElementById('text').innerHTML= "numbers are not allowed" }
}
function check1() {
    let r = /^[^\d]+$/
     if (r.test(lname.value)){
     document.getElementById('text1').innerHTML= "correct name"
     }
     else { document.getElementById('text1').innerHTML= "numbers are not allowed" }
}
function check2() {
    let r = /^[0-9]{1,2}[-]{1}[0-9]{1,2}[-]{1}[0-9]{4}$/;
     if (r.test(bdate.value)){
     document.getElementById('text2').innerHTML= "correct date"
     }
     else { document.getElementById('text2').innerHTML= "the format should be dd-mm-yyyy" }
}
function check3() {
    let r = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     if (r.test(email.value)){
     document.getElementById('text3').innerHTML= "Email is valid"
     }
     else { document.getElementById('text3').innerHTML= "Email is not valid - must be like example@gmail.com" }
}
function check4() {
    let x = email.value;
    if (x.match(confemail.value)){
        document.getElementById('text4').innerHTML = "Email is valid";
    } else {
        document.getElementById('text4').innerHTML = "Email is not valid - try again";
    }
}
function check5() {
    let r = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
     if (r.test(pass.value)){
     document.getElementById('text5').innerHTML= "pass is valid"
     }
     else { document.getElementById('text5').innerHTML= "pass is not valid -try again" }
}

function check6() {
    let x = pass.value;
    if (x.match(confpass.value)){
        document.getElementById('text6').innerHTML = "Password is valid";
    } else {
        document.getElementById('text6').innerHTML = "Password is not valid - try again";
    }
}
