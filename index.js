const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft; // Fixed typo here
  const y = event.pageY - btnEl.offsetTop; // Fixed typo here
  btnEl.style.setProperty("--xpos", x + "px"); // Ensure variable name matches CSS
  btnEl.style.setProperty("--ypos", y + "px"); // Ensure variable name matches CSS
});
