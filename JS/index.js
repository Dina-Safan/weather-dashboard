//^ Html Elements
const toggleInput=document.querySelector("#toggle-input");
const htmlElement=document.documentElement;

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



