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
        number: siblingsNumber,
        description: siblingsDescription
      };
   
      localStorage.setItem("card1", JSON.stringify(card1));
      localStorage.setItem("card2", JSON.stringify(card2));
      localStorage.setItem("card3", JSON.stringify(card3));
  
    
      form.reset();
  
   
      console.log(card1);
      console.log(card2);
      console.log(card3);
    });
  });
