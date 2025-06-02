const changeTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  document.getElementById("lightThemeBtn").classList.remove("active");
  document.getElementById("darkThemeBtn").classList.remove("active");
  document
    .getElementById(theme === "light" ? "lightThemeBtn" : "darkThemeBtn")
    .classList.add("active");
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.getElementById("lightThemeBtn").classList.remove("active");
    document.getElementById("darkThemeBtn").classList.remove("active");
    document
      .getElementById(savedTheme === "light" ? "lightThemeBtn" : "darkThemeBtn")
      .classList.add("active");
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document
      .getElementById(theme === "light" ? "lightThemeBtn" : "darkThemeBtn")
      .classList.add("active");
  }
};

const changeLanguage = (lang) => {
  if (lang === "es") window.location.href = "/es/";
  else if (lang === "en") window.location.href = "/en/";
};

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();

  const lightThemeBtn = document.getElementById("lightThemeBtn");
  const darkThemeBtn = document.getElementById("darkThemeBtn");
  const spanishBtn = document.getElementById("spanishBtn");
  const englishBtn = document.getElementById("englishBtn");
  const printBtn = document.getElementById("printBtn");

  lightThemeBtn.addEventListener("click", () => changeTheme("light"));
  darkThemeBtn.addEventListener("click", () => changeTheme("dark"));
  spanishBtn.addEventListener("click", () => changeLanguage("es"));
  englishBtn.addEventListener("click", () => changeLanguage("en"));
  printBtn.addEventListener("click", () => window.print());
});
