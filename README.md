# BandSite - Sprint 2

## Overview

This project is part of Sprint 2 for the BandSite website, focusing on enhancing interactivity and implementing new features using JavaScript. A second page has been added, and dynamic content has been integrated. This sprint prioritizes front-end development, as back-end functionality will be provided in a later sprint.

The deliverables include a fully responsive, interactive site with a Comments section and a Shows page. The website structure, styling, and layout adhere to the provided design package, using BEM principles and Sass for styling.

---

## Project Goals

1. **Interactivity**: Use JavaScript to make the site dynamic and engaging.
2. **Responsive Design**: Ensure the site works seamlessly across various screen sizes (320px to 1920px).
3. **Clean Code**: Follow project structure guidelines, utilize Sass, and adhere to BEM principles.
4. **Modular Development**: Develop and merge code in the `sprint-2` branch before integrating with the `main` branch.

---

## Functional Requirements

### Comments Section
- Add a user-friendly form to submit comments.
- Display new comments at the top of the list.
- Render 3 default comments on page load.
- Dynamically update the comment list using JavaScript DOM manipulation.
- Prevent page reload when submitting comments.

### Shows Page
- Embed a song using an iframe (e.g., SoundCloud).
- Dynamically render a list of shows from a JavaScript array.
- Add hover and click states for individual show items.
  - Apply a hover state using Sass pseudo-classes.
  - Implement a selected state using JavaScript to toggle classes.

---

## Visual Design Requirements

- Match mockups and design specs from the provided design package.
- Ensure consistency across all dimensions, including between breakpoints.
- Utilize Flexbox for layout structure.
- Write modular CSS using Sass.

---

## Implementation Requirements

1. **Folder Structure**:
   - Organize files based on project guidelines.
   - Separate styles, scripts, and assets into dedicated folders.

2. **Sass Features**:
   - Use variables, mixins, and modular SCSS files to maintain reusable, concise styles.

3. **JavaScript**:
   - Manipulate the DOM using methods like `createElement` and `appendChild` instead of `innerHTML`.
   - Use functions for reusable code logic.

4. **HTML Form for Comments**:
   - Submit comments via `addEventListener`.
   - Validate input fields to prevent empty submissions.
   - Clear inputs and dynamically re-render comments on submission.

5. **Dynamic Content**:
   - Generate HTML dynamically for both Comments and Shows sections based on data arrays.
   - Ensure no static content for these sections exists in the HTML file.

---

## Technologies Used
HTML5: For structure and semantic markup.
CSS3/Sass: For styling, responsive design, and BEM methodology.
JavaScript: For dynamic content and DOM manipulation.
Git/GitHub: For version control and collaboration.


