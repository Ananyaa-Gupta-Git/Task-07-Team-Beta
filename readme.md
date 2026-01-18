# Website Project - Dual Theme Implementation

## Overview

This project is a fully responsive website featuring a dual-theme system (light and dark modes) with seamless theme switching capabilities. The website maintains consistent styling and functionality across both themes while providing an enhanced user experience through intelligent navigation and responsive design.

## Project Structure

The project consists of five main pages, organized into two parallel folder structures:

### Main Pages
- **about.html** - Information about the project/team
- **index.html** - Homepage/landing page
- **projects.html** - Project showcase page
- **blog.html** - Blog listing page
- **contact.html** - Contact information page

### Additional Pages
- **project-details.html** - Detailed view for individual projects (accessed from projects.html)
- **blog-details.html** - Detailed view for individual blog posts (accessed from blog.html)

### Folder Structure
```
├── light-version/
│   ├── assets/
│   ├── phpmailer/
│   ├── about.html
│   ├── index.html
│   ├── projects.html
│   ├── project-details.html
│   ├── blog.html
│   ├── blog-details.html
│   ├── contact.html
│   └── mail.php
│
└── dark-version/
    ├── assets/
    ├── phpmailer/
    ├── about.html
    ├── index.html
    ├── projects.html
    ├── project-details.html
    ├── blog.html
    ├── blog-details.html
    ├── contact.html
    └── mail.php
```

## Key Features

### 1. Dual Theme System
- **Light Version**: Clean, bright interface optimized for daytime viewing
- **Dark Version**: Eye-friendly dark interface for reduced eye strain
- Both themes maintain identical functionality and content structure

### 2. Intelligent Theme Switching
- **Toggle Button**: Custom theme switcher with sun/moon icon indicators
  - Sun icon: Currently in light theme
  - Moon icon: Currently in dark theme
- **Context-Aware Navigation**: Theme switching preserves the current page
  - Example: Switching from `light-version/about.html` automatically navigates to `dark-version/about.html`
- **Seamless Transition**: Users maintain their position in the website when switching themes

### 3. Custom Navigation System

#### Desktop Navigation
- Fully functional navbar created from scratch
- Consistent across all pages in both themes
- Includes theme toggle functionality

#### Mobile Navigation
- Conditional responsive navigation pane
- Automatically activates on mobile viewports
- Hamburger menu implementation for better mobile UX
- Hidden on desktop to maintain clean design

### 4. Enhanced Footer
- Redesigned footer with comprehensive navigation links
- Includes all primary page links for easy access
- Fully responsive design
- Styled to match both light and dark themes
- Maintains consistency across all pages

### 5. Complete Asset Integration
- Images optimized for both themes
- Consistent styling across all pages
- Responsive media elements

## Technical Implementation

### Standardization
The entire website has been standardized to ensure:
- Consistent code structure across all pages
- Uniform styling conventions
- Synchronized functionality between light and dark versions
- Maintainable and scalable codebase

### Responsive Design
- Mobile-first approach
- Breakpoint-based responsive behavior
- Optimized for various screen sizes and devices

### Navigation Logic
- Relative path mapping between theme versions
- JavaScript-powered theme switching
- Conditional rendering for mobile/desktop navigation

## Usage

### Switching Themes
1. Locate the theme toggle button in the navbar
2. Click to switch between light and dark modes
3. The website automatically navigates to the corresponding page in the selected theme

### Navigation
- Use the navbar to navigate between pages
- On mobile devices, access the hamburger menu for navigation options
- Footer links provide alternative navigation paths

## Files Modified/Created

### Custom Implementations
- Navigation bar (both themes)
- Theme toggle functionality
- Mobile responsive navigation pane
- Enhanced footer with navigation links

### Preserved Features
- Project details page structure
- Blog details page structure
- All original content and functionality

## Browser Compatibility

The website is compatible with:
- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential improvements for future iterations:
- User preference persistence (localStorage for theme selection)
- Smooth transition animations between themes
- Additional theme variants
- Enhanced accessibility features

## Credits

- **Development**: Standardization and feature implementation
- **Footer Design**: Team member contribution
- **Theme Integration**: Custom dual-theme system implementation

## License

[Add your license information here]

## Contact

[Add contact information here]

---

**Note**: This project demonstrates a practical approach to implementing dual-theme websites while maintaining code consistency and user experience across different viewing preferences.