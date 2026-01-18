# Project Image Gallery - Implementation Guide

## Overview

This implementation provides a premium image gallery for your Next.js portfolio with:
- ✅ Responsive grid layout (1/2/3+ columns based on device)
- ✅ Full-screen lightbox viewer with smooth animations
- ✅ Keyboard navigation (Arrow keys, ESC)
- ✅ Touch/swipe support for mobile
- ✅ Accessibility features (ARIA labels, focus management)
- ✅ Lazy loading & optimized images
- ✅ Dark mode support

---

## File Structure

```
src/
├── components/
│   ├── ImageGallery.tsx          # Main gallery grid component
│   ├── ImageLightbox.tsx         # Full-screen popup viewer
│   └── ProjectDetailPage.tsx     # Example page implementation
├── types/
│   ├── project.ts                # TypeScript interfaces
│   └── contact.ts                # (existing)
└── data/
    └── projects.ts               # Sample project data
```

---

## Usage

### 1. Add Project Data

Edit `src/data/projects.ts` and add your projects:

```typescript
import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'your-project-id',
    title: 'Project Title',
    description: 'Project description...',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    images: [
      {
        id: 'img-1',
        src: '/projects/your-project/image1.png',
        thumbnail: '/projects/your-project/image1-thumb.png',
        alt: 'Image description',
        type: 'landing-page', // or: admin-panel, dashboard, plugin, website, ui-design
        caption: 'Optional caption',
      },
      // ... more images
    ],
    results: 'Achieved X% increase in...',
    liveLink: 'https://example.com',
    caseStudyLink: '/projects/your-project',
  },
];
```

### 2. Use in Your Pages

```tsx
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { projectsData } from '@/data/projects';

export default function ProjectPage() {
  const project = projectsData[0]; // or fetch by ID
  return <ProjectDetailPage project={project} />;
}
```

### 3. Or Use Gallery Component Standalone

```tsx
import ImageGallery from '@/components/ImageGallery';

export default function MyPage() {
  return (
    <ImageGallery 
      images={project.images} 
      projectTitle={project.title} 
    />
  );
}
```

---

## Image Optimization

### Step 1: Prepare Images

1. **Screenshots**: 1920x1200px or 1600x1000px (16:10 aspect ratio)
2. **Resize**: Use tools like:
   - ImageMagick: `convert image.png -resize 1920x1200 image.png`
   - Squoosh: https://squoosh.app
   - TinyPNG: https://tinypng.com

### Step 2: Create Thumbnails

Generate thumbnails for faster initial load:

```bash
# Using ImageMagick
convert original.png -resize 400x250 thumb.png

# Using ffmpeg
ffmpeg -i original.png -vf scale=400:250 thumb.png
```

### Step 3: Convert to WebP

```bash
# Using cwebp (recommended)
cwebp -q 80 image.png -o image.webp
cwebp -q 75 thumb.png -o thumb.webp

# Using ImageMagick
convert image.png -quality 80 image.webp
```

### Step 4: File Organization

```
public/
└── projects/
    ├── project-1/
    │   ├── homepage.webp          (main image)
    │   ├── homepage-thumb.webp    (thumbnail)
    │   ├── dashboard.webp
    │   ├── dashboard-thumb.webp
    │   └── ...
    ├── project-2/
    │   └── ...
```

---

## Features Included

### Gallery Grid
- ✅ 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- ✅ 16:10 aspect ratio (crop center-fit)
- ✅ Smooth hover effects with expand icon
- ✅ Image type badges (Landing Page, Admin Panel, etc.)
- ✅ Lazy loading for images below the fold

### Lightbox Viewer
- ✅ Full-screen modal with dark background
- ✅ Original resolution image display
- ✅ Navigation arrows (previous/next)
- ✅ Image counter (3 / 12)
- ✅ Close button + ESC key support
- ✅ Swipe gestures (mobile)
- ✅ Keyboard arrows support
- ✅ Smooth animations (fade-in, zoom)

### Accessibility
- ✅ ARIA labels for all interactive elements
- ✅ Focus management in lightbox
- ✅ Keyboard navigation
- ✅ Alt text for all images
- ✅ Focus rings on buttons
- ✅ Semantic HTML

### Performance
- ✅ Images lazy-loaded by default
- ✅ WebP format with PNG fallback (via Next.js Image)
- ✅ Optimized thumbnails load first
- ✅ Full images load only in lightbox
- ✅ No layout shift (CLS = 0)

---

## Customization

### Change Grid Columns

Edit `ImageGallery.tsx`:

```tsx
{/* Change this line: */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* To: */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Change Image Aspect Ratio

Edit `ImageGallery.tsx`:

```tsx
{/* Current: 16:10 (62.5%) */}
<div className="relative w-full h-0 pb-[62.5%]">

{/* For 4:3: Change to pb-[75%] */}
<div className="relative w-full h-0 pb-[75%]">

{/* For 16:9: Change to pb-[56.25%] */}
<div className="relative w-full h-0 pb-[56.25%]">

{/* For 1:1 (square): Change to pb-[100%] */}
<div className="relative w-full h-0 pb-[100%]">
```

### Adjust Colors

Edit `ImageGallery.tsx` and `ImageLightbox.tsx`:

```tsx
{/* Type badge color */}
<div className="bg-blue-500/90 text-white">  {/* Change bg-blue-500 */}

{/* Lightbox background */}
<div className="fixed inset-0 z-50 bg-black/95">  {/* Change bg-black/95 */}
```

### Disable Lazy Loading

Edit `ImageGallery.tsx`:

```tsx
priority={true}  {/* Load all immediately */}
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **ESC** | Close lightbox |
| **←** | Previous image |
| **→** | Next image |
| **Enter / Space** | (On gallery item) Open lightbox |

---

## Mobile Support

- ✅ Single-column responsive layout
- ✅ Full-screen lightbox optimal for mobile
- ✅ Touch swipe navigation
- ✅ Pinch-to-zoom in lightbox
- ✅ Optimized touch targets (44px+)

---

## Browser Support

- ✅ Chrome / Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari 14+
- ✅ Android Chrome

---

## Performance Tips

1. **Use WebP format** - 25-35% smaller than PNG
2. **Compress thumbnails** - 200x150px at 60 quality
3. **Compress full images** - 1920x1200px at 75 quality
4. **Lazy load everything** - Set `priority={index < 3}` for above-fold only
5. **Use CDN** - Serve images from CDN like Vercel, CloudFlare, or AWS CloudFront

---

## Testing Checklist

- [ ] Gallery renders on desktop (3 columns)
- [ ] Gallery renders on tablet (2 columns)
- [ ] Gallery renders on mobile (1 column)
- [ ] Click image → lightbox opens
- [ ] Arrow keys navigate images
- [ ] ESC key closes lightbox
- [ ] Swipe left/right on mobile works
- [ ] Close button works
- [ ] Image counter updates
- [ ] Dark mode works
- [ ] Alt text displays in dev tools
- [ ] No console errors
- [ ] Lighthouse score > 95

---

## Next Steps

1. Add your project images to `public/projects/`
2. Update `src/data/projects.ts` with your projects
3. Integrate into your project pages
4. Test across devices
5. Deploy and monitor performance

---

## Support

For issues or questions, check:
- Component accessibility in `ImageLightbox.tsx`
- Image paths in `src/data/projects.ts`
- CSS animations in component files
