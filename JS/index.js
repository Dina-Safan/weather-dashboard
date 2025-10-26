//^ Html Elements
const toggleInput=document.querySelector("#toggle-input");
const htmlElement=document.documentElement;
const cardElement=document.querySelectorAll(".card");


//& Varaiables
const Savedtheme=localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-bs-theme", Savedtheme);
if( Savedtheme =="dark") toggleInput.checked=true;


//~ Functions 



//TODO Events 
toggleInput.addEventListener("change",function(){
  const theme =toggleInput.checked ?'dark':'light';
  htmlElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme",theme);

})

for(let i=0;i<cardElement.length;i++){
   cardElement[i].addEventListener("click",function(e){
     const activeCard=document.querySelector(".active");
     activeCard.classList.remove('active');
     const clickedCard=e.currentTarget;
    clickedCard.classList.add("active");
   })
}



