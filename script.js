const container = document.createElement("div");
container.className = "container";
const signUpBtn = document.querySelector(".green");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
