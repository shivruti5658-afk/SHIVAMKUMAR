# Project Images Folder Structure

Paste your project screenshots here following this structure:

```
projects/
├── project-1/
│   ├── image1.webp              (Full resolution: 1920x1200px)
│   ├── image1-thumb.webp        (Thumbnail: 400x250px)
│   ├── image2.webp
│   ├── image2-thumb.webp
│   ├── image3.webp
│   ├── image3-thumb.webp
│   └── ...
│
├── project-2/
│   ├── homepage.webp
│   ├── homepage-thumb.webp
│   ├── dashboard.webp
│   ├── dashboard-thumb.webp
│   └── ...
│
└── project-3/
    ├── landing-page.webp
    ├── landing-page-thumb.webp
    └── ...
```

## How to Add Images

### Step 1: Prepare Images

1. Take screenshots of your projects (1920x1200px recommended)
2. Save as PNG or JPG

### Step 2: Optimize Images

```bash
# Install imagemagick or use online tools like squoosh.app

# For full resolution (1920x1200)
convert original.png -resize 1920x1200 -quality 80 image.webp

# For thumbnail (400x250)
convert original.png -resize 400x250 -quality 75 image-thumb.webp
```

### Step 3: Paste Files

- Place full images directly in `projects/project-1/`
- Place thumbnails in same folder with `-thumb` suffix

## File Naming Convention

✅ **Good:**

- `homepage.webp`
- `homepage-thumb.webp`
- `admin-dashboard.webp`
- `admin-dashboard-thumb.webp`

❌ **Avoid:**

- `IMG_001.webp` (not descriptive)
- `Screen Shot 2025-01-18.webp` (spaces in filename)
- Mixed formats (stick to .webp)

## Image Specifications

| Type       | Resolution | Quality | Format |
| ---------- | ---------- | ------- | ------ |
| Full Image | 1920x1200  | 80      | WebP   |
| Thumbnail  | 400x250    | 75      | WebP   |

## Update Project Data

After adding images, update `src/data/projects.ts`:

```typescript
{
  id: 'project-1',
  title: 'Your Project Title',
  description: 'Description...',
  images: [
    {
      id: 'img-1',
      src: '/projects/project-1/homepage.webp',
      thumbnail: '/projects/project-1/homepage-thumb.webp',
      alt: 'Homepage design',
      type: 'website',
      caption: 'Homepage with navigation',
    },
  ],
}
```

## Quick Links

- **Optimization Guide**: See `IMAGE_GALLERY_GUIDE.md`
- **Image Converter**: https://squoosh.app
- **Batch Converter**: Use ImageMagick or FFmpeg

---

Ready to add images? Start with `project-1/` folder! 📸
