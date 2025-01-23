import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  decorative?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  decorative = true 
}) => {
  return (
    <section id={id} className={`py-20 relative overflow-hidden ${className}`}>
      {decorative && (
        <>
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
        </>
      )}
      <div className="max-w-6xl mx-auto px-4 relative">
        {children}
      </div>
    </section>
  );
};

export default Section;