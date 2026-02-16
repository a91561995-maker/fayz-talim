import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white bg-black"
    >
      {/* Фон */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/hero.png"
          alt="Fayz Talim students"
         className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

        {/* Контент */}
        <div className="relative z-10 px-6 w-full flex justify-center">
        {/* Подложка под текст (blur + затемнение) */}
        <div className="text-center rounded-2xl px-6 py-6 md:px-10 md:py-8 bg-/40 backdrop-blur-md border border-white/10 shadow-2xl max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Fayz Ta'lim
          </h1>

          <p className="mt-3 text-lg md:text-2xl font-medium text-white/90 drop-shadow-lg">
            Учись. Развивайся. Достигай.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-blue-600 text-white text-base md:text-lg font-semibold py-3 px-8 rounded-xl shadow-xl hover:bg-blue-700 transition duration-300"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
