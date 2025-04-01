function generateCard(cardData) {
    return `
        <div class="card-section">
            <article class="research-card" onclick="openModal(this)">
                <header class="card-header">
                    <img src="${cardData.image}" alt="${cardData.title}">
                    <div class="card-date">${cardData.date}</div>
                </header>
                <div class="card-content">
                    <div class="card-left">
                        <h2 class="project-title">${cardData.title}</h2>
                        <p class="card-preview">${cardData.preview}</p>
                    </div>
                    <div class="card-right">
                        <section class="section">
                            <h3 class="section-title">${cardData.sections.researchTopics.title}</h3>
                            <p class="topic-content">
                                ${cardData.sections.researchTopics.content.join(' - ')}
                            </p>
                        </section>

                        <section class="section detailed-section">
                            <h3 class="section-title">${cardData.sections.objectives.title}</h3>
                            <p class="topic-content">${cardData.sections.objectives.content}</p>
                        </section>

                        <section class="section detailed-section">
                            <h3 class="section-title">${cardData.sections.methodology.title}</h3>
                            <p class="topic-content">${cardData.sections.methodology.content}</p>
                        </section>

                        <section class="section detailed-section">
                            <h3 class="section-title">${cardData.sections.lessons.title}</h3>
                            <ul class="lessons-list topic-content">
                                ${cardData.sections.lessons.content.map(lesson => `<li>${lesson}</li>`).join('')}
                            </ul>
                        </section>

                        <section class="section detailed-section">
                            <h3 class="section-title">${cardData.sections.collaborators.title}</h3>
                            <ul class="collaborator-list">
                                ${cardData.sections.collaborators.content.map(collaborator => `<li>${collaborator}</li>`).join('')}
                            </ul>
                        </section>
                    </div>
                </div>
            </article>
            <div class="card-links">
                <a href="${cardData.externalLinks.project}" target="_blank">Project</a>
                <a href="${cardData.externalLinks.publication}" target="_blank">Publication</a>
            </div>
        </div>
    `;
}

// Generate all cards
document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector('.grid-container');
    const cardsHTML = researchCards.map(card => generateCard(card)).join('');
    gridContainer.innerHTML = cardsHTML;
}); 