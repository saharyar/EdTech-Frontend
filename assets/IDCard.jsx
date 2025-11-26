import React from "react";

// ✅ import your local images (replace paths with your actual files)
import IDCard1 from "../assets/ID Card1.png"; // main card image
import iconsD1 from "../assets/iconsD1.png";
import iconsD2 from "../assets/iconsD2.png";
import iconsD3 from "../assets/iconsD3.png";
import FontID1 from "../assets/FontID1.png";
import backID2 from "../assets/backID2.png"

const benefits = [
  {
    id: 1,
    icon: iconsD1,
    text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
  },
  {
    id: 2,
    icon: iconsD2,
    text: "TA’s and presenters can be moved to the front of the class.",
  },
  {
    id: 3,
    icon: iconsD3,
    text: "Teachers can easily see all students and class data at one time.",
  },
];

const IDCard = () => {
  return (
    <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="flex justify-center">
          <img
            src={IDCard1}
            alt="Student ID card"
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] object-contain drop-shadow-md"
          />
        </div>
        
      </div>

      {/* Content layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left section: Text and Benefits */}
        <div>
          <button className="bg-gray-100 text-emerald-900 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Benefits
          </button>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
            Get Student ID card
          </h3>

          <ul className="space-y-5">
            {benefits.map((item) => (
              <li key={item.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white shadow-md rounded-full p-2">
                  <img
                    src={item.icon}
                    alt="benefit-icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section: ID Card Image */}
          {/* Right Section - ID Card Preview */}
        <div className="flex justify-center">
          <div
            className="bg-[#f1f9fa] border border-dashed border-[#cce4e7] 
            rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 
            shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={FontID1}
              alt="ID Card Front"
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] rounded-xl object-contain"
            />
            <img
              src={backID2}
              alt="ID Card Back"
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] rounded-xl object-contain"
            />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default IDCard;
