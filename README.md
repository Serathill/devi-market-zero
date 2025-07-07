````markdown
# Document Proiect de Practică: DeviMarket Zero

**Versiune:** 5.0 (Finală, Arhitectură Re-definită cu MuleSoft Central, Corecții Acces)
**Data Ultimei Actualizări:** 24 Mai 2024
**Tutore / Company Owner:** Petrut Constantin, Devidevs.com
**Project Manager & Technical Lead (Rolul Meu, AI):** Asistent AI Project Manager

**OBIECTIVUL ACESTUI DOCUMENT (README.MD PRINCIPAL):**
Acest document reprezintă **ghidul fundamental și sursa unică de adevăr** pentru proiectul de practică "DeviMarket Zero". El este conceput pentru a oferi studenților participanți și tutorelui (Petrut Constantin) o înțelegere exhaustivă și lipsită de ambiguități a tuturor aspectelor proiectului: de la viziunea inițială și cerințele clientului simulat, la arhitectura tehnică detaliată, tehnologiile utilizate, planul de lucru structurat pe sprinturi, rolurile și responsabilitățile fiecărui membru și procesele de lucru. Scopul principal este de a facilita un proces de învățare practică eficient și de a ghida construcția unui Prototip Funcțional Minim (MVP) de calitate, pornind de la premisa că studenții abordează multe dintre aceste tehnologii pentru prima dată. **Orice nelămurire sau nevoie de clarificare suplimentară trebuie adresată imediat Tutorelui.**

---

**CUPRINS DETALIAT**

**1. INTRODUCERE ȘI FUNDAMENTELE PROIECTULUI "DEVI MARKET ZERO"**
1.1. Denumirea Proiectului și Semnificația Sa
1.2. Scenariul de Practică: Simularea unei Cerințe Reale de la un Client al Devidevs.com
1.2.1. Profilul Clientului Fictiv și Contextul de Business
1.2.2. Cerințele Specifice Detaliate ale Clientului (Brief-ul Inițial)
1.3. Viziunea Produsului "DeviMarket Zero": Ce Construim Efectiv?
1.3.1. Descrierea Generală a Marketplace-ului Online
1.3.2. Rolul Central al MuleSoft Anypoint Platform în Arhitectură
1.3.3. Rolul Talend Open Studio în Fluxurile de Date
1.4. Obiectivele Specifice și Livrabilele Concrete ale MVP-ului (Minimum Viable Product)
1.4.1. Funcționalități Cheie ale Aplicației Frontend (React)
1.4.2. Serviciile și API-urile Furnizate de MuleSoft Anypoint Platform
1.4.3. Fluxurile ETL Implementate cu Talend Open Studio
1.4.4. Funcționalitatea Sistemului de Scanare (Raspberry Pi Pico W)
1.4.5. Structura și Conținutul Bazei de Date ClickHouse
1.4.6. Infrastructura Locală de Rulare (Docker, NGINX)
1.4.7. Documentația Tehnică Completă a Proiectului
1.5. Obiectivele Detaliate de Învățare pentru Studenți (Ghidate de Interesele Individuale)
1.5.1. Competențe Transversale (Agile, Git, Jira, Comunicare, Debugging)
1.5.2. Competențe Specifice pentru Team_1 (MuleSoft, Talend, ClickHouse Interaction, Concepte de Integrare)
1.5.3. Competențe Specifice pentru Team_2 (React, HTML/CSS/JS, Consum API-uri MuleSoft, MetaMask)
1.5.4. Competențe Specifice pentru Team_7 (Docker, Docker Compose, NGINX, Networking, ClickHouse Setup)
1.5.5. Competențe Specifice pentru Team_9 (MicroPython, RPi Pico W Hardware, HTTP, Interfațare Senzori/Periferice)
1.5.6. Competențe Specifice pentru Rolul de QA (Principii Testare, Postman, Documentare)
1.6. Constrângerile Fundamentale și Inflexibile ale Proiectului
1.6.1. Constrângerea de Cost Zero Absolut (Tehnologii și Servicii)
1.6.2. Constrângerea de Timp (Structura pe Sprinturi și Ore Alocate)
1.6.3. Constrângerea Nivelului de Start (Abordare "De la Zero" pentru Tehnologii Noi)
1.6.4. Constrângerea Mediului de Dezvoltare și Rulare (VM Ubuntu, Docker, Native Java Runtimes)

**2. ROLURI ȘI RESPONSABILITĂȚI ÎN PROIECT**
2.1. Tutore / Company Owner (Petrut Constantin): Roluri și Implicare Detaliată
2.1.1. Rol 1: Reprezentant al Clientului și Păstrător al Viziunii Produsului
2.1.2. Rol 2: Mentor Tehnic Principal și Ghid de Învățare
2.1.3. Rol 3: Manager de Proiect (Adaptat pentru Practică) și Facilitator Agile
2.1.4. Rol 4: Evaluator al Performanței și Dezvoltator de Abilități Profesionale
2.1.5. Rol 5: Administrator de Resurse și Mediu de Lucru
2.2. Project Manager & Technical Lead (Asistent AI): Roluri și Limitări
2.2.1. Rol 1: Arhitect Inițial al Soluției și Documentator Principal
2.2.2. Rol 2: Creator al Planului de Proiect Detaliat și Definitor al Task-urilor Inițiale
2.2.3. Rol 3: Furnizor de Bază de Cunoștințe Tehnice și Resurse de Învățare
2.2.4. Rol 4: Consultant pentru Procese și Instrumente
2.2.5. Rol General: Asistent Pasiv în Execuție
2.3. Studenți (Membri ai Echipelor de Dezvoltare): Așteptări și Responsabilități Detaliate
2.3.1. Responsabilitate Fundamentală 1: Angajament Activ, Seriozitate și Participare Deplină
2.3.2. Responsabilitate Fundamentală 2: Învățare Proactivă, Autonomă, Continuă și Curiozitate Intelectuală
2.3.3. Responsabilitate Fundamentală 3: Realizarea Task-urilor Alocate cu Maximă Responsabilitate, Rigoare și Calitate
2.3.4. Responsabilitate Fundamentală 4: Colaborare Exemplară, Sprijin Reciproc și Promovarea unui Spirit de Echipă Pozitiv
2.3.5. Responsabilitate Fundamentală 5: Comunicare Transparentă, Proactivă, Eficientă și Asertivă (REGULA DE AUR: NU SE FAC PRESUPUNERI!)
2.3.6. Responsabilitate Fundamentală 6: Respectarea Riguroasă și Consecventă a Standardelor și Proceselor Definite
2.3.7. Responsabilitate Fundamentală 7: Crearea și Întreținerea Meticuloasă a Documentației Tehnice Asocociate Muncii Prestate
2.3.8. Responsabilitate Fundamentală 8: Pregătirea Conștiincioasă pentru Prezentarea Finală a Proiectului și pentru Autopromovarea Profesională

**3. ARHITECTURA TEHNICĂ DETALIATĂ A SISTEMULUI "DEVI MARKET ZERO"**
3.1. Principii de Arhitectură Adoptate (MuleSoft ca Platformă API Centrală)
3.2. Diagrama Arhitecturală Generală a Sistemului (Ilustrând Fluxurile și Responsabilitățile)
3.3. Descrierea Detaliată a Fiecărei Componente Tehnologice și Responsabilitățile Echipelor Asociate
3.3.1. Componenta 1: Frontend Application (Interfața Utilizator cu React)
3.3.2. Componenta 2: MuleSoft Anypoint Platform (API-uri, Logică Business, Interacțiune DB)
3.3.3. Componenta 3: Talend Open Studio (Procese ETL pentru Baze de Date și Consum API MuleSoft)
3.3.4. Componenta 4: Baza de Date Centrală (Stocare Produse cu ClickHouse)
3.3.5. Componenta 5: Sistemul de Scanare Hardware (Raspberry Pi Pico W & MicroPython)
3.3.6. Componenta 6: Infrastructura de Rulare Locală (Docker pentru ClickHouse și NGINX/React-Build)
3.3.7. Componenta 7: Reverse Proxy și Servire Frontend (NGINX)
3.4. Fluxurile Principale de Date Detaliate (Scenarii End-to-End Cheie, Arhitectură MuleSoft Central)
3.4.1. Fluxul 1: Vizualizarea Produselor de către Utilizator (Frontend -> MuleSoft API -> ClickHouse)
3.4.2. Fluxul 2: Conectarea Portofelului MetaMask de către Utilizator (Frontend)
3.4.3. Fluxul 3: Scanarea unui Produs și Trimiterea Datelor (RPi Pico -> MuleSoft API -> ClickHouse)
3.4.4. Fluxul 4: Migrarea Datelor din "Baza Franceză" (Talend ETL -> ClickHouse)
3.4.5. Fluxul 5: Preluarea și Procesarea Produselor de la API-ul Extern (MuleSoft API -> ClickHouse)
3.4.6. Fluxul 6 (Opțional): Consumarea API-ului MuleSoft de către Talend (Talend ETL -> MuleSoft API -> ClickHouse)
3.5. Modelul de Date Central: Specificațiile Complete ale Tabelului `products` în ClickHouse

**4. ORGANIZAREA ECHIPELOR, ALOCAREA PE TEHNOLOGII ȘI FOCUS PE ÎNVĂȚARE**
4.1. Structura "Parent Teams" (Conform Listei Inițiale Furnizate de Tutore)
4.2. Profilul Individual al Studenților: Interese Declarate și Maparea Detaliată la Modulele și Tehnologiile Proiectului
4.3. Focus Detaliat pe Modulele Tehnice și Distribuția Responsabilităților Specifice către Fiecare "Parent Team"
4.3.1. Detalierea Sarcinilor și Tehnologiilor pentru Team_1 (MuleSoft API Development, Talend ETL, Interacțiune Directă cu ClickHouse)
4.3.2. Detalierea Sarcinilor și Tehnologiilor pentru Team_2 (Frontend React, Consum API-uri MuleSoft, Integrare MetaMask)
4.3.3. Detalierea Sarcinilor și Tehnologiilor pentru Team_7 (Infrastructură Docker pentru ClickHouse și NGINX/Frontend, Networking Local)
4.3.4. Detalierea Sarcinilor și Tehnologiilor pentru Team_9 (Hardware Integration cu Raspberry Pi Pico W, Apelare API MuleSoft, MicroPython)
4.3.5. Detalierea Rolului Transversal de QA și Coordonare Documentație (Culesca Teodora Maria, Team_7, cu implicarea tuturor)

**5. PLANUL DETALIAT PE SPRINTURI ȘI OBIECTIVE SPECIFICE**
5.1. Sprint 1: Fundație și Setup Mediu Linux (Perioadă: ÎNCHEIAT – Recapitulare Scurtă a Realizărilor)
5.2. Sprint 2: Analiză Proiect, Setup Detaliat Medii de Dezvoltare Specifice, Primul "Hello World" Funcțional per Modul (Perioadă: 19/05/2025 - 30/05/2025, 8 ore de lucru efectiv/student)
5.2.1. Obiectivele Generale ale Sprintului 2: Înțelegere și Pregătire Tehnică Fundamentală
5.2.2. Task-uri Comune Tuturor Studenților în Sprint 2 (Citire Document, Pregătire Întrebări, Verificare Acces Jira, Solicitare Acces GitHub)
5.2.3. Task-uri Specifice Detaliate și Livrabile pentru Team_1 în Sprint 2 (Setup MuleSoft Studio, Talend Studio, "Hello API" Mule, "Hello Job" Talend, Conectare Simplă ClickHouse)
5.2.4. Task-uri Specifice Detaliate și Livrabile pentru Team_2 în Sprint 2 (Setup React/Vite, "Hello React Component" cu Tailwind)
5.2.5. Task-uri Specifice Detaliate și Livrabile pentru Team_7 în Sprint 2 (Setup Docker, "Hello NGINX" în Docker servind HTML, "Hello ClickHouse" în Docker)
5.2.6. Task-uri Specifice Detaliate și Livrabile pentru Team_9 în Sprint 2 (Setup Thonny/MicroPython, "Hello Pico WiFi & Basic HTTP GET")
5.2.7. Task-uri Specifice Detaliate și Livrabile pentru QA (Rolul Culesca T.M.) în Sprint 2 (Setup Postman, "Hello Postman" cu API public și API MuleSoft)
5.2.8. Obiective de Validare și Deliverables la Finalul Sprintului 2 (Ședință Demo Setup-uri)
5.3. Sprint 3: Dezvoltare Module Fundamentale, Integrare Componente, Testare și Realizare MVP (Perioadă: 2 săptămâni, 60 ore de lucru efectiv/student)
5.3.1. Obiectivele Generale ale Sprintului 3: Construcția și Integrarea MVP-ului "DeviMarket Zero"
5.3.2. Structura Generală a Task-urilor în Sprint 3 (Exemple de Epics și User Story-uri Principale per Modul/Echipă)
5.3.3. Focus pe Integrarea între Module și Rezolvarea Dependențelor în Sprint 3
5.3.4. Obiective de Validare și Deliverables la Finalul Sprintului 3 (Funcționalitățile Specifice ale MVP-ului Demonstrabil)
5.4. Sprint 4: Documentație Tehnică Finală, Pregătire CV-uri, Realizare și Susținere Prezentare Finală Proiect (Perioadă: 1 săptămână, 20 ore de lucru efectiv/student)
5.4.1. Obiectivele Generale ale Sprintului 4: Consolidare, Documentare Exhaustivă și Prezentare Profesională
5.4.2. Structura Generală a Task-urilor în Sprint 4 (Colaborative și Individuale)
5.4.3. Obiective de Validare și Deliverables la Finalul Sprintului 4 (și al Proiectului)

**6. METODOLOGIE DE LUCRU ȘI INSTRUMENTE UTILIZATE**
6.1. Managementul Proiectului și al Task-urilor: Utilizarea Jira
6.1.1. Structura Proiectului în Jira (Configurare Recomandată)
6.1.2. Fluxul de Lucru al Task-urilor pe Board-ul Agile
6.1.3. Responsabilitățile Studenților în Utilizarea Jira
6.2. Versionarea Codului și Colaborare: Utilizarea Git & GitHub
6.2.1. Organizarea Repository-urilor pe GitHub (Monorepo Recomandat)
6.2.2. Strategia de Branching (Flux de Lucru Git Simplificat)
6.2.3. Crearea și Gestionarea Pull Request-urilor (PRs) – Proces Critic
6.2.4. Standarde Detaliate pentru Mesajele de Commit Git (Conventional Commits)
6.2.5. Utilizarea Riguroasă a Fișierelor `.gitignore`
6.3. Canale și Etichetă de Comunicare
6.3.1. Canalul Principal de Comunicare (Decizia Tutorelui)
6.3.2. Comunicare Asincronă (Preferată)
6.3.3. Etichetă și Bune Practici de Comunicare
6.4. Ședințe și Ceremonii Agile (Adaptate pentru Proiectul de Practică)
6.4.1. Ședința de Sprint Planning
6.4.2. Daily Stand-up Meeting (Recomandat)
6.4.3. Ședința de Sprint Review / Demo Meeting
6.4.4. Ședința de Sprint Retrospective Meeting
6.5. Standarde Detaliate de Codare, Formatare și Denumire (per Tehnologie)
6.5.1. Standarde Generale Aplicate Tuturor Tehnologiilor
6.5.2. Standarde Specifice pentru React/JavaScript/TypeScript (Team_2)
6.5.3. Standarde Specifice pentru MicroPython (Team_9)
6.5.4. Standarde Specifice pentru DataWeave (MuleSoft - Team_1)
6.5.5. Standarde Specifice pentru Designul Job-urilor Talend (Team_1)
6.5.6. Standarde Specifice pentru Query-uri SQL (ClickHouse - Team_1, Team_7)
6.5.7. Standarde Specifice pentru Dockerfile-uri și `docker-compose.yml` (Team_7)
6.5.8. Standarde Specifice pentru Configurații NGINX (Team_7)
6.6. Definition of Done (DoD) Detaliată pentru Task-uri și User Stories

**7. CERINȚE INIȚIALE SPECIFICE PENTRU STUDENȚI (ACȚIUNI IMEDIATE ÎNAINTE DE STARTUL EFECTIV AL SPRINTULUI 2)**
7.1. Citirea Integrală, cu Maximă Atenție, și Înțelegerea Aprofundată a Acestui Document (`README.md` - Versiunea Actuală)
7.2. Pregătirea Întrebărilor de Clarificare pentru Ședința de Kick-off a Sprintului 2
7.3. Trimiterea Email-ului către Tutore (Petrut Constantin) pentru Solicitarea Accesului la Repository-ul GitHub al Proiectului (Conform Template-ului din Anexa 8.2)

**8. ANEXE (TEMPLATE-URI ȘI RESURSE UTILE)**
8.1. Exemplu Template Detaliat pentru Fișierul `SETUP_MODUL.md`
8.2. Template Email pentru Solicitarea Accesului la Repository-ul GitHub al Proiectului
8.3. Lista de API-uri Externe Gratuite Sugerate pentru Integrare (Responsabilitate Team_1 - MuleSoft)
8.4. Lista Recomandată de Resurse de Învățare Inițială (Link-uri către Documentația Oficială și Tutoriale de Bază per Tehnologie)

---

**1. INTRODUCERE ȘI FUNDAMENTELE PROIECTULUI "DEVI MARKET ZERO"**

**1.1. Denumirea Proiectului și Semnificația Sa**

Numele proiectului, **"DeviMarket Zero"**, a fost ales cu grijă pentru a încapsula esența acestei inițiative de practică:

- **"Devi"**: Stabilește o legătură directă cu compania tutorelui, **Devi**devs.com, sugerând că acest proiect este o simulare a unui angajament real în cadrul firmei, respectând standardele și viziunea acesteia.
- **"Market"**: Indică natura aplicației pe care o vom construi – un **market**place online, o platformă de comerț electronic menită să agrege și să prezinte produse din diverse surse.
- **"Zero"**: Acest sufix subliniază două aspecte fundamentale și definitorii ale proiectului:
  1.  **Pornire de la Zero Cunoștințe Specifice:** Proiectul este special conceput pentru studenți care, pentru majoritatea tehnologiilor avansate și specifice utilizate (MuleSoft, Talend, ClickHouse, React la nivel de aplicație complexă, Docker, MicroPython), pornesc de la un nivel de cunoștințe zero sau minim. Învățarea ghidată și practică este un obiectiv central și asumat.
  2.  **Costuri Operaționale Zero:** O constrângere inflexibilă a proiectului este utilizarea exclusivă a tehnologiilor, platformelor și serviciilor gratuite și open-source. Aceasta elimină orice barieră financiară și încurajează explorarea soluțiilor accesibile, dar puternice.

**1.2. Scenariul de Practică: Simularea unei Cerințe Reale de la un Client al Devidevs.com**

Pentru a oferi o experiență de practică cât mai relevantă, imersivă și apropiată de realitatea industriei IT, acest proiect este structurat ca un răspuns la o cerere specifică și detaliată venită din partea unui client fictiv către Devidevs.com. Studenții, sub îndrumarea lui Petrut Constantin, vor parcurge etape similare celor dintr-un ciclu de viață al unui proiect software real: analiza cerințelor, designul arhitectural, dezvoltarea iterativă (pe sprinturi), testarea funcțională, integrarea componentelor și documentarea soluției.

    **1.2.1. Profilul Clientului Fictiv și Contextul de Business**
    Clientul nostru fictiv este compania "GlobalGoods Inc.", un start-up dinamic și inovator care își propune să pătrundă pe piața competitivă a retail-ului online prin lansarea unui marketplace specializat. Viziunea lor pe termen lung este de a crea o platformă globală, dar pentru faza inițială – cea acoperită de acest proiect de practică – dispun de un buget limitat. Prin urmare, "GlobalGoods Inc." dorește să valideze conceptul tehnic al marketplace-ului și funcționalitățile de bază folosind soluții tehnologice robuste, scalabile, dar care sunt open-source sau oferă versiuni gratuite puternice. Clientul este deosebit de interesat de utilizarea platformelor de integrare moderne, precum **MuleSoft Anypoint Platform** și **Talend Open Studio**, pentru a asigura o gestionare eficientă și flexibilă a fluxurilor de date din diverse surse, anticipând o creștere viitoare. De asemenea, sunt deschiși la explorarea unor modalități inovatoare de interacțiune cu produsele, cum ar fi integrarea unui sistem de scanare bazat pe hardware accesibil.

    **1.2.2. Cerințele Specifice Detaliate ale Clientului (Brief-ul Inițial - Arhitectură MuleSoft Central)**
    *Următorul text reprezintă brief-ul detaliat, așa cum ar fi fost primit de la "GlobalGoods Inc." către Petrut Constantin, la Devidevs.com, reflectând arhitectura decisă (MuleSoft central, Talend pentru ETL DB, RPi Pico către MuleSoft):*

    *"Stimate Domnule Constantin și echipă Devidevs,

    Dorim să dezvoltăm un prototip pentru un **marketplace online**, denumit intern 'DeviMarket Zero'. Cerințele noastre detaliate pentru acest Minimum Viable Product (MVP) sunt următoarele:

    1.  **Platforma Web (Frontend):**
        *   O interfață web responsive, dezvoltată în **React**, care să permită utilizatorilor vizualizarea produselor (listă, pagină de detalii) într-un mod modern și intuitiv.
        *   Integrare cu **MetaMask**: Utilizatorii trebuie să își poată conecta portofelul MetaMask, iar adresa publică a portofelului conectat să fie afișată clar în interfață. Nu sunt necesare tranzacții blockchain în această fază.

    2.  **Managementul Centralizat al API-urilor și Logicii de Business (MuleSoft Anypoint Platform):**
        *   Considerăm **MuleSoft Anypoint Platform** (rulat local prin Anypoint Studio) ca fiind **piesa centrală a backend-ului** nostru. Solicităm ca MuleSoft să gestioneze următoarele:
            *   **API pentru Scannerul de Produse (HTTPS):** Expunerea unui API RESTful securizat cu **certificate self-signed (HTTPS)**, care să primească date (cod de bare și timestamp) de la dispozitivul Raspberry Pi Pico. Acest API MuleSoft va fi responsabil pentru validarea de bază a datelor primite și pentru **scrierea sau actualizarea directă a informațiilor despre produs în baza de date ClickHouse** a proiectului.
            *   **API Fațadă pentru Produse din Surse Externe și Încărcare în DB:** Expunerea unui alt API RESTful care va acționa ca un proxy/fațadă către un API public online gratuit ce oferă date despre produse (vom alege împreună unul relevant, ex: FakeStoreAPI, DummyJSON). Fluxul Mule va prelua datele de la sursa externă, va aplica transformările necesare folosind **DataWeave** (pentru a se conforma modelului nostru de date intern) și apoi va **scrie direct aceste produse în baza de date ClickHouse a proiectului**.
            *   **API-uri pentru Deservirea Frontend-ului (React):** Expunerea tuturor API-urilor RESTful necesare aplicației Frontend pentru a prelua și afișa lista de produse (cu paginare și filtrare de bază) și detaliile complete ale produselor. Aceste API-uri MuleSoft vor interoga direct baza de date ClickHouse a proiectului.

    3.  **Integrarea și Migrarea Datelor (Talend Open Studio):**
        *   Pentru gestionarea unor fluxuri ETL specifice, în special cele care implică migrarea/sincronizarea între baze de date, dorim utilizarea **Talend Open Studio**:
            *   **Migrare Date din Sursă "Franceză" (Simulată):** Vom simula o bază de date "sursă" (o vom numi 'baza de date franceză', care va fi un tabel/schemă separată în aceeași instanță ClickHouse locală, ex: `clickhouse_db_franceza.products_fr`). Talend va trebui să creeze un job ETL care se conectează la această sursă, extrage datele despre produse, le transformă conform modelului de date al noului marketplace și le **încarcă direct în baza de date ClickHouse principală a proiectului** (ex: `devimarket_db.products`).
            *   **(Opțional/Alternativ pentru a explora flexibilitatea Talend):** Un alt job Talend ar putea fi dezvoltat pentru a consuma API-ul expus de MuleSoft (cel care aduce date de la API-ul extern de produse, dacă MuleSoft este configurat să expună aceste date în loc să le scrie direct). Acest job Talend ar prelua datele de la MuleSoft și le-ar încărca în baza de date ClickHouse a proiectului, demonstrând un pattern de integrare în care Talend poate interacționa și cu API-uri.

    4.  **Baza de Date Centrală a Proiectului:**
        *   Toate datele consolidate ale produselor vor fi stocate într-o bază de date **ClickHouse**, denumită `devimarket_db`, tabelul `products`. Aceasta va fi sursa de adevăr pentru produsele afișate în marketplace și va fi alimentată prin fluxurile MuleSoft (de la scanner și API-ul extern) și Talend (din "baza franceză").

    5.  **Sistemul de Scanare a Produselor (Hardware):**
        *   Dorim integrarea unui sistem de scanare fizică a produselor folosind un **Raspberry Pi Pico W** și un scanner de coduri de bare USB standard (care emulează o tastatură).
        *   Dispozitivul RPi Pico W, odată ce scanează un cod de bare, trebuie să construiască un mesaj (JSON) și să-l trimită (printr-un request HTTP/HTTPS) către API-ul dedicat expus de MuleSoft pentru procesare și actualizare în baza de date.

    6.  **Mediu de Rulare și Tehnologii Specifice:**
        *   Întreaga soluție trebuie să funcționeze **local** pe mașinile virtuale Ubuntu ale studenților, fără a depinde de servicii cloud plătite.
        *   Se vor utiliza exclusiv tehnologii, platforme și biblioteci **gratuite și open-source**.
        *   **Docker** va fi utilizat pentru a rula și gestiona containerul bazei de date **ClickHouse**. De asemenea, build-ul static final al aplicației Frontend (React) va fi servit printr-un container **NGINX**.
        *   Aplicațiile **MuleSoft** vor fi dezvoltate și rulate local în **Anypoint Studio** (utilizând Mule runtime-ul embedat).
        *   Job-urile **Talend** vor fi dezvoltate și rulate local în **Talend Open Studio**.

    Așteptăm cu interes propunerea și colaborarea cu Devidevs.com și cu talentații dumneavoastră studenți pentru realizarea acestui prototip."*

**1.3. Viziunea Produsului "DeviMarket Zero": Ce Construim Efectiv?**

    **1.3.1. Descrierea Generală a Marketplace-ului Online**
    "DeviMarket Zero" va fi un prototip funcțional (Minimum Viable Product - MVP) al unui marketplace online. Acesta va permite utilizatorilor să navigheze și să vizualizeze o listă de produse agregate din diverse surse de date (o bază de date migrată, un API extern, produse adăugate prin scanare) și să acceseze pagini de detalii pentru fiecare produs. Interfața va fi simplă, curată, modernă și axată pe funcționalitatea de bază de prezentare a produselor. Nu se vor implementa funcționalități avansate de e-commerce precum coș de cumpărături, proces de checkout, sisteme de plată, sau managementul conturilor de utilizator (dincolo de simpla conectare a portofelului MetaMask pentru afișarea adresei). Scopul este de a demonstra integrarea tehnologiilor și fluxurile de date end-to-end.

    **1.3.2. Rolul Central al MuleSoft Anypoint Platform în Arhitectură**
    În arhitectura aleasă pentru "DeviMarket Zero", **MuleSoft Anypoint Platform (rulat local prin Anypoint Studio) este desemnată ca fiind componenta principală de backend și de orchestrare a API-urilor.** Această decizie strategică plasează MuleSoft în centrul fluxurilor de date și al logicii de business, oferind studenților din Team_1 o experiență consistentă și aprofundată cu o platformă de integrare de top, capabilă să gestioneze interacțiuni complexe.
    Responsabilitățile MuleSoft vor include:
    *   **Expunerea Tuturor API-urilor RESTful Necesare Sistemului:** MuleSoft va fi singura "poartă de intrare" programatică către logica de business și datele produselor pentru componentele externe. Aceasta include:
        *   API-uri consumate de aplicația Frontend (React) pentru afișarea listei de produse și a detaliilor acestora (operațiuni de citire).
        *   Un API dedicat și securizat (HTTPS cu self-signed certificates) pentru a primi și procesa datele trimise de scannerul Raspberry Pi Pico W (operațiuni de scriere/actualizare).
        *   Un API care acționează ca o fațadă inteligentă (cu logică de transformare DataWeave) pentru un API extern gratuit de produse, pregătind datele pentru stocarea internă (operațiuni de scriere/actualizare).
    *   **Implementarea Logicii de Business Esențiale:** O parte semnificativă din logica de validare a datelor (ex: formatul codului de bare, prezența câmpurilor obligatorii), procesarea acestora (ex: generare ID-uri, setare timestamp-uri, decizii de creare vs. actualizare) și orchestrarea interacțiunilor (de exemplu, pentru datele primite de la scanner sau cele extrase din API-ul extern) va fi implementată în cadrul fluxurilor MuleSoft.
    *   **Interacțiunea Directă și Exclusivă (pentru API-uri) cu Baza de Date ClickHouse:** Toate operațiunile de citire (pentru Frontend) și scriere/actualizare (pentru datele de la scanner și API-ul extern) inițiate prin API-urile expuse de MuleSoft se vor realiza prin interacțiunea directă a fluxurilor MuleSoft cu baza de date ClickHouse a proiectului, folosind conectorul de baze de date și query-uri SQL specifice.

    **1.3.3. Rolul Talend Open Studio în Fluxurile de Date**
    **Talend Open Studio** va fi utilizat pentru procese ETL (Extragere, Transformare, Încărcare) specifice, în special cele care implică volume mai mari de date în mod batch sau migrarea/sincronizarea între diferite structuri de baze de date (chiar dacă ambele sunt în ClickHouse, dar simulate ca surse distincte cu scheme potențial diferite). Talend va opera într-un mod mai "offline" sau programat, spre deosebire de natura real-time a API-urilor MuleSoft.
    Responsabilitățile Talend vor include:
    *   **Migrarea/Sincronizarea Datelor din "Baza Franceză":** Rolul principal și obligatoriu va fi de a implementa un job ETL care extrage date dintr-o sursă de date simulată (tabelul `clickhouse_db_franceza.products_fr`), aplică transformările necesare pentru a se conforma modelului de date al noului marketplace (definit în `devimarket_db.products`) și încarcă aceste date direct în tabelul destinație din ClickHouse.
    *   **(Opțional și Secundar) Consumarea API-ului MuleSoft pentru Date Externe:** Ca un exercițiu alternativ sau complementar de învățare a integrării între platforme și pentru a demonstra flexibilitatea Talend, un job ar putea fi dezvoltat pentru a apela API-ul expus de MuleSoft (cel care aduce date de la API-ul public de produse, *dacă* MuleSoft este configurat să expună aceste date ca un serviciu, în loc să le scrie direct el însuși în DB pentru acest flux particular). Acest job Talend ar prelua datele de la MuleSoft și le-ar încărca în baza de date ClickHouse. Această opțiune va fi evaluată în funcție de progresul Team_1 și de valoarea educațională.

**1.4. Obiectivele Specifice și Livrabilele Concrete ale MVP-ului (Minimum Viable Product)**

La finalul celor 4 sprinturi, proiectul "DeviMarket Zero" va trebui să livreze următoarele elemente funcționale, testabile și bine documentate, care împreună constituie Prototipul Funcțional Minim (MVP):

    **1.4.1. Funcționalități Cheie și Livrabile ale Aplicației Frontend (React)**
    *   **Livrabil Principal:** Codul sursă complet al aplicației React, structurat pe componente, respectând bunele practici, și un build static optimizat al aplicației (`dist` sau `build` folder), gata pentru a fi servit de NGINX.
    *   **Funcționalități Specifice Detaliate:**
        *   **Pagina Principală / Listare Produse (`/` sau `/products`):**
            *   Afișarea unei liste de produse sub formă de carduri interactive sau rânduri într-un tabel.
            *   Fiecare item din listă va prezenta cel puțin: imaginea principală a produsului (dacă URL-ul este disponibil în DB), numele produsului și prețul (cu moneda).
            *   Implementarea unui sistem de paginare simplă (ex: butoane "Pagina Următoare"/"Pagina Anterioară" sau numere de pagină) dacă numărul total de produse depășește un prag rezonabil (ex: 10-20 produse pe pagină). Apelurile API către MuleSoft vor include parametrii de paginare.
            *   La click pe un produs din listă, utilizatorul va fi redirecționat către pagina de detalii a acelui produs.
        *   **Pagina de Detalii Produs (`/products/:productId`):**
            *   Afișarea tuturor informațiilor relevante despre un produs selectat, preluate din ClickHouse prin intermediul unui API specific expus de MuleSoft. Aceasta include: nume, descriere completă, preț, monedă, categorie, sub-categorie, brand, cantitate în stoc, URL imagine (afișată ca imagine principală mare), atribute specifice (afișate ca listă cheie-valoare), tag-uri.
        *   Un buton vizibil "Înapoi la lista de produse" sau un breadcrumb pentru navigare facilă.
        *   **Integrare Portofel MetaMask:**
            *   Un buton clar etichetat "Conectează Portofel MetaMask" (sau similar), vizibil în header-ul aplicației sau într-o secțiune dedicată utilizatorului.
            *   La click pe buton, se va iniția procesul standard de conectare cu extensia MetaMask instalată în browserul utilizatorului.
            *   După conectarea cu succes, adresa publică a portofelului selectat de utilizator (hexagesimală, ex: `0x...`) va fi afișată în mod clar în interfață, înlocuind butonul de conectare sau într-o zonă adiacentă.
            *   Se va gestiona cazul în care extensia MetaMask nu este instalată (afișarea unui mesaj informativ).
        *   **Interacțiune cu API-urile MuleSoft:**
            *   Toate datele dinamice despre produse vor fi preluate prin apeluri HTTP GET către endpoint-urile corespunzătoare expuse de MuleSoft (definite la secțiunea 1.4.2).
            *   Se va implementa o gestionare de bază a stărilor de încărcare (ex: afișarea unui spinner sau mesaj "Se încarcă...") și a erorilor provenite de la API (ex: afișarea unui mesaj de eroare prietenos dacă API-ul nu răspunde sau returnează o eroare).
        *   **Design și Styling:**
            *   Utilizarea Tailwind CSS pentru a crea o interfață cu un aspect modern, curat și profesional.
            *   Asigurarea unui nivel de bază de responsivitate, astfel încât aplicația să fie utilizabilă pe ecrane de dimensiuni diferite (desktop, tabletă – la nivel vizual).

    **1.4.2. Serviciile și API-urile Furnizate de MuleSoft Anypoint Platform**
    *   **Livrabil Principal:** Proiectele MuleSoft exportabile (ca fișiere `.jar` care conțin aplicația Mule, gata de a fi rulate local într-un Mule Runtime standalone sau direct din Anypoint Studio). Documentația API în format RAML (generată de Anypoint Studio) pentru fiecare API expus. Codul DataWeave și configurațiile fluxurilor vor fi versionate pe GitHub.
    *   **API-uri și Funcționalități Specifice Detaliate:**
        *   **Aplicație Mule 1: API pentru Scannerul RPi Pico (HTTPS cu certificate self-signed):**
            *   **Endpoint:** `POST https://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTPS_SCANNER>/api/scanner/product_scan` (Portul exact, ex: 8092, și calea `/api/scanner` vor fi definite de Team_1). Se va folosi un port HTTPS diferit de cel HTTP pentru API-urile Frontend pentru claritate.
            *   **Input (Request Body):** JSON, ex: `{ "barcode": "0123456789012", "scan_timestamp": "YYYY-MM-DDTHH:MM:SSZ" }`.
            *   **Logică în Fluxul Mule:**
                1.  Recepționare request HTTPS (cu TLS configurat pe Listener folosind un keystore self-signed).
                2.  Validare de bază a payload-ului JSON (ex: prezența câmpului `barcode`, formatul acestuia).
                3.  Transformare DataWeave (dacă este necesar pentru a pregăti datele pentru inserarea în ClickHouse, ex: conversie timestamp).
                4.  Conectare la ClickHouse folosind `Database Connector`.
                5.  Implementarea logicii de "upsert" (insert or update) detaliată:
                    *   Se va executa un `SELECT` pentru a verifica dacă un produs cu `barcode`-ul primit există deja în tabelul `devimarket_db.products`.
                    *   Dacă **nu există**: se va executa un `INSERT` în `devimarket_db.products` cu date minimale: `id` (UUID generat în MuleSoft folosind `uuid()`), `barcode`, `name` (ex: "Produs Scanat - " + barcode), `price` (0.0), `currency` ('RON'), `stock_quantity` (1, sau 0 dacă actualizarea stocului e o acțiune separată), `source_etl` ('RPi_Pico_Scan_V1.0'), `is_active` (1), `created_at` (din `scan_timestamp` sau timestamp curent UTC generat în Mule), `updated_at` (similar cu `created_at` la inserare).
                    *   Dacă **există**: se va executa un `UPDATE` (folosind sintaxa `ALTER TABLE devimarket_db.products UPDATE ... WHERE barcode = ...` pentru ClickHouse) pentru a actualiza `updated_at` la `scan_timestamp` (sau timestamp curent Mule) și, opțional, `stock_quantity` (ex: incrementare cu 1, sau setarea unei valori dacă este trimisă de scanner). Logica exactă de actualizare (ce câmpuri se actualizează) va fi definită și documentată de Team_1.
                6.  Logging detaliat al operațiunilor (ce barcode a fost primit, dacă s-a făcut insert sau update, ID-ul produsului) și al erorilor (probleme de validare, erori DB).
            *   **Output (Response Body):** JSON cu status clar (ex: `{ "status": "success", "operation": "created/updated", "productId": "...", "barcode": "..." }` sau `{ "status": "error", "message": "Detailed error message..." }`). Status HTTP corespunzător (201 Created, 200 OK pentru update, 400 Bad Request, 500 Internal Server Error).
        *   **Aplicație Mule 2: API Fațadă pentru API Extern de Produse și Încărcare Directă în DB:**
            *   **Endpoint (pentru declanșare/testare, dacă nu se folosește Scheduler):** `GET http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP_ETL>/api/marketplace/ingest-external-products` (Portul, ex: 8091, și calea vor fi definite de Team_1). Se poate adăuga un parametru de query pentru a specifica API-ul sursă, dacă se dorește flexibilitate, ex: `?source=dummyjson`.
            *   **Logică în Fluxul Mule:**
                1.  (Opțional) Un `Scheduler` pentru a declanșa fluxul periodic (ex: la fiecare oră, pentru testare).
                2.  Apelarea API-ului extern gratuit selectat (ex: `GET https://dummyjson.com/products?limit=20` pentru a limita numărul de produse la ingestie inițială) folosind `HTTP Request`.
                3.  Procesarea răspunsului JSON de la API-ul extern.
                4.  Pentru fiecare produs din lista externă, utilizarea `Transform Message (DataWeave)` pentru o mapare robustă și detaliată la toate câmpurile relevante ale tabelului `devimarket_db.products` (nume, descriere, preț, monedă – poate necesita conversie dacă API-ul extern folosește USD, categorie, brand, stoc, URL imagine, atribute, tag-uri).
                    *   Conversia tipurilor de date (ex: string to decimal pentru preț).
                    *   Gestionarea atentă a câmpurilor lipsă sau nule din sursa externă (setarea de valori default adecvate).
                    *   Setarea câmpului `source_etl` (ex: 'MULE_DummyJSON_Ingest_V1.0').
                    *   Generarea unui `id` UUID nou pentru fiecare produs.
                    *   Setarea `created_at` și `updated_at` la timestamp-ul curent UTC.
                5.  Conectare la ClickHouse.
                6.  Pentru fiecare produs transformat, implementarea logicii de "upsert" în `devimarket_db.products`, similară cu cea de la scanner, dar bazată pe un identificator mai fiabil din sursa externă dacă există (ex: `external_product_id`), sau o combinație de `name` și `brand` pentru a decide dacă produsul este nou sau existent.
                7.  Logging detaliat al numărului de produse preluate, transformate, create și actualizate, precum și al oricăror erori.
            *   **Output (Response Body pentru endpoint-ul de declanșare, dacă există):** JSON cu un sumar al operațiunii (ex: `{ "status": "success", "source_api": "DummyJSON", "products_retrieved": 20, "products_created_in_db": 15, "products_updated_in_db": 5 }`).
        *   **Aplicație Mule 3 (sau parte din Aplicația Mule 2): API-uri pentru Deservirea Frontend-ului React:**
            *   **Endpoint 1 (Listare Produse):** `GET http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP_FRONTEND>/api/marketplace/products` (Portul, ex: 8091, poate fi același cu cel de ingestie, dar cu căi diferite).
                *   Suport obligatoriu pentru parametrii de query: `page` (INT, default 1, minim 1) și `limit` (INT, default 10, minim 1, maxim ~50 pentru a evita răspunsuri prea mari).
                *   Suport opțional (bonus) pentru: `category` (STRING, pentru filtrare exactă pe categorie), `brand` (STRING), `search_term` (STRING, pentru căutare simplă în `name` și `description` folosind `ILIKE '%term%'` sau funcții full-text de bază din ClickHouse dacă sunt simple de implementat), `sortBy` (STRING, ex: 'price_asc', 'price_desc', 'name_asc', 'created_at_desc').
                *   Logic: Construiește și execută un query `SELECT` dinamic și parametrizat pe `devimarket_db.products` în ClickHouse, aplicând clauzele `WHERE` (pentru `category`, `brand`, `search_term`), `ORDER BY` și `LIMIT ... OFFSET ...` (pentru paginare și sortare). Se va selecta doar `is_active = 1`. Se va calcula și numărul total de produse care corespund filtrelor (pentru a putea calcula numărul total de pagini).
                *   Output: JSON structurat pentru paginare, ex: `{ "metadata": { "currentPage": 1, "pageSize": 10, "totalPages": 7, "totalCount": 68 }, "data": [array_de_obiecte_produs_complete] }`.
            *   **Endpoint 2 (Detalii Produs):** `GET http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP_FRONTEND>/api/marketplace/products/{productId}`
                *   Input: `productId` (UUID valid) ca path parameter.
                *   Logic: Execută un `SELECT * FROM devimarket_db.products WHERE id = :productId AND is_active = 1` în ClickHouse.
                *   Output: JSON cu detaliile complete ale produsului solicitat, sau un status HTTP 404 Not Found (cu un body JSON `{ "error": "Product not found" }`) dacă ID-ul nu există sau produsul nu este activ.
        *   Toate fluxurile MuleSoft vor implementa logging robust și mecanisme de error handling (try-catch scopes, global error handlers) pentru a returna răspunsuri de eroare JSON standardizate (ex: `{ "timestamp": "...", "status": 500, "error": "Internal Server Error", "message": "Specific error detail if safe to expose", "path": "..." }`).

    **1.4.3. Fluxurile ETL Implementate cu Talend Open Studio**
    *   **Livrabil Principal:** Job-uri Talend funcționale, exportabile (ca arhivă de job sau proiect) și documentație tehnică detaliată pentru fiecare job (design vizual, logica transformărilor din `tMap`, configurația componentelor, pași de rulare).
    *   **Job Specific Detaliat 1 (Obligatoriu): Migrare Date din "Baza Franceză" (ClickHouse Sursă -> ClickHouse Destinație):**
        *   **Nume Job (Exemplu):** `Job_Migrate_FrenchDB_To_DeviMarketDB_Products_v1`
        *   **Sursă:** Tabelul `clickhouse_db_franceza.products_fr` (dintr-o schemă separată, dar pe aceeași instanță ClickHouse locală ca și destinația). Team_1 va defini schema acestui tabel sursă (poate avea nume de coloane diferite, tipuri de date diferite, câmpuri lipsă/suplimentare față de tabelul `devimarket_db.products` pentru a face exercițiul de transformare relevant).
        *   **Conectivitate Sursă:** Se va utiliza componenta `tJDBCInput` (configurată cu driverul JDBC pentru ClickHouse și detaliile de conexiune la `clickhouse_db_franceza`) pentru a extrage datele printr-un query `SELECT * FROM products_fr;`. Schema va fi definită în metadata Talend.
        *   **Transformare (cu `tMap`):** Aceasta este inima job-ului.
            *   **Mapare Directă și Redenumire:** Maparea coloanelor din `products_fr` la coloanele corespunzătoare din `devimarket_db.products`. Dacă numele diferă, se va face redenumirea.
            *   **Conversie Tipuri de Date:** Asigurarea compatibilității tipurilor de date (ex: un `VARCHAR` din sursă poate deveni `Decimal` sau `Int32` în destinație, cu validările necesare).
            *   **Curățare Date:** Aplicarea funcțiilor Talend pentru a elimina spațiile albe inutile (trim), a converti textul la un case specific (ex: `StringHandling.UPCASE()`), a înlocui caractere speciale.
            *   **Generare Valori Noi/Default:**
                *   Generarea unui `id` (tip `UUID`) nou și unic pentru fiecare produs migrat (folosind funcția `Numeric.sequence("s1",1,1)` pentru un ID numeric secvențial sau `TalendString.getUUID()` pentru UUID string).
                *   Setarea obligatorie a câmpului `source_etl` la o valoare distinctă (ex: "TALEND_FR_MIGRATION_V1.1").
                *   Setarea câmpurilor `created_at` și `updated_at` la timestamp-ul curent al execuției job-ului (folosind `TalendDate.getCurrentDate()`).
                *   Setarea valorilor default pentru câmpurile din `devimarket_db.products` care nu au corespondent în `products_fr` (ex: `is_active` = 1).
            *   **Gestionarea Valorilor Nule:** Definirea unui comportament clar pentru câmpurile nule din sursă (se păstrează nule dacă schema destinație permite, se înlocuiesc cu valori default specifice, sau rândul este marcat ca "respins" dacă un câmp obligatoriu în destinație este nul în sursă).
            *   **Filtrare Rânduri:** (Opțional) Implementarea unor filtre în `tMap` pentru a exclude anumite rânduri din sursă pe baza unor criterii (ex: produse fără preț, produse dintr-o categorie anume).
        *   **Încărcare (Destinație):** Tabelul `devimarket_db.products` din instanța ClickHouse locală. Se va utiliza componenta `tDBOutput` (configurată cu driverul JDBC ClickHouse și detaliile de conexiune la `devimarket_db`).
            *   **Acțiune pe Tabel la Încărcare:** Se va folosi acțiunea "Insert". Deoarece generăm ID-uri noi, nu ar trebui să existe coliziuni de cheie primară. Se va discuta gestionarea re-rulării job-ului (ex: ștergerea datelor migrate anterior de același `source_etl` înainte de o nouă inserare, sau o strategie de "insert if not exists" dacă ClickHouse și conectorul o permit simplu pe baza unei chei de business, ex: un `original_french_product_id`). Pentru MVP, o simplă inserare este suficientă, asumând că tabelul destinație e gol sau se curăță manual înainte de rulări repetate.
        *   **Logging și Gestionarea Erorilor:** Utilizarea extensivă a `tLogRow` pentru a vizualiza datele în diferite etape ale fluxului (după extragere, după transformare). Configurarea legăturilor "Rejects" din `tMap` și `tDBOutput` pentru a captura rândurile care eșuează și a le scrie într-un fișier text de log de erori (folosind `tFileOutputDelimited`).
    *   **(Opțional, dacă timpul permite și se alege acest pattern) Job 2: Consum API MuleSoft și Încărcare în ClickHouse:**
        *   **Sursă:** Apelarea endpoint-ului MuleSoft (ex: `GET http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP_ETL>/api/marketplace/external-products-for-talend` - presupunând că acest API MuleSoft returnează o listă de produse JSON, nu le scrie direct el însuși). Se va folosi componenta `tRestClient`.
        *   **Procesare Răspuns:** Răspunsul JSON va fi parsat folosind `tExtractJSONFields` pentru a extrage câmpurile fiecărui produs.
        *   **Transformare (`tMap`):** Maparea câmpurilor din structura JSON a API-ului MuleSoft la schema tabelului `devimarket_db.products`. Setarea `source_etl` la o valoare distinctă (ex: "TALEND_MULE_CONSUMER_V1.1").
        *   **Încărcare:** Similar cu Job 1, folosind `tDBOutput` pentru a încărca datele în tabelul `devimarket_db.products`.
        *   Logging și error handling similar.

    **1.4.4. Funcționalitatea Sistemului de Scanare (Raspberry Pi Pico W)**
    *   **Livrabil Principal:** Scriptul MicroPython complet, funcțional și bine comentat, versionat pe GitHub. O demonstrație video scurtă sau live a funcționării end-to-end.
    *   **Detalii Specifice de Implementare:**
        *   **Conectivitate WiFi Robustă:** Scriptul va include o funcție dedicată pentru conectarea la rețeaua WiFi (SSID și parolă citite din `config.py`). Această funcție va implementa un număr finit de reîncercări în caz de eșec al conexiunii și va oferi feedback vizual (LED) despre statusul conexiunii.
        *   **Citire Cod de Bare (cu Fallback Clar):**
            *   **Prioritatea 1:** Implementarea citirii directe de la un scanner USB care emulează o tastatură (HID). Aceasta va necesita cercetare aprofundată de către Team_9 pentru a găsi/adapta biblioteci MicroPython sau tehnici de citire a input-ului raw USB pe Pico W (dacă placa suportă USB OTG/Host la nivel simplu).
            *   **Prioritatea 2 (Fallback dacă P1 e prea complexă):** Utilizarea unui al doilea RPi Pico (sau a unui PC) ca intermediar USB Host, care citește scannerul și trimite datele serial (UART) către Pico W principal. Pico W principal va citi de pe UART.
            *   **Prioritatea 3 (Fallback Obligatoriu pentru Demo dacă P1 și P2 eșuează):** Implementarea unui mecanism de **input manual al codului de bare prin consola serială REPL (Thonny)**. Scriptul va solicita utilizatorului să tasteze codul de bare, iar acesta va fi procesat mai departe. Aceasta asigură că restul logicii (WiFi, HTTP) poate fi demonstrat. **Metoda aleasă final va fi clar documentată.**
        *   **Construirea Payload-ului JSON:** După obținerea codului de bare și a unui timestamp curent (ex: `time.time()` sau folosind modul `rtc` dacă e setat), se va construi payload-ul JSON: `{ "barcode": "CITIT_COD_BARE", "scan_timestamp": "YYYY-MM-DDTHH:MM:SSZ" }` (format ISO 8601 pentru timestamp).
        *   **Trimiterea Request-ului HTTPS către API-ul MuleSoft:**
            *   Se va utiliza biblioteca `urequests`.
            *   Request `POST` către URL-ul exact al API-ului MuleSoft pentru scanner (ex: `https://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTPS_SCANNER>/api/scanner/product_scan`). IP-ul și portul vor fi configurabile (ex: în `config.py`).
            *   Se vor seta header-ele corecte: `Content-Type: application/json`.
            *   **Gestionarea Certificatului Self-Signed:** Deoarece API-ul MuleSoft va folosi un certificat self-signed, biblioteca `urequests` va trebui configurată să **NU valideze certificatul SSL al serverului**. Acest lucru se face de obicei printr-un parametru în funcția de request (ex: `ssl=False` sau un context SSL custom care nu verifică – necesită verificarea documentației `urequests` pentru MicroPython). Această abordare este acceptabilă **doar** pentru acest mediu de dezvoltare local și trebuie menționată ca o limitare de securitate.
        *   **Procesarea Răspunsului de la API și Feedback Vizual:**
            *   Scriptul va citi status code-ul HTTP al răspunsului și, opțional, corpul JSON al răspunsului.
            *   LED-ul onboard al Pico W va fi folosit pentru feedback:
                *   LED aprins intermitent lent: Încearcă conectarea la WiFi.
                *   LED aprins continuu: Conectat la WiFi, în așteptare scanare.
                *   LED clipind rapid (verde): Request trimis, așteaptă răspuns.
                *   LED verde aprins 2 secunde: Răspuns de succes (ex: 200/201) de la API.
                *   LED roșu aprins 2 secunde: Eroare de la API (ex: 4xx, 5xx) sau eroare de rețea/timeout.
        *   **Demonstrație Funcțională:** Scanarea a cel puțin 3 produse diferite și verificarea (prin interfața Frontend React, după un refresh) că produsele apar corect în listă sau că informațiile lor (ex: `updated_at`, `stock_quantity`) s-au modificat în baza de date ClickHouse.

    **1.4.5. Structura și Conținutul Bazei de Date ClickHouse**
    *   **Livrabil Principal:** Scripturi SQL complete (`.sql`) pentru crearea bazei de date `devimarket_db` și a tabelului `products` (cu schema finală detaliată în Capitolul 3.5). Un script separat pentru crearea bazei de date simulate `clickhouse_db_franceza` și a tabelului `products_fr` (cu o schemă distinctă pentru a face ETL-ul relevant). Aceste scripturi pot fi integrate în procesul de inițializare al containerului Docker ClickHouse.
    *   **Detalii Conținut la Finalul MVP-ului:**
        *   Tabelul `devimarket_db.products` trebuie să conțină un set de date demonstrativ, consistent și diversificat, populat prin toate cele trei fluxuri principale de ingestie:
            *   Produse migrate de job-ul Talend din `clickhouse_db_franceza.products_fr` (cu `source_etl` specific).
            *   Produse preluate de la API-ul extern prin fluxul MuleSoft (cu `source_etl` specific).
            *   Produse adăugate/actualizate prin scanările realizate cu Raspberry Pi Pico W (cu `source_etl` specific).
        *   Tabelul `clickhouse_db_franceza.products_fr` va conține datele inițiale de test (furnizate de Tutore sau create de Team_1) care servesc drept sursă pentru job-ul Talend de migrare.
        Acest lucru va demonstra capacitatea sistemului de a agrega și gestiona date din multiple surse, fiecare cu propria sa metodă de integrare.

    **1.4.6. Infrastructura Locală de Rulare (Docker, NGINX)**
    *   **Livrabil Principal:** Un fișier `docker-compose.yml` complet, funcțional și bine documentat, împreună cu toate `Dockerfile`-urile necesare (pentru ClickHouse dacă e customizat, și pentru NGINX cu build-ul React). O configurație NGINX detaliată și funcțională (`nginx.conf` sau `default.conf`).
    *   **Detalii Specifice de Funcționare și Configurare:**
        *   **Container Docker pentru ClickHouse:**
            *   Va utiliza imaginea oficială `clickhouse/clickhouse-server` (o versiune stabilă specificată).
            *   Va fi configurat în `docker-compose.yml` pentru a:
                *   Utiliza un volum Docker numit (ex: `devimarket_clickhouse_data`) montat pe `/var/lib/clickhouse/` pentru persistența completă a datelor.
                *   Expune porturile necesare către host-ul VM (ex: `8123:8123` pentru interfața HTTP și `9000:9000` pentru clientul TCP nativ), permițând aplicațiilor MuleSoft și job-urilor Talend (care rulează nativ pe VM) să se conecteze la instanța ClickHouse.
                *   (Recomandat) Monta un director de pe host (ex: `./clickhouse_init_scripts/`) în `/docker-entrypoint-initdb.d/` al containerului. Fișierele `.sh` sau `.sql` din acest director vor fi executate automat la prima pornire a containerului pentru a crea bazele de date (`devimarket_db`, `clickhouse_db_franceza`), tabelele (`products`, `products_fr`) și utilizatorii necesari (cu parole și permisiuni).
                *   Seta variabile de mediu pentru configurarea inițială a ClickHouse (ex: `CLICKHOUSE_USER`, `CLICKHOUSE_PASSWORD`, `CLICKHOUSE_DB` – deși crearea utilizatorilor prin scripturi de inițializare oferă mai mult control).
        *   **Container Docker pentru NGINX (Servire Frontend React):**
            *   Va utiliza un `Dockerfile` multi-stage:
                *   **Etapa 1 (Build):** Folosește o imagine `node:alpine` (sau similară) pentru a copia codul sursă al aplicației React (din folderul `/team2_react_frontend`), a rula `npm install` (sau `yarn`) și apoi `npm run build` (sau `yarn build`) pentru a genera fișierele statice de producție.
                *   **Etapa 2 (Runtime):** Folosește o imagine `nginx:stable-alpine` (sau similară, mică). Copiază fișierele de build din etapa anterioară în directorul default al NGINX (ex: `/usr/share/nginx/html`). Copiază fișierul de configurare NGINX customizat (ex: `nginx.conf`) în `/etc/nginx/conf.d/default.conf` (sau locația potrivită).
            *   Va fi configurat în `docker-compose.yml` pentru a:
                *   Construi imaginea folosind Dockerfile-ul dedicat.
                *   Mapa portul 80 (HTTP) al containerului la portul 80 (sau alt port, ex: 8080) al host-ului VM.
                *   (Opțional) Mapa portul 443 (HTTPS) al containerului la portul 443 (sau alt port) al host-ului VM, dacă se implementează HTTPS pe NGINX.
                *   (Opțional) Monta volume pentru certificatele SSL, dacă sunt gestionate separat.
        *   **Rularea Aplicațiilor MuleSoft și a Job-urilor Talend (Nativ):**
            *   Este crucial de reținut că aplicațiile MuleSoft (dezvoltate în Anypoint Studio) și job-urile Talend (dezvoltate în Talend Open Studio) vor rula **direct pe mașina virtuală Ubuntu** a studenților din Team_1. Ele **NU** vor fi containerizate în Docker în cadrul acestui proiect.
            *   Aceste aplicații native se vor conecta la serviciul ClickHouse (care rulează în Docker) folosind adresa IP a host-ului VM (sau `localhost` dacă VM-ul este host-ul Docker) și portul expus de containerul ClickHouse (ex: `localhost:8123` sau `localhost:9000`).

    **1.4.7. Documentația Tehnică Completă a Proiectului**
    *   **Livrabil Principal:** Un set comprehensiv, consolidat și de înaltă calitate de documente tehnice, integral versionate pe GitHub.
    *   **Detalii Specifice Conținut:**
        *   **Acest `README.md` (Documentul Principal al Proiectului):** Finalizat, actualizat cu toate deciziile, detaliile și rafinările apărute pe parcursul celor 4 sprinturi, reflectând cu acuratețe starea finală a proiectului și a arhitecturii.
        *   **Fișiere `SETUP_MODUL.md` pentru Fiecare Tehnologie/Modul Major:** (Așa cum au fost definite la 1.5.x și detaliate la 8.1) Acestea vor fi ghiduri complete, "la cheie", pentru oricine dorește să instaleze, configureze și să ruleze o componentă de bază a proiectului. Vor include versiuni software, comenzi exacte, capturi de ecran ilustrative și secțiuni de troubleshooting.
        *   **Comentarii Relevante și Clare în Codul Sursă:** Codul JavaScript/React, scripturile MicroPython, scripturile DataWeave (MuleSoft), și configurațiile complexe (NGINX, Docker Compose, scripturi SQL de inițializare) vor fi comentate adecvat acolo unde logica nu este trivială sau pentru a explica decizii de design importante. Comentariile trebuie să adauge valoare și înțelegere, nu să parafrazeze codul evident.
        *   **Documentație API Detaliată pentru Serviciile MuleSoft:**
            *   Specificații **RAML (0.8 sau 1.0)** complete și corecte pentru fiecare API expus de MuleSoft, generate și exportate din Anypoint Studio. Acestea vor descrie fiecare endpoint, metoda HTTP, parametrii de request (path, query, header), structura și tipurile de date ale request body-ului (dacă există), și structura, tipurile de date și exemplele pentru response body-uri (succes și eroare), precum și status code-urile HTTP posibile.
        *   **Documentație Detaliată a Job-urilor Talend:**
            *   Pentru fiecare job Talend implementat, se va furniza o descriere narativă a scopului și logicii job-ului.
            *   Capturi de ecran clare ale design-ului vizual al job-ului în Talend Open Studio, evidențiind componentele principale și fluxul de date.
            *   Explicații detaliate ale transformărilor implementate în componentele `tMap` (mapări, expresii, filtre).
            *   Configurația detaliată a componentelor cheie (ex: setările pentru `tJDBCInput/Output` pentru ClickHouse, `tRestClient`).
            *   Pași exacți pentru importarea și rularea job-ului în Talend Open Studio.
        *   **Diagrama Finală și Detaliată a Arhitecturii Sistemului:** O versiune actualizată și rafinată a diagramei arhitecturale (similară celei din Capitolul 3.2, dar reflectând starea finală), eventual creată cu un instrument de diagramare online gratuit (ex: draw.io/diagrams.net) și exportată ca imagine.
        *   **Documentația Tehnică Finală Consolidată (produsă în Sprint 4):** Un document unic (sau o serie de documente Markdown interconectate într-un folder `/docs` pe GitHub) care integrează și sintetizează toate informațiile relevante de mai sus. Acesta va oferi o privire de ansamblu asupra proiectului și va aprofunda aspectele cheie:
            *   Introducere și Scop.
            *   Arhitectura Tehnică Finală (cu diagrama și justificări).
            *   Descrierea Detaliată a Implementării Fiecărui Modul (Frontend, API-uri MuleSoft, Job-uri Talend, Sistem RPi Pico, Infrastructură Docker/NGINX, Bază de Date ClickHouse).
            *   Decizii de Design Importante Luate pe Parcurs și Justificarea Lor.
            *   Provocări Majore Întâmpinate de Fiecare Echipă și Soluțiile Tehnice Adoptate.
            *   Instrucțiuni Complete de Build, Deploy (Local) și Testare a Întregului MVP.
            *   Concluzii Generale și Lecții Învățate (atât tehnice, cât și legate de procesul de lucru și colaborare).

**1.5. Obiectivele Detaliate de Învățare pentru Studenți (Ghidate de Interesele Individuale)**

Acest proiect este conceput ca o platformă de învățare intensivă și aplicată, unde fiecare student are oportunitatea de a-și explora și aprofunda interesele tehnice declarate, contribuind în același timp la un obiectiv comun. Obiectivele de învățare sunt structurate atât la nivel general (competențe transversale, esențiale pentru orice rol în IT), cât și specific, pe tehnologiile și modulele la care fiecare echipă/student va lucra.

    **1.5.1. Competențe Transversale Esențiale (Dezvoltate de Toți Studenții)**
    Indiferent de alocarea specifică pe tehnologii, toți studenții vor trebui să demonstreze progres și să își dezvolte în mod activ următoarele competențe fundamentale, extrem de valoroase în orice mediu profesional IT:
    *   **Adaptarea la și Aplicarea Principiilor Metodologiei Agile (Simulată):**
        *   Înțelegerea conceptelor de bază Agile: dezvoltare iterativă și incrementală, sprinturi, roluri (Product Owner simulat de Tutore, Scrum Master simulat de Tutore/AI, Echipă de Dezvoltare).
        *   Participarea activă și productivă la toate ceremoniile Agile definite pentru proiect: Sprint Planning (înțelegerea cerințelor, descompunerea task-urilor), Daily Stand-up (comunicarea progresului și a blocajelor), Sprint Review (demonstrarea funcționalităților completate), Sprint Retrospective (reflecție și îmbunătățire continuă).
        *   Dezvoltarea flexibilității și adaptabilității la schimbări minore de cerințe sau la provocări tehnice neașteptate care pot apărea pe parcursul unui sprint.
    *   **Managementul Eficient și Transparent al Task-urilor cu Jira:**
        *   Înțelegerea modului de funcționare a board-ului Agile (Kanban/Scrum) din Jira.
        *   Abilitatea de a prelua task-uri (User Stories, Task-uri Tehnice, Bug-uri) din backlog-ul de sprint.
        *   Actualizarea zilnică, corectă și detaliată a statusului task-urilor alocate (mutarea acestora între coloanele board-ului: To Do, In Progress, In Review, Done).
        *   Adăugarea de comentarii relevante și la timp în tichetele Jira, pentru a documenta progresul, deciziile luate, blocajele întâmpinate, soluțiile găsite sau întrebările de clarificare.
        *   Estimarea efortului pentru task-uri (dacă se implementează această practică) și urmărirea timpului lucrat (dacă se dorește).
        *   Atașarea de artefacte relevante la tichete (ex: capturi de ecran, fișiere de log, link-uri către PR-uri).
    *   **Versionarea Profesională și Colaborativă a Codului cu Git & GitHub:**
        *   Stăpânirea unui flux de lucru Git robust și disciplinat:
            *   Crearea de feature branches descriptive și dedicate pentru fiecare task Jira (ex: `feature/DMZ-123-nume-feature`).
            *   Realizarea de commit-uri atomice (mici, logice) și frecvente, cu mesaje de commit clare, descriptive și respectând formatul Conventional Commits (detaliat în Capitolul 6.2.4).
            *   Utilizarea comenzilor Git esențiale: `git clone`, `git status`, `git add .`, `git commit -m "mesaj"`, `git push origin nume_branch`, `git pull origin develop`, `git fetch`, `git branch`, `git checkout nume_branch`.
            *   Înțelegerea și aplicarea corectă a operațiunilor de `git merge` (cu `develop` în feature branch pentru actualizare) sau `git rebase` (dacă este strategia agreată și explicată de Tutore).
        *   Crearea și gestionarea Pull Request-urilor (PRs) pe GitHub:
            *   Redactarea unor descrieri de PR complete și informative (link către Jira, sumarul modificărilor, pași de testare, decizii de design, probleme cunoscute).
            *   Adăugarea Tutorelui și a peer reviewer-ilor relevanți la PR.
        *   Participarea activă, constructivă și respectuoasă la procesul de Code Review:
            *   Ca autor al PR-ului: Răspuns prompt la comentarii, integrarea feedback-ului primit, menținerea unei comunicări clare cu reviewerii.
            *   Ca reviewer: Analiza atentă a codului, oferirea de feedback specific, argumentat și orientat spre îmbunătățirea calității, respectând standardele de codare și bunele practici.
    *   **Comunicare Tehnică Eficientă, Clară și Asertivă:**
        *   Abilitatea de a articula probleme tehnice complexe într-un mod simplu, structurat și ușor de înțeles pentru colegi și pentru Tutore.
        *   Formularea de întrebări clare, specifice și bine documentate (ex: "Am încercat X și Y, mă așteptam la Z, dar am obținut A. Iată mesajul de eroare/log-ul relevant. Ce aș putea investiga mai departe?").
        *   Documentarea scrisă, precisă și la obiect, a muncii realizate (în comentariile din cod, în descrierile task-urilor Jira, în fișierele `SETUP_MODUL.md` și în contribuțiile la documentația finală a proiectului).
        *   Dezvoltarea abilităților de prezentare a rezultatelor tehnice și a procesului de lucru într-un mod profesionist și captivant (în special pentru Sprint Reviews și prezentarea finală).
        *   Menținerea unei comunicări inter-personale bazate pe respect, deschidere, ascultare activă și feedback constructiv.
    *   **Dezvoltarea unei Abordări Metodice și Analitice în Rezolvarea Problemelor (Debugging):**
        *   Cultivarea unei mentalități de problem-solver: abordarea erorilor și a provocărilor tehnice nu ca pe niște obstacole, ci ca pe oportunități de învățare și de aprofundare a înțelegerii sistemului.
        *   Aplicarea unor tehnici de debugging sistematice:
            *   Citirea și interpretarea corectă a mesajelor de eroare complete și a stack trace-urilor.
            *   Analiza detaliată a fișierelor de log generate de aplicații (MuleSoft, Talend, ClickHouse, NGINX) și de sistemul de operare.
            *   Utilizarea uneltelor de debugging specifice fiecărei tehnologii (ex: debugger-ul vizual din Anypoint Studio pentru fluxuri Mule, debugger-ul din Talend Studio pentru job-uri, React Developer Tools și consola browser-ului pentru Frontend, `print()`-uri strategice și REPL pentru MicroPython).
            *   Testarea incrementală: izolarea porțiunilor de cod sau a componentelor problematice și testarea lor individuală.
            *   Formularea de ipoteze despre cauza problemei și verificarea lor sistematică.
            *   Căutarea eficientă și critică a soluțiilor online (Stack Overflow, forumuri oficiale, documentație), adaptând soluțiile găsite la contextul specific al proiectului.
    *   **Capacitatea de a Produce Documentație Tehnică de Calitate:**
        *   Înțelegerea importanței documentației ca parte integrală a procesului de dezvoltare software.
        *   Abilitatea de a scrie documentație tehnică (fișiere `SETUP_MODUL.md`, comentarii în cod, specificații API, descrieri de job-uri ETL, contribuții la documentația finală a proiectului) care este:
            *   **Clară:** Ușor de citit și de înțeles, chiar și pentru cineva mai puțin familiarizat cu modulul respectiv.
            *   **Concisă:** Merge direct la subiect, fără informații redundante.
            *   **Corectă:** Reflectă cu acuratețe implementarea tehnică.
            *   **Completă:** Include toți pașii și informațiile necesare pentru a înțelege, configura, rula sau utiliza componenta documentată.
            *   **Utilă:** Oferă valoare reală celorlalți membri ai echipei și potențialilor utilizatori/dezvoltatori viitori.
        *   Utilizarea corectă și consistentă a formatului Markdown pentru documentația scrisă.
    *   **Dezvoltarea Abilităților de Lucru în Echipă și Colaborare Inter-Disciplinară:**
        *   Coordonarea eficientă a eforturilor cu membrii altor echipe, în special la punctele de integrare între module (ex: Team_2 consumând API-urile create de Team_1; Team_9 apelând API-ul Team_1; Team_1 și Team_7 colaborând la schema și setup-ul ClickHouse).
        *   Oferirea și solicitarea de ajutor în mod proactiv și constructiv.
        *   Gestionarea matură și profesionistă a dependențelor între task-urile diferiților membri și a eventualelor întârzieri.
        *   Împărtășirea activă a cunoștințelor, a bunelor practici descoperite și a soluțiilor la probleme comune pentru a ridica nivelul întregii echipe.

    **1.5.2. Competențe Specifice Detaliate pentru Team_1 (MuleSoft API Development & Logic, Talend ETL, ClickHouse Interaction Avansată, Concepte de Integrare)**
    *Studenții din Team_1 (Coman Raluca, Cotan Petruta, Necoara Aida Florentina) au o misiune complexă și extrem de relevantă pentru interesele lor de "automatizare" și integrare. Ei vor construi și gestiona platforma centrală de API-uri și principalele fluxuri de date ale proiectului.*
    *   **MuleSoft Anypoint Studio și Mule Runtime (Obiectiv Principal și Critic):**
        *   **Stăpânirea Mediului Anypoint Studio:** Instalarea corectă, configurarea workspace-ului, navigarea fluentă în interfață (Package Explorer, Mule Palette, Canvas, Global Elements, Console, Problems View, Debug Perspective). Înțelegerea structurii unui proiect Mule și a unui domeniu Mule (deși nu vom folosi domenii complexe în MVP). Rularea și oprirea aplicațiilor Mule pe runtime-ul local embedat.
        *   **Design și Implementare API-uri RESTful "API-first" cu RAML și APIkit:**
            *   Definirea contractelor API complete și corecte folosind RAML (versiunea 1.0): resurse (ex: `/products`, `/scanner/product_scan`), metode HTTP (GET, POST), tipuri de date (schemas JSON pentru request și response bodies), exemple de payload-uri.
            *   Utilizarea APIkit pentru a genera automat scheletul de fluxuri Mule din specificația RAML și pentru a valida request-urile primite față de contractul RAML.
            *   Implementarea logicii specifice pentru fiecare resursă și metodă în fluxurile Mule generate.
        *   **Utilizarea Avansată a Componentelor (Conectori și Procesoare) Mule Esențiale:**
            *   `HTTP Listener`: Configurarea detaliată pentru a expune endpoint-uri HTTP și HTTPS. Pentru HTTPS, generarea unui keystore (JKS) cu o pereche cheie/certificat self-signed (folosind `keytool` din JDK) și configurarea corectă a TLS Context pe listener. Definirea căilor (paths) și a metodelor permise.
            *   `HTTP Request`: Configurarea pentru a apela API-uri externe (API-ul public de produse), incluzând setarea metodei, URL-ului, header-elor, parametrilor de query și, opțional, a unui request body. Gestionarea răspunsurilor (status code, payload, headere) și a timeout-urilor.
            *   `Database Connector` (configurat pentru ClickHouse):
                *   Adăugarea driverului JDBC pentru ClickHouse ca dependență în proiectul Mule (`pom.xml` dacă se folosește structura Maven, sau manual în build path).
                *   Configurarea globală a conexiunii la ClickHouse (JDBC URL specific pentru ClickHouse, user, password, alte proprietăți de conexiune). Testarea conexiunii.
                *   Utilizarea operațiunilor din conector pentru a executa query-uri SQL parametrizate: `Select`, `Insert`, `Update` (folosind `ALTER TABLE ... UPDATE` pentru ClickHouse), `Bulk update/insert` (dacă este relevant și simplu de implementat).
                *   Maparea corectă a input-urilor (parametrii pentru query) și output-urilor (rezultatele query-ului) către/din variabilele și payload-ul mesajului Mule.
            *   `Transform Message (DataWeave)`: **Competență Critică și Centrală.**
                *   Scrierea de scripturi DataWeave 2.x complexe și eficiente pentru: maparea între diferite structuri JSON (ex: de la API-ul extern la structura internă `products`), transformarea tipurilor de date (string to number, string to date), manipularea array-urilor (map, filter, reduce), manipularea obiectelor, construcția dinamică de payload-uri JSON pentru request-uri și response-uri.
                *   Utilizarea funcțiilor built-in DataWeave (din modulele `dw::Core`, `dw::JSON`, `dw:: स्थानीय`, `dw:: समय`).
                *   Definirea și utilizarea de funcții DataWeave custom (`fun`) pentru a modulariza logica de transformare și a o reutiliza.
                *   Înțelegerea contextului DataWeave (payload, attributes, vars) și a modului de referențiere a datelor.
                *   Formatarea output-ului (ex: `output application/json --- payload`).
            *   Componente de Rutare și Flux de Control Avansat:
                *   `Choice Router`: Implementarea logicii condiționale (if/then/else) bazată pe valorile din mesajul Mule (payload, atribute, variabile).
                *   `For Each Scope`: Iterarea prin colecții de date (ex: lista de produse de la API-ul extern) pentru a procesa fiecare element individual.
                *   `Flow Reference`: Apelarea altor fluxuri (private flows) pentru a modulariza logica și a promova reutilizarea.
                *   (Opțional) `Scatter-Gather`: Pentru a executa mai multe rute în paralel și a agrega rezultatele (la nivel conceptual).
            *   `Set Variable` și `Set Payload`: Pentru a manipula și stoca date intermediare în cadrul fluxului.
            *   `Logger`: Utilizarea extensivă și strategică pentru a loga informații critice în fiecare etapă a fluxului: payload-ul primit, variabilele importante, rezultatele transformărilor, query-urile SQL executate (fără date sensibile), răspunsurile de la DB sau API-uri externe. Setarea nivelelor de log (INFO, DEBUG).
            *   `Error Handling` (Robust):
                *   Implementarea de strategii de gestionare a erorilor la nivel de flux și la nivel global (aplicație): `On Error Continue` (pentru a loga eroarea și a continua cu un răspuns customizat) și `On Error Propagate` (pentru a propaga eroarea către apelant sau un error handler superior).
                *   Utilizarea blocurilor `Try Scope` pentru a izola operațiunile care pot eșua și a le trata specific.
                *   Maparea tipurilor de erori (ex: `DB:CONNECTIVITY`, `HTTP:TIMEOUT`, `APIKIT:BAD_REQUEST`) la răspunsuri de eroare HTTP corespunzătoare și body-uri JSON standardizate.
        *   **Securizarea API-urilor (Nivel de Bază pentru MVP):**
            *   Pentru API-ul destinat scannerului, implementarea HTTPS cu certificate self-signed este obligatorie.
            *   (Opțional, dacă timpul permite) Explorarea aplicării unei politici simple prin API Manager (dacă se folosește un trial Anypoint Platform sau o componentă locală) sau direct în fluxul Mule, cum ar fi "Client ID Enforcement" (verificarea unui header `X-Client-ID` și `X-Client-Secret` simplu, hardcodat pentru testare).
        *   **Testare și Depanare Aplicații Mule:**
            *   Rularea și testarea frecventă a aplicațiilor Mule local din Anypoint Studio.
            *   Utilizarea intensivă a debugger-ului vizual din Anypoint Studio: setarea de breakpoint-uri, parcurgerea execuției fluxurilor pas cu pas (step over, step into), inspectarea conținutului complet al mesajului Mule (payload, attributes, variables) în fiecare punct.
            *   (Opțional, dar foarte recomandat dacă timpul permite) Scrierea de teste unitare de bază cu MUnit pentru fluxurile critice și pentru scripturile DataWeave complexe. Aceasta implică crearea de MUnit test suites, mock-uirea conectorilor externi (`Mock when` processor), setarea de input-uri de test și validarea output-urilor (`Assert that` processor).
    *   **Talend Open Studio for Data Integration (Obiectiv Principal):**
        *   **Stăpânirea Mediului Talend Open Studio:** Instalarea, configurarea workspace-ului, navigarea fluentă în interfața grafică (Repository, Job Designer, Palette, Outline, Problems View, Run Console). Înțelegerea conceptului de Proiect Talend și a structurii sale.
        *   **Design și Implementare Job-uri ETL Vizuale și Robuste:**
            *   **Conectivitate Avansată cu Baze de Date (ClickHouse):**
                *   Descărcarea și instalarea corectă a driverului JDBC pentru ClickHouse în paleta Talend (prin `Modules` view sau configurare manuală).
                *   Crearea și gestionarea conexiunilor la ClickHouse în secțiunea "Metadata" > "Db Connections" din Repository. Configurarea tuturor parametrilor JDBC (URL, user, password, driver class, driver jar path). Testarea conexiunii.
                *   Utilizarea componentelor `tJDBCInput` și `tDBOutput` (sau `tJDBCOutput`, `tJDBCRow` dacă e mai potrivit pentru operațiuni specifice) pentru a interacționa cu ClickHouse, refolosind conexiunile definite în Repository.
                *   Scrierea de query-uri SQL complexe și parametrizate direct în proprietățile componentelor de input (pentru `SELECT`) sau output (pentru `INSERT`, `UPDATE`, `DELETE` – deși update/delete în ClickHouse sunt mai specifice).
                *   Definirea și propagarea schemelor de date (Metadata) între componente, fie "Built-In" pentru simplitate inițială, fie, preferabil, definite central în Repository pentru reutilizare și consistență.
            *   **Citirea Datelor din Fișiere (CSV):** Utilizarea avansată a `tFileInputDelimited`: gestionarea diferitelor delimitatoare, encodări de caractere, prezența/absența header-ului, parsarea datelor numerice și a datelor calendaristice (cu specificarea formatelor).
            *   **Transformări de Date Complexe și Logica de Business în `tMap`:** **Competență Critică și Centrală.**
                *   Realizarea de join-uri între multiple fluxuri de input (ex: inner join, left outer join) bazate pe chei comune.
                *   Aplicarea de filtre complexe pe datele de input și output folosind expresii Java.
                *   Utilizarea extensivă a variabilelor interne `tMap` (`Var`) pentru a stoca rezultate intermediare ale calculelor sau transformărilor și pentru a îmbunătăți lizibilitatea și performanța.
                *   Scrierea de expresii Java direct în câmpurile de mapare pentru a implementa logică de transformare customizată (ex: concatenare string-uri, calcule matematice, manipulare date calendaristice folosind `TalendDate` routines, condiții `if-else` ternare).
                *   Utilizarea funcțiilor built-in Talend (din secțiunea `TalendFunction`, `StringHandling`, `Numeric`, etc.).
                *   Crearea de output-uri multiple din `tMap` pentru a direcționa diferite seturi de date (ex: rânduri valide, rânduri respinse pe baza unor criterii, rânduri pentru insert vs. update).
            *   **Orchestrarea Avansată a Fluxurilor și a Job-urilor:**
                *   Utilizarea componentelor de flux de control: `tFlowToIterate` (pentru a procesa fiecare rând dintr-un flux în mod iterativ), `tLoop` (pentru bucle fixe sau condiționale).
                *   Utilizarea legăturilor de orchestrare între subjob-uri: `OnSubjobOk`, `OnSubjobError`, `Run if`.
                *   Utilizarea componentei `tRunJob` pentru a apela alte job-uri Talend (sub-job-uri), permițând modularizarea și reutilizarea logicii ETL. Pasarea de variabile de context către sub-job-uri.
            *   **Consumul Eficient de API-uri REST (cele expuse de MuleSoft):**
                *   Configurarea avansată a `tRestClient`: setarea timeout-urilor, gestionarea autentificării (dacă API-ul MuleSoft ar necesita, ex: Basic Auth sau API Key în header), configurarea proxy-ului (dacă VM-ul e într-o rețea cu proxy).
                *   Procesarea robustă a răspunsurilor JSON, inclusiv gestionarea array-urilor de obiecte, folosind `tExtractJSONFields` cu expresii JSONPath corecte.
            *   **Gestionarea Parametrizată a Job-urilor cu Variabile de Context:**
                *   Definirea de grupuri de contexte (ex: DEV, TEST, PROD – deși noi vom avea doar DEV).
                *   Utilizarea extensivă a variabilelor de context pentru toți parametrii care se pot schimba (căi către fișiere, URL-uri API, credențiale de conectare la DB, nume de tabele, etc.). Încărcarea contextelor din fișiere externe (opțional, dar bună practică).
            *   **Implementarea unui Logging Detaliat și a unei Gestionări Robuste a Erorilor:**
                *   Utilizarea `tLogRow` în puncte cheie pentru a vizualiza datele și a depana.
                *   Configurarea componentelor pentru a utiliza legăturile "Rejects" (ex: din `tMap`, `tDBOutput`, `tExtractJSONFields`) pentru a captura rândurile care generează erori.
                *   Direcționarea rândurilor respinse și a mesajelor de eroare către fișiere de log separate (folosind `tFileOutputDelimited`) sau către un tabel de log în ClickHouse (folosind `tDBOutput`).
                *   Utilizarea componentelor `tDie` și `tWarn` pentru a opri job-ul în caz de erori critice sau pentru a emite avertismente.
        *   **Testare și Depanare Job-uri Talend:**
            *   Rularea job-urilor în modul de execuție și în modul de debug din Talend Open Studio.
            *   Utilizarea funcționalității de "data viewer" (click dreapta pe o legătură) pentru a inspecta datele care trec între componente.
            *   Analiza log-urilor din consola Talend și a fișierelor de log generate.
    *   **ClickHouse (Interacțiune Avansată și Optimizare de Bază din perspectiva ETL):**
        *   Contribuția activă și informată la designul final și la optimizarea (la nivel de bază) a schemei tabelului `devimarket_db.products` și a tabelului simulat `clickhouse_db_franceza.products_fr` pentru a facilita procesele ETL (ex: alegerea corectă a tipurilor de date, definirea indecșilor potriviți pentru filtrele utilizate în ETL).
        *   Scrierea și testarea scripturilor SQL pentru crearea acestor tabele (DDL), inclusiv definirea engine-ului (`MergeTree`), a cheii primare/de sortare (`ORDER BY`), și a indecșilor secundari (`INDEX`).
        *   Înțelegerea modului de funcționare a operațiunilor `INSERT` și `ALTER TABLE ... UPDATE/DELETE` în ClickHouse și cum pot fi acestea apelate eficient din MuleSoft și Talend.
        *   (Opțional) Utilizarea clientului `clickhouse-client` pentru a rula query-uri ad-hoc, a inspecta datele și a depana problemele legate de DB.
    *   **Concepte Fundamentale și Avansate de Integrare a Datelor și Aplicațiilor:**
        *   Stăpânirea practică a întregului ciclu ETL (Extract, Transform, Load) și ELT.
        *   Înțelegerea pattern-urilor de integrare API (ex: API Façade, API Proxy) și a rolului MuleSoft în implementarea acestora conform principiilor API-led Connectivity (System APIs, Process APIs, Experience APIs – la nivel conceptual).
        *   Concepte de Data Warehousing și Data Migration (prin job-ul Talend de migrare).
        *   Principii de Data Quality: implementarea de validări și reguli de curățare a datelor în fluxurile MuleSoft și job-urile Talend.
        *   Orchestrarea complexă a serviciilor și a fluxurilor de date, gestionarea dependențelor și a tranzacțiilor (la nivel de bază).

    **1.5.3. Competențe Specifice Detaliate pentru Team_2 (React, HTML/CSS/JS, Consum API-uri MuleSoft, MetaMask)**
    *Studenții din Team_2 (Tuca Dragos Andrei, Proaspatu Nicolae Bogdan) se vor concentra pe crearea unei experiențe utilizator (UI/UX) moderne, interactive și funcționale pentru marketplace, consumând API-urile robuste și bine definite expuse de Team_1 (MuleSoft).*
    *   **React (Obiectiv Principal și Critic):**
        *   **Setup Profesional și Fundamente Avansate Proiect React cu Vite:** Crearea unui nou proiect React (preferabil cu **TypeScript** pentru type safety și o experiență de dezvoltare îmbunătățită: `npm create vite@latest devi-market-frontend -- --template react-ts`). Înțelegerea aprofundată a structurii de foldere recomandate pentru o aplicație React scalabilă (ex: împărțirea în `features` sau `modules`, pe lângă `components`, `pages`, `hooks`, `services`, `utils`, `types`). JSX (JavaScript XML) avansat, props destructuring, default props.
        *   **State Management Avansat cu Hook-uri React și (Opțional) Biblioteci Dedicate:**
            *   Utilizarea expertă a hook-urilor `useState` și `useReducer` (pentru stări locale mai complexe) pentru gestionarea stării componentelor.
            *   Stăpânirea hook-ului `useEffect` pentru gestionarea efectelor secundare: fetch-uirea datelor de la API-urile MuleSoft la montarea și actualizarea componentelor, gestionarea dependențelor `useEffect` pentru a evita rulări inutile, curățarea efectelor (cleanup functions).
            *   Crearea și utilizarea de **Hook-uri Custom** (ex: `useFetchProducts`, `useMetaMask`) pentru a encapsula și reutiliza logica de stare și efecte secundare complexă.
            *   (Opțional, dar foarte recomandat pentru o aplicație de această complexitate, dacă timpul permite și există interes) Introducere și implementare a unei biblioteci simple și moderne de state management global, precum **Zustand** sau **Jotai**, pentru a gestiona starea partajată între componente (ex: starea de autentificare MetaMask, lista de produse filtrată/sortată). Alternativ, se poate explora `Context API` cu `useReducer` pentru o soluție React nativă, dar poate deveni verbos. (Redux Toolkit este o opțiune puternică, dar poate fi prea complexă pentru introducere în acest proiect).
        *   **Rutare Client-Side Avansată cu React Router DOM v6:**
            *   Definirea ierarhică a rutelor (nested routes). Protejarea rutelor (Protected Routes) dacă s-ar implementa o formă de autentificare (dincolo de MetaMask, nu e în scop, dar conceptul e bun).
            *   Utilizarea avansată a hook-urilor `useNavigate` (pentru navigare programatică cu opțiuni), `useParams`, `useLocation`, `useSearchParams` (pentru a citi și manipula parametrii de query din URL, ex: pentru filtre și sortare).
            *   Implementarea unei pagini "Not Found" (404) elegante.
        *   **Gestionarea Formulalelor (dacă se implementează căutare/filtrare):**
            *   Utilizarea stării React pentru a controla input-urile formularului (controlled components).
            *   Validarea de bază a input-urilor pe client-side.
            *   Gestionarea evenimentului de submit al formularului și construirea parametrilor de query pentru API-urile MuleSoft.
        *   **Consumul Robust și Eficient al API-urilor REST expuse de MuleSoft:**
            *   Utilizarea **Axios** și crearea unei instanțe Axios configurate (cu `baseURL` pentru API-urile MuleSoft, timeout-uri, eventual interceptori pentru logging sau error handling global).
            *   Structurarea codului de interacțiune cu API-urile într-un folder/modul dedicat de "servicii" (ex: `src/services/productService.ts`), cu funcții asincrone (folosind `async/await`) pentru fiecare endpoint MuleSoft.
            *   Trimiterea corectă a parametrilor de query (pentru paginare, filtrare, sortare) către API-urile MuleSoft.
            *   Procesarea detaliată a răspunsurilor JSON de la API-urile MuleSoft (inclusiv metadata de paginare) și actualizarea corespunzătoare a stării componentelor React.
            *   Implementarea unei strategii comprehensive de **gestionare a erorilor** de la API: afișarea de mesaje de eroare specifice și prietenoase utilizatorului, posibilitatea de reîncercare a request-ului (opțional).
            *   Gestionarea stărilor de încărcare (`loading`) pentru fiecare apel API, oferind feedback vizual utilizatorului (ex: skeleton screens, spinners).
        *   **Crearea de Componente React Reutilizabile, Flexibile și Accesibile:**
            *   Proiectarea și implementarea unui set de componente UI generice și customizabile (ex: `ProductCard`, `Button`, `Spinner`, `PaginationControl`, `SearchBar`, `FilterDropdown`) care respectă principiile de design atomic (dacă se dorește explorarea).
            *   Asigurarea accesibilității componentelor (WCAG AA la nivel de bază), folosind atribute ARIA corespunzătoare și HTML semantic.
        *   **Styling Avansat și Consistent cu Tailwind CSS:**
            *   Utilizarea expertă a claselor utilitare Tailwind CSS pentru a construi interfețe complexe și responsive.
            *   Customizarea configurației Tailwind (`tailwind.config.js`) pentru a adăuga culori, fonturi sau spacing-uri specifice proiectului, dacă este necesar.
            *   Înțelegerea conceptelor de "dark mode" (opțional, dacă e timp).
        *   **Optimizare Performanță Frontend (Nivel de Bază):**
            *   Utilizarea `React.memo` pentru a preveni re-randările inutile ale componentelor.
            *   (Opțional) `useCallback` și `useMemo` pentru a memora funcții și valori.
            *   Code splitting la nivel de rută cu `React.lazy` și `Suspense` (opțional, dacă aplicația devine mare).
        *   **Debugging Avansat al Aplicațiilor React:**
            *   Utilizarea fluentă a React Developer Tools pentru a inspecta ierarhia componentelor, props-urile, starea și hook-urile.
            *   Profilarea performanței componentelor React.
            *   Utilizarea avansată a consolei browser-ului și a debugger-ului JavaScript.
    *   **HTML5 și CSS3 (în contextul Tailwind și React):**
        *   Scrierea de JSX care se traduce în HTML semantic, structurat corect și accesibil.
        *   Înțelegerea profundă a modului în care Tailwind CSS funcționează (JIT compiler) și cum se pot extinde sau suprascrie stilurile dacă este absolut necesar, fără a compromite abordarea utility-first.
    *   **JavaScript Modern (ES6+) / TypeScript (Recomandat):**
        *   Utilizarea fluentă a tuturor caracteristicilor ES6+ (clase - deși se preferă funcțiile în React modern, module, spread/rest operators, etc.).
        *   Dacă se folosește TypeScript: definirea de interfețe și tipuri pentru props, state, răspunsurile API; utilizarea genericelor; înțelegerea beneficiilor type checking-ului static.
    *   **Integrarea Detaliată cu Portofelul MetaMask:**
        *   Gestionarea întregului ciclu de viață al conexiunii cu MetaMask: detectare, solicitare conectare, gestionare aprobare/respingere, preluare conturi, afișare adresă.
        *   (Opțional, dacă timpul permite) Ascultarea evenimentelor emise de `window.ethereum` (ex: `accountsChanged`, `chainChanged`, `disconnect`) și actualizarea UI-ului în consecință.
        *   Afișarea de mesaje de eroare clare dacă MetaMask nu este instalat sau dacă apar probleme la conectare.

    **1.5.4. Competențe Specifice Detaliate pentru Team_7 (Docker, Docker Compose, NGINX, Networking, ClickHouse Setup)**
    *Studenții din Team_7 (Chesnoiu Andrei Bogdan, Ghetau Cristian Marian, cu Culesca Teodora Maria având rol de QA) sunt responsabili pentru crearea și menținerea unei infrastructuri locale robuste, sigure și eficiente, pe care vor rula componentele containerizabile ale proiectului. Interesele lor în Infrastructură, Networking și DevOps vor fi direct aplicate.*
    *   **Docker (Obiectiv Principal și Critic):**
        *   **Scrierea de Dockerfile-uri Profesionale și Optimizate:**
            *   Pentru **ClickHouse**: Pornind de la imaginea oficială `clickhouse/clickhouse-server` (o versiune stabilă, ex: `latest` sau o versiune specifică testată), se va crea un Dockerfile (sau se vor folosi direct opțiuni în `docker-compose.yml`) care:
                *   Permite montarea de scripturi de inițializare SQL (ex: în format `.sh` care apelează `clickhouse-client`, sau direct fișiere `.sql`) în directorul `/docker-entrypoint-initdb.d/`. Aceste scripturi vor fi responsabile pentru crearea automată a bazelor de date (`devimarket_db`, `clickhouse_db_franceza`), a tabelelor (`products`, `products_fr` cu schema corectă) și a utilizatorilor specifici (ex: `mule_user`, `talend_user` cu parole și permisiuni granulare) la prima pornire a containerului, dacă acestea nu există deja.
                *   Permite configurarea variabilelor de mediu pentru setările de bază ale ClickHouse (ex: `CLICKHOUSE_DEFAULT_USER`, `CLICKHOUSE_DEFAULT_PASSWORD` – deși se preferă crearea de useri specifici prin scripturi).
            *   Pentru **NGINX (Servire Frontend React)**: Crearea unui Dockerfile **multi-stage** optimizat:
                *   **Etapa 1 (Build Stage):** Folosește o imagine oficială Node.js (ex: `node:18-alpine` sau `node:20-alpine`) ca bază. Setează directorul de lucru. Copiază `package.json` și `package-lock.json` (sau `yarn.lock`). Rulează `npm install` (sau `yarn install`) pentru a instala dependențele (beneficiind de Docker layer caching). Apoi copiază restul codului sursă al aplicației React. Rulează comanda de build (`npm run build` sau `yarn build`) pentru a genera fișierele statice de producție într-un director (ex: `/app/dist` sau `/app/build`).
                *   **Etapa 2 (Runtime Stage):** Folosește o imagine NGINX oficială, foarte mică și securizată (ex: `nginx:stable-alpine-slim`). Copiază fișierele de build statice din etapa anterioară (folosind `COPY --from=build-stage /app/dist /usr/share/nginx/html`). Copiază fișierul de configurare NGINX customizat (ex: `nginx.conf` sau `default.conf`) în locația corectă din containerul NGINX (ex: `/etc/nginx/conf.d/default.conf`). Expune portul necesar (ex: 80). Setează comanda de pornire NGINX.
        *   **Înțelegerea și Aplicarea Bunelor Practici Docker:** Minimizarea numărului de layer-e, utilizarea cache-ului de build Docker, curățarea artefactelor intermediare, rularea proceselor ca utilizator non-root în container (pentru NGINX, imaginea oficială face asta adesea default; pentru ClickHouse, se va verifica).
        *   **Management Avansat Imagini și Containere:** Pe lângă comenzile de bază, utilizarea `docker image inspect`, `docker container inspect`, `docker network ls/create/rm/inspect`, `docker volume ls/create/rm/inspect`. Înțelegerea diferenței dintre imagini, containere, volume și rețele.
    *   **Docker Compose (Obiectiv Principal și Critic):**
        *   **Scrierea unui fișier `docker-compose.yml` Complet, Modular și Robust:**
            *   Definirea clară a serviciilor: `clickhouse-server` și `nginx-frontend`.
            *   Pentru fiecare serviciu:
                *   Specificarea `build: context: ./calea/catre/dockerfile_dir` (dacă se construiește local) sau `image: nume_imagine:tag` (dacă se folosește o imagine pre-construită).
                *   Configurarea detaliată a `ports` pentru a mapa porturile containerelor pe porturile accesibile de pe host-ul VM (ex: ` "8123:8123" `, ` "9000:9000" ` pentru ClickHouse; ` "80:80" `, ` "443:443" ` pentru NGINX – sau alte porturi pe host dacă cele default sunt ocupate).
                *   Definirea și utilizarea de `volumes` numite pentru persistența datelor ClickHouse (ex: `devimarket_clickhouse_data:/var/lib/clickhouse/`) și bind mounts pentru scripturile de inițializare ClickHouse și pentru fișierele de configurare NGINX (ex: `./nginx_config/nginx.conf:/etc/nginx/nginx.conf:ro` – `:ro` pentru read-only dacă configurația nu se schimbă la runtime).
                *   Crearea și asignarea containerelor la o **rețea Docker custom** (ex: `devimarket-net`, de tip `bridge`) pentru a permite comunicarea între ele folosind numele serviciilor ca hostname-uri și pentru o mai bună izolare.
                *   Setarea de `environment` variables pentru containere (ex: pentru a pasa parolele către scripturile de inițializare ClickHouse, sau pentru a configura NGINX). Se va explora utilizarea unui fișier `.env` la rădăcina proiectului Docker Compose pentru a gestiona aceste variabile (fișierul `.env` fiind în `.gitignore`).
                *   Utilizarea `depends_on` pentru a specifica ordinea de pornire a serviciilor (ex: NGINX ar putea depinde de existența unui build React, deși în acest caz NGINX servește fișiere, nu depinde de un alt serviciu la pornire).
                *   (Opțional) Adăugarea de `healthcheck`-uri pentru servicii (în special pentru ClickHouse) pentru a se asigura că sunt funcționale înainte ca alte servicii (MuleSoft, Talend rulate nativ) să încerce să se conecteze.
        *   **Managementul Avansat al Stack-ului de Aplicații Docker Compose:** Utilizarea fluentă a comenzilor `docker-compose up -d --build --remove-orphans`, `docker-compose down -v` (pentru a șterge și volumele), `docker-compose logs -f --tail="50" [service_name]`, `docker-compose ps`, `docker-compose config` (pentru a valida fișierul YAML), `docker-compose exec [service_name] [command]` (ex: `docker-compose exec clickhouse-server clickhouse-client -u user -p pass --database devimarket_db`).
    *   **NGINX (Configurare Detaliată pentru Servire Frontend și HTTPS Local):**
        *   **Fișier de Configurare NGINX Principal (ex: `default.conf` montat în `/etc/nginx/conf.d/`):**
            *   Definirea unui bloc `server` care ascultă pe portul 80 (HTTP).
            *   Definirea unui al doilea bloc `server` care ascultă pe portul 443 (HTTPS) `ssl http2`.
            *   Setarea `server_name` (ex: `devimarket.local www.devimarket.local` – pentru a putea accesa prin aceste nume dacă sunt definite în `/etc/hosts`).
            *   Setarea `root` la calea din container unde se află fișierele statice ale build-ului React (ex: `/usr/share/nginx/html`).
            *   Setarea `index index.html index.htm;`.
            *   Configurarea blocului `location /` pentru a servi fișierele statice și a implementa corect rutarea pe client pentru React Router (single page application) folosind directiva `try_files $uri $uri/ /index.html;`.
            *   **Configurarea HTTPS cu Certificate Self-Signed (Obligatoriu pentru învățare):**
                1.  Generarea unei perechi cheie privată (ex: `devimarket.key`) și a unui certificat auto-semnat (X.509) (ex: `devimarket.crt`) folosind utilitarul `openssl` pe VM-ul Ubuntu. Certificatul va fi pentru domeniul local (ex: `devimarket.local`). Se vor documenta pașii de generare.
                2.  Montarea acestor fișiere (cheie și certificat) în containerul NGINX printr-un volum în `docker-compose.yml`.
                3.  În blocul `server` NGINX pentru portul 443, specificarea căilor către fișierele de certificat (`ssl_certificate /etc/nginx/ssl/devimarket.crt;`) și cheie (`ssl_certificate_key /etc/nginx/ssl/devimarket.key;`).
                4.  Configurarea protocoalelor SSL/TLS recomandate și a cipher suite-urilor (la nivel de bază, pentru a înțelege conceptul).
                5.  Implementarea unui redirect permanent (301) de la HTTP (port 80) la HTTPS (port 443) pentru toate request-urile.
        *   **Optimizări de Bază NGINX (Implementare Efectivă):**
            *   Activarea compresiei Gzip (`gzip on; gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;`) pentru a reduce dimensiunea fișierelor text transferate.
            *   Setarea header-elor HTTP pentru caching-ul resurselor statice (CSS, JS, imagini) în browserul clientului (ex: `Cache-Control "public, max-age=31536000"` pentru fișierele versionate).
        *   **Logging NGINX:** Înțelegerea formatelor de log NGINX (access log, error log) și cum pot fi acestea accesate (prin `docker-compose logs nginx-frontend`) pentru depanare.
    *   **Networking Avansat (Concepte Aplicate și Depanare Detaliată):**
        *   Configurarea corectă și robustă a fișierului `/etc/hosts` pe VM-ul Ubuntu (și, dacă e necesar, pe mașina fizică a studentului dacă VM-ul rulează în mod bridge și are IP propriu în rețeaua locală) pentru a mapa numele de domenii locale (ex: `devimarket.local`, `mulesoft.devimarket.local` – dacă se dorește accesarea API-urilor MuleSoft prin NGINX, deși planul curent este acces direct) la `127.0.0.1` (pentru NGINX) sau la IP-ul VM-ului studentului din Team_1 (pentru API-urile MuleSoft).
        *   **Înțelegerea și gestionarea problemelor CORS (Cross-Origin Resource Sharing):** Deoarece Frontend-ul React (servit de NGINX pe, să zicem, `http://devimarket.local`) va face apeluri API către MuleSoft (rulat nativ pe VM-ul studentului din Team_1, ex: pe `http://localhost:8081` din perspectiva VM-ului, sau `http://<IP_VM_Team_1>:8081` din perspectiva altor mașini/VM-uri din rețea), browserul va impune restricții CORS. Team_7 va trebui să înțeleagă acest concept și să colaboreze cu Team_1 (MuleSoft) pentru a se asigura că API-urile MuleSoft returnează header-ele CORS necesare (ex: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`).
        *   Depanarea problemelor de conectivitate end-to-end folosind unelte precum `curl` (cu opțiuni pentru headere, verbose, gestionare SSL), Developer Tools din browser (tab-ul Network), log-urile NGINX, log-urile MuleSoft.
        *   Înțelegerea conceptului de port forwarding (dacă este necesar pentru a accesa VM-ul din exteriorul mașinii host, deși nu e focus pentru MVP).
    *   **ClickHouse (Setup Detaliat și Scripturi de Inițializare):**
        *   Crearea și gestionarea scripturilor SQL de inițializare (ex: `01-init-databases.sh`, `02-create-tables.sql`, `03-create-users.sql`, `04-insert-french-data.sql`) care vor fi rulate automat la prima pornire a containerului ClickHouse.
            *   Scriptul `01` va crea bazele de date `devimarket_db` și `clickhouse_db_franceza`.
            *   Scriptul `02` va conține comenzile `CREATE TABLE` pentru `devimarket_db.products` (cu schema finală) și `clickhouse_db_franceza.products_fr` (cu schema sursă).
            *   Scriptul `03` va crea utilizatorii specifici pentru MuleSoft (`mule_user`) și Talend (`talend_user`) cu parole (pot fi setate prin variabile de mediu pasate în script) și le va acorda permisiunile necesare (ex: `SELECT, INSERT, UPDATE, ALTER` pe `devimarket_db.*` și `SELECT` pe `clickhouse_db_franceza.*`).
            *   Scriptul `04` (opțional) poate conține comenzi `INSERT INTO clickhouse_db_franceza.products_fr VALUES (...)` pentru a popula tabelul sursă cu date de test inițiale pentru job-ul Talend.
        *   Asigurarea că aceste scripturi sunt idempotente (pot fi rulate de mai multe ori fără a cauza erori dacă obiectele DB există deja, ex: folosind `CREATE DATABASE IF NOT EXISTS`).
        *   Verificarea succesului rulării scripturilor de inițializare prin inspectarea log-urilor containerului ClickHouse.

    **1.5.5. Competențe Specifice Detaliate pentru Team_9 (MicroPython, RPi Pico W Hardware, HTTP/HTTPS, Interfațare Periferice USB-HID)**
    *Studenții din Team_9 (Cadar Andreea, Pista Darius) se vor aventura în lumea sistemelor embedded, combinând programarea hardware cu interacțiunile de rețea și provocările specifice ale MicroPython pe un microcontroller.*
    *   **Raspberry Pi Pico W și MicroPython (Obiectiv Principal și Critic):**
        *   **Setup Profesional Mediu de Dezvoltare:** Instalarea și configurarea avansată a Thonny IDE (sau VS Code cu Pico-W-Go), incluzând managementul fișierelor pe placa Pico W, utilizarea REPL-ului pentru testare interactivă și debugging. Flash-uirea firmware-ului MicroPython (ultima versiune stabilă pentru Pico W) și verificarea funcționalității.
        *   **Programare Avansată în MicroPython:**
            *   Structurarea codului în module logice (.py) pentru o mai bună organizare și reutilizare (ex: un modul `wifi_manager.py`, un modul `http_client.py`, un modul `scanner_reader.py`, pe lângă `main.py`).
            *   Gestionarea eficientă a memoriei și a resurselor limitate ale microcontroller-ului (evitarea alocărilor dinamice mari în bucle, utilizarea `gc.collect()` strategic, închiderea resurselor precum fișiere sau socket-uri).
            *   Implementarea de mecanisme de logging simple (ex: `print()`-uri formatate trimise către REPL serial, sau (opțional avansat) scrierea într-un fișier pe flash-ul Pico dacă este necesar pentru debugging pe termen lung).
            *   Gestionarea robustă a excepțiilor cu blocuri `try...except...finally` pentru operațiuni care pot eșua (conexiune WiFi, request HTTP, citire senzor/scanner).
        *   **Conectivitate WiFi Fiabilă și Gestionarea Stărilor:**
            *   Implementarea unei funcții/clase în `wifi_manager.py` care gestionează întregul ciclu de viață al conexiunii WiFi: scanare rețele (opțional), conectare la un SSID/parolă predefinite (din `config.py`), verificarea periodică a statusului conexiunii (ex: `wlan.isconnected()`, `wlan.status()`), reîncercări automate de conectare (cu backoff exponențial simplu) în caz de deconectare sau eșec inițial.
            *   Afișarea adresei IP obținute și a altor informații relevante despre conexiune.
        *   **Realizarea de Request-uri HTTPS către API-ul MuleSoft (cu `urequests`):**
            *   Utilizarea avansată a bibliotecii `urequests` pentru a construi și trimite request-uri `POST`.
            *   Formatarea corectă a header-elor HTTP, inclusiv `Content-Type: application/json` și, eventual, alte headere custom dacă API-ul MuleSoft le-ar necesita (ex: un API key simplu pentru un prim nivel de "securitate").
            *   Serializarea corectă a datelor (barcode, timestamp) în format JSON pentru corpul request-ului.
            *   **Gestionarea Detaliată a Conexiunii HTTPS cu Certificate Self-Signed:**
                1.  **Cercetare Aprofundată:** Investigarea opțiunilor bibliotecii `urequests` (sau a altor biblioteci HTTP client pentru MicroPython, dacă `urequests` se dovedește prea limitat) pentru gestionarea contextelor SSL/TLS.
                2.  **Opțiunea Preferată (dacă fezabilă):** Încercarea de a configura `urequests` să **nu valideze certificatul SSL** al serverului MuleSoft. Aceasta este cea mai simplă abordare pentru un certificat self-signed într-un mediu local de dezvoltare și trebuie documentată clar ca fiind o măsură specifică acestui context, **NU** recomandată pentru producție. Se va căuta sintaxa exactă (ex: un parametru `verify=False` sau un context SSL special).
                3.  **Opțiune Alternativă (mai complexă):** Dacă se dorește o abordare mai "corectă" (dar mult mai dificilă pe Pico), s-ar putea explora posibilitatea de a extrage certificatul public (partea .pem) al serverului MuleSoft, a-l converti într-un format DER și a-l încărca pe Pico W, apoi a încerca să se configureze `urequests` să aibă încredere în acest CA specific. Aceasta este probabil peste scopul MVP-ului.
                4.  **Documentarea Soluției Alese:** Indiferent de metodă, procesul și orice limitări trebuie documentate clar în `SETUP_RPI_PICO_MICROPYTHON.md`.
            *   Procesarea detaliată a răspunsului de la API-ul MuleSoft: citirea status code-ului HTTP, parsarea corpului răspunsului JSON (dacă există și este relevant) și extragerea informațiilor de status.
        *   **Interfațarea Avansată cu Scannerul de Coduri de Bare USB (HID):**
            *   **Cercetare Aprofundată și Implementare (Prioritatea 1):** Investigarea posibilității ca RPi Pico W (cu firmware-ul MicroPython standard sau unul customizat dacă există) să acționeze ca un **USB Host minimal** pentru a putea enumera și citi date de la un dispozitiv USB HID generic (precum un scanner care emulează o tastatură). Aceasta ar putea implica:
                *   Căutarea și testarea unor biblioteci MicroPython dedicate pentru USB Host sau HID (ex: scrise de comunitate).
                *   Înțelegerea protocoalelor USB HID la nivel de bază (rapoarte de input).
                *   Aceasta este cea mai elegantă soluție, dar și cea mai complexă și cu cel mai mare risc tehnic.
            *   **Soluție de Fallback 1 (Intermediar Hardware/Software - Prioritatea 2):** Dacă citirea directă ca USB Host nu este fezabilă:
                *   Utilizarea unui al doilea Raspberry Pi (poate un Pi Zero W sau un Pi 3/4 dacă există disponibil, care are capabilități USB Host complete cu Linux) pentru a citi scannerul. Acest Pi "intermediar" ar putea apoi să trimită datele către Pico W principal printr-o metodă simplă (ex: comunicare Serial UART, request HTTP simplu în rețeaua locală, MQTT – deși MQTT adaugă un alt server).
                *   Sau, conectarea scannerului la PC-ul studentului, și un script Python pe PC care citește input-ul de la tastatură (de la scanner) și îl trimite prin Serial (folosind un adaptor USB-Serial conectat la UART-ul Pico W) către Pico W.
            *   **Soluție de Fallback Finală și Obligatorie pentru Demo (Input Manual REPL - Prioritatea 3):** Dacă toate celelalte opțiuni se dovedesc prea consumatoare de timp sau tehnic infezabile în cadrul proiectului, se va implementa un mecanism robust de **input manual al codului de bare (și eventual al altor date necesare) prin consola serială REPL (Thonny)**. Scriptul `main.py` va solicita utilizatorului (studentului care face demo-ul) să introducă aceste date, iar apoi va continua cu procesarea lor (trimitere request HTTP, etc.) ca și cum ar fi venit de la un scanner fizic. **Această metodă trebuie să fie funcțională pentru a asigura că restul fluxului de pe Pico W poate fi demonstrat.** Team_9 va documenta extrem de clar care metodă a fost implementată și de ce.
        *   **Feedback Vizual Extins pentru Utilizator:** Utilizarea LED-ului onboard și, opțional, a unor LED-uri externe (ex: roșu, verde, galben conectate la GPIO-uri) pentru a oferi un feedback clar și distinct despre starea scriptului: pornire, încercare conectare WiFi, WiFi conectat/eșuat, așteptare scanare, request HTTP trimis, răspuns API primit (succes/eroare specifică), eroare hardware generală.
        *   **Structurarea Codului MicroPython și Documentare:** Organizarea codului în funcții și module logice, cu comentarii clare. Crearea unui `README.md` specific pentru modulul RPi Pico care explică hardware-ul necesar, schema de conexiuni (dacă sunt componente externe), cum se încarcă și rulează scriptul, și cum se interpretează feedback-ul LED.

    **1.5.6. Competențe Specifice Detaliate pentru Rolul de QA și Coordonare Documentație (Culesca Teodora Maria, Team_7)**
    *Deși toți studenții sunt responsabili pentru calitatea și documentarea muncii lor, Teodora va avea un rol transversal esențial în a ghida, a sprijini și a coordona aceste eforturi la nivel de proiect, asigurând un standard de calitate și consistență.*
    *   **Principii Fundamentale și Avansate de Quality Assurance (QA):**
        *   Înțelegerea rolului QA în întregul ciclu de viață al dezvoltării software (SDLC), nu doar ca o etapă finală.
        *   Cunoașterea și diferențierea între diverse tipuri de teste și nivele de testare relevante pentru acest proiect:
            *   **Testare Funcțională:** Verificarea dacă fiecare funcționalitate implementată (ex: afișare produse, conectare MetaMask, API MuleSoft pentru scanner, job Talend de migrare) corespunde cerințelor specificate și se comportă conform așteptărilor.
            *   **Testare API (cu Postman):** Validarea endpoint-urilor API expuse de MuleSoft (request-uri, response-uri, status codes, headere, performanță de bază).
            *   **Testare de Integrare (la Nivel de API și Fluxuri de Date):** Verificarea dacă diferitele componente ale sistemului (Frontend, API-uri MuleSoft, RPi Pico, Talend, ClickHouse) comunică și transferă date corect între ele.
            *   **Testare de Validare a Datelor:** Asigurarea că datele sunt corect extrase, transformate și încărcate în ClickHouse de către fluxurile MuleSoft și Talend, respectând modelul de date și regulile de business.
            *   **Testare de Regresie (Manuală):** Verificarea periodică (mai ales după modificări majore sau bug fix-uri) că funcționalitățile care mergeau anterior continuă să funcționeze corect.
            *   **(Conceptual) Testare de Usability (UX):** Evaluarea intuitivității și ușurinței de utilizare a interfeței Frontend React (la nivel de feedback subiectiv).
    *   **Utilizarea Avansată a Postman pentru Testarea API-urilor MuleSoft (Obiectiv Principal):**
        *   Crearea și organizarea unei colecții Postman comprehensive pentru toate API-urile expuse de MuleSoft.
        *   Definirea de request-uri detaliate pentru fiecare endpoint și metodă HTTP, incluzând configurarea corectă a URL-urilor, parametrilor de query, header-elor (inclusiv cele pentru HTTPS și eventuale API keys simple) și a body-urilor JSON (pentru POST/PUT).
        *   Utilizarea avansată a variabilelor de mediu și de colecție în Postman pentru a gestiona dinamic URL-urile de bază ale API-urilor, porturile, credențialele de test (dacă e cazul) și alte date reutilizabile.
        *   **Scrierea de Scripturi de Test (Aserțiuni) Complexe în Postman (JavaScript):**
            *   Validarea detaliată a status code-ului HTTP.
            *   Verificarea structurii și a tipurilor de date ale răspunsului JSON (folosind `pm.response.to.have.jsonSchema()` dacă se definește o schemă JSON, sau aserțiuni individuale pentru câmpuri).
            *   Validarea valorilor specifice din răspuns, inclusiv cele care pot varia (ex: verificarea că un preț este un număr pozitiv, că un timestamp este într-un format valid).
            *   Extragerea de valori dintr-un răspuns pentru a le folosi în request-urile ulterioare (chaining requests, ex: preluare ID produs dintr-un request și folosirea lui în altul).
            *   Testarea scenariilor de eroare (ex: trimitere request cu date invalide și verificarea că API-ul returnează status code 400 și un mesaj de eroare corespunzător).
        *   Organizarea testelor în foldere logice în cadrul colecției.
        *   Rularea colecțiilor de teste folosind Postman Collection Runner și interpretarea rapoartelor generate.
        *   Exportarea colecțiilor Postman (ca JSON) și versionarea lor pe GitHub.
    *   **Planificarea Strategică și Execuția Testării Funcționale Manuale:**
        *   Crearea unui document de **Plan de Testare** (Markdown în folderul `/qa_testing` pe GitHub) care să detalieze:
            *   Scopul testării pentru MVP.
            *   Funcționalitățile cheie și modulele care vor fi testate (in-scope, out-of-scope).
            *   Tipuri de teste care vor fi executate.
            *   Mediile de testare (VM-urile studenților, cu toate componentele pornite).
            *   Criterii de intrare și ieșire pentru ciclul de testare.
            *   Matrice de trasabilitate simplă între cerințe/user stories și cazurile de test (opțional).
        *   Pe baza Planului de Testare, definirea (chiar și informal, într-o listă) a unor **scenarii de test** cheie pentru fiecare funcționalitate (ex: "Utilizatorul poate vizualiza lista de produse și naviga la pagina a doua", "Scanerul adaugă un produs nou în DB dacă barcode-ul nu există", "Job-ul Talend migrează corect 10 produse din sursa franceză").
        *   Executarea riguroasă a testelor manuale pe interfața Frontend React (verificarea UI, navigare, afișare date, interacțiune MetaMask), pe fluxurile ETL Talend și MuleSoft (prin declanșarea lor și verificarea datelor rezultate în ClickHouse folosind DBeaver sau `clickhouse-client`), și pe sistemul de scanare RPi Pico.
    *   **Managementul Riguros al Defectelor (Bugs) în Jira:**
        *   Crearea promptă de tichete de tip "Bug" în Jira pentru fiecare problemă, neconcordanță sau comportament neașteptat identificat.
        *   Redactarea unor rapoarte de bug de înaltă calitate:
            *   Titlu clar și concis care sumarizează problema.
            *   Pași exacți, detaliați și ușor de urmat pentru a reproduce bug-ul.
            *   Descrierea rezultatului actual observat.
            *   Descrierea rezultatului așteptat (conform specificațiilor sau intuiției).
            *   Mediul în care a fost observat bug-ul (ex: browser, versiune OS, versiune software).
            *   Severitatea (ex: Critic, Major, Minor, Trivial) și Prioritatea (ex: High, Medium, Low) estimate ale bug-ului (în colaborare cu Tutorele).
            *   Atașarea de dovezi relevante: capturi de ecran (cu adnotări dacă e necesar), înregistrări video scurte, fișiere de log, payload-uri de request/response.
        *   Urmărirea activă a statusului bug-urilor în Jira (Open, In Progress, Resolved, Closed).
        *   Re-testarea promptă și riguroasă a bug-urilor după ce dezvoltatorii le marchează ca fiind rezolvate. Confirmarea rezolvării sau redeschiderea bug-ului cu comentarii suplimentare dacă problema persistă.
    *   **Coordonarea și Asigurarea Calității Documentației Tehnice:**
        *   Colaborarea strânsă cu fiecare echipă pentru a se asigura că fișierele `SETUP_MODUL.md` sunt complete, corecte din punct de vedere tehnic, actualizate și ușor de urmărit de către oricine. Poate oferi un template sau un checklist pentru aceste documente.
        *   Revizuirea generală a întregii documentații de proiect (acest README, diagrame, etc.) pentru consistență terminologică, claritate, corectitudine gramaticală și stilistică.
        *   Asistarea activă la procesul de consolidare și redactare a Documentației Tehnice Finale în Sprint 4, asigurând un standard de calitate ridicat.
    *   **Promovarea unei Culturi a Calității în Echipă:**
        *   Încurajarea tuturor membrilor echipei să adopte o mentalitate orientată spre calitate ("quality-first mindset").
        *   Promovarea importanței testării riguroase a propriei munci de către dezvoltatori înainte de a o trimite la QA sau code review.
        *   Facilitarea comunicării între dezvoltatori și testeri pentru o înțelegere comună a cerințelor și a problemelor.

**1.6. Constrângerile Fundamentale și Inflexibile ale Proiectului**

Aceste constrângeri definesc limitele operaționale, tehnologice și temporale în cadrul cărora proiectul "DeviMarket Zero" trebuie să se desfășoare. Ele sunt nenegociabile și vor influența toate deciziile de design, tehnologie și planificare.

    **1.6.1. Constrângerea de Cost Zero Absolut (Tehnologii și Servicii Utilizate)**
    *   **Software și Platforme:** Se vor utiliza exclusiv versiuni gratuite și/sau open-source ale tuturor tehnologiilor, bibliotecilor și platformelor de dezvoltare. Aceasta include în mod specific:
        *   Sistem de Operare: Ubuntu Linux (pe mașinile virtuale ale studenților).
        *   IDE-uri și Editoare de Text: Visual Studio Code (cu extensiile sale gratuite), Thonny IDE (pentru MicroPython).
        *   Platforme de Integrare și Dezvoltare API:
            *   **Talend Open Studio for Data Integration** (versiunea gratuită, descărcabilă de pe site-ul Talend).
            *   **MuleSoft Anypoint Studio** (versiunea gratuită, descărcabilă, care include Mule Runtime embedat pentru dezvoltare și rulare locală; NU se va folosi Anypoint Platform în cloud).
        *   Limbaje de Programare: JavaScript (pentru React, folosind Node.js pentru tooling), Python (pentru MicroPython). Java este limbajul de bază pentru Talend și MuleSoft, dar studenții vor interacționa cu el preponderent prin interfețele grafice și limbajele specifice (DataWeave).
        *   Bază de Date: **ClickHouse** (imaginea Docker oficială, gratuită și open-source).
        *   Tehnologii de Containerizare: **Docker Engine** și **Docker Compose** (versiunile gratuite, comunitare).
        *   Server Web/Reverse Proxy: **NGINX** (imaginea Docker oficială, gratuită și open-source).
        *   Biblioteci Frontend: React, React Router DOM, Axios (sau Fetch API), Tailwind CSS (toate open-source).
        *   Biblioteci MicroPython: `urequests`, `network`, `time`, `machine` (module standard sau din `micropython-lib`).
    *   **Servicii Cloud și Orice Formă de Găzduire Externă:** **NU** se vor utiliza sub nicio formă servicii cloud care implică costuri, chiar și în perioade de trial (ex: AWS, Azure, Google Cloud Platform, Heroku, Netlify/Vercel cu planuri plătite, sau orice alt serviciu SaaS/PaaS/IaaS cu plată). Întreaga aplicație și toate componentele sale (inclusiv baza de date, API-urile MuleSoft, job-urile Talend) trebuie să poată fi dezvoltate, rulate, testate și demonstrate **exclusiv local**, pe mașinile virtuale Ubuntu ale studenților.
    *   **Impact și Rațiune:** Această constrângere fundamentală dictează în mod direct alegerea tehnologiilor și poate limita anumite funcționalități avansate care, în mod normal, ar depinde de servicii cloud specializate (ex: servicii de autentificare managed, baze de date ca serviciu complet gestionate, platforme CI/CD avansate în cloud, servicii de notificare push, stocare fișiere la scară mare etc. – funcționalități care oricum depășesc scopul acestui MVP educațional). Rațiunea este de a elimina orice barieră financiară pentru participarea la proiect și de a încuraja studenții să exploreze și să stăpânească puterea soluțiilor open-source și gratuite, care sunt extrem de relevante în industrie.

    **1.6.2. Constrângerea de Timp Strictă (Structura pe Sprinturi și Ore Alocate)**
    *   Proiectul este riguros structurat într-o serie de sprinturi, fiecare având o durată fixă și un număr specific de ore de lucru efectiv estimate și alocate per student. Respectarea cu strictețe a acestor intervale este esențială pentru a asigura finalizarea MVP-ului în timpul total alocat programului de practică.
        *   **Sprint 1 (Fundație și Setup Mediu Linux):**
            *   Perioadă: **A fost deja ÎNCHEIAT** (conform datelor furnizate: finalizat pe 19/05).
            *   Realizări: Studenții au mașinile virtuale Ubuntu funcționale și s-au familiarizat cu comenzile de bază Linux, conform task-urilor din CSV-ul inițial.
        *   **Sprint 2 (Analiză Proiect, Setup Detaliat Medii de Dezvoltare Specifice, Primul "Hello World" Funcțional per Modul):**
            *   Perioadă: **19/05/2025 - 30/05/2025** (Luni - Vineri, 2 săptămâni calendaristice; a se confirma anul dacă este altul decât 2025).
            *   Timp Alocat per Student: **8 ore de lucru efectiv și concentrat**.
            *   Obiectiv Principal: Înțelegerea completă a acestui document (README.md), instalarea și configurarea tuturor mediilor de dezvoltare specifice pentru modulul/tehnologiile alocate (React/Vite, Anypoint Studio, Talend Studio, Docker, Thonny/MicroPython, Postman) și realizarea cu succes a unui exemplu "Hello World" funcțional sau a unei operațiuni de bază pentru fiecare, documentând procesul în `SETUP_MODUL.md`.
        *   **Sprint 3 (Dezvoltare Module Fundamentale, Integrare Componente, Testare și Realizare MVP):**
            *   Perioadă: **Urmează după Sprint 2** (datele exacte vor fi stabilite de Tutore, ex: 23/06/2025 – 04/07/2025, dacă se respectă structura inițială de pauză pentru sesiune, altfel se ajustează pentru a urma imediat după Sprint 2).
            *   Timp Alocat per Student: **60 de ore de lucru efectiv și intensiv**.
            *   Obiectiv Principal: Dezvoltarea tuturor funcționalităților de bază ale modulelor definite (Frontend React, API-uri MuleSoft, Job-uri Talend, Script RPi Pico, Configurații Docker/NGINX), integrarea acestora pentru a forma fluxuri funcționale end-to-end și testarea riguroasă a MVP-ului.
        *   **Sprint 4 (Documentație Tehnică Finală, Pregătire CV-uri, Realizare și Susținere Prezentare Finală Proiect):**
            *   Perioadă: **Urmează după Sprint 3** (ex: 07/07/2025 – 11/07/2025, o săptămână).
            *   Timp Alocat per Student: **20 de ore de lucru efectiv**.
            *   Obiectiv Principal: Consolidarea și finalizarea întregii documentații tehnice a proiectului, pregătirea de către fiecare student a secțiunilor relevante pentru CV-ul personal (cu accent pe tehnologiile și contribuțiile din proiect) și crearea/susținerea unei prezentări finale comprehensive și profesionale a proiectului și a experienței de învățare.
    *   **Impact și Managementul Timpului:** Complexitatea funcționalităților care pot fi implementate în MVP este direct influențată de această constrângere de timp. Prioritizarea corectă și realistă a task-urilor în Jira de către Tutore, împreună cu o planificare eficientă a muncii de către studenți în cadrul fiecărui sprint, sunt absolut cruciale. Orice întârziere semnificativă într-un sprint poate afecta negativ capacitatea de a finaliza obiectivele sprinturilor următoare și ale proiectului în ansamblu. Studenții trebuie să comunice proactiv orice dificultate în respectarea estimărilor de timp.

    **1.6.3. Constrângerea Nivelului de Start (Abordare "De la Zero" pentru Tehnologii Noi și Complexe)**
    *   Se pornește de la premisa fundamentală și explicită că studenții participanți (anul 3 de studiu) au, la începutul acestui proiect (post-Sprint 1), cunoștințe de programare de bază (ex: înțelegerea variabilelor, tipurilor de date, structurilor de control precum if/else și bucle for/while, funcțiilor/metodelor, și poate concepte elementare de Programare Orientată pe Obiecte într-un limbaj academic precum Java sau C++) dobândite în cadrul cursurilor universitare. De asemenea, au finalizat cu succes Sprintul 1, care a inclus setup-ul mașinii virtuale Ubuntu și familiarizarea cu comenzile esențiale din linia de comandă Linux.
    *   Pentru majoritatea tehnologiilor specifice și avansate utilizate în proiectul "DeviMarket Zero" – în special **MuleSoft Anypoint Platform (cu DataWeave), Talend Open Studio, ClickHouse (cu specificul său SQL și de operare), React (la nivel de construire a unei aplicații SPA complexe), Docker și Docker Compose (concepte și practică DevOps), NGINX (configurare server web și reverse proxy), și MicroPython (programare embedded)** – se asumă un nivel de cunoștințe inițial **zero sau absolut minim** din partea studenților.
    *   Curba de învățare, în special pentru platformele de integrare enterprise MuleSoft și Talend (care au propriile lor paradigme, interfețe complexe și limbaje specifice precum DataWeave), precum și pentru stăpânirea conceptelor de containerizare cu Docker și configurarea NGINX, este recunoscută ca fiind potențial **abruptă și solicitantă** pentru începători, mai ales în intervalul de timp alocat.
    *   **Impact și Strategii de Atenuare:**
        *   Acest document (README.md) este conceput pentru a fi extrem de detaliat și pentru a oferi cât mai mult context și ghidare inițială posibil.
        *   **Suportul constant, răbdător și specializat din partea Tutorelui (Petrut Constantin)** este absolut esențial pentru a naviga această curbă de învățare. Tutorele va trebui să ofere explicații conceptuale, demonstrații practice, ajutor la depanare și să direcționeze studenții către resursele de învățare potrivite.
        *   Task-urile din **Sprint 2 (setup și "Hello World") sunt de o importanță critică** pentru a permite studenților să aibă o primă interacțiune reușită cu fiecare tehnologie și pentru a valida funcționarea corectă a mediilor de dezvoltare.
        *   Complexitatea funcționalităților care vor fi dezvoltate în **Sprint 3 va fi atent calibrată** pentru a fi realizabilă de către începători ghidați. Se va pune accent pe înțelegerea conceptelor de bază și pe implementarea unor scenarii simple, dar complete end-to-end, mai degrabă decât pe funcționalități extrem de sofisticate sau pe optimizări de performanță avansate.
        *   Este absolut esențial ca **studenții să aloce timp suficient și consistent pentru studiu individual și experimentare** (consultarea documentației oficiale, parcurgerea tutorialelor recomandate, încercarea unor exemple simple). Colaborarea între studenți (peer learning) și schimbul de informații sunt, de asemenea, puternic încurajate.
        *   **Comunicarea proactivă a dificultăților** către Tutore este vitală pentru a primi sprijin la timp și a evita blocajele prelungite.

    **1.6.4. Constrângerea Mediului de Dezvoltare și Rulare (VM Ubuntu, Docker, Native Java Runtimes pentru Mule/Talend)**
    *   **Sistem de Operare Standardizat:** Toți studenții vor dezvolta și rula componentele proiectului exclusiv pe mașini virtuale (VM) cu sistemul de operare **Ubuntu Linux** (se recomandă o versiune LTS stabilă, ex: 20.04 sau 22.04, aceeași pentru toți studenții, așa cum a fost configurată în Sprint 1). Aceasta asigură un mediu de dezvoltare consistent și predictibil pentru toată echipa și elimină problemele legate de diferențele între sistemele de operare host (Windows, macOS).
    *   **Versiuni Software Coerente:** Se vor stabili și utiliza versiuni specifice (sau cel puțin majore compatibile) pentru software-ul cheie (ex: Node.js, versiunea JDK pentru Talend/MuleSoft, versiunea Python pentru MicroPython, versiunile Docker Engine și Docker Compose) pentru a minimiza problemele de incompatibilitate între mediile studenților. Aceste versiuni vor fi specificate și documentate în fișierele `SETUP_MODUL.md`.
    *   **Arhitectură de Rulare Locală Hibridă:**
        *   **Componente Containerizate (Docker):**
            *   Baza de date **ClickHouse** va rula într-un container Docker.
            *   Serverul web **NGINX**, care va servi build-ul static al aplicației Frontend React, va rula, de asemenea, într-un container Docker.
            *   Aceste servicii vor fi orchestrate și gestionate prin **Docker Compose**.
        *   **Componente Rulate Nativ pe VM (MuleSoft și Talend):**
            *   Platformele de dezvoltare și rulare **MuleSoft Anypoint Studio** (care include propriul Mule runtime embedat) și **Talend Open Studio** vor fi instalate și rulate **direct pe sistemul de operare Ubuntu al mașinii virtuale** a studenților din Team_1.
            *   **Rațiune:** Această abordare a fost aleasă pentru a simplifica procesul inițial de învățare și setup pentru aceste platforme Java complexe, evitând adăugarea unui strat suplimentar de complexitate prin încercarea de a le containeriza (ceea ce poate fi un subiect avansat și consumator de timp în sine, cu propriile provocări legate de licențiere, resurse și configurare în containere).
            *   **Interacțiune:** Aceste aplicații native (MuleSoft, Talend) se vor conecta la serviciul ClickHouse (care rulează în Docker) folosind adresa IP a interfeței de rețea a VM-ului (de obicei `localhost` sau `127.0.0.1` din perspectiva aplicațiilor native) și portul specific pe care Docker l-a expus pentru containerul ClickHouse pe host-ul VM (ex: `localhost:8123`).
        *   **Sistemul Hardware (Raspberry Pi Pico W):**
            *   Va rula scriptul MicroPython în mod autonom, după ce este programat.
            *   Se va conecta la rețeaua WiFi locală (aceeași rețea la care este conectat și VM-ul studentului din Team_1 care rulează API-ul MuleSoft pentru scanner).
            *   Va trebui să poată rezolva și accesa IP-ul și portul VM-ului studentului din Team_1 pentru a apela API-ul MuleSoft. Aceasta poate necesita configurări specifice de rețea (ex: IP static pentru VM-ul Team_1 în rețeaua locală, sau descoperirea dinamică a IP-ului, deși mai complex).
    *   **Impact:** Studenții trebuie să dezvolte o înțelegere practică atât a conceptelor de containerizare și a modului de funcționare a rețelelor Docker, cât și a procesului de instalare, configurare și rulare a unor aplicații Java enterprise (Talend, MuleSoft) direct pe un sistem Linux. Gestionarea corectă a configurațiilor de rețea locală (IP-uri, porturi, firewall-ul VM-ului dacă este activ) devine importantă pentru a asigura comunicarea fluidă între toate componentele sistemului hibrid.

---

**2. ROLURI ȘI RESPONSABILITĂȚI ÎN PROIECT (Versiune 5.0 - Finală, MuleSoft Central)**

Acest capitol definește cu maximă claritate și detaliu rolurile fiecărui participant la proiectul "DeviMarket Zero", responsabilitățile specifice asociate și așteptările pentru o colaborare eficientă și o experiență de învățare productivă în contextul noii arhitecturi cu MuleSoft ca platformă API centrală. O înțelegere aprofundată și o asumare conștientă a acestor roluri sunt fundamentale pentru succesul individual al fiecărui student și al proiectului în ansamblu.

**2.1. Tutore / Company Owner (Petrut Constantin): Roluri și Implicare Detaliată**

În calitate de Tutore și reprezentant al Devidevs.com, Petrut Constantin este figura centrală care asigură direcția strategică, suportul tehnic și mentoratul necesar pentru ca studenții să își atingă obiectivele de învățare și să livreze un MVP de calitate. Implicarea sa activă, constantă și adaptată nevoilor studenților este crucială pentru succesul programului de practică.

    **2.1.1. Rol 1: Custode al Viziunii Produsului și Reprezentant al Clientului Simulat ("Product Owner" Adaptat)**
    *   **Responsabilitate Principală:** Articulează, menține și comunică constant viziunea generală a produsului "DeviMarket Zero", așa cum este ea derivată din cerințele clientului simulat "GlobalGoods Inc." (detaliate în Capitolul 1.2.2). Se asigură că toate eforturile de dezvoltare sunt aliniate cu această viziune și aduc valoare în contextul MVP-ului, traducând cerințele de "business" în specificații tehnice și funcționale clare pentru studenți.
    *   **Implicare Activă și Detaliată:**
        *   **Definirea Clară a Scopului:** Înainte de începerea fiecărui sprint, și în special la începutul proiectului, Petrut va reitera și clarifica obiectivele de business pe care MVP-ul încearcă să le atingă, ajutând studenții să înțeleagă contextul mai larg al muncii lor.
        *   **Prioritizarea Backlog-ului:** În colaborare cu Asistentul AI (care propune structura inițială a task-urilor), Petrut va prioritiza User Story-urile și Task-urile Tehnice din backlog-ul de produs și, ulterior, din backlog-ul fiecărui sprint, asigurându-se că se lucrează întâi la cele mai valoroase și critice funcționalități.
        *   **Clarificarea Cerințelor Funcționale:** Pe parcursul sprinturilor, este principala persoană de contact pentru studenți atunci când aceștia au întrebări legate de cum ar trebui să funcționeze o anumită caracteristică din perspectiva utilizatorului final sau a clientului.
        *   **Validarea Funcționalităților Livrate (Sprint Review):** În cadrul ședințelor de Sprint Review, Petrut acționează ca principal "stakeholder" care evaluează demo-urile funcționalităților implementate. Feedback-ul său va fi axat pe conformitatea cu cerințele inițiale, pe utilitatea pentru "client" și pe experiența generală a utilizatorului (UX).
        *   **Managementul Schimbărilor (Controlat):** Orice idee nouă sau solicitare de modificare a scopului MVP-ului care apare pe parcurs trebuie discutată și aprobată de Petrut. Acesta va evalua impactul asupra timpului și resurselor și va decide dacă modificarea este fezabilă și oportună.

    **2.1.2. Rol 2: Mentor Tehnic Principal și Ghid de Învățare Specializat și Răbdător**
    *   **Responsabilitate Principală:** Oferă îndrumare tehnică aprofundată, suport conceptual și asistență practică individualizată studenților pentru toate tehnologiile utilizate în proiect. Rolul său este de a transforma complexitatea tehnică într-o experiență de învățare accesibilă și motivantă, adaptând explicațiile la nivelul de cunoștințe "de la zero" al studenților și la ritmul lor individual de învățare. Un accent deosebit va fi pus pe facilitarea înțelegerii, instalării, configurării și utilizării corecte a platformelor **MuleSoft Anypoint Studio** și **Talend Open Studio**, precum și a conceptelor mai noi pentru ei, precum **ClickHouse**, **Docker**, **NGINX** și **MicroPython**.
    *   **Implicare Activă și Detaliată:**
        *   **Sesiuni de Instruire Inițială și Kick-off Tehnic (Hands-on):** La începutul fazelor de lucru cu tehnologii noi (în special în Sprint 2 pentru setup-uri și "Hello Worlds"), Petrut va organiza sesiuni introductive interactive și, pe cât posibil, practice (hands-on). Acestea vor viza prezentarea conceptelor fundamentale, demonstrarea primilor pași de instalare și configurare, și ghidarea studenților în realizarea primelor exemple funcționale.
        *   **Disponibilitate pentru Suport la Depanare (Debugging Ghidat):** Va aloca timp pentru a ajuta studenții să depășească problemele tehnice blocante. Strategia va fi de a încuraja mai întâi efortul individual de cercetare și depanare al studentului (folosind log-uri, mesaje de eroare, documentație), dar va interveni cu întrebări directoare, sugestii metodice sau soluții punctuale atunci când studentul este blocat și a epuizat opțiunile proprii. Scopul este de a învăța studentul "cum să pescuiască", nu doar de a-i oferi "peștele".
        *   **Revizuirea Activă a Deciziilor de Design Tehnic:** Va participa activ la discuțiile tehnice din cadrul echipelor (sau va iniția astfel de discuții), va revizui propunerile de design pentru API-urile MuleSoft (RAML, structura fluxurilor), pentru job-urile Talend (structura, componentele alese, logica din `tMap`), pentru schema bazei de date ClickHouse, pentru scripturile MicroPython și pentru configurațiile Docker/NGINX. Va oferi feedback constructiv și argumentat pentru a asigura soluții robuste, eficiente (în contextul MVP) și aliniate cu bunele practici.
        *   **Clarificarea Conceptelor Tehnice Complexe (Prin Analogii și Exemple):** Va depune un efort conștient pentru a explica într-un mod cât mai accesibil și relevant pentru începători concepte precum: arhitectura API-led (MuleSoft), limbajul DataWeave, transformările ETL în Talend, specificitățile bazelor de date orientate pe coloane (ClickHouse), rețelistica și volumele Docker, configurarea HTTPS cu certificate self-signed, comunicarea serială/USB-HID cu RPi Pico, etc. Utilizarea analogiilor și a exemplelor practice simple este încurajată.
        *   **Curatorierea și Recomandarea de Resurse de Învățare de Calitate:** Pe lângă lista inițială de resurse din Anexa 8.4, Petrut va direcționa studenții către documentația oficială specifică, tutoriale video clare și concise, articole de blog relevante sau exemple de cod open-source care îi pot ajuta să aprofundeze subiectele și să rezolve probleme specifice.
        *   **Promovarea Bunelor Practici de Inginerie Software:** Va insista pe importanța scrierii unui cod curat, lizibil, testabil și mentenabil, a documentării adecvate și a respectării standardelor de versionare.

    **2.1.3. Rol 3: Manager de Proiect (Adaptat pentru Contextul de Practică) și Facilitator Entuziast al Proceselor Agile**
    *   **Responsabilitate Principală:** Supraveghează și ghidează progresul general al proiectului "DeviMarket Zero", asigurându-se că echipele se mențin pe direcția corectă pentru atingerea obiectivelor de sprint și ale MVP-ului, în limitele de timp stabilite. Facilitează implementarea și respectarea proceselor Agile într-un mod care maximizează învățarea și colaborarea, menținând în același timp un grad de flexibilitate adecvat unui proiect de practică.
    *   **Implicare Activă și Detaliată:**
        *   **Conducerea Inspirată și Eficientă a Ceremoniilor Agile:**
            *   **Sprint Planning:** Transformă această ședință într-o sesiune interactivă și colaborativă. Prezintă cu entuziasm obiectivele de business și tehnice ale sprintului. Facilitează descompunerea User Story-urilor (propuse de AI) în task-uri tehnice mai mici și mai clare, împreună cu studenții. Ghidează procesul de atribuire a task-urilor către echipe/studenți, ținând cont de interesele lor de învățare și de echilibrul încărcării. Încurajează discuțiile deschise pentru clarificarea completă a fiecărui task și a criteriilor de acceptare.
            *   **Daily Stand-up Meetings (Recomandat, chiar și scurt):** Facilitează aceste întâlniri zilnice într-un mod dinamic și concis. Scopul este de a încuraja transparența, de a identifica rapid blocajele și de a promova sincronizarea echipei. Pune întrebări suplimentare dacă răspunsurile sunt prea vagi. Notează blocajele și stabilește acțiuni imediate pentru rezolvarea lor (adesea implicând suportul său direct).
            *   **Sprint Review / Demo Meeting:** Creează o atmosferă pozitivă și încurajatoare pentru ca studenții să își prezinte cu mândrie munca. Moderează sesiunea pentru a se încadra în timp, asigurându-se că fiecare echipă are ocazia să demonstreze funcționalitățile relevante și să explice deciziile tehnice. Facilitează sesiunea de Q&A și colectează feedback valoros.
            *   **Sprint Retrospective Meeting:** Ghidează o discuție sinceră și constructivă, folosind tehnici simple și eficiente (ex: "Start, Stop, Continue"; "Mad, Sad, Glad"; sau cele 3 întrebări clasice: Ce a mers bine? Ce nu a mers bine? Ce vom face diferit?). Ajută echipa să identifice 1-3 acțiuni concrete și realiste de îmbunătățire pentru sprintul următor sau pentru viitoare proiecte. Subliniază importanța învățării continue din experiență.
        *   **Managementul Proactiv al Backlog-ului și al Task-urilor în Jira:**
            *   Este responsabil pentru crearea efectivă a tuturor item-ilor (Epics, User Stories, Tasks, Bugs) în Jira, pornind de la structura și detaliile propuse în acest document (de către Asistentul AI) și adaptându-le pe baza discuțiilor și a progresului real.
            *   Menține backlog-ul de produs și backlog-urile de sprint organizate, prioritizate și actualizate.
            *   Monitorizează activ board-ul Jira pentru a urmări progresul task-urilor, a identifica din timp potențialele întârzieri sau blocaje și a discuta cu studenții implicați pentru a găsi soluții.
            *   Se asigură că toate task-urile au descrieri clare, criterii de acceptare măsurabile și sunt corect atribuite. Revizuiește și aprobă criteriile de acceptare.

    **2.1.4. Rol 4: Evaluator Obiectiv al Performanței și Dezvoltator de Abilități Profesionale (Coach)**
    *   **Responsabilitate Principală:** Evaluează în mod continuu, obiectiv și constructiv performanța individuală a fiecărui student și dinamica generală a echipelor. Această evaluare se va concentra nu doar pe competențele tehnice și pe livrabilele concrete, ci și pe dezvoltarea abilităților "soft" esențiale: colaborare, comunicare, inițiativă, responsabilitate, capacitatea de a învăța și de a rezolva probleme. Sprijină activ pregătirea studenților pentru provocările și oportunitățile unei cariere în domeniul IT.
    *   **Implicare Activă și Detaliată:**
        *   **Oferirea de Feedback Individualizat, Specific și Acționabil:** Planifică sesiuni scurte de feedback 1-la-1 cu fiecare student (ex: la mijlocul Sprintului 3 și la finalul proiectului, sau mai des dacă este necesar). În aceste discuții, va oferi feedback specific pe marginea muncii prestate, a progresului în învățare, a atitudinii și a contribuției la echipă. Feedback-ul va fi echilibrat (evidențiind atât punctele forte, cât și zonele de îmbunătățire) și va include sugestii concrete pentru dezvoltare.
        *   **Asistență Personalizată în Pregătirea CV-urilor:** Organizează un workshop interactiv și/sau oferă consultanță individuală detaliată studenților pentru a-i ajuta să își redacteze și să își optimizeze secțiunile din CV care descriu proiectul "DeviMarket Zero". Îi va ghida cum să evidențieze în mod eficient tehnologiile specifice pe care le-au învățat și utilizat (MuleSoft, Talend, React, ClickHouse, Docker, MicroPython etc.), responsabilitățile avute și contribuțiile concrete aduse la realizarea MVP-ului, folosind verbe de acțiune și cuantificând realizările pe cât posibil.
        *   **Îndrumare Strategică pentru Prezentarea Finală:** Colaborează cu studenții la structurarea logică a prezentării finale, la crearea unor slide-uri clare și de impact vizual, și la exersarea discursului. Oferă sfaturi pentru o comunicare eficientă în public, pentru gestionarea emoțiilor și pentru a răspunde cu încredere la întrebări.
        *   **Împărtășirea Experienței Practice din Industrie (Rol Model):** Utilizează exemple concrete din experiența sa profesională la Devidevs.com și din industrie pentru a ilustra concepte, pentru a explica importanța anumitor practici (ex: code review, testare, documentație) și pentru a oferi studenților perspective realiste asupra așteptărilor angajatorilor, a dinamicii echipelor de dezvoltare și a oportunităților de carieră în diverse domenii IT.

    **2.1.5. Rol 5: Administrator Eficient de Resurse și Mediu de Lucru Tehnic și Colaborativ**
    *   **Responsabilitate Principală:** Se asigură că studenții dispun de toate resursele software necesare, de accesările corecte la platformele utilizate și de un mediu de lucru tehnic și colaborativ care să le permită să își desfășoare activitatea eficient, fără impedimente administrative sau tehnice majore (dincolo de cele inerente procesului de învățare a unor tehnologii noi).
    *   **Implicare Activă și Detaliată:**
        *   **Configurare și Administrare Completă Jira:** Creează proiectul "DeviMarket Zero" în Jira, configurează board-ul Agile (Kanban/Scrum), definește tipurile de tichete (Epics, User Stories, Tasks, Bugs), personalizează workflow-urile (dacă este necesar, deși cele default sunt adesea suficiente pentru început), și gestionează utilizatorii și permisiunile de acces la proiect.
        *   **Configurare și Administrare Repositorii GitHub:** Creează repository-ul principal al proiectului pe GitHub (recomandat monorepo `DeviMarketZero-Practice-Project` cu structura de foldere propusă). Administrează accesul studenților ca și colaboratori. Configurează reguli de protecție pentru branch-ul `main` (ex: obligativitatea existenței a cel puțin unui Pull Request aprobat înainte de merge, interzicerea push-urilor directe). Poate crea template-uri pentru Pull Request-uri și Issue-uri în GitHub, dacă dorește.
        *   **Crearea și Gestionarea Canalului de Comunicare:** Stabilește și configurează canalul principal de comunicare al proiectului (ex: server Discord cu canale tematice – #general, #anunturi, #tech_mulesoft, #tech_react etc. – sau un workspace Slack). Comunică regulile de utilizare și eticheta.
        *   **Suport Tehnic Inițial pentru Mediul VM Ubuntu:** Deși studenții au configurat VM-urile în Sprint 1, Petrut poate oferi suport punctual dacă apar probleme majore legate de funcționarea generală a VM-urilor (ex: probleme de rețea la nivel de VM, resurse insuficiente alocate VM-ului, probleme cu instalarea pachetelor de bază `apt`).
        *   **Furnizarea Resurselor Inițiale Specifice Proiectului:** Pune la dispoziția studenților (ex: printr-un folder partajat sau direct în repository-ul GitHub) fișierul CSV cu datele inițiale pentru produse (pentru fluxul Talend/MuleSoft), orice template-uri specifice companiei Devidevs.com (dacă există) și, foarte important, acest document `README.md` actualizat.

**2.2. Project Manager & Technical Lead (Asistent AI): Roluri și Limitări**

Rolul Asistentului AI în acest proiect este de a acționa ca un consultant inițial și un furnizor de structură și conținut detaliat, operând sub stricta coordonare, validare și personalizare a Tutorelui (Petrut Constantin). AI-ul nu înlocuiește expertiza și interacțiunea umană a Tutorelui, ci le augmentează.

    **2.2.1. Rol 1: Arhitect Inițial al Soluției și Documentator Principal (Creatorul Iterativ al Acestui Document)**
    *   **Responsabilitate:** Elaborează, detaliază și rafinează iterativ (pe baza feedback-ului Tutorelui) acest document fundamental de proiect (`README.md`). Aceasta include definirea arhitecturii tehnice, descrierea componentelor, detalierea fluxurilor de date și a modelelor de date, propunerea planului general de implementare și structurarea informației într-un mod logic și accesibil.
    *   **Implicare:** Încearcă să anticipeze nevoile de informare ale studenților și ale Tutorelui, oferind un nivel înalt de detaliu, explicații conceptuale pentru tehnologiile noi și exemple ilustrative. Toate propunerile arhitecturale și tehnice sunt considerate draft-uri până la validarea finală și personalizarea de către Tutore.
    *   **Limitare:** AI-ul nu posedă contextul specific al companiei Devidevs.com sau preferințele particulare ale Tutorelui decât dacă acestea îi sunt comunicate explicit. Deciziile finale de design și tehnologie aparțin întotdeauna Tutorelui.

    **2.2.2. Rol 2: Creator al Planului de Proiect Detaliat și Definitor al Structurii Inițiale a Task-urilor pentru Jira**
    *   **Responsabilitate:** Propune o structură detaliată a sprinturilor (obiective, durată, ore alocate) și definește un set inițial de task-uri specifice (sub formă de Epics, User Stories sau task-uri tehnice granulare) pentru fiecare modul și fiecare sprint, asigurând o acoperire cât mai completă a cerințelor clientului simulat și a obiectivelor de învățare. Aceste propuneri de task-uri servesc ca o bază solidă pentru crearea efectivă a item-ilor în Jira de către Tutore.
    *   **Implicare:** Descompune funcționalitățile majore ale MVP-ului în unități de lucru cât mai mici, clare, măsurabile, realizabile și relevante, potrivite pentru nivelul de experiență al studenților și pentru timpul alocat în fiecare sprint. Încearcă să identifice și să semnaleze potențialele dependențe între task-uri.
    *   **Limitare:** AI-ul nu are acces direct la instanța Jira pentru a crea, atribui sau actualiza tichete. Planificarea task-urilor este o propunere inițială, iar managementul efectiv al backlog-ului și al sprinturilor în Jira este responsabilitatea exclusivă a Tutorelui.

    **2.2.3. Rol 3: Furnizor de Bază de Cunoștințe Tehnice Enciclopedice și Curator Inițial de Resurse de Învățare**
    *   **Responsabilitate:** Oferă informații tehnice detaliate despre conceptele fundamentale, sintaxa de bază, metodele de implementare și configurare pentru fiecare tehnologie utilizată în proiect. Include explicații despre rațiunea din spatele alegerilor tehnologice și despre modul de abordare a implementărilor inițiale.
    *   **Implicare:** Include în acest document (sau în anexe) exemple de cod minimale, comenzi esențiale, structuri de configurare tipice și referințe către documentația oficială a producătorilor, tutoriale video de calitate recunoscută și articole relevante care pot constitui un punct de plecare solid pentru procesul de auto-învățare al studenților. Subliniază bunele practici general acceptate în industrie, adaptate pentru nivelul începător.
    *   **Limitare:** AI-ul nu poate înlocui experiența practică și expertiza specifică a Tutorelui. Informațiile tehnice furnizate sunt generale și pot necesita adaptare la contextul exact al proiectului. Nu poate oferi training personalizat, sesiuni de codare live sau depanare interactivă; informațiile sunt statice, conținute în acest document scris.

    **2.2.4. Rol 4: Consultant pentru Definirea Proceselor de Lucru și a Instrumentelor Standard**
    *   **Responsabilitate:** Oferă recomandări, template-uri detaliate și sugestii pentru utilizarea eficientă și consistentă a instrumentelor de management de proiect (Jira), a sistemului de versionare a codului (Git & GitHub), și pentru adaptarea ceremoniilor și practicilor Agile în contextul specific al acestui proiect de practică.
    *   **Implicare:** Sugerează standarde detaliate de codare și formatare (per tehnologie), formate pentru mesajele de commit Git, structuri cuprinzătoare pentru documentația `SETUP_MODUL.md`, și o "Definition of Done" (DoD) robustă și clară pentru task-uri.
    *   **Limitare:** Implementarea efectivă, impunerea și monitorizarea respectării acestor procese și standarde depind integral de autoritatea și implicarea Tutorelui, precum și de angajamentul studenților.

    **2.2.5. Rol General: Asistent Pasiv în Execuția Proiectului, Furnizor de Structură și Detaliu**
    *   **Responsabilitate:** Scopul fundamental al Asistentului AI este de a-l sprijini pe Tutore (Petrut Constantin) și pe studenți prin furnizarea unui plan de proiect și a unei documentații de referință cât mai complete, detaliate, clare și bine structurate posibil. Acest efort este menit să reducă ambiguitatea, să accelereze procesul de onboarding, să ghideze procesul de învățare și să faciliteze dezvoltarea tehnică.
    *   **Limitare Fundamentală și Explicită:** Asistentul AI **NU** scrie cod funcțional pentru componentele proiectului "DeviMarket Zero", **NU** configurează servere, baze de date sau medii de dezvoltare în locul studenților, **NU** depanează erori de execuție specifice mediilor studenților și **NU** participă la ședințe sau la alte forme de comunicare directă și interactivă (decât prin intermediul output-ului său scris, care este utilizat, interpretat și adaptat de Tutore). Este un instrument avansat de suport informațional și structural, dar pasiv în ceea ce privește execuția efectivă a proiectului.

**2.3. Studenți (Membri ai Echipelor de Dezvoltare): Așteptări și Responsabilități Detaliate**

Succesul individual al fiecărui student în acest program de practică, dezvoltarea competențelor tehnice și soft, precum și atingerea obiectivelor proiectului "DeviMarket Zero" depind în mod crucial de asumarea conștientă, proactivă și responsabilă a următoarelor responsabilități. Acestea reflectă așteptările dintr-un mediu de lucru profesionist în domeniul IT, adaptate specific contextului de învățare și mentorat al acestui program.

    **2.3.1. Responsabilitate Fundamentală 1: Angajament Activ, Seriozitate Profesională și Participare Deplină la Toate Activitățile Proiectului**
    *   **Așteptare Detaliată:** Fiecare student va aborda acest proiect de practică cu un nivel înalt de seriozitate și profesionalism, similar unui angajament real. Se așteaptă o implicare totală și conștientă în toate activitățile proiectului, de la studiul individual aprofundat și participarea la ședințe, până la realizarea riguroasă a task-urilor alocate și contribuția activă la crearea unui mediu de lucru colaborativ și productiv. Punctualitatea și respectarea angajamentelor sunt esențiale.
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   Pregătirea temeinică și individuală pentru fiecare ședință programată (Sprint Planning, Daily Stand-up, Sprint Review, Retrospective) prin citirea în avans a materialelor relevante (ex: acest README, descrierile task-urilor Jira) și prin formularea în prealabil a întrebărilor de clarificare sau a punctelor de discuție.
        *   Participarea activă, atentă și constructivă la toate discuțiile de echipă și la ședințele comune, oferind input valoros, ascultând opiniile celorlalți și contribuind la luarea deciziilor.
        *   Respectarea integrală și eficientă a orelor de lucru efectiv alocate pentru proiect în fiecare sprint (8h în Sprint 2, 60h în Sprint 3, 20h în Sprint 4), concentrându-se pe atingerea obiectivelor sprintului.
        *   Menținerea unei atitudini pozitive, deschise la învățare și constructive în toate interacțiunile cu Tutorele și cu ceilalți colegi.
        *   Inițiativă în a solicita task-uri suplimentare sau a ajuta colegii dacă propriile task-uri sunt finalizate mai devreme, cu acordul Tutorelui.

    **2.3.2. Responsabilitate Fundamentală 2: Învățare Proactivă, Autonomă, Continuă și Dezvoltarea unei Curiozități Intelectuale Active**
    *   **Așteptare Detaliată:** Studenții vor fi principalii arhitecți ai propriului proces de învățare și dezvoltare a competențelor. Acest document de proiect și ghidarea directă, personalizată, a Tutorelui reprezintă puncte de plecare și un suport indispensabil, dar se așteaptă ca fiecare student să demonstreze un grad înalt de inițiativă, autonomie și perseverență în explorarea, înțelegerea și stăpânirea tehnologiilor noi și complexe. Curiozitatea intelectuală și dorința autentică de a înțelege "cum funcționează lucrurile" în detaliu sunt atribute cheie pentru succes.
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   Alocarea conștientă și disciplinată de timp individual pentru studiu aprofundat și experimentare practică, dincolo de orele strict alocate task-urilor. Aceasta include:
            *   Citirea și înțelegerea documentației oficiale a tehnologiilor (MuleSoft, Talend, React, ClickHouse, Docker, MicroPython etc.).
            *   Parcurgerea activă a tutorialelor video și scrise recomandate (din Anexa 8.4 sau identificate individual).
            *   Explorarea articolelor de specialitate, a blog-urilor tehnice și a exemplelor de cod open-source relevante pentru tehnologiile și problemele specifice întâmpinate.
        *   **Dezvoltarea Abilității de Rezolvare Autonomă a Problemelor:** Înainte de a solicita imediat ajutor pentru o problemă tehnică, o eroare de compilare/rulare sau o neclaritate conceptuală, studentul va depune un efort individual rezonabil și documentabil (ex: minim 30-60 minute de cercetare concentrată, încercări de depanare, consultarea documentației) pentru a identifica sursa problemei și a încerca să găsească o soluție pe cont propriu. Această practică dezvoltă gândirea analitică și abilitățile de debugging.
        *   Experimentarea cu funcționalități și concepte adiacente cerințelor minime ale task-urilor, dacă timpul alocat task-ului principal o permite și există un interes specific, cu scopul de a lărgi orizontul de cunoaștere (ex: explorarea unor componente Talend/MuleSoft suplimentare neutilizate în MVP, încercarea unor tehnici de state management mai avansate în React, testarea unor configurații Docker mai complexe).
        *   Împărtășirea activă și generoasă a cunoștințelor noi dobândite, a resurselor de învățare valoroase descoperite și a soluțiilor ingenioase la probleme comune cu ceilalți colegi de echipă și din alte echipe, contribuind la un mediu de învățare colaborativ.
        *   **Pentru Team_1 (MuleSoft & Talend):** Asumarea responsabilității de a depune un efort de învățare individuală semnificativ mai mare, dat fiind complexitatea intrinsecă și curba de învățare mai abruptă a platformelor MuleSoft Anypoint Studio (cu DataWeave) și Talend Open Studio. Se așteaptă ca acești studenți să devină "punctele de referință" și "experții" echipei pe aceste tehnologii specifice, capabili să ofere suport și colegilor din alte echipe dacă este necesar (ex: la definirea contractelor API).

    **2.3.3. Responsabilitate Fundamentală 3: Realizarea Task-urilor Alocate cu Maximă Responsabilitate, Rigoare Tehnică și Orientare spre Calitate**
    *   **Așteptare Detaliată:** Fiecare student este pe deplin responsabil și răspunzător ("accountable") pentru finalizarea la timp (conform estimărilor agreate și deadline-urilor de sprint) și la un nivel înalt de calitate tehnică a tuturor task-urilor (User Stories, Task-uri Tehnice, Bug Fix-uri) care îi sunt atribuite în Jira. Calitatea se referă nu doar la corectitudinea funcțională ("face ce trebuie"), ci și la robustețea soluției (gestionarea erorilor), eficiența (în contextul MVP), lizibilitatea și mentenabilitatea codului/configurațiilor, și la documentarea adecvată.
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   Analiza atentă, completă și critică a cerințelor fiecărui task din Jira (descriere detaliată, context de business, criterii de acceptare specifice) și solicitarea proactivă de clarificări de la Tutore dacă există cea mai mică ambiguitate sau neînțelegere, **ÎNAINTE** de a începe efectiv implementarea.
        *   Participarea activă și onestă la eventualele sesiuni de estimare a efortului pentru task-uri (dacă Tutorele decide implementarea acestei practici Agile, ex: folosind Story Points simplificați sau ore ideale), bazându-se pe înțelegerea cerințelor și pe experiența acumulată.
        *   Respectarea cu strictețe și consecvență a standardelor de codare, formatare și denumire definite în Capitolul 6.5 pentru fiecare tehnologie în parte (React/JS/TS, MicroPython, DataWeave, Java în Talend/MuleSoft, SQL, Dockerfile, NGINX conf). Utilizarea linter-elor și formatter-elor automate acolo unde sunt disponibile.
        *   **Testarea exhaustivă, sistematică și multi-dimensională a propriei munci înainte de a considera un task finalizat și de a crea un Pull Request.** Aceasta include, dar nu se limitează la:
            *   Testarea funcțională a scenariilor pozitive (nominale) specificate în criteriile de acceptare.
            *   Testarea scenariilor negative și a cazurilor limită (edge cases) pentru a verifica robustețea și gestionarea corectă a erorilor (ex: input invalid, date lipsă, erori de rețea, API-uri externe indisponibile).
            *   Testarea unitară la nivel de funcție/componentă (acolo unde este fezabil și aduce valoare, ex: pentru funcții DataWeave complexe, componente React cu logică proprie).
            *   Testarea de integrare la nivel de modul (ex: verificarea că API-ul MuleSoft interacționează corect cu ClickHouse, că job-ul Talend citește și scrie corect, că scriptul RPi Pico trimite date valide).
        *   Actualizarea zilnică, corectă și detaliată a statusului task-urilor în Jira: mutarea promptă a cardurilor pe board-ul Agile, adăugarea de comentarii concise dar informative despre progresul realizat, dificultățile întâmpinate, soluțiile implementate, timpul rămas estimat (dacă se cere).
        *   Asumarea completă a proprietății ("ownership") asupra task-urilor alocate, de la preluare până la finalizarea completă conform Definition of Done (DoD), inclusiv parcurgerea ciclurilor de code review, integrarea feedback-ului primit și asigurarea că funcționalitatea este validată și acceptată.

    **2.3.4. Responsabilitate Fundamentală 4: Colaborare Exemplară, Construirea unui Spirit de Echipă Bazat pe Sprijin Reciproc și Respect**
    *   **Așteptare Detaliată:** Deși studenții sunt organizați în "Parent Teams" și vor avea un focus pe module tehnice specifice, succesul general al proiectului "DeviMarket Zero" și calitatea experienței de învățare pentru toți depind în mod fundamental de capacitatea de a lucra împreună ca o echipă unită, coezivă și solidară. Se așteaptă un comportament de echipă exemplar, caracterizat prin sprijin reciproc activ, respect pentru diversitatea de opinii și competențe, și un angajament comun față de atingerea obiectivelor proiectului.
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   Menținerea unei comunicări deschise, oneste, transparente și, mai ales, respectuoase cu toți colegii, indiferent de echipa din care fac parte, și cu Tutorele. Se va evita orice formă de critică neconstructivă sau limbaj neprofesional.
        *   Oferirea proactivă și necondiționată de ajutor colegilor care se confruntă cu dificultăți tehnice sau conceptuale, dacă studentul respectiv posedă cunoștințele sau experiența necesară pentru a oferi sprijin. Aceasta include și partajarea de resurse sau explicații.
        *   Solicitarea de ajutor de la colegi într-un mod clar, specific și respectuos, doar după ce s-a depus un efort individual consistent de rezolvare a problemei. Se va aprecia timpul și efortul colegilor care oferă ajutor.
        *   Participarea activă, matură și constructivă la sesiunile de code review, cu scopul de a îmbunătăți calitatea generală a codului proiectului. Feedback-ul oferit va fi specific, argumentat tehnic, politicos și orientat spre soluții. Feedback-ul primit va fi acceptat cu deschidere, analizat obiectiv și integrat cu profesionalism.
        *   Abordarea și rezolvarea eventualelor divergențe de opinie tehnică sau a conflictelor interpersonale (dacă, în mod excepțional, ar apărea) într-un mod calm, matur, profesionist și întotdeauna orientat spre găsirea celei mai bune soluții pentru proiect și pentru echipă, implicând Tutorele ca mediator dacă este necesar.
        *   Împărtășirea entuziastă a succeselor individuale și de echipă și recunoașterea promptă și sinceră a contribuțiilor valoroase ale colegilor. Promovarea unui mediu de lucru pozitiv și motivant.

    **2.3.5. Responsabilitate Fundamentală 5: Comunicare Transparentă, Proactivă, Eficientă, Asertivă și Respectarea Regulii de Aur (NU SE FAC PRESUPUNERI!)**
    *   **Așteptare Detaliată:** O comunicare clară, la obiect, la timp și eficientă este absolut vitală pentru buna desfășurare a oricărui proiect software, și cu atât mai mult într-un context de învățare cu multe necunoscute. Studenții trebuie să fie proactivi în a comunica informații relevante și asertivi (dar politicoși) în a solicita clarificările de care au nevoie.
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   **RESPECTAREA CU SFINȚENIE A REGULEI DE AUR: NU SE FAC PRESUPUNERI NICIODATĂ!** Dacă o cerință funcțională, un detaliu tehnic dintr-o specificație, un task din Jira, o explicație oferită de Tutore, un comentariu dintr-un code review sau orice alt aspect al proiectului nu este 100% clar, lipsit de ambiguitate și pe deplin înțeles, studentul ARE RESPONSABILITATEA fundamentală și necondiționată să pună întrebări (Tutorelui, colegilor relevanți, sau Asistentului AI prin intermediul Tutorelui) până când toate nelămuririle sunt complet și satisfăcător eliminate. Este întotdeauna mai bine și mai eficient să se pună "prea multe" întrebări pertinente decât să se piardă timp și efort lucrând pe baza unor presupuneri greșite, care pot duce la rework și frustrare.
        *   Anunțarea imediată, transparentă și detaliată a oricăror blocaje majore (fie ele tehnice – ex: o eroare persistentă, o problemă de configurare; de înțelegere – ex: o cerință neclară; de timp – ex: o estimare inițială nerealistă; sau de resurse – ex: lipsa unui software sau a unei informații) în canalul de comunicare principal al proiectului și/sau în cadrul Daily Stand-up-urilor. Aceasta permite intervenția rapidă a Tutorelui sau a altor colegi pentru deblocare.
        *   Documentarea (ex: într-un comentariu Jira, într-un mesaj pe canalul de discuții al echipei, sau chiar într-un document partajat) a întrebărilor importante care au necesitat clarificări extinse și a răspunsurilor/soluțiilor primite. Aceasta creează o bază de cunoștințe utilă și pentru alți membri ai echipei care s-ar putea confrunta cu aceleași nelămuriri.
        *   Utilizarea corectă, consistentă și eficientă a canalelor de comunicare stabilite pentru proiect (ex: Discord/Slack pentru discuții tehnice rapide, schimb de idei și anunțuri; Jira pentru urmărirea oficială a task-urilor și a problemelor; email pentru comunicări mai formale sau care necesită o arhivare specifică).
        *   Oferirea de actualizări de status clare, concise și relevante în timpul Daily Stand-up-urilor (dacă se organizează), concentrându-se pe cele trei întrebări cheie.

    **2.3.6. Responsabilitate Fundamentală 6: Respectarea Riguroasă, Consecventă și Disciplinată a Standardelor și Proceselor Definite pentru Proiect**
    *   **Așteptare Detaliată:** Pentru a asigura un nivel înalt de consistență a muncii în echipă, o calitate superioară a codului sursă și a celorlalte livrabile, precum și o eficiență generală a procesului de dezvoltare, este imperativ ca toți studenții să adere cu strictețe și disciplină la standardele de codare, procesele de versionare a codului (Git workflow), metodologia Agile adaptată și toate celelalte reguli, convenții și bune practici stabilite și documentate pentru proiectul "DeviMarket Zero" (majoritatea detaliate în Capitolul 6).
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   Configurarea IDE-urilor (VS Code, Anypoint Studio, Talend Studio) pentru a utiliza și, pe cât posibil, a impune automat formatarea codului conform standardelor de stil definite pentru fiecare tehnologie (ex: utilizarea Prettier/ESLint pentru React/JavaScript/TypeScript și integrarea cu "Format On Save"; respectarea convențiilor PEP8 pentru MicroPython; formatarea automată DataWeave din Anypoint Studio; menținerea unui design vizual curat și aliniat în Talend).
        *   Scrierea de mesaje de commit Git care sunt întotdeauna clare, descriptive, atomice și respectă formatul Conventional Commits (sau alt format agreat de Tutore).
        *   Respectarea întocmai și fără excepții a fluxului de Pull Requests (PRs) definit: crearea PR-ului de pe un feature branch către branch-ul `develop`, adăugarea unei descrieri complete și relevante a PR-ului (cu link către task-ul Jira), solicitarea de code review de la Tutore și/sau peer revieweri, integrarea promptă și corectă a feedback-ului primit, și așteptarea aprobării formale înainte de a efectua operațiunea de merge.
        *   Contribuția activă la menținerea unui board Jira curat, organizat și mereu actualizat, reflectând starea reală a task-urilor.
        *   Respectarea Definition of Done (DoD) pentru fiecare task înainte de a-l considera finalizat.

    **2.3.7. Responsabilitate Fundamentală 7: Crearea și Întreținerea Meticuloasă, Consecventă și de Calitate a Documentației Tehnice Asocociate Muncii Prestate**
    *   **Așteptare Detaliată:** Documentația tehnică nu este o corvoadă sau o activitate opțională de final de proiect, ci o parte integrală, continuă și esențială a procesului de dezvoltare software profesionist. Fiecare student este responsabil pentru documentarea clară, precisă, completă și actualizată a muncii sale, pentru a facilita înțelegerea de către ceilalți membri ai echipei, pentru a sprijini procesul de code review, pentru a permite o integrare mai ușoară a modulelor, pentru a simplifica depanarea și mentenanța ulterioară (chiar și în contextul acestui proiect de practică) și pentru a asigura un transfer eficient de cunoștințe.
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   Crearea și actualizarea constantă, pe măsură ce se lucrează la modul, a fișierului `SETUP_MODUL.md` pentru tehnologiile și modulele specifice la care contribuie fiecare echipă/student. Acest fișier trebuie să fie un ghid "ca la carte", extrem de detaliat și ușor de urmat, permițând oricărui alt membru al echipei (sau Tutorelui) să instaleze, configureze și să ruleze o versiune de bază a modulului respectiv fără dificultăți majore. Va include versiuni software, comenzi exacte, capturi de ecran relevante, pași de configurare specifici și o secțiune de troubleshooting.
        *   Comentarea judicioasă și utilă a codului sursă (JavaScript/React, MicroPython), a scripturilor DataWeave complexe (MuleSoft), a logicii din spatele componentelor și transformărilor din job-urile Talend, și a configurațiilor mai puțin evidente (NGINX, Docker Compose, scripturi SQL de inițializare). Comentariile trebuie să explice intenția ("de ce?"), logica complexă sau deciziile de design non-triviale, nu să parafrazeze ceea ce codul face deja în mod evident.
        *   Contribuția activă și de calitate la redactarea și revizuirea Documentației Tehnice Finale Consolidate a proiectului în Sprint 4, sub coordonarea rolului de QA (Culesca T.M.) și a Tutorelui. Aceasta include scrierea secțiunilor specifice modulului propriu și oferirea de feedback constructiv pe secțiunile scrise de colegi.
        *   Asigurarea că orice contribuție semnificativă la cod (ex: adăugarea unei noi funcționalități, un refactor major, rezolvarea unui bug complex) este însoțită de actualizarea documentației relevante (comentarii în cod, README-ul modulului, specificația API, etc.).

    **2.3.8. Responsabilitate Fundamentală 8: Pregătirea Conștiincioasă și Proactivă pentru Prezentarea Finală a Proiectului și pentru Valorificarea Experienței în Autopromovarea Profesională**
    *   **Așteptare Detaliată:** Finalul programului de practică va include o prezentare formală a proiectului "DeviMarket Zero" și a experienței acumulate. Fiecare student va contribui activ la acest efort de echipă și, în paralel, își va pregăti materialele și discursul pentru a putea valorifica în mod eficient experiența și competențele dobândite în acest proiect în viitoarele interacțiuni profesionale (interviuri, profiluri online, etc.).
    *   **Acțiuni Specifice Demonstrative și Măsurabile:**
        *   Colaborarea activă și creativă cu membrii echipei la definirea structurii, a conținutului și la crearea materialelor suport (prezentare PowerPoint/Google Slides, eventuale demo-uri video scurte) pentru prezentarea finală a proiectului.
        *   Asumarea responsabilității pentru pregătirea și exersarea individuală a secțiunii (sau secțiunilor) din prezentarea finală care îi revine (conform distribuției făcute de Tutore/echipă), asigurând o expunere clară, concisă, fluentă și de impact.
        *   Redactarea și rafinarea atentă, cu sprijinul activ și feedback-ul individualizat al Tutorelui, a descrierii proiectului "DeviMarket Zero" și a tehnologiilor specifice pe care le-a învățat și utilizat (cu exemple concrete de contribuții), pentru a fi inclusă în mod proeminent și convingător în CV-ul personal.
        *   Reflectarea critică și onestă asupra propriei experiențe de învățare pe parcursul proiectului, identificând principalele competențe tehnice și soft dobândite sau îmbunătățite, provocările depășite și lecțiile învățate, pentru a le putea articula clar la prezentare și în discuțiile viitoare.
        *   Participarea la sesiunile de repetiție ("dry-runs") ale prezentării finale și oferirea de feedback constructiv colegilor.

---

---

**3. ARHITECTURA TEHNICĂ DETALIATĂ A SISTEMULUI "DEVI MARKET ZERO" (Versiune 5.0 - Finală, MuleSoft Central)**

Acest capitol oferă o descriere exhaustivă și detaliată a arhitecturii tehnice a proiectului "DeviMarket Zero". Scopul său este de a furniza o înțelegere profundă și lipsită de ambiguități a modului în care diferitele componente tehnologice (MuleSoft, Talend, React, ClickHouse, Raspberry Pi Pico, Docker, NGINX) sunt structurate, cum interacționează și care sunt fluxurile principale de date pentru a realiza funcționalitățile marketplace-ului. Se va pune un accent deosebit pe explicarea conceptelor fundamentale pentru studenții care iau contact pentru prima dată cu multe dintre aceste tehnologii, precum și pe evidențierea responsabilităților specifice ale echipelor pentru designul, implementarea și mentenanța fiecărei componente.

**3.1. Principii de Arhitectură Adoptate (MuleSoft ca Platformă API Centrală și Motor de Integrare)**

Arhitectura sistemului "DeviMarket Zero" a fost proiectată și rafinată pe baza următoarelor principii directoare, care sunt aliniate cu cerințele clientului simulat "GlobalGoods Inc.", cu obiectivele de învățare ale studenților și cu constrângerile proiectului:

1.  **MuleSoft Anypoint Platform ca Strat Central de API-uri, Logică de Business și Integrare:**
    - **Justificare Tehnică și Educațională:** Pentru a oferi studenților din Team_1 o experiență practică semnificativă și relevantă pentru industrie cu o platformă de integrare de top, MuleSoft (rulat local prin Anypoint Studio) a fost desemnat ca fiind componenta principală care va expune API-urile RESTful ale sistemului, va orchestra fluxurile de date critice (de la scanner și API-ul extern) și va gestiona interacțiunea directă cu baza de date ClickHouse pentru operațiunile inițiate prin aceste API-uri. Această alegere elimină necesitatea unui backend tradițional separat (cum ar fi unul bazat pe FastAPI/Python, care a fost considerat inițial) pentru aceste funcționalități, concentrând logica de backend în MuleSoft.
    - **Implicații Arhitecturale:** MuleSoft devine "inima" sistemului, gestionând API-urile pentru Frontend (React), API-ul pentru scannerul RPi Pico, și API-ul fațadă pentru sursa de date externă. Toată logica de validare, transformare (cu DataWeave) și persistență (în ClickHouse) pentru aceste fluxuri va fi implementată în aplicațiile Mule.

2.  **Talend Open Studio pentru Procese ETL Batch Specifice și Migrare de Date:**
    - **Justificare Tehnică și Educațională:** Pentru a introduce studenții din Team_1 în conceptele și uneltele specifice proceselor ETL (Extract, Transform, Load) clasice, în special cele care implică lucrul cu volume de date în mod batch și migrarea/sincronizarea între diferite structuri de baze de date (chiar dacă în acest caz sursa și destinația sunt ambele în ClickHouse, dar simulate ca fiind distincte).
    - **Implicații Arhitecturale:** Talend va opera într-un mod mai "offline" sau programat. Principalul său rol va fi de a extrage date din "baza de date franceză" simulată, a le transforma și a le încărca direct în baza de date principală a proiectului. Opțional, poate consuma API-uri expuse de MuleSoft, demonstrând un alt pattern de integrare.

3.  **Frontend React Decuplat și Modern (Single Page Application - SPA):**
    - **Justificare Tehnică și Educațională:** Aplicația Frontend (dezvoltată în React) va fi o aplicație client-side pură, care rulează integral în browserul utilizatorului. Aceasta comunică cu logica de backend (API-urile expuse de MuleSoft) exclusiv prin request-uri HTTP asincrone. Aceasta este o arhitectură modernă, scalabilă și comună pentru aplicațiile web interactive.
    - **Implicații Arhitecturale:** Team_2 se va concentra pe dezvoltarea experienței utilizator (UI/UX), pe logica de prezentare și pe interacțiunea client-side (inclusiv integrarea MetaMask), consumând API-urile bine definite și documentate (RAML) furnizate de Team_1 (MuleSoft).

4.  **Bază de Date ClickHouse Optimizată pentru Stocarea Datelor despre Produse:**
    - **Justificare Tehnică și Educațională:** Alegerea ClickHouse respectă cerința clientului simulat și oferă studenților oportunitatea de a lucra cu o bază de date NoSQL analitică, orientată pe coloane, recunoscută pentru performanța sa excepțională la interogări complexe pe volume mari de date (deși în acest proiect volumul va fi mic, conceptele sunt importante). Pentru acest MVP, o vom utiliza și pentru operațiuni de scriere relativ frecvente, adaptând designul pentru acest scop.
    - **Implicații Arhitecturale:** Toate datele despre produse (din CSV via Talend, din API extern via MuleSoft, de la scanner via MuleSoft) vor fi consolidate și stocate în mod centralizat în instanța ClickHouse. Team_1 (MuleSoft și Talend) va fi principalul responsabil pentru operațiunile de scriere și actualizare, iar Team_1 (MuleSoft) va fi responsabil pentru expunerea API-urilor de citire pentru consumul de către Team_2 (Frontend).

5.  **Containerizare Docker pentru Serviciile de Infrastructură Esențiale:**
    - **Justificare Tehnică și Educațională:** Pentru a asigura un mediu de rulare consistent, portabil, izolat și ușor de gestionat pentru componentele de infrastructură (baza de date ClickHouse și serverul web NGINX care servește build-ul React). Aceasta introduce studenții în conceptele și practicile DevOps fundamentale.
    - **Implicații Arhitecturale:** ClickHouse și NGINX vor rula în containere Docker separate, definite și orchestrate printr-un fișier `docker-compose.yml`. Team_7 va fi responsabil pentru crearea Dockerfile-urilor optimizate și a configurației Docker Compose.

6.  **Rulare Nativă (Non-Containerizată) pentru Platformele de Dezvoltare și Integrare (MuleSoft Anypoint Studio, Talend Open Studio):**
    - **Justificare Tehnică și Educațională:** Pentru a simplifica curba de învățare inițială și procesul de setup pentru platformele MuleSoft Anypoint Studio și Talend Open Studio (care sunt aplicații Java complexe cu propriile medii de execuție), acestea vor fi instalate și rulate direct pe mașinile virtuale Ubuntu ale studenților din Team_1. Containerizarea acestor platforme de dezvoltare este un subiect avansat și ar adăuga o complexitate considerabilă, inutilă pentru obiectivele acestui MVP.
    - **Implicații Arhitecturale:** Team_1 va trebui să gestioneze instalarea și configurarea corectă a acestor unelte pe VM-urile lor. Comunicarea dintre aceste aplicații native și serviciile Dockerizate (cum ar fi ClickHouse) se va realiza prin intermediul porturilor pe care Docker le expune pe interfața de rețea a mașinii virtuale (host-ul Docker).

7.  **Integrare Hardware Distinctă și Decuplată (Raspberry Pi Pico W):**
    - **Justificare Tehnică și Educațională:** Introduce studenții din Team_9 în conceptele fundamentale ale dezvoltării pentru sisteme embedded (IoT), programării în MicroPython și interacțiunii unui dispozitiv fizic cu un sistem software prin API-uri de rețea.
    - **Implicații Arhitecturale:** Dispozitivul RPi Pico W va funcționa ca un client independent care, după citirea unui cod de bare, va iniția un request HTTPS către un API specific expus de MuleSoft. Acest API MuleSoft va fi punctul de intrare al datelor de la scanner în sistemul central.

8.  **Implementarea Securității de Bază pentru Mediu Local (HTTPS cu Certificate Self-Signed):**
    - **Justificare Tehnică și Educațională:** Chiar și într-un mediu de dezvoltare local, este important să se introducă și să se practice conceptele de securitate a comunicațiilor, cum ar fi utilizarea HTTPS.
    - **Implicații Arhitecturale:** API-ul MuleSoft expus pentru scannerul RPi Pico va fi configurat să utilizeze HTTPS, folosind un certificat SSL auto-semnat (self-signed certificate) generat local. Scriptul de pe RPi Pico va trebui să fie capabil să gestioneze conexiunea la acest endpoint HTTPS (cel mai probabil prin ignorarea validării certificatului, o practică acceptabilă STRICT pentru acest context local). Similar, NGINX care servește Frontend-ul poate fi configurat cu HTTPS self-signed.

**3.2. Diagrama Arhitecturală Generală a Sistemului (Ilustrând Fluxurile Detaliate și Responsabilitățile Echipelor)**

```mermaid
graph TD
    subgraph USER_INTERACTION [Utilizator & Dispozitive Externe]
        direction LR
        UserInterface[("Browser Web Utilizator<br>Interacționează cu React App<br>Conectare MetaMask")]
        HardwareScanner[("Scanner Coduri de Bare<br>Conectat la RPi Pico W")]
        RPiPicoW[("Raspberry Pi Pico W<br>Rulează Script MicroPython<br>Conectat la WiFi Local<br><b>Responsabilitate: Team_9</b>")]
    end

    subgraph VM_TEAM_1 [VM Ubuntu Student Team_1 - Rulează Nativ]
        direction TB
        subgraph MULESOFT_PLATFORM [MuleSoft Anypoint Studio & Runtime Embedat]
            MuleAPIScanner[API: /api/scanner/product_scan (HTTPS)<br>Primește date de la RPi Pico<br>Logic: Validare, Upsert în ClickHouse]
            MuleAPIExternal[API: /api/marketplace/ingest-external-products (HTTP)<br>Proxy/Fațadă API Extern<br>Logic: Extragere, Transformare (DataWeave), Upsert în ClickHouse]
            MuleAPIFrontendRead[API: /api/marketplace/products (HTTP)<br>GET /products, GET /products/{id}<br>Logic: Citire din ClickHouse, Formatare JSON]
        end
        MuleSoftPlatform[("<b>MuleSoft Anypoint Platform</b><br>API Gateway Central, Logică Business,<br>Interacțiune Directă cu ClickHouse<br><b>Responsabilitate: Team_1</b>")]
        TalendStudio[("<b>Talend Open Studio</b><br>Rulează Job-uri ETL Batch<br>ETL: 'DB Franceză' (ClickHouse) -> DB Proiect (ClickHouse)<br>(Opțional) ETL: Consum API MuleSoft -> DB Proiect (ClickHouse)<br><b>Responsabilitate: Team_1</b>")]

        MuleSoftPlatform -.-> MuleAPIScanner
        MuleSoftPlatform -.-> MuleAPIExternal
        MuleSoftPlatform -.-> MuleAPIFrontendRead
    end

    subgraph DOCKER_INFRASTRUCTURE [Infrastructură Docker Rulată pe VM-uri]
        direction TB
        NginxProxy[("<b>NGINX Reverse Proxy</b><br>Servește React App Build Static<br>HTTPS Self-Signed (Opțional)<br><b>Responsabilitate: Team_7</b>")]
        ReactAppBuild[("React Application Build<br>(Fișiere Statice HTML/CSS/JS)<br>Produs de: <b>Team_2</b>")]
        ClickHouseService[("<b>ClickHouse Database Server</b><br>Baze de date: `devimarket_db`, `clickhouse_db_franceza`<br>Tabele: `products`, `products_fr`<br><b>Responsabilitate Setup: Team_7</b>")]
    end

    %% Fluxuri de Date Principale
    UserInterface -- HTTPS/HTTP (ex: devimarket.local) --> NginxProxy
    NginxProxy -- Servește fișiere statice --> ReactAppBuild
    %% React App (rulând în browser) face apeluri API către MuleSoft
    %% Această săgeată este conceptuală, deoarece React App din browser va apela IP:PORT al VM-ului Team_1
    UserInterface -.->|HTTP API Calls<br>(către IP_VM_Team_1:Port_Mule_Frontend)| MuleAPIFrontendRead

    HardwareScanner -- USB --> RPiPicoW
    RPiPicoW -- HTTPS POST (către IP_VM_Team_1:Port_Mule_Scanner)<br>JSON: {barcode, timestamp} --> MuleAPIScanner

    MuleAPIScanner -- JDBC/SQL (INSERT/UPDATE) --> ClickHouseService
    MuleAPIExternal -- JDBC/SQL (INSERT/UPDATE) --> ClickHouseService
    MuleAPIFrontendRead -- JDBC/SQL (SELECT) --> ClickHouseService

    TalendStudio -- JDBC/SQL (SELECT din 'DB Franceză', INSERT în DB Proiect) --> ClickHouseService
    TalendStudio -- (Opțional) HTTP GET (către IP_VM_Team_1:Port_Mule_External_Products_API) --> MuleAPIExternal


    %% Clarificări Adiționale pe Diagramă:
    %% - Linia punctată de la UserInterface către MuleAPIFrontendRead indică un apel de rețea din browser către un serviciu care rulează pe VM-ul Team_1.
    %% - Presupunem că VM-urile studenților sunt în aceeași rețea locală pentru ca RPi Pico și browserul să poată accesa API-urile MuleSoft rulate pe VM-ul unui student din Team_1.
    %% - NGINX nu face proxy către MuleSoft în această arhitectură; MuleSoft expune API-urile direct pe porturile sale.
```
````

**Interpretarea Detaliată a Diagramei Arhitecturale:**

- **Utilizatorul Final (Browser Web):** Interacționează cu aplicația Frontend React, care este servită static de către NGINX. Toate cererile de date dinamice din Frontend (ex: listarea produselor) sunt request-uri HTTP către API-urile specifice expuse de MuleSoft.
- **Raspberry Pi Pico W:** Funcționează ca un client hardware. După scanarea unui cod de bare, construiește un mesaj JSON și inițiază un request HTTPS POST direct către un API dedicat expus de MuleSoft (pe VM-ul unui student din Team_1), securizat cu un certificat self-signed.
- **MuleSoft Anypoint Platform (Rulat Nativ pe VM Team_1):** Acesta este **componenta centrală de backend și integrare**.
  - Expune multiple API-uri RESTful:
    - Un API HTTPS pentru a primi date de la RPi Pico (`/api/scanner/product_scan`).
    - Un API HTTP pentru a orchestra preluarea și procesarea datelor de la un API extern gratuit (`/api/marketplace/ingest-external-products`).
    - Un set de API-uri HTTP pentru a fi consumate de aplicația Frontend React (`/api/marketplace/products`, `/api/marketplace/products/{id}`).
  - Implementează logica de business: validarea datelor primite, transformarea datelor (folosind DataWeave), și logica de "upsert" (insert or update) a produselor.
  - Interacționează direct cu baza de date ClickHouse (care rulează în Docker) prin JDBC și query-uri SQL pentru toate operațiunile de citire și scriere inițiate prin API-urile sale.
- **Talend Open Studio (Rulat Nativ pe VM Team_1):**
  - Este utilizat pentru procese ETL batch.
  - Principalul său rol este de a citi date din "baza de date franceză" simulată (un tabel/schemă în aceeași instanță ClickHouse), a le transforma, și a le încărca direct în tabelul principal `products` al proiectului (tot în ClickHouse).
  - Opțional, poate consuma un API expus de MuleSoft (cel care aduce date de la API-ul extern), demonstrând un alt pattern de integrare, și apoi încărca aceste date în ClickHouse.
- **NGINX Reverse Proxy (Rulat în Docker pe VM-uri):**
  - Rolul său principal în această arhitectură este de a servi fișierele statice ale build-ului aplicației Frontend React.
  - Poate fi configurat cu HTTPS (folosind certificate self-signed) pentru a servi Frontend-ul în mod securizat local.
  - **Important:** În această arhitectură, NGINX **NU** acționează ca un reverse proxy pentru API-urile MuleSoft (deoarece MuleSoft rulează nativ pe VM-ul Team_1 și își expune propriile endpoint-uri HTTP/HTTPS direct pe porturile sale). Dacă s-ar dori un singur punct de intrare pentru tot (ex: `devimarket.local/api-mule/*`), atunci NGINX ar trebui configurat să facă proxy și către instanța MuleSoft. Pentru MVP, accesul direct la porturile MuleSoft este mai simplu.
- **React Application Build (Fișiere Statice):** Acestea sunt fișierele HTML, CSS și JavaScript generate de procesul de build al aplicației React (`npm run build`), care sunt servite de NGINX.
- **ClickHouse Database Server (Rulat în Docker pe VM-uri):**
  - Este baza de date centrală care stochează tabelul principal `products` al marketplace-ului.
  - De asemenea, găzduiește tabelul simulat `products_fr` (în schema `clickhouse_db_franceza`) care servește ca sursă pentru job-ul ETL Talend.
  - Este accesată direct de aplicațiile MuleSoft și de job-urile Talend prin conexiuni JDBC.

**3.3. Descrierea Detaliată a Fiecărei Componente Tehnologice și Responsabilitățile Echipelor Asociate**

    **3.3.1. Componenta 1: Frontend Application (Interfața Utilizator cu React)**
    *   **Rol Detaliat în Sistem:** Aceasta este fața vizibilă a marketplace-ului "DeviMarket Zero" pentru utilizatorul final. Este o Single Page Application (SPA) care rulează în browserul utilizatorului și este responsabilă pentru întreaga prezentare a datelor și pentru interacțiunile client-side. Logica sa principală constă în:
        1.  Preluarea datelor despre produse (liste, detalii) de la API-urile specifice expuse de MuleSoft, prin request-uri HTTP asincrone.
        2.  Randararea dinamică a acestor date în componente UI structurate și stilizate.
        3.  Gestionarea navigației client-side între diferitele "pagini" ale aplicației (ex: de la lista de produse la pagina de detalii a unui produs).
        4.  Implementarea interacțiunii cu portofelul MetaMask pentru conectare și afișarea adresei.
        5.  Oferirea unui feedback vizual utilizatorului în timpul operațiunilor asincrone (stări de încărcare) și în caz de erori.
    *   **Responsabilitate Principală:** **Team_2 (Tuca Dragos Andrei, Proaspatu Nicolae Bogdan)**. Această echipă va fi responsabilă pentru întregul ciclu de viață al componentei Frontend: design UI/UX de bază, dezvoltarea componentelor React, implementarea logicii de interacțiune cu API-urile MuleSoft, stilizarea cu Tailwind CSS, testarea funcțională client-side și generarea build-ului static final.
    *   **Tehnologii Specifice Detaliate și Mod de Utilizare:**
        *   **React (v18+):** Se vor utiliza componente funcționale și toate hook-urile React relevante (`useState` pentru starea locală, `useEffect` pentru efecte secundare precum fetch de date și subscrieri, `useContext` pentru state management simplu dacă e necesar, `useParams`, `useNavigate` din React Router). Se va pune accent pe scrierea unui cod React curat, modular și pe crearea de componente reutilizabile.
        *   **Vite:** Va fi folosit pentru a crea proiectul (`npm create vite@latest devi-market-frontend -- --template react-ts` - se recomandă TypeScript) și ca server de dezvoltare (`npm run dev`) pentru hot-reloading și o experiență de dezvoltare rapidă. Comanda `npm run build` va fi folosită pentru a genera build-ul static de producție.
        *   **TypeScript (Opțional, dar Puternic Recomandat pentru Team_2):** Pentru a adăuga type safety la codul Frontend, a defini interfețe pentru props-urile componentelor și pentru structurile de date ale API-urilor MuleSoft, reducând erorile la runtime și îmbunătățind mentenabilitatea. Dacă se alege JavaScript simplu, se va insista pe validarea props-urilor cu `prop-types`.
        *   **HTML5 & CSS3:** JSX se va compila în HTML. CSS-ul va fi gestionat preponderent prin Tailwind CSS.
        *   **Tailwind CSS (v3+):** Va fi principalul instrument de stilizare. Team_2 va învăța să utilizeze clasele utilitare pentru a construi rapid interfețe responsive și customizabile, respectând un design ghid simplu (dacă este furnizat).
        *   **React Router DOM (v6+):** Pentru implementarea completă a rutării client-side, inclusiv rute dinamice cu parametri (pentru paginile de detalii produs) și o rută "Not Found".
        *   **Axios:** Recomandat pentru realizarea request-urilor HTTP către API-urile MuleSoft, datorită ușurinței în utilizare, a gestionării interceptorilor (utili pentru logging sau adăugarea de token-uri de autentificare, deși nu complex în MVP) și a suportului mai bun pentru error handling față de `fetch` API nativ. Se va crea o instanță Axios configurată cu `baseURL` către API-urile MuleSoft (ex: `http://<IP_VM_Team_1>:<PORT_MULE_FRONTEND>/api/marketplace/`).
        *   **Integrare MetaMask:** Se va folosi direct API-ul `window.ethereum` injectat de extensia MetaMask. Logica va include verificarea existenței `window.ethereum`, solicitarea permisiunii de conectare (`eth_requestAccounts`), preluarea adresei contului și actualizarea UI-ului. Se va gestiona și cazul în care utilizatorul nu are MetaMask instalat.
    *   **Interacțiuni cu Alte Echipe și Dependențe:**
        *   **Dependență Critică de Team_1 (MuleSoft):** Frontend-ul este complet dependent de API-urile de citire (`GET /products`, `GET /products/{id}`) expuse de MuleSoft. Este necesară o comunicare constantă și foarte clară între Team_2 și Team_1 pentru a stabili și respecta contractele acestor API-uri: URL-uri exacte, metode HTTP, structura exactă a request-urilor (parametri de query pentru paginare/filtrare) și, cel mai important, structura exactă și tipurile de date ale răspunsurilor JSON. Orice modificare la aceste API-uri din partea Team_1 trebuie comunicată imediat către Team_2. Se recomandă ca Team_1 să furnizeze specificații RAML și exemple de răspunsuri JSON pentru Team_2 cât mai devreme posibil.
        *   **Furnizare Build către Team_7 (NGINX):** La finalul dezvoltării (și pe parcurs, pentru testare de integrare), Team_2 va genera build-ul static al aplicației React și îl va pune la dispoziția Team_7 pentru a fi inclus în imaginea Docker NGINX și servit.

    **3.3.2. Componenta 2: MuleSoft Anypoint Platform (API-uri, Logică Business, Interacțiune DB)**
    *   **Rol Detaliat în Sistem:** În această arhitectură, MuleSoft (rulat local în Anypoint Studio) este **platforma centrală de backend**. Nu este doar un strat de integrare, ci și motorul care expune API-urile consumate de Frontend și de RPi Pico, implementează o parte semnificativă din logica de business (validări, transformări, orchestrare simplă) și realizează toate interacțiunile directe cu baza de date ClickHouse pentru aceste fluxuri.
    *   **Responsabilitate Principală:** **Team_1 (Coman Raluca, Cotan Petruta, Necoara Aida Florentina)**. Această echipă are responsabilitatea completă pentru designul, dezvoltarea, testarea și documentarea tuturor aplicațiilor și API-urilor MuleSoft. Aceasta este cea mai complexă componentă din proiect și necesită un efort de învățare susținut.
    *   **Tehnologii Specifice Detaliate și Mod de Utilizare:**
        *   **MuleSoft Anypoint Studio (versiune recentă gratuită):** Va fi IDE-ul principal pentru Team_1. Vor învăța să creeze proiecte Mule, să definească fluxuri (flows și sub-flows), să configureze conectori globali (HTTP Listener Config, HTTP Request Config, Database Config), să ruleze și să depaneze aplicațiile Mule pe runtime-ul embedat.
        *   **Mule Runtime (v4.x, embedat în Studio):** Motorul care execută efectiv fluxurile Mule.
        *   **RAML (v1.0 recomandat):** Va fi utilizat pentru a defini specificațiile ("contractele") API-urilor RESTful care vor fi expuse de MuleSoft (cele pentru Frontend și cel pentru scanner). Team_1 va învăța să scrie RAML pentru a defini resurse, metode, tipuri de date (schemas JSON), și exemple. APIkit va fi folosit pentru a genera scheletul fluxurilor din RAML.
        *   **DataWeave (v2.x):** **Competență fundamentală pentru Team_1.** Va fi folosit intensiv pentru:
            *   Transformarea payload-urilor JSON primite de la API-ul extern în structura necesară pentru ClickHouse.
            *   Transformarea datelor primite de la RPi Pico (dacă este necesar) înainte de inserarea în DB.
            *   Formatarea datelor citite din ClickHouse în structura JSON așteptată de API-urile Frontend.
            *   Extragerea de valori din variabile, atribute sau payload-uri pentru a fi folosite în logica fluxului sau în query-uri DB.
            *   Implementarea unor validări sau transformări de date simple.
        *   **Conectori MuleSoft Esențiali:**
            *   `HTTP Listener`: Pentru a expune endpoint-urile API RESTful (HTTP și HTTPS). Se va configura cu căi specifice, metode HTTP permise, și, pentru API-ul scannerului, cu o configurație TLS Context care utilizează un keystore JKS cu un certificat self-signed generat local.
            *   `HTTP Request`: Pentru a apela API-ul public extern de produse. Se va configura URL-ul, metoda, headerele și parametrii de query. Se va gestiona răspunsul.
            *   `Database Connector` (configurat pentru ClickHouse): Acesta este crucial. Team_1 va trebui să:
                1.  Descarce driverul JDBC oficial sau comunitar pentru ClickHouse (ex: `clickhouse-jdbc.jar`).
                2.  Adauge acest JAR ca dependență în proiectul Mule (fie prin `pom.xml` dacă proiectul e Maven-based, fie manual în build path-ul din Anypoint Studio).
                3.  Configureze un element global `Database Config` cu URL-ul JDBC specific pentru ClickHouse (ex: `jdbc:clickhouse://<IP_VM_ClickHouse_Docker_Host>:<Port_ClickHouse_JDBC>/devimarket_db`), utilizatorul și parola pentru ClickHouse (definite de Team_7).
                4.  Utilizeze operațiunile conectorului (`Select`, `Insert`, `Update` – folosind `Parameterized Query`) pentru a interacționa cu ClickHouse. Query-urile SQL vor fi scrise direct în configurația acestor operațiuni, folosind expresii DataWeave (`#[payload.fieldName]`, `#[vars.variableName]`) pentru a pasa parametrii.
            *   `Logger`: Pentru logging extensiv al payload-urilor, variabilelor, erorilor și pașilor de execuție în consolă Anypoint Studio.
            *   `Choice Router`: Pentru implementarea logicii condiționale (ex: dacă produsul scanat există deja în DB).
            *   `For Each Scope`: Pentru a itera prin lista de produse primită de la API-ul extern și a procesa fiecare produs individual.
            *   `Flow Reference` și `Sub Flow`: Pentru a modulariza logica și a crea fluxuri reutilizabile.
            *   `Set Variable`, `Set Payload`, `Transform Message`: Pentru manipularea mesajului Mule.
            *   `Error Handling` (Try Scope, On Error Continue/Propagate, Global Error Handler): Pentru a captura și gestiona excepțiile (erori de conectivitate DB, erori HTTP de la API-ul extern, erori de validare, etc.) și a returna răspunsuri de eroare standardizate și informative.
        *   **Securitate API (Nivel de Bază):** Implementarea HTTPS cu certificate self-signed pentru API-ul scannerului este obligatorie. (Opțional, dacă timpul permite, se poate explora adăugarea unui header simplu de tip API Key și validarea lui în fluxul Mule).
    *   **Principalele Aplicații/API-uri MuleSoft de Implementat de Team_1:** (Așa cum au fost detaliate la secțiunea 1.4.2 – API Scanner, API Fațadă Extern, API-uri Frontend).
    *   **Interacțiuni cu Alte Echipe și Dependențe:**
        *   **Team_2 (Frontend):** Team_1 este furnizorul API-urilor pentru Team_2. Colaborare strânsă pentru definirea și respectarea contractelor RAML. Furnizarea de exemple de răspuns și suport la testarea integrării.
        *   **Team_9 (RPi Pico):** Team_1 definește și implementează API-ul pentru scanner (inclusiv detaliile HTTPS și structura JSON). Suport pentru Team_9 la testarea request-urilor.
        *   **Team_7 (ClickHouse Setup & Networking):** Team_1 depinde de Team_7 pentru o instanță ClickHouse funcțională și corect configurată (cu baze de date, tabele, utilizatori, porturi expuse) la care să se poată conecta din MuleSoft. De asemenea, depinde de configurarea rețelei VM pentru ca API-urile MuleSoft (rulate nativ pe VM-ul Team_1) să fie accesibile de către Frontend (din browser) și RPi Pico (din rețeaua locală).
        *   **(Opțional) Team_1 (Talend):** Dacă Talend va consuma un API expus de MuleSoft, Team_1 (MuleSoft) definește și acel API.

    **3.3.3. Componenta 3: Talend Open Studio (Procese ETL pentru Baze de Date și Consum API MuleSoft)**
    *   **Rol Detaliat în Sistem:** Talend este utilizat pentru operațiuni ETL batch, în principal pentru migrarea și transformarea datelor dintr-o sursă de date structurată (simulata "baza de date franceză" în ClickHouse) către baza de date principală a proiectului. Demonstrează un alt tip de integrare și prelucrare a datelor, complementar cu abordarea API-centrică a MuleSoft.
    *   **Responsabilitate Principală:** **Team_1 (Coman Raluca, Cotan Petruta, Necoara Aida Florentina)**. Această echipă va gestiona ambele platforme de integrare, aplicând concepte similare de transformare și flux de date, dar cu unelte și paradigme diferite.
    *   **Tehnologii Specifice Detaliate și Mod de Utilizare:**
        *   **Talend Open Studio for Data Integration (TOS for DI - versiune recentă gratuită):** IDE-ul vizual pentru proiectarea, dezvoltarea și rularea job-urilor ETL.
        *   **Conectori Talend Esențiali:**
            *   **Pentru ClickHouse (Sursă și Destinație):** `tJDBCInput` și `tDBOutput`. Team_1 va trebui să:
                1.  Descarce driverul JDBC pentru ClickHouse (ex: `clickhouse-jdbc-official.jar`).
                2.  Configureze Talend pentru a recunoaște acest driver (prin copierea JAR-ului în folderul `lib/java` al instalării Talend sau prin configurarea din `Modules view`).
                3.  Creeze conexiuni JDBC reutilizabile în "Metadata" > "Db Connections" din Repository-ul Talend, specificând JDBC URL (ex: `jdbc:clickhouse://<IP_VM_ClickHouse_Docker_Host>:<Port_ClickHouse_JDBC>/clickhouse_db_franceza` pentru sursă și similar pentru `devimarket_db` ca destinație), clasa driverului (`com.clickhouse.jdbc.ClickHouseDriver` sau similar), utilizatorul și parola.
                4.  Utilizeze aceste conexiuni în componentele `tJDBCInput` (pentru a scrie query-uri `SELECT` pe tabelul sursă) și `tDBOutput` (pentru a configura operațiuni `INSERT` în tabelul destinație, cu maparea corectă a câmpurilor).
            *   **Pentru Citire Fișiere (dacă se menține și un flux CSV inițial, deși focusul este pe DB-DB):** `tFileInputDelimited`.
            *   **Pentru Transformări:** `tMap` (componenta centrală pentru mapări, join-uri, filtre, expresii Java).
            *   **Pentru Consum API REST (Opțional - API-ul MuleSoft):** `tRestClient` (configurat cu URL-ul API-ului MuleSoft, metoda GET).
            *   **Pentru Procesare JSON (dacă se consumă API):** `tExtractJSONFields` (cu expresii JSONPath pentru a extrage datele din răspunsul API).
            *   **Pentru Logging și Debugging:** `tLogRow`.
            *   **Pentru Flux de Control:** `tRunJob`, `tFlowToIterate`, legături `OnSubjobOk`, `OnComponentOk`, `Run if`.
        *   **Variabile de Context:** Pentru a parametriza job-urile (deși pentru acest MVP, cu totul rulând local, pot fi mai puține).
        *   **Expresii Java în `tMap`:** Team_1 va folosi expresii Java simple (sau funcții Talend built-in precum `TalendDate.getCurrentDate()`, `StringHandling.UPCASE()`, `Numeric.sequence()`) în `tMap` pentru a realiza transformări de date, generare de ID-uri, setare de valori default.
    *   **Principalele Job-uri ETL de Implementat de Team_1 (Talend):** (Așa cum au fost detaliate la secțiunea 1.4.3 – Job 1 obligatoriu pentru migrare DB-DB, Job 2 opțional pentru consum API MuleSoft). Se va pune accent pe documentarea detaliată a logicii din `tMap`.
    *   **Interacțiuni cu Alte Echipe și Dependențe:**
        *   **Team_7 (ClickHouse Setup):** Colaborare strânsă pentru detaliile exacte de conectare la instanța ClickHouse (host, port, nume baze de date/tabele, utilizatori, parole) și pentru schema exactă a tabelului sursă `clickhouse_db_franceza.products_fr` și a tabelului destinație `devimarket_db.products`.
        *   **(Opțional) Team_1 (MuleSoft):** Dacă se implementează Job 2 (Talend consumând API MuleSoft), este necesară o coordonare pentru definirea și disponibilitatea acelui API MuleSoft.

    **3.3.4. Componenta 4: Baza de Date Centrală (Stocare Produse cu ClickHouse)**
    *   **Rol Detaliat în Sistem:** Este repository-ul central și sursa de adevăr pentru toate datele despre produse care sunt gestionate și afișate în cadrul marketplace-ului "DeviMarket Zero". ClickHouse este ales pentru performanța sa și pentru a oferi studenților contact cu o tehnologie de baze de date modernă, orientată pe coloane.
    *   **Responsabilități Partajate:**
        *   **Team_7 (Chesnoiu Andrei Bogdan, Ghetau Cristian Marian - Setup și Administrare de Bază Dockerizată):**
            *   Responsabili pentru crearea și întreținerea configurației Docker (Dockerfile customizat dacă e necesar, și intrarea în `docker-compose.yml`) pentru serviciul ClickHouse.
            *   Asigurarea persistenței datelor prin volume Docker.
            *   Expunerea corectă a porturilor necesare (JDBC/nativ și HTTP) către host-ul VM pentru a permite conectarea aplicațiilor MuleSoft și Talend.
            *   Crearea și gestionarea scripturilor SQL de inițializare (montate în `/docker-entrypoint-initdb.d/`) care definesc bazele de date (`devimarket_db`, `clickhouse_db_franceza`), tabelele (`products`, `products_fr` cu schema exactă), și utilizatorii specifici (`mule_user`, `talend_user`) cu permisiunile adecvate.
            *   Monitorizarea de bază a stării containerului ClickHouse și a log-urilor acestuia.
        *   **Team_1 (Coman Raluca, Cotan Petruta, Necoara Aida Florentina - Design Schemă, Interacțiune din MuleSoft/Talend):**
            *   Responsabili pentru designul final și detaliat al schemei tabelului principal `devimarket_db.products` (coloane, tipuri de date ClickHouse, indecși, cheie de sortare – vezi Capitolul 3.5) și a tabelului simulat `clickhouse_db_franceza.products_fr`.
            *   Implementarea logicii de interacțiune (scriere query-uri SQL specifice ClickHouse) din aplicațiile MuleSoft (prin `Database Connector`) și din job-urile Talend (prin `tJDBCInput/tDBOutput`) pentru operațiunile de INSERT, SELECT, UPDATE.
            *   Înțelegerea modului de funcționare a tipurilor de date ClickHouse (ex: `LowCardinality`, `UUID`, `DateTime64`, `Decimal`, `Map`, `Array`) și utilizarea lor corectă.
        *   **Team_2 (Tuca Dragos Andrei, Proaspatu Nicolae Bogdan - Consumatori Indirecți):** Deși nu interacționează direct cu ClickHouse, ei depind de structura și corectitudinea datelor din ClickHouse, așa cum sunt ele expuse de API-urile MuleSoft. Trebuie să înțeleagă modelul de date pentru a putea consuma eficient API-urile.
    *   **Tehnologii Specifice Detaliate și Mod de Utilizare:**
        *   **ClickHouse Server (versiune stabilă recentă, ex: rulată din imaginea Docker `clickhouse/clickhouse-server:latest` sau un tag specific):** Sistemul de management al bazei de date.
        *   **SQL (dialectul ClickHouse):** Limbajul utilizat pentru toate interacțiunile cu baza de date:
            *   **DDL (Data Definition Language):** `CREATE DATABASE IF NOT EXISTS ...;`, `CREATE TABLE IF NOT EXISTS ... (...) ENGINE = MergeTree() ORDER BY ...;`, `ALTER TABLE ... ADD INDEX ...;`.
            *   **DML (Data Manipulation Language):** `INSERT INTO ... VALUES ...;`, `SELECT ... FROM ... WHERE ... ORDER BY ... LIMIT ... OFFSET ...;`, `ALTER TABLE ... UPDATE ... WHERE ...;`, `ALTER TABLE ... DELETE WHERE ...;` (operațiunile `UPDATE` și `DELETE` în ClickHouse sunt mutații și au particularități de performanță și implementare care trebuie înțelese – pentru MVP, se vor folosi într-un mod simplu și controlat).
        *   **Driver JDBC pentru ClickHouse (ex: `clickhouse-jdbc` oficial sau o alternativă comunitară):** Necesar pentru ca MuleSoft (prin `Database Connector`) și Talend (prin componentele JDBC) să se poată conecta și executa query-uri pe instanța ClickHouse. Team_1 și Team_7 vor colabora pentru a se asigura că același driver (sau versiuni compatibile) este folosit și configurat corect în ambele platforme și că este disponibil în classpath-ul lor.
        *   **Client Linie de Comandă (`clickhouse-client`):** Util pentru administrare, testare query-uri ad-hoc și depanare. Poate fi accesat prin `docker-compose exec clickhouse-server clickhouse-client ...`.
        *   **(Opțional) DBeaver (sau alt GUI DB universal):** Poate fi instalat pe VM și configurat pentru a se conecta la instanța ClickHouse din Docker, oferind o interfață vizuală pentru navigarea schemelor, executarea de query-uri și vizualizarea datelor, utilă pentru dezvoltare și testare.
    *   **Structura Principală de Implementat (Responsabilitate Team_7 pentru setup, Team_1 pentru design):**
        1.  Definirea finală și implementarea (prin scripturi de inițializare Docker) a schemei complete pentru tabelul `devimarket_db.products` conform Capitolului 3.5 (coloane, tipuri de date, engine `MergeTree`, `ORDER BY`, indecși `minmax` sau `set` pe coloanele relevante).
        2.  Definirea finală și implementarea schemei pentru tabelul simulat `clickhouse_db_franceza.products_fr`. Acesta ar trebui să aibă intenționat diferențe structurale (alte nume de coloane, tipuri de date diferite, câmpuri lipsă/suplimentare) față de `devimarket_db.products` pentru a face exercițiul de transformare ETL din Talend valoros și relevant.
        3.  Crearea bazelor de date `devimarket_db` și `clickhouse_db_franceza` în instanța ClickHouse.
        4.  Crearea utilizatorilor dedicați `mule_user` și `talend_user` cu parole sigure (pot fi gestionate prin variabile de mediu Docker și pasate scripturilor de inițializare) și acordarea permisiunilor minime necesare (GRANT) pentru fiecare utilizator pe bazele de date și tabelele relevante (ex: `mule_user` are `SELECT, INSERT, UPDATE` pe `devimarket_db.products`; `talend_user` are `SELECT` pe `clickhouse_db_franceza.products_fr` și `INSERT` pe `devimarket_db.products`).
        5.  Popularea inițială a tabelului `clickhouse_db_franceza.products_fr` cu un set de date de test (ex: 20-30 rânduri) furnizat de Tutore (ca CSV și transformat în comenzi INSERT SQL) sau creat de Team_1.

    **3.3.5. Componenta 5: Sistemul de Scanare Hardware (Raspberry Pi Pico W & MicroPython)**
    *   **Rol Detaliat în Sistem:** Această componentă introduce un element de interacțiune fizică (IoT) în proiect, permițând adăugarea sau actualizarea "în timp real" a produselor în sistem prin scanarea codurilor de bare. Demonstrează capacitatea sistemului de a primi input de la dispozitive hardware externe prin API-uri.
    *   **Responsabilitate Principală:** **Team_9 (Cadar Andreea, Pista Darius)**. Această echipă se va dedica integral programării microcontroller-ului RPi Pico W în MicroPython și provocărilor specifice interfațării cu scannerul USB și comunicării securizate prin rețea.
    *   **Tehnologii Specifice Detaliate și Mod de Utilizare:**
        *   **Hardware Esențial:**
            *   **Raspberry Pi Pico W:** Microcontrollerul cu conectivitate WiFi integrată.
            *   **Scanner de Coduri de Bare USB:** Un scanner generic, plug-and-play, care funcționează prin emularea unei tastaturi (dispozitiv HID - Human Interface Device). Când scanează un cod, acesta "tastează" secvența de caractere urmată, de obicei, de un Enter.
            *   **Cablu Micro-USB:** Pentru alimentarea și programarea RPi Pico W.
            *   **(Opțional, în funcție de metoda de citire a scannerului):** Adaptor USB OTG (dacă Pico W trebuie să acționeze ca USB Host pentru scanner), LED-uri externe și rezistențe (pentru feedback vizual extins), fire de conexiune, breadboard.
        *   **Software pe RPi Pico W:** **MicroPython** (ultima versiune stabilă compilată pentru Pico W).
        *   **IDE pentru Dezvoltare MicroPython:** **Thonny IDE** (recomandat pentru simplitate și integrarea bună cu REPL-ul MicroPython) sau **Visual Studio Code** cu extensia Pico-W-Go (pentru o experiență IDE mai avansată).
        *   **Biblioteci și Module MicroPython Cheie:**
            *   `network`: Pentru configurarea și gestionarea conexiunii la rețeaua WiFi locală.
            *   `urequests` (sau o alternativă precum `http.client` din `micropython-lib` dacă `urequests` are limitări cu SSL/TLS): Pentru realizarea request-urilor HTTP/HTTPS POST către API-ul MuleSoft.
            *   `time`: Pentru gestionarea întârzierilor (`sleep`), măsurarea timpului și generarea de timestamp-uri (deși timestamp-ul final ar putea fi mai precis dacă e generat de MuleSoft la recepție).
            *   `machine`: Pentru controlul pinilor GPIO (General Purpose Input/Output), în special pentru aprinderea/stingerea LED-ului onboard sau a LED-urilor externe pentru feedback.
            *   `ujson`: Pentru serializarea dicționarului Python (payload) în format JSON.
            *   **(Potențial, în funcție de metoda de citire a scannerului):** Module pentru interfațarea cu input-ul USB HID (dacă se găsește o bibliotecă MicroPython adecvată și simplă pentru Pico W ca USB Host) sau module pentru comunicare serială (`UART`) dacă se folosește un intermediar.
    *   **Principalele Funcționalități și Logica Scriptului MicroPython de Implementat de Team_9:**
        1.  **Fișier de Configurare (`config.py`):** Crearea unui fișier `config.py` (care va fi în `.gitignore`) pentru a stoca:
            *   `WIFI_SSID = "NumeleReteleiWiFi"`
            *   `WIFI_PASSWORD = "ParolaReteleiWiFi"`
            *   `MULESOFT_SCANNER_API_URL = "https://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTPS_SCANNER>/api/scanner/product_scan"` (URL-ul complet și corect al API-ului MuleSoft).
            *   (Opțional) Alte constante, cum ar fi timeout-uri pentru request-uri.
        2.  **Manager Conexiune WiFi (`wifi_manager.py` - modul separat):**
            *   O funcție `connect_wifi(ssid, password)` care încearcă să se conecteze la WiFi.
            *   Implementează un număr finit de reîncercări (ex: 5-10 reîncercări cu o pauză de câteva secunde între ele) în caz de eșec al conexiunii.
            *   Returnează `True` și adresa IP dacă conexiunea reușește, `False` altfel.
            *   Afișează mesaje de status în consolă REPL și controlează un LED (ex: galben clipind în timpul conectării, verde continuu dacă e conectat, roșu continuu dacă toate încercările au eșuat).
        3.  **Citirea Codului de Bare de la Scanner (`scanner_reader.py` - modul separat, sau în `main.py`):**
            *   **Cercetare Aprofundată și Implementare (Prioritatea 1 - Citire Directă USB HID):** Team_9 va investiga intensiv posibilitatea ca RPi Pico W să citească direct datele de la un scanner USB care emulează o tastatură. Aceasta este cea mai complexă parte și poate necesita:
                *   Verificarea dacă firmware-ul MicroPython pentru Pico W are suport încorporat pentru USB Host OTG și pentru dispozitive HID simple.
                *   Căutarea și testarea unor biblioteci MicroPython specifice, scrise de comunitate, care facilitează citirea input-ului de la dispozitive HID (ex: citirea "rapoartelor" trimise de scanner).
                *   Înțelegerea modului în care datele sunt trimise (secvența de caractere, caracterul de final de linie/Enter).
            *   **Soluție de Fallback 1 (Intermediar Hardware/Software - Prioritatea 2):** Dacă citirea directă USB HID pe Pico W se dovedește infezabilă în timpul alocat, se va considera:
                *   Utilizarea unui al doilea Raspberry Pi (un Pi Zero 2 W, un Pi 3B+ sau un Pi 4, dacă sunt disponibile și pot fi configurate rapid de studenți) care rulează un sistem de operare Linux complet (ex: Raspberry Pi OS). Acest Pi "mare" poate citi ușor scannerul USB (ca input de la tastatură) și apoi poate trimite codul de bare către Pico W principal printr-o metodă simplă:
                    *   **Comunicare Serială (UART):** Pi-ul mare trimite string-ul prin UART, iar Pico W îl citește de pe UART-ul său.
                    *   **Request HTTP Local:** Pi-ul mare rulează un mic server web Python (Flask/FastAPI) la care Pico W face un request pentru a prelua ultimul cod scanat (mai complex).
                *   Alternativ, conectarea scannerului la PC-ul studentului. Un script Python pe PC citește input-ul de la tastatură (de la scanner) și îl trimite prin Serial (folosind un adaptor USB-la-Serial TTL ieftin, ex: bazat pe CP2102 sau CH340, conectat la pinii UART ai Pico W) către Pico W. Aceasta este o soluție de laborator robustă.
            *   **Soluție de Fallback Finală și Obligatorie pentru Demo (Input Manual REPL - Prioritatea 3):** Dacă toate opțiunile de interfațare directă sau indirectă a scannerului eșuează din cauza complexității sau a constrângerilor de timp, se va implementa un mecanism de **input manual al codului de bare prin consola serială REPL (Thonny)**. Scriptul `main.py` de pe Pico W va afișa un mesaj "Aștept cod de bare:" și va citi linia introdusă de utilizator (studentul care face demo-ul) din consolă. Această metodă trebuie să fie 100% funcțională pentru a asigura că restul logicii (construire JSON, request HTTPS către MuleSoft, feedback LED) poate fi testat și demonstrat complet. **Team_9 va documenta extrem de clar în `SETUP_RPI_PICO_MICROPYTHON.md` care metodă de citire a scannerului a fost implementată final și care sunt limitările.**
            *   Indiferent de metodă, funcția de citire trebuie să returneze string-ul codului de bare curățat (ex: fără caracterul Enter de la final).
        4.  **Construirea Payload-ului JSON și Trimiterea Request-ului HTTPS (`http_client.py` - modul separat, sau în `main.py`):**
            *   O funcție `send_barcode_to_api(barcode_string)` care:
                *   Obține timestamp-ul curent (ex: folosind `time.gmtime()` și formatându-l ca string ISO 8601, sau trimițând `time.time()` și lăsând MuleSoft să-l formateze).
                *   Construiește dicționarul Python: `payload = {"barcode": barcode_string, "scan_timestamp": formatted_timestamp}`.
                *   Serializează dicționarul în JSON string folosind `ujson.dumps(payload)`.
                *   Setează header-ele HTTP: `headers = {"Content-Type": "application/json"}`. (Opțional, un header custom `X-Device-ID: PICO_W_001` dacă API-ul MuleSoft ar dori să identifice sursa).
                *   Face request-ul `POST` folosind `urequests.post(MULESOFT_SCANNER_API_URL, data=json_payload, headers=headers, ssl=None)` (sau sintaxa specifică pentru a dezactiva validarea SSL dacă `ssl=None` nu e corect – necesită testare).
                *   Gestionează răspunsul (status code, body JSON) și excepțiile (timeout, eroare de rețea). Returnează un status de succes/eșec.
        5.  **Scriptul Principal (`main.py`):**
            *   La pornire, încearcă să se conecteze la WiFi. Dacă eșuează după N reîncercări, intră într-o buclă de eroare cu LED roșu.
            *   Dacă WiFi este conectat (LED verde), intră într-o buclă principală:
                1.  Așteaptă/solicită input de la scanner (sau REPL).
                2.  Când primește un cod de bare valid:
                    *   Aprinde un LED (ex: galben) pentru a indica procesarea.
                    *   Apelează funcția `send_barcode_to_api()`.
                    *   Pe baza răspunsului, aprinde LED-ul verde (succes) sau roșu (eroare) pentru câteva secunde.
                3.  Revine la așteptarea unui nou scan.
        6.  **Feedback Vizual Extins:** Utilizarea LED-ului onboard și, opțional, a unor LED-uri RGB externe (controlate prin PWM pentru culori diferite) pentru a oferi un feedback cât mai clar despre starea operațiunii: conectare WiFi, așteptare scan, trimitere request, succes API, eroare API, eroare generală.
    *   **Interacțiuni cu Alte Echipe și Dependențe:**
        *   **Dependență Critică de Team_1 (MuleSoft):** Team_9 este clientul API-ului `/api/scanner/product_scan` expus de MuleSoft. Este absolut necesară o colaborare strânsă pentru a agrea:
            *   URL-ul exact și portul HTTPS al API-ului MuleSoft.
            *   Structura precisă a payload-ului JSON de request (ce câmpuri, ce tipuri de date).
            *   Structura precisă a payload-ului JSON de response (pentru succes și pentru eroare) și status code-urile HTTP asociate.
            *   Metoda de gestionare a certificatului self-signed (ex: confirmarea că API-ul MuleSoft este configurat corect cu certificatul și că scriptul Pico poate apela endpoint-ul ignorând validarea SSL).
        *   **Team_7 (Networking):** Dacă apar probleme de conectivitate între RPi Pico și VM-ul studentului din Team_1 (unde rulează MuleSoft), Team_9 va colabora cu Team_7 pentru a depana rețeaua locală (verificare IP-uri, firewall VM, configurare router WiFi dacă e necesar).

    **3.3.6. Componenta 6: Infrastructura de Rulare Locală (Docker pentru ClickHouse și NGINX/React-Build)**
    *   **Rol Detaliat în Sistem:** Această componentă asigură fundația pe care rulează serviciile esențiale și persistente ale aplicației (baza de date) și mecanismul prin care aplicația Frontend este expusă utilizatorului. Utilizarea Docker și Docker Compose introduce studenții în practicile DevOps de bază, promovând consistența, izolarea și portabilitatea mediilor.
    *   **Responsabilitate Principală:** **Team_7 (Chesnoiu Andrei Bogdan, Ghetau Cristian Marian)**. Această echipă este responsabilă pentru întregul ciclu de viață al configurațiilor Docker și Docker Compose, de la scrierea Dockerfile-urilor și a fișierului `docker-compose.yml`, la testarea pornirii corecte a stack-ului și documentarea procesului.
    *   **Tehnologii Specifice Detaliate și Mod de Utilizare:**
        *   **Docker Engine & Docker CLI (ultima versiune stabilă):** Platforma de containerizare. Studenții din Team_7 vor folosi comenzile Docker CLI pentru a construi imagini (`docker build`), a inspecta imagini și containere (`docker image ls`, `docker ps`, `docker inspect`), a vizualiza log-uri (`docker logs`), etc., în special în faza de dezvoltare a Dockerfile-urilor.
        *   **Docker Compose (v2.x recomandat, ex: `docker compose` CLI plugin):** Instrumentul pentru definirea și rularea aplicațiilor multi-container. Va fi folosit pentru a orchestra serviciile `clickhouse-server` și `nginx-frontend`.
        *   **Dockerfile Syntax (Avansat):** Pentru scrierea fișierelor `Dockerfile` pentru ClickHouse (dacă se decide o customizare a imaginii oficiale, ex: pentru a include scripturi de inițializare complexe sau unelte specifice) și, mai ales, pentru NGINX (cu build multi-stage pentru aplicația React).
        *   **YAML (YAML Ain't Markup Language):** Sintaxa folosită pentru fișierele `docker-compose.yml`. Team_7 va trebui să fie atentă la indentare și la structura corectă a fișierului.
    *   **Principalele Sarcini și Configurații de Implementat de Team_7:**
        1.  **Dockerfile pentru ClickHouse (Opțional, dacă e necesară customizare avansată):**
            *   Dacă scripturile de inițializare SQL devin foarte complexe sau dacă sunt necesare unelte suplimentare în containerul ClickHouse, se poate crea un Dockerfile care pornește de la `clickhouse/clickhouse-server` și adaugă aceste elemente. Altfel, majoritatea configurărilor se pot face prin `docker-compose.yml` și volume.
        2.  **Dockerfile Multi-Stage pentru NGINX și Aplicația React (Obligatoriu):**
            *   **Etapa 1 (Build Stage - `AS build-stage`):**
                *   `FROM node:18-alpine AS build-stage` (sau o versiune Node.js LTS similară, pe bază Alpine pentru dimensiune redusă).
                *   `WORKDIR /app`
                *   `COPY team2_react_frontend/package.json team2_react_frontend/package-lock.json ./` (sau `yarn.lock`)
                *   `RUN npm ci --only=production` (sau `yarn install --frozen-lockfile`) – instalează doar dependențele de producție, mai rapid.
                *   `COPY team2_react_frontend/. ./`
                *   `RUN npm run build` (sau `yarn build`) – generează fișierele statice în `/app/dist` (sau `/app/build`).
            *   **Etapa 2 (Runtime Stage):**
                *   `FROM nginx:stable-alpine-slim`
                *   `COPY --from=build-stage /app/dist /usr/share/nginx/html`
                *   `COPY ./nginx_config/nginx.conf /etc/nginx/conf.d/default.conf` (copiază configurația NGINX customizată).
                *   (Opțional) `COPY ./nginx_config/ssl/ /etc/nginx/ssl/` (copiază certificatele SSL).
                *   `EXPOSE 80` (și `443` dacă se folosește HTTPS).
        3.  **Fișierul `docker-compose.yml` Complet:**
            *   `version: '3.8'` (sau o versiune compatibilă)
            *   `services:`
                *   `clickhouse-server:`
                    *   `image: clickhouse/clickhouse-server:latest` (sau tag specific)
                    *   `container_name: devimarket-clickhouse`
                    *   `ports:`
                        *   `"8123:8123"` (HTTP interface)
                        *   `"9000:9000"` (TCP native client interface)
                        *   `"9009:9009"` (gRPC interface - opțional, dacă e nevoie)
                    *   `volumes:`
                        *   `devimarket_clickhouse_data:/var/lib/clickhouse/` (volum numit pentru persistență)
                        *   `./clickhouse_init_scripts:/docker-entrypoint-initdb.d/` (bind mount pentru scripturile SQL de inițializare)
                    *   `environment:` (pentru parolele default, dacă nu sunt suprascrise de scripturile de inițializare)
                        *   `CLICKHOUSE_USER: default_user` (exemplu)
                        *   `CLICKHOUSE_PASSWORD: default_password` (exemplu)
                        *   `CLICKHOUSE_DB: devimarket_db` (creează baza de date la pornire, dacă nu există)
                    *   `networks:`
                        *   `- devimarket-net`
                    *   `healthcheck:` (opțional, dar bun pentru a verifica dacă ClickHouse e gata)
                        *   `test: ["CMD", "wget", "--spider", "-q", "http://localhost:8123/ping"]`
                        *   `interval: 10s`
                        *   `timeout: 5s`
                        *   `retries: 5`
                *   `nginx-frontend:`
                    *   `build:`
                        *   `context: .` (presupunând că Dockerfile-ul NGINX este la rădăcina unde e și `docker-compose.yml` și are acces la folderul `team2_react_frontend` și `nginx_config`)
                        *   `dockerfile: Dockerfile.nginx` (nume exemplu)
                    *   `container_name: devimarket-nginx-frontend`
                    *   `ports:`
                        *   `"80:80"`
                        *   `"443:443"` (dacă se configurează HTTPS)
                    *   `volumes:` (doar dacă certificatele SSL sunt gestionate extern și nu copiate în imagine)
                        *   `./nginx_config/ssl:/etc/nginx/ssl:ro`
                    *   `networks:`
                        *   `- devimarket-net`
                    *   `depends_on:` (nu este strict necesar ca NGINX să aștepte ClickHouse, dar poate fi util dacă ar exista o verificare de status la pornirea Frontendului)
                        *   `clickhouse-server:` (opțional, mai mult pentru ordine)
                            *   `condition: service_healthy` (dacă s-a definit healthcheck pe ClickHouse)
            *   `volumes:`
                *   `devimarket_clickhouse_data:` (declarare volum numit)
            *   `networks:`
                *   `devimarket-net:` (declarare rețea custom de tip bridge)
                    *   `driver: bridge`
        4.  **Crearea Scripturilor de Inițializare pentru ClickHouse (`./clickhouse_init_scripts/`):**
            *   `01-init-databases.sh`: `clickhouse-client -n "CREATE DATABASE IF NOT EXISTS devimarket_db; CREATE DATABASE IF NOT EXISTS clickhouse_db_franceza;"`
            *   `02-create-tables.sql`: Conține comenzile `CREATE TABLE IF NOT EXISTS devimarket_db.products (...) ENGINE=MergeTree() ORDER BY id;` și `CREATE TABLE IF NOT EXISTS clickhouse_db_franceza.products_fr (...) ...;`
            *   `03-create-users.sql`: Conține comenzi `CREATE USER IF NOT EXISTS mule_user IDENTIFIED BY 'mule_pass'; GRANT SELECT, INSERT, UPDATE, ALTER ON devimarket_db.* TO mule_user;` (și similar pentru `talend_user`). **Parolele nu se pun în Git! Se vor pasa prin variabile de mediu în `docker-compose.yml` și preluate în scriptul .sh, sau se vor folosi mecanisme mai sigure pentru parole în producție (nu e cazul aici).** Pentru simplitate MVP, pot fi hardcodate în scriptul .sh care NU ajunge în Git, ci e creat local de student, sau se folosește utilizatorul default ClickHouse pentru Mule/Talend (mai puțin sigur). **Se va decide cu Tutorele cea mai bună abordare pentru gestionarea parolelor DB în acest context de practică.**
            *   `04-insert-french-data.sql` (Opțional): Comenzi `INSERT INTO clickhouse_db_franceza.products_fr VALUES ...` pentru datele de test.
        5.  **Documentarea Detaliată** a întregului proces de build și rulare a stack-ului Docker în `SETUP_DOCKER_INFRA.md` (sau fișiere separate pentru ClickHouse și NGINX). Aceasta trebuie să includă cum se generează certificatele SSL, cum se populează scripturile de inițializare (mai ales cele cu parole), cum se pornește/oprește totul și cum se verifică log-urile.
    *   **Interacțiuni cu Alte Echipe și Dependențe:**
        *   **Team_1 (MuleSoft/Talend):** Team_7 furnizează instanța ClickHouse funcțională și detaliile de conectare (hostname-ul serviciului în rețeaua Docker, ex: `clickhouse-server`, portul, numele bazelor de date, utilizatorii și parolele create prin scripturile de inițializare).
        *   **Team_2 (React):** Team_7 are nevoie de build-ul static final al aplicației React (folderul `dist` sau `build`) pentru a-l include în imaginea Docker NGINX. Orice modificare în modul de servire sau în structura de fișiere a build-ului React trebuie comunicată.
        *   **Toate Echipele:** Toți studenții trebuie să înțeleagă cum să pornească și să oprească stack-ul Docker (ClickHouse și NGINX) pentru a putea testa integrările modulelor lor. Team_7 va oferi instrucțiuni clare.

    **3.3.7. Componenta 7: Reverse Proxy și Servire Frontend (NGINX)**
    *   **Rol Detaliat în Sistem:** În această arhitectură specifică (unde API-urile MuleSoft sunt expuse direct pe porturile lor native de pe VM-ul Team_1 și nu sunt proxied prin NGINX), rolul principal al NGINX (rulat în Docker) este de a acționa ca un **server web performant și configurabil pentru a servi fișierele statice ale aplicației Frontend React**. De asemenea, gestionează terminația SSL (dacă se implementează HTTPS) pentru Frontend și asigură funcționarea corectă a rutării client-side a aplicației React (SPA).
    *   **Responsabilitate Principală:** **Team_7 (Chesnoiu Andrei Bogdan, Ghetau Cristian Marian)**, ca parte integrală a modulului de infrastructură Docker.
    *   **Tehnologii Specifice Detaliate și Mod de Utilizare:**
        *   **NGINX (versiune stabilă recentă, ex: `nginx:stable-alpine-slim` rulând în container Docker):** Serverul web.
        *   **Fișiere de Configurare NGINX (sintaxa `.conf`):** Team_7 va scrie și va gestiona fișierul de configurare principal pentru serverul virtual care deservește Frontend-ul (ex: `default.conf` sau `devimarket.conf`).
        *   **SSL/TLS și Utilitarul `openssl`:** Pentru generarea locală a perechii cheie privată / certificat public auto-semnat, necesare pentru configurarea HTTPS pe NGINX.
    *   **Principalele Configurații NGINX de Implementat de Team_7:**
        1.  **Definirea Blocului `server`:**
            *   Un bloc `server` care ascultă pe portul 80 (HTTP).
            *   (Recomandat) Un al doilea bloc `server` care ascultă pe portul 443 (HTTPS) și include directivele SSL.
            *   Setarea `server_name` la un nume de domeniu local (ex: `devimarket.local www.devimarket.local` – acestea trebuie adăugate de fiecare student în fișierul `/etc/hosts` al VM-ului său, mapate la `127.0.0.1`).
        2.  **Servirea Fișierelor Statice React:**
            *   Setarea directivei `root` la calea din containerul NGINX unde au fost copiate fișierele statice ale build-ului aplicației React (ex: `/usr/share/nginx/html`).
            *   Setarea directivei `index` la `index.html index.htm;` pentru a servi fișierul `index.html` al aplicației React ca pagină default.
        3.  **Gestionarea Rutării Client-Side pentru SPA (Single Page Application):**
            *   Implementarea directivei cruciale `try_files $uri $uri/ /index.html;` în cadrul blocului `location /`. Aceasta asigură că orice request către o rută necunoscută de NGINX (dar validă pentru React Router, ex: `/products/123`) este redirecționat către `index.html`, permițând astfel React Router să preia controlul și să afișeze componenta corectă. Fără aceasta, un refresh pe o rută dinamică ar da eroare 404 de la NGINX.
        4.  **Configurarea HTTPS Local cu Certificate Self-Signed (Obiectiv de Învățare Important):**
            *   Generarea pe VM-ul unui student din Team_7 (sau pe VM-ul Tutorelui, iar fișierele distribuite) a unei chei private (ex: `devimarket.key`) și a unui certificat auto-semnat (ex: `devimarket.crt`) folosind `openssl`. Certificatul va fi emis pentru `CN=devimarket.local`.
            *   Montarea acestor fișiere (cheie și certificat) în containerul NGINX (ex: în `/etc/nginx/ssl/`) printr-un volum definit în `docker-compose.yml`.
            *   În blocul `server` NGINX pentru portul 443, adăugarea directivelor:
                *   `listen 443 ssl http2;` (sau doar `ssl` dacă http2 nu e focus)
                *   `ssl_certificate /etc/nginx/ssl/devimarket.crt;`
                *   `ssl_certificate_key /etc/nginx/ssl/devimarket.key;`
                *   (Opțional) Configurarea protocoalelor SSL/TLS preferate și a cipher suite-urilor de bază.
            *   Implementarea unui redirect permanent (status 301) de la toate request-urile HTTP (port 80) către HTTPS (port 443) pentru a forța utilizarea conexiunii securizate.
        5.  **Configurarea Header-elor HTTP Utile (Opțional, dar Bună Practică):**
            *   Setarea header-elor pentru **caching-ul eficient al resurselor statice** în browserul clientului (ex: pentru fișierele CSS, JS, imagini care au hash-uri în nume generate de procesul de build React, se poate seta un `Cache-Control "public, max-age=31536000, immutable"`). Pentru `index.html` se va folosi o strategie de caching mai precaută (ex: `no-cache` sau ETag) pentru a asigura că se încarcă mereu ultima versiune.
            *   Activarea **compresiei Gzip** (`gzip on; gzip_types ...;`) pentru a reduce dimensiunea fișierelor text (HTML, CSS, JS, JSON, SVG) transferate către client, îmbunătățind viteza de încărcare a paginii.
            *   (Opțional) Adăugarea unor headere de securitate de bază (ex: `X-Frame-Options DENY`, `X-Content-Type-Options nosniff`, `Referrer-Policy strict-origin-when-cross-origin`).
        6.  **Logging NGINX:** Asigurarea că NGINX scrie log-uri de acces (`access.log`) și de eroare (`error.log`) într-o locație standard în container, astfel încât acestea să poată fi inspectate ușor folosind `docker-compose logs nginx-frontend` pentru depanarea problemelor de servire sau configurare.
    *   **Interacțiuni cu Alte Echipe și Dependențe:**
        *   **Team_2 (React):** NGINX este complet dependent de build-ul static (folderul `dist` sau `build`) furnizat de Team_2. Orice modificare în structura de fișiere a build-ului sau în modul de funcționare a rutării React Router poate necesita ajustări în configurația NGINX. Este esențial ca Team_7 să primească un build funcțional și corect structurat.
        *   **Toți Studenții (ca utilizatori ai Frontend-ului):** Vor accesa aplicația Frontend prin adresa și portul expuse de NGINX (ex: `https://devimarket.local`). Vor trebui să accepte avertismentul de securitate din browser datorat certificatului self-signed la prima accesare HTTPS.

**3.4. Fluxurile Principale de Date Detaliate (Scenarii End-to-End Cheie, Arhitectură MuleSoft Central)**

Aceste fluxuri descriu, pas cu pas, cu un nivel ridicat de detaliu, cum circulă informația prin întregul sistem "DeviMarket Zero" și cum interacționează diferitele componente (dezvoltate de echipe diferite) în cadrul scenariilor de utilizare cele mai importante. Este crucial ca fiecare student să înțeleagă în profunzime aceste fluxuri, în special cele care implică direct modulul sau tehnologiile la care lucrează, pentru a putea depana problemele de integrare.

    **3.4.1. Fluxul 1: Vizualizarea Listei de Produse de către Utilizator (Frontend React -> API MuleSoft -> Bază de Date ClickHouse)**
    *   **Actor Principal:** Utilizatorul final care accesează marketplace-ul din browserul său web.
    *   **Obiectiv:** Afișarea unei liste paginabile de produse pe pagina principală a marketplace-ului.
    *   **Echipe Implicate Major:** Team_2 (Frontend React), Team_1 (MuleSoft API de citire produse), Team_7 (NGINX pentru servire Frontend, ClickHouse Docker pentru stocare date).
    *   **Pași Detaliați ai Fluxului:**
        1.  **Inițiere Acces de către Utilizator (Browser):**
            *   Utilizatorul deschide un browser web (ex: Chrome, Firefox) și introduce URL-ul marketplace-ului (ex: `https://devimarket.local` – presupunând că HTTPS este configurat pe NGINX și domeniul local este mapat în `/etc/hosts` al VM-ului la `127.0.0.1`).
        2.  **Request HTTP/HTTPS către NGINX (Rulează în Docker):**
            *   Browserul trimite un request GET către adresa `https://devimarket.local/` (sau `/products` dacă aceasta este ruta default).
            *   Request-ul ajunge la containerul NGINX care ascultă pe portul 443 (sau 80 dacă nu e HTTPS) al mașinii virtuale (VM).
        3.  **NGINX Servește Aplicația Frontend React (Fișiere Statice):**
            *   NGINX, pe baza configurației sale (blocul `server` și `location /` cu `try_files`), identifică request-ul ca fiind pentru aplicația Frontend React.
            *   NGINX servește fișierul `index.html` principal al build-ului React, împreună cu toate fișierele statice asociate (bundle-uri JavaScript, fișiere CSS, imagini statice din Frontend).
        4.  **Aplicația React se Încarcă și Rulează în Browser:**
            *   Codul JavaScript al aplicației React este descărcat și executat în contextul browserului utilizatorului. React preia controlul asupra DOM-ului.
        5.  **Componenta React (ex: `ProductListPage.jsx`) Inițiază Apelul API către MuleSoft:**
            *   La montarea componentei (sau la o acțiune specifică a utilizatorului, cum ar fi selectarea unei pagini), un hook `useEffect` (sau o funcție apelată) inițiază un request HTTP GET asincron (folosind biblioteca Axios sau Fetch API) către API-ul MuleSoft dedicat listării produselor.
            *   **URL-ul API-ului MuleSoft (Exemplu):** `http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP_FRONTEND>/api/marketplace/products?page=1&limit=12&category=Electronice`
                *   `<IP_VM_STUDENT_TEAM_1>`: Adresa IP a mașinii virtuale pe care rulează instanța Anypoint Studio a studentului din Team_1 responsabil de acest API. Pentru testare, dacă Frontend-ul și MuleSoft rulează pe aceeași VM, poate fi `localhost` sau `127.0.0.1`.
                *   `<PORT_MULE_HTTP_FRONTEND>`: Portul pe care `HTTP Listener`-ul din MuleSoft ascultă pentru acest API (ex: 8091).
                *   Parametrii de query (`page`, `limit`, `category`) sunt adăugați dinamic de React pe baza stării curente a UI-ului (pagina selectată, filtrele aplicate).
            *   Frontend-ul poate afișa un indicator de încărcare (spinner) în UI.
        6.  **Aplicația MuleSoft (API Frontend - Rulată Nativ pe VM Team_1) Primește Request-ul:**
            *   `HTTP Listener`-ul din fluxul Mule dedicat (`GET /api/marketplace/products`) recepționează request-ul GET.
        7.  **Fluxul MuleSoft Procesează Request-ul de Listare Produse:**
            *   **Extragere Parametri:** Parametrii de query (`page`, `limit`, `category`, `sortBy` etc.) sunt extrași din atributele mesajului Mule.
            *   **Validare/Defaultare Parametri:** Se aplică validări de bază (ex: `page` și `limit` să fie numere pozitive) și se setează valori default dacă parametrii lipsesc.
            *   **Construire Query SQL Dinamic pentru ClickHouse:** Folosind DataWeave sau variabile de flux, se construiește dinamic un query SQL `SELECT` pentru tabelul `devimarket_db.products`. Query-ul va include:
                *   Coloanele necesare pentru afișarea în listă (ex: `id, name, price, currency, image_url, category`).
                *   Clauza `WHERE is_active = 1`.
                *   Clauze `WHERE` adiționale dacă sunt prezente filtre (ex: `AND category = #[attributes.queryParams.category]`).
                *   Clauza `ORDER BY` dacă este prezent parametrul `sortBy`.
                *   Clauzele `LIMIT #[vars.limit]` și `OFFSET #[vars.offset]` (unde `offset = (vars.page - 1) * vars.limit`) pentru paginare.
            *   **Execuție Query ClickHouse:** Componenta `Database Connector` execută query-ul SQL parametrizat pe instanța ClickHouse.
            *   **(Opțional, pentru paginare completă) Execuție Query COUNT:** Se execută un al doilea query `SELECT count() FROM devimarket_db.products WHERE is_active = 1 [AND aceleași filtre]` pentru a obține numărul total de produse care corespund criteriilor, necesar pentru calculul numărului total de pagini.
        8.  **Baza de Date ClickHouse (Rulează în Docker) Execută Query-urile:**
            *   ClickHouse procesează query-urile `SELECT` și returnează seturile de rezultate (lista de produse pentru pagina curentă și numărul total de produse) către aplicația MuleSoft.
        9.  **Aplicația MuleSoft Formatează Răspunsul JSON pentru Frontend:**
            *   Datele primite de la ClickHouse (lista de produse și totalul) sunt transformate folosind DataWeave într-un format JSON structurat, așteptat de Frontend. Exemplu:
                ```json
                {
                  "metadata": {
                    "currentPage": 1,
                    "pageSize": 12,
                    "totalPages": 5,  // Calculat: ceil(totalCount / pageSize)
                    "totalCount": 58
                  },
                  "data": [
                    { "id": "uuid1", "name": "Produs A", "price": 100.00, "currency": "RON", "image_url": "url_a", "category": "Electronice" },
                    { "id": "uuid2", "name": "Produs B", "price": 150.50, "currency": "RON", "image_url": "url_b", "category": "Electronice" }
                    // ... alte 10 produse
                  ]
                }
                ```
        10. **Aplicația MuleSoft Trimite Răspunsul HTTP către Frontend:**
            *   MuleSoft returnează răspunsul JSON (cu status HTTP 200 OK) către clientul care a făcut request-ul (aplicația React din browserul utilizatorului). Dacă apar erori în fluxul Mule (ex: eroare la conectarea la DB), se returnează un status HTTP de eroare corespunzător (ex: 500) cu un body JSON de eroare.
        11. **Aplicația React (Browser) Procesează Răspunsul API:**
            *   Logica JavaScript din React (din blocul `.then()` al Axios/Fetch sau din `try...catch` pentru `async/await`) primește răspunsul JSON.
            *   Datele produselor (`response.data.data`) și informațiile de paginare (`response.data.metadata`) sunt extrase și stocate în starea (state) componentei React relevante.
            *   Indicatorul de încărcare este ascuns.
        12. **Aplicația React Randează Lista de Produse:**
            *   Pe baza noii stări, React re-randează interfața utilizator pentru a afișa cardurile/rândurile cu produsele primite, precum și controalele de paginare (ex: butoane "Next", "Previous", numere de pagină) actualizate pe baza metadatelor de paginare.
        *Fluxul pentru vizualizarea detaliilor unui produs (`GET /api/marketplace/products/{productId}`) este similar, dar API-ul MuleSoft va returna un singur obiect produs, iar componenta React (`ProductDetail.jsx`) va afișa toate câmpurile acestuia.*

    **3.4.2. Fluxul 2: Conectarea Portofelului MetaMask de către Utilizator (Frontend React)**
    *   **Actor Principal:** Utilizatorul final.
    *   **Obiectiv:** Permiterea utilizatorului să își conecteze portofelul MetaMask la aplicația Frontend și afișarea adresei publice a contului conectat.
    *   **Echipe Implicate Major:** Team_2 (Frontend React).
    *   **Pași Detaliați ai Fluxului (Pur Client-Side):**
        1.  **Acțiune Utilizator (Browser):** În interfața React a marketplace-ului (ex: în header), utilizatorul identifică și dă click pe butonul "Conectează Portofelul MetaMask" (sau un text/icon similar).
        2.  **Event Handler în Aplicația React:** Logica JavaScript asociată evenimentului `onClick` al butonului este executată.
        3.  **Verificare Prezență Extensie MetaMask:**
            *   Scriptul React verifică dacă obiectul `window.ethereum` este definit și disponibil în contextul browserului. Prezența acestui obiect indică faptul că extensia MetaMask (sau o altă extensie compatibilă Web3) este instalată și activă.
            *   **Dacă `window.ethereum` NU este găsit:** Aplicația React va afișa un mesaj informativ și prietenos utilizatorului, instruindu-l să instaleze extensia MetaMask și oferind, eventual, un link către site-ul oficial MetaMask. Nicio altă acțiune nu este posibilă.
        4.  **Solicitare Conectare Conturi către MetaMask (Dacă `window.ethereum` este prezent):**
            *   Scriptul React execută apelul asincron:
              `const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });`
            *   Acest apel deschide interfața pop-up a extensiei MetaMask (dacă nu este deja deschisă și conectată la site).
        5.  **Interacțiune Utilizator cu Pop-up-ul MetaMask:**
            *   MetaMask solicită utilizatorului să selecteze contul/conturile pe care dorește să le facă vizibile și să le conecteze la site-ul "DeviMarket Zero".
            *   Utilizatorul trebuie să aprobe explicit conexiunea.
        6.  **Procesarea Răspunsului de la MetaMask:**
            *   **Dacă utilizatorul aprobă conexiunea:** Promisiunea returnată de `eth_requestAccounts` se va rezolva cu un array de string-uri, fiecare string fiind adresa publică (hexagesimală, ex: `0x123...abc`) a unuia dintre conturile aprobate de utilizator. De obicei, pentru o primă conectare, acest array va conține o singură adresă (contul selectat curent în MetaMask).
            *   **Dacă utilizatorul respinge conexiunea (închide pop-up-ul sau apasă "Cancel"):** Promisiunea va fi respinsă cu o eroare. Scriptul React trebuie să prindă această eroare (folosind `try...catch` în jurul `await` sau un bloc `.catch()` dacă se folosește `.then()`) și să gestioneze situația (ex: afișarea unui mesaj "Conectarea la portofel a fost anulată." sau pur și simplu nu se întâmplă nimic vizibil).
        7.  **Stocarea și Afișarea Adresei Contului Conectat în Aplicația React:**
            *   Dacă conectarea este reușită și array-ul `accounts` nu este gol, scriptul React va prelua, de obicei, prima adresă din array: `const userAddress = accounts[0];`.
            *   Această `userAddress` este stocată în starea (state) unei componente React relevante (ex: o componentă de context pentru autentificare/user, sau starea componentei Header) folosind `useState`.
            *   Actualizarea stării va determina o re-randare a UI-ului, unde:
                *   Butonul "Conectează Portofel MetaMask" poate fi înlocuit cu adresa utilizatorului (poate într-o formă scurtată, ex: `0x123...abc`) și un indicator de status "Conectat".
                *   (Opțional) Se poate adăuga un buton "Deconectează Portofelul" (deși deconectarea reală se face din extensia MetaMask, UI-ul poate simula o deconectare prin ștergerea adresei din starea locală).
        *Notă Importantă: Acest flux este în întregime client-side. Adresa portofelului nu este trimisă către niciun API MuleSoft sau stocată în baza de date ClickHouse în cadrul acestui MVP. Scopul este doar demonstrarea capacității de interacțiune cu MetaMask.*

    **3.4.3. Fluxul 3: Scanarea unui Produs și Trimiterea Datelor (RPi Pico -> API MuleSoft -> Bază de Date ClickHouse)**
    *   **Actor Principal:** Utilizatorul care operează scannerul conectat la Raspberry Pi Pico W.
    *   **Obiectiv:** Adăugarea unui produs nou în baza de date (dacă nu există) sau actualizarea unui produs existent (ex: timestamp, stoc) pe baza codului de bare scanat.
    *   **Echipe Implicate Major:** Team_9 (RPi Pico/MicroPython), Team_1 (MuleSoft API Scanner), Team_7 (ClickHouse Docker, Networking VM Team_1).
    *   **Pași Detaliați ai Fluxului:**
        1.  **Inițializare RPi Pico W (MicroPython):**
            *   Dispozitivul RPi Pico W este alimentat.
            *   Scriptul `main.py` (dezvoltat de Team_9) pornește automat (dacă este configurat astfel) sau este rulat manual din Thonny IDE.
            *   Scriptul încearcă să se conecteze la rețeaua WiFi locală (SSID și parolă citite din `config.py`). LED-ul onboard indică statusul conexiunii (ex: galben intermitent în timpul conectării).
            *   Dacă conexiunea WiFi reușește, LED-ul devine verde continuu, iar scriptul intră în starea de așteptare a unui input de la scanner.
        2.  **Acțiune Utilizator: Scanare Cod de Bare:**
            *   Utilizatorul apropie un produs cu cod de bare de scannerul USB conectat la RPi Pico W.
            *   Scannerul citește codul de bare și îl transmite către RPi Pico W (prin metoda de interfațare implementată de Team_9 – HID direct, UART via intermediar, sau input manual REPL ca fallback).
        3.  **RPi Pico W: Preluare și Procesare Cod de Bare:**
            *   Scriptul MicroPython recepționează secvența de caractere a codului de bare (ex: "0123456789012") și o curăță de eventuale caractere non-numerice sau de control (ex: Enter).
            *   Scriptul generează un timestamp curent (ex: folosind `time.gmtime()` și formatându-l ca string ISO 8601: `YYYY-MM-DDTHH:MM:SSZ`).
        4.  **RPi Pico W: Construire Payload JSON:**
            *   Scriptul creează un dicționar Python și apoi îl serializează într-un string JSON folosind `ujson.dumps()`. Exemplu payload:
              `{ "barcode": "0123456789012", "scan_timestamp": "2024-05-24T14:30:00Z" }`
        5.  **RPi Pico W: Inițiere Request HTTPS către API-ul MuleSoft:**
            *   Scriptul MicroPython, folosind biblioteca `urequests`, inițiază un request HTTP `POST` către API-ul MuleSoft dedicat scannerului.
            *   **URL-ul API-ului MuleSoft (Exemplu):** `https://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTPS_SCANNER>/api/scanner/product_scan` (URL-ul complet este citit din `config.py` pe Pico).
            *   **Gestionarea Certificatului Self-Signed:** Request-ul `urequests.post()` va fi configurat să **NU valideze certificatul SSL** al serverului MuleSoft, deoarece este auto-semnat și Pico W nu are un trust store pentru a-l valida. Acest lucru se face, de obicei, printr-un parametru specific în apelul funcției (ex: `ssl=None` sau un context SSL creat cu `ssl.SSLContext()` și setat să nu verifice – Team_9 va implementa metoda corectă pentru `urequests` în MicroPython).
            *   **Headere HTTP:** Se setează header-ul `Content-Type: application/json`.
            *   **Corpul Request-ului:** String-ul JSON creat la pasul anterior.
            *   LED-ul de pe Pico W poate clipi rapid (ex: portocaliu) pentru a indica faptul că request-ul este în curs de trimitere.
        6.  **Aplicația MuleSoft (API Scanner - Rulată Nativ pe VM Team_1) Primește Request-ul:**
            *   `HTTP Listener`-ul din aplicația MuleSoft (configurat pentru HTTPS cu certificatul self-signed pe portul `<PORT_MULE_HTTPS_SCANNER>`) recepționează request-ul POST.
        7.  **Fluxul MuleSoft Procesează Datele de la Scanner:**
            *   **Parsare și Validare Inițială:** Payload-ul JSON este parsat automat de MuleSoft. Se efectuează validări de bază (definite în RAML sau în flux) pentru a se asigura că `barcode` este prezent, nu este gol și are un format așteptat (ex: doar cifre, o anumită lungime). `scan_timestamp` este, de asemenea, validat ca format de dată/timp.
            *   **Transformare DataWeave (Minimală):** Se pot face transformări minore dacă este necesar, ex: conversia `scan_timestamp` într-un format specific pentru ClickHouse, sau pregătirea datelor pentru logica de upsert.
            *   **Interacțiune cu Baza de Date ClickHouse (Upsert Logic):**
                1.  Se execută un query `SELECT id, name, stock_quantity FROM devimarket_db.products WHERE barcode = #[payload.barcode] LIMIT 1` folosind `Database Connector`.
                2.  **Dacă produsul NU este găsit (rezultatul query-ului este gol):**
                    *   Se generează un nou `id` UUID (folosind funcția `uuid()` din DataWeave sau Mule).
                    *   Se construiește un query `INSERT INTO devimarket_db.products (id, barcode, name, price, currency, stock_quantity, source_etl, is_active, created_at, updated_at, ...) VALUES (#[vars.newId], #[payload.barcode], #[vars.defaultName], 0.00, 'RON', 1, 'RPi_Pico_Scan_V1.0', 1, #[vars.now_utc], #[vars.now_utc], ...)` (unde `vars.defaultName` este "Produs Scanat - " + `payload.barcode`, iar `vars.now_utc` este timestamp-ul curent generat în MuleSoft). Se inserează rândul.
                3.  **Dacă produsul ESTE găsit:**
                    *   Se preia `id`-ul existent al produsului.
                    *   Se construiește un query `ALTER TABLE devimarket_db.products UPDATE updated_at = #[vars.now_utc], stock_quantity = stock_quantity + 1 WHERE id = #[vars.existingProductId]` (sau o logică de actualizare mai complexă dacă este necesar, ex: actualizarea prețului dacă ar fi trimis de scanner, deși nu e cazul în MVP). Se execută update-ul.
            *   **Logging:** Se loghează detaliat acțiunea efectuată (INSERT sau UPDATE), ID-ul produsului afectat, barcode-ul și timestamp-ul.
        8.  **Aplicația MuleSoft Trimite Răspunsul HTTP către RPi Pico:**
            *   MuleSoft returnează un răspuns JSON structurat, indicând succesul sau eșecul operațiunii și, opțional, detaliile produsului. Exemplu succes: `{ "status": "success", "operation": "created", "productId": "uuid_nou_generat", "barcode": "0123456789012" }`. Exemplu eroare: `{ "status": "error", "message": "Invalid barcode format." }`.
            *   Statusul HTTP va fi 201 Created (pentru insert), 200 OK (pentru update reușit), 400 Bad Request (pentru input invalid) sau 500 Internal Server Error (pentru erori neașteptate în MuleSoft sau DB).
        9.  **RPi Pico W Procesează Răspunsul de la API:**
            *   Scriptul MicroPython citește status code-ul HTTP al răspunsului.
            *   (Opțional) Parsează corpul JSON al răspunsului pentru a extrage mesaje sau date suplimentare.
        10. **RPi Pico W Oferă Feedback Vizual Final:**
            *   Dacă status code-ul este 200 sau 201, LED-ul verde se aprinde pentru 2-3 secunde.
            *   Dacă status code-ul indică o eroare (4xx, 5xx) sau dacă request-ul a eșuat (timeout, eroare de rețea), LED-ul roșu se aprinde pentru 2-3 secunde.
            *   Scriptul revine apoi la starea de așteptare a unui nou scan.

    **3.4.4. Fluxul 4: Migrarea Datelor din "Baza Franceză" (Talend ETL -> Bază de Date ClickHouse)**
    *   **Actor Principal:** Studentul din Team_1 care configurează și rulează manual job-ul Talend.
    *   **Obiectiv:** Transferul și transformarea datelor despre produse dintr-o bază de date sursă simulată (`clickhouse_db_franceza.products_fr`) în baza de date principală a proiectului (`devimarket_db.products`).
    *   **Echipe Implicate Major:** Team_1 (Talend Job design & execution), Team_7 (ClickHouse Docker setup & maintenance).
    *   **Pași Detaliați ai Fluxului:**
        1.  **Pregătire Mediu (One-time sau la nevoie):**
            *   Studentul din Team_1 se asigură că Talend Open Studio este instalat și configurat corect pe VM-ul său.
            *   Studentul din Team_1 se asigură că are driverul JDBC pentru ClickHouse instalat și configurat în Talend.
            *   Studentul din Team_7 (sau oricine pornește stack-ul Docker) se asigură că containerul ClickHouse este pornit și rulează, și că bazele de date `clickhouse_db_franceza` (cu tabelul `products_fr` și date de test) și `devimarket_db` (cu tabelul `products`) sunt create (prin scripturile de inițializare Docker).
        2.  **Execuție Job Talend:**
            *   Studentul din Team_1 deschide proiectul Talend și job-ul specific de migrare (ex: `Job_Migrate_FrenchDB_To_DeviMarketDB_Products_v1`).
            *   Configurează variabilele de context ale job-ului, dacă există (ex: detalii de conexiune la DB, deși acestea sunt de obicei stocate în Metadata > Db Connections).
            *   Rulează job-ul din interfața Talend Studio.
        3.  **Talend - Etapa de Extragere (Extract):**
            *   Componenta de input (ex: `tJDBCInput` sau `tClickhouseInput`) din job se conectează la instanța ClickHouse (rulată în Docker, pe portul expus pe host-ul VM) și specific la baza de date `clickhouse_db_franceza`.
            *   Execută query-ul SQL definit pentru a extrage toate rândurile și coloanele relevante din tabelul `products_fr` (ex: `SELECT id_fr, nom_produit, description_fr, prix_eur, categorie_fr, stock_fr FROM clickhouse_db_franceza.products_fr WHERE actif_fr = 1;`).
            *   Datele extrase sunt trimise ca un flux de rânduri către următoarea componentă.
        4.  **Talend - Etapa de Transformare (Transform):**
            *   Fluxul de date ajunge la componenta `tMap`. Aici se aplică logica complexă de transformare:
                *   **Maparea Coloanelor:** Coloanele din sursă sunt mapate la coloanele corespunzătoare din schema tabelului destinație `devimarket_db.products` (ex: `nom_produit` -> `name`, `prix_eur` -> `price`).
                *   **Conversia Tipului de Date:** Se asigură compatibilitatea tipurilor (ex: un câmp text `prix_eur` din sursă este convertit în `Decimal(10,2)` pentru `price`; un `stock_fr` text în `Int32` pentru `stock_quantity`). Se pot folosi funcții Java sau Talend pentru conversie (ex: `Float.parseFloat(row1.prix_eur)`).
                *   **Curățarea Datelor:** Se aplică funcții pentru a elimina spațiile albe de la începutul/sfârșitul string-urilor (`StringHandling.TRIM`), pentru a converti textul la un case consistent (ex: `row1.categorie_fr.toUpperCase()`).
                *   **Generarea de Valori Noi/Default:**
                    *   Se generează un `id` UUID nou și unic pentru fiecare produs migrat, folosind `TalendString.getUUID()`. Acesta devine cheia primară în tabelul destinație.
                    *   Se setează câmpul `source_etl` la o valoare specifică, ex: "TALEND_FR_MIGR_V1.1_YYYYMMDD".
                    *   Se setează câmpurile `created_at` și `updated_at` la timestamp-ul curent al execuției job-ului (folosind `TalendDate.getCurrentDate()`).
                    *   Se setează valori default pentru câmpurile din `devimarket_db.products` care nu au corespondent direct în `products_fr` (ex: `currency` = 'RON' dacă `prix_eur` este convertit în RON; `is_active` = 1).
                *   **Logica Condiționată:** (Opțional) Se pot implementa reguli de business, ex: dacă `stock_fr` este 0, setează `is_active` = 0.
                *   **Filtrarea Rândurilor:** Rândurile care nu îndeplinesc anumite criterii de validitate (ex: preț lipsă, nume produs gol) pot fi direcționate către un flux de "rejects" în loc de fluxul principal de output.
            *   `tMap` produce unul sau mai multe fluxuri de output cu datele transformate.
        5.  **Talend - Etapa de Încărcare (Load):**
            *   Fluxul principal de date transformate (cele valide) este trimis către componenta de output (ex: `tDBOutput` sau `tClickhouseOutput`).
            *   Această componentă se conectează la instanța ClickHouse și la baza de date `devimarket_db`.
            *   Execută operațiuni `INSERT` pentru a adăuga fiecare rând transformat în tabelul `devimarket_db.products`. Se specifică acțiunea "Insert" pe tabel.
        6.  **Talend - Logging și Gestionarea Erorilor:**
            *   Pe parcursul execuției, componentele `tLogRow` (plasate strategic după extragere, transformare și înainte de încărcare) vor afișa mostre de date sau numărul de rânduri în consola Talend Studio, permițând monitorizarea și depanarea.
            *   Rândurile care eșuează la transformare (în `tMap`) sau la încărcare (în `tDBOutput`) sunt capturate prin legăturile "Rejects" și pot fi direcționate către un `tLogRow` sau, mai bine, către un fișier text (`tFileOutputDelimited`) pentru analiză ulterioară. Se vor loga atât datele rândului, cât și mesajul de eroare.
        7.  **Finalizare Job Talend:** La încheierea execuției, consola Talend va afișa un sumar (număr de rânduri citite, scrise, respinse) și durata totală. Studentul din Team_1 va verifica datele încărcate în `devimarket_db.products` (folosind DBeaver sau `clickhouse-client`) și fișierele de log de erori.
        *Notă: Acest flux este un proces batch, inițiat manual. Nu există interacțiune în timp real cu alte componente în timpul execuției sale, cu excepția conexiunilor la baza de date.*

    **3.4.5. Fluxul 5: Preluarea și Procesarea Produselor de la API-ul Extern (Aplicație MuleSoft -> Bază de Date ClickHouse)**
    *   **Actor Principal:** Aplicația MuleSoft (fie declanșată automat de un `Scheduler`, fie manual printr-un request HTTP de către un student din Team_1).
    *   **Obiectiv:** Extragerea periodică (sau la cerere) a datelor despre produse de la un API public online, transformarea acestora și încărcarea/actualizarea lor în baza de date principală `devimarket_db.products`.
    *   **Echipe Implicate Major:** Team_1 (MuleSoft App design & execution), Team_7 (ClickHouse Docker).
    *   **Pași Detaliați ai Fluxului:**
        1.  **Declanșarea Fluxului MuleSoft de Ingestie:**
            *   **Opțiunea A (Automată):** Un component `Scheduler` din cadrul aplicației Mule este configurat să declanșeze fluxul la intervale regulate (ex: la fiecare 6 ore, sau mai frecvent pentru testare – ex: la fiecare 5 minute).
            *   **Opțiunea B (Manuală):** Un `HTTP Listener` expune un endpoint simplu (ex: `GET http://<IP_VM_TEAM_1>:<PORT_MULE_HTTP_ETL>/api/marketplace/ingest-external-products`). Un student din Team_1 (sau un script automatizat) apelează acest endpoint pentru a porni procesul de ingestie.
        2.  **MuleSoft Apelează API-ul Extern:**
            *   Componenta `HTTP Request` din fluxul Mule este configurată pentru a face un request GET către URL-ul API-ului public gratuit selectat (ex: `https://dummyjson.com/products?limit=20&skip=0` – se pot folosi variabile de flux pentru a gestiona paginarea dacă API-ul extern suportă și se dorește preluarea tuturor produselor în batch-uri).
            *   Se configurează header-ele necesare (dacă API-ul extern le cere).
        3.  **MuleSoft Primește și Parsează Răspunsul JSON:**
            *   Aplicația Mule primește răspunsul de la API-ul extern. Se așteaptă un răspuns JSON care conține o listă de produse (sau un obiect care conține o listă de produse, ex: `{"products": [...], "total": ..., "skip": ..., "limit": ...}`).
            *   MuleSoft parsează automat JSON-ul în structuri DataWeave/Java.
        4.  **MuleSoft Iterează și Transformă Datele (DataWeave):**
            *   Se utilizează un scope `For Each` pentru a itera prin fiecare obiect "produs" din lista primită de la API-ul extern.
            *   În interiorul scope-ului `For Each`, o componentă `Transform Message` (DataWeave) este utilizată pentru a transforma fiecare produs extern în structura internă așteptată de tabelul `devimarket_db.products`. Aceasta include:
                *   Maparea câmpurilor (ex: `payload.title` -> `name`, `payload.price` -> `price`).
                *   Conversia tipurilor de date (ex: asigurarea că `price` este numeric, `stock_quantity` este integer).
                *   Gestionarea valorilor nule sau lipsă (setarea de valori default adecvate, ex: `description` = "N/A" dacă lipsește).
                *   Generarea unui `id` UUID nou și unic pentru fiecare produs (folosind `uuid()` din DataWeave).
                *   Setarea câmpului `source_etl` la o valoare specifică (ex: 'MULE_DummyJSON_V1.0').
                *   Setarea câmpurilor `created_at` și `updated_at` la timestamp-ul curent UTC (generat în DataWeave folosind `now()`).
                *   Setarea `is_active = 1`.
        5.  **MuleSoft Interacționează cu Baza de Date ClickHouse (Logică "Upsert"):**
            *   Pentru fiecare produs transformat (încă în interiorul scope-ului `For Each` sau după colectarea tuturor într-un batch), fluxul Mule, folosind `Database Connector`, implementează o logică de "upsert" (insert or update) în tabelul `devimarket_db.products`.
            *   **Strategia de Upsert:** Deoarece API-urile externe pot returna aceleași produse la apeluri multiple, este important să se evite duplicatele. O strategie ar fi:
                1.  Se identifică o cheie de business unică din datele API-ului extern (dacă există un ID de produs extern fiabil, acesta este ideal). Dacă nu, se poate încerca o combinație (ex: `name` și `brand`, deși mai puțin fiabilă).
                2.  Se execută un `SELECT id FROM devimarket_db.products WHERE external_product_id = #[vars.current_external_id]` (presupunând că am adăugat o coloană `external_product_id` în tabelul nostru, sau folosim altă cheie).
                3.  Dacă produsul **nu este găsit**: se execută un `INSERT` cu toate datele transformate.
                4.  Dacă produsul **este găsit**: se execută un `UPDATE` (folosind `ALTER TABLE ... UPDATE`) pentru a actualiza câmpurile relevante (ex: `price`, `stock_quantity`, `description`, și obligatoriu `updated_at`). Se va actualiza doar dacă datele primite de la API sunt mai noi sau diferite (opțional, logică mai complexă de versionare).
        6.  **MuleSoft Loghează Operațiunea și Gestionează Erorile:**
            *   Se loghează detaliat fiecare acțiune: câte produse au fost preluate de la API-ul extern, câte au fost procesate, câte au fost inserate ca noi, câte au fost actualizate.
            *   Orice eroare în timpul procesului (ex: API extern indisponibil, eroare de transformare DataWeave, eroare la scrierea în ClickHouse) este capturată și logată. Fluxul ar trebui să fie suficient de robust pentru a continua procesarea celorlalte produse dacă o eroare afectează doar un singur produs (ex: folosind un `Try Scope` în interiorul `For Each`).
        7.  **Finalizare Flux MuleSoft:** Dacă fluxul a fost declanșat manual printr-un HTTP Listener, se returnează un răspuns JSON cu un sumar al operațiunii (ex: `{ "status": "success", "source_api": "DummyJSON", "retrieved": 20, "created": 15, "updated": 5, "errors": 0 }`). Dacă a fost declanșat de `Scheduler`, se scrie doar în log-uri.
        *Notă: Acest flux poate fi destul de intensiv în resurse dacă API-ul extern returnează multe produse. Pentru MVP, se va limita numărul de produse preluate la fiecare execuție (ex: folosind parametrii `limit` și `skip` ai API-ului extern).*

    **3.4.6. Fluxul 6 (Opțional și Secundar): Consumarea API-ului MuleSoft de către Talend (Talend ETL -> API MuleSoft -> Bază de Date ClickHouse)**
    *   **Actor Principal:** Studentul din Team_1 care rulează job-ul Talend specific.
    *   **Obiectiv:** Demonstrarea unui pattern de integrare în care Talend acționează ca un client al unui API expus de MuleSoft, pentru a prelua date și a le procesa ulterior (în acest caz, încărcându-le în ClickHouse). Acest flux este mai mult educațional, pentru a arăta interacțiunea Talend-MuleSoft.
    *   **Condiție Prealabilă:** Aplicația MuleSoft (din Fluxul 5) trebuie să fie configurată astfel încât endpoint-ul său (ex: `GET /api/marketplace/external-products-for-talend`) să **returneze** lista de produse transformate (după DataWeave), în loc să le scrie direct în ClickHouse. MuleSoft acționează aici doar ca un transformator și expunător de date.
    *   **Echipe Implicate Major:** Team_1 (Talend Job & MuleSoft API), Team_7 (ClickHouse Docker).
    *   **Pași Detaliați ai Fluxului:**
        1.  **Student Team_1 Rulează Job Talend:** Job-ul Talend dedicat (ex: `Job_ConsumeMuleAPI_LoadClickHouse_v1`) este executat din Talend Open Studio.
        2.  **Talend Apelează API-ul MuleSoft:**
            *   Componenta `tRestClient` din job este configurată pentru a face un request HTTP GET către endpoint-ul specific din MuleSoft (ex: `http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP_ETL>/api/marketplace/external-products-for-talend`).
        3.  **Talend Primește și Parsează Răspunsul JSON:**
            *   `tRestClient` primește răspunsul JSON de la MuleSoft (care conține lista de produse deja transformate de DataWeave pentru a se potrivi aproximativ cu schema ClickHouse).
            *   Componenta `tExtractJSONFields` este utilizată pentru a parsa acest JSON și a extrage câmpurile fiecărui produs într-un flux Talend. Se va defini o schemă în Talend care corespunde structurii JSON returnate de MuleSoft.
        4.  **Talend (Opțional) Transformă Date Suplimentar (`tMap`):**
            *   Deși MuleSoft a făcut transformarea principală, `tMap` poate fi folosit în Talend pentru:
                *   Validări suplimentare specifice Talend.
                *   Setarea câmpului `source_etl` la o valoare distinctă care indică acest flux (ex: "TALEND_FROM_MULE_API_V1.0").
                *   Orice altă ajustare minoră necesară înainte de încărcarea în ClickHouse.
        5.  **Talend Încarcă Datele în ClickHouse:**
            *   Fluxul de date transformate este trimis către o componentă `tDBOutput` (sau `tClickhouseOutput`) configurată pentru a scrie în tabelul `devimarket_db.products`.
            *   Se va folosi o strategie de "Insert". Logica de "upsert" ar fi trebuit, ideal, să fie gestionată de MuleSoft înainte de a returna datele, sau Talend ar trebui să implementeze o logică de upsert mai complexă (SELECT apoi INSERT/UPDATE), ceea ce poate fi peste scopul acestui flux opțional. Pentru simplitate, se poate asuma că datele sunt noi sau se face un "truncate and load" pe acest `source_etl` specific.
        6.  **Talend Loghează Progresul și Erorile:** Similar cu celelalte job-uri Talend.
        *Notă: Acest flux este mai mult un exercițiu de a arăta cum Talend poate consuma API-uri. Dacă MuleSoft deja scrie datele direct în ClickHouse în Fluxul 5, acest Flux 6 poate fi redundant din punct de vedere funcțional, dar valoros din punct de vedere educațional pentru Team_1.*

**3.5. Modelul de Date Central: Specificațiile Complete ale Tabelului `products` în ClickHouse**

Aceasta este definiția detaliată și finală pentru tabelul principal `products` care va fi creat în baza de date `devimarket_db` din instanța ClickHouse. Toate fluxurile de date care populează informații despre produse (MuleSoft de la scanner, MuleSoft de la API extern, Talend de la "baza franceză") trebuie să producă date care se conformează acestei structuri.

**Nume Tabel:** `products`
**Bază de Date:** `devimarket_db` (nume confirmat de Team_7 la setup)

| Nume Coloană          | Tip de Date ClickHouse                | Nullable? | Cheie Primară / Sortare? | Indecși Secundari Sugerați (Skip Indexes)                                                                                                           | Descriere Detaliată, Scop și Reguli de Validare                                                                                                                                                                       | Exemplu Valoare Concretă                                | Responsabil Principal de Alimentare (Flux) |
| --------------------- | ------------------------------------- | --------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------ |
| `id`                  | `UUID`                                | **NU**    | `PRIMARY KEY / ORDER BY` | Identificator unic global (UUID v4) pentru fiecare înregistrare de produs. Generat de fluxul de ingestie (MuleSoft sau Talend) la crearea rândului. | `f47ac10b-58cc-4372-a567-0e02b2c3d479`                                                                                                                                                                                | MuleSoft (Scanner, API Ext), Talend                     |
| `barcode`             | `String`                              | DA        |                          | `INDEX idx_barcode barcode TYPE bloom_filter GRANULARITY 1`                                                                                         | Codul de bare numeric al produsului (EAN-13, UPC-A, etc.). Poate fi null dacă produsul nu are sau nu este scanat. Dacă este prezent, ar trebui să fie unic (constângere aplicată logic în MuleSoft/Talend la upsert). | `0123456789012`                                         | RPi Pico (via MuleSoft)                    |
| `name`                | `String`                              | **NU**    | Parte din `ORDER BY`     | `INDEX idx_name name TYPE tokenbf_v1(5120,3,0) GRANULARITY 1` (pentru căutare text)                                                                 | Numele comercial complet și descriptiv al produsului. Maxim 255 caractere. Obligatoriu. Curățați spațiile albe.                                                                                                       | `Cafea Boabe Etiopia Yirgacheffe Prajire Medie Bio 1kg` | MuleSoft (API Ext), Talend                 |
| `description`         | `String`                              | DA        |                          | `INDEX idx_desc description TYPE tokenbf_v1(8192,3,0) GRANULARITY 1`                                                                                | O descriere detaliată a produsului. Poate conține text mai lung (ex: max 4000 caractere).                                                                                                                             | `Cafea de origine unica, 100% Arabica...`               | MuleSoft (API Ext), Talend                 |
| `price`               | `Decimal(12, 2)`                      | **NU**    |                          |                                                                                                                                                     | Prețul de vânzare al produsului. Tip Decimal pentru precizie financiară (12 cifre totale, 2 zecimale). Obligatoriu. Valoare pozitivă.                                                                                 | `125.99`                                                | MuleSoft (API Ext), Talend                 |
| `currency`            | `LowCardinality(String(3))`           | **NU**    |                          |                                                                                                                                                     | Codul ISO 4217 al monedei prețului (3 litere). Default 'RON'. Valori permise: 'RON', 'EUR', 'USD' (validate în fluxul de ingestie).                                                                                   | `RON`                                                   | MuleSoft (API Ext), Talend                 |
| `category`            | `LowCardinality(String)`              | DA        | Parte din `ORDER BY`     | `INDEX idx_cat category TYPE set(0) GRANULARITY 1`                                                                                                  | Categoria principală a produsului (ex: 'Bauturi', 'Alimente', 'Electronice'). Max 50 caractere. Consistentizarea valorilor (ex: capitalizare).                                                                        | `Bauturi`                                               | MuleSoft (API Ext), Talend                 |
| `sub_category`        | `LowCardinality(String)`              | DA        | Parte din `ORDER BY`     | `INDEX idx_subcat sub_category TYPE set(0) GRANULARITY 1`                                                                                           | Subcategoria produsului. Max 50 caractere. Poate depinde de `category`.                                                                                                                                               | `Cafea`                                                 | MuleSoft (API Ext), Talend                 |
| `brand`               | `LowCardinality(String)`              | DA        |                          | `INDEX idx_brand brand TYPE set(0) GRANULARITY 1`                                                                                                   | Marca (producătorul) produsului. Max 100 caractere.                                                                                                                                                                   | `DeviPremium Coffee`                                    | MuleSoft (API Ext), Talend                 |
| `stock_quantity`      | `Int32`                               | **NU**    |                          |                                                                                                                                                     | Cantitatea numerică a produsului disponibilă în stoc. Valoare întreagă, non-negativă. Default 0 la creare dacă nu e specificat altfel. Poate fi actualizată de scanner.                                               | `150`                                                   | MuleSoft (Scanner, API Ext), Talend        |
| `image_url`           | `String`                              | DA        |                          |                                                                                                                                                     | URL-ul complet către imaginea principală a produsului. Ar trebui să fie un URL valid (validare de format în fluxul de ingestie). Max 500 caractere.                                                                   | `https://cdn.example.com/images/cafea.jpg`              | MuleSoft (API Ext), Talend                 |
| `source_etl`          | `LowCardinality(String(50))`          | **NU**    | INDEX                    |                                                                                                                                                     | Indică sursa și versiunea fluxului ETL care a creat/actualizat semnificativ înregistrarea (ex: 'TALEND_FR_MIGR_V1.1', 'MULE_DUMMYJSON_V1.0', 'RPI_PICO_SCAN_V1.2'). Max 50 caractere.                                 | `MULE_DUMMYJSON_V1.0`                                   | MuleSoft (Scanner, API Ext), Talend        |
| `attributes`          | `Map(LowCardinality(String), String)` | DA        |                          |                                                                                                                                                     | O structură flexibilă cheie-valoare pentru atribute specifice produsului. Cheile și valorile sunt stringuri. Chei max 50 caractere, Valori max 255 caractere.                                                         | `{'Tip Prajire':'Medie', 'Aciditate':'Scazuta'}`        | MuleSoft (API Ext), Talend                 |
| `tags`                | `Array(LowCardinality(String))`       | DA        |                          | `INDEX idx_tags tags TYPE bloom_filter GRANULARITY 1`                                                                                               | O listă de etichete (keywords) asociate produsului. Tag-uri max 50 caractere. Curățare și normalizare (ex: lowercase).                                                                                                | `['bio', 'cafea boabe', 'arabica']`                     | MuleSoft (API Ext), Talend                 |
| `is_active`           | `UInt8`                               | **NU**    | INDEX                    |                                                                                                                                                     | Flag boolean (0 sau 1) pentru a indica dacă produsul este activ și vizibil. 1 = Activ, 0 = Inactiv. Default 1 la creare.                                                                                              | `1`                                                     | MuleSoft (API Ext), Talend                 |
| `created_at`          | `DateTime64(3, 'Etc/UTC')`            | **NU**    | Parte din `ORDER BY`     |                                                                                                                                                     | Timestamp (UTC, cu precizie de milisecunde) când înregistrarea a fost creată. Setat automat de fluxul de ingestie la INSERT.                                                                                          | `2024-05-24 10:00:00.123`                               | MuleSoft (Scanner, API Ext), Talend        |
| `updated_at`          | `DateTime64(3, 'Etc/UTC')`            | **NU**    | INDEX                    |                                                                                                                                                     | Timestamp (UTC, cu precizie de milisecunde) când înregistrarea a fost ultima dată actualizată. Setat automat la INSERT și la fiecare UPDATE semnificativ.                                                             | `2024-05-24 12:30:45.678`                               | MuleSoft (Scanner, API Ext), Talend        |
| `external_product_id` | `String`                              | DA        | INDEX (opțional, unic)   | `INDEX idx_extid external_product_id TYPE bloom_filter GRANULARITY 1`                                                                               | ID-ul produsului din sistemul sursă extern (dacă API-ul extern furnizează unul). Util pentru logica de upsert în fluxul MuleSoft pentru API-ul extern.                                                                | `DUMMYJSON_PROD_42`                                     | MuleSoft (API Ext)                         |

**Definiție Tabel ClickHouse (Exemplu DDL):**

```sql
CREATE TABLE IF NOT EXISTS devimarket_db.products
(
    `id` UUID,
    `barcode` Nullable(String),
    `name` String,
    `description` Nullable(String),
    `price` Decimal(12, 2),
    `currency` LowCardinality(String(3)) DEFAULT 'RON',
    `category` Nullable(LowCardinality(String)),
    `sub_category` Nullable(LowCardinality(String)),
    `brand` Nullable(LowCardinality(String)),
    `stock_quantity` Int32 DEFAULT 0,
    `image_url` Nullable(String),
    `source_etl` LowCardinality(String(50)),
    `attributes` Map(LowCardinality(String), String),
    `tags` Array(LowCardinality(String)),
    `is_active` UInt8 DEFAULT 1,
    `created_at` DateTime64(3, 'Etc/UTC'),
    `updated_at` DateTime64(3, 'Etc/UTC'),
    `external_product_id` Nullable(String),

    INDEX idx_barcode barcode TYPE bloom_filter GRANULARITY 1,
    INDEX idx_name name TYPE tokenbf_v1(5120,3,0) GRANULARITY 1,
    INDEX idx_desc description TYPE tokenbf_v1(8192,3,0) GRANULARITY 1,
    INDEX idx_cat category TYPE set(0) GRANULARITY 1,
    INDEX idx_subcat sub_category TYPE set(0) GRANULARITY 1,
    INDEX idx_brand brand TYPE set(0) GRANULARITY 1,
    INDEX idx_source_etl source_etl TYPE set(0) GRANULARITY 1,
    INDEX idx_tags tags TYPE bloom_filter GRANULARITY 1,
    INDEX idx_is_active is_active TYPE set(0) GRANULARITY 1,
    INDEX idx_updated_at updated_at TYPE minmax GRANULARITY 1,
    INDEX idx_extid external_product_id TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree()
PRIMARY KEY id
ORDER BY (id, category, sub_category, name, created_at)
SETTINGS index_granularity = 8192;
```

_Notă la DDL: `ORDER BY (id, category, sub_category, name, created_at)` este o sugestie pentru o cheie de sortare/index primar care ar putea ajuta la query-urile Frontend-ului. `index_granularity` este o setare de bază. Acestea pot fi ajustate de Team_1/Team_7 după mai multă analiză. Indecșii secundari sunt sugestii pentru a accelera filtrele comune._

**Tabel Sursă Simulat (pentru Talend ETL): `clickhouse_db_franceza.products_fr`**
Schema acestui tabel va fi definită de Team_1, dar ar trebui să fie diferită de `devimarket_db.products` pentru a face transformările Talend relevante. De exemplu:

- Poate avea nume de coloane în franceză: `id_produit_fr`, `nom_produit_fr`, `prix_ht_eur`, `categorie_fr`, `quantite_stock_fr`.
- Poate avea tipuri de date diferite: `prix_ht_eur` ca `String`, `quantite_stock_fr` ca `String`.
- Poate lipsi unele câmpuri (ex: `sub_category`, `brand`, `image_url`, `attributes`, `tags`).
- Poate avea câmpuri suplimentare care nu sunt relevante pentru noul marketplace.
  Team_1 va crea DDL-ul pentru acest tabel și îl va popula cu date de test.

---

**4. ORGANIZAREA ECHIPELOR, ALOCAREA PE TEHNOLOGII ȘI FOCUS PE ÎNVĂȚARE (Versiune 5.0 - Finală, MuleSoft Central)**

Acest capitol detaliază structura echipelor de studenți ("Parent Teams"), așa cum au fost ele definite inițial de Tutore, analizează interesele individuale de învățare declarate de fiecare student și stabilește o mapare clară și specifică a acestor interese la responsabilitățile concrete pe modulele tehnice ale proiectului "DeviMarket Zero". O înțelegere aprofundată a focusului fiecărei echipe și a contribuției individuale este esențială pentru o colaborare armonioasă, pentru atingerea obiectivelor de învățare personalizate și pentru succesul general al proiectului. Se va acorda o atenție deosebită rolului extins și complexității sarcinilor alocate **Team_1**, care va gestiona platformele centrale de integrare și API, MuleSoft și Talend.

**4.1. Structura "Parent Teams" (Conform Listei Inițiale Furnizate de Tutore)**

Organizarea de bază a celor 10 studenți în "Parent Teams", așa cum a fost stabilită de Tutore (Petrut Constantin) la începutul programului de practică și menținută pentru acest proiect, este următoarea:

- **Team 1 ("Automatizare și Integrare Date"):**
  - Coman Raluca _(din Child Team A inițial)_
  - Cotan Petruta _(din Child Team B inițial)_
  - Necoara Aida Florentina _(din Child Team C inițial)_
  - **Focus Principal Proiect:** MuleSoft Anypoint Platform (Dezvoltare API-uri, Logică Business, Interacțiune DB), Talend Open Studio (Procese ETL Batch), Design Schemă și Interacțiune Avansată ClickHouse.

- **Team 2 ("Dezvoltare Web & Web3 Frontend"):**
  - Tuca Dragos Andrei _(din Child Team A inițial)_
  - Proaspatu Nicolae Bogdan _(din Child Team B inițial)_
  - **Focus Principal Proiect:** Dezvoltarea Aplicației Frontend (React, Tailwind CSS, JavaScript/TypeScript), Consumul API-urilor MuleSoft, Integrarea MetaMask.

- **Team 7 ("Infrastructură, Networking, DevOps & QA"):**
  - Chesnoiu Andrei Bogdan _(din Child Team A inițial)_
  - Culesca Teodora Maria _(din Child Team B inițial)_
  - Ghetau Cristian Marian _(din Child Team C inițial)_
  - **Focus Principal Proiect:**
    - Chesnoiu A.B. & Ghetau C.M.: Infrastructură Docker (ClickHouse, NGINX), Docker Compose, Configurare NGINX, Networking Local și între Componente.
    - Culesca T.M.: Quality Assurance (Testare API-uri MuleSoft cu Postman, Testare Funcțională Frontend), Coordonare Documentație Tehnică.

- **Team 9 ("Sisteme Embedded & Microprocesoare"):**
  - Cadar Andreea _(din Child Team A inițial)_
  - Pista Darius _(din Child Team B inițial)_
  - **Focus Principal Proiect:** Dezvoltare Sistem de Scanare Hardware (Raspberry Pi Pico W, Programare MicroPython, Interfațare Scanner, Apelare API MuleSoft).

**Notă Importantă privind Colaborarea Inter-Echipe și Flexibilitatea Rolurilor:**

- **Interdependență și Colaborare:** Deși există această împărțire pe "Parent Teams" cu focusuri specifice, proiectul "DeviMarket Zero" este, prin natura sa, extrem de integrat. Succesul depinde fundamental de o **colaborare strânsă, deschisă, constantă și proactivă** între membrii tuturor echipelor. Punctele de integrare dintre module (ex: Frontend consumând API-uri MuleSoft; RPi Pico apelând API-uri MuleSoft; MuleSoft și Talend scriind/citind din instanța ClickHouse configurată de Team_7; NGINX servind build-ul React) vor necesita comunicare frecventă, definirea clară a contractelor (API-uri, structuri de date) și sesiuni de testare de integrare comune.
- **Flexibilitatea Rolurilor (Limitată):** Deși focusul principal este stabilit, studenții sunt încurajați să exploreze și aspecte adiacente intereselor lor, cu acordul Tutorelui, dacă timpul permite și nu afectează negativ task-urile principale. De exemplu, un student din Team_2 interesat de backend ar putea studia mai în detaliu API-urile MuleSoft pe care le consumă.
- **"Child Teams":** Subdiviziunile "Child Team A, B, C" menționate în lista inițială sunt considerate o formă de organizare internă anterioară și nu vor fi folosite ca unități de asignare distincte în Jira pentru acest proiect specific, pentru a simplifica managementul și a promova colaborarea la nivel de "Parent Team" pe modulele tehnice. Responsabilitățile vor fi la nivel de "Parent Team" sau, pentru task-uri specifice, la nivel individual în cadrul echipei.

**4.2. Profilul Individual al Studenților: Interese Declarate și Maparea Detaliată la Modulele și Tehnologiile Proiectului "DeviMarket Zero"**

Această secțiune reiterează interesele de învățare declarate de fiecare student și le mapează în mod specific și detaliat la modulele tehnice și tehnologiile concrete pe care le vor aborda în cadrul proiectului "DeviMarket Zero", în contextul arhitecturii cu MuleSoft ca platformă API centrală.

- **Cadar Andreea** (Parent Team: **Team_9**)
  - **Interes Declarat:** CAD + Microprocesoare.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul de Scanare Hardware (Raspberry Pi Pico W)**.
    - **Tehnologii și Activități de Învățare Detaliate:** Programare aprofundată în **MicroPython** pe RPi Pico W, înțelegerea arhitecturii microcontroller-ului, interfațarea directă cu pinii GPIO (pentru LED-uri de feedback), implementarea logicii de conectare la rețele WiFi, construirea și trimiterea de request-uri HTTPS (cu gestionarea specifică a certificatelor self-signed în MicroPython) către API-ul MuleSoft dedicat scannerului. Provocarea principală va fi **cercetarea și implementarea unei metode fiabile de citire a datelor de la un scanner de coduri de bare USB** (fie prin emulare USB Host pe Pico W, fie printr-o soluție alternativă agreată). Va învăța despre ciclul de dezvoltare pentru sisteme embedded, depanarea pe hardware și interacțiunea dintre un dispozitiv fizic și un API de rețea.

- **Chesnoiu Andrei Bogdan** (Parent Team: **Team_7**)
  - **Interes Declarat:** Infrastructura + Networking + Limbaje de Programare + DevOps Intro + Security Basics.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul de Infrastructură Locală (Docker, Docker Compose, NGINX)** și **Aspectele de Networking și Securitate de Bază ale acesteia**.
    - **Tehnologii și Activități de Învățare Detaliate:**
      - **Docker & Docker Compose:** Stăpânirea creării de Dockerfile-uri optimizate (multi-stage pentru NGINX/React), scrierea și gestionarea unui fișier `docker-compose.yml` complex pentru orchestrarea containerelor ClickHouse și NGINX, managementul avansat al volumelor Docker (pentru persistența datelor ClickHouse și montarea configurațiilor/scripturilor) și al rețelelor Docker custom (definire, conectare servicii).
      - **NGINX:** Configurare detaliată și avansată a NGINX ca server web pentru servirea aplicației Frontend React (build static), incluzând gestionarea corectă a rutării client-side pentru SPA-uri și implementarea **HTTPS local cu certificate self-signed** (generare certificate, configurare NGINX).
      - **Networking:** Definirea și depanarea problemelor de conectivitate între containerele Docker (ClickHouse, NGINX), între aplicațiile native rulate pe VM (MuleSoft, Talend) și serviciile Dockerizate (ClickHouse), și între dispozitivul RPi Pico (din rețeaua locală) și API-ul MuleSoft (rulat pe VM-ul unui student din Team_1). Aceasta include înțelegerea IP-urilor, porturilor, DNS-ului local (prin `/etc/hosts`), firewall-ului VM.
      - **DevOps Intro (Practic):** Aplicarea conceptelor de "Infrastructure as Code" prin utilizarea `docker-compose.yml` și a Dockerfile-urilor pentru a defini și reproduce consistent mediul de rulare. (Opțional, dacă timpul permite și există inițiativă, explorarea unui pipeline GitHub Actions foarte simplu pentru linting-ul codului versionat sau pentru un build Docker automat – strict ca exercițiu de învățare).
      - **Security Basics (Aplicat):** Implementarea HTTPS cu certificate self-signed pe NGINX. Înțelegerea riscurilor de securitate într-o rețea locală și a măsurilor de bază (ex: configurarea corectă a utilizatorilor și parolelor pentru ClickHouse, deși nu va implementa politici de securitate complexe pentru API-uri).
      - **(Limbaje de Programare - Contextual):** Va scrie scripturi de configurare (Bash pentru inițializare DB în Docker, configurații NGINX). Va înțelege cum diversele aplicații (scrise în JavaScript/React, Java/MuleSoft/Talend, MicroPython) interacționează cu infrastructura de rețea și cu serviciile pe care le configurează.

- **Coman Raluca** (Parent Team: **Team_1**)
  - **Interes Declarat:** Automatizare.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul de Integrare și Procesare Date (MuleSoft Anypoint Platform & Talend Open Studio)**.
    - **Tehnologii și Activități de Învățare Detaliate:** Contribuție majoră și aprofundată la designul, implementarea, testarea și documentarea:
      - **API-urilor RESTful în MuleSoft Anypoint Studio:** Dezvoltarea fluxurilor Mule, scrierea de scripturi **DataWeave** pentru transformări de date complexe, configurarea conectorilor HTTP și Database (ClickHouse), implementarea logicii de business pentru API-ul scannerului, API-ul fațadă pentru sursa externă și API-urile pentru Frontend.
      - **Job-urilor ETL în Talend Open Studio:** Crearea job-urilor pentru migrarea datelor din "baza franceză" simulată în ClickHouse, incluzând extragerea, transformările complexe în `tMap` (cu expresii Java), și încărcarea în ClickHouse. (Opțional) Crearea unui job care consumă un API MuleSoft.
      - Va învăța în mod direct cum aceste platforme de integrare (MuleSoft, Talend) sunt folosite pentru a **automatiza fluxurile de date** complexe, a orchestra interacțiunile între sisteme și a reduce efortul manual în procesele de business.

- **Cotan Petruta** (Parent Team: **Team_1**)
  - **Interes Declarat:** Automatizare.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul de Integrare și Procesare Date (MuleSoft Anypoint Platform & Talend Open Studio)**.
    - **Tehnologii și Activități de Învățare Detaliate:** Similar cu Coman Raluca, va avea o contribuție majoră și aprofundată la designul, implementarea, testarea și documentarea API-urilor MuleSoft (fluxuri, DataWeave, conectori, logică business) și a job-urilor ETL Talend (migrare date, transformări `tMap`, încărcare). Se va concentra pe aplicarea practică a conceptelor de automatizare a integrării datelor folosind aceste unelte puternice.

- **Culesca Teodora Maria** (Parent Team: **Team_7**)
  - **Interes Declarat:** Din fiecare cate putin.
  - **Mapare Specifică la Proiect:**
    - **Rol Transversal Principal:** **Quality Assurance (QA) și Coordonarea Documentației Tehnice**. Acest rol îi va oferi oportunitatea unică de a interacționa cu toate modulele și tehnologiile proiectului.
    - **Tehnologii și Activități de Învățare Detaliate:**
      - **Quality Assurance (QA):**
        - Crearea unui Plan de Testare simplu, dar cuprinzător, pentru funcționalitățile MVP-ului.
        - Testarea manuală a interfeței Frontend React (verificarea UI-ului, a navigării, a afișării corecte a datelor, a funcționalității MetaMask).
        - Testarea API-urilor expuse de MuleSoft folosind **Postman**: crearea unei colecții de request-uri, definirea de teste (aserțiuni JavaScript) pentru validarea status code-urilor, a structurii și a conținutului răspunsurilor JSON.
        - Verificarea integrității și corectitudinii datelor în baza de date ClickHouse după rularea fluxurilor ETL (Talend, MuleSoft) și a scanărilor RPi Pico (folosind DBeaver sau `clickhouse-client`).
        - Raportarea detaliată și urmărirea riguroasă a bug-urilor identificate în Jira. Re-testarea bug-urilor după ce sunt marcate ca rezolvate.
      - **Coordonarea Documentației Tehnice:**
        - Colaborarea cu fiecare echipă pentru a se asigura că fișierele `SETUP_MODUL.md` sunt complete, corecte, actualizate și ușor de înțeles. Poate propune un template standard și un checklist de calitate pentru aceste documente.
        - Revizuirea generală a întregii documentații de proiect (acest README, diagrame, etc.) pentru consistență terminologică, claritate, corectitudine gramaticală și stilistică.
        - Asistarea activă la procesul de consolidare și redactare a Documentației Tehnice Finale în Sprint 4, asigurând un standard de calitate ridicat pentru livrabilul final.
      - **(Explorare "Din Fiecare Câte Puțin"):** Prin natura rolului său de QA și coordonator de documentație, Teodora va avea ocazia unică de a studia și înțelege la un nivel funcțional toate componentele și tehnologiile proiectului: React (din perspectiva utilizatorului și a testării), MuleSoft și Talend (prin înțelegerea fluxurilor pentru a le putea testa și documenta), ClickHouse (prin verificarea datelor), Docker/NGINX (prin înțelegerea modului de rulare a sistemului pentru testare) și MicroPython/RPi Pico (prin testarea funcționalității de scanare).

- **Ghetau Cristian Marian** (Parent Team: **Team_7**)
  - **Interes Declarat:** Networking.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Aspectele de Networking ale Modulului de Infrastructură Locală și Inter-Componente**.
    - **Tehnologii și Activități de Învățare Detaliate:**
      - Configurarea detaliată a rețelelor custom în Docker Compose (`devimarket-net`), asigurând izolarea și comunicarea corectă între containerele ClickHouse și NGINX.
      - Managementul și depanarea mapărilor de porturi între containere și host-ul VM, pentru a face serviciile accesibile atât local pe VM, cât și din rețeaua locală (pentru RPi Pico).
      - Depanarea problemelor de conectivitate între dispozitivul RPi Pico (care este în rețeaua WiFi locală) și API-ul MuleSoft (care rulează nativ pe VM-ul unui student din Team_1, necesitând ca IP-ul acelui VM să fie accesibil și portul MuleSoft să fie deschis/forwardat corect). Aceasta poate implica înțelegerea configurațiilor de rețea ale VM-ului (NAT, Bridge), a setărilor de firewall ale VM-ului (`ufw`) și, potențial, a setărilor de bază ale router-ului WiFi local.
      - Configurarea NGINX pentru a asculta pe interfețele de rețea corecte și pentru a gestiona request-urile venite de la utilizatori.
      - Înțelegerea și documentarea fluxului de date prin diferitele segmente de rețea: browser utilizator -> NGINX (Docker) -> (conceptual, apel JavaScript către) MuleSoft (nativ pe VM Team_1); RPi Pico (WiFi) -> MuleSoft (nativ pe VM Team_1); MuleSoft/Talend (nativ pe VM Team_1) -> ClickHouse (Docker).
      - Configurarea și testarea HTTPS (cu certificate self-signed) pe NGINX și înțelegerea implicațiilor pentru clienți (browser, RPi Pico).

- **Necoara Aida Florentina** (Parent Team: **Team_1**)
  - **Interes Declarat:** Automatizare.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul de Integrare și Procesare Date (MuleSoft Anypoint Platform & Talend Open Studio)**.
    - **Tehnologii și Activități de Învățare Detaliate:** Similar cu Coman Raluca și Cotan Petruta, va avea o contribuție majoră și aprofundată la designul, implementarea, testarea și documentarea API-urilor MuleSoft (fluxuri, DataWeave, conectori, logică business) și a job-urilor ETL Talend (migrare date, transformări `tMap`, încărcare). Poate avea un focus specific pe orchestrarea și automatizarea pașilor din cadrul fluxurilor MuleSoft (ex: utilizarea `Scheduler`, a componentelor de control al fluxului) și a job-urilor Talend (ex: secvențierea subjob-urilor, gestionarea contextelor pentru rulări diferite).

- **Pista Darius** (Parent Team: **Team_9**)
  - **Interes Declarat:** CAD + Microprocesoare.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul de Scanare Hardware (Raspberry Pi Pico W)**.
    - **Tehnologii și Activități de Învățare Detaliate:** Similar cu Cadar Andreea, se va concentra pe programarea aprofundată în MicroPython pe RPi Pico W, pe înțelegerea interacțiunii cu hardware-ul (GPIO-uri, potențial senzori simpli dacă timpul permite o extindere minoră), pe provocarea interfațării cu scannerul USB și pe implementarea robustă a logicii de comunicare WiFi și HTTP/HTTPS (cu gestionarea certificatelor self-signed) către API-ul MuleSoft. Poate explora aspecte mai detaliate ale optimizării codului MicroPython pentru performanță și consum de resurse pe microcontroller sau metode alternative de interfațare hardware.

- **Proaspatu Nicolae Bogdan** (Parent Team: **Team_2**)
  - **Interes Declarat:** Limbaje de Programare + Web Dev + Web 3.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul Frontend Application (React)** și, implicit, consumul API-urilor.
    - **Tehnologii și Activități de Învățare Detaliate:** Dezvoltarea componentelor UI/UX în React, implementarea logicii de afișare dinamică a datelor și a interacțiunilor cu utilizatorul, consumul API-urilor RESTful expuse de MuleSoft (cu Axios/Fetch), stilizarea avansată cu Tailwind CSS. Va aplica intensiv cunoștințele de JavaScript/TypeScript (Web Development). Componenta Web 3 va fi concretizată prin implementarea funcționalității de conectare a portofelului MetaMask și gestionarea adresei utilizatorului.
    - **(Limbaje de Programare):** Va lucra intensiv cu JavaScript (ES6+) și, preferabil, TypeScript în contextul React, aprofundând concepte precum asincronicitatea, promisiunile, lucrul cu JSON și modulele ES6.

- **Tuca Dragos Andrei** (Parent Team: **Team_2**)
  - **Interes Declarat:** Limbaje de Programare + Web 3 + Web Dev.
  - **Mapare Specifică la Proiect:**
    - **Focus Principal:** **Modulul Frontend Application (React)** și, implicit, consumul API-urilor.
    - **Tehnologii și Activități de Învățare Detaliate:** Similar cu Proaspatu Nicolae Bogdan, se va concentra pe dezvoltarea Frontend-ului cu React, pe crearea unei experiențe utilizator fluide, pe consumul API-urilor MuleSoft și pe integrarea funcționalității MetaMask. Va avea ocazia să aplice și să aprofundeze conceptele de Web Development (HTML, CSS, JS/TS, React) și Web 3 (interacțiunea cu portofele crypto).
    - **(Limbaje de Programare):** Va lucra intensiv cu JavaScript (ES6+) și, preferabil, TypeScript în React, consolidându-și competențele în aceste limbaje.

**4.3. Focus Detaliat pe Modulele Tehnice și Distribuția Responsabilităților Specifice către Fiecare "Parent Team"**

Această secțiune reiterează și sintetizează responsabilitățile centrale la nivel de "Parent Team" pentru fiecare modul tehnic principal al proiectului "DeviMarket Zero", asigurând o imagine de ansamblu clară a contribuțiilor și a interdependențelor.

    **4.3.1. Detalierea Sarcinilor și Tehnologiilor Cheie pentru Team_1 (MuleSoft API Development, Talend ETL, Interacțiune Directă și Design Schemă ClickHouse)**
    *   **Membri:** Coman Raluca, Cotan Petruta, Necoara Aida Florentina.
    *   **Misiune Centrală:** Construirea și gestionarea întregului strat de API-uri al aplicației folosind MuleSoft, implementarea proceselor ETL batch cu Talend și definirea/interacțiunea directă cu baza de date ClickHouse pentru toate aceste fluxuri. Această echipă este, în esență, responsabilă pentru "creierul" și "sistemul circulator" al datelor din DeviMarket Zero.
    *   **Tehnologii de Stăpânit:** MuleSoft Anypoint Studio (RAML, APIkit, DataWeave, Conectori HTTP & Database), Talend Open Studio (Componente ETL, `tMap`, Conectori JDBC & REST), ClickHouse (SQL DDL & DML, design schemă), Concepte de Integrare API și ETL.
    *   **Livrabile Cheie:** API-uri MuleSoft funcționale și documentate (pentru Scanner, API Extern, Frontend), Job-uri Talend funcționale și documentate (pentru migrare DB "franceză", opțional consum API MuleSoft), Schema ClickHouse finalizată și populată.

    **4.3.2. Detalierea Sarcinilor și Tehnologiilor Cheie pentru Team_2 (Frontend React, Consum API-uri MuleSoft, Integrare MetaMask)**
    *   **Membri:** Tuca Dragos Andrei, Proaspatu Nicolae Bogdan.
    *   **Misiune Centrală:** Crearea unei interfețe utilizator (UI) moderne, intuitive și funcționale pentru marketplace, care consumă eficient datele expuse de API-urile MuleSoft și integrează funcționalitatea de conectare a portofelului MetaMask.
    *   **Tehnologii de Stăpânit:** React (Componente, Hook-uri, State Management de bază/intermediar, Routing), JavaScript (ES6+)/TypeScript, HTML5, CSS3, Tailwind CSS, Axios/Fetch, API-ul `window.ethereum` (MetaMask).
    *   **Livrabile Cheie:** Aplicație Frontend React funcțională (listare produse, detalii produs, conectare MetaMask), build static optimizat, documentație de setup și a componentelor.

    **4.3.3. Detalierea Sarcinilor și Tehnologiilor Cheie pentru Team_7 (Infrastructură Docker pentru ClickHouse și NGINX/Frontend, Networking Local, (Chesnoiu, Ghetau))**
    *   **Membri:** Chesnoiu Andrei Bogdan, Ghetau Cristian Marian. (Culesca Teodora Maria are rol de QA, descris la 4.3.5).
    *   **Misiune Centrală:** Asigurarea unei infrastructuri locale stabile, reproductibile și corect configurate pentru componentele containerizabile ale proiectului (ClickHouse, NGINX servind React), gestionarea aspectelor de networking necesare pentru comunicarea între toate componentele sistemului (containerizate și native).
    *   **Tehnologii de Stăpânit:** Docker Engine, Docker Compose, Dockerfile (sintaxă și optimizări, multi-stage builds), NGINX (configurare avansată pentru servire SPA și HTTPS self-signed), ClickHouse (setup inițial în Docker, scripturi de inițializare), Concepte de Networking (IP, porturi, DNS local, rețele Docker, firewall VM), Bash scripting (pentru automatizări minore).
    *   **Livrabile Cheie:** Fișier `docker-compose.yml` complet și funcțional, Dockerfile-uri optimizate, configurații NGINX, scripturi de inițializare ClickHouse, documentație detaliată a infrastructurii și a setup-ului de rețea.

    **4.3.4. Detalierea Sarcinilor și Tehnologiilor Cheie pentru Team_9 (Hardware Integration cu Raspberry Pi Pico W, Apelare API MuleSoft, MicroPython)**
    *   **Membri:** Cadar Andreea, Pista Darius.
    *   **Misiune Centrală:** Dezvoltarea și implementarea soluției hardware și software pentru sistemul de scanare a produselor, de la citirea codului de bare la trimiterea cu succes a datelor către API-ul dedicat expus de MuleSoft.
    *   **Tehnologii de Stăpânit:** Raspberry Pi Pico W (hardware și pini GPIO), MicroPython (sintaxă, module standard `network`, `urequests`, `time`, `machine`, `ujson`), interfațare cu periferice USB (scanner HID – provocarea principală), comunicare HTTP/HTTPS (cu gestionarea certificatelor self-signed în MicroPython), debugging pe sisteme embedded.
    *   **Livrabile Cheie:** Script MicroPython funcțional și bine documentat, demonstrație live a sistemului de scanare, documentație detaliată a setup-ului hardware și software.

    **4.3.5. Detalierea Rolului Transversal de QA și Coordonare Documentație (Culesca Teodora Maria, Team_7, cu implicarea tuturor)**
    *   **Membru:** Culesca Teodora Maria.
    *   **Misiune Centrală:** Asigurarea unui nivel înalt de calitate pentru MVP prin planificarea și execuția testelor funcționale și de integrare (API), precum și prin coordonarea și standardizarea eforturilor de documentare tehnică la nivelul întregului proiect.
    *   **Tehnologii și Competențe de Dezvoltat:** Postman (testare API avansată, scripting aserțiuni), Principii de QA și metodologii de testare, Jira (pentru bug tracking și management), Markdown (pentru documentație), abilități de comunicare și colaborare cu toate echipele.
    *   **Livrabile Cheie:** Plan de Testare, Colecții Postman cu teste automate pentru API-urile MuleSoft, Rapoarte de Bug-uri în Jira, contribuție majoră la Documentația Tehnică Finală (revizuire, consolidare, standardizare), fișier `SETUP_POSTMAN_QA.md`.

---

**5. PLANUL DETALIAT PE SPRINTURI ȘI OBIECTIVE SPECIFICE (Versiune 5.0 - Finală, MuleSoft Central)**

Acest capitol prezintă structura temporală a proiectului "DeviMarket Zero", împărțită în sprinturi distincte, fiecare cu o durată, un număr de ore alocate și obiective specifice. Pentru fiecare sprint, se vor detalia task-urile principale (la nivel de User Story sau Task Tehnic major) pentru fiecare echipă, menite să ghideze studenții în mod progresiv către realizarea MVP-ului. Claritatea obiectivelor și a livrabilelor pentru fiecare sprint este esențială pentru menținerea proiectului pe drumul cel bun și pentru maximizarea experienței de învățare.

**5.1. Sprint 1: Fundație și Setup Mediu Linux (Perioadă: ÎNCHEIAT – Recapitulare Scurtă a Realizărilor)**

- **Perioadă:** Conform planificării inițiale a programului de practică (finalizat la data de 19/05 – a se confirma anul exact, ex: 2025).
- **Obiective Principale Atinge (Recapitulare):**
  1.  **Instalare și Configurare VM Ubuntu:** Fiecare dintre cei 10 studenți a instalat și configurat cu succes o mașină virtuală (VM) cu sistemul de operare Ubuntu Linux (o versiune LTS stabilă, ex: 20.04 sau 22.04), asigurând un mediu de lucru standardizat și izolat.
  2.  **Familiarizare cu Linia de Comandă Linux:** Studenții s-au familiarizat cu interfața terminalului Bash și au exersat comenzile Linux fundamentale pentru navigarea în sistemul de fișiere (`cd`, `ls`, `pwd`), managementul fișierelor și directoarelor (`touch`, `mkdir`, `rm`, `rmdir`, `cp`, `mv`), vizualizarea conținutului fișierelor (`cat`, `less`, `head`, `tail`), editarea de bază a fișierelor text (`nano` sau `vim`), și înțelegerea conceptelor de permisiuni.
  3.  **Management Pachete și Software de Bază:** Studenții au învățat să utilizeze managerul de pachete `apt` pentru a actualiza sistemul (`sudo apt update`, `sudo apt upgrade`) și pentru a instala pachete software de bază (ex: `git`, un browser web, unelte de arhivare).
- **Deliverables Sprint 1 (Confirmate de Tutore):**
  - Fiecare student dispune de un VM Ubuntu funcțional, cu acces la internet și cu uneltele de bază instalate.
  - Fiecare student demonstrează competențe de bază în utilizarea liniei de comandă Linux.
  - Task-urile specifice acestui sprint, așa cum au fost ele definite în planificarea inițială (ex: cele din CSV-ul furnizat), au fost validate ca fiind completate de către Tutore (Petrut Constantin).
- **Importanța pentru Proiectul "DeviMarket Zero":** Acest sprint a fost esențial pentru a stabili o fundație tehnică comună și un mediu de lucru uniform pentru toți studenții, pregătindu-i pentru instalarea și configurarea software-ului mai complex necesar în sprinturile următoare.

**5.2. Sprint 2: Analiză Proiect, Setup Detaliat Medii de Dezvoltare Specifice, Primul "Hello World" Funcțional per Modul (Perioadă: 19/05/2025 - 30/05/2025, 8 ore de lucru efectiv și concentrat per student)**

Acest sprint de două săptămâni, cu o alocare de 8 ore de muncă efectivă per student, este **fundamental și critic** pentru demararea cu succes a proiectului "DeviMarket Zero". Obiectivul principal nu este dezvoltarea de funcționalități complexe ale marketplace-ului, ci asigurarea că fiecare student: 1. **Înțelege în Profunzime Proiectul:** Asimilează complet arhitectura, cerințele, tehnologiile și rolul său specific. 2. **Configurează Corect Mediul de Dezvoltare:** Instalează și configurează toate uneltele, IDE-urile, SDK-urile, driverele și bibliotecile necesare pentru modulul și tehnologiile la care va lucra. 3. **Validează Funcționalitatea Minimă ("Hello World"):** Implementează și rulează cu succes un exemplu minimal, un "Hello World" sau o operațiune de bază cu fiecare tehnologie principală alocată, pentru a demonstra că mediul este funcțional și pentru a avea o primă interacțiune practică. 4. **Documentează Setup-ul Inițial:** Creează un ghid detaliat (`SETUP_MODUL.md`) pentru procesul de instalare și configurare.

    **5.2.1. Obiectivele Generale ale Sprintului 2: Înțelegere Completă și Pregătire Tehnică Fundamentală pentru Fiecare Tehnologie**
    *   **Obiectiv A (Înțelegere și Aliniere):** Toți cei 10 studenți vor citi integral, vor analiza critic și vor înțelege în detaliu conținutul acestui document principal de proiect (`README.md` - Versiunea 5.0). Se va acorda o atenție specială capitolelor care descriu arhitectura generală, fluxurile de date, modulul specific la care este alocat fiecare și tehnologiile detaliate asociate. Orice neclaritate, ambiguitate sau întrebare va fi adresată Tutorelui în ședința de kick-off sau pe parcurs.
    *   **Obiectiv B (Setup Medii de Dezvoltare Specifice):** Fiecare student, pe mașina sa virtuală Ubuntu, va instala, configura și testa funcționalitatea tuturor aplicațiilor software, IDE-urilor, SDK-urilor (ex: JDK pentru MuleSoft/Talend), driverelor (ex: JDBC pentru ClickHouse), bibliotecilor și extensiilor necesare pentru a putea începe dezvoltarea efectivă pe tehnologiile specifice modulului său (React/Vite & Node.js, MuleSoft Anypoint Studio, Talend Open Studio, Docker Engine & Docker Compose, NGINX, ClickHouse, MicroPython & Thonny IDE, Postman).
    *   **Obiectiv C (Validare Funcțională Minimă - "Hello World" Specific per Tehnologie):** Fiecare student va implementa și rula cu succes un exemplu minimal, un "Hello World" relevant sau o operațiune de bază, pentru fiecare tehnologie principală la care va lucra. Acest exercițiu are rolul de a valida că instalarea și configurarea mediului sunt corecte, de a depista eventuale probleme de incompatibilitate și de a oferi studentului o primă victorie și o interacțiune practică inițială cu unealta/platforma respectivă.
    *   **Obiectiv D (Documentare Riguroasă a Procesului de Setup Inițial):** Fiecare echipă (sau studentul responsabil de un sub-modul, dacă este cazul) va crea un fișier Markdown dedicat (ex: `SETUP_REACT_FRONTEND.md`, `SETUP_MULESOFT_STUDIO.md`, etc.) care documentează extrem de detaliat, pas cu pas, întregul proces de instalare și configurare a mediului de dezvoltare, incluzând versiunile exacte ale software-ului utilizat, comenzile rulate, capturi de ecran relevante, problemele comune întâmpinate și soluțiile identificate.

    **5.2.2. Task-uri Comune Tuturor Studenților în Sprint 2 (Primele ~1-2 ore din cele 8 alocate)**
    *Aceste task-uri sunt obligatorii și trebuie finalizate la începutul sprintului pentru a asigura o bază comună de pornire și acces la resurse.*
    1.  **[DMZ-S2-ALL-TASK-001] Studiu Individual Aprofundat al Documentului de Proiect (README.md v5.0)**
        *   **Descriere Detaliată:** Fiecare student va dedica un interval de timp suficient (minim 1-1.5 ore neîntrerupte) pentru a citi cu maximă atenție, a analiza critic și a înțelege în profunzime conținutul integral al acestui document (`README.md` - Versiunea 5.0), de la Introducere până la Anexe. Se va acorda o atenție specială secțiunilor care descriu: (1) Cerințele Clientului, (2) Arhitectura Generală a Sistemului, (3) Descrierea detaliată a Componentei Tehnologice la care va lucra (și a celor cu care interacționează), (4) Fluxurile de Date principale, (5) Rolul și Responsabilitățile propriei Echipe și (6) Obiectivele și Task-urile specifice pentru Sprint 2.
        *   **Acțiune Necesară:** Pe parcursul citirii, fiecare student își va nota orice nelămurire, întrebare de clarificare, potențială problemă identificată sau sugestie de îmbunătățire.
        *   **Criterii de Acceptare / Deliverable:**
            *   Confirmarea verbală (sau printr-un mesaj pe canalul de comunicare) către Tutore că documentul a fost citit integral și că există o înțelegere generală a proiectului.
            *   O listă personală, scrisă (digital sau pe hârtie), conținând minim 2-3 întrebări de clarificare pertinente (sau mai multe, dacă este cazul), pregătită pentru a fi adresată în ședința de kick-off a Sprintului 2. Dacă totul este perfect clar, se va confirma acest lucru.
    2.  **[DMZ-S2-ALL-TASK-002] Participare Activă la Ședința de Kick-off a Sprintului 2 și Sesiune Extinsă de Q&A cu Tutorele**
        *   **Descriere Detaliată:** Toți studenții vor participa la ședința de kick-off a Sprintului 2 (online sau fizic, conform anunțului Tutorelui). În cadrul acestei ședințe, Tutorele (Petrut Constantin) va:
            *   Prezenta pe scurt viziunea generală a proiectului "DeviMarket Zero" și importanța acestui sprint.
            *   Reitera obiectivele principale ale Sprintului 2 (Înțelegere, Setup, "Hello World", Documentare Setup).
            *   Evidenția principalele provocări tehnice și de învățare.
            *   Deschide o sesiune extinsă de Întrebări și Răspunsuri (Q&A) în care studenții sunt încurajați să adreseze toate întrebările pregătite la task-ul anterior.
            *   Valida alocarea finală a studenților pe "Parent Teams" și pe modulele tehnice principale.
            *   Stabili așteptările pentru comunicare și colaborare în cadrul sprintului.
        *   **Criterii de Acceptare / Deliverable:**
            *   Participare activă și atentă la întreaga ședință.
            *   Toate nelămuririle majore și întrebările critice legate de proiect și de task-urile Sprintului 2 au fost adresate și, pe cât posibil, clarificate.
            *   Confirmarea de către Tutore că există o înțelegere comună și aliniată a direcției pentru Sprint 2.
    3.  **[DMZ-S2-ALL-TASK-003] Verificare Acces Jira și Solicitare Acces la Repository-ul GitHub al Proiectului**
        *   **Descriere Detaliată:**
            *   **Partea A (Verificare Acces Jira):** Fiecare student verifică dacă are acces la instanța Jira a Devidevs.com și la proiectul specific "DeviMarket Zero (DMZ)". Dacă întâmpină probleme, le semnalează imediat Tutorelui. (Acest pas este o verificare, deoarece accesul Jira ar trebui să fie deja acordat).
            *   **Partea B (Solicitare Acces GitHub):** Fiecare student va trimite un email către Tutore (Petrut Constantin) solicitând acces de colaborator la repository-ul GitHub principal al proiectului (`DeviMarketZero-Practice-Project`). Email-ul trebuie să respecte **exact** template-ul furnizat în **Anexa 8.2** a acestui document și să includă obligatoriu **username-ul GitHub corect** al studentului.
        *   **Acțiune Tutore (Post-Recepție Email):** Petrut Constantin va acorda acces la GitHub fiecărui student în cel mai scurt timp posibil și va anunța echipa când accesul a fost propagat.
        *   **Criterii de Acceptare / Deliverable:**
            *   Fiecare student confirmă că are acces la proiectul Jira.
            *   Fiecare student a trimis emailul de solicitare acces GitHub conform template-ului.
            *   (Ulterior, după acțiunea Tutorelui) Fiecare student confirmă că are acces la repository-ul GitHub și a reușit să cloneze local ultima versiune a acestuia (care va conține acest README.md și structura de foldere inițială).

    **5.2.3. Task-uri Specifice Detaliate și Livrabile pentru Team_1 (Coman Raluca, Cotan Petruta, Necoara Aida Florentina) în Sprint 2 (Restul de ~6-7 ore alocate)**
    *Team_1 are cele mai solicitante setup-uri în acest sprint, necesitând instalarea și configurarea a două platforme enterprise (MuleSoft și Talend) și a driverelor pentru ClickHouse. Este esențial ca acești studenți să colaboreze strâns, să urmeze cu atenție documentația și să aloce timpul eficient. Se pot împărți responsabilitățile pentru instalarea fiecărei platforme, dar fiecare membru trebuie să înțeleagă întregul proces de setup pentru ambele.*

    1.  **[DMZ-S2-T1-TASK-001] Instalare și Configurare Java Development Kit (JDK) Compatibil**
        *   **Descriere Detaliată:** Atât MuleSoft Anypoint Studio, cât și Talend Open Studio sunt aplicații Java și necesită o versiune specifică de JDK (Java Development Kit) pentru a funcționa corect. Team_1 va:
            1.  Verifica documentația oficială a versiunilor de Anypoint Studio și Talend Studio pe care le vor descărca pentru a identifica versiunea exactă de JDK recomandată/suportată (ex: OpenJDK 11, OpenJDK 17). Este crucial să se folosească o versiune compatibilă.
            2.  Descărca și instala pe VM-ul Ubuntu versiunea corectă de OpenJDK (preferabil din repository-urile `apt` ale Ubuntu, dacă este disponibilă, ex: `sudo apt install openjdk-11-jdk`).
            3.  Configura corect variabila de mediu `JAVA_HOME` pentru a pointa către directorul de instalare al JDK-ului și va adăuga `$JAVA_HOME/bin` la variabila `PATH`. (Pașii detaliați vor fi în `SETUP_JDK.md` creat de ei).
            4.  Verifica instalarea cu `java -version` și `javac -version`.
        *   **Resurse:** Documentația oficială MuleSoft și Talend pentru cerințele de JDK. Ghiduri de instalare OpenJDK pe Ubuntu.
        *   **Criterii de Acceptare / Deliverable:** JDK compatibil instalat și configurat corect pe VM-urile membrilor Team_1. Comanda `java -version` returnează versiunea așteptată. Un fișier `SETUP_JDK_FOR_MULE_TALEND.md` creat și versionat, documentând procesul.

    2.  **[DMZ-S2-T1-TASK-002] Instalare și Configurare Inițială MuleSoft Anypoint Studio**
        *   **Descriere Detaliată:**
            1.  Descărcarea arhivei cu cea mai recentă versiune gratuită a MuleSoft Anypoint Studio de pe site-ul oficial MuleSoft.
            2.  Dezarhivarea și instalarea Anypoint Studio într-un director dedicat pe VM-ul Ubuntu (ex: `~/Applications/AnypointStudio`).
            3.  Lansarea Anypoint Studio și crearea/selectarea unui workspace local (ex: `~/MuleWorkspace`).
            4.  Familiarizarea inițială cu interfața grafică a Anypoint Studio: Perspective (Design, Debug), Package Explorer, Mule Palette (cu conectorii principali), Canvas pentru designul fluxurilor, Console View, Problems View.
            5.  Verificarea că Mule Runtime-ul embedat este funcțional și că nu există erori majore la pornirea Studio-ului.
        *   **Resurse:** Documentația oficială MuleSoft pentru instalarea Anypoint Studio pe Linux.
        *   **Criterii de Acceptare / Deliverable:** Anypoint Studio este instalat, pornește fără erori și este funcțional pe VM-urile membrilor Team_1. Un screenshot al interfeței Anypoint Studio deschise cu un workspace nou.

    3.  **[DMZ-S2-T1-TASK-003] Creare și Rulare Aplicație "Hello World" API în MuleSoft Anypoint Studio**
        *   **Descriere Detaliată:**
            1.  În Anypoint Studio, crearea unui nou Proiect Mule (Mule Project).
            2.  Crearea unui flux simplu (ex: `hello-devi-market-flow`) care conține:
                *   Un component `HTTP Listener` configurat să asculte pe calea `/api/hello` (metoda GET) pe portul HTTP default al MuleSoft (ex: 8081, adică `http://localhost:8081/api/hello`).
                *   O componentă `Set Payload` (sau `Transform Message`) care setează un mesaj JSON simplu ca răspuns (ex: `output application/json --- { "message": "Salut de la API-ul MuleSoft pentru DeviMarket Zero!" }`).
                *   O componentă `Logger` care afișează un mesaj în consola Anypoint Studio la primirea unui request (ex: "Request primit la /api/hello").
            3.  Rularea aplicației Mule local din Anypoint Studio (click dreapta pe proiect -> `Run As > Mule Application`).
            4.  Verificarea consolei Anypoint Studio pentru mesajul "DEPLOYED" și pentru log-ul de la componenta Logger.
            5.  Testarea endpoint-ului dintr-un browser web sau din Postman, accesând `http://localhost:8081/api/hello`.
        *   **Criterii de Acceptare / Deliverable:** Aplicația "Hello World" Mule rulează cu succes pe runtime-ul local. Endpoint-ul `/api/hello` returnează mesajul JSON așteptat și status HTTP 200 OK. Captură de ecran a răspunsului în browser/Postman și a log-ului relevant din consola Anypoint Studio. Proiectul Mule exportat ca arhivă (`.jar`) și adăugat într-un folder specific `team1_mulesoft_talend/mulesoft_sprint2_helloworld/` pe GitHub.

    4.  **[DMZ-S2-T1-TASK-004] Instalare și Configurare Inițială Talend Open Studio for Data Integration**
        *   **Descriere Detaliată:**
            1.  Descărcarea arhivei/installer-ului cu cea mai recentă versiune gratuită a Talend Open Studio for Data Integration (TOS for DI) de pe site-ul oficial Talend.
            2.  Dezarhivarea și instalarea Talend Open Studio într-un director dedicat pe VM-ul Ubuntu (ex: `~/Applications/TalendOpenStudio`).
            3.  Lansarea Talend Open Studio, acceptarea licenței, crearea unui proiect local nou (ex: `DEVI_MARKET_ZERO_ETL`) și selectarea unui workspace (ex: `~/TalendWorkspace`).
            4.  Familiarizarea inițială cu interfața grafică a Talend Studio: Perspective (Integration), Repository (unde se stochează Job Designs, Metadata, Contexts), Job Designer (canvas-ul vizual), Palette (cu componentele ETL), Configuration Tabs (pentru configurarea componentelor), Run Console.
            5.  (Important) Adăugarea driverului JDBC pentru ClickHouse în Talend:
                *   Descărcarea fișierului JAR al driverului JDBC pentru ClickHouse (ex: de pe Maven Central sau GitHub-ul oficial ClickHouse JDBC).
                *   În Talend Studio, navigarea la `Window > Preferences > Talend > Java > User classpath libraries` și adăugarea JAR-ului descărcat. Sau, copierea JAR-ului în directorul `lib/java` al instalării Talend și restartarea Studio-ului. Verificarea în `Modules view` dacă driverul este recunoscut.
        *   **Resurse:** Documentația oficială Talend pentru instalarea TOS for DI pe Linux și pentru adăugarea de drivere JDBC custom.
        *   **Criterii de Acceptare / Deliverable:** Talend Open Studio este instalat, pornește fără erori, proiectul este creat și este funcțional pe VM-urile membrilor Team_1. Driverul JDBC pentru ClickHouse este instalat corect și vizibil în `Modules view`. Un screenshot al interfeței Talend Studio cu proiectul deschis și `Modules view` arătând driverul.

    5.  **[DMZ-S2-T1-TASK-005] Creare și Rulare Job "Hello World" în Talend Open Studio (cu Conectare Simplă la ClickHouse)**
        *   **Descriere Detaliată:**
            1.  În Talend Open Studio, crearea unui nou Job Talend (ex: `Job_Sprint2_HelloWorld_ClickHouse`).
            2.  Crearea unei conexiuni metadata la ClickHouse în Repository:
                *   Click dreapta pe "Db Connections" > "Create connection".
                *   Selectați DB Type "JDBC". Completați JDBC URL (ex: `jdbc:clickhouse://<IP_VM_ClickHouse_Docker_Host>:<Port_ClickHouse_JDBC>/devimarket_db`), Driver JAR (selectați JAR-ul ClickHouse), Class Name (`com.clickhouse.jdbc.ClickHouseDriver`), User/Password (cele definite de Team_7 pentru ClickHouse). Testați conexiunea.
            3.  În Job Designer, adăugați următoarele componente:
                *   O componentă `tRowGenerator` pentru a genera 1-2 rânduri de date simple (ex: coloane `id_test (Integer)`, `mesaj_test (String)`).
                *   O componentă `tMap` care preia datele de la `tRowGenerator`. În `tMap`, se poate adăuga o coloană nouă, `timestamp_procesare (Date)`, setată la `TalendDate.getCurrentDate()`.
                *   O componentă `tLogRow` pentru a afișa în consolă datele transformate (cele 3 coloane).
                *   **(Bonus "Hello ClickHouse")** O componentă `tJDBCOutput` (sau `tClickhouseOutput` dacă e stabil) configurată să folosească conexiunea ClickHouse definită în metadata. Se va crea un tabel de test simplu în ClickHouse (ex: `devimarket_db.sprint2_talend_test` cu coloane `id_test INT, mesaj_test VARCHAR, ts_proc DATETIME`) folosind `clickhouse-client` sau DBeaver (acest pas poate fi făcut de Team_1 sau Team_7). Componenta Talend va fi configurată să facă `INSERT` în acest tabel de test, mapând cele 3 coloane din flux.
            4.  Conectați componentele în ordinea logică. Rulați Job-ul din Talend Studio.
        *   **Criterii de Acceptare / Deliverable:**
            *   Job-ul "Hello World" Talend rulează cu succes și afișează datele așteptate în consola Talend.
            *   (Pentru Bonus) Datele generate de job sunt inserate corect în tabelul de test `devimarket_db.sprint2_talend_test` din ClickHouse (verificat cu DBeaver/`clickhouse-client`).
            *   Captură de ecran a design-ului job-ului în Talend, a output-ului din consolă și (pentru bonus) a datelor din tabelul ClickHouse. Job-ul Talend exportat și adăugat într-un folder specific `team1_mulesoft_talend/talend_sprint2_helloworld/` pe GitHub.

    6.  **[DMZ-S2-T1-TASK-006] Documentare Detaliată Setup Inițial MuleSoft și Talend (Inclusiv JDK și Driver JDBC ClickHouse)**
        *   **Descriere Detaliată:** Crearea a două fișiere Markdown separate și extrem de detaliate în folderul `team1_mulesoft_talend/docs/` (sau similar) pe GitHub:
            *   `SETUP_MULESOFT_ANYPOINT_STUDIO_SPRINT2.md`: Va documenta, pas cu pas, procesul de instalare și configurare a JDK-ului compatibil, a Anypoint Studio (versiunea exactă, link download, pași de instalare/dezarhivare, creare workspace), orice variabile de mediu setate, probleme comune întâmpinate și soluțiile lor, și pașii exacți pentru a importa și rula exemplul "Hello World" API Mule creat.
            *   `SETUP_TALEND_OPEN_STUDIO_SPRINT2.md`: Similar, va documenta procesul pentru JDK (dacă e diferit sau necesită atenție specială pentru Talend), Talend Open Studio (versiune, link, instalare, creare proiect/workspace), instalarea și configurarea driverului JDBC pentru ClickHouse în Talend, probleme comune și soluții, și pașii exacți pentru a importa și rula exemplul "Hello World" Job Talend (inclusiv crearea tabelului de test în ClickHouse).
        *   **Criterii de Acceptare / Deliverable:** Ambele fișiere Markdown sunt completate, sunt extrem de detaliate (gândite pentru cineva care o ia de la zero absolut), includ capturi de ecran relevante și sunt commit-uite pe GitHub. Calitatea acestor documente este crucială pentru Sprint 3.

    **5.2.4. Task-uri Specifice Detaliate și Livrabile pentru Team_2 (Tuca Dragos Andrei, Proaspatu Nicolae Bogdan) în Sprint 2 (Restul de ~6-7 ore alocate)**
    *Team_2 se va concentra pe punerea la punct a mediului de dezvoltare Frontend cu React, Vite și Tailwind CSS, și pe crearea unei prime componente funcționale.*

    1.  **[DMZ-S2-T2-TASK-001] Instalare și Configurare Profesională Mediu de Dezvoltare Frontend (Node.js, Vite, VS Code Extensii)**
        *   **Descriere Detaliată:**
            *   Instalarea Node.js (versiune LTS recomandată, ex: v18.x sau v20.x) și a managerului de pachete `npm` (care vine cu Node.js) sau, opțional, `yarn` (dacă echipa preferă și este consecventă). Se va verifica instalarea corectă cu `node -v` și `npm -v` (sau `yarn -v`).
            *   (Opțional, dar poate fi util) Instalarea globală a utilitarului `create-vite` (dacă nu este deja inclus în versiunile noi `npm`): `npm install -g create-vite`.
            *   Configurarea editorului VS Code cu extensiile esențiale pentru dezvoltare React și web modern:
                *   `dbaeumer.vscode-eslint`: Pentru integrarea ESLint în editor (identificare erori și probleme de stil în timp real).
                *   `esbenp.prettier-vscode`: Pentru formatarea automată a codului (JavaScript, TypeScript, JSX, CSS, JSON, Markdown) la salvare, pe baza regulilor Prettier.
                *   `bradlc.vscode-tailwindcss`: Pentru IntelliSense (autocompletare clase, linting) pentru Tailwind CSS în fișierele JSX/TSX și CSS.
                *   `ms-vscode.vscode-typescript-next` (dacă se folosește TypeScript): Pentru suport îmbunătățit TypeScript.
                *   (Opțional) `React Developer Tools` (extensie pentru Chrome/Firefox, nu pentru VS Code, dar esențială pentru debugging React în browser – studenții o vor instala în browserele lor).
        *   **Criterii de Acceptare / Deliverable:** Mediu Node.js și npm/yarn funcțional pe VM-urile membrilor Team_2. VS Code configurat cu extensiile menționate și funcția "Format On Save" activată pentru Prettier.

    2.  **[DMZ-S2-T2-TASK-002] Creare Proiect React "DeviMarket Frontend" cu Vite, Integrare și Testare Inițială Tailwind CSS**
        *   **Descriere Detaliată:**
            1.  Crearea unui nou proiect React folosind Vite. Se recomandă TypeScript pentru robustețe: `npm create vite@latest devi-market-frontend -- --template react-ts` (Dacă se preferă JavaScript pur: `--template react`).
            2.  Navigarea în directorul nou creat al proiectului: `cd devi-market-frontend`.
            3.  Instalarea tuturor dependențelor inițiale ale proiectului: `npm install` (sau `yarn install`).
            4.  **Integrarea Tailwind CSS:** Urmarea cu atenție a ghidului oficial Tailwind CSS pentru integrarea cu Vite:
                *   Instalarea dependențelor Tailwind: `npm install -D tailwindcss postcss autoprefixer` (sau `yarn add -D ...`).
                *   Generarea fișierelor de configurare Tailwind și PostCSS: `npx tailwindcss init -p`.
                *   Configurarea căilor către fișierele sursă în `tailwind.config.js` (în secțiunea `content`), ex: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`.
                *   Adăugarea directivelor Tailwind în fișierul CSS principal (ex: `src/index.css`): `@tailwind base; @tailwind components; @tailwind utilities;`.
            5.  **Testarea Inițială Tailwind CSS:** Modificarea componentei principale `App.jsx` (sau `App.tsx`) pentru a include:
                *   Un `div` container principal cu o clasă Tailwind pentru padding și centrare (ex: `p-8 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md`).
                *   Un titlu `<h1>` (ex: "Salut de la DeviMarket Frontend!") stilizat cu clase Tailwind pentru dimensiune, greutate font și culoare (ex: `text-3xl font-bold text-indigo-600 text-center mb-4`).
                *   Un paragraf `<p>` cu un text de probă, stilizat cu o clasă Tailwind pentru culoare text și spațiere (ex: `text-slate-700 text-center`).
                *   Un buton `<button>` simplu (ex: "Click Me!") stilizat cu clase Tailwind pentru aspect (background, text color, padding, rounded corners, hover effect).
            6.  Rularea serverului de dezvoltare Vite: `npm run dev`.
            7.  Verificarea în browser (de obicei `http://localhost:5173` sau un port similar afișat de Vite) că pagina se încarcă, titlul, paragraful și butonul sunt afișate și stilurile Tailwind sunt aplicate corect.
        *   **Criterii de Acceptare / Deliverable:**
            *   Proiectul React/Vite este creat și rulează local fără erori.
            *   Tailwind CSS este integrat corect și stilurile de test sunt vizibile în browser.
            *   Structura inițială a proiectului (inclusiv fișierele de configurare Tailwind/PostCSS) este commit-uită pe GitHub într-un folder dedicat `team2_react_frontend/`.
            *   O captură de ecran a paginii "Hello World" stilizate în browser.

    3.  **[DMZ-S2-T2-TASK-003] Documentare Detaliată Setup Inițial React, Vite și Tailwind CSS**
        *   **Descriere Detaliată:** Crearea fișierului `SETUP_REACT_FRONTEND_SPRINT2.md` în folderul `team2_react_frontend/docs/` pe GitHub. Acest document va fi un ghid complet și va include:
            *   Versiunile exacte Node.js și npm/yarn utilizate.
            *   Pașii detaliați pentru crearea proiectului React cu Vite (comanda exactă).
            *   Pașii exacți și completi (cu conținutul fișierelor de configurare `tailwind.config.js`, `postcss.config.js` și `index.css`) pentru integrarea Tailwind CSS într-un proiect Vite.
            *   Lista extensiilor VS Code recomandate și configurarea "Format On Save" cu Prettier.
            *   Comanda pentru a porni serverul de dezvoltare Vite.
            *   Orice probleme specifice întâmpinate în timpul setup-ului și soluțiile detaliate care au funcționat.
            *   Un exemplu minimal al componentei `App.jsx`/`App.tsx` folosit pentru a testa Tailwind.
        *   **Criterii de Acceptare / Deliverable:** Fișierul Markdown `SETUP_REACT_FRONTEND_SPRINT2.md` este complet, extrem de detaliat, ușor de urmărit de către cineva care configurează un proiect similar de la zero, și commit-uit pe GitHub.

    **5.2.5. Task-uri Specifice Detaliate și Livrabile pentru Team_7 (Chesnoiu Andrei Bogdan, Ghetau Cristian Marian) în Sprint 2 (Restul de ~6-7 ore alocate)**
    *Team_7 (fără Culesca T.M. care are task-uri QA) se va concentra pe punerea la punct a infrastructurii Docker pentru ClickHouse și NGINX (într-o formă inițială).*

    1.  **[DMZ-S2-T7-TASK-001] Instalare și Configurare Profesională Docker Engine și Docker Compose**
        *   **Descriere Detaliată:**
            *   Instalarea Docker Engine și a Docker CLI pe VM-ul Ubuntu, urmând cu strictețe instrucțiunile din documentația oficială Docker pentru Ubuntu (repository-ul Docker, nu cel default Ubuntu, pentru a avea ultima versiune stabilă).
            *   Adăugarea utilizatorului curent (cel cu care se lucrează pe VM) la grupul `docker` pentru a permite rularea comenzilor `docker` fără a necesita `sudo` în permanență. (Necesită delogare/relogare sau `newgrp docker` pentru a aplica).
            *   Instalarea Docker Compose v2 (care este acum un plugin Docker CLI, ex: `docker compose ...`, și se instalează de obicei împreună cu Docker Desktop sau prin `apt` dacă se adaugă repository-ul Docker). Se va verifica dacă este necesară o instalare separată a plugin-ului compose.
            *   Verificarea riguroasă a instalărilor prin rularea comenzilor: `docker --version`, `docker info` (pentru a vedea detalii despre instalarea Docker), `docker compose version` (sau `docker-compose --version` dacă se folosește v1).
        *   **Criterii de Acceptare / Deliverable:** Docker Engine și Docker Compose sunt instalate corect, sunt funcționale și pot fi utilizate de către studenții din Team_7 fără `sudo` (după configurarea grupului). Un screenshot care arată output-ul pozitiv al comenzilor `docker info` și `docker compose version`.

    2.  **[DMZ-S2-T7-TASK-002] Creare Configurație Docker Compose și Rulare Container "Hello ClickHouse" (cu Persistență de Bază)**
        *   **Descriere Detaliată:**
            1.  Crearea unui director de lucru dedicat pe VM (ex: `~/DeviMarketZero/infrastructure/sprint2_clickhouse_setup`).
            2.  În acest director, crearea unui fișier `docker-compose.yml` minimal care definește un singur serviciu, numit `clickhouse-server`:
                *   `image: clickhouse/clickhouse-server:latest` (sau un tag de versiune specific, ex: `23.8-alpine`).
                *   `container_name: devimarket_s2_clickhouse` (pentru a fi ușor de identificat).
                *   `ports:` Maparea porturilor standard ClickHouse către host-ul VM:
                    *   `"8123:8123"` (pentru interfața HTTP)
                    *   `"9000:9000"` (pentru clientul TCP nativ)
                *   `volumes:` Definirea unui volum Docker **numit** (ex: `sprint2_clickhouse_data`) pentru a asigura persistența datelor din `/var/lib/clickhouse/` al containerului. Adăugarea declarației `volumes: sprint2_clickhouse_data:` la finalul fișierului `docker-compose.yml`.
                *   `environment:` (Opțional pentru acest Hello World, dar bun de testat) Setarea variabilelor de mediu pentru utilizatorul și parola default, dacă nu se folosesc scripturi de inițializare mai complexe în acest sprint:
                    *   `CLICKHOUSE_USER: user_sprint2`
                    *   `CLICKHOUSE_PASSWORD: pass_sprint2`
                    *   `CLICKHOUSE_DB: sprint2_test_db` (creează automat această bază de date la pornire).
                *   `networks:` (Opțional pentru un singur serviciu, dar bun de adăugat pentru consistență viitoare) Conectarea la o rețea custom `devimarket-sprint2-net` (care va fi declarată la finalul fișierului).
            3.  Pornirea containerului în detached mode: `docker compose up -d`.
            4.  Verificarea statusului containerului: `docker compose ps`. Ar trebui să arate containerul `devimarket_s2_clickhouse` ca fiind "Up" și porturile mapate.
            5.  Testarea conexiunii la interfața HTTP a ClickHouse din browserul VM-ului, accesând `http://localhost:8123`. Ar trebui să returneze mesajul "Ok." (sau similar, în funcție de versiunea ClickHouse).
            6.  (Bonus) Testarea conexiunii cu `clickhouse-client` din interiorul containerului:
                `docker compose exec clickhouse-server clickhouse-client -u user_sprint2 --password pass_sprint2`
                Apoi, în client: `SHOW DATABASES;` (ar trebui să apară `sprint2_test_db`). `USE sprint2_test_db; CREATE TABLE test_table (id UInt64, message String) ENGINE = MergeTree() ORDER BY id; INSERT INTO test_table VALUES (1, 'Hello ClickHouse from Docker!'); SELECT * FROM test_table;`
            7.  Oprirea containerului: `docker compose down`. Repornirea lui: `docker compose up -d`. Re-verificarea datelor din `test_table` pentru a confirma persistența prin volum.
        *   **Criterii de Acceptare / Deliverable:**
            *   Containerul ClickHouse pornește cu succes folosind `docker-compose`.
            *   Conexiunea la interfața HTTP (`localhost:8123`) funcționează.
            *   Datele de test simple inserate în ClickHouse persistă după oprirea și repornirea containerului.
            *   Fișierul `docker-compose.yml` este complet și funcțional, commit-uit într-un folder specific `team7_infrastructure/sprint2_clickhouse_setup/` pe GitHub.
            *   Capturi de ecran demonstrând funcționarea (răspunsul browserului, output-ul `clickhouse-client` cu datele persistente).

    3.  **[DMZ-S2-T7-TASK-003] Creare Configurație Docker Compose și Rulare Container "Hello NGINX" (Servind un Fișier HTML Simplu)**
        *   **Descriere Detaliată:**
            1.  Crearea unui director de lucru dedicat pe VM (ex: `~/DeviMarketZero/infrastructure/sprint2_nginx_setup`).
            2.  În acest director, crearea unui subdirector `html_public/` și, în interiorul acestuia, a unui fișier `index.html` cu un conținut simplu, ex:
                `<!DOCTYPE html><html><head><title>Salut NGINX!</title></head><body><h1>Salut de la NGINX rulat în Docker pentru DeviMarket Zero!</h1><p>Sprint 2 Test.</p></body></html>`
            3.  În directorul `sprint2_nginx_setup`, crearea unui fișier `docker-compose.yml` (poate fi separat de cel pentru ClickHouse pentru acest "Hello World", sau se pot adăuga ambele servicii în același fișier, ceea ce ar fi mai bine pentru a exersa un `docker-compose.yml` multi-serviciu):
                *   Definirea unui serviciu numit `nginx-server-s2`:
                    *   `image: nginx:stable-alpine`
                    *   `container_name: devimarket_s2_nginx`
                    *   `ports:` Maparea portului 80 al containerului la un port liber pe host-ul VM (ex: `8088:80`, pentru a nu intra în conflict cu alte servicii web care ar putea rula pe portul 80).
                    *   `volumes:` Montarea (bind mount) a directorului local `html_public/` în directorul standard al NGINX pentru conținut web (`/usr/share/nginx/html:ro` – `:ro` pentru read-only, deoarece NGINX doar servește aceste fișiere).
                    *   `networks:` (Opțional) Conectarea la aceeași rețea `devimarket-sprint2-net`.
            4.  Pornirea containerului NGINX: `docker compose up -d`.
            5.  Verificarea statusului: `docker compose ps`.
            6.  Testarea în browserul VM-ului, accesând `http://localhost:8088` (sau portul ales). Pagina HTML creată ar trebui să fie afișată corect.
        *   **Criterii de Acceptare / Deliverable:**
            *   Containerul NGINX pornește cu succes folosind `docker-compose`.
            *   Pagina HTML simplă este servită corect de NGINX și vizibilă în browser.
            *   Fișierul `docker-compose.yml` și directorul `html_public/` sunt commit-uite într-un folder specific `team7_infrastructure/sprint2_nginx_setup/` pe GitHub.
            *   Captură de ecran a paginii HTML afișate în browser.

    4.  **[DMZ-S2-T7-TASK-004] Documentare Detaliată Setup Inițial Docker, Docker Compose, ClickHouse (Docker) și NGINX (Docker)**
        *   **Descriere Detaliată:** Crearea unui singur fișier Markdown consolidat, `SETUP_INFRASTRUCTURE_SPRINT2.md`, în folderul `team7_infrastructure/docs/` pe GitHub. Acest document va fi un ghid complet pentru oricine dorește să reproducă setup-ul și va include:
            *   Pașii detaliați pentru instalarea Docker Engine și Docker Compose pe Ubuntu (cu comenzi și verificări).
            *   Conținutul complet și explicat al fișierului `docker-compose.yml` care include atât serviciul ClickHouse, cât și serviciul NGINX (Hello World).
            *   Structura și conținutul fișierului `index.html` simplu pentru NGINX.
            *   Comenzile exacte pentru a porni, opri, verifica statusul și log-urile pentru ambele servicii folosind `docker-compose`.
            *   Pașii detaliați pentru a testa funcționarea fiecărui serviciu (accesarea `localhost:8123` pentru ClickHouse, `localhost:8088` pentru NGINX, și (bonus) conectarea la ClickHouse cu `clickhouse-client` din container și testarea persistenței).
            *   Orice probleme comune întâmpinate (ex: porturi ocupate, probleme de permisiuni la volume) și soluțiile lor specifice.
            *   Versiunile Docker, Docker Compose, ClickHouse (imagine) și NGINX (imagine) utilizate.
        *   **Criterii de Acceptare / Deliverable:** Fișierul Markdown `SETUP_INFRASTRUCTURE_SPRINT2.md` este complet, extrem de detaliat, ușor de urmărit, include toate configurațiile și comenzile, și este commit-uit pe GitHub.

    **5.2.6. Task-uri Specifice Detaliate și Livrabile pentru Team_9 (Cadar Andreea, Pista Darius) în Sprint 2 (Restul de ~6-7 ore alocate)**
    *Team_9 se va concentra pe punerea la punct a mediului de dezvoltare pentru RPi Pico W și pe realizarea unei prime comunicări de rețea de bază.*

    1.  **[DMZ-S2-T9-TASK-001] Setup Profesional Mediu de Dezvoltare MicroPython pentru Raspberry Pi Pico W**
        *   **Descriere Detaliată:**
            1.  Instalarea și configurarea completă a **Thonny IDE** (ultima versiune) pe VM-ul Ubuntu. Asigurarea că Thonny recunoaște interpretorul MicroPython pentru RPi Pico W.
            2.  (Alternativ, dacă preferă și au experiență) Configurarea **Visual Studio Code** cu extensia **Pico-W-Go** (sau similară) pentru dezvoltare MicroPython pe Pico W, incluzând funcționalități de upload fișiere și acces la REPL.
            3.  Descărcarea celui mai recent firmware MicroPython **stabil și specific pentru Raspberry Pi Pico W** (care include suportul pentru modulul de rețea WiFi `network`). Link-ul către firmware va fi căutat pe site-ul oficial Raspberry Pi sau MicroPython.
            4.  Procesul de **flash-uire a firmware-ului** pe placa RPi Pico W: conectarea plăcii la VM în modul BOOTSEL (ținând apăsat butonul BOOTSEL în timp ce se conectează cablul USB), copierea fișierului `.uf2` al firmware-ului pe unitatea de stocare RPi Pico care apare. Deconectarea și reconectarea plăcii.
            5.  Stabilirea unei conexiuni seriale (REPL - Read-Eval-Print Loop) cu placa Pico W din Thonny IDE (sau VS Code). Verificarea că prompt-ul MicroPython (`>>>`) apare și că se pot executa comenzi Python simple (ex: `print('Salut de pe Pico W!')`, `import machine; print(machine.freq())`).
            6.  Înțelegerea modului de salvare a fișierelor `.py` pe sistemul de fișiere flash al Pico W (ex: salvare ca `main.py` pentru rulare automată la pornire, sau alte fișiere importabile).
        *   **Resurse:** Ghidurile oficiale Raspberry Pi pentru Pico W și MicroPython, tutoriale Thonny/Pico-W-Go.
        *   **Criterii de Acceptare / Deliverable:** Mediu de dezvoltare MicroPython complet funcțional pe VM-urile membrilor Team_9. RPi Pico W rulează firmware-ul corect și comunică prin REPL serial cu IDE-ul ales. Un screenshot din Thonny/VS Code arătând prompt-ul REPL și output-ul unei comenzi simple.

    2.  **[DMZ-S2-T9-TASK-002] Script MicroPython "Hello Pico W - Conectare WiFi și Request HTTP GET Simplu"**
        *   **Descriere Detaliată:** Crearea unui script MicroPython (ex: `sprint2_main.py`) pe RPi Pico W care realizează următoarele:
            1.  **Fișier de Configurare `config.py`:**
                *   Crearea unui fișier `config.py` pe sistemul de fișiere al Pico W (acest fișier **NU** va fi commit-uit în Git, ci va fi listat în `.gitignore` al directorului Team_9).
                *   Va conține cel puțin: `WIFI_SSID = "NumeleReteleiWiFiLocale"` și `WIFI_PASSWORD = "ParolaReteleiWiFi"`.
            2.  **Logica Scriptului Principal (`sprint2_main.py`):**
                *   Importarea modulelor necesare: `import network`, `import time`, `import urequests` (biblioteca `urequests` trebuie să fie prezentă pe Pico W – poate fi necesar să fie copiată manual pe placa dacă nu este inclusă în firmware-ul standard; se va verifica și documenta acest pas).
                *   Citirea credențialelor WiFi din `config.py`.
                *   Implementarea unei funcții `connect_to_wifi(ssid, password)`:
                    *   Activează interfața WLAN: `wlan = network.WLAN(network.STA_IF); wlan.active(True)`.
                    *   Încearcă să se conecteze: `wlan.connect(ssid, password)`.
                    *   Așteaptă un timp limitat (ex: 10-15 secunde) pentru stabilirea conexiunii, verificând periodic `wlan.isconnected()` sau `wlan.status()`.
                    *   Afișează în consolă REPL mesaje de status (ex: "Conectare la WiFi...", "Conectat la WiFi! Adresa IP:", `wlan.ifconfig()`, sau "Eroare la conectarea WiFi.").
                    *   Controlează LED-ul onboard: aprins intermitent în timpul încercării de conectare, verde continuu după conexiune reușită, roșu intermitent la eșec.
                    *   Returnează `True` dacă e conectat, `False` altfel.
                *   În partea principală a scriptului, se apelează `connect_to_wifi()`.
                *   **Dacă conexiunea WiFi reușește:**
                    *   Se definește URL-ul unui API public simplu de test care returnează JSON (ex: `TEST_API_URL = "https://jsonplaceholder.typicode.com/todos/1"` sau `http://worldtimeapi.org/api/ip`).
                    *   Se face un request HTTP GET folosind `urequests.get(TEST_API_URL)`.
                    *   Se gestionează răspunsul:
                        *   Se verifică `response.status_code`.
                        *   Se afișează în consolă REPL: status code-ul, header-ele (opțional, `response.headers`), și corpul răspunsului (dacă e JSON, se poate încerca `response.json()` dacă `urequests` suportă, altfel `response.text`).
                        *   Se închide răspunsul: `response.close()` (important pentru a elibera resurse).
                    *   Se oferă feedback LED (ex: un flash scurt verde pentru request reușit, un flash roșu pentru eroare).
                *   **Dacă conexiunea WiFi eșuează** după reîncercări, scriptul poate intra într-o buclă de așteptare sau se poate opri, cu feedback LED corespunzător.
        *   **Criterii de Acceptare / Deliverable:**
            *   Scriptul MicroPython (`sprint2_main.py`) rulează cu succes pe RPi Pico W.
            *   Pico W se conectează la rețeaua WiFi specificată în `config.py`.
            *   Request-ul HTTP GET către API-ul public de test este realizat cu succes.
            *   Status code-ul și corpul răspunsului API sunt afișate corect în consola REPL.
            *   LED-ul onboard oferă feedback vizual corect despre statusul conexiunii WiFi și al request-ului HTTP.
            *   Codul sursă (`sprint2_main.py` și un fișier exemplu `config.py.template` care arată structura, dar cu valori placeholder pentru SSID/parolă) este commit-uit într-un folder specific `team9_rpi_pico/sprint2_helloworld/` pe GitHub.
            *   Capturi de ecran clare ale output-ului din consola REPL (Thonny sau VS Code) arătând mesajele de status WiFi și răspunsul de la API.

    3.  **[DMZ-S2-T9-TASK-003] Documentare Detaliată Setup Inițial Raspberry Pi Pico W și MicroPython**
        *   **Descriere Detaliată:** Crearea fișierului `SETUP_RPI_PICO_MICROPYTHON_SPRINT2.md` în folderul `team9_rpi_pico/docs/` pe GitHub. Acesta va fi un ghid complet și va include:
            *   Modelul exact de placă Raspberry Pi Pico W utilizat.
            *   Versiunea firmware-ului MicroPython descărcat și flash-uit (cu link către sursa oficială de download).
            *   Pașii detaliați, pas cu pas (cu comenzi și capturi de ecran dacă e util), pentru flash-uirea firmware-ului pe Pico W.
            *   Instalarea și configurarea IDE-ului ales (Thonny sau VS Code cu Pico-W-Go) pentru a lucra cu Pico W (selectare interpretor, conectare la REPL, upload fișiere).
            *   Structura și conținutul fișierului `config.py` (cu exemplu `config.py.template`) pentru stocarea credențialelor WiFi.
            *   Instrucțiuni clare despre cum se copiază biblioteca `urequests.py` (și orice alte dependențe) pe sistemul de fișiere al Pico W, dacă nu sunt incluse în firmware-ul standard.
            *   Cum se încarcă și se rulează scriptul `sprint2_main.py` pe Pico W.
            *   Interpretarea feedback-ului oferit de LED-uri.
            *   Orice probleme specifice întâmpinate în timpul setup-ului inițial (ex: probleme de driver USB pe VM, erori la flash-uire, probleme de conectare la REPL) și soluțiile detaliate care au funcționat.
        *   **Criterii de Acceptare / Deliverable:** Fișierul Markdown `SETUP_RPI_PICO_MICROPYTHON_SPRINT2.md` este complet, extrem de detaliat, ușor de urmărit de către cineva care configurează un proiect similar de la zero, și commit-uit pe GitHub.

    **5.2.7. Task-uri Specifice Detaliate și Livrabile pentru QA (Rolul Culesca Teodora Maria, Team_7) în Sprint 2 (Restul de ~6-7 ore alocate)**
    *Teodora se va concentra pe punerea la punct a uneltelor de testare API și pe prima interacțiune cu acestea, pregătind terenul pentru testarea mai complexă din Sprint 3.*

    1.  **[DMZ-S2-QA-TASK-001] Instalare și Configurare Profesională Postman**
        *   **Descriere Detaliată:**
            *   Descărcarea și instalarea celei mai recente versiuni gratuite a aplicației desktop Postman de pe site-ul oficial Postman, pentru sistemul de operare Ubuntu.
            *   Lansarea aplicației Postman.
            *   Crearea unui cont Postman gratuit (sau autentificarea cu un cont existent). Acest lucru este recomandat pentru a putea salva și sincroniza colecțiile, mediile și pentru a colabora (deși colaborarea avansată e în planurile plătite).
            *   Familiarizarea aprofundată cu interfața grafică a Postman:
                *   Crearea și organizarea spațiilor de lucru (Workspaces).
                *   Crearea și gestionarea Colecțiilor (Collections) și a Folderelor în cadrul colecțiilor.
                *   Interfața de construire a Request-urilor (selectare metodă HTTP, introducere URL, configurare Params, Authorization, Headers, Body).
                *   Zona de vizualizare a Răspunsurilor (Body, Cookies, Headers, Test Results).
                *   Utilizarea Istoricului de request-uri.
                *   Crearea și utilizarea Variabilelor de Mediu (Environments) și a Variabilelor de Colecție/Globale.
        *   **Criterii de Acceptare / Deliverable:** Postman este instalat corect, este funcțional și studenta este confortabilă cu navigarea și utilizarea funcționalităților de bază ale interfeței. Un screenshot al interfeței Postman cu un workspace și o colecție de test create.

    2.  **[DMZ-S2-QA-TASK-002] Creare Colecție Postman "DeviMarket Zero - Sprint 2 Tests" și Testare API Public + "Hello World" API MuleSoft**
        *   **Descriere Detaliată:**
            *   **Partea 1 (Testare API Public Extern):**
                1.  În Postman, crearea unei noi Colecții numită "DeviMarket Zero - Sprint 2 Tests".
                2.  În această colecție, crearea unui nou request HTTP GET către un API public simplu care returnează JSON (ex: `https://jsonplaceholder.typicode.com/todos/1`).
                3.  Denumirea request-ului în mod descriptiv (ex: "GET Todo Item 1 - JSONPlaceholder").
                4.  Executarea request-ului și inspectarea atentă a răspunsului: Status Code (ar trebui să fie 200 OK), Body (structura JSON), Headers.
                5.  În tab-ul "Tests" al request-ului, adăugarea următoarelor scripturi de test (JavaScript):
                    *   `pm.test("Status code is 200", function () { pm.response.to.have.status(200); });`
                    *   `pm.test("Response body is a JSON object", function () { pm.response.to.be.json; });`
                    *   `pm.test("Response body contains 'userId' property", function () { var jsonData = pm.response.json(); pm.expect(jsonData).to.have.property('userId'); });`
                    *   `pm.test("Todo item ID is 1", function () { var jsonData = pm.response.json(); pm.expect(jsonData.id).to.eql(1); });`
                6.  Rularea request-ului din nou și verificarea în tab-ul "Test Results" că toate cele 4 teste trec.
            *   **Partea 2 (Testare "Hello World" API MuleSoft - Necesită Colaborare Strânsă cu Team_1):**
                1.  Acest pas se va realiza **după** ce Team_1 finalizează și rulează cu succes task-ul `[DMZ-S2-T1-TASK-003]` ("Hello World" API în MuleSoft). Teodora va trebui să obțină de la Team_1 URL-ul exact și portul pe care rulează API-ul lor "Hello World" (ex: `http://<IP_VM_STUDENT_TEAM_1>:8081/api/hello`).
                2.  În aceeași colecție Postman ("DeviMarket Zero - Sprint 2 Tests"), crearea unui nou request HTTP GET către endpoint-ul MuleSoft.
                3.  Denumirea request-ului (ex: "GET Hello MuleSoft - Sprint 2").
                4.  Executarea request-ului și inspectarea răspunsului.
                5.  În tab-ul "Tests", adăugarea de scripturi de test similare:
                    *   Verificare status code 200 OK.
                    *   Verificare că răspunsul este JSON.
                    *   Verificare că body-ul JSON conține cheia `message`.
                    *   Verificare că valoarea cheii `message` este exact "Salut de la API-ul MuleSoft pentru DeviMarket Zero!" (sau mesajul exact implementat de Team_1).
                6.  Rularea request-ului și verificarea că toate testele trec.
        *   **Criterii de Acceptare / Deliverable:**
            *   Colecția Postman "DeviMarket Zero - Sprint 2 Tests" este creată și conține cele două request-uri (sau mai multe, dacă se testează și alte API-uri publice simple).
            *   Toate scripturile de test (aserțiunile) definite pentru ambele request-uri trec cu succes atunci când request-urile sunt executate.
            *   Colecția Postman este exportată într-un fișier JSON (ex: `DeviMarketZero_Sprint2_Tests.postman_collection.json`) și commit-uită într-un folder dedicat `qa_testing/sprint2_postman/` pe GitHub.
            *   Capturi de ecran clare arătând configurarea request-urilor în Postman (URL, Tests tab) și rezultatele testelor (tab-ul Test Results) pentru ambele API-uri.

    3.  **[DMZ-S2-QA-TASK-003] Documentare Detaliată Setup Inițial Postman și Crearea Primelor Teste API**
        *   **Descriere Detaliată:** Crearea fișierului `SETUP_POSTMAN_QA_SPRINT2.md` în folderul `qa_testing/docs/` pe GitHub. Acest document va servi ca un ghid pentru oricine dorește să înțeleagă cum s-a configurat Postman și cum s-au creat primele teste și va include:
            *   Pașii detaliați pentru instalarea Postman pe Ubuntu (versiunea folosită, link de download).
            *   O scurtă prezentare a interfeței Postman (cu capturi de ecran dacă e util), evidențiind zonele principale (Workspaces, Collections, Requests, Environments, Tests tab, Console).
            *   Instrucțiuni pas cu pas despre cum se creează o nouă Colecție și un nou Request HTTP GET.
            *   Explicația modului de adăugare a scripturilor de test în tab-ul "Tests", cu exemple concrete ale testelor implementate (pentru status code, tip de conținut, prezența proprietăților JSON, valori specifice).
            *   Cum se rulează un request și se interpretează rezultatele testelor.
            *   Cum se exportă o colecție Postman ca fișier JSON.
            *   O scurtă descriere a testării API-ului public JSONPlaceholder și a API-ului "Hello World" MuleSoft, cu URL-urile folosite și principalele aserțiuni verificate.
            *   Orice probleme specifice întâmpinate în timpul setup-ului Postman sau la crearea primelor teste și soluțiile lor.
        *   **Criterii de Acceptare / Deliverable:** Fișierul Markdown `SETUP_POSTMAN_QA_SPRINT2.md` este complet, extrem de detaliat, ușor de urmărit, include exemple și explicații clare, și este commit-uit pe GitHub.

    **5.2.8. Obiective de Validare și Deliverables Comuni la Finalul Sprintului 2 (Pentru Toate Echipele)**
    Finalul Sprintului 2 va fi marcat de o ședință de Sprint Review specifică, axată pe validarea setup-urilor și a exemplelor "Hello World".

    *   **Ședință de Sprint Review 2 (Demo Setup-uri și "Hello Worlds"):**
        *   **Durată Estimată:** Aproximativ 1.5 - 2.5 ore (în funcție de numărul de studenți și complexitatea demo-urilor).
        *   **Participanți:** Tutorele (Petrut Constantin) și toți cei 10 studenți.
        *   **Format și Obiective Specifice:**
            1.  **Introducere de către Tutore:** Recapitularea obiectivelor Sprintului 2 și sublinierea importanței unui setup corect pentru succesul Sprintului 3.
            2.  **Prezentare Individuală sau per Echipă Mică (Max 10-15 min per prezentare/echipă):** Fiecare echipă (sau fiecare student, dacă setup-urile sunt foarte diferite în cadrul echipei) va prezenta:
                *   **Demonstrație Live a Exemplului "Hello World" Funcțional:** Rularea efectivă a aplicației/job-ului/scriptului "Hello World" specific tehnologiei principale la care au lucrat (ex: API-ul MuleSoft accesat din Postman, job-ul Talend rulat cu output în consolă/DB de test, aplicația React afișând componenta stilizată, containerul ClickHouse/NGINX pornind și răspunzând, scriptul MicroPython conectându-se la WiFi și făcând un GET).
                *   **Prezentarea Succintă a Documentației `SETUP_MODUL.md`:** Parcurgerea rapidă a fișierului Markdown creat, evidențiind pașii cheie de instalare și configurare, versiunile software utilizate și, foarte important, orice provocări majore întâmpinate în timpul procesului de setup și cum au fost ele depășite. Aceasta este o oportunitate de a împărtăși lecțiile învățate cu restul echipei.
                *   **Confirmarea Stării de Pregătire pentru Sprint 3:** Fiecare echipă/student confirmă că mediul său de dezvoltare este complet funcțional și că se simte pregătit (cu o înțelegere de bază a uneltei) să înceapă dezvoltarea funcționalităților MVP în Sprint 3.
            3.  **Sesiune de Q&A și Feedback din partea Tutorelui:** Petrut Constantin va adresa întrebări pentru a valida înțelegerea și funcționalitatea setup-urilor. Va oferi feedback constructiv pe marginea prezentărilor și a documentației. Va răspunde la ultimele întrebări rămase înainte de a închide formal Sprintul 2.
        *   **Rolul Tutorelui în Validare:** Tutorele va acorda o atenție deosebită validării setup-urilor pentru Team_1 (MuleSoft și Talend), dat fiind complexitatea acestora și importanța lor centrală în arhitectură.
    *   **Artefacte Finale Versionate pe GitHub la Sfârșitul Sprintului 2 (per echipă/modul):**
        *   Codul sursă complet și funcțional pentru toate exemplele "Hello World" și operațiunile de bază implementate (proiecte React, aplicații MuleSoft exportate, job-uri Talend exportate, scripturi MicroPython, fișiere `docker-compose.yml` și Dockerfile-uri inițiale, colecția Postman).
        *   Toate fișierele de documentație `SETUP_MODUL_SPRINT2.md` (sau denumiri similare) completate, detaliate, corectate și versionate în directoarele corespunzătoare ale echipelor.
        *   Structura de directoare inițială a proiectului pe GitHub, așa cum a fost agreată.
    *   **Actualizare Stare Task-uri în Jira:** Toate task-urile alocate Sprintului 2 (cele comune și cele specifice echipelor) trebuie să fie marcate ca "Done" în Jira de către studenți, după validarea și confirmarea din cadrul ședinței de Sprint Review. Tutorele va face o verificare finală.
    *   **Starea Generală a Echipei:** La finalul Sprintului 2, toți studenții ar trebui să aibă un nivel de încredere rezonabil în capacitatea lor de a utiliza uneltele și platformele specifice și să fie pregătiți mental și tehnic pentru provocările de dezvoltare din Sprint 3. Orice problemă majoră de setup rămasă nerezolvată trebuie semnalată și tratată cu maximă prioritate de către Tutore la începutul Sprintului 3.

    **5.3. Sprint 3: Dezvoltare Module Fundamentale, Integrare Componente, Testare și Realizare MVP (Perioadă: 2 săptămâni calendaristice, 60 ore de lucru efectiv și intensiv per student)**

Acest sprint de două săptămâni reprezintă **faza principală de construcție a proiectului "DeviMarket Zero"**. Cele 60 de ore alocate per student vor fi dedicate integral dezvoltării funcționalităților definite pentru Minimum Viable Product (MVP), integrării componentelor între ele pentru a crea fluxuri de date end-to-end funcționale, și testării continue (unitară, de integrare de bază, și funcțională). Colaborarea intensă și comunicarea constantă între echipe vor fi absolut esențiale pentru succesul acestui sprint.

    **5.3.1. Obiectivele Generale ale Sprintului 3: Construcția și Integrarea unui MVP Funcțional și Demonstrabil al "DeviMarket Zero"**
    *   **Obiectiv Fundamental 1 (Dezvoltare Funcționalități Module):** Fiecare echipă va implementa setul de funcționalități cheie pentru modulul său tehnic principal, așa cum sunt ele definite în cerințele clientului (Capitolul 1.2.2), în obiectivele MVP (Capitolul 1.4) și detaliate în User Story-urile și Task-urile Tehnice create de Tutore în Jira pentru acest sprint.
        *   **Team_1 (MuleSoft & Talend):** Va dezvolta și finaliza toate API-urile MuleSoft necesare (pentru scanner, pentru fațada API extern cu ingestie în DB, și API-urile de citire pentru Frontend), inclusiv logica de business, transformările DataWeave și interacțiunea directă cu ClickHouse. Va implementa și testa job-ul Talend pentru migrarea datelor din "baza franceză" simulată.
        *   **Team_2 (React):** Va dezvolta și finaliza toate componentele UI React pentru marketplace (listare produse cu paginare, pagină de detalii produs), va implementa logica de consum a API-urilor MuleSoft (cu gestionarea stărilor și erorilor) și va finaliza integrarea cu MetaMask.
        *   **Team_7 (Infrastructură):** Va finaliza, stabiliza și documenta configurațiile Docker pentru ClickHouse și NGINX (care acum va servi build-ul real al aplicației React). Va asigura funcționarea corectă a rețelei locale Docker și va oferi suport pentru problemele de conectivitate între componentele containerizate și cele native.
        *   **Team_9 (RPi Pico):** Va finaliza și stabiliza scriptul MicroPython pentru RPi Pico W, asigurând citirea (sau simularea robustă a citirii) codului de bare și trimiterea fiabilă a request-urilor HTTPS (cu gestionarea certificatului self-signed) către API-ul MuleSoft dedicat scannerului.
    *   **Obiectiv Fundamental 2 (Integrare End-to-End a Fluxurilor Cheie):** Un focus major al acestui sprint va fi pe asigurarea că toate componentele dezvoltate de diferitele echipe funcționează împreună în mod armonios și corect, demonstrând fluxurile de date principale ale MVP-ului, așa cum sunt ele descrise în Capitolul 3.4:
        *   Fluxul complet: Utilizator Frontend (React) -> NGINX (Docker) -> (Apel API) -> MuleSoft API (Nativ) -> ClickHouse (Docker) -> (Răspuns înapoi) -> MuleSoft API -> Frontend React (pentru afișarea produselor).
        *   Fluxul complet: Scanner RPi Pico W (Hardware/MicroPython) -> (Request HTTPS) -> MuleSoft API Scanner (Nativ) -> ClickHouse (Docker) (pentru adăugarea/actualizarea produselor scanate).
        *   Fluxul complet: Job Talend (Nativ) -> ClickHouse (Docker) (pentru migrarea datelor din "baza franceză").
        *   Fluxul complet: API Extern (Internet) -> (Apel HTTP) -> MuleSoft API Fațadă (Nativ) -> ClickHouse (Docker) (pentru ingestia produselor externe).
    *   **Obiectiv Fundamental 3 (Testare Funcțională Riguroasă a MVP-ului):** Realizarea unui ciclu complet de testare funcțională (manuală și, unde este fezabil, automatizată la nivel de API cu Postman) pentru a valida că MVP-ul îndeplinește cerințele de bază definite și funcționează conform așteptărilor. Acest efort va fi condus de rolul de QA (Culesca T.M.), dar va necesita implicarea activă a tuturor echipelor pentru testarea modulelor proprii și pentru rezolvarea rapidă a bug-urilor identificate. Toate bug-urile critice și majore care împiedică funcționarea fluxurilor cheie trebuie să fie identificate și corectate în cadrul acestui sprint.
    *   **Obiectiv Fundamental 4 (Documentație Tehnică la Nivel de Modul și API):** Pe măsură ce funcționalitățile sunt implementate, echipele își vor actualiza și completa documentația tehnică la nivel de modul:
        *   Team_1: Va finaliza documentația RAML pentru API-urile MuleSoft, va documenta logica complexă din fluxurile Mule și DataWeave, și va documenta designul și funcționarea job-urilor Talend.
        *   Team_2: Va comenta componentele React complexe și va documenta structura generală a aplicației Frontend.
        *   Team_7: Va finaliza documentația pentru configurațiile Docker și NGINX.
        *   Team_9: Va finaliza documentația pentru scriptul MicroPython și setup-ul hardware.

    **5.3.2. Structura Generală a Task-urilor în Sprint 3 (Exemple de Epics și User Story-uri Principale ce vor fi Detaliate în Jira de Tutore)**
    *Tutorele (Petrut Constantin) va crea în Jira, la începutul Sprintului 3, Epics și un set detaliat de User Stories și Task-uri Tehnice pentru fiecare echipă, pornind de la exemplele de mai jos și adaptându-le la progresul real și la specificul descoperit în Sprint 2. Fiecare User Story/Task va avea Criterii de Acceptare clare.*

    *   **EPIC 1: [Team_1-MuleSoft] Implementare API Central pentru Scanner și Produse Externe (cu Logică DB)**
        *   **User Story 1.1 (API Scanner):** "Ca sistem backend (MuleSoft), vreau să expun un API HTTPS (cu certificat self-signed) la calea `/api/scanner/product_scan` care acceptă request-uri POST cu un payload JSON `{ "barcode": "...", "scan_timestamp": "..." }`, validează datele, și apoi inserează un nou produs în tabelul `devimarket_db.products` din ClickHouse dacă barcode-ul nu există, sau actualizează `updated_at` și `stock_quantity` (incrementare cu 1) pentru produsul existent, returnând un răspuns JSON cu statusul operațiunii și ID-ul produsului."
            *   *Task-uri Tehnice Derivate: Definire RAML, creare flux Mule, configurare HTTP Listener cu TLS, script DataWeave pentru validare/transformare, logică Database Connector pentru SELECT (verificare existență), INSERT și UPDATE în ClickHouse, error handling, logging, creare keystore JKS.*
        *   **User Story 1.2 (API Fațadă Externă + Ingestie DB):** "Ca sistem backend (MuleSoft), vreau să am un flux (declanșabil manual sau prin Scheduler) care apelează API-ul extern `https://dummyjson.com/products` (limitat la primele X produse), transformă fiecare produs primit (folosind DataWeave) pentru a se potrivi cu schema tabelului `devimarket_db.products` (generând ID UUID, setând `source_etl`, `created_at`, `updated_at`), și apoi realizează o operațiune de "upsert" (pe baza `external_product_id` dacă există, sau `name`+`brand`) în tabelul `devimarket_db.products` din ClickHouse."
            *   *Task-uri Tehnice Derivate: Creare flux Mule (cu Scheduler/HTTP Listener), configurare HTTP Request pentru API-ul extern, script DataWeave complex pentru mapare și transformare, logică Database Connector pentru SELECT (verificare existență) și INSERT/UPDATE în ClickHouse, error handling pentru API extern și DB, logging detaliat.*

    *   **EPIC 2: [Team_1-MuleSoft] Implementare API-uri de Citire pentru Frontend (cu Logică DB)**
        *   **User Story 2.1 (Listare Produse cu Paginare și Filtrare):** "Ca aplicație Frontend (React), vreau să pot apela un API MuleSoft `GET /api/marketplace/products` care acceptă parametrii de query opționali `page` (INT), `limit` (INT), `category` (STRING), `brand` (STRING) și `sortBy` (STRING ex: 'price_asc'), și care returnează un obiect JSON conținând o listă paginată de produse active (`is_active=1`) din `devimarket_db.products` (selectând câmpurile necesare pentru cardul de produs) și metadate de paginare (currentPage, totalPages, totalCount)."
            *   *Task-uri Tehnice Derivate: Definire RAML, creare flux Mule, configurare HTTP Listener, extragere și validare parametri query, construcție query SQL SELECT dinamic și parametrizat pentru ClickHouse (cu `WHERE`, `ORDER BY`, `LIMIT`, `OFFSET`), execuție query, formatare răspuns JSON cu DataWeave.*
        *   **User Story 2.2 (Detalii Produs):** "Ca aplicație Frontend (React), vreau să pot apela un API MuleSoft `GET /api/marketplace/products/{productId}` (unde `{productId}` este un UUID) care returnează un obiect JSON cu toate detaliile produsului activ corespunzător ID-ului specificat din tabelul `devimarket_db.products`, sau un status 404 dacă produsul nu este găsit."
            *   *Task-uri Tehnice Derivate: Similar cu 2.1, dar pentru un singur produs, cu query SELECT pe ID.*

    *   **EPIC 3: [Team_1-Talend] Implementare Job ETL pentru Migrarea Datelor din "Baza Franceză"**
        *   **User Story 3.1 (Migrare DB-DB):** "Ca dezvoltator ETL (Team_1), vreau să implementez și să testez un job Talend care se conectează la tabelul sursă `clickhouse_db_franceza.products_fr`, extrage toate produsele, le transformă conform specificațiilor (mapare coloane, conversii tip, generare ID UUID nou, setare `source_etl`, `created_at`, `updated_at`), și le încarcă prin INSERT direct în tabelul destinație `devimarket_db.products` din ClickHouse."
            *   *Task-uri Tehnice Derivate: Configurare conexiuni JDBC ClickHouse în Talend Metadata, design job vizual, configurare `tJDBCInput`, implementare logică complexă de transformare în `tMap` (cu variabile și expresii Java), configurare `tDBOutput` pentru insert, implementare logging (`tLogRow`) și reject flow pentru erori.*

    *   **EPIC 4: [Team_2-React] Dezvoltare Componente UI pentru Listarea și Detalierea Produselor**
        *   **User Story 4.1 (Listare Produse):** "Ca utilizator al marketplace-ului, vreau să pot vedea o pagină `/products` care afișează o listă de produse sub formă de carduri, cu imagine, nume și preț, și să pot naviga între paginile de rezultate folosind butoane de paginare. Datele vor fi preluate de la API-ul MuleSoft `GET /products`."
            *   *Task-uri Tehnice Derivate: Creare componente React `ProductListPage`, `ProductCard`, `PaginationControls`. Implementare logică `useEffect` și `useState` pentru fetch date (cu Axios), gestionare stare loading/error. Stilizare cu Tailwind CSS. Integrare cu React Router.*
        *   **User Story 4.2 (Detalii Produs):** "Ca utilizator, după ce dau click pe un produs din listă, vreau să fiu dus la o pagină `/products/:productId` care afișează toate detaliile acelui produs (nume, descriere, preț, categorie, brand, stoc, imagine mare, atribute, tag-uri), preluate de la API-ul MuleSoft `GET /products/:productId`."
            *   *Task-uri Tehnice Derivate: Creare componentă React `ProductDetailPage`. Utilizare `useParams` pentru a obține `productId`. Logică fetch date, gestionare stare, stilizare.*

    *   **EPIC 5: [Team_2-React] Implementare Funcționalitate Conectare Portofel MetaMask**
        *   **User Story 5.1 (Conectare MetaMask):** "Ca utilizator, vreau să am un buton 'Conectează Portofel MetaMask' în aplicație și, la click, să pot aproba conectarea prin extensia MetaMask, iar după conectare, adresa mea publică de portofel să fie afișată în UI."
            *   *Task-uri Tehnice Derivate: Creare componentă React pentru buton/afișare adresă. Implementare logică JavaScript pentru `window.ethereum.request({ method: 'eth_requestAccounts' })`. Actualizare UI pe baza stării conexiunii.*

    *   **EPIC 6: [Team_9-RPiPico] Finalizare și Testare Sistem de Scanare Hardware**
        *   **User Story 6.1 (Scanare și Trimitere Date):** "Ca utilizator al scannerului RPi Pico, vreau ca, după scanarea unui cod de bare, dispozitivul să trimită automat un request HTTPS POST (cu payload JSON conținând barcode și timestamp, gestionând certificatul self-signed) către API-ul MuleSoft `/api/scanner/product_scan` și să ofere feedback vizual (LED) despre succesul/eșecul operațiunii."
            *   *Task-uri Tehnice Derivate: Finalizare script MicroPython (citire scanner/input, construcție JSON, request HTTPS cu `urequests` și gestionare SSL, procesare răspuns, control LED-uri). Testare exhaustivă a conectivității WiFi și a request-ului HTTP.*
        *   **User Story 6.2 (Testare End-to-End Scanare):** "Ca dezvoltator Team_9, vreau să testez fluxul complet de scanare pentru cel puțin 3 produse diferite, verificând (în colaborare cu Team_1 și Team_2) că datele ajung corect în ClickHouse și sunt reflectate (după un refresh) în interfața Frontend React."

    *   **EPIC 7: [Team_7-Infra] Configurare Finală Infrastructură Docker și Servire Frontend React prin NGINX cu HTTPS**
        *   **User Story 7.1 (Orchestrare Docker Compose):** "Ca inginer DevOps (Team_7), vreau să am un fișier `docker-compose.yml` finalizat și testat care pornește și gestionează corect containerele ClickHouse (cu volume persistente și scripturi de inițializare DB/tabele/useri) și NGINX."
        *   **User Story 7.2 (Servire Frontend React prin NGINX cu HTTPS):** "Ca inginer DevOps (Team_7), vreau să configurez NGINX (rulat în Docker, folosind un Dockerfile multi-stage care include build-ul React de la Team_2) pentru a servi eficient aplicația Frontend React pe domeniul local `https://devimarket.local` (HTTPS cu certificate self-signed), asigurând funcționarea corectă a rutării client-side React Router și redirectarea HTTP la HTTPS."
            *   *Task-uri Tehnice Derivate: Finalizare Dockerfile NGINX, generare certificate SSL, scriere configurație NGINX avansată (server blocks, SSL, try_files, redirect), testare acces Frontend.*

    *   **EPIC 8: [QA-ALL] Asigurarea Calității MVP-ului prin Testare Riguroasă**
        *   **User Story 8.1 (QA Lead - Culesca T.M.):** "Ca inginer QA, vreau să creez și să execut o suită de teste comprehensive în Postman pentru toate API-urile MuleSoft, incluzând aserțiuni detaliate pentru validarea răspunsurilor (status, structură JSON, valori specifice) în scenarii pozitive și negative."
        *   **User Story 8.2 (QA Lead & Toate Echipele):** "Ca membru al proiectului, vreau să particip activ la testarea manuală a tuturor fluxurilor end-to-end ale MVP-ului (Frontend, Scanare, ETL-uri), să raportez cu acuratețe toate bug-urile identificate în Jira (cu pași de reproducere clari și severitate/prioritate) și să re-testez prompt bug-urile după ce sunt marcate ca rezolvate."

    **5.3.3. Focus pe Integrarea între Module și Rezolvarea Dependențelor în Sprint 3**
    Sprintul 3 este un sprint de **integrare intensivă**. Succesul său depinde de modul în care echipele comunică și își sincronizează eforturile pentru a face ca piesele individuale să funcționeze ca un întreg.
    *   **Comunicare Constantă a Contractelor API:** Team_1 (MuleSoft) trebuie să finalizeze și să comunice specificațiile RAML și URL-urile exacte ale API-urilor către Team_2 (React) și Team_9 (RPi Pico) cât mai devreme posibil în sprint. Orice modificare la aceste contracte API trebuie anunțată imediat.
    *   **Testare de Integrare Incrementală:** Pe măsură ce un API MuleSoft devine disponibil (chiar și într-o formă parțială), echipa consumatoare (React sau RPi Pico) ar trebui să încerce să se integreze cu el. Nu se așteaptă până la finalul sprintului pentru a testa totul. Se pot folosi date mock sau versiuni simplificate ale API-urilor la început.
    *   **Sesiuni Comune de Debugging:** Dacă apar probleme la integrare, echipele implicate (ex: Team_1 și Team_2) trebuie să colaboreze strâns pentru a depana, analizând log-urile de pe ambele părți și request-urile/response-urile HTTP.
    *   **Dependența de Infrastructură:** Team_1, Team_2 și Team_9 depind de Team_7 pentru a avea o instanță ClickHouse funcțională în Docker și, pentru Team_2, un NGINX care servește corect Frontend-ul. Team_7 trebuie să ofere aceste servicii cât mai devreme posibil și să comunice orice detalii de configurare (IP-uri, porturi, credențiale DB).
    *   **Managementul Blocajelor:** Orice blocaj care împiedică o echipă să avanseze din cauza unei dependențe de altă echipă trebuie semnalat imediat Tutorelui pentru a facilita rezolvarea.

    **5.3.4. Obiective de Validare și Deliverables la Finalul Sprintului 3 (Funcționalitățile Specifice ale MVP-ului Demonstrabil)**
    La finalul Sprintului 3, se va organiza o ședință de Sprint Review extinsă, unde se va demonstra întregul MVP funcțional.
    *   **Ședință de Sprint Review 3 (Demo MVP Complet și Integrat):**
        *   **Durată Estimată:** Aproximativ 2.5 - 3.5 ore.
        *   **Participanți:** Tutorele (Petrut Constantin) și toți cei 10 studenți. (Pot fi invitați și alți observatori din cadrul Devidevs.com, la discreția Tutorelui).
        *   **Format și Demonstrații Așteptate:**
            1.  **Prezentare Generală a MVP-ului Realizat:** O scurtă introducere de către Tutore sau un reprezentant al studenților.
            2.  **Demo Flux Frontend Utilizator (Team_2 & Team_1):**
                *   Accesarea aplicației Frontend React prin URL-ul NGINX (HTTPS).
                *   Navigarea prin lista de produse (cu paginare funcțională).
                *   Selectarea unui produs și vizualizarea paginii de detalii complete.
                *   Demonstrarea conectării portofelului MetaMask și afișarea adresei.
                *   (În culise, se va explica cum Frontend-ul apelează API-urile MuleSoft, iar MuleSoft interoghează ClickHouse).
            3.  **Demo Flux Scanare Produs (Team_9 & Team_1):**
                *   Pornirea RPi Pico W, conectarea la WiFi.
                *   Scanarea unui cod de bare (sau input manual ca fallback).
                *   Observarea feedback-ului LED pe Pico W.
                *   Verificarea (prin refresh al Frontend-ului sau direct în ClickHouse cu DBeaver/`clickhouse-client`) că produsul a fost adăugat/actualizat corect în baza de date.
                *   (În culise, se va explica cum RPi Pico apelează API-ul MuleSoft, iar MuleSoft scrie în ClickHouse).
            4.  **Demo Flux ETL Talend (Team_1):**
                *   Prezentarea pe scurt a design-ului job-ului Talend de migrare a datelor din "baza franceză".
                *   Rularea live a job-ului Talend (sau prezentarea rezultatelor unei rulări recente).
                *   Verificarea în ClickHouse (tabelul `devimarket_db.products`) că datele au fost migrate și transformate corect, cu `source_etl` corespunzător.
            5.  **Demo Flux Ingestie API Extern (Team_1):**
                *   Prezentarea pe scurt a design-ului fluxului MuleSoft pentru API-ul extern.
                *   Declanșarea fluxului (manual sau prin Scheduler).
                *   Verificarea în ClickHouse că noile produse de la API-ul extern au fost adăugate/actualizate, cu `source_etl` corespunzător.
            6.  **(Opțional) Prezentare Scurtă Infrastructură (Team_7):** O privire rapidă asupra fișierului `docker-compose.yml` și a configurației NGINX, explicând cum funcționează.
            7.  **(Opțional) Prezentare Scurtă Testare API (QA - Culesca T.M.):** Demonstrarea rulării colecției Postman și a rezultatelor testelor pentru API-urile MuleSoft.
        *   **Validare de către Tutore:** Petrut Constantin va valida că MVP-ul este funcțional, că fluxurile principale de date funcționează end-to-end conform specificațiilor din Capitolul 1.4 și că obiectivele de integrare au fost atinse. Se va oferi feedback constructiv.
    *   **Artefacte Finale Versionate pe GitHub la Sfârșitul Sprintului 3:**
        *   Codul sursă complet și funcțional pentru toate modulele MVP (aplicații MuleSoft exportate/cod sursă, job-uri Talend exportate/cod sursă, proiectul React complet, scriptul MicroPython finalizat, configurațiile Docker/NGINX finale).
        *   Toate Pull Request-urile relevante pentru funcționalitățile Sprintului 3 trebuie să fie merguite în branch-ul `develop` (sau direct în `main` dacă aceasta este strategia pentru MVP, printr-un PR final de "release MVP" din `develop` în `main`, aprobat de Tutore).
        *   Toate fișierele de documentație `SETUP_MODUL.md` actualizate pentru a reflecta configurația finală a modulelor și orice pași de rulare specifici MVP-ului.
        *   Specificațiile RAML actualizate și complete pentru toate API-urile MuleSoft.
        *   Documentația detaliată pentru job-urile Talend implementate.
        *   Colecția Postman actualizată pentru QA.
    *   **Starea Board-ului Jira la Sfârșitul Sprintului 3:**
        *   Majoritatea covârșitoare a User Story-urilor și Task-urilor Tehnice planificate pentru Sprint 3 ar trebui să fie marcate ca "Done" (după ce au trecut prin Code Review, QA și au fost validate în Sprint Review).
        *   Orice bug-uri critice sau majore identificate în timpul Sprintului 3 trebuie să fie rezolvate și închise.
        *   Se poate crea un backlog distinct (ex: "Post-MVP Improvements" sau "Technical Debt") pentru bug-urile minore, îmbunătățirile de UX sau refactorizările care nu au fost esențiale pentru funcționalitatea MVP și care nu vor fi abordate în Sprint 4.
    *   **Starea Generală a Proiectului: MVP Funcțional și Demonstrabil:** La finalul Sprintului 3, echipa ar trebui să aibă un sistem "DeviMarket Zero" care poate fi pornit (componentele Docker cu `docker-compose up -d`, aplicațiile MuleSoft și job-urile Talend rulate manual din IDE-urile lor) și utilizat pentru a demonstra toate fluxurile principale de date și funcționalitățile cheie definite pentru MVP.

    **5.4. Sprint 4: Documentație Tehnică Finală, Pregătire CV-uri, Realizare și Susținere Prezentare Finală Proiect (Perioadă: 1 săptămână calendaristică, 20 ore de lucru efectiv per student)**

Acest ultim sprint este dedicat exclusiv consolidării cunoștințelor dobândite, producerii unei documentații tehnice finale de înaltă calitate care să reflecte întreaga muncă depusă, pregătirii individuale a studenților pentru a-și valorifica experiența de practică în contexte profesionale viitoare (prin actualizarea CV-urilor) și, în final, realizării și susținerii unei prezentări finale comprehensive și profesionale a proiectului și a rezultatelor obținute. **NU se mai dezvoltă funcționalități noi de produs în acest sprint.** Focusul este pe calitate, claritate și comunicare.

    **5.4.1. Obiectivele Generale ale Sprintului 4: Consolidare Cunoștințe, Documentare Exhaustivă, Pregătire Profesională și Prezentare de Impact**
    *   **Obiectiv 1 (Documentație Tehnică Finală Consolidată):** Crearea unui set de documente tehnice finale, comprehensive, corecte, clare și de înaltă calitate, care descriu în detaliu arhitectura finală a sistemului, designul și implementarea fiecărui modul, deciziile tehnice importante luate pe parcurs, provocările întâmpinate și soluțiile adoptate, precum și lecțiile învățate. Această documentație va servi ca o "memorie" a proiectului și ca un material de referință valoros.
    *   **Obiectiv 2 (Pregătire Profesională Individuală - CV și Interviu):** Sprijinirea activă a fiecărui student în a-și actualiza CV-ul pentru a reflecta în mod corect și convingător experiența tehnică și practică dobândită în cadrul proiectului "DeviMarket Zero". Pregătirea pentru a putea discuta despre proiect și contribuțiile individuale la un interviu tehnic.
    *   **Obiectiv 3 (Prezentare Finală a Proiectului):** Pregătirea și susținerea unei prezentări finale a proiectului "DeviMarket Zero" care să fie clară, concisă, bine structurată, vizual atractivă și de impact. Prezentarea trebuie să demonstreze rezultatele obținute (MVP-ul funcțional), să explice arhitectura și tehnologiile utilizate și să evidențieze competențele dezvoltate de studenți.
    *   **Obiectiv 4 (Finalizare Tehnică și Curățare Cod):** Realizarea unei ultime revizuiri a întregului cod sursă și a configurațiilor, eliminarea oricărui cod comentat inutil ("dead code") sau a fișierelor temporare, asigurarea unei formatări consistente finale conform standardelor și actualizarea finală a tuturor fișierelor README și `SETUP_MODUL.md` din repository-urile GitHub.

    **5.4.2. Structura Generală a Task-urilor în Sprint 4 (Colaborative și Individuale, Gestionate în Jira de Tutore)**
    *Tutorele (Petrut Constantin) va crea aceste task-uri în Jira. Multe dintre ele vor fi de natură colaborativă pentru documentație și prezentare, dar pregătirea CV-ului și reflecția individuală sunt sarcini personale.*

    *   **EPIC 11: [ALL-DOC] Creare și Finalizare Documentație Tehnică Consolidată a Proiectului "DeviMarket Zero"**
        *   **User Story 11.1 (Tutore & QA Lead - Culesca T.M.):** "Ca echipă de proiect, avem nevoie ca Tutorele și QA Lead-ul să definească structura detaliată, cuprinzătoare și secțiunile obligatorii pentru Documentația Tehnică Finală Consolidată a proiectului. Aceasta va fi, preferabil, un set de fișiere Markdown interconectate într-un director `/docs` dedicat în repository-ul principal GitHub."
            *   *Task-uri Tehnice Derivate: Crearea unui template/schelet pentru documentația finală, incluzând capitole pentru: Introducere (scop, obiective), Arhitectură Generală a Sistemului (cu diagrama finală și justificări), Descriere Detaliată a Implementării pentru Fiecare Modul Tehnic (Frontend React, API-uri MuleSoft, Job-uri Talend, Baza de Date ClickHouse, Sistemul RPi Pico, Infrastructura Docker/NGINX – fiecare cu sub-secțiuni despre design, tehnologii, funcționalități cheie, provocări specifice), Fluxuri de Date End-to-End, Decizii de Design Cheie și Justificări, Provocări Majore Întâmpinate la Nivel de Proiect și Soluțiile Generale Adoptate, Instrucțiuni Complete de Build, Deploy Local și Testare a Întregului MVP, Concluzii Generale, Lecții Învățate (tehnice și de proces) și Anexe (link-uri către `SETUP_MODUL.md`, RAML-uri, etc.).*
        *   **User Story 11.2 (Fiecare Echipă - Contribuție Specifică Modulului):** "Ca membru al Team_X, voi redacta secțiunile detaliate din Documentația Tehnică Finală care corespund modulului/modulelor la care am lucrat (ex: Team_1 scrie despre API-urile MuleSoft – design RAML, logica fluxurilor DataWeave, interacțiunea cu DB; și despre Job-urile Talend – design, transformări `tMap`, conexiuni; Team_2 despre arhitectura componentelor React, state management, consum API-uri; etc.). Voi pune accent pe detalii tehnice precise, diagrame simple (textuale sau capturi de ecran ale fluxurilor/job-urilor), și explicații clare ale implementării și ale deciziilor luate."
        *   **User Story 11.3 (QA Lead - Culesca T.M. & Tutore - Petrut Constantin):** "Ca QA Lead și Tutore, vom revizui, vom oferi feedback, vom consolida și vom edita final întregul conținut al Documentației Tehnice pentru a asigura coerența, corectitudinea tehnică, claritatea exprimării, lipsa redundanțelor și un standard înalt de calitate generală."
        *   **User Story 11.4 (Toate Echipele):** "Ca dezvoltator, voi realiza o actualizare finală și meticuloasă a tuturor fișierelor `SETUP_MODUL.md` specifice modulului meu și a oricăror alte fișiere README din sub-directoarele de pe GitHub, asigurându-mă că acestea reflectă cu acuratețe starea finală a configurațiilor și instrucțiunile de rulare."

    *   **EPIC 12: [ALL-PROFDEV] Pregătire Profesională Individuală și Valorificarea Experienței de Practică**
        *   **User Story 12.1 (Tutore - Petrut Constantin):** "Ca Tutore, voi organiza un workshop interactiv (sau o serie de sesiuni de consultanță) pentru a ghida studenții despre cum să prezinte în mod eficient și convingător un proiect tehnic complex (precum DeviMarket Zero) în CV-ul lor și cum să discute despre el în cadrul unui interviu tehnic. Voi oferi exemple concrete de formulări, voi sublinia ce caută angajatorii și voi oferi sfaturi pentru a evidenția competențele dobândite."
        *   **User Story 12.2 (Fiecare Student - Task Individual):** "Ca student, îmi voi redacta sau actualiza cu atenție secțiunea 'Proiecte Personale/Academice/Practică' din CV-ul meu personal pentru a include proiectul 'DeviMarket Zero'. Voi descrie pe scurt scopul proiectului, rolul specific pe care l-am avut în cadrul echipei mele, tehnologiile cheie pe care le-am învățat și utilizat (cu accent pe cele mai relevante pentru interesele mele de carieră, ex: MuleSoft, Talend, React, Docker, MicroPython), și voi enumera 2-3 realizări sau contribuții concrete și măsurabile (pe cât posibil) la proiect."
        *   **User Story 12.3 (Tutore & Fiecare Student - Sesiuni 1-la-1):** "Ca student, voi beneficia de o sesiune scurtă de feedback individual (15-20 min) din partea Tutorelui pe marginea draftului de CV (în special secțiunea despre proiect), pentru a primi sugestii de îmbunătățire și validare."

    *   **EPIC 13: [ALL-PRESENT] Crearea și Susținerea Prezentării Finale a Proiectului "DeviMarket Zero"**
        *   **User Story 13.1 (Tutore & Reprezentanți Desemnați ai Echipelor):** "Ca echipă de proiect, vom stabili împreună (sub ghidarea Tutorelui) structura detaliată a prezentării finale (ordinea secțiunilor, conținutul principal al fiecărei secțiuni), timpul alocat pentru fiecare parte și responsabilii individuali sau la nivel de echipă pentru crearea și susținerea fiecărei secțiuni."
            *   *Structură Posibilă Sugerată pentru Prezentare (adaptabilă):*
                1.  *Introducere (Tutore sau un student): Prezentarea programului de practică, a echipei, a viziunii proiectului "DeviMarket Zero" și a obiectivelor MVP. (5 min)*
                2.  *Prezentarea Arhitecturii Tehnice Generale a Sistemului (Un student din Team_7 sau Team_1): Explicarea diagramei arhitecturale, a componentelor principale și a interacțiunilor dintre ele. (5-7 min)*
                3.  *Demo Live Modul Frontend React (Team_2): Prezentarea UI-ului, navigarea, listarea produselor, pagina de detalii, integrarea MetaMask. (10-15 min)*
                4.  *Demo Live Modul Scanner RPi Pico (Team_9): Prezentarea dispozitivului, scanarea unui produs, explicarea fluxului către MuleSoft și verificarea rezultatului în Frontend/DB. (7-10 min)*
                5.  *Prezentarea Arhitecturii și Funcționalităților MuleSoft (Team_1): Explicarea rolului central al MuleSoft, prezentarea (eventual cu capturi din Anypoint Studio) a design-ului API-urilor cheie (scanner, fațadă externă, API-uri Frontend) și a logicii din fluxurile DataWeave și Database Connector. (10-15 min)*
                6.  *Prezentarea Job-urilor ETL Talend (Team_1): Explicarea rolului Talend, prezentarea (eventual cu capturi din Talend Studio) a design-ului job-ului de migrare a datelor din "baza franceză" și a rezultatelor. (7-10 min)*
                7.  *Prezentarea Infrastructurii Docker și NGINX (Team_7): O scurtă explicație a modului de funcționare a `docker-compose.yml` și a rolului NGINX. (5 min)*
                8.  *Provocări Tehnice Majore Întâmpinate și Soluțiile Adoptate ( câte un reprezentant de la fiecare echipă poate prezenta pe scurt o provocare specifică modulului său). (5-7 min)*
                9.  *Concluzii Generale și Lecții Învățate Individuale (Fiecare student, într-un minut, menționează cel mai important lucru pe care l-a învățat sau o competență cheie pe care și-a dezvoltat-o). (10-15 min)*
                10. *Sesiune de Întrebări și Răspunsuri (Q&A). (10 min)*
        *   **User Story 13.2 (Fiecare Echipă/Student Responsabil de o Secțiune):** "Ca responsabil pentru o secțiune a prezentării finale, voi crea slide-urile necesare (folosind un template vizual comun, dacă este furnizat de Tutore, sau un design curat și profesional). Slide-urile vor fi clare, concise, cu un echilibru între text și elemente vizuale (diagrame simplificate, capturi de ecran, cod relevant – dar nu prea mult cod!)."
        *   **User Story 13.3 (Toți Studenții & Tutore):** "Ca echipă, vom organiza și vom participa activ la cel puțin 1-2 sesiuni de repetiție completă ("dry run") a prezentării finale. Tutorele va oferi feedback detaliat pe conținutul slide-urilor, pe claritatea explicațiilor, pe gestionarea timpului alocat fiecărei secțiuni și pe abilitățile generale de prezentare (dicție, contact vizual, entuziasm)."
        *   **User Story 13.4 (Toți Studenții):** "Ca membru al echipei de proiect, voi participa activ și voi susține (dacă îmi revine o secțiune) Prezentarea Finală a Proiectului 'DeviMarket Zero' în fața Tutorelui și a oricăror alți invitați (ex: alți colegi din Devidevs.com, profesori universitari)."

    *   **EPIC 14: [ALL-TECH] Finalizare Tehnică, Curățare Cod și Arhivare Proiect**
        *   **User Story 14.1 (Toate Echipele):** "Ca dezvoltator, voi realiza o ultimă revizuire amănunțită a întregului cod sursă și a configurațiilor pentru modulele la care am lucrat. Voi elimina orice cod comentat inutil ('dead code'), fișiere temporare sau de test care nu mai sunt relevante, și voi asigura o formatare finală consistentă a codului, conform standardelor agreate."
        *   **User Story 14.2 (Toate Echipele, Coordonat de QA Lead):** "Ca membru al echipei, voi verifica final acuratețea și completitudinea tuturor fișierelor README din repository-ul principal și a fișierelor `SETUP_MODUL.md` specifice, asigurându-mă că acestea reflectă starea finală a proiectului și oferă instrucțiuni clare pentru oricine ar dori să înțeleagă sau să ruleze MVP-ul."
        *   **User Story 14.3 (Tutore - Petrut Constantin):** "Ca Tutore și administrator al repository-ului GitHub, după ce toate revizuirile finale sunt complete și validate, voi crea un tag Git final (ex: `v1.0-MVP-Final` sau `Practica_2025_DeviMarketZero_Final`) pe branch-ul `main` (sau pe ultimul commit relevant din `develop` dacă `main` nu e folosit pentru MVP). Voi declara oficial un 'code freeze' pentru proiect și voi arhiva repository-ul (dacă politicile GitHub permit)."

    **5.4.3. Obiective de Validare și Deliverables la Finalul Sprintului 4 (și implicit, la Finalul Întregului Proiect de Practică)**
    Finalul Sprintului 4 marchează încheierea oficială a proiectului de practică "DeviMarket Zero".
    *   **Ședință Finală: Sprint Retrospective 4 și Încheierea Formală a Proiectului de Practică:**
        *   **Durată Estimată:** Aproximativ 1.5 - 2 ore.
        *   **Participanți:** Tutorele (Petrut Constantin) și toți cei 10 studenți.
        *   **Format și Obiective:**
            1.  **Retrospectiva Finală a Proiectului:** O discuție deschisă și reflexivă, facilitată de Tutore, care să acopere întreaga experiență a proiectului de practică (toate cele 4 sprinturi):
                *   Ce a funcționat cel mai bine în cadrul proiectului (din punct de vedere tehnic, procese, colaborare, învățare)?
                *   Care au fost cele mai mari provocări (tehnice, conceptuale, de timp, de comunicare) întâmpinate de studenți individual și ca echipă? Cum au fost ele depășite?
                *   Ce a învățat fiecare student cel mai mult din această experiență? Care sunt principalele 2-3 competențe (tehnice sau soft) pe care consideră că și le-a dezvoltat sau consolidat?
                *   Ce s-ar putea îmbunătăți în structura, conținutul sau modul de desfășurare al unui astfel de proiect de practică în viitor? (Feedback constructiv pentru Tutore și Devidevs.com).
            2.  **Feedback Final din Partea Tutorelui:** Petrut Constantin va oferi un feedback general echipei și, eventual, scurte aprecieri individuale finale privind performanța și evoluția pe parcursul întregului program de practică.
            3.  **Încheierea Formală:** Mulțumiri, felicitări pentru efortul depus și finalizarea proiectului.
    *   **Deliverable Principal 1 (Documentar): Documentația Tehnică Finală Consolidată a Proiectului "DeviMarket Zero",** versionată pe GitHub (în folderul `/docs` al monorepo-ului), completă, corectă din punct de vedere tehnic, bine structurată, clară și de înaltă calitate. Aceasta include și toate fișierele `SETUP_MODUL.md` actualizate.
    *   **Deliverable Principal 2 (Profesional): CV-urile actualizate ale fiecărui student,** conținând o descriere relevantă și de impact a proiectului "DeviMarket Zero", a rolului avut și a tehnologiilor specifice învățate și utilizate (MuleSoft, Talend, React, ClickHouse, Docker, MicroPython, etc.), gata pentru a fi folosite în procesul de căutare a unui loc de muncă sau a altor oportunități.
    *   **Deliverable Principal 3 (Prezentare): Materialele suport complete pentru Prezentarea Finală a Proiectului** (ex: fișierul PowerPoint/Google Slides, orice demo-uri video înregistrate dacă este cazul), versionate pe GitHub.
    *   **Deliverable Principal 4 (Eveniment): Susținerea cu succes și profesionalism a Prezentării Finale a Proiectului "DeviMarket Zero"** în fața Tutorelui și a oricăror alți invitați.
    *   **Deliverable Principal 5 (Tehnic): Repository-ul/Repository-urile GitHub ale proiectului** complet actualizate, curate (fără fișiere inutile sau cod comentat extensiv), cu toate branch-urile de feature merguite (sau închise corespunzător), și cu un tag Git final aplicat de Tutore pe versiunea MVP.
    *   **Starea Finală a Board-ului Jira:** Toate task-urile din Sprint 4 și din întregul proiect (cele care nu sunt bug-uri minore acceptate și lăsate în backlog pentru o potențială "versiune 2.0" ipotetică) trebuie să fie marcate ca "Done" și, eventual, proiectul Jira arhivat de către Tutore.
    *   **Confirmare Finală:** Tutorele confirmă finalizarea cu succes a programului de practică pentru fiecare student, pe baza participării, a contribuțiilor la proiect și a atingerii obiectivelor de învățare.

---

---

**6. METODOLOGIE DE LUCRU ȘI INSTRUMENTE UTILIZATE (Versiune 5.0 - Finală, MuleSoft Central)**

Acest capitol stabilește cadrul metodologic, procesele de lucru, standardele tehnice și instrumentele software care vor fi utilizate pe parcursul întregului proiect de practică "DeviMarket Zero". Aderarea riguroasă și consecventă la aceste directive de către toți participanții (studenți și Tutore) este esențială pentru a asigura o colaborare eficientă și armonioasă, o dezvoltare software consistentă și de calitate, o gestionare transparentă a progresului și, în final, o experiență de învățare practică structurată și valoroasă pentru fiecare student.

**6.1. Managementul Proiectului și al Task-urilor: Utilizarea Platformei Jira**

Platforma Jira (o instanță Devidevs.com, gestionată de Tutore) va fi instrumentul central și **sursa unică de adevăr** pentru planificarea, urmărirea, atribuirea și gestionarea tuturor activităților (Epics, User Stories, Task-uri Tehnice, Bug-uri) din cadrul proiectului "DeviMarket Zero".

    **6.1.1. Structura Proiectului în Jira (Configurare Detaliată Recomandată)**
    *   **Nume Proiect Jira:** `DeviMarket Zero` (Tutorele va stabili cheia proiectului, ex: `DMZ`).
    *   **Tip Proiect și Board:** Se recomandă utilizarea unui proiect de tip **Kanban** pentru a oferi flexibilitate și vizibilitate asupra fluxului de lucru, adaptat naturii unui proiect de practică unde ritmul de învățare poate varia. Board-ul Kanban va fi configurat cu următoarele coloane (sau similar, la decizia Tutorelui):
        1.  **Backlog (Product Backlog / Sprint Backlog):** Conține toate User Story-urile și Task-urile Tehnice identificate pentru MVP, prioritizate de Tutore. La începutul fiecărui sprint, item-urile selectate pentru sprintul respectiv sunt mutate aici (dacă nu există o coloană distinctă "Sprint Backlog").
        2.  **To Do (Ready for Development):** Task-uri care au fost pe deplin înțelese, clarificate și sunt gata să fie preluate de către un student/echipă pentru implementare. Studenții își vor auto-atribui task-uri din această coloană (cu acordul Tutorelui) sau le vor fi atribuite direct.
        3.  **In Progress (Development Active):** Task-uri la care se lucrează activ în momentul respectiv. Un student este încurajat să nu aibă mai mult de 1-2 task-uri simultan în această coloană pentru a menține focusul și a asigura finalizarea lor.
        4.  **In Review (Ready for Code/QA Review):** Task-ul este considerat finalizat din perspectiva dezvoltatorului. Codul (dacă există) a fost commit-uit pe un feature branch și un Pull Request (PR) a fost creat pe GitHub. Task-ul este acum gata pentru revizuirea tehnică de către Tutore (sau un peer reviewer desemnat) și/sau pentru validarea funcțională de către QA (Culesca T.M.). Link-ul către PR trebuie adăugat în comentariul tichetului Jira.
        5.  **Done (Completed and Validated):** Task-ul a îndeplinit toate Criteriile de Acceptare și cerințele din Definition of Done (DoD). Pull Request-ul (dacă a existat) a fost aprobat și merguit. Funcționalitatea a fost validată de QA (dacă e cazul) și/sau de Tutore. Doar Tutorele (sau QA Lead după validarea finală și acordul Tutorelui) are permisiunea de a muta task-urile în această coloană.
    *   **Tipuri de Tichete (Issue Types) Utilizate:**
        *   **Epic:** Folosite pentru a grupa funcționalități majore, module tehnice sau faze ale proiectului (ex: `[EPIC-MULESOFT-API] Dezvoltare Platformă API Centrală MuleSoft`, `[EPIC-REACT-UI] Implementare Interfață Utilizator Frontend`, `[EPIC-TALEND-ETL] Creare Job-uri ETL Talend`, `[EPIC-RPI-SCANNER] Integrare Sistem Scanare Hardware`, `[EPIC-INFRA-DOCKER] Configurare Infrastructură Docker`, `[EPIC-QA-TESTING] Asigurarea Calității MVP`, `[EPIC-DOCS-FINAL] Documentație Finală Proiect`). Structura de Epics a fost schițată în Capitolul 5.
        *   **User Story (Poveste Utilizator):** Descriu o cerință funcțională din perspectiva unui utilizator final (ex: "Ca utilizator al marketplace-ului, vreau să pot vedea o listă paginată de produse cu imagine, nume și preț, pentru a putea naviga ușor prin ofertă și a identifica produsele de interes.") sau, uneori, din perspectiva unui sistem (ex: "Ca API MuleSoft pentru scanner, vreau să pot primi un cod de bare prin HTTPS POST și să îl salvez în ClickHouse..."). User Story-urile trebuie să fie SMART (Specific, Measurable, Achievable, Relevant, Time-bound) și să aibă Criterii de Acceptare clare.
        *   **Task (Sarcină Tehnică):** O unitate de lucru specifică, concretă și tehnică, necesară pentru a implementa o parte dintr-o User Story sau dintr-un Epic (ex: "Creare Dockerfile optimizat pentru serviciul ClickHouse", "Implementare funcție DataWeave pentru transformarea JSON a produselor externe în formatul intern", "Configurare HTTPS cu certificat self-signed pe HTTP Listener-ul MuleSoft pentru API-ul scannerului", "Scriere script MicroPython pentru conectare la WiFi și trimitere request GET"). Majoritatea itemilor din Sprint 2 (setup și "Hello World") vor fi de tip Task.
        *   **Bug (Defect):** Folosit exclusiv pentru a raporta defecte, erori de funcționare sau comportamente neașteptate identificate în timpul dezvoltării sau testării. Rapoartele de bug trebuie să fie detaliate (vezi rolul QA).
        *   **Sub-task (Sarcină Secundară - Opțional):** User Story-urile sau Task-urile Tehnice mai complexe pot fi descompuse de către Tutore sau de către studenți (cu acordul Tutorelui) în sub-task-uri mai mici și mai granulare pentru o mai bună urmărire a progresului și o distribuție mai fină a muncii în cadrul echipei.
    *   **Câmpuri Esențiale și Obligatorii pentru Tichetele Jira:**
        *   **Summary (Titlu Concis):** Trebuie să fie clar, concis și să reflecte esența tichetului. Se recomandă includerea ID-ului proiectului (ex: `DMZ-123: Implementare endpoint GET /products în MuleSoft pentru listare paginată`).
        *   **Description (Descriere Detaliată):** Trebuie să conțină toate detaliile necesare pentru înțelegerea completă a cerinței sau a problemei: contextul, ce trebuie făcut exact, care este scopul, eventuale constrângeri sau dependențe. Pentru User Stories, se va folosi formatul standard: "As a [tip de utilizator/sistem], I want [acțiune/funcționalitate] so that [beneficiu/valoare]." Pentru bug-uri, se vor include pași de reproducere, rezultatul actual și rezultatul așteptat.
        *   **Acceptance Criteria (Criterii de Acceptare Specifice):** O listă punctuală și verificabilă de condiții care trebuie îndeplinite pentru ca tichetul să fie considerat "Done". Acestea sunt esențiale pentru validarea corectă a muncii și vor fi definite de Tutore (sau de Asistentul AI în propunerea inițială și rafinate de Tutore). Fiecare criteriu trebuie să fie testabil.
        *   **Assignee (Persoana/Echipa Responsabilă):** Studentul sau "Parent Team"-ul responsabil pentru realizarea tichetului. Atribuirea se face de către Tutore sau prin auto-atribuire de către studenți (cu validarea Tutorelui).
        *   **Reporter:** Persoana care a creat tichetul (de obicei Tutorele, QA-ul pentru bug-uri, sau un student dacă identifică un task nou necesar).
        *   **Priority (Prioritate):** (ex: Highest, High, Medium, Low) - setată de Tutore pentru a ghida ordinea în care ar trebui abordate task-urile în cadrul unui sprint.
        *   **Sprint:** (Dacă se folosește un board Scrum sau dacă se dorește gruparea pe sprinturi chiar și în Kanban) Sprintul căruia îi este alocat tichetul.
        *   **Labels (Etichete relevante):** Pentru o mai bună filtrare și organizare (ex: `mulesoft`, `react`, `talend`, `bug`, `documentation`, `sprint2`, `sprint3`, `team1`, `team2`, etc.).
        *   **Linked Issues (Legături între Tichete):** Pentru a lega bug-uri de User Story-urile pe care le afectează, pentru a arăta dependențe între task-uri (ex: "Task A blochează Task B"), sau pentru a lega sub-task-uri de task-ul părinte.
        *   **(Opțional) Original Estimate / Time Spent / Remaining Estimate:** Dacă Tutorele decide să se facă o estimare a efortului și o urmărire a timpului.

    **6.1.2. Fluxul de Lucru Detaliat al Task-urilor pe Board-ul Agile (Kanban)**
    1.  **Sprint Planning (Început de Sprint):**
        *   Tutorele prezintă User Story-urile și Task-urile prioritizate pentru sprintul curent, care se află în coloana **Backlog (Sprint Backlog)**.
        *   Fiecare item este discutat în detaliu pentru a se asigura înțelegerea completă a cerințelor și a Criteriilor de Acceptare. Se răspunde la toate întrebările.
        *   Studenții își selectează (sau li se atribuie de către Tutore) task-urile pe care le vor aborda în sprint. Un task preluat este mutat în coloana **To Do (Selected for Development)** și i se atribuie studentului/echipei.
    2.  **To Do (Selected for Development):**
        *   Studentul responsabil a analizat în detaliu task-ul, a înțeles pe deplin cerințele și este pregătit să înceapă lucrul efectiv la implementare.
    3.  **In Progress (Development Active):**
        *   Studentul a început efectiv lucrul la task (ex: scrie cod, configurează un job Talend, dezvoltă un flux MuleSoft, scrie documentație).
        *   Pe parcursul implementării, studentul poate adăuga comentarii în Jira cu actualizări de progres, întrebări punctuale sau probleme întâmpinate.
        *   Task-ul rămâne în această coloană până când studentul consideră că implementarea este completă și testată local conform cerințelor.
    4.  **In Review (Ready for Code/QA Review):**
        *   Studentul a finalizat toți pașii de implementare și testare locală pentru task, conform Criteriilor de Acceptare și Definition of Done (DoD) (vezi 6.6).
        *   **Obligatoriu, dacă task-ul implică modificări de cod sau artefacte versionate:** Studentul a creat un Pull Request (PR) pe GitHub, de pe feature branch-ul său către branch-ul `develop`. PR-ul este complet (titlu, descriere detaliată, link către task-ul Jira).
        *   Studentul mută task-ul Jira în coloana **In Review** și notifică (printr-un comentariu în Jira care menționează `@Tutore` și `@PeerReviewer` dacă e cazul, și/sau pe canalul de comunicare) că task-ul și PR-ul asociat sunt gata pentru revizuire.
    5.  **Procesul de Review (Iterativ):**
        *   **Code Review (Tutore și/sau Peer Reviewer):** Persoana(ele) desemnată(e) analizează codul/configurațiile din PR pentru corectitudine, calitate, respectarea standardelor și a cerințelor. Feedback-ul este oferit prin comentarii direct pe PR-ul din GitHub.
        *   **QA Review (Culesca T.M. sau alt student desemnat pentru QA):** Dacă task-ul reprezintă o funcționalitate testabilă, QA-ul execută scenariile de test relevante (manual sau cu Postman). Rezultatele (succes sau bug-uri identificate) sunt comunicate (prin comentarii Jira și, pentru bug-uri, prin tichete noi de tip Bug legate de task-ul original).
        *   **Iterație:** Dacă în urma review-ului (fie code review, fie QA review) sunt necesare modificări, tichetul Jira este mutat înapoi în coloana **In Progress** (sau **To Do**, dacă modificările sunt substanțiale și necesită o reluare). Studentul responsabil realizează ajustările necesare, face commit și push pe același feature branch (actualizând PR-ul), și apoi mută din nou task-ul Jira în **In Review**. Acest ciclu se repetă până când toate problemele sunt rezolvate.
    6.  **Done (Completed, Validated, and Merged):**
        *   Pull Request-ul (dacă a existat) a fost aprobat de către toți reviewerii necesari (minim Tutorele).
        *   PR-ul a fost merguit cu succes în branch-ul `develop` de către Tutore sau de către student (dacă are permisiuni și după confirmarea aprobărilor).
        *   QA-ul (dacă a fost implicat în testarea acestui task) a confirmat validarea finală a funcționalității și închiderea bug-urilor asociate.
        *   Tutorele (Petrut Constantin) face o ultimă verificare și confirmă că task-ul îndeplinește toate Criteriile de Acceptare și Definition of Done.
        *   **Doar Tutorele** (sau o persoană explicit desemnată de acesta, ex: QA Lead după validarea finală și acordul Tutorelui) are permisiunea de a muta tichetul Jira în coloana finală **Done**.

    **6.1.3. Responsabilitățile Detaliate ale Studenților în Utilizarea Platformei Jira**
    Fiecare student are responsabilitatea individuală de a utiliza Jira în mod corect, consecvent și proactiv, deoarece aceasta este unealta principală pentru transparența progresului și managementul proiectului.
    *   **Consultarea Zilnică și Proactivă a Board-ului:** Fiecare student trebuie să își verifice board-ul Jira și task-urile alocate cel puțin o dată la începutul și o dată la sfârșitul fiecărei zile de lucru la proiect (sau mai des, dacă este necesar).
    *   **Actualizarea Statusului Task-urilor în Timp Real:** De îndată ce statusul unui task se schimbă (ex: începe lucrul, finalizează implementarea, trimite la review), studentul responsabil trebuie să mute imediat cardul corespunzător în coloana corectă de pe board-ul Jira. Nu se lasă task-uri într-un status incorect.
    *   **Adăugarea de Comentarii Clare și Relevante:**
        *   La preluarea unui task în "In Progress", se poate adăuga un scurt comentariu de confirmare.
        *   Pe parcursul lucrului la un task complex, se pot adăuga comentarii periodice cu actualizări de progres semnificative, decizii de design luate, sau dificultăți întâmpinate și modul în care au fost depășite.
        *   La mutarea unui task în "In Review", se va adăuga un comentariu care include obligatoriu link-ul către Pull Request-ul de pe GitHub (dacă este un task cu cod) și o scurtă notă despre cum poate fi testată funcționalitatea.
        *   Se va răspunde prompt și clar la comentariile și întrebările adresate de Tutore sau colegi pe tichetele Jira.
    *   **Estimarea Efortului și Urmărirea Timpului (Dacă se Solicită de Tutore):** Dacă Tutorele decide implementarea estimării efortului (ex: în Story Points sau ore ideale) sau a logării timpului lucrat (time tracking), fiecare student va completa aceste informații cu acuratețe și la timp pentru task-urile sale.
    *   **Clarificarea Cerințelor Prin Jira:** Dacă un task sau o User Story nu este suficient de clară, studentul va adăuga un comentariu pe tichetul Jira respectiv, menționând `@Tutore` și punând întrebările specifice de clarificare. Aceasta asigură că discuția și răspunsurile rămân documentate și atașate task-ului.
    *   **Menținerea Focusului:** Studenții sunt încurajați să se concentreze pe finalizarea unui task (sau maxim două task-uri mici) înainte de a prelua altele, pentru a evita context switching-ul excesiv și pentru a asigura un flux constant de item-uri către "Done".
    *   **Crearea de Bug-uri (Dacă se Identifică):** Dacă un student identifică un bug într-o componentă la care lucrează el sau un coleg, va crea un nou tichet de tip "Bug" în Jira, cu toate detaliile necesare (pași de reproducere, actual vs. expected, capturi de ecran), și îl va lega (link) de User Story-a sau Task-ul afectat.

**6.2. Versionarea Codului și Colaborare: Utilizarea Riguroasă a Git & GitHub**

Platforma GitHub (instanța Devidevs.com sau contul public, la decizia Tutorelui) și sistemul de control al versiunilor Git vor fi utilizate pentru gestionarea întregului cod sursă al proiectului, a scripturilor, a fișierelor de configurare și a documentației. O utilizare disciplinată a Git este esențială pentru colaborare, trasabilitate și integritatea proiectului. Tutorele va crea și administra repository-ul/repository-urile.

    **6.2.1. Organizarea Repository-urilor pe GitHub (Monorepo cu Structură Clară de Foldere - Recomandare Puternică)**
    *   **Opțiune Foarte Recomandată (Monorepo):**
        *   Se va crea un **singur repository principal** pe GitHub, numit, de exemplu, `DeviMarketZero-Practice-FullProject` (sau un nume similar, stabilit de Tutore).
        *   În cadrul acestui monorepo, se va crea o **structură clară de directoare (foldere)** la nivelul rădăcinii, pentru a organiza logic codul sursă și artefactele specifice fiecărui modul tehnologic principal sau echipă. Această structură va fi creată de Tutore la inițializarea repository-ului. Exemplu de structură:
            ```
            DeviMarketZero-Practice-FullProject/
            ├── .github/             # (Opțional) Template-uri pentru PRs, Issues, workflows GitHub Actions
            ├── .gitignore           # Fișier .gitignore global pentru monorepo
            ├── README.md            # Acest document principal al proiectului
            ├── docs/                # Pentru documentația generală consolidată (Sprint 4)
            │   └── architecture.md  # (Exemplu)
            ├── team1_integrations/
            │   ├── mulesoft_apis/
            │   │   ├── devi_market_scanner_api/    # Proiectul Mule pentru API-ul scannerului
            │   │   │   ├── src/main/mule/
            │   │   │   ├── pom.xml
            │   │   │   └── sprint2_helloworld_export.jar (Exemplu de artefact livrabil S2)
            │   │   ├── devi_market_external_products_api/ # Proiectul Mule pentru API-ul extern
            │   │   └── devi_market_frontend_api/      # Proiectul Mule pentru API-urile Frontend
            │   ├── talend_jobs/
            │   │   ├── Job_MigrateFrenchDB/          # Proiectul/exportul job-ului Talend
            │   │   └── (Opțional) Job_ConsumeMuleAPI/
            │   └── docs/
            │       ├── SETUP_MULESOFT_ANYPOINT_STUDIO_SPRINT2.md
            │       └── SETUP_TALEND_OPEN_STUDIO_SPRINT2.md
            ├── team2_frontend_react/
            │   ├── devi-market-frontend/             # Directorul proiectului React/Vite
            │   │   ├── public/
            │   │   ├── src/
            │   │   ├── package.json
            │   │   └── vite.config.js (sau .ts)
            │   └── docs/
            │       └── SETUP_REACT_FRONTEND_SPRINT2.md
            ├── team7_infrastructure/
            │   ├── docker_compose_setup/
            │   │   ├── docker-compose.yml
            │   │   ├── clickhouse_init_scripts/
            │   │   │   ├── 01-init-databases.sh
            │   │   │   └── 02-create-tables.sql
            │   │   ├── nginx_config/
            │   │   │   ├── nginx.conf (sau default.conf)
            │   │   │   └── ssl/ (pentru certificatele .crt și .key)
            │   │   └── Dockerfile.nginx (Dockerfile multi-stage pentru NGINX + React build)
            │   └── docs/
            │       └── SETUP_INFRASTRUCTURE_SPRINT2.md
            ├── team9_rpi_pico/
            │   ├── sprint2_helloworld_script/
            │   │   ├── main.py
            │   │   └── config.py.template
            │   ├── (Alte scripturi sau module MicroPython pentru Sprint 3)
            │   └── docs/
            │       └── SETUP_RPI_PICO_MICROPYTHON_SPRINT2.md
            └── qa_testing/
                ├── postman_collections/
                │   └── DeviMarketZero_Sprint2_Tests.postman_collection.json
                ├── test_plans/
                │   └── DeviMarketZero_MVP_TestPlan.md
                └── docs/
                    └── SETUP_POSTMAN_QA_SPRINT2.md
            ```
        *   **Avantaje Monorepo cu Structură Clară:**
            *   **Simplitate în Managementul Accesului:** Toți studenții au acces la un singur repository.
            *   **Vizibilitate Generală:** Toată lumea poate vedea progresul și codul celorlalte module, facilitând înțelegerea integrărilor.
            *   **Procese de Integrare Mai Simple:** Modificările care afectează mai multe module sunt gestionate într-un singur set de PR-uri (deși PR-urile pot fi încă focusate pe un singur modul).
            *   **Istoric Unificat:** Un singur istoric Git pentru întregul proiect.
            *   **Setup Inițial Mai Ușor pentru Studenți:** Un singur `git clone`.
    *   **Alternativă (Repository-uri Multiple - Mai Puțin Recomandată pentru Acest Context):** Crearea unui repository GitHub separat pentru fiecare modul tehnic major (ex: `DeviMarketZero-MuleSoft-APIs`, `DeviMarketZero-React-Frontend`, `DeviMarketZero-Infrastructure`, etc.).
        *   **Dezavantaje:** Poate complica managementul accesului, crește numărul de repository-uri de clonat și urmărit, poate îngreuna vizualizarea dependențelor și procesele de integrare între module. Poate fi considerată dacă modulele sunt foarte mari și cu cicluri de viață complet independente, ceea ce nu este cazul aici.
    *   **Decizia Finală privind Structura Repository-urilor:** Va fi luată și implementată de Tutore (Petrut Constantin) înainte de începerea efectivă a lucrului în Sprint 2. **Recomandarea fermă este pentru monorepo cu structura de directoare detaliată mai sus.**

    **6.2.2. Strategia de Branching Detaliată (Flux de Lucru Git Simplificat, dar Disciplinat)**
    Se va adopta un flux de lucru Git simplu, dar care necesită disciplină, inspirat din GitHub Flow și principii GitFlow Lite, pentru a asigura un proces de dezvoltare și integrare controlat:
    *   **Branch-ul `main` (sau `master` - denumirea default GitHub poate varia):**
        *   Acest branch trebuie să reflecte **întotdeauna** starea cea mai stabilă și testată a proiectului, corespunzând unei versiuni "lansabile" a MVP-ului (ex: la finalul Sprintului 3, după validarea în Sprint Review, și la finalul Sprintului 4, după finalizarea documentației și a curățeniei de cod).
        *   **Regulă Strictă:** **NIMENI, nici măcar Tutorele, nu va face commit direct (direct push) pe branch-ul `main`**.
        *   Modificările ajung în `main` **exclusiv** prin intermediul Pull Request-urilor (PRs) din branch-ul `develop` (sau dintr-un branch de release, dacă se adoptă o strategie mai avansată). Aceste PR-uri către `main` vor fi supuse unei revizuiri finale extrem de atente de către Tutore și vor fi merguite doar după ce s-a confirmat stabilitatea completă a funcționalităților.
        *   Branch-ul `main` va fi protejat în setările GitHub pentru a impune aceste reguli (ex: obligativitatea PR-urilor, aprobări necesare).
    *   **Branch-ul `develop`:**
        *   Acesta este **branch-ul principal de integrare continuă** pentru toate funcționalitățile noi și bug fix-urile dezvoltate pe parcursul sprinturilor.
        *   La începutul proiectului, `develop` va fi creat din `main`.
        *   **Toate feature branch-urile create de studenți vor porni de la ultima versiune a lui `develop` și tot în `develop` vor fi merguite prin Pull Requests.**
        *   Branch-ul `develop` ar trebui să fie, în cea mai mare parte a timpului, într-o stare funcțională și construibilă, deși poate conține funcționalități incomplete (work-in-progress) care sunt încă pe feature branch-uri.
        *   Înainte de un demo important (Sprint Review) sau de un merge către `main`, se va acorda o atenție sporită stabilizării și testării branch-ului `develop`.
    *   **Feature Branches (Sarcina de Lucru a Studenților):**
        *   **Creare:** Pentru **fiecare task Jira individual** (fie că este o User Story, un Task Tehnic sau un Bug Fix) care necesită modificări în codul sursă, în scripturi, în fișierele de configurare sau în documentația versionată, studentul responsabil **va crea OBLIGATORIU un nou branch local** pornind de la cea mai recentă versiune a branch-ului `develop` (printr-un `git checkout develop; git pull origin develop; git checkout -b nume_feature_branch`).
        *   **Convenție de Denumire Feature Branch:** Numele branch-ului trebuie să fie descriptiv, în limba engleză, scris cu litere mici, cuvinte separate prin cratimă (`-`) sau underscore (`_`), și să includă obligatoriu ID-ul unic al tichetului Jira pentru trasabilitate. Format recomandat:
            `type/DMZ-XXX-short-descriptive-name`
            *   `type`: Poate fi `feature` (pentru funcționalități noi), `fix` (pentru bug fix-uri), `docs` (pentru modificări de documentație), `refactor`, `chore`.
            *   `DMZ-XXX`: ID-ul complet al tichetului Jira.
            *   `short-descriptive-name`: O descriere foarte scurtă a scopului branch-ului (2-4 cuvinte).
            *   **Exemple Corecte:**
                *   `feature/DMZ-101-mulesoft-scanner-api-impl`
                *   `fix/DMZ-105-react-product-list-pagination-bug`
                *   `docs/DMZ-110-update-setup-talend-md-sprint2`
                *   `refactor/DMZ-115-dataweave-product-transform`
        *   **Mod de Lucru:** Studentul va realiza toate modificările și commit-urile pentru task-ul respectiv **exclusiv** pe acest feature branch local. Se vor face commit-uri frecvente și atomice (mici, logice).
        *   **Actualizare cu `develop`:** Pe parcursul lucrului la un feature branch mai lung, este responsabilitatea studentului să își actualizeze periodic feature branch-ul cu cele mai recente modificări din `develop` pentru a evita conflicte mari de merge la final. Acest lucru se face prin:
            1.  `git checkout develop`
            2.  `git pull origin develop` (pentru a aduce `develop`-ul local la zi cu cel de pe server)
            3.  `git checkout nume_feature_branch`
            4.  `git rebase develop` (preferabil, pentru un istoric liniar) sau `git merge develop` (mai simplu, dar creează un merge commit). Tutorele va indica metoda preferată. Orice conflicte de merge trebuie rezolvate local de către student.
        *   **Push pe Server:** Studentul va face `git push origin nume_feature_branch` în mod regulat (cel puțin o dată pe zi) pentru a salva munca pe serverul GitHub și pentru a permite vizibilitatea Tutorelui și a colegilor.

    **6.2.3. Crearea și Gestionarea Detaliată a Pull Request-urilor (PRs) – Proces Critic pentru Calitate și Colaborare**
    Pull Request-urile (PRs) sunt mecanismul central și **obligatoriu** prin care modificările de pe feature branch-uri sunt propuse pentru integrare în branch-ul `develop` (și, ulterior, din `develop` în `main`). PR-urile facilitează revizuirea codului (code review), discuțiile tehnice, asigurarea calității și menținerea unui istoric curat al modificărilor.
    *   **Momentul Creării unui PR:** Un PR se creează de către studentul autor al modificărilor **doar atunci când**:
        1.  Task-ul Jira asociat este considerat complet implementat din perspectiva dezvoltatorului.
        2.  Toate Criteriile de Acceptare ale task-ului sunt îndeplinite.
        3.  Codul/configurațiile respectă Definition of Done (DoD) la nivel de task (vezi 6.6).
        4.  Modificările au fost testate local temeinic de către autor.
        5.  Feature branch-ul local a fost actualizat cu ultima versiune a `develop`-ului și eventualele conflicte de merge au fost rezolvate.
        6.  Toate commit-urile de pe feature branch sunt clare și respectă standardele.
    *   **Crearea PR-ului pe GitHub:**
        *   Din interfața GitHub, se navighează la repository și se inițiază un nou Pull Request.
        *   **Branch Sursă (Compare Branch):** Feature branch-ul studentului (ex: `feature/DMZ-101-mulesoft-scanner-api-impl`).
        *   **Branch Destinație (Base Branch):** Branch-ul `develop`.
    *   **Completarea Detaliată a Formularului de PR (Obligatoriu):**
        *   **Titlul PR-ului:** Trebuie să fie clar, concis și să includă obligatoriu ID-ul tichetului Jira și o scurtă descriere a scopului PR-ului. Format recomandat: `DMZ-XXX: Descriere Scurtă a Modificării (max 50-70 caractere)`.
            *   *Exemplu: `DMZ-101: Implementare API MuleSoft pentru scanner RPi Pico și upsert în ClickHouse`*
        *   **Descrierea PR-ului (Corpul PR-ului - Foarte Importantă și Detaliată):** Acesta este locul unde autorul explică modificările. Se va folosi formatul Markdown. Trebuie să includă:
            1.  **Link către Tichetul Jira:** Un link direct către tichetul Jira relevant (ex: `Rezolvă: https://devidevs.atlassian.net/browse/DMZ-101`).
            2.  **Sumarul Modificărilor:** O descriere clară și detaliată a modificărilor efectuate: Ce funcționalitate a fost adăugată? Ce problemă a fost rezolvată? Care a fost abordarea tehnică principală?
            3.  **Context (Dacă e Necesar):** Orice informații de context care ar ajuta reviewerii să înțeleagă mai bine modificările (ex: decizii de design, alternative luate în considerare).
            4.  **Cum se Testează Manual Funcționalitatea:** Pași clari și specifici pe care un reviewer sau un tester QA îi poate urma pentru a verifica manual dacă funcționalitatea implementată merge corect. Includeți orice date de test necesare sau condiții prealabile.
            5.  **Impactul Modificărilor (Dacă Există):** Menționați dacă modificările afectează alte module, dacă introduc schimbări de interfață API, sau dacă există riscuri potențiale.
            6.  **Probleme Cunoscute sau Limitări (Dacă Există):** Orice problemă cunoscută care nu a putut fi rezolvată în cadrul acestui PR sau orice limitare a implementării trebuie menționată transparent.
            7.  **Capturi de Ecran sau GIF-uri (Foarte Recomandat pentru Modificări UI sau Fluxuri Vizuale):** Dacă modificarea are un impact vizual (ex: Frontend) sau dacă demonstrează un flux complex (ex: un job Talend, un flux MuleSoft), adăugarea de capturi de ecran sau GIF-uri animate este extrem de utilă pentru revieweri.
            8.  **(Opțional) Checklist pentru Autor:** Autorul poate adăuga un mic checklist pentru a se asigura că a acoperit toți pașii necesari înainte de a cere review (ex: - Cod testat local? - Standarde respectate? - Documentație actualizată?).
    *   **Atribuirea Reviewer-ilor:**
        *   **Obligatoriu:** **Tutorele (Petrut Constantin)** trebuie adăugat ca reviewer la **toate** Pull Request-urile. Niciun PR nu va fi merguit fără aprobarea sa explicită.
        *   **Recomandat (Peer Review pentru Învățare):** Se încurajează ca autorul PR-ului să adauge cel puțin **un alt student** ca reviewer. Acesta poate fi un coleg din aceeași "Parent Team" (pentru a verifica logica specifică modulului) sau un student dintr-o echipă diferită care ar putea fi impactat de modificare sau care ar putea învăța din codul respectiv. Peer review-ul este o practică excelentă pentru schimbul de cunoștințe și pentru îmbunătățirea calității.
    *   **Procesul Detaliat de Code Review (Iterativ):**
        1.  **Notificare Revieweri:** După crearea PR-ului și adăugarea reviewerilor, autorul îi poate notifica pe canalul de comunicare (menționând link-ul PR-ului) că este gata pentru review.
        2.  **Analiza de către Revieweri:** Reviewerii (Tutorele și/sau peer reviewerii) vor analiza cu atenție codul și modificările propuse în PR. Ei se vor uita la:
            *   Corectitudinea funcțională (dacă implementarea corespunde cerințelor din Jira).
            *   Respectarea standardelor de codare, formatare și denumire (definite în Capitolul 6.5).
            *   Claritatea, lizibilitatea și mentenabilitatea codului.
            *   Identificarea potențialelor bug-uri, a cazurilor limită neacoperite sau a problemelor de performanță (la nivel de bază).
            *   Eficiența și robustețea soluției propuse.
            *   Aspecte de securitate de bază (ex: validarea input-urilor, evitarea expunerii de date sensibile).
            *   Calitatea comentariilor din cod și a documentației asociate (dacă PR-ul include și modificări de documentație).
        3.  **Oferirea de Feedback Constructiv:** Reviewerii vor lăsa comentarii și sugestii direct pe liniile de cod specifice în interfața GitHub a Pull Request-ului. Comentariile trebuie să fie:
            *   **Specifice:** Să indice exact linia de cod și problema.
            *   **Constructive:** Să ofere sugestii de îmbunătățire, nu doar critici.
            *   **Argumentate:** Să explice "de ce"-ul din spatele sugestiei (ex: "Această abordare ar putea duce la X problemă", "Conform standardului Y, ar trebui făcut Z").
            *   **Politicose și Respectuoase:** Chiar dacă se identifică greșeli, feedback-ul trebuie oferit într-un mod care încurajează învățarea.
            *   Reviewerii pot solicita modificări ("Request changes"), aproba ("Approve") sau doar lăsa comentarii ("Comment").
        4.  **Procesarea Feedback-ului de către Autorul PR-ului:**
            *   Autorul PR-ului trebuie să monitorizeze activ comentariile și să răspundă la fiecare dintre ele (fie confirmând că va face modificarea, fie oferind o justificare dacă nu este de acord – discuția trebuie să fie constructivă).
            *   Pentru fiecare sugestie acceptată, autorul va face modificările necesare pe feature branch-ul său local și va face `git commit` și `git push` la aceste modificări. Pull Request-ul de pe GitHub se va actualiza automat cu noile commit-uri.
            *   După ce a adresat tot feedback-ul, autorul poate notifica din nou reviewerii că PR-ul este gata pentru o nouă rundă de review.
        5.  **Iterație:** Acest ciclu de review, feedback, modificare și re-review continuă până când toți reviewerii obligatorii (minim Tutorele) sunt mulțumiți de calitatea modificărilor și aprobă formal Pull Request-ul.
    *   **Merge-uirea Pull Request-ului în Branch-ul `develop`:**
        *   Un PR poate fi merguit în branch-ul `develop` **doar după ce a primit aprobarea formală a Tutorelui (Petrut Constantin)** și, ideal, a cel puțin unui peer reviewer (dacă au fost asignați).
        *   **Cine face Merge-ul:** De preferință, Tutorele va fi cel care efectuează operațiunea de merge, după o ultimă verificare. Alternativ, studentul autor poate face merge-ul dacă are permisiunile necesare și după ce a primit confirmarea explicită a tuturor aprobărilor.
        *   **Metoda de Merge (Stabilită de Tutore):**
            *   **"Squash and merge" (Recomandat pentru `develop`):** Combină toate commit-urile de pe feature branch într-un singur commit semnificativ pe branch-ul `develop`. Acest lucru menține istoricul lui `develop` curat și ușor de urmărit (un commit per feature/fix). Mesajul commit-ului rezultat din squash ar trebui să fie bine formulat, preluând adesea titlul și descrierea PR-ului.
            *   **"Rebase and merge" (Alternativă avansată):** Rebazează feature branch-ul pe ultima versiune a `develop`-ului și apoi face un merge fast-forward. Rezultă un istoric liniar, dar necesită mai multă atenție la rezolvarea conflictelor în timpul rebase-ului.
            *   **"Create a merge commit" (Mai puțin preferat pentru `develop`):** Creează un commit explicit de merge, păstrând toate commit-urile individuale de pe feature branch în istoricul lui `develop`. Poate face istoricul mai aglomerat.
        *   **Tutorele (Petrut Constantin) va decide și va instrui studenții asupra metodei de merge preferate pentru proiect.**
    *   **Ștergerea Feature Branch-ului După Merge:** După ce Pull Request-ul a fost merguit cu succes și închis, feature branch-ul de pe serverul GitHub (remote) și cel local al studentului pot fi șterse pentru a menține repository-ul și lista locală de branch-uri curate și organizate. (GitHub oferă adesea un buton pentru a șterge branch-ul sursă după merge).

    **6.2.4. Standarde Detaliate și Obligatorii pentru Mesajele de Commit Git (Bazate pe Conventional Commits)**
    Mesajele de commit clare, descriptive și standardizate sunt esențiale pentru a înțelege istoricul modificărilor, pentru a facilita depanarea și pentru a colabora eficient. Se va adopta (și se va insista pe respectarea) formatului **Conventional Commits** (https://www.conventionalcommits.org/).

    *   **Formatul General Strict:**
        `<type>(<scope>): <subject>`
        `<BLANK LINE>`
        `<body>` (opțional)
        `<BLANK LINE>`
        `<footer>` (opțional)

    *   **`<type>` (Obligatoriu):** Indică natura modificării. Doar următoarele tipuri sunt permise:
        *   **`feat`**: Pentru adăugarea unei noi funcționalități (ex: implementarea unui nou endpoint API, adăugarea unui nou feature în UI). Corelează adesea cu o User Story.
        *   **`fix`**: Pentru corectarea unui bug într-o funcționalitate existentă. Corelează cu un tichet de tip Bug.
        *   **`docs`**: Pentru modificări care afectează exclusiv documentația (ex: actualizarea `README.md`, a fișierelor `SETUP_MODUL.md`, comentarii în cod, documentație API RAML).
        *   **`style`**: Pentru modificări care nu afectează logica sau funcționalitatea codului, ci doar aspectul și formatarea acestuia (ex: corectarea spațiilor albe, formatare automată cu Prettier, lipsă punct și virgulă unde e stilul, etc.).
        *   **`refactor`**: Pentru o modificare de cod care nici nu corectează un bug, nici nu adaugă o funcționalitate nouă, ci îmbunătățește structura internă, designul, lizibilitatea sau performanța codului existent (ex: redenumirea unor variabile pentru claritate, extragerea unei logici duplicate într-o funcție, optimizarea unui algoritm).
        *   **`perf`**: Pentru o modificare de cod care îmbunătățește în mod specific performanța (ex: optimizarea unui query SQL lent, reducerea timpului de încărcare a unei componente React).
        *   **`test`**: Pentru adăugarea de teste automate lipsă (MUnit, Postman, etc.) sau pentru corectarea/îmbunătățirea testelor automate existente.
        *   **`build`**: Pentru modificări care afectează sistemul de build, procesul de deployment local sau dependențele externe (ex: actualizarea versiunilor în `package.json` sau `pom.xml`, modificări la Dockerfile-uri, `docker-compose.yml`, scripturi de build, configurare Webpack/Vite).
        *   **`ci`**: Pentru modificări la fișierele și scripturile de configurare a Integrării Continue (ex: workflow-uri GitHub Actions – deși puțin probabil pentru acest MVP).
        *   **`chore`**: Pentru alte actualizări de mentenanță care nu modifică codul sursă sau fișierele de test (ex: actualizarea fișierului `.gitignore`, adăugarea de unelte de dezvoltare la proiect, curățarea unor fișiere neutilizate).

    *   **`<scope>` (Opțional, dar Recomandat):** Indică secțiunea, modulul sau componenta specifică a proiectului afectată de modificare. Se va scrie cu litere mici și, dacă sunt mai multe cuvinte, se pot uni cu cratimă.
        *   *Exemple de scope-uri posibile:* `react-product-list`, `mulesoft-scanner-api`, `talend-frenchdb-etl`, `docker-clickhouse-setup`, `rpi-wifi-module`, `docs-readme`, `config-nginx`.

    *   **`<subject>` (Obligatoriu):** O descriere foarte scurtă și imperativă a modificării, la timpul prezent. Max. 50-70 caractere. Nu începe cu majusculă (decât dacă e un acronim) și nu se termină cu punct.
        *   *Exemple Bune:* `add user login component`, `fix pagination bug on product details`, `update RPi Pico setup instructions`, `refactor DataWeave transformation for external products`.
        *   *Exemple Mai Puțin Bune:* `Fixed a bug`, `User login`, `Updating docs.`, `Made some changes to the API.`

    *   **`<body>` (Opțional, dar Recomandat pentru Commit-uri Non-Triviale):**
        *   Se lasă o linie goală între subiect și corp.
        *   Oferă o explicație mai detaliată a modificării: motivația din spatele ei, contextul, cum rezolvă problema, ce alternative au fost considerate.
        *   Poate fi formatat în paragrafe. Liniile nu ar trebui să depășească ~72-80 caractere pentru lizibilitate în diverse unelte Git.

    *   **`<footer>` (Opțional, dar Util pentru Integrarea cu Jira și pentru Breaking Changes):**
        *   Se lasă o linie goală între corp (dacă există) și footer.
        *   **Referențierea Tichetelor Jira:** Se poate folosi pentru a lega commit-ul de tichetele Jira relevante. Format: `Related: DMZ-123`, `Resolves: DMZ-456`, `Closes: DMZ-789`. (Cuvintele cheie "Resolves" sau "Closes" pot închide automat tichetele în Jira dacă este configurată integrarea cu GitHub).
        *   **Notarea Schimbărilor Incompatibile (BREAKING CHANGE):** Dacă un commit introduce o modificare care rupe compatibilitatea cu versiunile anterioare (ex: un API își schimbă contractul), se adaugă un paragraf care începe cu `BREAKING CHANGE: ` urmat de o descriere clară a schimbării incompatibile și a modului de migrare.
            *   *Exemplu:*
                ```
                feat(mulesoft-products-api): change products endpoint to v2 and add new required field

                The GET /api/marketplace/products endpoint has been updated to /api/v2/marketplace/products.
                A new required field 'availability_status' has been added to the product response JSON.
                Clients consuming this API must update their request URLs and expect the new field.

                Related: DMZ-201
                BREAKING CHANGE: Endpoint /api/marketplace/products is now /api/v2/marketplace/products and response includes new mandatory 'availability_status' field.
                ```

    *   **Exemple Complete de Mesaje de Commit Conforme:**
        1.  `feat(react-ui): add dark mode toggle button to header`
        2.  ```
            fix(mulesoft-scanner): correctly handle duplicate barcode scans

            Previously, scanning an existing barcode would create a new product entry
            instead of updating the existing one. This commit modifies the upsert logic
            in the scanner API flow to perform an UPDATE on 'updated_at' and 'stock_quantity'
            if a product with the given barcode is found.

            Resolves: DMZ-155
            ```
        3.  `docs(setup-talend): add detailed steps for ClickHouse JDBC driver installation`
        4.  ```
            refactor(dataweave-external-api): optimize product transformation script

            Improved the performance of the DataWeave script that transforms data
            from the DummyJSON API by using more efficient mapping functions and
            reducing a_very_long_variable_name_that_was_hard_to_read to a_shorter_one.
            Also added more comments for clarity. No functional changes.
            ```
        5.  `build(docker-nginx): switch to multi-stage Dockerfile for smaller final image`

    *   **Importanța Respectării:** Tutorele va insista pe respectarea acestor standarde pentru mesajele de commit, deoarece acestea sunt cruciale pentru un istoric Git curat, ușor de înțeles și pentru o colaborare eficientă. PR-urile cu mesaje de commit neconforme pot fi respinse la code review.

    **6.2.5. Utilizarea Riguroasă și Corectă a Fișierelor `.gitignore`**
    *   **Scop Fundamental:** Fișierele `.gitignore` sunt esențiale pentru a instrui Git ce fișiere și directoare să ignore și să **NU** le adauge în repository (să nu le urmărească – "untracked"). Acest lucru previne versionarea pe GitHub a artefactelor care nu ar trebui să fie acolo, cum ar fi:
        *   Dependențe de proiect descărcate automat de managerele de pachete (ex: directorul `/node_modules/` pentru proiectele React/Node.js, directorul `/target/` pentru proiectele MuleSoft bazate pe Maven, bibliotecile descărcate de Talend).
        *   Fișiere generate de IDE-uri și editoare de text care sunt specifice utilizatorului sau mediului local (ex: directoarele `.idea/` pentru IntelliJ/Anypoint Studio, `.vscode/` - cu excepția setărilor de proiect care se doresc a fi partajate, cum ar fi `settings.json` pentru formatare; fișiere `.project`, `.classpath`, `.settings/` pentru Eclipse/Talend Studio).
        *   Fișiere de configurare locale care conțin informații sensibile (secrete) sau setări specifice mașinii unui dezvoltator (ex: fișierul `config.py` pentru RPi Pico care conține credențialele WiFi, fișiere `.env` care ar putea conține chei API sau parole de baze de date – deși pentru acest proiect vom încerca să folosim variabile de mediu Docker sau setări de context Talend/MuleSoft pentru astfel de valori, iar fișierele `.env` vor fi oricum în `.gitignore`).
        *   Fișiere de build și output-uri compilate care sunt generate din codul sursă (ex: directorul `dist/` sau `build/` al aplicației React – acesta va fi generat în cadrul procesului de build al imaginii Docker NGINX, nu versionat direct; fișierele `.jar` ale aplicațiilor Mule exportate din Anypoint Studio – acestea sunt artefacte de build, nu cod sursă, deși pentru simplitate, în Sprint 2, un `.jar` "Hello World" poate fi versionat ca exemplu de livrabil).
        *   Fișiere de log generate de aplicații, fișiere temporare, fișiere de sistem specifice OS-ului (`.DS_Store` pe macOS, `Thumbs.db` pe Windows).
    *   **Implementare:**
        *   **`.gitignore` Global la Rădăcina Monorepo-ului:** Se va crea un fișier `.gitignore` la rădăcina repository-ului principal `DeviMarketZero-Practice-FullProject/` care va conține reguli generale aplicabile întregului proiect (ex: ignorare `.DS_Store`, `Thumbs.db`, directoare de log comune, fișiere de backup ale editorilor `*~`).
        *   **`.gitignore` Specific per Modul/Director:** În fiecare director principal de modul (ex: `/team2_react_frontend/devi-market-frontend/`, `/team1_integrations/mulesoft_apis/devi_market_scanner_api/`, `/team1_integrations/talend_jobs/Job_MigrateFrenchDB/`) se va crea un fișier `.gitignore` specific pentru tehnologiile și uneltele utilizate în acel modul.
            *   Exemplu pentru React (`/team2_react_frontend/devi-market-frontend/.gitignore`):
                ```
                # Dependencies
                /node_modules
                /.pnp
                .pnp.js

                # Testing
                /coverage

                # Production
                /dist
                /build

                # Misc
                .DS_Store
                npm-debug.log*
                yarn-debug.log*
                yarn-error.log*
                .env.local
                .env.development.local
                .env.test.local
                .env.production.local
                ```
            *   Exemplu pentru MuleSoft (la rădăcina unui proiect Mule, ex: `/team1_integrations/mulesoft_apis/devi_market_scanner_api/.gitignore`):
                ```
                # Mule auto-generated files
                .mule/
                target/
                mule-artifact.json
                *.jar
                !/src/main/app/*.jar # Daca se pun dependente JAR manual acolo

                # Anypoint Studio files
                .project
                .classpath
                .settings/
                ```
            *   Exemplu pentru Talend (la rădăcina unui export de proiect Talend sau în folderul de job):
                ```
                # Talend Studio specific files
                *.screenshot
                *.properties
                temp/
                talend.project
                *.bak
                # Compiled job artifacts (jars, etc. - if not intended to be versioned)
                # Acest .gitignore pentru Talend e mai complex, depinde ce se exportă/versionează.
                # Adesea, se versionează doar item-urile de design (.item, .properties, .screenshot)
                # și nu întregul folder de workspace.
                ```
    *   **Resurse Utile pentru Generare `.gitignore`:**
        *   Site-ul https://www.toptal.com/developers/gitignore (anterior gitignore.io) este o resursă excelentă unde se pot introduce tehnologiile utilizate (ex: "Node", "VisualStudioCode", "Linux", "macOS", "Windows", "Java", "Maven", "Eclipse", "Talend", "Mule") și se generează un fișier `.gitignore` comprehensiv.
    *   **Responsabilitate:** Fiecare echipă este responsabilă pentru a se asigura că fișierul `.gitignore` din directorul modulului său este corect, complet și previne versionarea fișierelor nedorite. Tutorele poate oferi template-uri inițiale. Este important ca `.gitignore` să fie adăugat și commit-uit **înainte** de a adăuga alte fișiere în Git, pentru a evita versionarea accidentală a fișierelor care ar trebui ignorate. Dacă fișiere au fost deja versionate accidental, ele trebuie eliminate din urmărirea Git (folosind `git rm --cached <file>`) și apoi adăugate în `.gitignore`.

**6.3. Canale de Comunicare Eficientă și Etichetă Profesională**

O comunicare fluidă, transparentă, respectuoasă și eficientă este absolut fundamentală pentru succesul unui proiect de echipă, mai ales într-un context de învățare unde pot apărea multe întrebări și provocări.

    **6.3.1. Stabilirea Canalului Principal de Comunicare (Decizia Tutorelui - Petrut Constantin)**
    *   Tutorele va stabili și va configura un **canal principal de comunicare** pentru toți participanții la proiectul "DeviMarket Zero". Acesta va fi utilizat pentru anunțuri oficiale, discuții tehnice generale, întrebări rapide, coordonare și schimb de informații. Opțiunile recomandate sunt:
        *   **Server Discord Dedicat Proiectului:**
            *   **Avantaje:** Foarte flexibil, permite crearea de multiple canale text tematice (ex: `#anunturi-importante`, `#general-discutii-tehnice`, `#sprint2-planificare`, `#mulesoft-help`, `#react-help`, `#docker-infra-help`, `#qa-bugs`, `#random-chat`), canale de voce pentru discuții rapide sau sesiuni de lucru comune/depanare, partajare de ecran, integrare cu boti (ex: pentru notificări GitHub).
            *   **Configurare:** Tutorele va crea serverul, canalele inițiale și rolurile (ex: Tutore, Student_Team1, Student_Team2 etc. pentru a putea menționa grupuri).
        *   **Workspace Slack (Utilizând Planul Gratuit):**
            *   **Avantaje:** Interfață profesională, bună pentru comunicare de business, integrare cu alte unelte. Planul gratuit are limitări (istoric mesaje, număr de integrări), dar poate fi suficient pentru durata proiectului.
            *   **Configurare:** Similar cu Discord, Tutorele creează workspace-ul și canalele tematice.
    *   **Comunicarea Deciziei:** Tutorele va comunica tuturor studenților platforma aleasă și va furniza link-ul de invitație sau instrucțiunile pentru a se alătura. Participarea la acest canal este **obligatorie** pentru toți studenții.

    **6.3.2. Utilizarea Comunicării Asincrone (Metoda Preferată pentru Majoritatea Interacțiunilor)**
    Dat fiind că studenții pot avea programe diferite și pentru a promova o documentare mai bună a deciziilor și soluțiilor, se va încuraja utilizarea comunicării asincrone pentru majoritatea interacțiunilor:
    *   **Canalul Principal de Comunicare (Discord/Slack):** Pentru întrebări care pot fi de interes general, pentru a împărtăși resurse, pentru a anunța finalizarea unor etape importante sau pentru a cere ajutor pe probleme specifice (ex: "Salutare Team_1, am o problemă la configurarea conectorului DB în MuleSoft pentru ClickHouse, am încercat X și Y, primesc eroarea Z. Are cineva vreo sugestie?").
    *   **Comentariile din Tichetele Jira:** **Canalul preferat pentru toate discuțiile, întrebările, clarificările și actualizările de status care sunt strict legate de un anumit task, User Story sau Bug.** Avantajul este că întreaga istorie a discuției rămâne documentată și atașată permanent tichetului respectiv, fiind ușor de consultat ulterior. Se pot menționa utilizatori specifici (ex: `@PetrutConstantin`, `@PopescuIon`) pentru a atrage atenția.
    *   **Comentariile din Pull Request-urile GitHub:** **Canalul exclusiv pentru discuții tehnice detaliate, feedback și sugestii legate de modificările de cod propuse într-un PR.** Toate observațiile, întrebările și răspunsurile legate de code review trebuie să aibă loc aici.
    *   **Email (Utilizare Limitată și Specifică):**
        *   Pentru comunicări inițiale formale (ex: solicitarea de acces la GitHub, conform Anexei 8.2).
        *   Pentru comunicări individuale, private, cu Tutorele, care nu sunt potrivite pentru canalele publice (ex: probleme personale care afectează participarea la proiect).
        *   Pentru distribuirea unor documente finale sau a unor comunicări oficiale din partea Tutorelui, dacă acesta consideră necesar.
        *   **NU** se va folosi email-ul pentru discuții tehnice de zi cu zi sau pentru urmărirea task-urilor, deoarece acestea se pierd ușor și nu sunt transparente pentru restul echipei.

    **6.3.3. Etichetă Profesională și Bune Practici de Comunicare (Obligatorii)**
    Respectarea unei etichete de comunicare profesională este esențială pentru un mediu de lucru productiv și armonios.
    *   **Profesionalism și Respect Absolut:**
        *   Toate comunicările (verbale și scrise) trebuie să fie întotdeauna respectuoase, politicoase, constructive și profesionale.
        *   Nu se tolerează sub nicio formă limbajul ofensator, sarcastic, ironic în mod negativ, atacurile la persoană, discriminarea sau orice alt comportament neprofesional.
        *   Feedback-ul (atât cel oferit, cât și cel primit) trebuie să fie axat pe problemă/cod/soluție, nu pe persoană.
    *   **Claritate, Concizie și Context:**
        *   Formulați întrebările, mesajele și comentariile cât mai clar, specific și concis posibil. Mergeți direct la subiect.
        *   Oferiți întotdeauna suficient context pentru ca interlocutorul să înțeleagă despre ce este vorba. (Ex: Când puneți o întrebare despre o eroare, includeți mesajul de eroare complet, ce ați încercat să faceți, ce versiune de software folosiți, etc.).
        *   Folosiți formatare (Markdown în Jira/GitHub/Discord, liste, paragrafe) pentru a face mesajele lungi mai ușor de citit.
    *   **Răspunsuri în Timp Util (pentru Comunicarea Asincronă):**
        *   Deși comunicarea este preponderent asincronă, se așteaptă ca toți membrii echipei (inclusiv Tutorele, în măsura programului său) să își verifice canalele de comunicare principale (Discord/Slack, Jira, GitHub) de câteva ori pe zi (în zilele lucrătoare dedicate proiectului) și să răspundă la mesaje, întrebări sau solicitări de feedback într-un interval de timp rezonabil (ex: în aceeași zi lucrătoare, sau în maxim 24h pentru chestiuni non-urgente).
        *   Dacă nu puteți oferi un răspuns complet imediat, confirmați primirea mesajului și estimați când veți putea reveni cu un răspuns.
    *   **Utilizarea Corectă și Eficientă a Canalelor:**
        *   Folosiți canalul potrivit pentru tipul de comunicare (ex: întrebări tehnice generale despre MuleSoft pe canalul `#tech_mulesoft` din Discord, discuții despre un bug specific în comentariile tichetului Jira al acelui bug).
        *   Evitați "cross-posting-ul" (aceeași întrebare pe multiple canale simultan).
    *   **Citirea Atentă a Anunțurilor și a Documentației Existente:**
        *   Este responsabilitatea fundamentală a fiecărui student să citească cu atenție toate anunțurile făcute de Tutore pe canalul principal de comunicare.
        *   **Înainte de a pune o întrebare, verificați dacă răspunsul nu există deja în acest document `README.md`, într-un fișier `SETUP_MODUL.md` relevant, într-o discuție anterioară pe Discord/Slack sau într-un comentariu Jira.** Respectați timpul colegilor și al Tutorelui.
    *   **Evitarea "Zgomotului" Inutil pe Canale:**
        *   Folosiți funcția de "Reply" sau "Thread" în Discord/Slack pentru a menține discuțiile tematice organizate și pentru a nu deranja întregul canal cu răspunsuri care interesează doar câteva persoane.
        *   Evitați mesajele monosilabice frecvente și inutile (ex: "ok", "da", "mersi") care nu aduc plus valoare conversației. Reacțiile emoji (👍, ✔️, 👀) pot fi folosite eficient pentru confirmări rapide sau pentru a arăta că un mesaj a fost citit, fără a genera notificări suplimentare.
    *   **Fii Pregătit și Documentat Când Soliciți Ajutor:**
        *   Când puneți o întrebare tehnică sau solicitați ajutor pentru o problemă, specificați clar:
            1.  Ce încercați să faceți (obiectivul).
            2.  Ce pași ați urmat până acum.
            3.  Care este rezultatul actual (mesajul de eroare exact, comportamentul observat).
            4.  Care este rezultatul așteptat.
            5.  Ce ați încercat deja pentru a rezolva problema (cercetare, pași de debugging).
        *   Aceasta ajută persoana care vă oferă suport să înțeleagă rapid contextul și să vă ofere un ajutor mai eficient.

**6.4. Ședințe și Ceremonii Agile (Adaptate Specific pentru Proiectul de Practică)**

Pentru a structura munca, a facilita comunicarea sincronă, a monitoriza progresul și a promova îmbunătățirea continuă, se va implementa un set simplificat, dar consistent, de ceremonii inspirate din metodologia Agile (în special Scrum și Kanban). Toate ședințele vor fi organizate și facilitate de Tutore (Petrut Constantin). Participarea activă și punctuală a tuturor studenților este obligatorie.

    **6.4.1. Ședința de Sprint Planning (La Începutul Fiecărui Sprint Nou: S2, S3, S4)**
    *   **Durată Estimată:**
        *   Sprint 2 Planning (după Kick-off): ~1 oră (focus pe înțelegerea task-urilor de setup).
        *   Sprint 3 Planning: ~2 - 2.5 ore (cel mai complex, se planifică dezvoltarea MVP).
        *   Sprint 4 Planning: ~1 oră (focus pe task-urile de documentare și prezentare).
    *   **Participanți:** Tutorele (Petrut Constantin) și toți cei 10 studenți.
    *   **Scopuri Principale și Agendă Tipică:**
        1.  **Prezentarea Obiectivului Sprintului (Tutore):** Tutorele reiterează obiectivul general care trebuie atins la finalul sprintului respectiv (ex: "La finalul Sprintului 2, fiecare student trebuie să aibă mediul de dezvoltare complet funcțional și un 'Hello World' demonstrabil pentru tehnologia sa principală.").
        2.  **Parcurgerea Backlog-ului de Sprint (Tutore & Echipă):** Tutorele prezintă User Story-urile și Task-urile Tehnice prioritizate pentru sprintul curent (cele care sunt în coloana "Backlog (Sprint Backlog)" sau "To Do" din Jira).
        3.  **Clarificarea Detaliată a Task-urilor:** Pentru fiecare item important din backlog-ul de sprint, se discută în detaliu:
            *   Cerințele funcționale și tehnice.
            *   **Criteriile de Acceptare Specifice** (revizuite și validate).
            *   Eventualele dependențe de alte task-uri sau de alte echipe.
            *   Orice nelămuriri sau ambiguități sunt adresate și clarificate.
        4.  **Descompunerea Task-urilor (dacă e necesar):** User Story-urile mai mari pot fi descompuse de către echipă, cu ghidarea Tutorelui, în Task-uri Tehnice mai mici și mai granulare, pentru a facilita implementarea și urmărirea.
        5.  **Atribuirea Task-urilor (Colaborativ):** Task-urile sunt atribuite "Parent Teams" sau membrilor individuali. Se încurajează auto-atribuirea de către studenți (pe baza competențelor și intereselor), cu validarea finală a Tutorelui pentru a asigura o distribuție echilibrată și aliniată cu obiectivele de învățare.
        6.  **(Opțional, la decizia Tutorelui) Estimarea Efortului:** Se poate realiza o estimare informală a efortului pentru fiecare task (ex: folosind unități relative precum Story Points – 1, 2, 3, 5, 8; sau T-shirt sizes – S, M, L; sau ore ideale – dar cu precauție, deoarece estimările pot fi dificile pentru începători). Scopul estimării nu este de a controla strict timpul, ci de a ajuta la planificarea realistă a încărcării sprintului și la identificarea task-urilor care ar putea fi prea mari.
    *   **Output Așteptat:** Un Sprint Backlog clar și angajat, cu toate task-urile înțelese pe deplin și asumate de către studenți, gata pentru a fi mutate în coloana "In Progress" din Jira pe măsură ce se începe lucrul la ele. Toți participanții au o imagine clară despre ce trebuie realizat în sprint.

    **6.4.2. Daily Stand-up Meeting (Sesiune Zilnică Scurtă – Foarte Recomandată, în special în Sprint 3)**
    *   **Durată Strictă:** Maxim 15-20 minute. Scopul este eficiența.
    *   **Participanți:** Tutorele (Petrut Constantin) și toți cei 10 studenți. Este important ca toată lumea să fie prezentă și punctuală.
    *   **Scop Principal:** Sincronizarea rapidă și zilnică a întregii echipe, identificarea progresului individual față de task-urile asumate și, cel mai important, semnalarea imediată a oricăror blocaje sau impedimente care împiedică progresul. **NU este o ședință de raportare detaliată a statusului și NU este o ședință de rezolvare a problemelor tehnice** (acestea se discută după Daily, doar cu persoanele implicate).
    *   **Format (Fiecare student răspunde pe rând, concis):**
        1.  **Ce am realizat ieri** (referitor la task-urile din Sprint Backlog-ul curent pentru "DeviMarket Zero")? (Focus pe realizări, nu pe activități).
        2.  **Ce voi realiza azi** (referitor la task-urile din Sprint Backlog-ul curent pentru "DeviMarket Zero")? (Focus pe planul pentru ziua curentă).
        3.  **Întâmpin blocaje sau impedimente** (care mă împiedică să îmi ating obiectivele de azi sau să finalizez task-ul curent)? (Ex: o eroare tehnică nerezolvată, o dependență de un coleg care nu e gata, o neclaritate persistentă).
    *   **Rolul Tutorelui (Facilitator):**
        *   Se asigură că ședința începe și se termină la timp.
        *   Menține focusul pe cele trei întrebări. Intervine politicos dacă discuțiile deviază.
        *   Notează cu atenție blocajele semnalate de studenți și stabilește acțiuni imediate pentru rezolvarea lor (ex: o discuție separată post-Daily cu studentul blocat, alocarea de suport de la un alt coleg, clarificarea unei cerințe).
        *   Încurajează transparența și comunicarea deschisă.
    *   **Alternativă (Comunicare Asincronă Zilnică - dacă ședințele live sunt imposibile):**
        *   Dacă organizarea unei ședințe zilnice live cu toți participanții este logistic imposibilă, se poate adopta o formă de **Daily Update Asincron**. Fiecare student va posta, la începutul zilei de lucru la proiect, un scurt mesaj pe canalul principal de comunicare (Discord/Slack), respectând același format de 3 întrebări. Tutorele va monitoriza aceste update-uri și va interveni pe chat pentru a adresa blocajele. Această metodă necesită și mai multă disciplină individuală.

    **6.4.3. Ședința de Sprint Review / Demo Meeting (La Finalul Sprinturilor 2 și 3)**
    *   **Durată Estimată:**
        *   **Sprint 2 Review (Demo Setup-uri și "Hello Worlds"):** Aproximativ 1.5 - 2.5 ore.
        *   **Sprint 3 Review (Demo MVP Complet și Integrat):** Aproximativ 2.5 - 3.5 ore.
    *   **Participanți:** Tutorele (Petrut Constantin) și toți cei 10 studenți. Este foarte recomandat ca și alți stakeholderi din cadrul Devidevs.com (ex: alți mentori, manageri, colegi interesați) să fie invitați să participe, pentru a oferi studenților o experiență cât mai apropiată de un demo real și pentru a primi un feedback mai variat.
    *   **Scop Principal:**
        1.  **Demonstrarea Live a Funcționalităților Completate:** Principala activitate este ca echipele/studenții să demonstreze **funcționalitățile software funcționale** ("working software") care au fost finalizate ("Done" conform DoD) în timpul sprintului. Accentul este pe **demo live**, interactiv, nu pe prezentarea de slide-uri despre ce s-a făcut (slide-urile pot fi folosite minimal, doar pentru a introduce contextul sau arhitectura).
        2.  **Prezentarea Valorii Aportate:** Demonstrația trebuie să evidențieze cum funcționalitățile implementate contribuie la atingerea obiectivelor MVP-ului și răspund cerințelor clientului simulat.
        3.  **Colectarea de Feedback Constructiv:** Tutorele și ceilalți participanți vor oferi feedback direct pe marginea celor demonstrate. Acest feedback poate viza aspecte funcționale, tehnice, de UX/UI, sau posibile îmbunătățiri.
        4.  **Validarea Atingerii Obiectivelor Sprintului:** Se verifică dacă obiectivele majore stabilite pentru sprintul respectiv au fost atinse.
        5.  **Sărbătorirea Realizărilor:** Este și o oportunitate de a recunoaște efortul și progresul echipei.
    *   **Pregătirea pentru Sprint Review:**
        *   Echipele/studenții responsabili pentru demo trebuie să se pregătească temeinic din timp:
            *   Să se asigure că toate componentele necesare pentru demo sunt funcționale și stabile în mediul de prezentare (VM-urile lor).
            *   Să repete scenariile de demo pentru a se asigura că decurg fluid și pentru a se încadra în timpul alocat.
            *   Să desemneze cine va prezenta fiecare parte a demo-ului și cine va răspunde la întrebări.
            *   Să pregătească orice date de test necesare pentru a ilustra funcționalitățile.
    *   **Desfășurarea Ședinței:**
        *   Introducere de către Tutore (scopul sprintului, agenda demo-ului).
        *   Fiecare echipă/modul își demonstrează contribuția, explicând pe scurt ce a implementat și cum funcționează.
        *   Sesiuni scurte de Q&A după fiecare demo de modul.
        *   Discuție finală și feedback general.
    *   **NU este o ședință de status detaliat sau de rezolvare a problemelor tehnice.** Acestea se discută în alte contexte. Este un eveniment de inspecție și adaptare a produsului.

    **6.4.4. Ședința de Sprint Retrospective Meeting (La Finalul Sprinturilor 3 și 4)**
    *   **Durată Estimată:** Aproximativ 1 - 1.5 ore.
    *   **Participanți:** Tutorele (Petrut Constantin) și toți cei 10 studenți. Este o ședință internă a echipei de proiect.
    *   **Scop Principal:** O discuție deschisă, onestă, structurată și constructivă despre **procesul de lucru, colaborarea în echipă și uneltele utilizate** în timpul sprintului (sau al întregului proiect, pentru retrospectiva finală). Scopul NU este de a critica persoane, ci de a identifica în mod colaborativ:
        1.  Ce a funcționat bine și ar trebui menținut sau amplificat?
        2.  Ce nu a funcționat bine (obstacole, ineficiențe, frustrări) și ar trebui oprit sau îmbunătățit?
        3.  Care sunt acțiunile concrete, specifice și măsurabile pe care echipa se angajează să le implementeze în sprintul următor (sau în viitoare proiecte) pentru a îmbunătăți performanța și satisfacția.
    *   **Format Sugerat (Simplu și Eficient):**
        *   **Setarea Contextului (Tutore):** Reamintirea scopului retrospectivei (îmbunătățire continuă, mediu sigur pentru feedback), sublinierea că nu se caută vinovați.
        *   **Colectarea Datelor (Individual, apoi Partajat):** Fiecare participant notează individual (pe post-it-uri virtuale sau fizice) răspunsuri la întrebări precum:
            *   **Start Doing:** Ce ar trebui să începem să facem ca echipă?
            *   **Stop Doing:** Ce ar trebui să încetăm să facem pentru că nu aduce valoare sau ne încurcă?
            *   **Continue Doing:** Ce facem bine și trebuie neapărat să continuăm?
            *   (Alternative: "Mad, Sad, Glad"; "4 Ls: Liked, Learned, Lacked, Longed For")
        *   **Gruparea și Discutarea Ideilor:** Ideile sunt partajate, grupate pe teme comune și discutate de către întreaga echipă. Tutorele facilitează discuția, asigurându-se că toată lumea are ocazia să vorbească.
        *   **Identificarea Acțiunilor de Îmbunătățire:** Din discuții, se selectează 1-3 (maxim) acțiuni concrete de îmbunătățire care sunt cele mai importante și fezabile de implementat. Pentru fiecare acțiune, se poate desemna un responsabil (owner) și un termen limită orientativ.
    *   **Rolul Tutorelui (Facilitator Neutru):**
        *   Creează un mediu de încredere și deschidere.
        *   Ghidează discuția, dar nu o domină.
        *   Ajută echipa să se concentreze pe probleme de proces, nu pe persoane.
        *   Asistă la formularea clară a acțiunilor de îmbunătățire.
        *   Documentează (sau desemnează pe cineva să documenteze) principalele puncte discutate și acțiunile agreate, pentru a fi revizuite la începutul sprintului următor.

**6.5. Standarde Detaliate de Codare, Formatare și Denumire (per Tehnologie)**

Respectarea unor standarde comune și consistente de codare, formatare și denumire este absolut esențială pentru a asigura lizibilitatea, mentenabilitatea, calitatea și colaborarea eficientă la nivelul codului sursă și al artefactelor produse de echipă. Chiar dacă multe dintre aceste tehnologii sunt noi pentru studenți, se va încuraja și se va insista pe adoptarea treptată și riguroasă a bunelor practici. Tutorele va oferi exemple și va verifica respectarea acestor standarde în cadrul procesului de Code Review.

    **6.5.1. Standarde Generale Universale Aplicate Tuturor Tehnologiilor și Artefactelor:**
    *   **Limba Engleză Exclusiv:**
        *   **Cod Sursă:** Toate numele de variabile, funcții, metode, clase, interfețe, module, pachete, componente, fluxuri Mule, job-uri Talend, etc., vor fi scrise **exclusiv în limba engleză**.
        *   **Comentarii în Cod:** Toate comentariile adăugate în codul sursă vor fi scrise **exclusiv în limba engleză**.
        *   **Mesaje de Commit Git:** Toate mesajele de commit Git vor fi scrise **exclusiv în limba engleză**, respectând formatul Conventional Commits (vezi 6.2.4).
        *   **Documentație Tehnică:** Majoritatea documentației tehnice (fișiere `SETUP_MODUL.md`, documentația API RAML, descrierile tehnice din Jira, documentația finală a proiectului) va fi redactată **exclusiv în limba engleză**. (Excepție: Acest document `README.md` principal este în română pentru a facilita înțelegerea inițială de către toți studenții).
        *   **Rațiune:** Limba engleză este lingua franca în industria IT globală. Utilizarea ei consecventă facilitează colaborarea, utilizarea resurselor online (documentație, forumuri), înțelegerea codului de către persoane din culturi diferite și pregătește studenții pentru un mediu de lucru internațional.
    *   **Lizibilitate și Claritate Maximă a Codului:**
        *   **Nume Auto-Descriptive și Intuitive:** Se vor folosi nume de identificatori (variabile, funcții, etc.) care sunt clare, concise, dar suficient de descriptive pentru a reflecta fără ambiguitate scopul și conținutul acestora. Evitați abrevierile obscure (ex: `prodQty` în loc de `productQuantity`), numele generice, cu o singură literă (ex: `a`, `b`, `x`, `i` – cu excepția contoarelor triviale în bucle scurte `for (let i = 0... )`).
        *   **Indentare Consistentă și Corectă:** Se va folosi o indentare consistentă (fie 2 spații, fie 4 spații – **se va agrea un standard per tehnologie/proiect la început** și se va respecta cu strictețe). Indentarea trebuie să reflecte corect structura logică a codului (blocuri `if/else`, bucle, definiții de funcții/clase, elemente JSX imbricate, fluxuri Mule, etc.). Majoritatea IDE-urilor moderne pot fi configurate să formateze automat codul sau să verifice indentarea.
        *   **Lungimea Liniilor de Cod Rezonabilă:** Evitați liniile de cod excesiv de lungi, care necesită scroll orizontal pentru a fi citite (o limită orientativă ar fi 80-120 caractere, dar depinde de context și de standardele specifice limbajului). Împărțiți logic instrucțiunile lungi pe mai multe linii, respectând regulile de sintaxă și indentare ale limbajului.
        *   **Utilizarea Inteligentă a Spațiilor Albe:** Folosiți linii goale (blank lines) pentru a separa logic grupuri de instrucțiuni, definiții de funcții/metode, sau secțiuni distincte în cadrul unui fișier, pentru a îmbunătăți semnificativ lizibilitatea și structura vizuală a codului.
    *   **Comentarii Utile, Relevante și Concise (Nu Excesive sau Redundante):**
        *   **Comentați Logica Complexă sau Non-Evidentă:** Adăugați comentarii pentru a explica secțiunile de cod a căror funcționalitate nu este imediat evidentă din simpla citire a codului, sau care implementează algoritmi specifici, decizii de design non-triviale, sau workaround-uri pentru anumite probleme. Comentariile ar trebui să explice **"DE CE?"** s-a ales o anumită abordare, nu doar **"CE?"** face codul (ceea ce ar trebui să fie clar din codul însuși dacă este bine scris).
        *   **Evitați Comentariile Redundante:** Nu comentați codul care este deja foarte clar și auto-explicativ (ex: `productCounter++; // Increment product counter`). Astfel de comentarii adaugă "zgomot" și pot deveni rapid depășite.
        *   **Comentarii de Tip `TODO`, `FIXME`, `HACK`:** Folosiți aceste tag-uri standard pentru a marca secțiuni de cod care necesită atenție ulterioară:
            *   `// TODO: Implement full error handling for this API call before Sprint 3 demo.`
            *   `// FIXME: This calculation is incorrect for leap years. Needs to be fixed in next iteration.`
            *   `// HACK: Temporary workaround for Issue DMZ-205. Needs a proper fix.`
            Aceste comentarii trebuie să fie însoțite de o explicație și, ideal, de un link către un tichet Jira, și trebuie revizuite periodic pentru a fi adresate.
        *   **Actualizați Comentariile Împreună cu Codul:** Dacă modificați o secțiune de cod, asigurați-vă că actualizați și comentariile asociate pentru a reflecta noile modificări. Comentariile învechite sau incorecte sunt mai dăunătoare decât lipsa comentariilor.
    *   **Principiul DRY (Don't Repeat Yourself) – Evitarea Duplicării Codului:**
        *   Identificați și eliminați blocurile de cod care sunt identice sau foarte similare și care apar în mai multe locuri.
        *   Refactorizați codul pentru a extrage logica comună în funcții, metode, componente (React), sub-fluxuri (MuleSoft), sub-job-uri (Talend) sau module reutilizabile. Acest lucru îmbunătățește mentenabilitatea, reduce riscul de erori și face codul mai ușor de înțeles.
    *   **Principiul KISS (Keep It Simple, Stupid) – Păstrarea Simplității:**
        *   Întotdeauna căutați și implementați cea mai simplă soluție care funcționează corect și îndeplinește cerințele.
        *   Evitați complexitatea inutilă, supra-ingineria (over-engineering) sau adăugarea de funcționalități care nu sunt cerute (YAGNI - You Ain't Gonna Need It), mai ales în contextul unui MVP cu timp limitat.
    *   **Evitarea Valorilor "Magice" și a String-urilor Hardcodate în Mod Repetitiv:**
        *   Dacă anumite numere (altele decât 0, 1, -1), string-uri sau alte valori literale apar în mai multe locuri în cod și nu au o semnificație evidentă din context, acestea ar trebui definite ca și constante cu nume descriptive, la începutul fișierului/modulului sau într-un fișier de constante dedicat.
        *   *Exemplu (JavaScript):* `const DEFAULT_PAGE_SIZE = 10;` în loc de a folosi `10` direct în mai multe apeluri API.
        *   *Exemplu (MuleSoft DataWeave):* `var DEFAULT_CURRENCY = "RON"`
        *   *Exemplu (Talend):* Utilizarea variabilelor de context pentru astfel de valori.
    *   **Gestionarea Erorilor (Error Handling):** Chiar și pentru MVP, implementați o gestionare de bază a erorilor pentru operațiunile critice (apeluri API, interacțiuni DB, procesare fișiere). Folosiți blocuri `try...catch` (sau echivalentul în limbajul/platforma respectivă), logați erorile și, unde este cazul, returnați mesaje de eroare informative (dar nu expuneți detalii interne sensibile utilizatorului final).

    **6.5.2. Standarde Specifice Detaliate pentru React/JavaScript/TypeScript (Aplicabile pentru Team_2)**
    *   **Utilizarea Linter-elor și a Formatoarelor Automate (Obligatoriu):**
        *   **ESLint:** Va fi configurat în proiectul React (Vite adesea vine cu o configurație de bază). Se va utiliza un set de reguli consistent (ex: `eslint-config-react-app` extins cu `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`). ESLint va fi integrat în VS Code pentru a oferi feedback în timp real și, ideal, va fi rulat ca un pas de pre-commit (folosind Husky și lint-staged – opțional avansat, dar bună practică).
        *   **Prettier:** Va fi configurat ca formator de cod principal pentru JavaScript, TypeScript, JSX, TSX, CSS, JSON și Markdown. Se va crea un fișier de configurare Prettier (`.prettierrc.js` sau `.prettierrc.json`) la rădăcina proiectului React pentru a defini regulile de formatare (ex: lungime linie, utilizare punct și virgulă, ghilimele simple/duble). Prettier va fi integrat în VS Code pentru a formata automat codul la fiecare salvare (opțiunea "Format On Save").
        *   **Fișier `.editorconfig`:** Se va adăuga un fișier `.editorconfig` la rădăcina proiectului React pentru a defini și impune setări de bază pentru editor (stil indentare – spații vs. tab-uri, dimensiune indentare, sfârșit de linie, charset) care sunt preluate automat de majoritatea IDE-urilor, inclusiv VS Code.
    *   **Convenții de Denumire Specifice React și JavaScript/TypeScript:**
        *   **Nume Componente React:** Se va folosi **PascalCase** (UpperCamelCase) pentru numele componentelor funcționale și pentru numele fișierelor care le conțin (ex: `ProductCard.jsx`, `ProductDetailPage.tsx`).
        *   **Nume Variabile și Funcții JavaScript/TypeScript:** Se va folosi **camelCase** (ex: `productPrice`, `isLoading`, `fetchProductDataById`, `handleMetaMaskConnect`).
        *   **Nume Constante:** Se va folosi **SCREAMING_SNAKE_CASE** pentru constantele globale sau la nivel de modul (ex: `const API_BASE_URL = "...";`, `const DEFAULT_TIMEOUT_MS = 5000;`).
        *   **Nume Tipuri și Interfețe (TypeScript):** Se va folosi **PascalCase** (ex: `interface Product { ... }`, `type UserId = string;`).
    *   **Structura Recomandată a Proiectului React:**
        *   Se va adopta o structură de directoare logică și scalabilă în folderul `src/`. O propunere ar fi:
            *   `src/components/`: Pentru componente UI reutilizabile generice (ex: `Button.tsx`, `Spinner.tsx`, `Card.tsx`).
                *   Fiecare componentă în propriul său folder (ex: `src/components/Button/Button.tsx`, `src/components/Button/Button.module.css` dacă se folosesc module CSS).
            *   `src/features/` (sau `src/modules/`): Pentru a grupa componente, hook-uri, servicii și tipuri specifice unei anumite funcționalități majore sau entități (ex: `src/features/products/`, `src/features/metamask/`).
                *   În interiorul unui feature: `components/` (componente specifice feature-ului), `hooks/` (hook-uri custom), `services/` (funcții de apel API), `types/` (definiții TypeScript), `pages/` (componentele de nivel superior pentru rute).
            *   `src/pages/`: Componente de nivel superior care corespund direct rutelor aplicației (ex: `HomePage.tsx`, `ProductListPage.tsx`, `ProductDetailPage.tsx`, `NotFoundPage.tsx`).
            *   `src/hooks/`: Hook-uri React custom reutilizabile la nivel global (ex: `useLocalStorage.ts`).
            *   `src/services/`: Module care encapsulează logica de comunicare cu API-urile externe (MuleSoft), ex: `apiClient.ts` (cu instanța Axios configurată), `productService.ts`.
            *   `src/store/` (dacă se folosește Zustand/Jotai/Context API pentru state global): Pentru definirea store-urilor sau contextelor.
            *   `src/utils/`: Funcții utilitare generice.
            *   `src/assets/`: Imagini statice, fonturi, etc.
            *   `src/types/` (dacă se folosește TypeScript): Definiții de tipuri și interfețe globale.
            *   `App.tsx` (sau `.jsx`): Componenta rădăcină a aplicației, unde se definește de obicei rutarea principală.
            *   `main.tsx` (sau `.jsx`): Punctul de intrare al aplicației, unde se randează componenta `App`.
    *   **Utilizarea Riguroasă a TypeScript (Dacă se Alege):**
        *   Tiparea props-urilor componentelor, a stării (state), a parametrilor funcțiilor și a valorilor returnate.
        *   Definirea de interfețe (`interface`) și tipuri (`type`) clare pentru structurile de date complexe (ex: obiectul `Product`, răspunsurile API de la MuleSoft).
        *   Utilizarea genericelor (`<T>`) acolo unde aduc flexibilitate și type safety.
        *   Minimizarea utilizării tipului `any`.
    *   **Bune Practici Specifice React:**
        *   **Componente Funcționale cu Hook-uri:** Se va folosi exclusiv abordarea modernă cu componente funcționale și hook-uri React. Componentele bazate pe clase sunt considerate depășite.
        *   **Utilizarea Corectă a Cheilor (`key`) în Liste:** Când se randează liste de elemente (ex: folosind metoda `.map()`), fiecare element copil din listă trebuie să aibă un prop `key` unic, stabil și semnificativ (ideal, un ID unic al elementului).
        *   **Imutabilitatea Stării și a Props-urilor:** La actualizarea stării (state) sau la manipularea props-urilor, se vor respecta cu strictețe principiile imutabilității. Nu se vor modifica direct obiectele sau array-urile din state/props. Se vor crea întotdeauna copii noi cu modificările dorite (ex: folosind operatorul spread `...`, metode de array care returnează array-uri noi precum `.map()`, `.filter()`).
        *   **Extragerea Logicii în Hook-uri Custom:** Pentru logica de stare sau efecte secundare care este complexă sau se repetă în mai multe componente, se vor crea hook-uri custom (funcții care încep cu `use...`) pentru a o encapsula și a o face reutilizabilă.
        *   **Gestionarea Efectelor Secundare în `useEffect`:** Se va specifica corect array-ul de dependențe pentru `useEffect` pentru a controla când se re-rulează efectul și pentru a evita bucle infinite sau rulări inutile. Se vor folosi funcțiile de cleanup (returnate de `useEffect`) pentru a curăța subscrieri sau resurse la demontarea componentei.
        *   **Performanță de Bază:** Se va acorda atenție evitării re-randărilor inutile prin utilizarea `React.memo` pentru componentele care nu se schimbă des dacă props-urile lor sunt identice. (Utilizarea `useCallback` și `useMemo` se va face cu discernământ, doar dacă există probleme reale de performanță identificate, deoarece pot adăuga complexitate).

    **6.5.3. Standarde Specifice pentru MicroPython (Aplicabile pentru Team_9)**
    *   **Respectarea Principiilor PEP 8 (Adaptat pentru MicroPython):**
        *   **Indentare:** Se vor folosi exclusiv 4 spații pentru fiecare nivel de indentare. Fără tab-uri.
        *   **Lungimea Liniilor:** Se va încerca menținerea liniilor de cod sub 79 de caractere, pe cât posibil.
        *   **Denumiri:**
            *   Variabile, funcții și metode: `snake_case` (litere mici, cuvinte separate prin underscore, ex: `wifi_ssid`, `connect_to_network()`).
            *   Clase: `PascalCase` (UpperCamelCase, ex: `WifiManager`).
            *   Constante: `SCREAMING_SNAKE_CASE` (majuscule, cuvinte separate prin underscore, ex: `LED_PIN = machine.Pin("LED", machine.Pin.OUT)`).
        *   **Comentarii:** Similare cu standardele generale (comentarii pe o singură linie cu `#`, docstring-uri pentru funcții și clase folosind `"""Docstring"""`).
    *   **Managementul Eficient al Resurselor Limitate (RAM și Flash):**
        *   **Evitarea Alocărilor Mari de Memorie în Bucle:** Fiți atenți la crearea de obiecte mari (liste, string-uri lungi) în interiorul buclelor care rulează frecvent.
        *   **Utilizarea `gc.collect()` Strategic:** Deși MicroPython are un garbage collector, în scripturile care rulează pe termen lung sau care manipulează multă memorie, un apel explicit la `gc.collect()` în puncte strategice poate ajuta la eliberarea memoriei. Nu abuzați de el.
        *   **Minimizarea String Concatenation în Bucle:** Folosi
        *   **Închiderea Resurselor:** Asigurați-vă că resursele precum fișierele (dacă se folosește lucrul cu fișiere pe flash-ul Pico) sau socket-urile de rețea sunt închise corect (`.close()`) după utilizare, preferabil într-un bloc `finally`.
        *   **Optimizarea Dimensiunii Codului:** Pentru scripturi mai mari, se poate folosi compilarea în bytecode (`.mpy`) pentru a reduce dimensiunea pe flash și a îmbunătăți timpul de încărcare (deși pentru acest proiect, scripturile `.py` sunt suficiente).
    *   **Structurarea Codului în Module Logice:**
        *   Pentru scripturi mai complexe decât un simplu "Hello World", împărțiți logica în fișiere `.py` separate (module) care pot fi importate în scriptul principal (`main.py`). De exemplu:
            *   `main.py`: Logica principală de orchestrare a aplicației.
            *   `config.py`: Stocarea constantelor de configurare (SSID, parolă WiFi, URL API). **Acest fișier NU se va versiona pe GitHub (se adaugă în `.gitignore`)**. Se va versiona un `config.py.template`.
            *   `wifi_manager.py`: Funcții pentru gestionarea conexiunii WiFi.
            *   `http_client.py`: Funcții pentru realizarea request-urilor HTTP/HTTPS.
            *   `scanner_interface.py`: Funcții pentru interacțiunea cu scannerul (sau simularea input-ului).
            *   `led_feedback.py`: Funcții pentru controlul LED-urilor.
    *   **Comentarii Clare și Detaliate:** Deoarece depanarea pe un sistem embedded poate fi mai dificilă (fără un debugger vizual la fel de puternic ca pe PC), comentariile clare care explică logica, starea pinilor GPIO, formatul datelor și interacțiunile cu hardware-ul sunt extrem de importante.
    *   **Gestionarea Robustă a Erorilor:** Utilizați blocuri `try...except...finally` pentru a prinde și gestiona excepțiile care pot apărea în operațiuni I/O, conexiuni de rețea sau interacțiuni cu hardware-ul. Logați erorile (prin `print()` către REPL) și încercați să aduceți sistemul într-o stare sigură sau să reîncercați operațiunea (cu limită de reîncercări).

    **6.5.4. Standarde Specifice pentru Limbajul DataWeave (MuleSoft - Aplicabile pentru Team_1)**
    *   **Lizibilitate și Formatare Consistentă:**
        *   **Indentare:** DataWeave este sensibil la indentare (similar cu Python, dar pentru structuri). Folosiți indentarea consistentă (de obicei 2 sau 4 spații, conform formatării automate din Anypoint Studio) pentru a reflecta clar structura logică a transformărilor, a funcțiilor și a obiectelor/array-urilor create.
        *   **Împărțirea Scripturilor Lungi:** Pentru scripturi DataWeave complexe, împărțiți-le pe mai multe linii pentru lizibilitate. Anypoint Studio ajută la formatare.
        *   **Utilizarea Liniilor Goale:** Separați logic secțiuni distincte ale scriptului (ex: declarații de variabile, funcții, mapări principale) cu linii goale.
    *   **Utilizarea Constructivă a Variabilelor (`%var`):**
        *   Folosiți variabile locale (definite cu `%var variableName = expression`) pentru a stoca rezultate intermediare ale unor calcule complexe, pentru a evita repetarea acelorași expresii sau pentru a da nume descriptive unor părți ale transformării, îmbunătățind astfel lizibilitatea și mentenabilitatea scriptului.
    *   **Definirea și Utilizarea Funcțiilor Custom (`%function`):**
        *   Pentru logica de transformare care este complexă, se repetă în mai multe locuri în cadrul aceluiași script DataWeave, sau ar putea fi reutilizabilă în alte scripturi, definiți funcții DataWeave custom (folosind sintaxa `%function functionName(param1, param2) = expression`).
        *   Funcțiile pot fi definite la începutul scriptului sau, pentru o mai bună modularizare în proiecte mai mari (dincolo de MVP), în fișiere DataWeave separate (`.dwl`) care pot fi importate ca module.
    *   **Maparea Explicită vs. Maparea Implicită (Selectori):**
        *   Înțelegeți și utilizați corect atât maparea explicită a câmpurilor (ex: `outputFieldName: payload.inputFieldName`) cât și utilizarea selectorilor DataWeave pentru a naviga și extrage date din structuri complexe (ex: `payload.user.address.street`, `payload.items.*item.price`).
        *   Pentru transformări simple și directe, maparea implicită (ex: `payload mapObject (value, key) -> ...`) poate fi concisă. Pentru transformări complexe sau când numele câmpurilor diferă semnificativ, maparea explicită este adesea mai clară.
    *   **Comentarii Utile în Scripturile DataWeave:**
        *   Folosiți comentarii pe o singură linie (`// comment`) sau comentarii multi-linie (`/* comment */`) pentru a explica logica de transformare complexă, deciziile de mapare non-evidente, sau orice prelucrare specială a datelor.
    *   **Modularizarea Scripturilor DataWeave (Pentru Scripturi Complexe):**
        *   Dacă un script DataWeave devine foarte lung și dificil de urmărit (ex: sute de linii), luați în considerare împărțirea lui în funcții mai mici și mai specializate în cadrul aceluiași script, sau chiar extragerea unor seturi de funcții logice în module DataWeave separate (fișiere `.dwl`) care pot fi importate (`%import dw::module::FunctionsModule`). (Pentru MVP, probabil nu va fi necesară modularizarea avansată, dar e bine de știut).
    *   **Performanță (Considerații de Bază pentru Începători):**
        *   Deși DataWeave este optimizat pentru performanță, fiți conștienți că operațiunile foarte complexe sau iterațiile peste colecții extrem de mari pot avea un impact. Pentru acest MVP, lizibilitatea și corectitudinea sunt prioritare față de micro-optimizările de performanță în DataWeave, dar evitați pe cât posibil logica redundantă sau ineficientă în mod evident.
    *   **Tipuri de Date și Conversii:** Fiți atenți la tipurile de date cu care lucrați în DataWeave (String, Number, Boolean, Object, Array, Date/Time) și folosiți funcțiile de conversie DataWeave (ex: `as String`, `as Number`, `as DateTime`) atunci când este necesar, mai ales la maparea către/dinspre scheme JSON sau la interacțiunea cu baza de date.

    **6.5.5. Standarde Specifice pentru Designul Vizual al Job-urilor Talend (Aplicabile pentru Team_1)**
    *   **Denumiri Clare și Consistente pentru Job-uri și Componente:**
        *   **Nume Job-uri:** Folosiți nume descriptive și standardizate pentru Job-uri, care reflectă scopul lor principal (ex: `Job_01_Migrate_FrenchDB_To_DeviMarketDB_Products`, `Job_02_Consume_MuleExternalProductsAPI_Load_ClickHouse`). Se poate folosi un prefix numeric pentru ordine.
        *   **Label-uri Componente:** Redenumiți label-urile implicite ale componentelor de pe canvas-ul Job Designer pentru a reflecta rolul lor specific în cadrul job-ului (ex: în loc de `tJDBCInput_1`, redenumiți în `Read_French_Products_From_ClickHouse`; în loc de `tMap_1`, redenumiți în `Transform_ProductData_To_InternalSchema`). Acest lucru îmbunătățește semnificativ lizibilitatea design-ului vizual.
    *   **Layout Vizual Curat, Logic și Ușor de Urmărit:**
        *   Aranjați componentele pe canvas-ul Job Designer într-un mod care reflectă clar fluxul de date, de obicei de la stânga la dreapta și/sau de la sus în jos.
        *   Evitați pe cât posibil încrucișările excesive sau inutile ale legăturilor (liniilor) dintre componente. Folosiți puncte de inflexiune (bend points) pentru a aranja legăturile ordonat.
        *   Utilizați componenta "Notes" (comentarii vizuale, disponibile în paleta Talend) pe canvas pentru a adăuga explicații sau pentru a grupa logic secțiuni complexe ale job-ului. Colorați notele pentru a le diferenția.
    *   **Utilizarea Strategică a Metadatelor din Repository-ul Talend:**
        *   Ori de câte ori este posibil și aduce beneficii de reutilizare și consistență, definiți schemele de date (pentru fișiere, baze de date, JSON, etc.) și detaliile de conexiune (pentru baze de date, servere FTP, API-uri REST) în secțiunea "Metadata" din Repository-ul Talend.
        *   În componentele din Job Designer, refolosiți aceste metadate din Repository în loc de a defini schema sau conexiunea "Built-In" de fiecare dată. Acest lucru asigură că, dacă o schemă sau o conexiune se modifică, actualizarea se face într-un singur loc și se propagă automat în toate job-urile care o folosesc.
        *   (Pentru început, în Sprint 2, este acceptabil să se folosească scheme "Built-In" pentru a învăța mai rapid, dar în Sprint 3, pentru job-urile finale, se va încuraja trecerea la utilizarea metadatelor din Repository).
    *   **Concentrarea Logicii de Transformare în `tMap`:**
        *   Componenta `tMap` este extrem de puternică și ar trebui să fie locul principal unde se implementează majoritatea logicii de transformare a datelor (mapare câmpuri, join-uri, filtre, expresii de calcul, căutări lookup).
        *   Documentați expresiile și mapările complexe direct în `tMap`, folosind câmpul de comentarii disponibil pentru fiecare variabilă (`Var`) sau coloană de output.
    *   **Gestionarea Clară a Erorilor și a Fluxurilor de "Rejects":**
        *   Utilizați în mod sistematic legăturile "Rejects" disponibile pe majoritatea componentelor de procesare și output (ex: din `tMap`, `tDBOutput`, `tExtractJSONFields`, `tFileInputDelimited`) pentru a captura și a gestiona rândurile de date care eșuează la validare, transformare sau încărcare.
        *   Direcționați aceste fluxuri de "rejects" către o componentă `tLogRow` (pentru debugging în timpul dezvoltării) și/sau către un fișier text de log de erori distinct (`tFileOutputDelimited`), care să conțină atât datele rândului respins, cât și mesajul de eroare specific (dacă este disponibil).
    *   **Utilizarea Eficientă a Variabilelor de Context și a Context Groups:**
        *   Pentru toți parametrii unui job care se pot schimba între diferite medii de execuție (ex: DEV, TEST, PROD – deși în acest proiect vom avea doar un mediu DEV local) sau între diferite rulări (ex: căi către fișiere sursă/destinație, URL-uri API, credențiale de conectare la baze de date, nume de tabele), utilizați **variabile de context**.
        *   Organizați variabilele de context în **Context Groups** (ex: un grup `DEV_Local_VM`).
        *   În componente, referențiați aceste variabile de context (ex: `context.db_host`, `context.input_file_path`).
        *   (Opțional avansat) Explorați încărcarea valorilor pentru variabilele de context dintr-un fișier extern (`.properties` sau `.txt`) la începutul job-ului.
    *   **Modularizarea Job-urilor cu Subjob-uri (`tRunJob`):**
        *   Pentru job-uri ETL care devin foarte mari și complexe, luați în considerare împărțirea logicii în subjob-uri mai mici, specializate și potențial reutilizabile.
        *   Utilizați componenta `tRunJob` în job-ul principal (master job) pentru a apela aceste subjob-uri în ordinea corectă.
        *   Utilizați mecanismul de transmitere a variabilelor de context către/dinspre subjob-uri pentru a partaja date sau parametri.
        *   (Probabil nu va fi necesară o modularizare extensivă cu `tRunJob` pentru complexitatea MVP-ului, dar este o bună practică de cunoscut).
    *   **Comentarii și Documentație la Nivel de Job:**
        *   Utilizați câmpul "Description" (sau "Documentation") din tab-ul "Job" al proprietăților fiecărui job Talend pentru a adăuga o descriere generală a scopului job-ului, a logicii principale, a surselor și destinațiilor de date, și a oricăror precondiții sau note importante.
        *   Folosiți componenta "Notes" pe canvas pentru a explica secțiuni specifice.

    **6.5.6. Standarde Specifice pentru Scrierea Query-urilor SQL (ClickHouse - Aplicabile pentru Team_1 și Team_7)**
    *   **Formatare SQL Standard și Consistentă:**
        *   **Majuscule pentru Cuvinte Cheie SQL:** Toate cuvintele cheie SQL rezervate (ex: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `ORDER BY`, `LIMIT`, `INSERT INTO`, `VALUES`, `CREATE TABLE`, `ALTER TABLE`, `UPDATE`, `DELETE`, `ENGINE`, `PRIMARY KEY`, etc.) vor fi scrise cu majuscule pentru a le diferenția de numele de tabele și coloane.
        *   **Nume Tabele și Coloane:** Numele de tabele și coloane vor fi scrise cu litere mici și, dacă sunt compuse din mai multe cuvinte, se va folosi convenția `snake_case` (ex: `product_name`, `stock_quantity`, `created_at`), așa cum sunt definite în schema din Capitolul 3.5.
        *   **Indentare Logică:** Clauzele SQL vor fi indentate pentru a reflecta structura logică a query-ului și a îmbunătăți lizibilitatea, mai ales pentru query-uri complexe.
            *   *Exemplu:*
                ```sql
                SELECT
                    id,
                    name,
                    price,
                    category
                FROM
                    devimarket_db.products
                WHERE
                    is_active = 1
                    AND category = 'Electronics'
                ORDER BY
                    price ASC
                LIMIT 10 OFFSET 0;
                ```
    *   **Utilizarea Alias-urilor Explicite pentru Tabele (în Join-uri):** Deși în acest MVP join-urile complexe în ClickHouse vor fi probabil minime (ClickHouse nefiind optimizat pentru join-uri masive ca bazele de date relaționale), dacă se folosesc join-uri, se vor utiliza alias-uri scurte și descriptive pentru tabele pentru a califica numele coloanelor și a evita ambiguitățile (ex: `SELECT p.name, c.category_name FROM products p JOIN categories c ON p.category_id = c.id`).
    *   **Evitarea Strictă a `SELECT *` în Codul Aplicației:**
        *   În query-urile SQL scrise în codul aplicațiilor MuleSoft, în job-urile Talend, sau în orice alt script care interacționează programatic cu baza de date, se vor specifica **explicit** doar coloanele care sunt efectiv necesare pentru operațiunea respectivă.
        *   **NU** se va folosi `SELECT *` decât, cel mult, pentru query-uri ad-hoc de explorare/debugging rulate manual în `clickhouse-client` sau DBeaver.
        *   **Rațiune:** Specificarea explicită a coloanelor îmbunătățește performanța (se transferă mai puține date), reduce consumul de memorie, face codul mai robust la modificări ale schemei tabelului (adăugarea sau ștergerea unor coloane neutilizate nu va strica query-ul) și îmbunătățește lizibilitatea intenției query-ului.
    *   **Comentarii Utile în Scripturile SQL:**
        *   Pentru scripturile SQL mai lungi sau mai complexe (ex: cele din fișierele de inițializare a bazei de date, sau query-uri complexe stocate ca string-uri în cod), se vor folosi comentarii SQL pentru a explica logica.
        *   Comentariu pe o singură linie: `-- Acest comentariu explică următoarea clauză WHERE.`
        *   Comentariu multi-linie (mai puțin comun în ClickHouse, dar posibil): `/* Acest comentariu se poate întinde pe mai multe linii... */`
    *   **Parametrizarea Query-urilor (Crucială în Codul Aplicației):**
        *   În codul MuleSoft (folosind `Database Connector`) și în job-urile Talend (folosind componentele JDBC), toate query-urile SQL care includ valori dinamice (ex: dintr-un payload de request, dintr-o variabilă de flux, dintr-un rând de date sursă) trebuie să fie implementate folosind **query-uri parametrizate** (prepared statements sau echivalentul oferit de conector).
        *   **NU** se va construi NICIODATĂ un string SQL prin concatenarea directă a unor valori externe nevalidate în el. Aceasta este o vulnerabilitate majoră de securitate (SQL Injection).
        *   *Exemplu Conceptual (MuleSoft DataWeave pentru Database Connector):*
            ```dataweave
            // Input: #[payload.productId]
            {
              "sql": "SELECT * FROM devimarket_db.products WHERE id = :productId_param",
              "inputParameters": {
                "productId_param": payload.productId
              }
            }
            ```
        *   *Exemplu Conceptual (Talend `tJDBCInput`):* În câmpul "Query", se scrie ` "SELECT * FROM devimarket_db.products WHERE id = ? " ` și se configurează maparea parametrilor.

    **6.5.7. Standarde Specifice și Bune Practici pentru Dockerfile-uri și Fișiere `docker-compose.yml` (Aplicabile pentru Team_7)**
    *   **Dockerfile-uri (pentru NGINX/React și, opțional, customizare ClickHouse):**
        *   **Utilizarea unei Imagini de Bază Oficiale, Specifice și Minimale:** Întotdeauna se va porni de la o imagine de bază oficială (ex: `node` pentru build React, `nginx` pentru servire, `clickhouse/clickhouse-server`). Se va specifica un **tag de versiune exact** pentru imaginea de bază (ex: `node:18-alpine`, `nginx:1.25-alpine-slim`), **NU** se va folosi `latest` (deoarece `latest` se poate schimba și poate introduce breaking changes neașteptate). Se vor prefera imaginile pe bază Alpine Linux (ex: `alpine`, `alpine-slim`) acolo unde este posibil, pentru a obține imagini Docker finale cât mai mici.
        *   **Optimizarea Numărului de Layer-e și a Cache-ului de Build Docker:**
            *   Se vor combina comenzi `RUN` multiple care sunt logic înrudite într-o singură instrucțiune `RUN` folosind operatorul `&&` și continuarea liniei cu `\`. Acest lucru reduce numărul de layer-e intermediare și dimensiunea imaginii finale.
            *   Se vor ordona instrucțiunile în Dockerfile astfel încât cele care se schimbă cel mai rar (ex: instalarea dependențelor sistem) să fie la început, iar cele care se schimbă cel mai des (ex: copierea codului sursă al aplicației) să fie la final. Aceasta maximizează utilizarea cache-ului de build Docker și accelerează reconstrucțiile.
            *   Se vor curăța fișierele temporare și cache-ul de pachete după operațiunile de instalare, în cadrul aceleiași instrucțiuni `RUN` (ex: `RUN apt-get update && apt-get install -y --no-install-recommends some-package && apt-get clean && rm -rf /var/lib/apt/lists/*`).
        *   **Copiere Selectivă și Utilizarea `.dockerignore`:**
            *   Se va crea un fișier `.dockerignore` la același nivel cu Dockerfile-ul pentru a exclude fișierele și directoarele care nu sunt necesare în contextul de build al imaginii Docker (ex: `.git/`, `node_modules/` dacă se face `npm install` în container, fișiere locale de configurare a IDE-ului, etc.).
            *   În Dockerfile, se vor copia doar fișierele și directoarele strict necesare pentru aplicația din container (ex: întâi se copiază `package.json` și `package-lock.json` și se rulează `npm install`, apoi se copiază restul codului sursă – pentru a beneficia de cache-ul Docker pentru layer-ul de dependențe).
        *   **Rularea Proceselor ca Utilizator Non-Root (Principiul Privilegiului Minim):** Ori de câte ori este posibil și fezabil, aplicațiile din container ar trebui să ruleze cu un utilizator non-root dedicat, nu cu utilizatorul `root`. Acest lucru îmbunătățește securitatea containerului. (Imaginile oficiale NGINX și Node adesea fac asta by default sau oferă mecanisme simple).
        *   **Utilizarea Multi-Stage Builds (Obligatoriu pentru NGINX/React):** Se va folosi un Dockerfile multi-stage pentru a construi aplicația React într-o etapă (folosind o imagine Node.js cu toate uneltele de build) și apoi, într-o a doua etapă, se vor copia doar artefactele de build statice (folderul `dist` sau `build`) într-o imagine NGINX minimală. Aceasta reduce drastic dimensiunea imaginii finale de producție.
        *   **Comentarii Explicative în Dockerfile:** Se vor adăuga comentarii (`# comment`) în Dockerfile pentru a explica scopul fiecărei instrucțiuni majore sau a oricărui pas de configurare mai complex sau non-evident.
        *   **Instrucțiunea `EXPOSE`:** Se va folosi pentru a documenta porturile pe care aplicația din container ascultă, deși nu le publică automat pe host (publicarea se face în `docker-compose.yml` sau cu `docker run -p`).
        *   **Instrucțiunea `CMD` sau `ENTRYPOINT`:** Se va defini comanda default care este executată la pornirea containerului.
    *   **Fișiere `docker-compose.yml`:**
        *   **Versiune Format:** Se va specifica o versiune recentă și stabilă a formatului `docker-compose.yml` în prima linie a fișierului (ex: `version: '3.8'` sau `version: '3.9'`).
        *   **Nume de Servicii Clare și Descriptive:** Se vor folosi nume logice și ușor de înțeles pentru servicii (ex: `clickhouse-server`, `nginx-frontend-server`).
        *   **Indentare Consistentă și Corectă (YAML):** Se va respecta cu strictețe sintaxa YAML, în special indentarea cu 2 spații (NU se folosesc caractere TAB). O indentare incorectă este o sursă comună de erori în `docker-compose`.
        *   **Utilizarea Variabilelor de Mediu și a Fișierelor `.env`:** Pentru valorile configurabile sau sensibile (ex: parole pentru utilizatorii ClickHouse, porturi externe, tag-uri de imagini), se vor utiliza variabile de mediu Docker. Acestea pot fi definite direct în `docker-compose.yml` (pentru valori non-sensibile) sau, preferabil, într-un fișier `.env` plasat la același nivel cu `docker-compose.yml`. Fișierul `.env` va fi adăugat în `.gitignore`. Docker Compose încarcă automat variabilele din acest fișier.
            *   *Exemplu în `.env`*: `CLICKHOUSE_DEFAULT_USER=devimarket_user`
            *   *Exemplu în `docker-compose.yml`*: `environment: [CLICKHOUSE_USER: ${CLICKHOUSE_DEFAULT_USER}]`
        *   **Comentarii Explicative:** Se vor adăuga comentarii (`# comment`) în fișierul `docker-compose.yml` pentru a explica scopul anumitor servicii, configurații de porturi, volume sau setări de rețea mai complexe.
        *   **Definirea Explicită a Rețelelor și Volumelor:** Se vor declara explicit volumele numite și rețelele custom la finalul fișierului `docker-compose.yml` pentru o mai bună gestiune și claritate.

    **6.5.8. Standarde Specifice pentru Fișierele de Configurare NGINX (Aplicabile pentru Team_7)**
    *   **Formatare și Lizibilitate:**
        *   Se va folosi o indentare consistentă (de obicei 4 spații) pentru directivele NGINX și pentru blocurile de configurare (`http`, `server`, `location`).
        *   Directivele se termină cu punct și virgulă (`;`).
        *   Se vor folosi linii goale pentru a separa logic blocurile de configurare.
    *   **Comentarii Explicative:** Se vor adăuga comentarii (liniile care încep cu `#`) pentru a explica scopul blocurilor `server` sau `location` importante, sau a directivelor mai complexe sau mai puțin evidente (ex: logica din `try_files`, setările SSL, headerele custom).
    *   **Modularitate (Utilizarea `conf.d`):** Configurația specifică pentru serverul virtual "DeviMarket Zero" va fi plasată într-un fișier `.conf` separat (ex: `devimarket.conf` sau `default.conf` dacă suprascrie default-ul NGINX) în directorul `/etc/nginx/conf.d/` (sau similar, în funcție de imaginea NGINX). Fișierul principal `nginx.conf` va include (`include /etc/nginx/conf.d/*.conf;`) aceste configurații. Aceasta este o bună practică pentru a menține configurațiile organizate.
    *   **Testarea Sintaxei Configurației:** Înainte de a restarta sau reîncărca serviciul NGINX (sau de a reconstrui imaginea Docker dacă configurația este copiată la build), se va folosi comanda `nginx -t` (rulată în containerul NGINX sau pe un sistem cu NGINX instalat și cu fișierul de configurare disponibil) pentru a verifica sintaxa și corectitudinea fișierelor de configurare. Orice eroare de sintaxă trebuie corectată.
    *   **Evitarea Directivei `if` (dacă e posibil și nu e absolut necesar):** Directiva `if` în NGINX are un comportament uneori surprinzător și este considerată "rea" ("if is evil") în multe contexte. Se va încerca pe cât posibil utilizarea altor directive (ex: `map`, `try_files`, blocuri `location` cu expresii regulate) pentru a implementa logica condițională. Pentru MVP, probabil nu va fi nevoie de `if`-uri complexe.

**6.6. Definition of Done (DoD) Detaliată pentru Task-uri și User Stories – Un Angajament Comun pentru Calitate**

"Definition of Done" (DoD) reprezintă un set de criterii clare, specifice, măsurabile, acceptate și realiste, agreate de întreaga echipă de proiect (studenți și Tutore), care trebuie îndeplinite **în totalitate** pentru ca un task individual, o User Story sau o funcționalitate mai mare să fie considerată complet finalizată și gata de a fi integrată sau demonstrată. DoD este un element fundamental al metodologiilor Agile și servește ca un contract comun pentru calitate, asigurând consistența livrabilelor și eliminând ambiguitățile legate de "ce înseamnă cu adevărat gata".

- **DoD Comună la Nivel de Task Tehnic Individual (ex: implementarea unei funcții, crearea unei componente React simple, configurarea unui flux MuleSoft de bază, scrierea unui script MicroPython, crearea unui Dockerfile):**
  1.  **Cerințe și Criterii de Acceptare Îndeplinite Complet:** Toate cerințele funcționale și tehnice specificate în descrierea task-ului Jira și toate Criteriile de Acceptare asociate acestuia sunt implementate corect și în totalitate. Orice deviere sau problemă a fost discutată și agreată cu Tutorele.
  2.  **Cod/Configurație Scris și Funcțional Local:** Codul sursă (JavaScript, Python, DataWeave, SQL etc.) sau fișierele de configurare (Mule, Talend, Docker, NGINX) au fost scrise și funcționează conform așteptărilor în mediul de dezvoltare local al studentului, fără erori de compilare sau de execuție critice.
  3.  **Standarde de Codare și Formatare Respectate Riguros:** Codul și configurațiile respectă în totalitate standardele de codare, formatare, denumire și comentare definite în Capitolul 6.5 pentru tehnologia specifică. S-au utilizat lintere și formatoare automate acolo unde au fost specificate.
  4.  **Testare Locală Documentată (Minimală) de către Dezvoltator:** Dezvoltatorul a testat temeinic propria muncă local, acoperind cel puțin scenariile pozitive (nominale) și câteva cazuri de eroare de bază. Pașii de testare executați și rezultatele observate pot fi sumarizați într-un comentariu pe task-ul Jira sau în descrierea PR-ului.
  5.  **Comentarii Explicative în Cod (unde este necesar):** Logica complexă, deciziile de design non-triviale sau secțiunile de cod mai puțin evidente sunt comentate clar și concis în limba engleză.
  6.  **Documentația `SETUP_MODUL.md` Actualizată (dacă task-ul afectează procesul de setup/rulare):** Dacă task-ul a implicat instalarea unui nou software, o modificare semnificativă a configurării mediului, sau a modificat pașii necesari pentru a rula modulul, fișierul `SETUP_MODUL.md` relevant a fost actualizat pentru a reflecta aceste schimbări.
  7.  **Versionare Git Corectă și Completă:**
      - Toate modificările relevante sunt pe un **feature branch** dedicat, creat corect din ultima versiune a branch-ului `develop`.
      - Au fost făcute **commit-uri atomice și frecvente**, cu mesaje de commit clare, descriptive și respectând **formatul Conventional Commits** (specificat în 6.2.4).
      - Feature branch-ul local a fost **actualizat cu ultimele modificări din `develop`** (prin `rebase` sau `merge`, conform strategiei agreate) și orice conflicte de merge au fost rezolvate local de către autor.
  8.  **Pull Request (PR) Creat și Gata de Review (dacă task-ul implică artefacte versionate):**
      - Un Pull Request a fost creat pe GitHub de pe feature branch către branch-ul `develop`.
      - PR-ul are un **titlu clar și o descriere extrem de detaliată**, incluzând obligatoriu: link către task-ul Jira, sumarul modificărilor, context (dacă e necesar), pași exacți pentru testarea manuală a funcționalității, impactul potențial și orice probleme cunoscute.
      - **Tutorele (Petrut Constantin)** a fost adăugat ca reviewer obligatoriu. (Opțional) Un peer reviewer a fost adăugat.
  9.  **Fără Erori de Linter sau de Build Automat:** Codul trece toate verificările automate de linter (ESLint, etc.) configurate pentru proiect. Procesul de build (ex: `npm run build` pentru React, build-ul imaginii Docker, compilarea proiectului Mule/Talend dacă e cazul) se finalizează cu succes, fără erori.
  10. **Task Jira Actualizat în Coloana "In Review":** Statusul task-ului în Jira a fost mutat de către student în coloana "In Review", iar în comentariul de actualizare s-a adăugat link-ul către Pull Request-ul de pe GitHub.

- **DoD Extinsă la Nivel de User Story sau Funcționalitate Majoră (care poate cuprinde mai multe task-uri tehnice):**
  1.  **Toate Task-urile Tehnice Asociate sunt "Done":** Toate task-urile tehnice individuale care contribuie la implementarea User Story-ei au îndeplinit DoD-ul lor specific (punctele 1-10 de mai sus).
  2.  **Code Review Completat și Toate Feedback-urile Integrate:** Pull Request-ul (sau PR-urile multiple) asociat(e) User Story-ei a fost revizuit complet de către Tutore (și peer revieweri, dacă au fost). Tot feedback-ul primit a fost analizat, discutat (dacă e necesar) și integrat corect de către autor(i).
  3.  **Pull Request(s) Aprobat(e) Formal:** PR-ul (sau PR-urile) a primit aprobarea formală ("Approve") din partea Tutorelui (și a celorlalți revieweri obligatorii).
  4.  **Merge cu Succes în Branch-ul `develop`:** PR-ul (sau PR-urile) a fost merguit cu succes în branch-ul `develop` (de către Tutore sau de către autor după aprobări), fără conflicte de merge nerezolvate. Feature branch-ul poate fi șters după merge.
  5.  **Testare Funcțională și de Integrare de către QA (dacă este definit un rol QA specific pentru User Story):**
      - Funcționalitatea implementată a fost testată de către QA (Culesca T.M. sau alt student desemnat) conform scenariilor de test relevante (manuale sau cu Postman pentru API-uri).
      - **Nu există bug-uri critice sau majore deschise** legate de această User Story. Orice bug-uri identificate au fost fie corectate și re-testate, fie acceptate de Tutore ca fiind minore și transferate în backlog pentru o iterație viitoare (cu justificare clară).
  6.  **Demonstrație Funcțională de Succes (în Sprint Review sau ad-hoc pentru Tutore):** Funcționalitatea completă a User Story-ei poate fi demonstrată live și funcționează conform așteptărilor într-un mediu de testare/integrare care reflectă cât mai fidel configurația finală (ex: toate componentele Docker pornite, aplicațiile Mule/Talend rulate).
  7.  **Toate Criteriile de Acceptare ale User Story-ei sunt Îndeplinite:** Fiecare criteriu de acceptare specificat în descrierea tichetului Jira al User Story-ei este verificat și confirmat ca fiind satisfăcut.
  8.  **Documentație Tehnică Relevantă Actualizată:** Orice documentație tehnică care este direct impactată de implementarea User Story-ei (ex: specificații API RAML, documentație job Talend, diagrame de arhitectură, `SETUP_MODUL.md`) a fost actualizată pentru a reflecta starea curentă.
  9.  **Acceptarea Formală de către Tutore (în rol de Product Owner Simulat):** Petrut Constantin, acționând ca reprezentant al clientului, confirmă că User Story-a implementată aduce valoarea de business așteptată și este considerată finalizată din perspectiva funcțională.
  10. **Task Jira (User Story) Mutat în Coloana "Done":** Doar după îndeplinirea tuturor criteriilor de mai sus, tichetul User Story din Jira este mutat de către Tutore în coloana finală "Done".

_Notă Importantă: Această Definition of Done este un ghid și un angajament pentru calitate. Tutorele poate decide să o ajusteze sau să adauge criterii specifice pe parcursul proiectului, în funcție de nevoi, dar orice modificare va fi comunicată clar întregii echipe._

---

**7. CERINȚE INIȚIALE SPECIFICE PENTRU STUDENȚI (ACȚIUNI OBLIGATORII ÎNAINTE DE STARTUL EFECTIV AL SPRINTULUI 2)**

Acest capitol definește acțiunile obligatorii și fundamentale pe care fiecare dintre cei 10 studenți trebuie să le finalizeze individual **înainte** de ședința de kick-off a Sprintului 2 (sau, cel târziu, în primele ore ale acestuia, conform indicațiilor precise ale Tutorelui - Petrut Constantin). Completarea cu succes a acestor acțiuni pregătitoare este esențială pentru a asigura că toți participanții la proiectul "DeviMarket Zero" pornesc de la aceeași bază solidă de informații, au acces la instrumentele și resursele necesare, și sunt pregătiți mental și logistic pentru a începe lucrul efectiv la task-urile tehnice din Sprint 2.

**7.1. Citirea Integrală, cu Maximă Atenție și Efort de Înțelegere Aprofundată, a Acestui Document (`README.md` - Versiunea Actuală, Completă)**

- **Responsabilitate:** Fiecare student individual.
- **Descriere Detaliată și Specifică:**
  1.  Fiecare student va aloca un interval de timp dedicat și suficient (estimat la minim 1.5 - 2.5 ore de lectură concentrată, în funcție de viteza individuală de procesare a informației tehnice) pentru a citi **integral, cu maximă atenție și cu un efort conștient de înțelegere** acest document complet de proiect ("DeviMarket Zero - README.md", Versiunea 5.0 - Finală). Aceasta include parcurgerea și asimilarea informațiilor din toate cele 8 capitole, de la Introducere și Fundamentele Proiectului până la Anexe.
  2.  Scopul acestei lecturi aprofundate nu este doar o simplă parcurgere a textului, ci **dezvoltarea unei înțelegeri profunde și clare** a următoarelor aspecte critice:
      - **Viziunea Generală a Proiectului:** Contextul de business, nevoile clientului simulat "GlobalGoods Inc." și obiectivele pe termen lung (chiar dacă MVP-ul acoperă doar o parte).
      - **Arhitectura Tehnică Completă:** Rolul și interacțiunile dintre toate componentele majore: Frontend React, Platforma API Centrală MuleSoft, Procesele ETL Talend, Baza de Date ClickHouse, Sistemul de Scanare RPi Pico, Infrastructura Docker și serverul NGINX.
      - **Rolul Specific și Responsabilitățile Detaliate Alocate Propriei "Parent Team":** O înțelegere clară a modulelor tehnice la care va contribui direct și a tehnologiilor specifice pe care va trebui să le învețe și să le aplice.
      - **Interdependențele cu Alte Echipe:** Identificarea modulelor și echipelor de care depinde munca proprie și a celor care depind de livrabilele proprii.
      - **Planul General pe Sprinturi:** Obiectivele fiecărui sprint și, în special, obiectivele și task-urile detaliate pentru Sprint 2.
      - **Metodologia de Lucru Agile:** Procesele de Sprint Planning, Daily Stand-up (dacă se aplică), Sprint Review, Sprint Retrospective.
      - **Standardele Git și GitHub:** Fluxul de lucru cu branch-uri, Pull Request-uri, Code Reviews, mesaje de commit.
      - **Standardele de Codare și Documentare:** Așteptările privind calitatea codului și a documentației.
      - **Definition of Done (DoD):** Criteriile care definesc când un task este considerat finalizat.
  3.  Pe parcursul acestei lecturi atente și reflexive, fiecare student este puternic încurajat și responsabil să își **noteze în mod activ** (digital sau pe hârtie) orice nelămurire, întrebare de clarificare (oricât de "simplă" ar părea), aspect tehnic neclar, potențială problemă identificată sau chiar sugestie de îmbunătățire a documentului sau a proiectului.
- **Criterii de Acceptare / Deliverable pentru Acest Task:**
  - Fiecare student poate demonstra (printr-o discuție cu Tutorele sau prin răspunsuri la întrebări) o înțelegere solidă a obiectivelor generale ale proiectului, a arhitecturii principale și a rolului său specific în cadrul echipei și al proiectului.
  - Fiecare student a pregătit o listă personală, scrisă, conținând minim 2-3 (sau mai multe, dacă este cazul) întrebări de clarificare pertinente și specifice, sau puncte de discuție pentru ședința de kick-off a Sprintului 2 (conform task-ului 7.2). Dacă, după o citire atentă, studentul consideră că toate aspectele sunt perfect clare, va pregăti o confirmare în acest sens, poate cu 1-2 observații sau aspecte pe care le consideră deosebit de importante.
  - Confirmarea verbală (sau printr-un mesaj pe canalul de comunicare agreat) către Tutore, la începutul ședinței de kick-off a Sprintului 2, că acest document a fost citit integral și că s-a depus un efort serios pentru înțelegerea sa.

**7.2. Pregătirea Activă a Întrebărilor de Clarificare și a Punctelor de Discuție pentru Ședința de Kick-off a Sprintului 2**

- **Responsabilitate:** Fiecare student individual.
- **Descriere Detaliată și Specifică:**
  1.  Bazându-se pe notițele și observațiile făcute în timpul lecturii aprofundate a documentului de proiect (task 7.1), fiecare student va compila și va structura o listă finală de întrebări specifice, nelămuriri sau sugestii pe care dorește să le adreseze Tutorelui (Petrut Constantin) în cadrul ședinței de kick-off a Sprintului 2.
  2.  Aceste întrebări ar trebui să fie cât mai **specifice și la obiect** posibil. Ele pot viza:
      - Clarificări privind cerințele funcționale ale MVP-ului sau ale unor module specifice.
      - Detalii suplimentare despre arhitectura tehnică sau interacțiunea dintre componente.
      - Nelămuriri legate de tehnologiile specifice care trebuie utilizate (ex: "Pentru conectarea Talend la ClickHouse, ce versiune de driver JDBC este recomandată și de unde o putem descărca în siguranță?").
      - Aspecte legate de rolurile și responsabilitățile individuale sau ale echipei.
      - Clarificări privind procesele de lucru (Agile, Git, Jira, Code Review).
      - Detalii despre task-urile specifice alocate pentru Sprint 2.
      - Orice alt aspect al proiectului care nu este pe deplin înțeles.
  3.  Scopul fundamental al acestui task este de a transforma ședința de kick-off într-o sesiune Q&A interactivă și extrem de productivă, care să elimine orice ambiguitate majoră de la bun început și să asigure că toți studenții pornesc în Sprint 2 cu o înțelegere comună și corectă.
- **Criterii de Acceptare / Deliverable pentru Acest Task:**
  - Fiecare student deține o listă scrisă (digital sau pe hârtie, ușor accesibilă în timpul ședinței) cu întrebările și punctele de discuție pregătite.
  - Fiecare student participă activ și asertiv (dar politicos) la sesiunea Q&A din cadrul ședinței de kick-off, adresând întrebările sale și contribuind la discuții.

**7.3. Trimiterea Email-ului Formal către Tutore (Petrut Constantin) pentru Solicitarea Accesului la Repository-ul GitHub al Proiectului "DeviMarket Zero" (Conform Template-ului Specificat)**

- **Responsabilitate:** Fiecare student individual.
- **Descriere Detaliată și Specifică:**
  1.  După ce a parcurs integral acest document (task 7.1) și și-a pregătit întrebările de clarificare (task 7.2), și **înainte** de începerea efectivă a lucrului la task-urile tehnice din Sprint 2 (care necesită clonarea repository-ului), fiecare student va compune și va trimite un email formal către Tutore (Petrut Constantin), la adresa de email care va fi comunicată de acesta.
  2.  Email-ul trebuie să fie redactat **cu maximă atenție și exactitate, respectând întocmai template-ul** furnizat în **Anexa 8.2** ("Template Email pentru Solicitarea Accesului la Repository-ul GitHub al Proiectului") a acestui document. Este crucial ca toate informațiile solicitate în template să fie completate corect.
  3.  Informațiile **obligatorii** care trebuie incluse în email (conform template-ului) sunt:
      - Un subiect standardizat și clar, care să permită Tutorelui identificarea rapidă a solicitării (ex: `Solicitare Acces GitHub Proiect DeviMarket Zero - Popescu Ion`).
      - În corpul email-ului: numele complet al studentului și, cel mai important, **username-ul GitHub exact și corect** al studentului (cel pe care îl va folosi pentru a colabora la proiect).
      - O solicitare politicoasă și formală pentru acordarea accesului de tip "colaborator" (sau un nivel similar care permite clonarea, crearea de branch-uri și Pull Request-uri) la repository-ul/repository-urile GitHub dedicate proiectului "DeviMarket Zero" (numele exact al repository-ului va fi comunicat de Tutore, ex: `DeviMarketZero-Practice-FullProject`).
  4.  Acest email servește drept notificare formală și oficială către Tutore și centralizează informațiile esențiale (în special username-ul GitHub) necesare pentru ca Tutorele să poată acorda rapid și corect accesul la codul sursă al proiectului.
  5.  **Notă Importantă:** Deoarece s-a specificat că studenții au deja acces la instanța Jira a Devidevs.com și la proiectul "DeviMarket Zero" din Jira, **NU mai este necesară crearea unui tichet Jira specific pentru solicitarea accesului GitHub.** Acest email este suficient și este procesul agreat pentru solicitarea accesului la repository-ul de cod.
- **Criterii de Acceptare / Deliverable pentru Acest Task:**
  - Un email, redactat conform template-ului și conținând toate informațiile solicitate (în special username-ul GitHub corect), a fost trimis cu succes către Tutore (Petrut Constantin) de către fiecare student.
- **Acțiune Ulterioară din Partea Tutorelui (Petrut Constantin):**
  - După recepționarea acestor email-uri, Petrut Constantin va procesa solicitările în cel mai scurt timp posibil.
  - Va acorda fiecărui student (pe baza username-ului GitHub furnizat) permisiunile necesare (ex: rol de colaborator) pe repository-ul/repository-urile GitHub ale proiectului.
  - Va anunța întreaga echipă (pe canalul principal de comunicare) atunci când accesul la GitHub a fost acordat tuturor, permițând astfel studenților să cloneze repository-ul și să înceapă efectiv lucrul la task-urile de setup din Sprint 2 care implică interacțiunea cu codul (ex: crearea fișierelor `SETUP_MODUL.md`, commit-uirea exemplelor "Hello World").

Finalizarea cu succes, la timp și cu atenție la detalii a acestor trei acțiuni inițiale de către fiecare student este **obligatorie și reprezintă o precondiție** pentru un start organizat, eficient și aliniat al Sprintului 2 și, implicit, al întregului proiect "DeviMarket Zero".

---

**8. ANEXE (TEMPLATE-URI ȘI RESURSE UTILE)**

Acest capitol final al documentului conține template-uri standardizate pentru diverse comunicări și documente, precum și liste de resurse de învățare recomandate. Scopul acestor anexe este de a asigura consistența în comunicare și documentare, de a economisi timp și de a oferi studenților puncte de plecare solide și de calitate pentru procesul lor de auto-învățare și pentru realizarea task-urilor.

**8.1. Exemplu Template Detaliat și Comprehensiv pentru Fișierul `SETUP_MODUL.md`**

Fiecare echipă (sau student individual, dacă lucrează la un sub-modul distinct) responsabilă pentru dezvoltarea și întreținerea unui modul tehnic major (ex: MuleSoft APIs, Talend Jobs, React Frontend, RPi Pico Script, Docker Infrastructure) va crea și va actualiza constant un fișier `SETUP_MODUL.md` în directorul corespunzător al modulului său pe GitHub. Acest fișier este **crucial** și trebuie să fie un ghid "la cheie", extrem de detaliat, permițând oricărui alt membru al echipei (inclusiv Tutorelui sau unui student nou venit ipotetic) să instaleze, configureze și să ruleze o versiune de bază ("Hello World" sau funcționalitate minimă) a modulului respectiv pe un VM Ubuntu proaspăt, fără a necesita asistență suplimentară extinsă.

# SETUP_MODUL.MD: Ghid Complet de Instalare, Configurare și Rulare Inițială pentru Modulul [Numele Exact și Clar al Modulului, ex: MuleSoft Anypoint Studio și Aplicația API Scanner]

**Nume Modul:** [Reiterați Numele Modulului]
**Echipa Responsabilă:** [Numele Echipei, ex: Team_1 - MuleSoft & Talend]
**Autori Document:** [Numele Studenților care au contribuit la acest document]
**Versiune Document:** 1.0 (Sprint 2)
**Data Ultimei Actualizări:** YYYY-MM-DD (ex: 2025-05-30)

## 1. Scopul și Descrierea Generală a Modulului

- **1.1. Rolul Modulului în Arhitectura "DeviMarket Zero":**
  - O descriere clară și concisă (2-4 fraze) a responsabilităților principale ale acestui modul în cadrul arhitecturii generale a proiectului.
  - Cum interacționează acest modul cu alte module/componente (intrări, ieșiri, dependențe).
  - _Exemplu pentru MuleSoft API Scanner: "Acest modul, dezvoltat în MuleSoft Anypoint Studio, este responsabil pentru expunerea unui API HTTPS securizat (/api/scanner/product_scan) care primește date (cod de bare și timestamp) de la sistemul de scanare Raspberry Pi Pico W. Logica implementată în MuleSoft validează aceste date și realizează operațiunea de 'upsert' (creare sau actualizare) a produsului corespunzător în baza de date ClickHouse (`devimarket_db.products`)."_
- **1.2. Tehnologii Principale Utilizate în Modul:**
  - Listarea tehnologiilor, platformelor și bibliotecilor cheie utilizate pentru dezvoltarea acestui modul (ex: MuleSoft Anypoint Studio v7.x, Mule Runtime v4.x, DataWeave 2.x, RAML 1.0, JDK 11, ClickHouse JDBC Driver vX.Y.Z).

## 2. Cerințe de Sistem și Software Necesar (Prerequisites)

- Listă exhaustivă a întregului software care trebuie să fie instalat și configurat pe mașina virtuală Ubuntu pentru a putea dezvolta, rula și testa acest modul. Includeți versiunile specifice testate și, acolo unde este posibil, link-uri oficiale de download sau comenzi de instalare.

- **2.1. Sistem de Operare:**
  - Ubuntu Linux: Versiunea [ex: 22.04 LTS] (versiunea standard agreată pentru proiect).
- **2.2. Java Development Kit (JDK) (dacă este necesar pentru modul, ex: MuleSoft, Talend):**
  - Versiune Specifică Recomandată/Testată: [ex: OpenJDK 11.0.x] (Menționați dacă este critică o anumită distribuție sau update).
  - Comandă de Instalare pe Ubuntu (Exemplu): `sudo apt update && sudo apt install openjdk-11-jdk`
  - Verificare Instalare: `java -version`, `javac -version`
  - Configurare `JAVA_HOME` (dacă este necesară pentru unealtă): [Pași detaliați, vezi exemplul din Anexa 8.1 a README principal]
- **2.3. [Nume Platformă/IDE Specific Modulului, ex: MuleSoft Anypoint Studio]:**
  - Versiune Specifică Recomandată/Testată: [ex: Anypoint Studio 7.15.x]
  - Link Oficial de Download: [URL către pagina oficială de download MuleSoft/Talend etc.]
  - Eventuale Dependențe Specifice ale Platformei (altele decât JDK, ex: Maven dacă proiectul Mule e Maven-based și nu vine cu Maven embedat).
- **2.4. [Nume Bază de Date Client/GUI, ex: DBeaver Community Edition]:** (dacă modulul interacționează direct cu DB și este util pentru testare/verificare)
  - Versiune: [ex: Ultima versiune stabilă]
  - Link Download: [URL]
  - Driver JDBC Necesar (ex: ClickHouse JDBC Driver): [Nume fișier JAR, versiune, și de unde se descarcă]
- **2.5. [Nume Unelte de Testare, ex: Postman Desktop App]:** (dacă modulul expune API-uri)
  - Versiune: [ex: Ultima versiune stabilă]
  - Link Download: [URL]
- **2.6. Git Client (Linie de Comandă):**
  - Versiune: [ex: 2.34.x sau mai recentă]
  - Comandă Instalare (Ubuntu): `sudo apt install git`
  - Configurare Inițială (dacă nu s-a făcut deja): `git config --global user.name "Nume Prenume"`, `git config --global user.email "email@example.com"`
- **2.7. (Opțional) Editor de Text / IDE Suplimentar (ex: Visual Studio Code):**
  - Pentru editarea fișierelor de configurare, scripturi, documentație Markdown.
- _(Adăugați orice alt software specific, bibliotecă sau unealtă care este absolut necesară pentru acest modul și nu este inclusă în distribuția standard Ubuntu sau în platforma principală a modulului)._

## 3. Pași Detaliați de Instalare și Configurare a Mediului de Dezvoltare pentru Modul

- Aceasta este secțiunea cea mai importantă a documentului. Descrieți **pas cu pas, într-un mod extrem de clar, precis și ușor de urmărit de către un începător**, întregul proces de instalare și configurare a fiecărui element software listat la secțiunea 2.
- Includeți **comenzile exacte** care trebuie rulate în terminalul Ubuntu.
- Furnizați **capturi de ecran relevante** (screenshots) pentru pașii critici de configurare din interfețele grafice (ex: configurarea unui nou proiect în Anypoint Studio, adăugarea unui driver JDBC în Talend, setările unui HTTP Listener în MuleSoft).
- Specificați orice **configurare specifică** necesară pentru ca software-ul să funcționeze corect în contextul proiectului "DeviMarket Zero" (ex: setarea unor variabile de mediu specifice, configurarea porturilor, crearea de workspace-uri/proiecte inițiale).
- Anticipați posibilele probleme și oferiți soluții sau sfaturi.

  **3.1. Instalarea și Configurarea [Nume Software 1, ex: Java Development Kit (JDK) Versiunea X.Y.Z]** 1. **Descărcare (dacă nu e din `apt`):** [Link direct sau instrucțiuni de navigare pe site]. 2. **Comandă Instalare:** `sudo apt install openjdk-X-jdk` (sau pașii pentru arhiva descărcată). 3. **Verificare Versiune:** `java -version`. Output așteptat: `openjdk version "X.Y.Z" ...` 4. **Configurare `JAVA_HOME` și `PATH` (dacă este necesar pentru platforma specifică modulului):**
  _ Identificarea căii de instalare a JDK (ex: `update-alternatives --config java` poate ajuta).
  _ Editarea fișierului `~/.bashrc` (ex: cu `nano ~/.bashrc`).
  _ Adăugarea liniilor (exemplu):
  `bash
            export JAVA_HOME=/usr/lib/jvm/java-X-openjdk-amd64  # Ajustați calea exactă!
            export PATH=$JAVA_HOME/bin:$PATH
            `
  _ Salvarea fișierului și aplicarea modificărilor: `source ~/.bashrc`. \* Verificarea variabilelor: `echo $JAVA_HOME`, `echo $PATH`.

  **3.2. Instalarea și Configurarea [Nume Platformă/IDE Specific Modulului, ex: MuleSoft Anypoint Studio Versiunea A.B.C]** 1. **Descărcare Arhivă:** Descărcați arhiva Anypoint Studio (ex: `AnypointStudio-A.B.C-linux64.tar.gz`) de la [Link-ul oficial MuleSoft]. 2. **Creare Director de Instalare:** `mkdir -p ~/Applications/MuleSoft` (sau altă locație preferată). 3. **Dezarhivare:** `tar -xzf /calea/catre/AnypointStudio-A.B.C-linux64.tar.gz -C ~/Applications/MuleSoft/` 4. **Prima Lansare și Configurare Workspace:**
  _ Navigați în directorul de instalare: `cd ~/Applications/MuleSoft/AnypointStudio/`
  _ Lansați Anypoint Studio: `./AnypointStudio` (Poate fi util să creați un shortcut pe Desktop).
  _ La prima lansare, vi se va solicita să selectați un director pentru workspace. Alegeți o locație (ex: `~/MuleWorkspace_DeviMarket`). Bifați "Use this as the default and do not ask again" dacă doriți.
  _ _(Captură de ecran a dialogului de selecție workspace)._ 5. **Verificare Inițială:** Asigurați-vă că Anypoint Studio pornește complet, fără erori majore în consola internă sau în pop-up-uri. Familiarizați-vă cu perspectiva "Mule Design". 6. **(Dacă este necesar pentru ClickHouse) Adăugare Driver JDBC ClickHouse în Proiectele Mule:** Acest pas va fi probabil relevant la crearea primului proiect Mule care interacționează cu DB în Sprint 3, dar menționarea aici a necesității driverului este utilă. Pașii vor fi:
  _ Descărcați JAR-ul driverului JDBC ClickHouse (ex: `clickhouse-jdbc-VERSION-all.jar`).
  _ Pentru fiecare proiect Mule care necesită acces la ClickHouse: Adăugați JAR-ul la build path-ul proiectului (ex: prin `pom.xml` dacă proiectul e Maven, sau manual prin "Add External JARs" în proprietățile proiectului, secțiunea "Java Build Path" > "Libraries").

  _(Continuați cu pași similari, extrem de detaliați, pentru fiecare software listat în secțiunea 2 a acestui template, incluzând Talend Open Studio, Docker, Docker Compose, Thonny IDE, configurarea inițială a proiectelor, etc., specific pentru modulul documentat)._

## 4. Clonarea Repository-ului Proiectului și Setup-ul Inițial al Modulului Specific

- Descrieți cum se obține codul sursă al întregului proiect "DeviMarket Zero" (dacă nu s-a făcut deja) și apoi cum se navighează sau se importă componenta specifică acestui modul în IDE-ul relevant.

1.  **Clonarea Monorepo-ului Principal (dacă nu este deja clonat):**
    - Deschideți un terminal pe VM Ubuntu.
    - Navigați la directorul unde doriți să stocați proiectele de practică (ex: `cd ~/Practice_Devidevs`).
    - Rulați comanda: `git clone [URL-ul complet al repository-ului GitHub DeviMarketZero-Practice-FullProject]`
    - Navigați în directorul proiectului clonat: `cd DeviMarketZero-Practice-FullProject/`
2.  **Navigarea la Directorul Modulului:**
    - Navigați la sub-directorul specific acestui modul, conform structurii definite în README-ul principal (ex: `cd team1_integrations/mulesoft_apis/devi_market_scanner_api/` pentru un proiect MuleSoft).
3.  **Setup Specific Proiectului în IDE (Exemple):**
    - **Pentru un Proiect MuleSoft (import în Anypoint Studio):**
      1.  În Anypoint Studio, selectați `File > Import...`.
      2.  În dialogul de import, alegeți `Anypoint Studio > Anypoint Studio Project from File System` (dacă proiectul există deja ca structură de foldere în repo) sau `Maven > Existing Maven Projects` (dacă proiectul Mule este structurat ca un proiect Maven și are un `pom.xml` la rădăcină – aceasta este practica recomandată).
      3.  Navigați la directorul rădăcină al proiectului Mule specific (ex: `.../devi_market_scanner_api/`) și finalizați procesul de import.
      4.  Verificați în "Package Explorer" că proiectul a fost importat corect și că nu există erori de build inițiale.
    - **Pentru un Job Talend (import în Talend Open Studio):**
      1.  În Talend Open Studio, în view-ul "Repository", dați click dreapta pe "Job Designs".
      2.  Selectați "Import items".
      3.  În dialogul de import, navigați la locația unde se află fișierele exportate ale job-ului Talend (de obicei o arhivă `.zip` sau un director care conține fișierele `.item`, `.properties`, `.screenshot`). Selectați arhiva sau directorul rădăcină.
      4.  Selectați item-urile de importat și finalizați procesul. Verificați că job-ul apare corect în "Job Designs".
    - **Pentru un Proiect React (deschidere în VS Code):**
      1.  Deschideți Visual Studio Code.
      2.  Selectați `File > Open Folder...` și navigați la directorul rădăcină al aplicației React (ex: `.../team2_react_frontend/devi-market-frontend/`).
      3.  Deschideți un terminal integrat în VS Code (`Terminal > New Terminal`).
      4.  Rulați comanda `npm install` (sau `yarn install`) pentru a descărca și instala toate dependențele de proiect listate în `package.json`. Acest pas este crucial.

## 5. Rularea Exemplului "Hello World" sau a Funcționalității de Bază (Specific Sprintului 2)

- Descrieți **exact**, pas cu pas, comenzile și acțiunile necesare pentru a rula exemplul minimal "Hello World" sau operațiunea de bază care a fost definită ca livrabil pentru acest modul în cadrul Sprintului 2 (conform detaliilor din Capitolul 5.2 al README-ului principal). Includeți orice configurare prealabilă specifică rulării (ex: pornirea altor servicii de care depinde, cum ar fi containerul ClickHouse).

  **5.1. Rularea Exemplului "Hello World" API în MuleSoft (Exemplu Specific)** 1. Asigurați-vă că proiectul Mule `sprint2_helloworld_api` (sau numele relevant) este importat corect și deschis în Anypoint Studio. 2. În Package Explorer, dați click dreapta pe fișierul XML principal al fluxului (ex: `hello-devi-market-flow.xml`) sau pe proiectul în sine. 3. Selectați `Run As > Mule Application`. 4. Monitorizați consola Anypoint Studio. Așteptați până când vedeți mesajul care indică faptul că aplicația a fost "DEPLOYED" cu succes și că `HTTP Listener`-ul a pornit (de obicei, pe portul 8081). Notați orice erori apar în consolă. 5. Deschideți aplicația Postman (sau un browser web). 6. Creați un nou request GET către URL-ul: `http://localhost:8081/api/hello` (sau portul și calea exactă configurate în `HTTP Listener`-ul din fluxul Mule). 7. Trimiteți request-ul. 8. **Output Așteptat (în Postman/Browser):**
  _ Status Code HTTP: `200 OK`
  _ Response Body (JSON): `{"message": "Salut de la API-ul MuleSoft pentru DeviMarket Zero!"}` (sau mesajul exact implementat). 9. **Output Așteptat (în Consola Anypoint Studio):** Ar trebui să vedeți mesajul logat de componenta `Logger` din fluxul Mule (ex: "Request primit la /api/hello"). 10. Pentru a opri aplicația Mule, click pe iconița roșie "Terminate" din view-ul Console sau Debug.

  _(Continuați cu pași similari, extrem de detaliați și specifici, pentru rularea exemplelor "Hello World" pentru Talend, React, Scriptul MicroPython, pornirea containerelor Docker cu ClickHouse și NGINX, și testarea lor inițială, așa cum sunt ele definite ca livrabile pentru Sprint 2 în Capitolul 5.2)._

## 6. Troubleshooting / Probleme Comune Întâmpinate și Soluții Specifice Modulului

- O listă proactivă de probleme comune care ar putea apărea în timpul instalării, configurării, build-ului sau rulării acestui modul specific, împreună cu soluțiile testate și validate de echipă. Această secțiune va crește pe măsură ce echipa întâmpină și rezolvă probleme.

- **Problemă 1 (Exemplu MuleSoft):** Anypoint Studio nu pornește sau afișează o eroare la pornire legată de versiunea JDK.
  - **Cauză Posibilă:** Variabila de mediu `JAVA_HOME` nu este setată corect, sau este setată la o versiune JDK incompatibilă cu versiunea Anypoint Studio instalată. Anypoint Studio poate avea cerințe specifice (ex: JDK 11, nu JDK 17 pentru anumite versiuni).
  - **Soluție Verificată:**
    1.  Verificați documentația oficială a versiunii Anypoint Studio instalate pentru a confirma cerințele exacte de JDK.
    2.  Asigurați-vă că versiunea corectă de JDK este instalată (vezi Secțiunea 3.1 a acestui document).
    3.  Verificați și corectați (dacă e necesar) setarea variabilei `JAVA_HOME` în `~/.bashrc` și asigurați-vă că `$JAVA_HOME/bin` este în `PATH`. Rulați `source ~/.bashrc`.
    4.  (Pentru Anypoint Studio) Puteți edita fișierul `AnypointStudio.ini` (din directorul de instalare Anypoint Studio) și să specificați explicit calea către `javaw.exe` sau `java` din JDK-ul corect folosind parametrul `-vm`.

- **Problemă 2 (Exemplu Talend):** Job-ul Talend eșuează cu o eroare "Driver not found" la conectarea la ClickHouse, deși JAR-ul driverului JDBC a fost adăugat.
  - **Cauză Posibilă:** Talend nu a încărcat corect driverul, sau clasa driverului specificată în configurația conexiunii JDBC este incorectă.
  - **Soluție Verificată:**
    1.  Închideți și redeschideți Talend Open Studio după adăugarea JAR-ului driverului în `lib/java` sau prin `Modules view`.
    2.  Verificați în `Modules view` că JAR-ul driverului ClickHouse este listat și bifat (are o pictogramă verde).
    3.  În configurația conexiunii JDBC din Talend Metadata, asigurați-vă că "Driver JAR" este selectat corect și că "Class Name" este exact cel specificat de documentația driverului ClickHouse JDBC (ex: `com.clickhouse.jdbc.ClickHouseDriver` sau `ru.yandex.clickhouse.ClickHouseDriver` pentru drivere mai vechi).

- **Problemă 3 (Exemplu React/Vite):** Serverul de dezvoltare Vite (`npm run dev`) pornește, dar pagina din browser este goală sau afișează erori în consolă legate de Tailwind CSS.
  - **Cauză Posibilă:** Configurarea Tailwind CSS în `tailwind.config.js` (secțiunea `content`) nu include corect căile către fișierele `jsx/tsx` unde sunt folosite clasele Tailwind, sau directivele `@tailwind` nu sunt adăugate corect în fișierul CSS principal.
  - **Soluție Verificată:**
    1.  Verificați cu atenție conținutul fișierului `tailwind.config.js`, în special array-ul `content`. Asigurați-vă că include cel puțin: `'./index.html', './src/**/*.{js,ts,jsx,tsx}'`.
    2.  Verificați că fișierul CSS principal (de obicei `src/index.css` sau `src/main.css`) importat în `main.tsx`/`main.jsx` conține la început directivele:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    3.  Opriți și reporniți serverul de dezvoltare Vite (`Ctrl+C` apoi `npm run dev`).

- _(Adăugați orice alte probleme și soluții specifice descoperite și validate de echipă pe parcursul Sprintului 2 și ulterior)._

## 7. Contact și Suport pentru Acest Modul

- Pentru întrebări specifice, nelămuriri sau probleme legate direct de instalarea, configurarea sau funcționarea acestui modul, membrii echipei care pot oferi suport sunt:
  - [Nume Student 1 din Echipa Responsabilă] - (Poate menționa o arie de expertiză specifică în cadrul modulului)
  - [Nume Student 2 din Echipa Responsabilă] - (...)
  - [Nume Student 3 din Echipa Responsabilă] - (...)
- Pentru probleme generale de proiect, blocaje majore sau decizii arhitecturale, contactați întotdeauna Tutorele (Petrut Constantin) prin canalele de comunicare stabilite.

8.2. Template Email pentru Solicitarea Accesului la Repository-ul GitHub al Proiectului "DeviMarket Zero" (Actualizat)
Către: [Adresa de email a lui Petrut Constantin care va fi comunicată]
Subiect: Solicitare Acces GitHub Proiect DeviMarket Zero - [Numele Tău Complet așa cum apare în lista de studenți]
Corpul Email-ului:
Stimate Domnule Petrut Constantin,

Subsemnatul/a [Numele Tău Complet așa cum apare în lista de studenți], student(ă) în cadrul programului de practică Devidevs.com pentru proiectul "DeviMarket Zero", vă scriu pentru a solicita accesul la resursele de cod ale proiectului.

Am citit și am analizat documentul de prezentare generală a proiectului (README.md - Versiunea 5.0) și sunt pregătit(ă) să încep activitățile planificate pentru Sprint 2.

Pentru a putea clona repository-ul și a începe lucrul la task-urile de setup și "Hello World", vă rog să îmi acordați permisiunile necesare (nivel "colaborator" sau echivalent, care să permită cel puțin clonarea, crearea de branch-uri și trimiterea de Pull Request-uri) pe repository-ul GitHub principal dedicat proiectului "DeviMarket Zero" (ex: `DeviMarketZero-Practice-FullProject`, numele exact va fi confirmat de dumneavoastră).

**Username-ul meu GitHub este: [Introduceți AICI Username-ul Dvs. GitHub Exact și Corect - ACESTA ESTE FOARTE IMPORTANT!]**

Confirm că am deja acces la proiectul "DeviMarket Zero (DMZ)" în platforma Jira a companiei.

Vă mulțumesc anticipat pentru timpul și sprijinul acordat. Aștept cu nerăbdare confirmarea accesului pentru a putea începe.

Cu deosebită considerație,

[Numele Tău Complet]
[Team-ul din care faci parte, ex: Team_1]
[Eventual, Grupa/Anul de studiu, dacă este solicitat de Tutore]

8.3. Lista de API-uri Externe Gratuite Sugerate pentru Integrare (Responsabilitate Team_1 - MuleSoft pentru a alege și integra unul)
(Această secțiune rămâne identică în conținut cu cea din versiunea anterioară, Versiunea 4.1, oferind aceleași sugestii de API-uri: FakeStoreAPI, DummyJSON, Open Food Facts API, CoGecko API, și nota privind decizia finală).
**8.3.1. FakeStoreAPI**

- **URL Principal:** `https://fakestoreapi.com/`
- **Endpoint Produse:** `https://fakestoreapi.com/products` (GET)
- **Descriere:** Oferă date JSON simple despre produse generice (electronice, bijuterii, îmbrăcăminte bărbați/femei). Include nume, preț, descriere, categorie, imagine URL, rating.
- **Avantaje:** Foarte simplu de utilizat, nu necesită autentificare, structură JSON clară. Bun pentru un prim exercițiu de integrare API.
- **Dezavantaje:** Număr limitat de produse (20). Datele sunt statice.

**8.3.2. DummyJSON**

- **URL Principal:** `https://dummyjson.com/`
- **Endpoint Produse:** `https://dummyjson.com/products` (GET)
  - Suportă paginare: `https://dummyjson.com/products?limit=10&skip=10&select=title,price`
  - Căutare: `https://dummyjson.com/products/search?q=phone`
  - Categorii: `https://dummyjson.com/products/categories`, `https://dummyjson.com/products/category/smartphones`
- **Descriere:** O colecție mult mai bogată și variată de date JSON simulate pentru diverse entități (produse, utilizatori, postări, etc.). Pentru produse, oferă câmpuri multiple: titlu, descriere, preț, discount, rating, stoc, brand, categorie, thumbnail, listă de imagini.
- **Avantaje:** Set de date mai mare și mai complex, permite testarea paginării și a căutării. Structura datelor este mai apropiată de un API real. Nu necesită autentificare.
- **Dezavantaje:** Complexitatea mai mare a structurii JSON poate necesita transformări DataWeave mai elaborate.

**8.3.3. Open Food Facts API (Pentru Produse Alimentare)**

- **URL Principal:** `https://world.openfoodfacts.org/data`
- **Endpoint Produs după Barcode:** `https://world.openfoodfacts.org/api/v2/product/[barcode].json` (GET, înlocuiți `[barcode]` cu un cod de bare valid)
- **Descriere:** O bază de date deschisă, colaborativă, cu informații despre produse alimentare din întreaga lume. Datele sunt foarte detaliate (ingrediente, alergeni, informații nutriționale, etc.).
- **Avantaje:** Date reale și extrem de detaliate. Oportunitate de a lucra cu o structură JSON complexă și bogată.
- **Dezavantaje:** Necesită un cod de bare valid pentru a prelua un produs. Structura răspunsului JSON este foarte mare și poate fi dificil de parsat și mapat pentru începători. Poate avea limitări de rată.

**8.3.4. CoGecko API (Pentru Date despre Criptomonede)**

- **URL Principal:** `https://www.coingecko.com/en/api/documentation`
- **Endpoint Piețe Monede:** `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1` (GET)
- **Descriere:** Oferă date de piață (preț, capitalizare, volum, etc.) pentru o gamă largă de criptomonede.
- **Avantaje:** Date dinamice, relevante pentru tema Web3 a proiectului (integrarea MetaMask). Structură JSON bine definită. Nu necesită API key pentru multe endpoint-uri publice.
- **Dezavantaje:** Poate fi mai puțin relevant pentru un "marketplace de produse" clasic, dar poate servi ca o sursă de date interesantă pentru a diversifica tipurile de "produse" listate (ex: listarea unor criptomonede ca asset-uri). Poate avea limitări de rată.

**Decizia Finală privind API-ul Extern:** Va fi luată de **Team_1** în colaborare cu **Tutorele (Petrut Constantin)** la începutul Sprintului 3 (sau chiar la finalul Sprintului 2, în faza de analiză și planificare pentru Sprint 3), după ce se evaluează documentația fiecărui API, ușurința de integrare, calitatea și relevanța datelor pentru obiectivele de învățare și pentru popularea marketplace-ului. Se va începe cu cel mai simplu și mai stabil API (probabil FakeStoreAPI sau un subset limitat din DummyJSON) pentru a asigura un succes inițial în procesul de integrare.

8.4. Lista Recomandată de Resurse de Învățare Inițială (Link-uri către Documentația Oficială și Tutoriale de Bază per Tehnologie)
(Această secțiune rămâne identică în conținut cu cea din versiunea anterioară, Versiunea 4.1, listând resursele pentru fiecare tehnologie. Tutorele o poate completa cu link-uri și mai specifice pe parcurs).
**8.4.1. Resurse pentru React și Vite:**

- Documentația Oficială React: [https://react.dev/](https://react.dev/) (în special secțiunile "Learn React" și "Tutorial")
- Documentația Oficială Vite: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- Tutorial React pentru Începători (Exemplu): Căutați pe YouTube "React Crash Course for Beginners" (ex: de la Traversy Media, Programming with Mosh, Net Ninja).
- Documentația React Router DOM: [https://reactrouter.com/en/main](https://reactrouter.com/en/main)
- Documentația Tailwind CSS: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation) (în special ghidul de instalare cu Vite).
- Documentația Axios: [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)
- Documentația MetaMask pentru Dezvoltatori: [https://docs.metamask.io/guide/](https://docs.metamask.io/guide/)

**8.4.2. Resurse pentru MuleSoft Anypoint Platform și DataWeave:**

- Documentația Oficială MuleSoft: [https://docs.mulesoft.com/](https://docs.mulesoft.com/)
  - Tutoriale Anypoint Studio: Căutați "MuleSoft Anypoint Studio Tutorial" sau "Mule 4 Fundamentals" pe site-ul MuleSoft sau pe YouTube.
  - Documentație DataWeave: [https://docs.mulesoft.com/dataweave/2.4/](https://docs.mulesoft.com/dataweave/2.4/) (sau versiunea relevantă pentru runtime-ul din Anypoint Studio).
- Canalul YouTube Oficial MuleSoft: Conține multe tutoriale video, webinarii și prezentări de concepte.
- Cursuri Gratuite MuleSoft pentru Începători (MuleSoft Training - Self-Paced Fundamentals): Verificați platforma de training oficială MuleSoft (training.mulesoft.com) pentru cursuri gratuite introductive.

**8.4.3. Resurse pentru Talend Open Studio for Data Integration:**

- Documentația Oficială Talend Help Center: [https://help.talend.com/](https://help.talend.com/) (căutați specific pentru "Talend Open Studio for Data Integration User Guide").
- Tutoriale Talend pe YouTube: Căutați "Talend Open Studio Tutorial for Beginners", "Talend ETL examples". Multe canale oferă ghiduri pas cu pas.
- Comunitatea Talend: [https://community.talend.com/](https://community.talend.com/) (forumuri de discuții, articole, baze de cunoștințe).

**8.4.4. Resurse pentru ClickHouse:**

- Documentația Oficială ClickHouse: [https://clickhouse.com/docs/en/](https://clickhouse.com/docs/en/)
  - SQL Reference: [https://clickhouse.com/docs/en/sql-reference/](https://clickhouse.com/docs/en/sql-reference/)
  - Table Engines (în special MergeTree family): [https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/)
  - JDBC Driver: [https://clickhouse.com/docs/en/integrations/java#jdbc-driver](https://clickhouse.com/docs/en/integrations/java#jdbc-driver)
- Tutoriale ClickHouse: Căutați pe blog-uri tehnice și pe YouTube "ClickHouse Tutorial for Beginners", "Getting Started with ClickHouse".

**8.4.5. Resurse pentru MicroPython și Raspberry Pi Pico W:**

- Documentația Oficială MicroPython: [http://docs.micropython.org/en/latest/](http://docs.micropython.org/en/latest/)
- Documentația Oficială Raspberry Pi pentru Pico și Pico W: [https://www.raspberrypi.com/documentation/microcontrollers/](https://www.raspberrypi.com/documentation/microcontrollers/) (include ghiduri detaliate de pornire cu MicroPython, pinout-uri, etc.).
- Tutoriale Specifice pentru RPi Pico W cu MicroPython: Căutați pe YouTube "Raspberry Pi Pico W MicroPython WiFi Tutorial", "RPi Pico W urequests", "RPi Pico W GPIO MicroPython". Mulți creatori au conținut excelent.
- Biblioteca `urequests` (dacă nu este built-in și trebuie adăugată manual): Căutați pe GitHub `micropython-lib` pentru a găsi pachetul `urequests`.

**8.4.6. Resurse pentru Docker și Docker Compose:**

- Documentația Oficială Docker: [https://docs.docker.com/](https://docs.docker.com/)
  - Get Started Guide: [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)
  - Dockerfile Reference: [https://docs.docker.com/engine/reference/builder/](https://docs.docker.com/engine/reference/builder/)
  - Docker Compose CLI Reference (pentru v2): [https://docs.docker.com/compose/reference/](https://docs.docker.com/compose/reference/)
  - Best practices for writing Dockerfiles: [https://docs.docker.com/develop/develop-images/dockerfile_best-practices/](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- Tutoriale Docker și Docker Compose: Căutați pe YouTube "Docker Crash Course for Beginners", "Docker Compose Tutorial" (ex: de la Traversy Media, TechWorld with Nana, FreeCodeCamp).

**8.4.7. Resurse pentru NGINX:**

- Documentația Oficială NGINX: [https://nginx.org/en/docs/](https://nginx.org/en/docs/) (în special secțiunile despre "Beginner’s Guide" și "Core Functionality").
- NGINX Wiki: [https://www.nginx.com/resources/wiki/](https://www.nginx.com/resources/wiki/)
- Tutoriale NGINX: Căutați "NGINX Tutorial for Beginners", "NGINX Reverse Proxy Setup", "NGINX Serve Static Files React". Articole pe DigitalOcean sau alte blog-uri de hosting/devops sunt adesea foarte bune.
- Ghid pentru servirea aplicațiilor SPA (Single Page Applications) cu NGINX (important pentru `try_files`): Multe articole online specifice.
