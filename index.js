// index.js or a separate updates.js
document.addEventListener('DOMContentLoaded', () => {
    const updates = [
        {
            title: "Update 1",
            date: "September 1, 2024",
            content: "New map (Floor 3, Illés)"
        },
        {
            title: "Update 1",
            date: "September 1, 2024",
            content: "New map (Floor 3, Illés)"
        },
       
        // Add more updates here
    ];

    const container = document.getElementById('updates-container');

    updates.forEach(update => {
        const article = document.createElement('article');
        article.classList.add('update');

        const h2 = document.createElement('h2');
        h2.textContent = update.title;

        const pDate = document.createElement('p');
        pDate.innerHTML = `<strong>Date:</strong> ${update.date}`;

        const pContent = document.createElement('p');
        pContent.textContent = `- ${update.content}`;

        article.appendChild(h2);
        article.appendChild(pDate);
        article.appendChild(pContent);

        container.appendChild(article);
    });
});
