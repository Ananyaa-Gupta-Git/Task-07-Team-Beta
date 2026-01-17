document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const path = window.location.pathname;

    if (path.includes("light-version")) {
      window.location.href = path.replace("light-version", "dark-version");
    } else if (path.includes("dark-version")) {
      window.location.href = path.replace("dark-version", "light-version");
    }
  });
});
