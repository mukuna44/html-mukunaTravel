alert("test")
alert("hello mukuna");



const questionContainer = document.querySelector(".click-event");
const btn1= document.querySelector('#btn-1');
const btn2= document.getElementById('btn-2');
const response= document.querySelector('p');

console.log(response);
console.log(btn1,btn2);



questionContainer.style.borderRadius = "150px";
questionContainer.addEventListener("click", ()=>{
    questionContainer.classList.toggle("question-clicked");
   
});

btn1.addEventListener("click",()=>{
   response.style.visibility="visible";
   response.style.background="green";
   response.classList.add('show response');
        })
btn2.addEventListener("click",()=>{
    response.style.visibility="visible";
    response.style.background="red";
    response.classList.add('show response');

});



