import React from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../data';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden animated-bg">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center">
          <div className="mb-8 floating">
            <div className="inline-block p-2 bg-white/10 backdrop-blur-lg rounded-full mb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGEAcdeA7bkKg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703753432060?e=2147483647&v=beta&t=JTARlwIHBKfKox60-TUP5nlqMB2OCxQEZc0-UIaZI7U"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {siteConfig.name}
            </span>
          </h1>
          
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            {siteConfig.title}
          </p>
          
          <div className="flex gap-6 justify-center mb-16">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold 
                       hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 
                       shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full font-semibold 
                       hover:bg-white/20 transition-all duration-300 transform hover:scale-105 
                       border border-white/20"
            >
              View My Work
            </a>
          </div>
          
          <a href="#about" className="animate-bounce inline-block p-2 bg-white/10 backdrop-blur-lg rounded-full">
            <ChevronDown size={32} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;