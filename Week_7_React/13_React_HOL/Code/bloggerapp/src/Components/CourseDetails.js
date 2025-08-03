import React, { useState } from 'react';

const CourseDetails = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [courseLevel, setCourseLevel] = useState('beginner');

  const course = {
    title: "React Course",
    price: 2999,
    rating: 4.8
  };

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      <div className="course-card">
        <h3>{course.title}</h3>
        <p>Price: ₹{course.price}</p>
        <p>Rating: {course.rating}/5</p>

        {/* Conditional rendering using ternary operator */}
        <p>Status: {isEnrolled ? "Enrolled" : "Not Enrolled"}</p>

        {/* Conditional rendering using logical AND */}
        {course.rating >= 4.5 && <p>⭐ Highly Rated!</p>}

        {/* Switch case conditional rendering */}
        {(() => {
          switch(courseLevel) {
            case 'beginner':
              return <p>👶 Perfect for beginners</p>;
            case 'intermediate':
              return <p>🚀 For intermediate learners</p>;
            case 'advanced':
              return <p>🎯 Advanced level course</p>;
            default:
              return <p>📚 General course</p>;
          }
        })()}

        <div>
          <button onClick={() => setIsEnrolled(!isEnrolled)}>
            {isEnrolled ? "Unenroll" : "Enroll"}
          </button>
          <select value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
