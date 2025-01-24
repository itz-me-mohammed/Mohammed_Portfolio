import React from 'react';

const Skills = () => {
  const skillsList = [
    {
      name: 'React',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg'
    },
    {
      name: 'Node.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Express',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'
    },
    {
      name: 'Python',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'TensorFlow',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg'
    },
    {
      name: 'PyTorch',
      icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg'
    },
    {
      name: 'Scikit-learn',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
    },
    {
      name: 'OpenCV',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg'
    },
    {
      name: 'Raspberry Pi',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/raspberrypi/raspberrypi-original.svg'
    },
    {
      name: 'Arduino',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg'
    },
    {
      name: 'Linux',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg'
    },
    {
      name: 'Git',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
    },
    {
      name: 'Docker',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
    },
    {
      name: 'Firebase',
      icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
    }
  ];

  // Split the skills into two rows
  const midpoint = Math.ceil(skillsList.length / 2);
  const firstRow = skillsList.slice(0, midpoint);
  const secondRow = skillsList.slice(midpoint);

  return (
    <section id="skills" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="space-y-8">
          {[firstRow, secondRow].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="overflow-x-auto scrollbar-hide"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
              }}
            >
              <div className="flex gap-8 py-4 px-8 min-w-max">
                {row.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 mb-3 p-2 bg-gray-50 rounded-xl shadow-sm 
                                  transform transition-all duration-300 
                                  group-hover:scale-110 group-hover:shadow-md">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-600 text-center whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;