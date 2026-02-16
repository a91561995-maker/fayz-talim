import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    branch: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Для уведомления после отправки

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.course || !form.branch) {
      setStatus("Пожалуйста, заполните все обязательные поля");
      return;
    }

    // 🔹 Настройки Telegram
    const botToken = "8537506548:AAEDD-WfgSHTiqlhuyfoWT7l177T8dvkLXs"; // сюда вставьте токен бота
    const chatId = "1688546753"; // сюда вставьте ID чата администраторов
    const text = `
Новая заявка: 🎉
Имя: ${form.name}🙋
Телефон: ${form.phone}📞
Курс: ${form.course}📖
Филиал: ${form.branch}🏢
Сообщение: ${form.message}
`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      setStatus("Заявка успешно отправлена!");
      setForm({ name: "", phone: "", course: "", branch: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Оставить заявку</h2>
        {status && <p className="text-center mb-4 text-blue-600">{status}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Выберите курс</option>
            <option value="Математика">Математика</option>
            <option value="Физика">Физика</option>
            <option value="Английский язык">Английский язык</option>
            <option value="Русский язык">Русский язык</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Логистика">Логистика</option>
            <option value="Почемучка">Почемучка</option>
          </select>
          <select
            name="branch"
            value={form.branch}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Выберите филиал</option>
            <option value="Учтепинский район">Учтепинский район</option>
            <option value="Алмазарский район (возле метро Беруний)">
              Алмазарский район (возле метро Беруний)
            </option>
          </select>
          <textarea
            name="message"
            placeholder="Сообщение (необязательно)"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors font-semibold"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
