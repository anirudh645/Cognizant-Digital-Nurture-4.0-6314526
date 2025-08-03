import React from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Blogger App - Conditional Rendering Demo</h1>
        <p>Demonstrating various conditional rendering techniques in React</p>
      </header>
      
      <main className="app-main">
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </main>
    </div>
  );
}

export default App;
