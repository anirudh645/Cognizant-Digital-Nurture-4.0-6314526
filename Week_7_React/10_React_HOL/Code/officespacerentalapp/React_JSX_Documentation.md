# Office Space Rental App - React JSX Implementation

## Overview
This React application demonstrates various JSX concepts and DOM rendering techniques for displaying office space rental information.

## Features Implemented

### 1. **JSX Elements**
- **Location**: App.js - Line 7
- **Implementation**: `const element = "Office Space , at Affordable Range";`
- **Usage**: Creates a JSX element for the page heading
- **Rendering**: `<h1>{element}</h1>`

### 2. **JSX Attributes**
- **Location**: App.js - Line 10-11
- **Implementation**: 
  ```javascript
  const jsxatt = <img src="..." width="25%" height="25%" alt="Office Space"/>;
  ```
- **Usage**: Demonstrates JSX attributes (src, width, height, alt)
- **Rendering**: `{jsxatt}` - Renders the image directly

### 3. **Object Creation and Display**
- **Location**: App.js - Line 14
- **Implementation**: 
  ```javascript
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };
  ```
- **Usage**: Creates an object with office details (Name, Rent, Address)
- **Display**: Object properties are accessed using dot notation

### 4. **Array of Objects**
- **Location**: App.js - Lines 17-23
- **Implementation**: Array containing multiple office space objects
- **Structure**: Each object has id, Name, Rent, Address, and image properties

### 5. **Looping Through Data**
- **Method**: JavaScript `map()` function
- **Implementation**: 
  ```javascript
  {officeSpaces.map((office, index) => (
    <div key={office.id} className="office-card">
      // JSX content
    </div>
  ))}
  ```
- **Purpose**: Renders multiple office space cards dynamically

### 6. **Conditional CSS Styling**
- **Logic**: Rent color changes based on amount
- **Implementation**: 
  ```javascript
  let colors = [];
  officeSpaces.forEach((office) => {
    if (office.Rent <= 60000) {
      colors.push('red');     // Red for rent ≤ 60000
    } else {
      colors.push('green');   // Green for rent > 60000
    }
  });
  ```
- **Application**: `style={{ color: colors[index] }}`

### 7. **DOM Rendering**
- **Method**: ReactDOM renders the entire component tree
- **Entry Point**: index.js renders App component to 'root' element
- **Virtual DOM**: React uses virtual DOM for efficient updates

## Component Structure

```
App Component
├── JSX Element (Heading)
├── JSX Attribute (Image)
├── Single Object Display
│   ├── Name
│   ├── Rent (with conditional color)
│   └── Address
├── Horizontal Rule
└── Office List (Array Loop)
    └── Office Cards (Multiple)
        ├── Title
        ├── Image
        ├── Name
        ├── Rent (conditional color)
        └── Address
```

## CSS Classes and Styling

### Main Container
- `.App` - Main application container with background and padding

### Single Office Display
- `.single-office` - Styled container for individual office object

### Office List
- `.office-list` - Container for multiple office spaces
- `.office-card` - Individual office space card with hover effects
- `.office-image` - Responsive image styling
- `.office-details` - Text content container

### Responsive Design
- Mobile-first approach with media queries
- Responsive images and flexible layouts

## Key JSX Concepts Demonstrated

1. **Element Creation**: Using variables to store JSX elements
2. **Attribute Binding**: Dynamic and static attribute values
3. **Expression Embedding**: `{}` syntax for JavaScript expressions
4. **Conditional Rendering**: Inline conditional statements
5. **List Rendering**: Using map() for dynamic content
6. **Event Handling**: Ready for future interactive features
7. **Component Composition**: Building complex UI from simple elements

## How to Run

1. Navigate to project directory:
   ```bash
   cd "d:\Cognizant DeepSkilling\Week_7_React\10_React_HOL\Code\officespacerentalapp"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

4. Open browser to `http://localhost:3000`

## Expected Output

### Main Features Visible:
- Page heading: "Office Space , at Affordable Range"
- Hero image of office space
- Single office details with conditional rent color
- Grid of multiple office spaces
- Red text for rent ≤ 60000
- Green text for rent > 60000

### Sample Data:
- DBS Office: Rs. 50000 (Red) - Chennai
- Tech Hub: Rs. 75000 (Green) - Mumbai  
- Business Center: Rs. 45000 (Red) - Bangalore
- Corporate Plaza: Rs. 80000 (Green) - Delhi
- Start-up Space: Rs. 35000 (Red) - Pune

This implementation showcases all the core JSX concepts required for modern React development while creating a practical office space rental application.
