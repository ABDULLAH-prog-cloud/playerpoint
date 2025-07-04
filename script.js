document.getElementById("menu-toggle").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-200px";
  } else {
    sidebar.style.left = "0px";
  }
});
