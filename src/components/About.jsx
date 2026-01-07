
import React from "react";
import Engg from "../assets/image.png"

const About = () => {
  return (
    <div id="About" className="max-w-7xl mx-auto px-6 pt-16 space-y-20">
        <h1 className="text-5xl font-bold text-center mb-5 mt-5" >About</h1>
      
      <div className="grid md:grid-cols-2 gap-10 mr-10 items-center">
        
        <div className="flex justify-center">
          <img 
            src= {Engg}
            alt="About Us" 
            className="rounded-lg  w-full max-w-md" 
          />
        </div>

        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Hello! I'm Sourabh
          </h2>
          <p className="text-bg-success text-lg leading-relaxed">
            Innovative Software Engineer with expertise in Python and C#/.NET development. Skilled in writing clean, efficient code and eager to learn new technologies. with a passion for building reliable and scalable software solutions. Quick learner with strong analytical and communication skills and a collaborative mindset to contribute effectively to team-based projects.
Achieve organizational objectives through improved compliance and resource allocation. Committed to.
utilizing resources and skills for significant impact.
              </p>
        </div>

        {/* Image */}
        
      </div>

    </div>
  );
};

export default About;
