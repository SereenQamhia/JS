// 1. Write a JS code to print numbers from 1 to 10
 for (let i = 1; i < 11; i++){
    console.log(i)
 }

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
console.log('\n \n')
let i=0;
const arr = [13,23,12,45,22,48,66,100];
while (i<8){
    if (arr[i]%2==0){
        console.log(arr[i]) 
    }
      i++;
}

console.log('\n \n')



/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
s=" ";
for(let a=1; a<9;a++){
    for(let j=1 ; j<=a ; j++){
     s+=j+" ";    
}
  s+=`<br>`
}
document.write(s)

 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

let c = "don’t know why";

 if (c.includes("y")){
    console.log("Yes")
 }
 
 else {
    console.log ("No")
 }