import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CustomOrderForm = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_mpw47lw',
      'template_94xuuhb',
      {
        from_name: form.name,
        contact_number: form.contact,
        from_email: form.email,
        message: form.message,
      },
      'AnYy8Kv85-7Bk-Uuq'
    )
      .then(() => {
        alert('Message sent successfully!');
        setForm({ name: '', contact: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="md:ml-[20rem] px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-lato font-bold text-gray-800 mb-3">
          Custom Art & Design Requests
        </h1>
        <p className="text-red-500 font-lato font-bold text-sm sm:text-base leading-relaxed">
          FROM PRINT-READY PRODUCT DESIGNS AND CUSTOMIZED PAINTINGS TO BANNERS AND PRO PHOTO EDITS — FILL OUT THE FORM TO GET EXACTLY WHAT YOU NEED!
        </p>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-4 sm:p-6 border"
        >
          <div className="mb-4">
            <label className="block font-lato font-bold mb-1 text-sm">Your Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-1.5 border rounded-md font-lato font-bold text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block font-lato font-bold mb-1 text-sm">Contact No:</label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              className="w-full p-1.5 border rounded-md font-lato font-bold text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block font-lato font-bold mb-1 text-sm">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-1.5 border rounded-md font-lato font-bold text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block font-lato font-bold mb-1 text-sm">
              Describe your request in detail and copy-paste a Google Drive link with any relevant images or references:
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full p-1.5 border rounded-md font-lato font-bold text-sm resize-none"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`bg-yellow-500 text-white font-lato font-extrabold py-1.5 px-4 rounded-md hover:bg-yellow-600 transition duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomOrderForm;
