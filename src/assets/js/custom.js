
 const signInBtn = document.getElementById('#signInBtn');
 const signUpBtn = document.getElementById("#signUpBtn");
 const container = document.querySelector(".container");
 
 signUpBtn.addEventListener("click", () => {
 container.classList.add("signUpBtn");
 });
 
 signInBtn.addEventListener("click", () => {
 container.classList.remove("signUpBtn");
 });
// testimonials js
const button = document.querySelectorAll(".btn");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

for (var values of button) {
  values.addEventListener("click", function () {
    modal.style.display = "flex";
  });
}
modalClose.onclick = function () {
  modal.setAttribute("style", "display: none");
};



// post js
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

