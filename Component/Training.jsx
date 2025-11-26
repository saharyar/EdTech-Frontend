import React from "react";
import Training1 from "../assets/Training1.png";
import Training2 from "../assets/Training2.png";

const Training = () => {
  return (
    <div className="flex flex-col gap-12 px-6 md:px-12 lg:px-20 py-12 bg-gray-50">
      {/* ===== Staff Training Section ===== */}
      <section className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={Training1}
            alt="Training illustration"
            className="rounded-xl w-full max-w-sm object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">
            Staff Training
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">•</span>
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">•</span>
              TAs and presenters can be moved to the front of the class.
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 font-bold">•</span>
              Teachers can easily see all students and class data at one time.
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Promotional Banner (Gift Card Section) ===== */}
      <section className="bg-red-600 text-white rounded-2xl shadow-md p-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Content (Left side on desktop) */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">
            Why You Should Buy Gift Cards?
          </h2>
          <ul className="space-y-3 text-white/90">
            <li className="flex gap-2 justify-center md:justify-start">
              <span className="text-yellow-300 font-bold">•</span>
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </li>
            <li className="flex gap-2 justify-center md:justify-start">
              <span className="text-yellow-300 font-bold">•</span>
              Teachers can reward and recognize students instantly.
            </li>
            <li className="flex gap-2 justify-center md:justify-start">
              <span className="text-yellow-300 font-bold">•</span>
              Gift cards motivate students and enhance engagement.
            </li>
          </ul>

          <button className="mt-6 bg-yellow-400 text-black font-semibold px-8 py-2.5 rounded-full hover:bg-yellow-300 transition duration-300">
            BUY NOW
          </button>
        </div>

        {/* Image (Right side on desktop) */}
        <div className="flex justify-center md:w-1/3">
          <img
            src={Training2}
            alt="Gift card illustration"
            className=" w-full h-full sm:w-full sm:h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Training;
