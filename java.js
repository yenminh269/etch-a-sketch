let container = document.querySelector(".container");
let alpha=1;
playSketch(16,0);
function playSketch(squares,color){
    container.style.width = container.style.height = "500px";
    let size = 500/squares;
    for(let i =0; i<squares*squares;i++){
            let div = document.createElement("div");
            div.style.width = div.style.height = `${size-4}px`;
            div.style.border = `solid 2px rgba(90,90,90,${alpha}`;
            div.style.color= "black";
            if(color != 1){
            div.addEventListener('mouseover', ()=>{
                div.classList.add("hovered");
            });
            div.addEventListener('mouseout', ()=>{
                div.classList.remove("hovered");
                div.classList.add("hovered");
            });}
            else{
                let red = Math.floor(Math.random()*256)+1;
                let green = Math.floor(Math.random()*256)+1;
                let blue = Math.floor(Math.random()*256)+1;

                div.addEventListener('mouseover', ()=>{
                    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
                });
                div.addEventListener('mouseout', ()=>{
                    div.style.backgroundColor =`rgb(${red},${green},${blue})`;
                });
            }
            container.appendChild(div);
    }
    document.body.appendChild(container);
    alpha -= 0.2;
}
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
button2.addEventListener('click',()=>{
    let user = prompt("Type the number of squares per side(max:40)");
    document.body.removeChild(container);
    container = document.createElement("div");
    container.classList.add("container");
    playSketch(user,1);
});
button1.addEventListener('click',() =>{
    user = prompt("Type the number of squares per side(max:40)");
    document.body.removeChild(container);
    container = document.createElement("div");
    container.classList.add("container");
    playSketch(user,0);
});