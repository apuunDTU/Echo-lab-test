# Research Project Cards

A responsive website showcasing research projects with interactive cards and modals.

## Features

- Responsive grid layout
- Interactive cards with hover effects
- Modal views for detailed information
- Mobile-friendly design
- Clean and modern UI

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts (Neo Sans Std)
- Andale Mono font

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's a static website

## How to Add New Cards

1. Open `card-data.js`
2. Add a new card object to the `researchCards` array following this structure:
```javascript
{
    id: number,
    date: "DD.MM.YYYY",
    title: "PROJECT TITLE",
    image: "assets/your-image.png",
    preview: "Project preview text...",
    sections: {
        researchTopics: {
            title: "RESEARCH TOPICS:",
            content: ["Topic 1", "Topic 2", "Topic 3", "Topic 4"]
        },
        objectives: {
            title: "OBJECTIVES:",
            content: "Project objectives..."
        },
        methodology: {
            title: "METHODOLOGY:",
            content: "Research methodology..."
        },
        lessons: {
            title: "THREE LESSONS:",
            content: ["Lesson 1", "Lesson 2", "Lesson 3"]
        },
        collaborators: {
            title: "COLLABORATORS:",
            content: ["Collaborator 1", "Collaborator 2", "Collaborator 3", "Collaborator 4"]
        }
    },
    externalLinks: {
        project: "https://your-project-link.com",
        publication: "https://your-publication-link.com"
    }
}
```

## Deployment

This site is deployed using GitHub Pages. The main branch is automatically deployed to:
https://[your-username].github.io/research-cards

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Make changes to the files
4. Test locally before pushing to GitHub