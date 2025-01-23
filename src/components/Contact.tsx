import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="p-8 bg-white rounded-2xl shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-6">
                <a
                  href="mailto:mohammedabdulmajeed2004@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-pink-50 
                           hover:from-indigo-100 hover:to-pink-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base truncate">
                    mohammedabdulmajeed2004@gmail.com
                  </span>
                </a>
                
                <a
                  href="https://github.com/itz-me-mohammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-pink-50 
                           hover:from-indigo-100 hover:to-pink-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <Github className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">GitHub Profile</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/mohammed-abdul-majeed-702b1326a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-pink-50 
                           hover:from-indigo-100 hover:to-pink-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <Linkedin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl opacity-50 blur-lg 
                           group-hover:opacity-75 transition-all duration-500"></div>
            <form className="relative bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 
                           focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 
                           focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 
                           focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg 
                         flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-violet-700 
                         transform transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;