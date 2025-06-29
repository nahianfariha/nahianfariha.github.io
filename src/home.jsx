import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Image imports
import ill1 from "./images/illustrations/ill1.webp";
import tothumb from "./images/totebags/tothumb.webp";
import p0 from "./images/paintings/p0.webp";
import ban8 from "./images/banners/ban8.webp";
import ani1 from "./images/animations/ani1.gif";
import tee1 from "./images/tshirts/tee1.webp";
import ui1 from "./images/uidesign/ui1.webp";
import randomVideo from "./images/random.MP4";

import person1 from "./images/appreciations/appr1.webp";
import person2 from "./images/appreciations/appr2.webp";
import person3 from "./images/appreciations/appr3.webp";
import person4 from "./images/appreciations/appr4.webp";
import person5 from "./images/appreciations/appr5.webp";
import person6 from "./images/appreciations/appr6.webp";
import person7 from "./images/appreciations/appr7.webp";
import person8 from "./images/appreciations/appr8.webp";
import person9 from "./images/appreciations/appr9.webp";
import person10 from "./images/appreciations/appr10.webp";
import person11 from "./images/appreciations/appr11.webp";
import person12 from "./images/appreciations/appr12.webp";

const Home = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [zoomImage, setZoomImage] = useState(null); // For image zoom

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_mpw47lw",
        "template_94xuuhb",
        {
          from_name: form.name,
          contact_number: form.contact,
          from_email: form.email,
          message: form.message,
        },
        "AnYy8Kv85-7Bk-Uuq"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", contact: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  const sections = [
    { src: ill1, label: "ILLUSTRATIONS", link: "/illustrations" },
    { src: tothumb, label: "PAINTED TOTE BAGS", link: "/totebags" },
    { src: p0, label: "PAINTINGS", link: "/paintings", rel: "preload" },
    { src: ban8, label: "CARTOON/EVENT BANNERS", link: "/banners" },
    { src: ani1, label: "2D ANIMATIONS", link: "/2danimation" },
    { src: ui1, label: "UI-UX DESIGN", link: "/uidesign" },
    { src: tee1, label: "T-SHIRTS", link: "/tee" },
  ];

  return (
    <>
      {/* Zoomed Image Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}

      <div className="p-4 md:ml-[20rem] mt-3">
        <div className="w-full mb-6 bg-black rounded-lg overflow-hidden">
          <video
            src={randomVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-h-[90vh] object-cover"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {sections.map((item, index) => {
            if (item.label === "T-SHIRTS") {
              return (
                <Link
                  key={index}
                  to={item.link}
                  className="col-span-3 bg-yellow-50 rounded-lg p-4 flex flex-col md:flex-row items-center gap-6 transition duration-300 hover:shadow-xl"
                >
                  <img
                    className="w-full md:w-1/2 rounded-lg object-cover"
                    src={item.src}
                    alt={item.label}
                  />
                  <p className="text-xl md:text-2xl text-center text-gray-800 font-lato font-bold w-full">
                    {item.label}
                  </p>
                </Link>
              );
            }

            return (
              <Link
                key={index}
                to={item.link}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover transition-none transform-none hover:scale-100"
                    src={item.src}
                    alt={item.label}
                  />
                </div>
                <p className="mt-2 text-l text-gray-700 font-lato font-bold">
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-10 mt-20">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-lato font-bold text-gray-800 mb-3">
              Custom Art & Design Requests
            </h1>
            <p className="text-red-500 font-lato font-bold text-sm sm:text-base leading-relaxed">
              FROM PRINT-READY PRODUCT DESIGNS AND CUSTOMIZED PAINTINGS TO
              BANNERS AND PRO PHOTO EDITS — FILL OUT THE FORM TO GET EXACTLY
              WHAT YOU NEED!
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-4 sm:p-6 border"
            >
              <div className="mb-4">
                <label className="block font-lato font-bold mb-1 text-sm">
                  Your Name:
                </label>
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
                <label className="block font-lato font-bold mb-1 text-sm">
                  Contact No:
                </label>
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
                <label className="block font-lato font-bold mb-1 text-sm">
                  Email:
                </label>
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
                  Describe your request in detail and copy-paste a Google Drive
                  link with any relevant images or references:
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
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Request"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Testimonials */}
        <div className="px-4 sm:px-6 mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-lato font-bold text-gray-800 mb-3">
              SEE WHAT PEOPLE ARE SAYING
            </h2>
            <p className="text-gray-600 font-lato font-bold text-sm sm:text-base">
              Hear directly from some of our happy clients who got exactly what
              they imagined!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12].map((src, idx) => (
              <div
                key={idx}
                className="bg-white border shadow-sm rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setZoomImage(src)}
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={src}
                    alt={`testimonial-${idx + 1}`}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-white mt-24 shadow-sm border-t">
          <div className="max-w-screen-xl mx-auto px-4 py-6 text-center">
            <p className="text-sm text-center font-medium text-gray-700  mb-2">
              “Imagination is what allows your mind to discover.”
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Nahian Fariha | Dot Pictures Studio | All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
