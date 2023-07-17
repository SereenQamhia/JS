document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form1");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
 
  
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const gender = document.getElementById("Geander").value;
      const image = document.getElementById("image").value;
      const birthday = document.getElementById("barithday").value;
      const description = document.getElementById("Description").value;
      const major = document.getElementById("major").value;
      const htmlLang = document.getElementById("html").checked;
      const cssLang = document.getElementById("Css").checked;
      const jsLang = document.getElementById("js").checked;
      const siblingsNumber = document.getElementById("sbilings").value;
      const siblingsDescription = document.getElementById("Desc").value;
    
  
      const card1 = {
        name,
        age,
        gender,
        image,
        birthday
      };
  
      const card2 = {
        description,
        major,
        languages: {
          html: htmlLang,
          css: cssLang,
          js: jsLang
        }
      };
  
      const card3 = {
      siblingsNumber,
      siblingsDescription
      };
     
      localStorage.setItem("card1", JSON.stringify( card1 ));
      localStorage.setItem("card2",JSON.stringify( card2));
      localStorage.setItem("card3", JSON.stringify(card3));
    
    
    
      form.reset();
  
     let c1=document.getElementById("card1");
     c1.style="width :200px ; height : 200px ; border : 1px solid black ; margin :20px ; padding :5px;"
     let c2=document.getElementById("card2");
     c2.style="width :200px ; height : 200px ; border : 1px solid black ; margin :20px ; padding :5px ;"
     let c3=document.getElementById("card3");
     c3.style="width :200px ; height : 200px ; border : 1px solid black ; margin :20px ; padding :5px ;"
      
     

      let x = JSON.parse(localStorage.getItem("card1"))
      c1.innerHTML= "name=" +x.name +`<br>`+ "age="  + x.age + `<br>` + "gender=" + x.gender + `<br>`+ "image :" + x.image + `<br>` + "birthday=" + x.birthday 
     
      let z = JSON.parse(localStorage.getItem("card2"));
      function langs(x) {
        let m = '';
      
        if (x.html) {
          m += 'HTML  ';
        }
        if (x.css) {
          m += 'CSS  ';
        }
        if (x.js) {
          m += 'JS';
        }
      
        return m;
      }
      c2.innerHTML= "description=" + z.description + `<br>`+ "major=" + z.major + `<br>`+ "languages=" +langs(z.languages)
      
      let i = JSON.parse(localStorage.getItem("card3"))
      c3.innerHTML= " siblingsNumber=" + i.siblingsNumber +`<br>`+ "siblingsDescription :" + i.siblingsDescription 

   
     

  })
})
   

