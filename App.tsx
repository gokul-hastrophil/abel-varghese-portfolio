
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { COLORS, PROJECTS, PUBLICATIONS, EDUCATION, EXPERIENCE, BOOKS } from './constants';

const App: React.FC = () => {
  return (
    <div id="top" className="min-h-screen bg-white selection:bg-green-100 font-sans">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Intro Section - Full Height feel */}
      <section id="about" className="min-h-[60vh] flex items-center justify-center py-24 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-700 text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light font-montserrat tracking-tight">
            <span className="font-bold text-green-900 block mb-6 text-4xl md:text-5xl">Abel Thekkeparampil Varghese</span>
            is a Ph.D. Scholar at <span className="font-semibold text-green-800 border-b-2 border-green-200">KFUPM</span> and a former Project Associate at <span className="font-semibold text-green-800 border-b-2 border-green-200">IISc Bengaluru</span>.
            <br className="hidden md:block" />
            <span className="block mt-8 text-xl md:text-2xl text-gray-500">He is dedicated to bridging chemical engineering with sustainability through innovative resource recovery and industrial safety.</span>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="research" className="min-h-screen py-24 md:py-32 bg-white flex flex-col justify-center">
        <div className="max-w-[90rem] mx-auto px-6 w-full">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-green-800 font-bold mb-4 uppercase tracking-[0.3em] text-sm md:text-base">Impactful Research & Development</h2>
            <h3 className="text-5xl md:text-7xl font-black font-montserrat uppercase tracking-tighter" style={{ color: COLORS.primary }}>Pioneering Solutions</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {PROJECTS.map(project => (
              <div key={project.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-gray-100">
                <div className="h-80 md:h-96 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder while loading */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <span className="text-white font-bold text-lg tracking-widest uppercase border-l-4 border-green-500 pl-4">Discover Research</span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex-grow flex flex-col">
                  <span className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">{project.duration}</span>
                  <h4 className="text-3xl md:text-5xl font-bold mb-6 font-montserrat group-hover:text-green-800 transition-colors leading-tight" style={{ color: COLORS.primary }}>{project.title}</h4>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex gap-4 text-gray-600 text-lg md:text-xl leading-relaxed">
                        <span className="text-green-500 font-bold text-2xl mt-1">•</span> {point}
                      </li>
                    ))}
                  </ul>

                  {project.tags && (
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-5 py-2.5 bg-green-50/50 text-green-900 text-sm font-bold uppercase tracking-wider rounded-lg border border-green-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="min-h-[80vh] py-24 md:py-32 bg-gray-50 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-20 border-b-2 border-gray-200 pb-8">
            <div className="mb-6 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-green-800 font-bold mb-2 uppercase tracking-[0.3em] text-sm md:text-base">Scholarly Work</h2>
              <h3 className="text-5xl md:text-6xl font-black font-montserrat text-gray-900" style={{ color: COLORS.primary }}>Academic Publications</h3>
            </div>
            <a
              href="https://scholar.google.com/citations?user=jti5DFUAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004d40] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 transform hover:-translate-y-1"
            >
              Google Scholar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <div className="space-y-6">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="group p-8 md:p-10 bg-white rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-100 transform hover:-translate-x-2">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                  <div className="flex-grow">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors leading-snug font-montserrat">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed italic border-l-4 border-green-200 pl-4">{pub.authors}</p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-base text-gray-500 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-2"><span className="text-green-600 text-xl">📅</span> {pub.year}</span>
                      <span className="flex items-center gap-2"><span className="text-green-600 text-xl">🔬</span> {pub.journal}</span>
                    </div>
                  </div>
                  {pub.link !== "#" && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-4 md:mt-0 text-gray-400 group-hover:text-green-600 transition-colors">
                      <svg className="w-8 h-8 md:w-10 md:h-10 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen py-24 md:py-32 bg-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-green-800 font-bold mb-2 uppercase tracking-[0.3em] text-sm md:text-base">Academic Foundations</h2>
            <h3 className="text-5xl md:text-7xl font-black font-montserrat text-gray-900" style={{ color: COLORS.primary }}>Education</h3>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl p-4 overflow-hidden shadow-lg flex-shrink-0 bg-white border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="max-w-full max-h-full object-contain transition-all duration-500"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col mb-3">
                    <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-900 leading-tight mb-2">{edu.institution}</h4>
                    <p className="text-green-700 font-medium text-lg md:text-xl">{edu.degree}</p>
                  </div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-gray-400 font-bold text-sm uppercase tracking-wider">{edu.duration}</span>
                    {edu.grade && <span className="text-sm font-bold bg-green-100 text-green-800 px-3 py-1.5 rounded">{edu.grade}</span>}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {edu.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-white border border-gray-200 rounded text-gray-500 group-hover:border-green-200 group-hover:text-green-700 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-24 md:py-32 bg-gray-50 flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-green-800 font-bold mb-2 uppercase tracking-[0.3em] text-sm md:text-base">Professional Journey</h2>
            <h3 className="text-5xl md:text-7xl font-black font-montserrat text-gray-900" style={{ color: COLORS.primary }}>Experience</h3>
          </div>
          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0 md:pl-0 space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative md:flex gap-12 group">
                {/* Timeline dot for desktop - Left aligned */}
                <div className="hidden md:block absolute left-0 top-0 w-4 h-4 bg-green-200 rounded-full border-4 border-white transform -translate-x-1/2 z-10 group-hover:bg-green-500 transition-colors"></div>

                {/* Content - Left Aligned */}
                <div className="md:w-full md:pl-8 border-l-2 border-gray-200 md:border-green-100 pb-12 md:pb-0 pl-8 ml-2 md:ml-0">
                  <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
                    <div>
                      <h4 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-2">{exp.role}</h4>
                      <p className="text-green-700 font-bold uppercase tracking-widest text-sm md:text-base">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-left md:text-right whitespace-nowrap">
                      <p className="text-gray-500 font-bold text-base uppercase tracking-wider">{exp.duration}</p>
                      <p className="text-gray-400 text-sm italic">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xl leading-relaxed mb-6 max-w-4xl">{exp.description}</p>

                  <div className="flex flex-wrap gap-3 justify-start">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-gray-200/50 text-gray-600 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-green-800 font-bold mb-2 uppercase tracking-[0.3em] text-sm md:text-base">Literary Contributions</h2>
            <h3 className="text-5xl md:text-7xl font-black font-montserrat text-gray-900" style={{ color: COLORS.primary }}>Books</h3>
          </div>
          <div className="grid md:grid-cols-1 gap-12">
            {BOOKS.map((book, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-16 items-center bg-gray-50 rounded-[3rem] p-12 lg:p-20 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="w-64 md:w-80 lg:w-96 flex-shrink-0 shadow-2xl rounded-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10">
                  <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-grow z-10 text-center lg:text-left">
                  <h4 className="text-4xl md:text-6xl font-black mb-4 font-montserrat leading-tight" style={{ color: COLORS.primary }}>{book.title}</h4>
                  <p className="text-green-700 font-bold mb-8 uppercase tracking-widest text-sm">By {book.author}</p>
                  <p className="text-gray-600 mb-10 text-xl md:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                    {book.description}
                  </p>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#004d40] text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-green-800 transition-all shadow-xl hover:scale-105"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-32 bg-[#004d40] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 font-montserrat text-white tracking-tight">Collaboration & Inquiries</h2>
          <p className="text-green-100 leading-relaxed max-w-3xl mx-auto mb-16 text-xl md:text-2xl font-light">
            I invite you to reach out for research collaborations, industrial project inquiries,
            or professional networking in Chemical Engineering and Sustainability.
          </p>
          <a
            href="mailto:abeltvarghese14@gmail.com"
            className="inline-block bg-white text-[#004d40] px-16 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-green-50 transition-all text-sm shadow-2xl hover:scale-105"
          >
            Send a Message
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
