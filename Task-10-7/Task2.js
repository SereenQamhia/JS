/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let x=88;
if(x<50){
    alert("Fail")
}
else if ( x>=50 && x<=59){
    alert("E")
}
else if ( x>=60 && x<=69){
    alert("D")
}
else if ( x>=70 && x<=79){
    alert("C")
}
else if ( x>=80 && x<=89){
    alert("B")
}
else if ( x>=90 && x<=100){
    alert("A")
}