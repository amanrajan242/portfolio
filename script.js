const projects = [
    {
        title: "Dynamic Project One",
        description: "This is a dynamic project rendered via JavaScript."
    },
    {
        title: "Dynamic Project Two",
        description: "Another dynamic project with different details."
    },
    {
        title: "Dynamic Project Three",
        description: "Add or remove items easily in the JS array!"
    }
];

const portfolioSection = document.getElementById("portfolio");

projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
    `;
    portfolioSection.appendChild(div);
});
