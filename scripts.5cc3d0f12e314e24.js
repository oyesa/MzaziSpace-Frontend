const signInBtn=document.getElementById("#signInBtn"),signUpBtn=document.getElementById("#signUpBtn"),container=document.querySelector(".container");signUpBtn.addEventListener("click",()=>{container.classList.add("signUpBtn")}),signInBtn.addEventListener("click",()=>{container.classList.remove("signUpBtn")});const button=document.querySelectorAll(".btn"),modalClose=document.querySelector(".modal-close"),modal=document.querySelector(".modal");for(var values of button)values.addEventListener("click",function(){modal.style.display="flex"});modalClose.onclick=function(){modal.setAttribute("style","display: none")},$("#myModal").on("shown.bs.modal",function(){$("#myInput").trigger("focus")});