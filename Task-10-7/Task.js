/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  let x = 5;
  let y= 8;
  if (x>y){
    console.log(x)
  }
  else {(console.log(y))}



 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
let z =-2;
p=x*y*z;
if (p<0){
    alert ("The sign is -")
}
else { alert ("The sign is +")}



 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
if (x>y && x>z ){
    if ( y>z){
        alert (  x + y+  z)
    }
    else {alert (x , z , y)}
}
else if  (y>x && y>z ){
    if ( x>z){
        alert (  y +' ,' + x +' ,' +  z)
    }
    else {alert ( y , z , x)}
}
else {
    if ( x>y){
        alert (  z, x ,y)
    }
    else {alert ( z, y, x)}
}



 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
arr = [-5, -2, -6, 0, -1 ]
if (arr[0]>arr[1] && arr[0]>arr[2] && arr[0]>arr[3] && arr[0]>arr[4]){
    alert (arr[0])
}
else if (arr[1]>arr[0] && arr[1]>arr[2] && arr[1]>arr[3] && arr[1]>arr[4]){
    alert (arr[1])
}
else if (arr[2]>arr[0] && arr[2]>arr[1] && arr[2]>arr[3] &&arr[2]>arr[4]){
    alert (arr[2])
}
else if (arr[3]>arr[0] && arr[3]>arr[1] &&arr[3]>arr[2] && arr[3]>arr[4]){
    alert (arr[3])
}
else {
    alert (arr[4])
}





 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  if (x>y){
    alert ("Hello World")
  }
  else {
    alert("Goodbye")
  }



 /******* End Your Code ********* */
