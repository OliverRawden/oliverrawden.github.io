const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

function setActiveTab(tabName) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === `panel-${tabName}`;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));

  button.addEventListener("keydown", (event) => {
    const currentIndex = tabButtons.indexOf(button);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabButtons.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    } else {
      return;
    }

    event.preventDefault();
    const nextButton = tabButtons[nextIndex];
    setActiveTab(nextButton.dataset.tab);
    nextButton.focus();
  });
});
