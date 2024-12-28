"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../header/page';

export default function Responsive() {
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const foodItems = [
    {
      id: 1,
      href: "/broast",
      imgSrc: "/images/Broast.jpg"",  // Make sure this path is correct
      alt: "Chicken Broast",
      title: "Chicken Broast",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
  ];

  const handlePopup = (message: string) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <div>
      <Header />
      <h1 className="text-center font-sans font-bold text-2xl mt-[7%] text-black bg-gray-100 py-5">
        Shoby's Fast Food
      </h1>
      <div className="flex flex-wrap justify-center bg-gray-100">
        {foodItems.map((item) => (
          <div
            key={item.id} // Assign a unique key
            className="w-64 h-80 bg-black text-white rounded-lg p-4 m-4 border-4 border-gray-200 animate-scaleIn hover:shadow-lg"
          >
            <Image
              src={item.imgSrc}
              alt={item.alt}
              width={230}
              height={230}
              layout="intrinsic"  // Added layout="intrinsic" for better responsiveness
              className="w-full h-36 bg-gray-500 rounded-lg"
            />
            <h1 className="text-lg font-bold mt-2">{item.title}</h1>
            <p className="text-sm">{item.description}</p>
            <button
              onClick={() => handlePopup(`${item.title} added to your cart!`)}
              className="mt-3 w-1/2 bg-gray-700 text-white text-sm rounded-lg py-1 hover:bg-white hover:text-black"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
      <p className="bg-gray-100 text-lg text-center p-5 rounded-lg">
        A Club Sandwich is a patty of ground beef grilled and placed between two halves of a bun.
        <br /> Burgers are considered an American food but are popular around the world.
        <br /> Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.
      </p>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <p className="text-lg font-bold">{popupMessage}</p>
            <button
              onClick={closePopup}
              className="mt-3 px-5 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
