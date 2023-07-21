function disply(){
fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then( data => {
                let t =document.getElementById("table")
                for (let i=0 ; i<20 ; i++){
                     let tdata=`<td>${data[i].id}</td>
                     <td>${data[i].price}</td>
                     <td>${data[i].category}</td>
                     <td>${data[i].rating.rate}</td>
                     <td> <img src=${data[i].image} width="70px" ></td>`
                     

                 let row = document.createElement("tr")
                 row.innerHTML =tdata;
                 t.appendChild(row)
    
                 }} ) }



