let user =0;
let button1 = document.querySelector("#button1");
button1.addEventListener('click',() =>{
    user = prompt("Type the number of squares per side: ");
    document.body.removeChild(container);
    container = document.createElement("div");
    container.classList.add("container");
    playSketch(user);
})
let container = document.querySelector(".container");

playSketch(16);
function playSketch(squares){
    container.style.width = "500px";
    container.style.height = "500px";
    let size = 500/squares;
    for(let i =0; i<squares*squares;i++){
            let div = document.createElement("div");
            div.style.width = div.style.height = `${size-4}px`;
            div.style.border = "solid 2px grey";
            div.style.color= "black";

            div.addEventListener('mouseover', ()=>{
                div.classList.add("hovered");
            });
            div.addEventListener('mouseout', ()=>{
                div.classList.remove("hovered");
                div.classList.add("unhovered");
            });
            div.innerHTML = `${i+1}`;
            container.appendChild(div);
        
    }
    document.body.appendChild(container);
}


