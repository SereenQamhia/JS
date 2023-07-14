
let d = document.createElement("div");
d.style="width:80%; height:80px; background-color:yellow;border:1px solid black; text-align:center"

document.body.appendChild(d);

let H = document.createElement('h2');
H.textContent = "Can I help you?";
d.appendChild(H);
d.addEventListener("mouseover", hover1);
d.addEventListener("mouseout", hover2);
function hover1(){
    H.textContent = "Hello World!";
}
function hover2(){
    H.textContent = "Can I help you?";
}

