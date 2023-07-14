let country =document.getElementById("selector")
let imag = document.getElementById("image")
country.addEventListener("click", change);
function change(){
    if(country.value=="Palestine"){
   imag.src = "https://palemb-sy.com/wp-content/uploads/2021/09/%D8%B9%D9%84%D9%85-1024x686.jpg"}
   else if(country.value=="Saudi Arabia"){
    imag.src="https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/efqrfergerg.jpg"
   }
   else {
    imag.src="https://alamphoto.com/wp-content/uploads/2018/01/Flag-of-Jordan-10.jpg"
   }
}
