let container = document.querySelector("#container");
let row = 16;
let column = 16;
for(let i =0; i<row;i++){
    for(let j=0; j<column;j++){
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.border = "solid 2px grey";
        div.style.color= "blue";
        
        div.classList.add("new");
        div.innerHTML = `${j+1}`;
        container.appendChild(div);
    }
}
document.body.appendChild(container);
let elements = document.querySelectorAll(".new");
for(element of elements){


    element.addEventListener('mouseover', ()=>{
        element.classList.add("hovered");
    })
    element.addEventListener('mouseout', ()=>{
        element.classList.remove("hovered");
        element.classList.add("unhovered");
    })
}
