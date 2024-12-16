import React from 'react';

const Skills = () => {
  const skills = [
    'Java',
    'Python',
    'C++',
    'Web Development',
    'Deep Learning',
    'Machine Learning',
    'Algorithms',
    'SQL',
    'Laravel'
  ];

  return (
    <section id="skills" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h2>

        {/* Skill List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-semibold text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
