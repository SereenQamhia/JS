const cards = [
    {
      name: 'Sereen',
      age: 23,
      image: 'https://img.freepik.com/premium-vector/beautiful-eyes-drawn-using-wpap-art-style-pop-art-vector-illustration_675380-170.jpg'
    },
    {
      name: 'Shatha',
      age: 22,
      image: 'https://img.freepik.com/premium-vector/beautiful-eyes-drawn-using-wpap-art-style-pop-art-vector-illustration_675380-170.jpg'
    },
    {
        name: 'Razan',
        age: 21,
        image: 'https://img.freepik.com/premium-vector/beautiful-eyes-drawn-using-wpap-art-style-pop-art-vector-illustration_675380-170.jpg'
      },
      {
        name: 'Raghad',
        age: 24,
        image: 'https://img.freepik.com/premium-vector/beautiful-eyes-drawn-using-wpap-art-style-pop-art-vector-illustration_675380-170.jpg'
      },
    
  ];

createcards();
function createcards (){

    for (let i = 0; i < 4; i++) {
       
      let cardContainer = document.createElement('div');
      cardContainer.style.border = '1px solid black';
      cardContainer.style.width='200px '
      cardContainer.style.height = '300px'
      cardContainer.style.margin= '50px'
      cardContainer.style.padding= '15px'
      cardContainer.style.display= 'inline-block'
    

     document.body.appendChild (cardContainer);


      let namecard = document.createElement('h2');
      namecard.textContent = cards[i].name;
  
     
      let agecard = document.createElement('p');
      agecard.textContent = 'Age: ' + cards[i].age;
  
     
      let imagecard = document.createElement('img');
      imagecard.src = cards[i].image;
      imagecard.style.width='100%';
      
  
     
      cardContainer.appendChild(namecard);
      cardContainer.appendChild(agecard);
      cardContainer.appendChild(imagecard);
  
    
     
     }}
