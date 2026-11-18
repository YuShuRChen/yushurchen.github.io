const projects = document.querySelector(".projects");
const filters = projects.querySelector(".project-filters");
const buttons = [...filters.querySelectorAll("[data-topic]")];
const cards = [...projects.querySelectorAll(".project-item")];
const sections = [...projects.querySelectorAll("[data-project-section]")];
const status = projects.querySelector(".project-filter-status");
const emptyMessage = projects.querySelector(".project-filter-empty");

function filterProjects(button) {
  const topic = button.dataset.topic;
  const visibleProjects = new Set();

  for (const card of cards) {
    const matches = topic === "all" || card.dataset.projectTopics.split(" ").includes(topic);
    card.hidden = !matches;
    if (matches) visibleProjects.add(card.dataset.projectId);
  }

  for (const section of sections) {
    section.hidden = !section.querySelector(".project-item:not([hidden])");
  }

  for (const filter of buttons) {
    filter.setAttribute("aria-pressed", String(filter === button));
  }

  emptyMessage.hidden = visibleProjects.size > 0;
  status.textContent = `${visibleProjects.size} projects shown for ${button.textContent.trim()}.`;
}

for (const button of buttons) {
  button.addEventListener("click", () => filterProjects(button));
}

filters.hidden = false;
filterProjects(buttons[0]);
