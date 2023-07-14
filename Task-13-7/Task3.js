let selectorElement = document.getElementById("selector");
let selector2Element = document.getElementById("selector2");
let italicElement = document.getElementById("Italic");
let boldElement = document.getElementById("Bold");
let underlineElement = document.getElementById("Underline");
let boxElement = document.getElementById("box");

selectorElement.addEventListener("change", applyStyles);
selector2Element.addEventListener("change", applyStyles);
italicElement.addEventListener("change", applyStyles);
boldElement.addEventListener("change", applyStyles);
underlineElement.addEventListener("change", applyStyles);

function applyStyles() {
    let fontFamily = selectorElement.value;
    let fontSize = selector2Element.value;
    let fontStyle = italicElement.checked ? "italic" : "normal";
    let fontWeight = boldElement.checked ? "bold" : "normal";
    let textDecoration = underlineElement.checked ? "underline" : "none";

  boxElement.style.fontFamily = fontFamily;
  boxElement.style.fontSize = fontSize;
  boxElement.style.fontStyle = fontStyle;
  boxElement.style.fontWeight = fontWeight;
  boxElement.style.textDecoration = textDecoration;
}