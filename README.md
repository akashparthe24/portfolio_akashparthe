# Akash Parthe Portfolio

Modern, recruiter-friendly portfolio website built with React + Vite, inspired by layout ideas from:
- `saadpasta/developerFolio` (single-source content model, section flow, optional GitHub activity)
- `jigar-sable/Portfolio-Website` (clear project grouping and straightforward readability)

This implementation is rebuilt from scratch with a cleaner architecture, responsive UI, dark mode, smoother visuals, and easy content updates.

## Stack
- React 19
- Vite 8
- Modern CSS (component/section-oriented architecture)
- React Icons

## Project Structure

```text
src/
  components/
    Navbar.jsx
    ProjectCard.jsx
    SectionHeading.jsx
    SectionShell.jsx
    SkillCategoryCard.jsx
    ThemeToggle.jsx
    TimelineItem.jsx
  sections/
    HeroSection.jsx
    AboutSection.jsx
    SkillsSection.jsx
    FeaturedProjectsSection.jsx
    ProjectsSection.jsx
    ExperienceSection.jsx
    EducationSection.jsx
    CertificationsSection.jsx
    GithubActivitySection.jsx
    ContactSection.jsx
  data/
    portfolioData.js
    projects.example.js
  App.jsx
  index.css
  main.jsx
public/
  resumes/
    Business_Analyst_Akash_Parthe.pdf
    Data_Engineer_Akash_Parthe.pdf
    ML_Akash_Parthe.pdf
```

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## How to Customize Content

Update `src/data/portfolioData.js`:
- `hero`: name, title, tagline, social links, resume links
- `about`: summary and highlights
- `skillCategories` and `skillLevels`
- `featuredProjects` and `projectsByCategory`
- `experience`, `education`, `certifications`, `contact`

## Resume Downloads

Current resume files are in `public/resumes/`.
Replace those files with updated versions while keeping filenames the same, or update links in `portfolioData.js`.

## Notes
- SEO metadata and structured data are in `index.html`.
- Smooth scrolling is enabled globally.
- Theme preference persists via localStorage.
