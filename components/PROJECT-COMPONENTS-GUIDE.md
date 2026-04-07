<!-- PROJECT COMPONENT SYSTEM GUIDE -->

# Project Component System

Each project page uses reusable components. Here's how to build a new project:

## Basic Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PROJECT NAME - Sasha Andrews</title>
  <!-- Include fonts and styles from components/project-template.html -->
</head>
<body>
  
  <div id="nav-component"></div>
  <section class="project-hero"><!-- Hero content --></section>
  <main>
    <!-- Insert project components here -->
  </main>
  <div id="contact-component"></div>
  <div id="footer-component"></div>
  
  <script src="components/loader.js"></script>
</body>
</html>
```

## Components & How to Use Them

### 1. PROJECT HERO
File: `components/project-hero.html`
Replace: `{{PROJECT_TITLE}}`
```html
<section class="project-hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-text">
    <h1>Resort Booking & Membership App</h1>
  </div>
</section>
```

### 2. PROJECT OVERVIEW
File: `components/project-overview.html`
Replace in order:
- `{{PROJECT_TYPE}}` → "UX/UI Design, App Development"
- `{{TIMELINE}}` → "8 weeks"
- `{{TEAM}}` → "2 Designers, 3 Developers"
- `{{TOOLS}}` → "Figma, React, Firebase"
- `{{OVERVIEW_TEXT}}` → Your overview paragraph

### 3. PROBLEM SECTION
File: `components/project-problem.html`
Replace:
- `{{PROBLEM_TEXT}}` → Main problem description
- `{{PROBLEM_IMAGE}}` → Path to image (e.g. "Images/problem.png")
- `{{ISSUE_1}}`, `{{ISSUE_2}}`, `{{ISSUE_3}}` → Key issues as bullets

### 4. SOLUTION SECTION
File: `components/project-solution.html`
Replace:
- `{{SOLUTION_TEXT}}` → Solution description
- `{{SOLUTION_IMAGE}}` → Path to solution image
- `{{FEATURE_1}}`, `{{FEATURE_2}}`, `{{FEATURE_3}}` → Key features

### 5. MOCKUPS GRID (Reusable for any image grid)
File: `components/project-mockups.html`
Replace:
- `{{SECTION_TITLE}}` → "App Screens", "Wireframes", "High-Fidelity Designs", etc.
- `{{MOCKUP_1-4}}` → Image paths
- Works with 1-6 images (auto-responsive grid)

### 6. PROCESS / WORKFLOW / USER FLOWS
File: `components/project-process.html`
Replace:
- `{{PROCESS_TITLE}}` → "Design Process", "User Flows", "Wireframing"
- `{{STEP_1_TITLE}}` → Section title
- `{{STEP_1_DESCRIPTION}}` → Description
- `{{STEP_1_IMAGE}}` → Image path
- Repeat for STEP_2, STEP_3 (add more steps in HTML if needed)

### 7. RESULTS SECTION
File: `components/project-results.html`
Replace:
- `{{RESULT_1_TITLE}}` → "Increased Bookings"
- `{{RESULT_1_DESCRIPTION}}` → Result description
- Repeat for RESULT_2, RESULT_3

---

## Quick Build Checklist

For each new project:
1. ✅ Copy project-template.html → new-project-name.html
2. ✅ Copy all styles from project-template.html <style> tag
3. ✅ Update <title> with project name
4. ✅ Replace hero title only ({{PROJECT_TITLE}})
5. ✅ Insert project-overview component with your data
6. ✅ Insert project-problem component with your data
7. ✅ Insert project-solution component with your data
8. ✅ Insert project-mockups for "App Screens", "Wireframes", "High-Fi" (repeat component 3x)
9. ✅ Insert project-process for "Design Process" (3 steps)
10. ✅ Insert project-results with 3 key outcomes
11. ✅ Update portfolio.html to link to: compliance-management.html, resort-booking-membership-app.html, recruitment-brochure.html

---

## Styling Info

All components inherit from project-template.html CSS:
- Font sizing auto-scales with `clamp()`
- Grid layouts are responsive (1-6 columns auto)
- Animations use `.reveal` class (scroll fade-in)
- All colors use CSS custom properties (--teal, --mint, --smoke, etc)
- Button styling: `.btn-mint` class
- Background cards: `.overview-description`, `.problem-details`, `.solution-features`, `.result-card`

---

## Notes

- Each component is self-contained and can be reused
- Just fill in {{PLACEHOLDER}} values specific to each project
- Images should be high-res PNG/JPG in Images/ folder
- Mockup grids auto-resize based on number of images
- All pages load nav, contact, footer from components/ automatically
