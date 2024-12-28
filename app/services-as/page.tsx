"use client"; // Client-side rendering directive

import Image from "next/image";
import Link from "next/link";
import Header from "../header/page";
import CommentSystem from "../comment/page";
import Footer from "../footer/page";
import React, { useState } from "react";

export default function Responsive() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const foodItems = [
    {
      href: "/beef-burger",
      imgSrc: "/images/Beef.jpg",
      alt: "Beef burger",
      title: "Beef Burger",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
    {
      href: "/chicken-burger",
      imgSrc: "/images/chicken.jpg",
      alt: "Chicken Burger",
      title: "Chicken Burger",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
    {
      href: "/club-sandwich",
      imgSrc: "/images/Club.jpg",
      alt: "Club Sandwich",
      title: "Club Sandwich",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
    {
      href: "/broast",
      imgSrc: "/images/broast.jpg",
      alt: "Chicken Broast",
      title: "Chicken Broast",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
    {
      href: "/zinger",
      imgSrc: "/images/zinger.jpg",
      alt: "Chicken Zinger",
      title: "Chicken Zinger",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
    {
      href: "/chow-mein",
      imgSrc: "/images/Show mein.jpg",
      alt: "Chicken Chow Mein",
      title: "Chicken Chow Mein",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
    {
      href: "/wings",
      imgSrc: "/images/Wingss.jpg",
      alt: "Chicken Wings",
      title: "Chicken Wings",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
    {
      href: "/nuggets",
      imgSrc: "/images/nuggets.jpg",
      alt: "Chicken Nuggets",
      title: "Chicken Nuggets",
      description: "Juicy, big, loaded with toppings of my choice.",
    },
  ];

  const handleOrderClick = (itemTitle: string) => {
    setPopupMessage(`Your ${itemTitle} order is done!`);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div>
      <Header />
      <h1 className="text-center font-sans font-bold text-2xl mt-[7%] text-black py-5">
        Shoby's Fast Food
      </h1>
      <div className="flex flex-wrap justify-center">
        {foodItems.map((item) => (
          <div
            key={item.title}
            className="w-64 h-80 bg-black text-white rounded-lg p-4 m-4 border-4 border-gray-200 animate-scaleIn hover:shadow-lg"
          >
            <Link href={item.href}>
              <Image
                src={item.imgSrc}
                alt={item.alt}
                width={230}
                height={230}
                className="w-full h-36 bg-gray-500 rounded-lg"
              />
              <h1 className="text-lg font-bold mt-2">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
            </Link>
            <button
              className="mt-3 w-1/2 bg-gray-700 text-white text-sm rounded-lg py-1 hover:bg-white hover:text-black"
              onClick={() => handleOrderClick(item.title)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed h-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-700 rounded-lg shadow-lg p-4 text-center">
          <p className="text-black font-medium">{popupMessage}</p>
          <button
            className="mt-2 px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
      )}

      <CommentSystem />
      <Footer />
    </div>
  );
}
