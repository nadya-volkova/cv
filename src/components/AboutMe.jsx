import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#373741] text-center mb-8">
          ABOUT ME
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#e4e4e4] p-6 rounded-lg shadow-lg border border-[#373741]">
            <h3 className="text-2xl font-bold text-[#373741] mb-4">
              Education
            </h3>
            <p className="text-lg text-gray-700">
              Student at{" "}
              <a
                href="https://bsu.by/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Belarusian State University (BSU)
              </a>
              , Faculty of{" "}
              <a
                href="https://mmf.bsu.by/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Mechanics and Mathematics
              </a>
              .
            </p>
          </div>

          <div className="bg-[#e4e4e4] p-6 rounded-lg shadow-lg border border-[#373741]">
            <h3 className="text-2xl font-bold text-[#373741] mb-4">
              Work Experience
            </h3>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Freelance Developer– Self-Employed</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Engaged in freelance web development projects, working with
              clients to create responsive and user-friendly web applications.
              Gained experience in project management, client communication, and
              delivering high-quality results.
            </p>
          </div>

          <div className="bg-[#e4e4e4] p-6 rounded-lg shadow-lg border border-[#373741]">
            <h3 className="text-2xl font-bold text-[#373741] mb-4">
              Languages
            </h3>
            <ul className="text-lg text-gray-700 list-none">
              <li className="flex items-center">
                <img
                  src="././images/icons/ru.png"
                  alt="Russia Flag"
                  className="w-4 h-4 mr-2 mt-1"
                />
                Russian – Native
              </li>
              <li className="flex items-center">
                <img
                  src="././images/icons/en.png"
                  alt="UK Flag"
                  className="w-4 h-4 mr-2 mt-1"
                />
                English – B2 (Upper-Intermediate)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
