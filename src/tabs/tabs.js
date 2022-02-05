function Tab() {
  const tab = document.querySelectorAll(".app-nav__a");
  const lines = document.querySelector(".line");

  tab.forEach((tabs) => {
    tabs.onclick = function () {
      document.querySelector(".app-nav__a.active").classList.remove("active");
      tabs.classList.add("active");

      lines.style.left = tabs.offsetLeft + "px";
      lines.style.width = tabs.offsetWidth + "px";
    };
  });
}
export default Tab;
