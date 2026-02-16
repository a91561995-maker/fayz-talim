import React from "react";

const advantages = [
  "Уроки ведутся опытными преподавателями",
  "Индивидуальный подход к каждому ученику",
  "Современные методы обучения",
  "Небольшие группы и комфортная атмосфера",
  "Подготовка к экзаменам и олимпиадам",
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
            >
              <p className="text-gray-700 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
