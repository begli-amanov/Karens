// Mobile navigation toggle (progressive enhancement: nav links stay in the DOM either way)
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

function setOpen(open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () =>
  setOpen(toggle.getAttribute("aria-expanded") !== "true"),
);
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) setOpen(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});

document.querySelectorAll("[data-email-contact]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `mailto:${atob("Y29hY2hpbmdAb3Nza2VsbGVybWFubi5kZQ==")}`;
  });
});
