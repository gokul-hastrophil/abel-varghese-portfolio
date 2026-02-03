
import React from 'react';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer 
      className="text-white pt-16 pb-8"
      style={{ backgroundColor: COLORS.footerBg }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-widest font-montserrat mb-6">
              ABEL <br /> VARGHESE
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Researching innovative solutions for metal recovery and sustainable industrial processes. 
              Bridging the gap between chemical engineering and environmental preservation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 font-montserrat">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <p>Pathanapuram, Kollam, Kerala, India – 689695</p>
              <p>abeltvarghese14@gmail.com</p>
              <p>+91 6282150815</p>
              <div className="flex flex-wrap gap-6 mt-6">
                <a href="https://www.linkedin.com/in/abel-t-varghese-b53090203/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>LinkedIn</span>
                </a>
                <a href="https://scholar.google.com/citations?user=jti5DFUAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Scholar</span>
                </a>
                <a href="https://www.researchgate.net/profile/Abel-Varghese-2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>ResearchGate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} Abel Varghese Portfolio</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <a 
               href="https://www.linkedin.com/in/gokul-hastrophil/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
             >
               Designed & Developed by @gokul
             </a>
             <a href="#top" className="bg-green-700 p-2 rounded hover:bg-green-600 transition-colors shadow-lg">
               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
               </svg>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
