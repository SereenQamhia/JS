function disply(){
    const x=new XMLHttpRequest();
    x.open("GET","Task.json");
    x.onload=function (){
    const myobj=JSON.parse(this.responseText);
    
        
        let t =document.getElementById("table")
     
        for (let i=0 ; i<myobj.length ; i++){
     
            
        let tdata= `
        <td> ${ myobj[i].Name} </td> 
        <td>  ${myobj[i].Age} </td> 
        <td> ${myobj[i].Major} </td> 
        <td>  ${myobj[i].University} </td>
        <td> <img src=${myobj[i].Image} width="70px" ></td>` ;

         let row = document.createElement('tr');
          row.innerHTML = tdata;
         t.appendChild(row);


}

    //     let tr =document.createElement("tr")
    //     t.appendChild(tr)

    //     let td1 =document.createElement("td")
    //     tr.appendChild(td1)
    //     td1 .textContent = myobj[i].Name

    //     let td2 =document.createElement("td")
    //     tr.appendChild(td2)
    //     td2 .textContent = myobj[i].Age

    //     let td3 =document.createElement("td")
    //     tr.appendChild(td3)
    //     td3 .textContent = myobj[i].Major
        
    //     let td4 =document.createElement("td")
    //     tr.appendChild(td4)
    //     td4 .textContent = myobj[i].University
        
    //     let td5 =document.createElement("td")
    //     tr.appendChild(td5)
    //     let pic =document.createElement("img")
    //     pic.src = myobj[i].Image
    //     td5.appendChild(pic)
    //     pic.style= "width:70px"

    // }
}
x.send();}


