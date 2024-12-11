# Ironman Training Progress Tracker Web Component

## Overview
This project implements a web component-based training progress tracker specifically designed for triathletes and Ironman participants. The application uses custom HTML elements to create reusable, encapsulated components that track and visualize training progress across swimming, cycling, and running disciplines.

## Features

### Custom Progress Bar Component
- Implements a reusable progress bar web component using Shadow DOM for style encapsulation
- Customizable through attributes (`progress` and `label`)
- Reactive updates when attributes change
- Marvel-inspired styling with gradient effects

### Training Progress Tracking
- Weekly goal setting for each discipline:
  - Swimming (meters)
  - Cycling (miles)
  - Running (miles)
- Training log functionality with date, distance, and time tracking
- Automatic progress calculation based on weekly goals
- Visual progress indicators through custom progress bars

### User Interface
- Dark theme inspired by Marvel's design language
- Responsive layout that works across different screen sizes
- Accessible form inputs with clear visual feedback
- Interactive elements with hover effects
- Clean, organized data presentation in tables

## Technical Implementation

### Web Component Architecture
```javascript
class TrainingProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Component implementation...
    }
}
```

### Key Technical Features
1. **Shadow DOM Encapsulation**
   - Styles are scoped to each component
   - Prevents style leakage from global CSS
   - Maintains component independence

2. **Attribute Observation**
   - Reactive updates to progress changes
   - Dynamic label updates
   - Real-time progress visualization

3. **Event Handling**
   - Form submission management
   - Goal updates
   - Progress calculations

## Installation and Usage

1. Clone the repository and navigate to the project directory
2. Ensure all files are in the same directory:
   - `index.html`
   - `progress-bar.js`
   - `styles.css`
3. Open `index.html` in a modern web browser

### Using the Progress Bar Component
```html
<training-progress-bar 
    progress="75" 
    label="Weekly Running Goal:">
</training-progress-bar>
```

## Design Choices and Challenges

### Shadow DOM Implementation
The decision to use Shadow DOM was made to ensure style encapsulation and component reusability. This prevents global styles from affecting the progress bar component while allowing the component to be styled consistently across different parts of the application.

### Challenges Faced
1. **Style Encapsulation**: 
   - Initially faced issues with global styles affecting the progress bar
   - Solved by implementing Shadow DOM and scoped styles

2. **Cross-Browser Compatibility**:
   - Addressed input styling inconsistencies across browsers
   - Implemented vendor prefixes for better compatibility

3. **Progress Calculation**:
   - Implemented weekly progress tracking
   - Handled date-based filtering for accurate progress representation

### Solutions and Improvements
- Used CSS custom properties for consistent styling
- Implemented proper attribute observation patterns
- Created clear documentation for component usage
- Added input validation and error handling

## Browser Compatibility
Tested and working in:
- Google Chrome (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements
1. Data persistence using local storage
2. Additional visualization options
3. Detailed training analytics
4. Export functionality for training logs
5. Integration with fitness tracking APIs

## Accessibility
- Proper ARIA labels for interactive elements
- High contrast color scheme
- Keyboard navigation support
- Clear visual feedback for user interactions

## Conclusion
This project demonstrates the effective use of web components to create a maintainable, reusable training tracking application. The implementation showcases the benefits of component encapsulation, custom elements, and modern web development practices while providing practical utility for athletes training for triathlons and Ironman competitions.