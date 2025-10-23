# Resume Update Guide

This guide explains how to update the website when you have a new resume.

## Quick Update Process

### Step 1: Update the Data File
All resume information is centralized in `/data/resumeData.ts`. Simply update this single file with your new information:

```typescript
// Update personal info
export const personalInfo = {
  name: "...",
  email: "...",
  // ... update as needed
}

// Update bio
export const bio = {
  short: "...",
  aboutMe: ["...", "..."]
}

// Update education
export const education = [
  {
    degree: "...",
    gpa: "...",
    coursework: ["...", "..."],
    // ... update as needed
  }
]

// Update experiences
export const researchExperience = [...]
export const workExperience = [...]

// Update projects
export const projects = [...]
```

### Step 2: Update Components (Optional - Only if using centralized data)
If you want to use the centralized data file, update the components to import from `resumeData.ts`:

```typescript
import { personalInfo, bio, education, skills } from "@/data/resumeData";
```

### Step 3: Replace Resume PDF
Upload your new resume PDF and replace `/public/resume.pdf`

---

## Current Setup (Manual Update)

Currently, the website components contain hardcoded data. To update:

### 1. **Hero Section** (`components/HeroSection.tsx`)
- Update `title` and description text
- Lines 25-35: Update the subtitle and bio

### 2. **About Section** (`components/AboutSection.tsx`)
- Lines 165-195: Update bio paragraphs
- Lines 30-120: Update skills array
- Add/remove skill icons as needed

### 3. **Education Section** (`components/Education.tsx`)
- Lines 24-71: Update MS degree info (GPA, coursework, achievements)
- Lines 78-120: Update BS degree info

### 4. **Timeline Section** (`components/TimelineSection.tsx`)
- Lines 16-41: Update research experiences
- Lines 43-84: Update work experiences
- Add/remove experiences as needed
- Update GitHub/paper links

### 5. **Projects Section** (`components/ProjectsSection.tsx`)
- Lines 8-35: Update projects array
- Update project descriptions, images, links, tech stacks

### 6. **Navbar** (`components/Navbar.tsx`)
- Lines 15-40: Update navigation items if needed

---

## Migration to Centralized Data (Recommended)

To make future updates easier, migrate components to use `data/resumeData.ts`:

### Example: Migrating TimelineSection

**Before:**
```typescript
const researchExperiences = [
  {
    title: "...",
    company: "...",
    // ... hardcoded data
  }
]
```

**After:**
```typescript
import { researchExperience, workExperience } from "@/data/resumeData";

// Use imported data directly
<ExperienceTimeline experiences={researchExperience} />
```

### Benefits:
- ✅ Single source of truth
- ✅ Update once, reflect everywhere
- ✅ Easier to maintain
- ✅ Less prone to inconsistencies
- ✅ Can version control resume changes easily

---

## Checklist for Resume Updates

When you get a new resume, follow this checklist:

- [ ] Update `/data/resumeData.ts` with new information
- [ ] Replace `/public/resume.pdf` with new PDF
- [ ] Update components if not using centralized data:
  - [ ] HeroSection.tsx (title, bio)
  - [ ] AboutSection.tsx (bio, skills)
  - [ ] Education.tsx (degrees, GPAs, coursework)
  - [ ] TimelineSection.tsx (research & work experience)
  - [ ] ProjectsSection.tsx (projects)
- [ ] Test locally: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Deploy to production

---

## Quick Reference: File Locations

| Content | File Path | Lines |
|---------|-----------|-------|
| Personal Info | `components/HeroSection.tsx` | 25-35 |
| Bio & Skills | `components/AboutSection.tsx` | 165-195, 30-120 |
| Education | `components/Education.tsx` | 24-120 |
| Research Experience | `components/TimelineSection.tsx` | 16-41 |
| Work Experience | `components/TimelineSection.tsx` | 43-84 |
| Projects | `components/ProjectsSection.tsx` | 8-35 |
| Centralized Data | `data/resumeData.ts` | All |

---

## Future Improvement: Automated Updates

Consider building a script to automatically parse your resume PDF and update `resumeData.ts`. This could use:
- PDF parsing libraries (pdf-parse, pdfjs)
- AI/LLM to extract structured data from resume
- Script to update TypeScript file

---

## Notes

- The centralized data file (`data/resumeData.ts`) is currently created but **not yet connected to components**
- Components still use hardcoded data
- To fully automate updates, migrate all components to import from `resumeData.ts`
- Keep both resume PDF and website data in sync

Last Updated: January 2025
