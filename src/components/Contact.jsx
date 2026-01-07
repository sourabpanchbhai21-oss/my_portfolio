import { FaPhone, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <header className="flex justify-center items-center max-w-7xl mx-auto px-4 py-4">
      {/* Social Icons */}
      <div id="contact" className="flex space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="tel:+1234567890"   // replace with your phone number
          className="text-green-500 hover:text-green-700 transition text-2xl"
        >
          <FaPhone />
        </a>
      </div>
    </header>
  );
};

export default Contact;
