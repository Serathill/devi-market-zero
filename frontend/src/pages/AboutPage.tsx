import React from 'react';

/**
 * Renders the About Us page.
 *
 * This is a placeholder component providing basic information about the project.
 *
 * @returns {React.ReactElement} The About Us page component.
 */
const AboutPage: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
        Despre DeviMarket Zero
      </h1>
      <div className="bg-white rounded-lg shadow-xl p-8 space-y-4 text-lg text-gray-700">
        <p>
          <strong>DeviMarket Zero</strong> este un proiect demonstrativ conceput pentru a ilustra
          implementarea unui frontend modern pentru o aplicație de e-commerce. Scopul său
          principal este de a servi ca un exemplu practic și un șablon de start, aderând la
          cele mai bune practici din industrie.
        </p>
        <p>
          Acest proiect a fost dezvoltat urmând un set strict de{' '}
          <a
            href="https://github.com/bogdancornian/devi-market-zero/blob/team_2/frontend/devi-market-zero/documentation/rules.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-semibold"
          >
            standarde de codare și dezvoltare asistată de AI
          </a>
          , asigurând o bază de cod curată, mentenabilă și scalabilă.
        </p>
        <h2 className="text-2xl font-bold text-indigo-700 pt-4">
          Principii Cheie
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Arhitectură Robustă:</strong> Separarea clară a responsabilităților
            (componente, servicii, hook-uri, tipuri).
          </li>
          <li>
            <strong>Calitatea Codului:</strong> Utilizarea strictă a TypeScript și respectarea
            regulilor de linting.
          </li>
          <li>
            <strong>Management Centralizat al Stării API:</strong> Gestionarea consistentă a
            stărilor de încărcare, eroare și date.
          </li>
          <li>
            <strong>Documentație:</strong> Comentarii JSDoc pentru toate componentele și
            funcțiile exportate.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage; 