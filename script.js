document.addEventListener("DOMContentLoaded", () => {
  const projectGrid = document.getElementById("projectGrid");

  // Dummy folder list (simulate dynamically; replace with actual fetching when hosting on server)
  const projects = [
    "Projects/project1/info.json",
    "Projects/project2/info.json"
  ];

  projects.forEach(async (path) => {
    try {
      const res = await fetch(path);
      const data = await res.json();
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${data.image}" alt="${data.title}" />
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <a href="${data.link}" target="_blank">View Project</a>
      `;
      projectGrid.appendChild(card);
    } catch (err) {
      console.error("Error loading project:", err);
    }
  });
});
