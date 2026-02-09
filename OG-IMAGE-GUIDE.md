# Open Graph Image Creation Guide

## Requirements
- **Dimensions**: 1200x630px (1.91:1 aspect ratio)
- **File Size**: < 600 KB (for WhatsApp compatibility)
- **Format**: PNG or JPG
- **File Name**: `og-image.png`
- **Location**: `/public/og-image.png`

## Essential Elements
Your OG image MUST include:

### 1. Clear Headline (Required)
- Use large, bold text
- Should be your name or main value proposition
- Example: "Tawhid Bin Omar"
- Subtitle: "Game Developer | Robotics Engineer | Physicist"

### 2. Call-to-Action (Required)
- Tell viewers what to do next
- Examples:
  - "View Portfolio →"
  - "See My Work"
  - "Explore Projects"

### 3. Key Achievements (Recommended)
- 🏆 Physics Olympiad Champion
- 🎮 Pyxl Chronicles (230+ players)
- 🤖 Assistive Robotics Engineer
- 💻 Top 7% LeetCode

### 4. Design Elements
- Your profile photo (optional but recommended)
- Brand colors matching your portfolio
- Professional, clean layout
- High contrast for readability
- Avoid clutter

## Quick Creation Methods

### Option 1: Canva (Easiest)
1. Go to [canva.com](https://canva.com)
2. Create custom size: 1200 x 630 px
3. Use template or design from scratch
4. Export as PNG
5. Optimize with TinyPNG if > 600 KB

### Option 2: Figma
1. Create new frame: 1200 x 630 px
2. Design your OG image
3. Export as PNG (2x quality)
4. Compress if needed

### Option 3: Screenshot the Template
1. Open `og-image-template.html` in your browser
2. Set viewport to 1200x630px (use browser dev tools)
3. Take a screenshot
4. Crop and save as PNG

### Option 4: Online OG Image Generators
- [og-playground.vercel.app](https://og-playground.vercel.app/)
- [www.opengraph.xyz](https://www.opengraph.xyz/)

## Image Optimization Tools
If your image is > 600 KB:
- [TinyPNG](https://tinypng.com/) - Best compression
- [Squoosh](https://squoosh.app/) - Advanced control
- [ImageOptim](https://imageoptim.com/) - Mac app

## Testing Your OG Image
After creating and uploading:
1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
4. [OpenGraph.xyz Checker](https://www.opengraph.xyz/)

## Current Status
❌ Current image (`tawhid.png`): 702x911px, 822.58 KB
✅ Required image (`og-image.png`): 1200x630px, < 600 KB

## Template Design Suggestion
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [Photo]      TAWHID BIN OMAR                             │
│   150px       Game Dev | Robotics Engineer | Physicist    │
│               ________________________________________     │
│                                                            │
│               🏆 Physics Olympiad Champion                │
│               🎮 Lead Dev - Pyxl Chronicles (230+)        │
│               🤖 Assistive Robotics Systems               │
│               💻 Top 7% LeetCode Programmer               │
│                                                            │
│                         [View Portfolio →]                │
│                                                            │
└────────────────────────────────────────────────────────────┘
```
