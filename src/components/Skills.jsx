import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", icon: "./images/icons/react.png" },
    { name: "HTML", icon: "./images/icons/html.png" },
    { name: "CSS", icon: "./images/icons/css.png" },
    { name: "JavaScript", icon: "./images/icons/js.png" },
    { name: "Node.js", icon: "./images/icons/node.png" },
    { name: "Figma", icon: "./images/icons/figma.png" },
    { name: "SQL", icon: "./images/icons/sql.png" },
    { name: "Tailwind CSS", icon: "./images/icons/tailwind.png" },
  ];

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
