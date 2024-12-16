import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "2023 Programming Blog System",
      description: "Developed a programming blogging system using Laravel, React, and SQL, allowing users to create, manage, and share posts.",
      techStack: ["Laravel", "React", "SQL"],
      year: 2023,
      link: "#"
    },
    {
      title: "2023 Air Writing OCR",
      description: "Developed an OCR system for air writing using deep learning techniques to recognize and process hand gestures.",
      techStack: ["Deep Learning", "TensorFlow", "OpenCV"],
      year: 2023,
      link: "#"
    },
    {
      title: "2021 Java Networking Project",
      description: "Created a network-based gaming project in Java, allowing users to play multiplayer games over a network.",
      techStack: ["Java", "Networking", "Multiplayer"],
      year: 2021,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.title} ({project.year})</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="font-bold text-gray-700 mb-4">Tech Stack:</p>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="bg-yellow-300 text-gray-800 py-1 px-3 rounded-full text-sm">{tech}</li>
                ))}
              </ul>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
