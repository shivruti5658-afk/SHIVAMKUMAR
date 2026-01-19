# Backend & Frontend File Organization Structure

## Overview

The project has been reorganized to separate backend and frontend files into respective folders for better maintainability and scalability.

## New Folder Structure

```
portfolio/
├── backend/                          # Backend-specific files
│   ├── api/
│   │   └── contact/
│   │       └── route.tsx            # API endpoint for contact form
│   ├── emails/
│   │   └── ContactEmail.tsx         # Email template component
│   └── pdfs/
│       └── ProjectRequirementPDF.tsx # PDF generation logic
│
├── frontend/                         # Frontend-specific files
│   ├── components/
│   │   ├── contact/                 # Contact form components
│   │   ├── ui/                      # UI component library
│   │   ├── emails/                  # Email related components (moved)
│   │   ├── pdfs/                    # PDF components (moved)
│   │   └── *.tsx                    # Page components
│   │
│   ├── contexts/
│   │   └── ThemeContext.tsx         # Theme management
│   │
│   ├── lib/
│   │   └── utils.ts                 # Frontend utility functions
│   │
│   └── pages/                        # All page files from src/app
│
├── shared/                           # Shared between backend & frontend
│   ├── types/
│   │   ├── contact.ts               # Contact form data types
│   │   └── project.ts               # Project data types
│   │
│   ├── schemas/
│   │   └── contact-form.ts          # Zod validation schemas
│   │
│   ├── config/
│   │   └── contactForm.ts           # Shared configuration
│   │
│   └── data/
│       └── projects.ts              # Project data
│
├── src/                              # Original source (to be deprecated/migrated)
│   └── app/
│       └── layout.tsx               # Next.js layout (still here)
│
└── [other files...]
```

## File Organization Summary

### Backend Files

- **backend/api/** - Server-side API routes
- **backend/emails/** - Email template components
- **backend/pdfs/** - PDF generation components

### Frontend Files

- **frontend/components/** - React UI components
- **frontend/contexts/** - React context providers
- **frontend/lib/** - Frontend utility functions
- **frontend/pages/** - Next.js page components

### Shared Files

- **shared/types/** - TypeScript interfaces used by both frontend and backend
- **shared/schemas/** - Validation schemas (Zod)
- **shared/config/** - Configuration constants
- **shared/data/** - Static data files

## Import Paths Update

When importing these files, update paths as follows:

### Backend

```typescript
import { ContactFormData } from "@/shared/types/contact";
import { ProjectRequirementPDF } from "@/backend/pdfs/ProjectRequirementPDF";
import { ContactEmail } from "@/backend/emails/ContactEmail";
```

### Frontend

```typescript
import { ProjectDetailPage } from "@/frontend/components/ProjectDetailPage";
import { ThemeProvider } from "@/frontend/contexts/ThemeContext";
import { cn } from "@/frontend/lib/utils";
```

### Shared

```typescript
import { contactFormSchema } from "@/shared/schemas/contact-form";
import { PROJECT_TYPES } from "@/shared/config/contactForm";
import { projectsData } from "@/shared/data/projects";
```

## tsconfig.json Update

Ensure your `tsconfig.json` includes the new path mappings:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/backend/*": ["backend/*"],
      "@/frontend/*": ["frontend/*"],
      "@/shared/*": ["shared/*"],
      "@/*": ["src/*"]
    }
  }
}
```

## Migration Steps Completed

1. ✅ Created backend/, frontend/, and shared/ directories
2. ✅ Moved API routes to backend/api/
3. ✅ Moved email templates to backend/emails/
4. ✅ Moved PDF components to backend/pdfs/
5. ✅ Copied components to frontend/components/
6. ✅ Copied contexts to frontend/contexts/
7. ✅ Copied lib utilities to frontend/lib/
8. ✅ Copied pages to frontend/pages/
9. ✅ Created shared types, schemas, config, and data folders
10. ✅ Updated import paths in relocated files

## Next Steps

1. Update all import paths throughout the project to use the new structure
2. Update tsconfig.json path mappings
3. Update Next.js app configuration if needed
4. Test the application to ensure all imports work correctly
5. Remove old files from src/ directory once migration is complete
