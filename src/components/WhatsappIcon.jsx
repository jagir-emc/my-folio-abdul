import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-28 right-4 z-10 animate-bounce">
      <button
        className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-hover focus:outline-none transition duration-300"
        aria-label="Back to Top"
      >
        <Link href="https://wa.me/message/QI6MZW6UZMNPA1" target="_blank">
          <FaWhatsapp className="text-xl" />
        </Link>
      </button>
    </div>
  );
};

export default WhatsappIcon;
