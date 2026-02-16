import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">О нашем учебном центре</h2>
        <p className="text-gray-700 mb-4">
          Учебный центр <span className="font-semibold">Fayz Ta'lim</span> предоставляет качественное образование для детей и подростков. 
          Мы помогаем школьникам подготовиться к экзаменам, развиваем логическое мышление и навыки программирования.
        </p>
        <p className="text-gray-700">
          Все уроки ведут <span className="font-semibold">опытные преподаватели</span>, а наши методы обучения адаптированы для разных возрастов. 
          У нас два филиала: в Учтепинском и Алмазарском районах Ташкента.
        </p>
      </div>
    </section>
  );
};

export default About;
