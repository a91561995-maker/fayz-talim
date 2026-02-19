import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Главная", href: "#hero" },
    { name: "О нас", href: "#about" },
    { name: "Курсы", href: "#courses" },
    { name: "Преимущества", href: "#advantages" },
    { name: "Филиалы", href: "#branches" },
    { name: "Результаты", href: "#results" },
    { name: "Заявка", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-blue-600">Fayz Ta'lim</h1>

        {/* Десктоп навигация */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow flex flex-col space-y-2 px-6 pb-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)} // закрываем меню после клика
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
