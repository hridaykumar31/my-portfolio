import React from 'react';
import hridayImg from "../assets/images/hriday.png"; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Left Section - Picture */}
          <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden bg-gray-300">
            {/* Correct usage of the imported image */}
            <img
              src={hridayImg} // Use the imported image here
              alt="Hriday Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Bio */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-lg text-gray-700 mb-4">
              Hello! I'm <strong>Hriday Kumar</strong>, a passionate full-stack developer and AI enthusiast.
              I have experience working with a wide range of technologies, including web development, deep learning, and machine learning.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I have successfully solved over 1020 problems on Codeforces and 40+ on LeetCode. My skill set includes technologies such as
              Java, Python, C++, SQL, Laravel, React, and many more.
            </p>
            <p className="text-lg text-gray-700">
              I'm always looking for new challenges and opportunities to expand my knowledge and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
