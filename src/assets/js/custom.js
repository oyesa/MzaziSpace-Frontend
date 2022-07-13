
 const signInBtn = document.getElementById('#signInBtn');
 const signUpBtn = document.getElementById("#signUpBtn");
 const container = document.querySelector(".container");
 
 signUpBtn.addEventListener("click", () => {
 container.classList.add("signUpBtn");
 });
 
 signInBtn.addEventListener("click", () => {
 container.classList.remove("signUpBtn");
 });