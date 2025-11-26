
import React from "react";
import Service from "../assets/Service1.png";
import Rectangle1 from "../assets/Rectangle1 (1).png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle2w2 from "../assets/Rectangle2w2.png";
import Rectangle3w3 from "../assets/Rectangle3w3.png";

import Rectangle4w4 from "../assets/Rectangle4w4.png";


const cards = [
  {
    id: 1,
    title: "Speaking Practice",
    desc: "Live mock speaking with expert feedback. Improve your skills with real-time guidance.",
    price: 380,
    oldPrice: 500,
    students: 40,
    image: Rectangle1,
  },
  {
    id: 2,
    title: "Mock Tests & Analytics",
    desc: "Product Management Masterclass with detailed analytics and performance review.",
    price: 678,
    oldPrice: 500,
    students: 11,
    image: Rectangle2w2,
  },
  {
    id: 3,
    title: "AI Band Predictor",
    desc: "Predict your IELTS band using AI-based scoring with personalized feedback.",
    price: 123,
    oldPrice: 500,
    students: 234,
    image: Rectangle3w3,
  },
  {
    id: 4,
    title: "Personalized Study Plan",
    desc: "Get a study plan tailored to your goals and track progress effectively.",
    price: 567,
    oldPrice: 500,
    students: 342,
    image: Rectangle4w4,
  },
];

const Services = () => {
  return (
    <div className="bg-[#fafafa] py-12 px-6 sm:px-10 md:px-16 lg:px-20">
      {/* Heading Image */}
      <div className="flex justify-center mb-12">
        <img
          src={Service}
          alt="Services heading"
          className="w-[250px] sm:w-[300px] md:w-[360px] lg:w-[400px] object-contain"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
          >
            {/* Card Top Image */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[180px] object-cover rounded-t-2xl"
              />
              {/* Avatars + Students */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 
                              bg-white rounded-xl px-3 py-2 flex items-center gap-1 shadow">
                <div className="flex">
                  <img
                    src={Rectangle2}
                    alt="avatar"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-1"
                  />
                  <img
                    src={Rectangle3}
                    alt="avatar"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-1"
                  />
                  <img
                    src={Rectangle4}
                    alt="avatar"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-1"
                  />
                  <img
                    src={Rectangle5}
                    alt="avatar"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-1"
                  />
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-semibold">
                  + {card.students} students
                </p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 pt-10 text-center flex flex-col justify-between h-[250px]">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-emerald-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-orange-500 font-bold text-lg">
                  ${card.price}
                  <span className="text-gray-400 line-through text-sm ml-2">
                    ${card.oldPrice}
                  </span>
                </p>
                <button className="w-full mt-3 bg-emerald-700 hover:bg-emerald-800 text-white py-2 rounded-lg transition">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


