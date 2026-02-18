import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Логотип и описание */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-blue-600">Fayz Ta'lim</h2>
          <p>Учебный центр для детей и подростков с опытными преподавателями.</p>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="font-semibold mb-2">Контакты</h3>
          <p>Телефон: +998 95 506 33 33</p>
          <p>Telegram: @fayztalim_uchtepa</p>
          <p>Учтепинский район, Ташкент</p>
          <p>Алмазарский район (возле метро Беруний), Ташкент</p>
        </div>

        {/* Ссылки */}
        <div>
          <h3 className="font-semibold mb-2">Ссылки</h3>
          <ul className="space-y-1">
            <li>
              <a href="#hero" className="hover:text-blue-600 transition-colors">Главная</a>
            </li>
            <li>
              <a href="#courses" className="hover:text-blue-600 transition-colors">Курсы</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Оставить заявку</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8 text-gray-400 text-sm">
        © 2026 Fayz Ta'lim. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
