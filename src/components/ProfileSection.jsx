import React from "react";
import myphoto from '../assets/myphoto.jpg';

// myphoto

const ProfileSection = () => {
  return (
    <div id="Profile" className="max-w-7xl mx-auto px-6 pt-16 space-y-20">


      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Information */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Hi, I'm Saurabh
          </h2>
          <p className="text-2xl text-gray-600 font-semibold leading-relaxed">
            Innovative <span className="text-blue-500">Software Engineer</span> with expertise in <br />
            <span className="text-blue-600">Python and C#/.NET development</span>.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Contact Me
          </button>
        </div>

        {/* Right Side - Photo */}
        <div className="flex justify-center md:justify-end">
          <img
            src={myphoto}
            alt="Profile"
            className="rounded-full shadow-lg w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
