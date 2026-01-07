const SkillsSection = () => {
  const skills = [
    "Python",
    "C#NET and C" ,
    "Object-Oriented Programming (OOP)",
    "HTML, CSS",
    "Prompt Engineering for (LLMs)",
    "AI, GenAI",
    "Python Libraries: Numpy, Pandas",
    "SQL",
    "Database Design Fundamentals",
    
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h3 id="Skill" className="text-3xl font-semibold mb-6 text-gray-800">Skills</h3>
      <div className="grid grid-cols-3 gap-6 text-gray-700 text-lg">
        {skills.map((skill, index) => (
          <div key={index} className="pl-2">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

