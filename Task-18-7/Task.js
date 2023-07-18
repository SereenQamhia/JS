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
    
        
            //     let tr =document.createElement("tr")
            //     t.appendChild(tr)
        
            //     let td1 =document.createElement("td")
            //     tr.appendChild(td1)
            //     td1 .textContent = data[i].id
        
            //     let td2 =document.createElement("td")
            //     tr.appendChild(td2)
            //     td2 .textContent = data[i].price
        
            //     let td3 =document.createElement("td")
            //     tr.appendChild(td3)
            //     td3 .textContent = data[i].category
                
            //     let td4 =document.createElement("td")
            //     tr.appendChild(td4)
            //     td4 .textContent = data[i].rating.rate
                
            //     let td5 =document.createElement("td")
            //     tr.appendChild(td5)
            //     let pic =document.createElement("img")
            //     pic.src = data[i].image
            //     td5.appendChild(pic)
            //     pic.style= "width:70px"
        
            // }



                 }} ) }



