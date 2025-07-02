# DeviMarket Zero Frontend

Frontend-ul pentru aplicația "DeviMarket Zero" - o platformă de marketplace descentralizat, bazată pe blockchain.

## Caracteristici

- Interfață modernă și reactivă folosind React, Tailwind CSS, și TypeScript
- Conectare la portofel MetaMask
- Listare produse și detalii
- Scanare produse pentru verificarea autenticității
- Centralizare a datelor și stării aplicației prin React Context
- Optimizări de performanță și accessibilitate

## Tehnologii Utilizate

- React 19
- TypeScript
- Tailwind CSS
- React Router 7
- Axios pentru comunicarea cu API-ul
- Vitest & React Testing Library pentru testare

## Structura Proiectului

```
src/
  ├── assets/        # Resurse statice (imagini, fonturi)
  ├── components/    # Componente reutilizabile UI
  ├── contexts/      # Context providers React
  ├── hooks/         # Hook-uri personalizate
  ├── pages/         # Componentele pentru rutele principale
  ├── services/      # Comunicare cu API și servicii externe
  ├── test/          # Configurare și utilitare pentru testare
  ├── types/         # Definiții de tipuri TypeScript
  └── utils/         # Utilitare și funcții helper
```

## Funcționalități Importante

### Web3Context

Gestionează starea conexiunii portofelului MetaMask, oferind un API uniform pentru toate componentele aplicației.

### Utilitare de Performanță

Instrumente pentru monitorizarea și optimizarea performanței:
- Măsurarea timpului de randare a componentelor
- Urmărirea re-randărilor și a dependențelor care le-au declanșat
- Măsurarea timpului de execuție a funcțiilor

### Componente Accesibile

Toate componentele sunt create respectând standardele de accesibilitate, cu un accent deosebit pe:
- Semantica HTML corectă
- Atribute ARIA corespunzătoare
- Navigare prin tastatură
- Contrast de culoare adecvat

## Instalare și Rulare

```bash
# Instalare dependențe
npm install

# Rulare în modul dezvoltare
npm run dev

# Rulare teste
npm test

# Construire pentru producție
npm run build
```

## Documentație

Pentru mai multe detalii, consultați documentația din directorul `documentation/`:

- [Reguli de Codare](./devi-market-zero/documentation/rules.md)
- [Changelog și Raport de Conformitate](./documentation/CHANGELOG_AND_COMPLIANCE_REPORT.md)
- [Optimizări de Performanță](./documentation/PERFORMANCE_OPTIMIZATIONS.md)
- [Ghid de Accesibilitate](./documentation/ACCESSIBILITY.md)

## Licență

Proprietar

## Contribuții

Vă rugăm să citiți [Regulile de Codare](./devi-market-zero/documentation/rules.md) înainte de a contribui la acest proiect.
