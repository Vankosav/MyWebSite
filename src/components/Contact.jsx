import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa"; 

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 pb-20 pt-2 bg-black text-center text-white font-poppins">
      <h2 className="text-3xl uppercase font-bold mb-8">Contact</h2>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-4">
          I am available via the following channels:
        </p>

        <div className="flex justify-center gap-8">
          {/* LinkedIn */}
          <div className="flex items-center text-xl hover:underline">
            <FaLinkedin className="mr-2" /> 
            <a
              href="https://www.linkedin.com/in/ivana-nedeljkov/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center text-xl hover:underline">
            <FaWhatsapp className="mr-2" /> 
            <a
              href="https://wa.me/+4915750684606"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center text-xl hover:underline">
            <FaGithub className="mr-2" /> 
            <a
              href="https://github.com/Vankosav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;