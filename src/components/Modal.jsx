import React from "react";

const Modal = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Фон: blur + лёгкое затемнение */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

      {/* Окно */}
      <div
        className="relative bg-white w-11/12 max-w-md rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xl flex items-center justify-center"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-3">{course.title}</h2>

        <p className="text-gray-700 mb-3">
          <span className="font-semibold">Описание:</span> {course.description}
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Длительность:</span> {course.duration}
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Для кого:</span> {course.audience}
        </p>

        <a
          href="#contact"
          onClick={onClose}
          className="inline-block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Записаться
        </a>
      </div>
    </div>
  );
};

export default Modal;
