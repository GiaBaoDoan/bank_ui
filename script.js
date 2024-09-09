// functions
const selectId = (nameId) => {
  return document.getElementById(nameId);
};
// variables
const btn = selectId("toogle-menu");
const overlay = selectId("overlay");
const menu = selectId("menu");
const logoIcon = btn.querySelectorAll("img");
// logicals
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  logoIcon.forEach((e) => {
    e.classList.toggle("hidden");
  });
});
