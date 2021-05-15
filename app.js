const button=document.getElementById("button");
var numberInTheShape=1;
var oldValue=0;
var output = document.getElementById("result");

button.onclick=()=>{
    let n= document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rectangle");
    const box=document.getElementById("box");

    let j;
    n=Number(oldValue)+Number(n);
    
    for(let j=numberInTheShape; j<=n;j++){
        var shape =document.createElement("div");
        shape.innerHTML+=numberInTheShape;
        
        shape.classList.add("circle");
        
        box.appendChild(shape);
        numberInTheShape++;
        oldValue=document.getElementById("box").lastElementChild.innerHTML;
    }
    output.innerHTML="Thanks for your contribution"
};

