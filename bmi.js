document.addEventListener("DOMContentLoaded",function(){

    const ageInput=document.getElementById("inputAge");
    const heightInput=document.getElementById("inputHeight");
    const weightInput=document.getElementById("inputWeight");
    const calculateButton=document.querySelector(".calculateButton");
    const secondBox=document.querySelector(".secondBox");
    const answer=document.getElementById("answer");
    const classification=document.getElementById("quality");

    function validData(age,height,weight){
        if(age.trim()===""){
            alert("Age can't be empty");
            return false;
        }
        if(height.trim()===""){
            alert("Height can't be empty");
            return false;
        }
        if(weight.trim()===""){
            alert("Weight can't be empty");
            return false;
        }

        return true;
    }

    function calculateBMI(height,weight){
        height=height/100;
        const bmi=(weight/(height*height));
        return bmi.toFixed(2);
    }

    function displayDetails(bmi){
        secondBox.style.display="block";
        answer.textContent=`${bmi}`;
        if(bmi<18.5){
            classification.textContent="Underweight";
        }else if(bmi>=18.5 && bmi<25){
            classification.textContent="Normal";
        }else if(bmi>=25&& bmi<30){
            classification.textContent="Overweight";
        }else{
            classification.textContent="Obese";
        }
    }

    calculateButton.addEventListener("click",function(){
        const age=ageInput.value;
        const height=heightInput.value;
        const weight=weightInput.value;
        const isValid=validData(age,height,weight);
        if(isValid){
            const bmi=calculateBMI(height,weight);
            displayDetails(bmi);
        }
    })


})