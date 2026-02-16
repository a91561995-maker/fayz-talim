import React, { useEffect, useState } from "react";

const reviews = [
  {
    name: "Алина К.",
    course: "Математика",
    text: "Преподаватели очень внимательные, я легко поняла сложные темы и сдала экзамен на отлично!",
  },
  {
    name: "Бекзод А.",
    course: "Frontend",
    text: "Очень понравился курс по React, практические задания помогли реально освоить технологию.",
  },
  {
    name: "София Р.",
    course: "Английский язык",
    text: "Курс помог подтянуть разговорный английский и уверенно общаться.",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  // Автоматическая смена каждые 2 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-12">
          Отзывы наших учеников
        </h2>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500">
            <p className="text-lg text-gray-700 mb-6 italic">
              "{reviews[index].text}"
            </p>

            <h4 className="font-semibold text-xl">
              {reviews[index].name}
            </h4>

            <p className="text-blue-600">
              {reviews[index].course}
            </p>
          </div>

          {/* Индикаторы */}
          <div className="flex justify-center mt-6 space-x-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
