import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg opacity-50 blur-lg 
                           group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/06/94/90/06949061eea75ed2b3bd5322250ad87e.jpg"
                alt="Developer"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover object-center transform 
                         transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi! I'm Mohammed, a passionate Computer Science and Engineering student specializing in Artificial Intelligence 
              and Machine Learning. I bring ideas to life through code and innovation.
            </p>
            
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-900">Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>First place in Appizap hackathon 1.0</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Second place in IEEE GRSS Hackathon</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span>Full-stack Development Intern at TIE Hotels and Resorts</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, working on side projects, 
              or going out on photography adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;