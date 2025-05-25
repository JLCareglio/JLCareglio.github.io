const changeTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();

  const lightThemeBtn = document.getElementById("lightThemeBtn");
  lightThemeBtn.addEventListener("click", () => changeTheme("light"));

  const darkThemeBtn = document.getElementById("darkThemeBtn");
  darkThemeBtn.addEventListener("click", () => changeTheme("dark"));

  const printBtn = document.getElementById("printBtn");
  printBtn.addEventListener("click", () => window.print());
});
