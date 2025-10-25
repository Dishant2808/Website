# Data Management Structure

This directory contains all the content data for Krishna WebWorks website, organized into separate files for easy management and maintenance.

## File Structure

### 📁 `/src/data/`

- **`testimonials.js`** - Client testimonials and stats data
- **`services.jsx`** - Services offered by Krishna WebWorks (contains JSX)
- **`portfolio.js`** - Portfolio projects and categories
- **`hero.js`** - Hero section content and configuration

## Benefits of This Structure

### ✅ **Easy Content Management**
- All content is centralized in dedicated data files
- No need to search through component files for content
- Quick updates without touching component logic

### ✅ **Maintainability**
- Clear separation of data and presentation
- Easy to add new testimonials, services, or portfolio items
- Consistent data structure across all components

### ✅ **Scalability**
- Easy to add new data fields
- Simple to create new content types
- Reusable data across multiple components

## Usage Examples

### Adding a New Testimonial
```javascript
// In src/data/testimonials.js
export const testimonials = [
  // ... existing testimonials
  {
    name: "New Client",
    company: "New Company",
    role: "CEO",
    image: "https://example.com/image.jpg",
    content: "Great work!",
    rating: 5,
    project: "New Project"
  }
];
```

### Adding a New Service
```javascript
// In src/data/services.js
export const services = [
  // ... existing services
  {
    icon: <YourIcon />,
    title: "New Service",
    description: "Service description",
    features: ["Feature 1", "Feature 2"],
    color: "from-color-500 to-color-500"
  }
];
```

## Data File Guidelines

### 📝 **Naming Convention**
- Use descriptive file names
- Use camelCase for variable names
- Export data as named exports

### 🎨 **Content Guidelines**
- Keep descriptions concise but informative
- Use consistent formatting
- Include all necessary fields
- Use high-quality images for testimonials

### 🔧 **Technical Guidelines**
- Use proper JavaScript syntax
- Include all required fields
- Maintain consistent data structure
- Add comments for complex data

## Future Enhancements

- [ ] Add CMS integration
- [ ] Create admin panel for content management
- [ ] Add image optimization
- [ ] Implement content versioning
- [ ] Add content validation

---

**Note**: This structure makes it easy to manage content without touching component files, ensuring better maintainability and scalability for the Krishna WebWorks website.
