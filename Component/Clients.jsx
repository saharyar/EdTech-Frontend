// src/components/Client.jsx
import React from 'react';
import Client1 from '../assets/Client1.png';
import Client2 from '../assets/Client2.png';
import Client3 from '../assets/Client3.png';

const testimonials = [
  {
    name: 'James Pattinson',
    image: Client1,
    rating: 4,
    text: 'Lobortis leo pretium facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.',
  },
  {
    name: 'Greg Stuart',
    image: Client2,
    rating: 5,
    text: 'Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultrices integer nunc neque accumsan laoreet. Viverra nibh ultrices.',
  },
  {
    name: 'Trevor Mitchell',
    image: Client3,
    rating: 4,
    text: 'Ut tristique verus sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec. Id sed. Tristique.',
  },
];

// ⭐ Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="text-yellow-400 text-lg">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

const Client = () => {
  return (
    <div className="bg-gray-50 py-2 px-2 md:px-12 lg:px-20">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
        What Our Clients Say About Us
      </h1>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Client Image */}
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-4 border-gray-100"
            />

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {client.name}
            </h3>

            {/* Star Rating */}
            <StarRating rating={client.rating} />

            {/* Review Text */}
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
              {client.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
