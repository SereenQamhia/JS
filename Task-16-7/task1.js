let colorInput = document.getElementById("color");

colorInput.addEventListener("change", function() {
    let setColor = colorInput.value;
    document.body.style.backgroundColor = setColor;
    sessionStorage.setItem("color", setColor);
});

let bg = sessionStorage.getItem("color");
if (bg) {
    document.body.style.backgroundColor = bg;
}