import React from "react";

const CourseCard = ({ course, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow"
      onClick={() => onClick(course)}
    >
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600">{course.description.slice(0, 50)}...</p>
    </div>
  );
};

export default CourseCard;
