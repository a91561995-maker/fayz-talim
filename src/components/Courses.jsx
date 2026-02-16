import React, { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";
import Modal from "./Modal";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className="py-16 bg-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Наши курсы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} course={selectedCourse} />
    </section>
  );
};

export default Courses;
