import React, { useEffect, useMemo, useState } from "react";

const diplomas = [
  "/diplomas/diploma1.jpg",
  "/diplomas/diploma2.jpg",
  "/diplomas/diploma3.jpg",
];

const Results = () => {
  // делаем бесконечную ленту: [last, ...all, first]
  const track = useMemo(
    () => [diplomas[diplomas.length - 1], ...diplomas, diplomas[0]],
    []
  );

  // позиция (1 = первый настоящий слайд)
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);

  // авто-прокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      setPos((p) => p + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // бесконечность: когда дошли до копии справа — прыгаем на первый настоящий
  useEffect(() => {
    // дошли до последней копии
    if (pos === track.length - 1) {
      const t = setTimeout(() => {
        setAnimate(false);
        setPos(1);
      }, 520); // совпадает с duration ниже
      return () => clearTimeout(t);
    }

    // после прыжка включаем анимацию обратно
    if (!animate) {
      const t = setTimeout(() => setAnimate(true), 40);
      return () => clearTimeout(t);
    }
  }, [pos, animate, track.length]);

  // центр — это текущая позиция в треке
  const center = pos;

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Результаты наших учеников</h2>

        {/* Окно карусели */}
        <div className="relative overflow-hidden">
          {/* Трек (едет слева направо) */}
          <div
            className={`flex ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${pos * 100}%)` }}
          >
            {track.map((src, i) => {
              // Здесь каждый "слайд" содержит 3 карточки: prev, center, next
              return (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-2 md:px-6 py-2">
                    {/* prev */}
                    <div className="hidden md:block rounded-2xl overflow-hidden shadow-xl bg-white border border-black/5
                                    scale-90 opacity-80 blur-[1px] transition-all duration-500">
                      <img
                        src={track[i - 1] || track[0]}
                        alt="prev diploma"
                        className="w-full h-[420px] object-contain bg-white"
                      />
                    </div>

                    {/* center (главный, большой) */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-black/5
                                    scale-100 opacity-100 transition-all duration-500">
                      <img
                        src={src}
                        alt="center diploma"
                        className="w-full h-[540px] object-contain bg-white"
                      />
                    </div>

                    {/* next */}
                    <div className="hidden md:block rounded-2xl overflow-hidden shadow-xl bg-white border border-black/5
                                    scale-90 opacity-80 blur-[1px] transition-all duration-500">
                      <img
                        src={track[i + 1] || track[track.length - 1]}
                        alt="next diploma"
                        className="w-full h-[420px] object-contain bg-white"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Слой “правильных” 3 дипломов (чтобы всегда было prev-center-next) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-6 py-2">
              {/* prev */}
              <div className="hidden md:block rounded-2xl overflow-hidden shadow-xl bg-white/90 border border-black/5
                              scale-90 opacity-80 blur-[1px]">
                <img
                  src={track[center - 1]}
                  alt="prev"
                  className="w-full h-[420px] object-contain bg-white"
                />
              </div>

              {/* center */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-black/5">
                <img
                  src={track[center]}
                  alt="center"
                  className="w-full h-[540px] object-contain bg-white"
                />
              </div>

              {/* next */}
              <div className="hidden md:block rounded-2xl overflow-hidden shadow-xl bg-white/90 border border-black/5
                              scale-90 opacity-80 blur-[1px]">
                <img
                  src={track[center + 1]}
                  alt="next"
                  className="w-full h-[420px] object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Точки */}
        <div className="flex justify-center mt-8 space-x-3">
          {diplomas.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAnimate(true);
                setPos(i + 1);
              }}
              className={`w-3 h-3 rounded-full transition ${
                (pos - 1) % diplomas.length === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
