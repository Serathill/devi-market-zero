import React from 'react';

/**
 * Renders the About Us page.
 *
 * This page describes the DeviMarket Zero marketplace, its mission and features.
 *
 * @returns {React.ReactElement} The About Us page component.
 */
const AboutPage: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
        Despre DeviMarket Zero
      </h1>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Hero Image */}
        <div className="h-64 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white text-center px-4">
            Magazinul online al viitorului
          </h2>
        </div>
        
        {/* Content */}
        <div className="p-8 space-y-6 text-lg text-gray-700">
          <p>
            <strong>DeviMarket Zero</strong> este un marketplace online inovator, 
            construit cu tehnologii de ultimă generație pentru a oferi o experiență 
            de cumpărături plăcută, sigură și intuitivă. Misiunea noastră este să 
            conectăm comercianți de calitate cu clienți care caută produse autentice 
            la prețuri competitive.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                Misiunea Noastră
              </h3>
              <p className="text-gray-600">
                Credem în simplificarea experienței de cumpărare online, oferind 
                transparența completă, produse verificate și un proces de achiziție 
                fără complicații. Ne angajăm să dezvoltăm o platformă care prioritizează 
                nevoile clienților și susține afacerile locale.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                Viziunea Noastră
              </h3>
              <p className="text-gray-600">
                Aspirăm să devenim platforma preferată de cumpărături online în România, 
                recunoscută pentru excelența serviciilor, diversitatea produselor și 
                integrarea tehnologiilor avansate care facilitează o experiență de 
                cumpărături personalizată.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-indigo-700 pt-6">
            De Ce Să Alegi DeviMarket Zero
          </h2>
          
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Produse Verificate</strong>: Toate produsele de pe platforma noastră sunt verificate pentru autenticitate și calitate.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Plăți Sigure</strong>: Sistem de plată securizat, inclusiv suport pentru wallet-uri blockchain.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Livrare Rapidă</strong>: Parteneriate cu servicii de curierat premium pentru livrări rapide și sigure.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Suport 24/7</strong>: Echipa noastră de asistență clienți este disponibilă oricând pentru a răspunde întrebărilor dumneavoastră.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Scanare Produse</strong>: Verificați autenticitatea produselor prin scanarea codurilor de bare direct din aplicație.</span>
            </li>
          </ul>
          
          <div className="bg-pink-50 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold text-pink-700 mb-3">
              Tehnologie Blockchain
            </h3>
            <p className="text-gray-600">
              DeviMarket Zero integrează tehnologia blockchain pentru a asigura 
              transparența tranzacțiilor, verificarea produselor și protejarea 
              datelor clienților noștri. Prin conectarea portofelului tău MetaMask, 
              poți beneficia de un proces de plată rapid și sigur, fără intermediari.
            </p>
          </div>
          
          <div className="text-center pt-6">
            <h3 className="text-xl font-bold text-indigo-700 mb-3">
              Alătură-te Comunității DeviMarket Zero
            </h3>
            <p>
              Indiferent dacă ești client sau comerciant, te invităm să faci parte din 
              comunitatea noastră în creștere și să descoperi viitorul comerțului electronic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 