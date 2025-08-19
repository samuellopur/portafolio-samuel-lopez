// Seleccionamos el botón de cambio de tema
const themeToggle = document.getElementById("theme-toggle");

// Evento para alternar entre modo claro y oscuro
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️Modo claro";
  } else {
    themeToggle.textContent = "🌙 Modo oscuro";
  }
});
