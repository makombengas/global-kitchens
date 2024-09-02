"use client"

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function JoinUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    theme: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hier könntest du das Formular an eine API senden
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      theme: '',
      message: '',
    });
  };
  const form = useTranslations('JoinUs')

  return (
    <div className="min-h-full flex w-full  justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="md:text-2xl font-bold mb-6 text-center">{form("contactFormTitle")} </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">{form("nom")} </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={form("nomText")}
              required
              className="w-full mt-2 p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold"> {form("email")} </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={form("emailText")}
              required
              className="w-full mt-2 p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="school" className="block text-gray-700 font-semibold">
              {form("thème")}
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.theme}
              onChange={handleChange}
              placeholder={form("thèmeText")}
              required
              className="w-full mt-2 p-2 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              {form("message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={form("messageText")}
              className="w-full mt-2 p-2 border rounded-lg"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full text-lg bg-[#8EC63F] text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-900 hover:text-slate-100 transition duration-300"
          >
            {form("btn")}
          </button>
        </form>
      </div>
    </div>
  );
}
