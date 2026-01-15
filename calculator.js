document.addEventListener("DOMContentLoaded",function(){
    const d1=document.getElementById("d1");
    const d2=document.getElementById("d2");
    const d3=document.getElementById("d3");
    const d4=document.getElementById("d4");
    const d5=document.getElementById("d5");
    const d6=document.getElementById("d6");
    const d7=document.getElementById("d7");
    const d8=document.getElementById("d8");
    const d9=document.getElementById("d9");
    const add=document.getElementById("plus");
    const zero=document.getElementById("0");
    const sub=document.getElementById("sub");
    const mul=document.getElementById("mul");
    const div=document.getElementById("div");
    const decimal=document.getElementById("decimal");
    const equal=document.querySelector(".equalButton");
    const answer=document.querySelector(".answer");
    const clear=document.querySelector(".clearButton");
    const gridButtons=Array.from(document.querySelectorAll(".gridButton"));

    let exp="";

    gridButtons.forEach(button =>{
        button.addEventListener("click",function(){
            answer.innerHTML+=button.textContent;
            exp+=button.textContent;
        })
    });

    equal.addEventListener("click",function(){
        try{
            let finalAns=eval(exp);
            answer.textContent=finalAns;
        }catch(error){
            answer.textContent="Invalid Expression";
            console.log(error);
        }
        exp="";
    }
);


    clear.addEventListener("click",function clear(){
        answer.innerHTML="";
        exp="";
    });


})