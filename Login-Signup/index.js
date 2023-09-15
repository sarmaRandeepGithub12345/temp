const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const sliderButtons = document.querySelectorAll(".slider-button");
sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sliderOptions = button.querySelectorAll(".slider-option");
    sliderOptions.forEach((option) => {
      option.classList.toggle("active");
    });

    const activeOption = button.querySelector(".slider-option.active");
    button.scrollLeft =
      activeOption.offsetLeft -
      button.clientWidth / 2 +
      activeOption.clientWidth / 2;
  });
});
