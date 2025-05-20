---
**Document Proiect de Practică: DeviMarket Zero**
**Versiune:** 4.1 (Corecție Editare, Rafinare Completă, Arhitectură MuleSoft Central)
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
        2.3.1. Responsabilitate 1: Angajament Activ și Participare Deplină
        2.3.2. Responsabilitate 2: Învățare Proactivă, Autonomă și Continuă
        2.3.3. Responsabilitate 3: Realizarea Task-urilor Alocate cu Responsabilitate și Calitate
        2.3.4. Responsabilitate 4: Colaborare Exemplară și Spirit de Echipă
        2.3.5. Responsabilitate 5: Comunicare Transparentă, Proactivă și Eficientă (REGULA DE AUR: NU SE FAC PRESUPUNERI!)
        2.3.6. Responsabilitate 6: Respectarea Riguroasă a Standardelor și Proceselor
        2.3.7. Responsabilitate 7: Crearea și Întreținerea Documentației Tehnice
        2.3.8. Responsabilitate 8: Pregătirea pentru Prezentarea Finală și Autopromovare

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
    3.4. Fluxurile Principale de Date Detaliate (Scenarii End-to-End Cheie)
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
    5.2. Sprint 2: Analiză Proiect, Setup Detaliat Medii de Dezvoltare Specifice, Primul "Hello World" Funcțional per Modul (Perioadă: 19/05 - 30/05, 8 ore/student)
        5.2.1. Obiectivele Generale ale Sprintului 2: Înțelegere și Pregătire
        5.2.2. Task-uri Comune Tuturor Studenților în Sprint 2 (Citire Document, Setup Conturi, Q&A)
        5.2.3. Task-uri Specifice Detaliate și Livrabile pentru Team_1 în Sprint 2 (Setup MuleSoft Studio, Talend Studio, "Hello API" Mule, "Hello Job" Talend, Conectare Simplă ClickHouse)
        5.2.4. Task-uri Specifice Detaliate și Livrabile pentru Team_2 în Sprint 2 (Setup React/Vite, "Hello React Component")
        5.2.5. Task-uri Specifice Detaliate și Livrabile pentru Team_7 în Sprint 2 (Setup Docker, "Hello NGINX" în Docker, "Hello ClickHouse" în Docker)
        5.2.6. Task-uri Specifice Detaliate și Livrabile pentru Team_9 în Sprint 2 (Setup Thonny/MicroPython, "Hello Pico WiFi & HTTP Client")
        5.2.7. Task-uri Specifice Detaliate și Livrabile pentru QA (Rolul Culesca T.M.) în Sprint 2 (Setup Postman, "Hello Postman Request")
        5.2.8. Obiective de Validare și Deliverables la Finalul Sprintului 2
    5.3. Sprint 3: Dezvoltare Module Fundamentale, Integrare Componente, Testare și Realizare MVP (Perioadă: 2 săptămâni, 60 ore/student)
        5.3.1. Obiectivele Generale ale Sprintului 3: Construcția MVP-ului
        5.3.2. Structura Generală a Task-urilor în Sprint 3 (Definirea Epic-urilor și a User Story-urilor Principale per Modul/Echipă)
        5.3.3. Focus pe Integrarea între Module și Rezolvarea Dependențelor
        5.3.4. Obiective de Validare și Deliverables la Finalul Sprintului 3 (Funcționalitățile Specifice ale MVP-ului)
    5.4. Sprint 4: Documentație Tehnică Finală, Pregătire CV-uri, Realizare și Susținere Prezentare Finală Proiect (Perioadă: 1 săptămână, 20 ore/student)
        5.4.1. Obiectivele Generale ale Sprintului 4: Consolidare și Prezentare
        5.4.2. Structura Generală a Task-urilor în Sprint 4 (Redactare Documentație, Creare Prezentare, Rafinare CV-uri)
        5.4.3. Obiective de Validare și Deliverables la Finalul Sprintului 4

**6. METODOLOGIE DE LUCRU ȘI INSTRUMENTE UTILIZATE**
    6.1. Managementul Proiectului și al Task-urilor: Utilizarea Jira
        6.1.1. Structura Proiectului în Jira (Epics, User Stories, Tasks, Bugs)
        6.1.2. Fluxul de Lucru al Task-urilor pe Board-ul Agile (To Do, In Progress, In Review, Done)
        6.1.3. Responsabilitățile Studenților în Utilizarea Jira
    6.2. Versionarea Codului și Colaborare: Utilizarea Git & GitHub
        6.2.1. Organizarea Repository-urilor (Un monorepo sau repo-uri per modul – decizia Tutorelui)
        6.2.2. Strategia de Branching (ex: GitFlow simplificat – main, develop, feature branches)
        6.2.3. Crearea și Gestionarea Pull Request-urilor (PRs)
        6.2.4. Standarde pentru Mesajele de Commit
        6.2.5. Utilizarea Fișierelor `.gitignore`
    6.3. Canale și Etichetă de Comunicare (ex: Discord/Slack, Email)
    6.4. Ședințe și Ceremonii Agile (Adaptate pentru Proiectul de Practică)
        6.4.1. Sprint Planning Meeting
        6.4.2. Daily Stand-up Meeting (Opțional, dar Recomandat)
        6.4.3. Sprint Review / Demo Meeting
        6.4.4. Sprint Retrospective Meeting
    6.5. Standarde Detaliate de Codare, Formatare și Denumire (per Tehnologie)
        6.5.1. Standarde Generale (Lizibilitate, Comentarii, DRY, KISS)
        6.5.2. Standarde pentru React/JavaScript (ex: ESLint, Prettier)
        6.5.3. Standarde pentru MicroPython
        6.5.4. Standarde pentru DataWeave (MuleSoft)
        6.5.5. Standarde pentru Design Job-uri Talend
        6.5.6. Standarde pentru Query-uri SQL (ClickHouse)
        6.5.7. Standarde pentru Dockerfile-uri și `docker-compose.yml`
        6.5.8. Standarde pentru Configurații NGINX
    6.6. Definition of Done (DoD) Detaliată pentru Task-uri și User Stories

**7. CERINȚE INIȚIALE SPECIFICE PENTRU STUDENȚI (ACȚIUNI IMEDIATE ÎNAINTE DE SPRINT 2)**
    7.1. Citirea Integrală, cu Maximă Atenție, și Înțelegerea Aprofundată a Acestui Document (README.md)
    7.2. Pregătirea Întrebărilor de Clarificare pentru Ședința de Kick-off a Sprintului 2
    7.3. Crearea Solicitării de Acces în Proiectul Jira "DeviMarket Zero" (Conform Template-ului din Anexa 8.2)
    7.4. Trimiterea Email-ului către Tutore (Petrut Constantin) pentru Aprobarea Accesului la GitHub și Jira (Conform Template-ului din Anexa 8.3)

**8. ANEXE (TEMPLATE-URI ȘI RESURSE UTILE)**
    8.1. Exemplu Template Detaliat pentru Fișierul `SETUP_MODUL.md` (cu secțiuni pentru scop, software necesar, pași instalare, configurare, rulare "Hello World", troubleshooting)
    8.2. Template Tichet Jira pentru Solicitare Acces (cu câmpuri obligatorii și descriere standard)
    8.3. Template Email pentru Solicitare Aprobare Acces GitHub și Jira
    8.4. Lista de API-uri Externe Gratuite Sugerate pentru Integrare (cu URL-uri și scurte descrieri)
        8.4.1. FakeStoreAPI: `https://fakestoreapi.com/products`
        8.4.2. DummyJSON: `https://dummyjson.com/products`
        8.4.3. OpenFoodFacts API: `https://world.openfoodfacts.org/api/v0/product/[barcode].json`
        8.4.4. CoGecko API (Crypto): `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
    8.5. Lista Recomandată de Resurse de Învățare Inițială (Link-uri către Documentația Oficială și Tutoriale de Bază per Tehnologie)
        8.5.1. Resurse pentru React și Vite
        8.5.2. Resurse pentru MuleSoft Anypoint Studio și DataWeave
        8.5.3. Resurse pentru Talend Open Studio
        8.5.4. Resurse pentru ClickHouse (SQL și Concepte)
        8.5.5. Resurse pentru MicroPython și Raspberry Pi Pico W
        8.5.6. Resurse pentru Docker și Docker Compose
        8.5.7. Resurse pentru NGINX

---

**1. INTRODUCERE ȘI FUNDAMENTELE PROIECTULUI "DEVI MARKET ZERO"**

**1.1. Denumirea Proiectului și Semnificația Sa**

Numele proiectului, **"DeviMarket Zero"**, a fost ales cu grijă pentru a încapsula esența acestei inițiative de practică:
*   **"Devi"**: Stabilește o legătură directă cu compania tutorelui, **Devi**devs.com, sugerând că acest proiect este o simulare a unui angajament real în cadrul firmei, respectând standardele și viziunea acesteia.
*   **"Market"**: Indică natura aplicației pe care o vom construi – un **market**place online, o platformă de comerț electronic menită să agrege și să prezinte produse din diverse surse.
*   **"Zero"**: Acest sufix subliniază două aspecte fundamentale și definitorii ale proiectului:
    1.  **Pornire de la Zero Cunoștințe Specifice:** Proiectul este special conceput pentru studenți care, pentru majoritatea tehnologiilor avansate și specifice utilizate (MuleSoft, Talend, ClickHouse, React la nivel de aplicație complexă, Docker, MicroPython), pornesc de la un nivel de cunoștințe zero sau minim. Învățarea ghidată și practică este un obiectiv central și asumat.
    2.  **Costuri Operaționale Zero:** O constrângere inflexibilă a proiectului este utilizarea exclusivă a tehnologiilor, platformelor și serviciilor gratuite și open-source. Aceasta elimină orice barieră financiară și încurajează explorarea soluțiilor accesibile, dar puternice.

**1.2. Scenariul de Practică: Simularea unei Cerințe Reale de la un Client al Devidevs.com**

Pentru a oferi o experiență de practică cât mai relevantă, imersivă și apropiată de realitatea industriei IT, acest proiect este structurat ca un răspuns la o cerere specifică și detaliată venită din partea unui client fictiv către Devidevs.com. Studenții, sub îndrumarea lui Petrut Constantin, vor parcurge etape similare celor dintr-un ciclu de viață al unui proiect software real: analiza cerințelor, designul arhitectural, dezvoltarea iterativă (pe sprinturi), testarea funcțională, integrarea componentelor și documentarea soluției.

    **1.2.1. Profilul Clientului Fictiv și Contextul de Business**
    Clientul nostru fictiv este compania "GlobalGoods Inc.", un start-up dinamic și inovator care își propune să pătrundă pe piața competitivă a retail-ului online prin lansarea unui marketplace specializat. Viziunea lor pe termen lung este de a crea o platformă globală, dar pentru faza inițială – cea acoperită de acest proiect de practică – dispun de un buget limitat. Prin urmare, "GlobalGoods Inc." dorește să valideze conceptul tehnic al marketplace-ului și funcționalitățile de bază folosind soluții tehnologice robuste, scalabile, dar care sunt open-source sau oferă versiuni gratuite puternice. Clientul este deosebit de interesat de utilizarea platformelor de integrare moderne, precum **MuleSoft Anypoint Platform** și **Talend Open Studio**, pentru a asigura o gestionare eficientă și flexibilă a fluxurilor de date din diverse surse, anticipând o creștere viitoare. De asemenea, sunt deschiși la explorarea unor modalități inovatoare de interacțiune cu produsele, cum ar fi integrarea unui sistem de scanare bazat pe hardware accesibil.

    **1.2.2. Cerințele Specifice Detaliate ale Clientului (Brief-ul Inițial - Arhitectură MuleSoft Central)**
    *Următorul text reprezintă brief-ul detaliat, așa cum ar fi fost primit de la "GlobalGoods Inc." către Petrut Constantin, la Devidevs.com, reflectând noua arhitectură decisă:*

    *"Stimate Domnule Constantin și echipă Devidevs,

    Vă contactăm cu entuziasm pentru a demara colaborarea în vederea dezvoltării prototipului pentru noul nostru **marketplace online**, pe care îl vom denumi intern 'DeviMarket Zero'. Am analizat opțiunile și am conturat cerințele noastre specifice pentru acest Minimum Viable Product (MVP), punând un accent deosebit pe utilizarea platformelor de integrare MuleSoft și Talend, precum și a bazei de date ClickHouse. Iată detaliile:

    1.  **Platforma Web Principală (Frontend):**
        *   Avem nevoie de o interfață web modernă, intuitivă și cu un design curat, dezvoltată folosind biblioteca **React**. Aceasta va fi principala poartă de interacțiune a utilizatorilor cu marketplace-ul.
        *   Funcționalități esențiale pentru Frontend:
            *   O pagină principală (`/products` sau similar) care să afișeze o listă de produse. Fiecare produs listat trebuie să prezinte cel puțin imaginea (dacă este disponibilă), numele și prețul.
            *   Navigarea la o pagină de detalii dedicată pentru fiecare produs (ex: `/products/:productId`), unde se vor afișa toate informațiile relevante despre produsul selectat.
            *   O structură de navigare simplă și clară în cadrul site-ului.
        *   **Integrare Portofel MetaMask:** Dorim ca utilizatorii să aibă posibilitatea de a-și conecta portofelul digital MetaMask. Pentru acest MVP, funcționalitatea se va limita la inițierea conexiunii și afișarea adresei publice a portofelului conectat într-o zonă vizibilă a interfeței (ex: în header-ul paginii). Nu se vor implementa tranzacții pe blockchain.

    2.  **Platforma Centrală de API-uri și Logică de Business (MuleSoft Anypoint Platform):**
        *   Considerăm **MuleSoft Anypoint Platform**, rulată local prin intermediul **Anypoint Studio**, ca fiind **inima tehnologică a backend-ului** nostru. Toate interacțiunile programatice majore vor fi gestionate prin API-uri expuse de MuleSoft.
        *   Responsabilitățile specifice pentru MuleSoft includ:
            *   **Dezvoltarea și Expunerea unui API RESTful pentru Sistemul de Scanare:** Acest API trebuie să fie securizat folosind **HTTPS cu certificate self-signed** (generate local). Va primi date (codul de bare al produsului) de la dispozitivul Raspberry Pi Pico. Logica din MuleSoft va trebui să valideze sumar datele primite și, ulterior, să **scrie sau să actualizeze direct informațiile despre produs în baza de date ClickHouse** a proiectului.
            *   **Dezvoltarea și Expunerea unui API RESTful Fațadă/Proxy pentru Produse din Surse Externe:** Acest API MuleSoft va acționa ca un punct de acces controlat către un API public online gratuit care oferă date despre produse (vom alege împreună unul din lista de sugestii, ex: FakeStoreAPI, DummyJSON). Fluxul Mule va prelua datele de la API-ul sursă, va aplica transformările necesare folosind **DataWeave** (pentru a se conforma modelului nostru de date intern) și apoi va **scrie direct aceste produse în baza de date ClickHouse a proiectului**. Alternativ, acest API MuleSoft ar putea doar să returneze datele transformate, pentru a fi preluate și procesate ulterior de un job Talend, dacă considerăm acest flux mai relevant pentru obiectivele de învățare. *[Notă Tutore: Vom decide în Sprint 2 dacă MuleSoft scrie direct în DB sau expune datele pentru Talend; pentru MVP, scrierea directă din MuleSoft este probabil mai simplă de implementat].*
            *   **Dezvoltarea și Expunerea API-urilor RESTful pentru Aplicația Frontend (React):** MuleSoft va furniza toate endpoint-urile necesare interfeței utilizator pentru a prelua și afișa datele despre produse. Aceasta include cel puțin un endpoint pentru listarea produselor (ex: `GET /products`, cu suport pentru paginare de bază) și un endpoint pentru preluarea detaliilor unui produs specific (ex: `GET /products/{productId}`). Aceste API-uri MuleSoft vor interoga direct baza de date ClickHouse a proiectului.

    3.  **Procesarea și Integrarea Datelor Specifice (Talend Open Studio):**
        *   Pentru gestionarea unor fluxuri de date ETL mai clasice, în special cele care implică migrarea sau sincronizarea între baze de date, dorim utilizarea **Talend Open Studio**.
        *   Responsabilități specifice pentru Talend:
            *   **Migrarea Datelor din Sursa "Franceză":** Vom simula o bază de date sursă mai veche sau externă, pe care o vom numi 'baza de date franceză'. Aceasta va fi, de fapt, un tabel sau o schemă separată (ex: `clickhouse_db_franceza.products_fr`) în aceeași instanță ClickHouse locală, dar tratată ca o sursă distinctă. Talend va trebui să implementeze un job ETL care:
                1.  Se conectează la această bază de date "franceză".
                2.  Extrage toate datele relevante despre produse.
                3.  Aplică transformările necesare (curățare, mapare la noul model de date, conversii de tip).
                4.  **Încarcă datele transformate direct în baza de date ClickHouse principală a proiectului** (ex: `devimarket_db.products`).
            *   **(Opțional, ca exercițiu avansat sau alternativ):** Un alt job Talend ar putea fi dezvoltat pentru a consuma API-ul expus de MuleSoft (cel care servește datele de la API-ul extern de produse, dacă acesta returnează datele în loc să le scrie direct în DB). Acest job Talend ar prelua datele și le-ar încărca în baza de date ClickHouse a proiectului, demonstrând un alt pattern de integrare.

    4.  **Baza de Date Centrală a Proiectului:**
        *   Toate datele consolidate și finale ale produselor vor fi stocate într-o bază de date **ClickHouse**. Vom utiliza o bază de date principală (ex: `devimarket_db`) cu un tabel central `products`. Aceasta va fi sursa de date pentru API-urile MuleSoft care deservesc Frontend-ul.
        *   Vom avea și o schemă/tabel separat în ClickHouse pentru a simula "baza de date franceză" (ex: `clickhouse_db_franceza.products_fr`), care va servi ca sursă pentru job-ul ETL din Talend.

    5.  **Sistemul de Scanare a Produselor (Hardware):**
        *   Dorim integrarea unui sistem de scanare fizică a produselor folosind un **Raspberry Pi Pico W** și un scanner de coduri de bare USB standard (care emulează o tastatură).
        *   Dispozitivul RPi Pico W, după scanarea unui cod de bare, va trebui să construiască un mesaj și să-l trimită (printr-un request HTTP/HTTPS) către API-ul dedicat expus de MuleSoft pentru procesare și actualizare în baza de date.

    6.  **Mediu de Rulare și Tehnologii Specifice:**
        *   Întreaga soluție trebuie să funcționeze **local** pe mașinile virtuale Ubuntu ale studenților, fără a depinde de servicii cloud plătite.
        *   Se vor utiliza exclusiv tehnologii, platforme și biblioteci **gratuite și open-source**.
        *   **Docker** va fi utilizat pentru a rula și gestiona containerul bazei de date **ClickHouse**. De asemenea, build-ul static final al aplicației Frontend (React) va fi servit printr-un container **NGINX**.
        *   Aplicațiile **MuleSoft** vor fi dezvoltate și rulate local în **Anypoint Studio** (utilizând Mule runtime-ul embedat). Nu se va încerca un deploy pe CloudHub sau containerizarea aplicațiilor Mule în cadrul acestui proiect, pentru a menține complexitatea la un nivel gestionabil.
        *   Job-urile **Talend** vor fi dezvoltate și rulate local în **Talend Open Studio**.

    Ne bazăm pe expertiza dumneavoastră și a echipei Devidevs.com pentru a ghida studenții în realizarea cu succes a acestui prototip ambițios. Obiectivul este dublu: un MVP funcțional și, la fel de important, o experiență de învățare practică și valoroasă pentru studenți."*

**1.3. Viziunea Produsului "DeviMarket Zero": Ce Construim Efectiv?**

    **1.3.1. Descrierea Generală a Marketplace-ului Online**
    "DeviMarket Zero" va fi un prototip funcțional (Minimum Viable Product - MVP) al unui marketplace online. Acesta va permite utilizatorilor să navigheze și să vizualizeze o listă de produse agregate din diverse surse de date (o bază de date migrată, un API extern, produse adăugate prin scanare) și să acceseze pagini de detalii pentru fiecare produs. Interfața va fi simplă, curată, modernă și axată pe funcționalitatea de bază de prezentare a produselor. Nu se vor implementa funcționalități avansate de e-commerce precum coș de cumpărături, proces de checkout, sisteme de plată, sau managementul conturilor de utilizator (dincolo de simpla conectare a portofelului MetaMask pentru afișarea adresei).

    **1.3.2. Rolul Central al MuleSoft Anypoint Platform în Arhitectură**
    În arhitectura aleasă pentru "DeviMarket Zero", **MuleSoft Anypoint Platform (rulat local prin Anypoint Studio) este desemnată ca fiind componenta principală de backend și de orchestrare a API-urilor.** Această decizie plasează MuleSoft în centrul fluxurilor de date și al logicii de business, oferind studenților din Team_1 o experiență consistentă cu o platformă de integrare de top.
    Responsabilitățile MuleSoft vor include:
    *   **Expunerea tuturor API-urilor RESTful** necesare pentru funcționarea sistemului:
        *   API-uri consumate de aplicația Frontend (React) pentru afișarea listei de produse și a detaliilor acestora.
        *   Un API dedicat și securizat (HTTPS cu self-signed certificates) pentru a primi și procesa datele trimise de scannerul Raspberry Pi Pico W.
        *   Un API care acționează ca o fațadă inteligentă (cu logică de transformare DataWeave) pentru un API extern gratuit de produse, pregătind datele pentru stocarea internă.
    *   **Implementarea Logicii de Business Esențiale:** O parte semnificativă din logica de validare a datelor, procesarea acestora și orchestrarea interacțiunilor (de exemplu, pentru datele primite de la scanner sau cele extrase din API-ul extern) va fi implementată în cadrul fluxurilor MuleSoft.
    *   **Interacțiunea Directă și Unică (pentru API-uri) cu Baza de Date ClickHouse:** Toate operațiunile de citire (pentru Frontend) și scriere/actualizare (pentru datele de la scanner și API-ul extern) inițiate prin API-urile expuse de MuleSoft se vor realiza prin interacțiunea directă a fluxurilor MuleSoft cu baza de date ClickHouse a proiectului. MuleSoft va fi "poarta" principală către baza de date pentru aceste fluxuri.

    **1.3.3. Rolul Talend Open Studio în Fluxurile de Date**
    **Talend Open Studio** va fi utilizat pentru procese ETL (Extragere, Transformare, Încărcare) specifice, în special cele care implică volume mai mari de date în mod batch sau migrarea/sincronizarea între diferite structuri de baze de date (chiar dacă ambele sunt în ClickHouse, dar simulate ca surse distincte).
    Responsabilitățile Talend vor include:
    *   **Migrarea/Sincronizarea Datelor din "Baza Franceză":** Rolul principal va fi de a implementa un job ETL care extrage date dintr-o sursă de date simulată (tabelul `clickhouse_db_franceza.products_fr`), aplică transformările necesare pentru a se conforma modelului de date al noului marketplace (definit în `devimarket_db.products`) și încarcă aceste date direct în tabelul destinație din ClickHouse.
    *   **(Opțional) Consumarea API-ului MuleSoft pentru Date Externe:** Ca un exercițiu alternativ sau complementar de învățare a integrării între platforme, un job Talend ar putea fi dezvoltat pentru a apela API-ul expus de MuleSoft (cel care aduce date de la API-ul public de produse). Acest job ar prelua datele de la MuleSoft și le-ar încărca în baza de date ClickHouse, demonstrând un pattern în care Talend acționează ca un consumator al unui API gestionat de MuleSoft, în loc ca MuleSoft să scrie direct datele în DB pentru acest flux specific. *[Notă Tutore: Această opțiune poate fi explorată dacă timpul permite și aduce valoare de învățare suplimentară pentru Team_1].*

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
            *   Afișarea tuturor informațiilor relevante despre un produs selectat, preluate din ClickHouse prin intermediul unui API specific expus de MuleSoft. Aceasta include: nume, descriere completă, preț, monedă, categorie, sub-categorie, brand, cantitate în stoc, URL imagine (afishată ca imagine principală mare), atribute specifice (afișate ca listă cheie-valoare), tag-uri.
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
            *   **Endpoint:** `POST https://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTPS>/api/scanner/product_scan` (Portul exact, ex: 8082, și calea `/api/scanner` vor fi definite de Team_1).
            *   **Input (Request Body):** JSON, ex: `{ "barcode": "0123456789012", "timestamp_scan": "YYYY-MM-DDTHH:MM:SSZ" }`.
            *   **Logică în Fluxul Mule:**
                1.  Recepționare request HTTPS.
                2.  Validare de bază a payload-ului JSON (ex: prezența câmpului `barcode`, formatul acestuia).
                3.  Transformare DataWeave (dacă este necesar pentru a pregăti datele pentru ClickHouse).
                4.  Conectare la ClickHouse folosind `Database Connector`.
                5.  Implementarea logicii de "upsert":
                    *   Se va executa un `SELECT` pentru a verifica dacă un produs cu `barcode`-ul primit există deja în tabelul `devimarket_db.products`.
                    *   Dacă **nu există**: se va executa un `INSERT` în `devimarket_db.products` cu date minimale: `id` (UUID generat în MuleSoft sau de DB), `barcode`, `name` (ex: "Produs Scanat - " + barcode), `price` (0.0), `currency` ('RON'), `stock_quantity` (1, sau 0 dacă se dorește actualizare separată), `source_etl` ('RPi_Pico_Scan'), `is_active` (1), `created_at` (timestamp curent UTC), `updated_at` (timestamp curent UTC).
                    *   Dacă **există**: se va executa un `UPDATE` (folosind sintaxa `ALTER TABLE devimarket_db.products UPDATE ... WHERE barcode = ...` dacă este suportată și simplă pentru ClickHouse în acest context, sau o strategie de delete & insert dacă update-ul direct e complex) pentru a actualiza `updated_at` la timestamp-ul curent și, opțional, `stock_quantity` (ex: incrementare cu 1).
                6.  Logging detaliat al operațiunilor și erorilor.
            *   **Output (Response Body):** JSON cu status (ex: `{ "status": "success", "message": "Product created/updated", "productId": "..." }` sau `{ "status": "error", "message": "Details..." }`). Status HTTP corespunzător (200/201 pentru succes, 400/500 pentru erori).
        *   **Aplicație Mule 2: API Fațadă pentru API-ul Extern de Produse și Încărcare în DB:**
            *   **Endpoint (pentru declanșare/testare, dacă nu se folosește Scheduler):** `GET http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP>/api/marketplace/ingest-external-products` (Portul, ex: 8081, și calea vor fi definite de Team_1). Poate fi și un `Scheduler` care rulează la intervale fixe.
            *   **Logică în Fluxul Mule:**
                1.  Apelarea API-ului extern gratuit selectat (ex: `GET https://dummyjson.com/products`) folosind `HTTP Request`.
                2.  Procesarea răspunsului JSON de la API-ul extern (care poate fi o listă de produse).
                3.  Pentru fiecare produs din lista externă, utilizarea `Transform Message (DataWeave)` pentru:
                    *   Maparea câmpurilor din structura API-ului extern la câmpurile tabelului `devimarket_db.products` (ex: `externalApi.title` -> `internal.name`, `externalApi.price` -> `internal.price`, etc.).
                    *   Conversia tipurilor de date, dacă este necesar.
                    *   Gestionarea câmpurilor lipsă (valori default).
                    *   Setarea `source_etl` (ex: 'MULE_DummyJSON_Ingest_V1').
                    *   Generarea unui `id` UUID dacă API-ul extern nu oferă unul potrivit.
                4.  Conectare la ClickHouse.
                5.  Pentru fiecare produs transformat, implementarea logicii de "upsert" similară cu cea de la scanner (verificare existență după un câmp cheie – poate `name` și `brand` dacă nu există un ID extern unic fiabil – și apoi `INSERT` sau `UPDATE` în `devimarket_db.products`).
                6.  Logging detaliat.
            *   **Output (Response Body pentru endpoint-ul de declanșare):** JSON cu status (ex: `{ "status": "success", "products_processed": X, "products_created": Y, "products_updated": Z }`).
        *   **Aplicație Mule 3 (sau parte din Aplicația Mule 2): API-uri pentru Frontend:**
            *   **Endpoint 1 (Listare Produse):** `GET http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP>/api/marketplace/products`
                *   Suport pentru parametrii de query: `?page=INT` (default 1), `?limit=INT` (default 10), `?category=STRING` (opțional), `?sortBy=STRING` (ex: 'price_asc', 'price_desc', 'name_asc' - opțional, sortare de bază).
                *   Logic: Construiește și execută un query `SELECT` pe `devimarket_db.products` în ClickHouse, aplicând clauzele `WHERE` (pentru categorie), `ORDER BY` și `LIMIT OFFSET` (pentru paginare și sortare).
                *   Output: JSON `{ "data": [array_de_produse], "page": INT, "limit": INT, "total_products": INT (opțional) }`.
            *   **Endpoint 2 (Detalii Produs):** `GET http://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTP>/api/marketplace/products/{productId}`
                *   Input: `productId` (UUID) ca path parameter.
                *   Logic: Execută un `SELECT * FROM devimarket_db.products WHERE id = :productId` în ClickHouse.
                *   Output: JSON cu detaliile produsului sau 404 Not Found dacă ID-ul nu există.

    **1.4.3. Fluxurile ETL Implementate cu Talend Open Studio**
    *   **Livrabil Principal:** Job-uri Talend exportabile (ca arhivă sau fișiere de proiect) și documentație tehnică detaliată a fiecărui job (design, componente utilizate, logica transformărilor, pași de configurare și rulare).
    *   **Job Specific Detaliat (Migrare Date din "Baza Franceză"):**
        *   **Nume Job (Exemplu):** `Job_Migrate_FrenchDB_to_DeviMarketDB`
        *   **Sursă:** Tabelul `clickhouse_db_franceza.products_fr` (dintr-o schemă separată, dar pe aceeași instanță ClickHouse locală). Se va folosi componenta `tClickhouseInput` (dacă există un conector dedicat și ușor de configurat în versiunea TOS folosită) sau, mai general, `tJDBCInput` configurat cu driverul JDBC pentru ClickHouse. Schema sursă va fi definită în metadata Talend.
        *   **Extragere:** Se vor extrage toate coloanele relevante din tabelul sursă `products_fr`.
        *   **Transformare (cu `tMap`):**
            *   **Mapare Directă:** Maparea coloanelor care au același nume și tip (sau tip compatibil) între sursă și destinația `devimarket_db.products`.
            *   **Conversie Nume Coloane:** Dacă numele coloanelor diferă (ex: `produit_nom` în franceză vs. `name` în engleză).
            *   **Conversie Tipuri de Date:** Asigurarea că tipurile de date sunt corecte pentru schema destinație (ex: String to Float, String to Int).
            *   **Curățare Date:** Eliminarea spațiilor albe inutile (trim), conversia la un case consistent (ex: Upper Case pentru categorii).
            *   **Generare Valori Noi/Default:**
                *   Generarea unui `id` UUID nou pentru fiecare produs migrat (deoarece ID-urile din sursa franceză pot să nu fie unice global sau pot avea alt format).
                *   Setarea câmpului `source_etl` la o valoare specifică, ex: "TALEND_FR_MIGRATION_V1.0".
                *   Setarea câmpurilor `created_at` și `updated_at` la timestamp-ul curent al migrării.
                *   Setarea valorilor default pentru câmpuri noi care nu există în sursa franceză (ex: `is_active` = 1).
            *   **Gestionarea Valorilor Nule:** Definirea unui comportament pentru câmpurile nule din sursă (se păstrează nule dacă schema destinație permite, se înlocuiesc cu valori default, sau rândul este respins).
            *   **Filtrare Rânduri:** (Opțional) Eliminarea rândurilor care nu îndeplinesc anumite criterii de validitate.
        *   **Încărcare (Destinație):** Tabelul `devimarket_db.products` din instanța ClickHouse locală. Se va folosi componenta `tClickhouseOutput` sau `tDBOutput` configurată pentru ClickHouse.
            *   **Acțiune pe Tabel:** Se va alege o acțiune adecvată (ex: "Insert if not exists" dacă se poate baza pe o cheie unică, sau "Insert" și se gestionează duplicatele prin logica de migrare – pentru MVP, un simplu "Insert" cu ID-uri noi generate este suficient).
        *   **Logging și Gestionarea Erorilor:** Utilizarea `tLogRow` pentru a afișa progresul și datele procesate. Implementarea unui mecanism simplu de capturare și logare a rândurilor care eșuează la încărcare (ex: scrierea lor într-un fișier de erori).
    *   **(Opțional) Job 2: Consum API MuleSoft și Încărcare în ClickHouse (dacă se alege această variantă):**
        *   **Sursă:** Apelarea endpoint-ului `GET http://<IP_VM_TEAM_1>:<PORT_MULE_HTTP>/api/marketplace/external-products` expus de MuleSoft, folosind componenta `tRestClient`.
        *   **Procesare Răspuns:** Parsarea răspunsului JSON (care ar fi o listă de produse) folosind `tExtractJSONFields` sau similar.
        *   **Transformare (`tMap`):** Maparea câmpurilor din JSON la schema tabelului `devimarket_db.products`. Setarea `source_etl` la "TALEND_MULE_CONSUMER_V1.0".
        *   **Încărcare:** Similar cu Job 1, în tabelul `devimarket_db.products`.

    **1.4.4. Funcționalitatea Sistemului de Scanare (Raspberry Pi Pico W)**
    *   **Livrabil:** Scriptul MicroPython complet și funcțional, versionat pe GitHub. O demonstrație video scurtă sau live a funcționării.
    *   **Detalii Specifice:**
        *   **Conectivitate WiFi:** Scriptul va include logica pentru a se conecta automat la o rețea WiFi predefinită (SSID și parolă stocate într-un fișier `config.py` separat, care este în `.gitignore`). Va include reîncercări de conectare.
        *   **Citire Cod de Bare:** Implementarea metodei de citire a datelor de la scannerul USB. Aceasta va necesita cercetare pentru cea mai directă metodă pe Pico W cu MicroPython (ex: tratarea Pico W ca USB device și citirea input-ului standard dacă scannerul acționează ca o tastatură USB, sau utilizarea unor biblioteci specifice dacă există și sunt simple). **Prioritatea este o soluție funcțională, chiar dacă implică o metodă mai simplă de input manual al codului de bare în consolă REPL pentru a simula scannerul, dacă interfațarea directă se dovedește prea complexă în timpul alocat.**
        *   **Pregătire Request HTTP:** După citirea codului de bare, scriptul va formata un payload JSON, ex: `{ "barcode": "CITIT_COD_BARE", "scan_timestamp": "YYYY-MM-DDTHH:MM:SSZ" }`.
        *   **Trimitere Request HTTPS către API MuleSoft:**
            *   Utilizarea modulului `urequests` (sau similar disponibil în MicroPython) pentru a face un request `POST` către API-ul MuleSoft dedicat scannerului (ex: `https://<IP_VM_STUDENT_TEAM_1>:<PORT_MULE_HTTPS>/api/scanner/product_scan`).
            *   **Gestionarea Certificatului Self-Signed:** Deoarece API-ul MuleSoft va folosi un certificat self-signed pentru HTTPS, scriptul MicroPython va trebui fie să fie configurat să aibă încredere în acel certificat specific (dacă `urequests` permite încărcarea unui CA custom – puțin probabil pe Pico), fie, mai realist pentru un mediu de dezvoltare local, **să ignore validarea certificatului SSL**. Aceasta este o practică acceptabilă STRICT pentru acest context local și trebuie documentată ca atare.
        *   **Procesare Răspuns și Feedback:** Scriptul va interpreta răspunsul de la API-ul MuleSoft (status code, conținut JSON) și va oferi feedback vizual pe Pico W folosind LED-ul onboard (ex: LED verde continuu pentru succes, LED roșu clipind pentru eroare de rețea sau eroare de la API).
        *   **Demonstrație:** Scanarea a cel puțin 2-3 produse fizice diferite (cu coduri de bare reale, dacă e posibil, sau coduri de bare de test imprimate) și verificarea că datele corespunzătoare apar sau sunt actualizate în baza de date ClickHouse (vizualizat prin interfața Frontend React).

    **1.4.5. Structura și Conținutul Bazei de Date ClickHouse**
    *   **Livrabil:** Scripturi SQL (sau configurații în `docker-compose.yml` pentru inițializare) pentru crearea bazei de date `devimarket_db` și a tabelului `products` cu schema detaliată în Capitolul 3.5. Opțional, un script similar pentru crearea bazei de date simulate "franceze" (`clickhouse_db_franceza.products_fr`).
    *   **Detalii Conținut:** La finalul MVP-ului, tabelul `devimarket_db.products` trebuie să conțină un set de date demonstrativ, populat prin:
        *   Job-ul Talend de migrare din "baza franceză".
        *   Fluxul MuleSoft de ingestie de la API-ul extern.
        *   Scanările realizate cu Raspberry Pi Pico W.
        Acest lucru va demonstra integrarea end-to-end a tuturor surselor de date.

    **1.4.6. Infrastructura Locală de Rulare (Docker, NGINX)**
    *   **Livrabil:** Un fișier `docker-compose.yml` complet și funcțional, împreună cu toate `Dockerfile`-urile necesare pentru serviciile containerizate. O configurație NGINX detaliată și funcțională.
    *   **Detalii Specifice:**
        *   **Container Docker pentru ClickHouse:**
            *   Folosind imaginea oficială ClickHouse.
            *   Configurat cu un volum Docker numit (ex: `clickhouse_data`) pentru persistența datelor bazei de date (`/var/lib/clickhouse/`).
            *   Expunerea porturilor necesare către host-ul VM (ex: 8123 pentru HTTP, 9000 pentru client nativ), astfel încât aplicațiile MuleSoft și job-urile Talend (care rulează nativ pe VM) să se poată conecta la instanța ClickHouse din container.
            *   (Opțional) Script de inițializare care creează bazele de date (`devimarket_db`, `clickhouse_db_franceza`) și utilizatorii la prima pornire a containerului.
        *   **Container Docker pentru NGINX (Servire Frontend React):**
            *   Un `Dockerfile` care folosește o imagine NGINX oficială (ex: `nginx:alpine`).
            *   În faza de build a imaginii NGINX (poate fi un multi-stage Dockerfile care întâi construiește aplicația React), se va copia build-ul static al aplicației React (folderul `dist` sau `build` generat de `npm run build`) în locația potrivită din containerul NGINX (ex: `/usr/share/nginx/html`).
            *   Se va copia un fișier de configurare NGINX customizat (ex: `nginx.conf` sau `default.conf`) în container, care va instrui NGINX să servească fișierele React și să gestioneze corect rutarea pe client.
            *   Containerul NGINX va expune portul 80 (HTTP) și/sau 443 (HTTPS, dacă se configurează SSL pe NGINX) către host-ul VM.
        *   **Aplicațiile MuleSoft și Job-urile Talend:** Acestea vor rula **nativ** pe mașinile virtuale ale studenților din Team_1, direct din Anypoint Studio și Talend Open Studio. Ele **NU** vor fi containerizate în Docker în cadrul acestui proiect, pentru a simplifica setup-ul inițial și a permite studenților să se concentreze pe învățarea platformelor în sine. Conectivitatea la ClickHouse (din Docker) se va face prin porturile expuse de containerul ClickHouse pe interfața de rețea a VM-ului.

    **1.4.7. Documentația Tehnică Completă a Proiectului**
    *   **Livrabil:** Un set comprehensiv și consolidat de documente tehnice, versionate pe GitHub.
    *   **Detalii:**
        *   **Acest `README.md` (Documentul Principal al Proiectului):** Finalizat, actualizat cu toate deciziile și detaliile apărute pe parcurs, și reflectând starea finală a proiectului.
        *   **Fișiere `SETUP_MODUL.md` pentru fiecare tehnologie/modul major:**
            *   `SETUP_REACT_FRONTEND.md` (Team_2)
            *   `SETUP_MULESOFT_ANYPOINT_STUDIO.md` (Team_1)
            *   `SETUP_TALEND_OPEN_STUDIO.md` (Team_1)
            *   `SETUP_CLICKHOUSE_DOCKER.md` (Team_7)
            *   `SETUP_RPI_PICO_MICROPYTHON.md` (Team_9)
            *   `SETUP_DOCKER_NGINX.md` (Team_7)
            *   `SETUP_POSTMAN_QA.md` (Team_7 - Culesca T.M.)
            Fiecare `SETUP_MODUL.md` va conține instrucțiuni detaliate, pas cu pas, pentru instalarea software-ului necesar (cu versiuni specifice), configurarea mediului de dezvoltare, și rularea unui exemplu "Hello World" sau a unei funcționalități de bază. Va include și o secțiune de "Troubleshooting" pentru probleme comune.
        *   **Comentarii Relevante și Clare în Cod:** Codul sursă (JavaScript/React, MicroPython), scripturile DataWeave (MuleSoft), și configurațiile complexe (NGINX, Docker Compose) vor fi comentate acolo unde logica nu este trivială sau pentru a explica decizii de design.
        *   **Documentație API pentru Serviciile MuleSoft:** Specificații RAML generate de Anypoint Studio și exportate, descriind fiecare endpoint, parametrii, request/response bodies și status codes.
        *   **Documentație Job-uri Talend:** Descrierea logicii fiecărui job, capturi de ecran ale design-ului vizual, explicații ale transformărilor din `tMap`, și pași de configurare a conexiunilor la baze de date.
        *   **Diagrama Finală a Arhitecturii Sistemului:** O versiune actualizată și detaliată a diagramei arhitecturale.
        *   **Documentația Tehnică Finală Consolidată (produsă în Sprint 4):** Un document unic (sau o serie de documente interconectate, ex: într-un Wiki GitHub) care integrează toate informațiile de mai sus, descrie în detaliu arhitectura finală, deciziile de design luate pe parcursul proiectului, provocările majore întâmpinate de fiecare echipă și soluțiile implementate, concluzii și lecțiile învățate.

**1.5. Obiectivele Detaliate de Învățare pentru Studenți (Ghidate de Interesele Individuale)**

Acest proiect este conceput ca o platformă de învățare intensivă, unde fiecare student își poate explora și aprofunda interesele declarate, aplicându-le într-un context practic, colaborativ și complex. Obiectivele de învățare sunt structurate atât la nivel general (competențe transversale), cât și specific, pe tehnologiile și modulele la care vor lucra.

    **1.5.1. Competențe Transversale Esențiale (Pentru Toți Studenții)**
    Indiferent de alocarea pe echipe, toți studenții vor trebui să demonstreze și să își dezvolte următoarele competențe fundamentale:
    *   **Adaptarea la Metodologia Agile (Simulată):**
        *   Înțelegerea și participarea activă la ciclul de viață al unui sprint: Sprint Planning (înțelegerea și descompunerea task-urilor), Dezvoltare Iterativă, Sprint Review (prezentarea muncii realizate), Sprint Retrospective (identificarea punctelor tari și a celor de îmbunătățit).
        *   Flexibilitate și adaptabilitate la schimbări minore de cerințe sau la provocări tehnice neașteptate.
    *   **Managementul Eficient al Task-urilor cu Jira:**
        *   Crearea de task-uri clare și concise (dacă este cazul, deși majoritatea vor fi create de Tutore/AI).
        *   Actualizarea zilnică și corectă a statusului task-urilor alocate (To Do, In Progress, In Review, Done).
        *   Adăugarea de comentarii relevante, estimări de timp (dacă se solicită) și atașarea de artefacte (ex: print screen-uri, log-uri).
        *   Înțelegerea și urmărirea progresului pe board-ul Agile (Kanban sau Scrum simplificat).
    *   **Versionarea Profesională a Codului cu Git & GitHub:**
        *   Stăpânirea fluxului de lucru cu branch-uri: crearea de feature branches pentru fiecare task (ex: `feature/DMZ-123-nume-task`).
        *   Utilizarea corectă a comenzilor Git de bază și intermediare: `clone`, `status`, `add`, `commit` (cu mesaje clare și descriptive, conform standardelor), `push`, `pull`, `fetch`, `branch`, `checkout`, `merge` (înțelegerea conceptului de fast-forward vs. merge commit), `rebase` (la nivel conceptual, dacă nu se aplică direct).
        *   Crearea și gestionarea Pull Request-urilor (PRs) pe GitHub: descrieri clare ale PR-ului, link către task-ul Jira, adăugarea de revieweri.
        *   Participarea activă și constructivă la procesul de Code Review: oferirea de feedback pertinent și respectuos pe PR-urile colegilor și integrarea promptă a feedback-ului primit pe propriile PR-uri.
    *   **Comunicare Tehnică Clară și Eficientă:**
        *   Abilitatea de a explica probleme tehnice complexe într-un mod simplu și concis.
        *   Formularea de întrebări clare și specifice atunci când se solicită ajutor sau clarificări.
        *   Documentarea scrisă a muncii realizate (comentarii în cod, descrieri în Jira, contribuții la `SETUP_MODUL.md` și documentația finală).
        *   Abilități de prezentare a rezultatelor și a procesului de lucru în cadrul Sprint Review-urilor.
        *   Comunicare inter-personală respectuoasă, deschisă și constructivă cu toți membrii echipei și cu Tutorele.
    *   **Abordare Sistematică a Rezolvării Problemelor (Debugging):**
        *   Dezvoltarea unei metodologii pentru identificarea cauzei rădăcină a erorilor:
            *   Analiza atentă a mesajelor de eroare și a stack trace-urilor.
            *   Utilizarea log-urilor aplicației (MuleSoft, Talend, ClickHouse, NGINX, Frontend console) pentru a urmări fluxul de execuție.
            *   Testarea incrementală a codului și izolarea porțiunilor problematice.
            *   Utilizarea uneltelor de debugging specifice fiecărei tehnologii (ex: debugger-ul din Anypoint Studio, debugger-ul din browser pentru React, print-uri strategice în MicroPython).
            *   Căutarea online a soluțiilor pentru mesaje de eroare specifice, dar cu discernământ critic.
    *   **Producerea de Documentație Tehnică de Calitate:**
        *   Abilitatea de a scrie documentație tehnică (fișiere `SETUP_MODUL.md`, comentarii în cod, documentația proiectului) care este clară, concisă, corectă din punct de vedere tehnic și utilă pentru ceilalți membri ai echipei și pentru oricine ar dori să înțeleagă sau să ruleze proiectul.
        *   Utilizarea corectă a formatului Markdown pentru documentație.
    *   **Colaborare și Lucru în Echipă Eficient:**
        *   Coordonarea eforturilor cu alți membri ai echipei, în special la punctele de integrare între module (ex: Frontend consumând API-uri MuleSoft, RPi Pico apelând API MuleSoft, Talend și MuleSoft scriind în aceeași bază de date ClickHouse).
        *   Oferirea și solicitarea de ajutor în mod proactiv.
        *   Gestionarea constructivă a dependențelor între task-urile diferiților membri.
        *   Împărtășirea cunoștințelor și a descoperirilor cu restul echipei.

    **1.5.2. Competențe Specifice Detaliate pentru Team_1 (MuleSoft API Development & Logic, Talend ETL, ClickHouse Interaction Avansată, Concepte de Integrare)**
    *Studenții din Team_1 (Coman Raluca, Cotan Petruta, Necoara Aida Florentina) vor avea cel mai complex set de tehnologii noi de învățat, necesitând un efort individual și de echipă susținut. Ei vor fi responsabili pentru "inima" backend-ului și a fluxurilor de date.*
    *   **MuleSoft Anypoint Studio și Mule Runtime (Obiectiv Principal și Critic):**
        *   **Instalare și Configurare Mediu:** Instalarea corectă a Anypoint Studio, înțelegerea structurii unui proiect Mule, configurarea Mule Runtime-ului local embedat.
        *   **Design și Implementare API-uri RESTful cu RAML și APIkit:**
            *   Definirea contractelor API (resurse, metode HTTP, request/response schemas, data types, examples) folosind RAML.
            *   Generarea automată a scheletului de fluxuri Mule din specificația RAML folosind APIkit.
            *   Implementarea logicii pentru fiecare resursă și metodă în fluxurile Mule.
        *   **Componente Mule Esențiale (Conectori și Procesoare):**
            *   `HTTP Listener`: Configurarea pentru a expune endpoint-uri HTTP și HTTPS (cu generarea și configurarea de keystore-uri pentru certificate self-signed).
            *   `HTTP Request`: Configurarea pentru a apela API-uri externe (API-ul public de produse) și, potențial, alte API-uri interne (deși în noua arhitectură, MuleSoft este cel care expune majoritatea API-urilor).
            *   `Database Connector` (specific pentru ClickHouse sau JDBC generic): Configurarea conexiunii la instanța ClickHouse (rulată în Docker), scrierea și execuția de query-uri SQL parametrizate (SELECT, INSERT, UPDATE/ALTER TABLE). Gestionarea tranzacțiilor la nivel de bază.
            *   `Transform Message (DataWeave)`: **Competență Critică.** Scrierea de scripturi DataWeave pentru transformări de date complexe: maparea între diferite structuri JSON/XML/Java, manipularea listelor și obiectelor, utilizarea funcțiilor și operatorilor DataWeave, condiționare logică, formatare date.
            *   Componente de Rutare și Flux de Control: `Choice` (pentru if/else logic), `For Each` (pentru iterații), `Flow Reference` (pentru apelarea altor fluxuri/sub-fluxuri), `Scatter-Gather` (la nivel conceptual).
            *   `Logger`: Utilizarea extensivă pentru logging și debugging al variabilelor, payload-urilor și proprietăților mesajului Mule.
            *   `Error Handling`: Implementarea strategiilor de bază pentru gestionarea erorilor în fluxurile Mule (ex: `On Error Continue`, `On Error Propagate`, try-catch scopes).
        *   **Securizarea API-urilor (Nivel de Bază):** Înțelegerea conceptelor de securitate API. Dacă timpul permite, implementarea unei politici simple de securitate aplicate prin API Manager (local) sau direct în flux (ex: validare header API Key, Basic Authentication - la nivel demonstrativ).
        *   **Testare și Depanare Aplicații Mule:**
            *   Rularea aplicațiilor Mule în Anypoint Studio pe runtime-ul embedat.
            *   Utilizarea debugger-ului vizual din Anypoint Studio pentru a parcurge execuția fluxurilor pas cu pas și a inspecta mesajele Mule.
            *   (Opțional, dacă timpul permite) Scrierea de teste unitare de bază cu MUnit pentru fluxuri și scripturi DataWeave.
    *   **Talend Open Studio (Obiectiv Principal):**
        *   **Instalare și Configurare Mediu:** Instalarea corectă a Talend Open Studio (TOS for Data Integration).
        *   **Interfața și Conceptele TOS:** Navigarea în interfața grafică, înțelegerea conceptelor de Proiect, Job, Componentă, Metadata (Repository, Built-In), Legături (Main, Lookup, Iterate, Reject), Variabile de Context.
        *   **Design și Implementare Job-uri ETL Vizuale:**
            *   **Conectivitate Baze de Date (ClickHouse):**
                *   Utilizarea `tClickhouseInput` și `tClickhouseOutput` (dacă sunt disponibile și stabile în versiunea TOS) SAU, mai probabil și mai general, utilizarea componentelor `tJDBCInput` și `tDBOutput` (cu `tJDBCOutput` sau `tJDBCRow`) configurate cu driverul JDBC pentru ClickHouse (va trebui descărcat și adăugat în Talend).
                *   Definirea și stocarea metadatelor conexiunii la ClickHouse în Repository pentru reutilizare.
                *   Scrierea de query-uri SQL în componentele de input.
            *   **Citire Fișiere:** Utilizarea `tFileInputDelimited` pentru a citi și parsa fișierul CSV cu produse, definind corect schema, delimitatorul, encoding-ul.
            *   **Transformări de Date Avansate cu `tMap`:** **Competență Critică.**
                *   Realizarea de join-uri între multiple surse de input (ex: dacă se citesc date din mai multe fișiere sau tabele).
                *   Aplicarea de filtre complexe pe rânduri.
                *   Utilizarea variabilelor interne `tMap` și a funcțiilor Talend (string, date, numerice) în expresiile de mapare.
                *   Crearea de output-uri multiple din `tMap` (ex: un output pentru rândurile valide, altul pentru cele respinse).
            *   **Orchestrare și Flux de Control în Job-uri:** Utilizarea componentelor `tFlowToIterate`, `tLoop`, `tRunJob`. Utilizarea legăturilor condiționale (`Run if`, `OnSubjobOk`, `OnComponentOk`, `OnComponentError`).
            *   **Consum API-uri REST (cele expuse de MuleSoft):**
                *   Utilizarea componentei `tRestClient` pentru a apela endpoint-urile HTTP GET/POST expuse de MuleSoft.
                *   Configurarea URL-ului, metodei HTTP, header-elor (ex: `Content-Type: application/json`, `Accept: application/json`), și a body-ului request-ului (pentru POST).
                *   Procesarea răspunsului JSON primit de la API folosind `tExtractJSONFields` sau `tXMLMap` (dacă API-ul ar returna XML, deși MuleSoft va returna JSON).
            *   **Logging și Gestionarea Erorilor:** Utilizarea `tLogRow` pentru afișarea datelor în diferite etape ale fluxului. Implementarea mecanismelor de capturare și logare a erorilor și a rândurilor respinse (ex: scrierea lor într-un fișier separat sau într-un tabel de log).
            *   **Utilizarea Variabilelor de Context:** Definirea și utilizarea variabilelor de context pentru a parametriza job-urile (ex: căi către fișiere, URL-uri API, credențiale DB – deși pentru DB local nu vor fi complexe).
        *   **Testare și Depanare Job-uri Talend:** Rularea job-urilor în modul de debug din TOS, inspectarea datelor la nivel de componentă.
    *   **ClickHouse (Interacțiune Avansată și Design Schemă):**
        *   Contribuția activă la designul final al schemei tabelului `devimarket_db.products` și la crearea schemei simulate `clickhouse_db_franceza.products_fr`.
        *   Scrierea și optimizarea (la nivel de bază) query-urilor SQL pentru ClickHouse, atât din MuleSoft cât și din Talend (sau direct prin `clickhouse-client` pentru testare).
        *   Înțelegerea tipurilor de date specifice ClickHouse (`LowCardinality`, `UUID`, `DateTime`, `Map`, `Array`) și a modului lor de utilizare.
    *   **Concepte Fundamentale de Integrare a Datelor și Aplicațiilor:**
        *   Înțelegerea practică a pattern-urilor ETL (Extract, Transform, Load).
        *   Concepte de API Management (prin expunerea și consumul API-urilor MuleSoft).
        *   API-led Connectivity (la nivel conceptual, înțelegând cum MuleSoft poate acționa ca un strat de API-uri de sistem, proces și experiență – deși noi vom implementa doar o fracțiune).
        *   Data Mapping, Data Cleansing, Data Validation.
        *   Orchestrarea serviciilor și a fluxurilor de date.

    **1.5.3. Competențe Specifice Detaliate pentru Team_2 (React, HTML/CSS/JS, Consum API-uri MuleSoft, MetaMask)**
    *Studenții din Team_2 (Tuca Dragos Andrei, Proaspatu Nicolae Bogdan) se vor concentra pe crearea unei experiențe utilizator moderne și funcționale, interacționând intensiv cu API-urile expuse de Team_1 (MuleSoft).*
    *   **React (Obiectiv Principal):**
        *   **Setup și Fundamente Proiect React cu Vite:** Crearea unui nou proiect, înțelegerea structurii de foldere, JSX (JavaScript XML), conceptul de componente funcționale, props (proprietăți trecute componentelor).
        *   **State Management cu Hook-uri React:** Utilizarea aprofundată a hook-ului `useState` pentru gestionarea stării locale a componentelor (ex: input-uri de formular, starea de încărcare, datele primite de la API).
        *   **Ciclul de Viață al Componentelor și Efecte Secundare cu `useEffect`:** Utilizarea `useEffect` pentru a realiza operațiuni după ce componenta s-a randat, cum ar fi:
            *   Fetch-uirea datelor de la API-urile MuleSoft la montarea componentei.
            *   Gestionarea stărilor de încărcare (`loading`) și eroare (`error`) în timpul apelurilor API.
            *   Adăugarea și curățarea event listener-ilor (mai puțin relevant în acest MVP).
        *   **Rutare Client-Side cu React Router DOM v6:**
            *   Definirea rutelor aplicației (ex: `/`, `/products`, `/products/:productId`).
            *   Crearea de componente pentru fiecare rută.
            *   Utilizarea componentelor `<Link>` și `<NavLink>` pentru navigare declarativă.
            *   Utilizarea hook-urilor `useNavigate` (pentru navigare programatică) și `useParams` (pentru a extrage parametrii dinamici din URL, ex: `productId`).
        *   **(Opțional) Formulare Simple:** Dacă se adaugă o funcționalitate minimă de căutare/filtrare, se va implementa gestionarea input-urilor și submit-ului unui formular simplu.
        *   **Consumul API-urilor REST expuse de MuleSoft:**
            *   Utilizarea Axios (preferabil, pentru funcționalități built-in precum interceptori, deși `fetch` API este o alternativă validă) pentru a realiza request-uri HTTP GET către endpoint-urile MuleSoft (cele pentru listare produse și detalii produs).
            *   Trimiterea de parametrii de query (ex: pentru paginare, filtrare) în request-urile GET.
            *   Procesarea răspunsurilor JSON de la API-urile MuleSoft și actualizarea stării componentelor React pentru a afișa datele.
            *   Implementarea unei gestionări robuste a erorilor de la API (afișarea de mesaje prietenoase utilizatorului).
        *   **Crearea de Componente Reutilizabile:** Proiectarea și implementarea de componente UI generice (ex: `ProductCard`, `Button`, `Spinner`) pentru a menține codul curat și DRY (Don't Repeat Yourself).
        *   **Styling cu Tailwind CSS:** Utilizarea eficientă și consistentă a claselor utilitare Tailwind CSS pentru a construi interfața vizuală, conform unui design simplu și modern. Înțelegerea conceptului de utility-first CSS și a modului de customizare a Tailwind (dacă este necesar).
        *   **Debugging Aplicații React:** Utilizarea intensivă a React Developer Tools (extensie de browser) pentru a inspecta ierarhia componentelor, props-urile și starea. Utilizarea consolei browser-ului pentru a loga informații și a depista erori JavaScript.
    *   **HTML5 și CSS3 (în contextul Tailwind):**
        *   Scrierea de HTML semantic și accesibil.
        *   Înțelegerea modului în care Tailwind CSS generează CSS și cum se pot aplica stiluri custom dacă este absolut necesar (deși se va încuraja utilizarea claselor existente).
    *   **JavaScript Modern (ES6+):**
        *   Utilizarea fluentă a sintaxei moderne JavaScript: arrow functions, destructuring assignments, template literals, module ES6 (import/export), promisiuni (`Promise`) și `async/await` pentru gestionarea operațiunilor asincrone (cum ar fi apelurile API).
    *   **Integrarea cu Portofelul MetaMask:**
        *   Verificarea programatică a prezenței extensiei MetaMask în browser (`window.ethereum`).
        *   Inițierea cererii de conectare a portofelului către utilizator folosind `window.ethereum.request({ method: 'eth_requestAccounts' })`.
        *   Preluarea și stocarea (în starea React) a adresei contului selectat de utilizator din array-ul returnat.
        *   Afișarea dinamică a adresei în interfața utilizator.
        *   Gestionarea cazului în care utilizatorul refuză conexiunea sau MetaMask nu este instalat (afișarea de mesaje informative corespunzătoare).

    **1.5.4. Competențe Specifice Detaliate pentru Team_7 (Docker, Docker Compose, NGINX, Networking, ClickHouse Setup)**
    *Studenții din Team_7 (Chesnoiu Andrei Bogdan, Ghetau Cristian Marian, cu Culesca Teodora Maria având rol de QA) vor fi responsabili pentru fundația pe care rulează o parte din aplicație și pentru expunerea Frontend-ului.*
    *   **Docker (Obiectiv Principal):**
        *   **Scrierea de Dockerfile-uri Optimizate:**
            *   Pentru **ClickHouse**: Pornind de la imaginea oficială `clickhouse/clickhouse-server`, se va crea un Dockerfile (sau se va configura direct în `docker-compose.yml`) care permite montarea unui script de inițializare SQL (`.sh` care apelează `clickhouse-client` sau direct fișiere `.sql`) pentru a crea bazele de date (`devimarket_db`, `clickhouse_db_franceza`) și tabelul `products` (și tabelul `products_fr`) la prima pornire a containerului, dacă acestea nu există. Se va asigura configurarea corectă a utilizatorilor și parolelor pentru ClickHouse (prin variabile de mediu Docker).
            *   Pentru **NGINX (Servire Frontend React)**: Crearea unui Dockerfile multi-stage. Prima etapă va folosi o imagine Node.js pentru a instala dependențele aplicației React și a rula `npm run build` (sau `yarn build`) pentru a genera fișierele statice. A doua etapă va folosi o imagine NGINX oficială (ex: `nginx:alpine-slim`) și va copia doar fișierele de build din prima etapă și fișierul de configurare NGINX customizat în locațiile corecte din containerul NGINX. Aceasta asigură o imagine finală NGINX mică și securizată.
        *   **Management Avansat Imagini și Containere:** Pe lângă comenzile de bază, înțelegerea conceptelor de layer-e Docker, Docker cache (pentru build-uri rapide), `docker inspect` (pentru a obține detalii despre containere/imagini), `docker network ls/inspect` (pentru a vedea rețelele Docker).
        *   **Volume Docker Detaliat:** Utilizarea volumelor Docker numite (ex: `clickhouse_persistent_data`) pentru a asigura persistența datelor bazei de date ClickHouse chiar și după ștergerea containerului. Utilizarea bind mounts (montare directă a unui folder de pe host în container) pentru fișierele de configurare NGINX (permițând modificarea configurației NGINX fără a reconstrui imaginea Docker, pentru dezvoltare rapidă).
    *   **Docker Compose (Obiectiv Principal):**
        *   **Scrierea unui fișier `docker-compose.yml` Complet și Robust:**
            *   Definirea serviciilor: `clickhouse-server`, `nginx-frontend`.
            *   Specificarea `build` context (calea către Dockerfile) sau `image` (pentru imagini pre-existente).
            *   Configurarea `ports` pentru a mapa porturile containerelor pe porturile host-ului VM (ex: portul 8123 al ClickHouse pe un port al VM-ului, portul 80/443 al NGINX pe porturile 80/443 ale VM-ului).
            *   Definirea `volumes` pentru persistența datelor ClickHouse și pentru fișierele de configurare NGINX.
            *   Crearea și utilizarea de **rețele Docker custom** (ex: o rețea `devimarket-net`) pentru a permite containerelor să comunice între ele folosind numele serviciilor ca hostname-uri, și pentru o mai bună izolare față de rețeaua default bridge.
            *   Setarea `environment` variables pentru containere (ex: parole pentru ClickHouse, variabile de configurare pentru NGINX).
            *   Utilizarea `depends_on` pentru a specifica ordinea de pornire a serviciilor (deși `depends_on` nu garantează că serviciul este complet funcțional, doar că containerul a pornit – pot fi necesare scripturi de "wait-for-it" sau mecanisme de retry în aplicațiile client dacă este critic).
        *   **Managementul Stack-ului de Aplicații:** Utilizarea fluentă a comenzilor `docker-compose up -d` (pornire în detached mode), `docker-compose down` (oprire și ștergere containere/rețele), `docker-compose logs -f [service_name]` (vizualizare log-uri), `docker-compose build [service_name]` (reconstruire imagine), `docker-compose exec [service_name] [command]` (executare comenzi în container).
    *   **NGINX (Configurare Detaliată pentru Servire Frontend și HTTPS):**
        *   **Fișier de Configurare NGINX (`nginx.conf` sau `default.conf`):**
            *   Definirea unui bloc `server` care ascultă pe portul 80 (HTTP) și, opțional, pe portul 443 (HTTPS).
            *   Setarea `root` la calea unde sunt copiate fișierele statice ale build-ului React în containerul NGINX.
            *   Setarea `index index.html index.htm;` pentru a servi `index.html` ca fișier default.
            *   Configurarea blocului `location /` pentru a servi fișierele statice și a implementa rutarea pe client pentru React Router folosind `try_files $uri $uri/ /index.html;`. Aceasta asigură că la un refresh al paginii pe o rută React (ex: `/products/123`), NGINX servește tot `index.html`, iar React Router preia controlul rutării.
            *   (Opțional, dar recomandat pentru învățare) **Configurarea HTTPS cu Certificate Self-Signed:**
                1.  Generarea unei perechi cheie privată + certificat self-signed (X.509) folosind `openssl` pe VM-ul Ubuntu.
                2.  Montarea acestor fișiere (cheie și certificat) în containerul NGINX printr-un volum.
                3.  Configurarea blocului `server` NGINX pentru a asculta pe portul 443 `ssl`, specificând căile către fișierele de certificat (`ssl_certificate`) și cheie (`ssl_certificate_key`).
                4.  (Opțional) Redirectarea automată a traficului de la HTTP (port 80) la HTTPS (port 443).
        *   **Optimizări de Bază NGINX (la nivel conceptual sau implementare simplă):**
            *   Setarea header-elor HTTP pentru caching (ex: `Cache-Control`, `Expires`) pentru resursele statice (JS, CSS, imagini) pentru a îmbunătăți performanța la vizitele repetate (deși pentru un mediu local, impactul e mic, dar conceptul e important).
            *   Activarea compresiei Gzip (`gzip on;`) pentru a reduce dimensiunea fișierelor text (HTML, CSS, JS) transferate către client.
    *   **Networking (Concepte Aplicate și Depanare):**
        *   Configurarea corectă a fișierului `/etc/hosts` pe VM-ul Ubuntu pentru a mapa un nume de domeniu local (ex: `devimarket.local` sau `react.devimarket.local`) la `127.0.0.1`, pentru a accesa NGINX prin acest nume prietenos.
        *   Înțelegerea modului în care API-urile MuleSoft (rulate nativ pe VM, ex: pe `localhost:8081`) sunt accesate de Frontend (rulat în browser, care accesează NGINX pe `devimarket.local`, care apoi servește JS ce face call la `localhost:8081` al VM-ului) și de RPi Pico (care trebuie să cunoască IP-ul VM-ului studentului din Team_1 în rețeaua locală). Aceasta poate implica configurări CORS pe API-urile MuleSoft dacă Frontend-ul este servit de pe un "domeniu" diferit (chiar și local, ex: `devimarket.local` vs `localhost:8081`).
        *   Utilizarea uneltelor de diagnosticare rețea: `ping` (pentru a verifica conectivitatea la IP-uri), `curl` (pentru a testa API-urile MuleSoft și NGINX din linia de comandă), `netstat` sau `ss` (pentru a vedea porturile deschise și conexiunile active pe VM), `docker network inspect` (pentru a vedea configurația rețelelor Docker).
        *   Înțelegerea conceptului de firewall (ex: `ufw` pe Ubuntu) și cum ar putea afecta comunicarea dacă este activ și nu sunt adăugate reguli pentru porturile necesare (deși pentru VM-uri locale de dev, firewall-ul e adesea dezactivat sau permisiv).
    *   **ClickHouse (Setup și Administrare de Bază în Docker):**
        *   Crearea și gestionarea scripturilor SQL de inițializare (`init-db.sh` sau fișiere `.sql` montate în `/docker-entrypoint-initdb.d/` al containerului ClickHouse) pentru a crea automat bazele de date (`devimarket_db`, `clickhouse_db_franceza`) și tabelele (`products`, `products_fr`) cu schema corectă la prima pornire.
        *   Configurarea utilizatorilor și a permisiunilor în ClickHouse (ex: un utilizator pentru MuleSoft, altul pentru Talend, cu permisiuni specifice pe bazele de date/tabelele relevante). Acest lucru se poate face prin variabile de mediu la pornirea containerului ClickHouse (dacă imaginea oficială o suportă) sau prin scripturile de inițializare.
        *   Monitorizarea log-urilor containerului ClickHouse pentru erori de pornire sau de execuție query-uri.
        *   Realizarea de backup-uri și restaurări simple ale datelor ClickHouse (la nivel conceptual sau prin copierea folderului de date din volumul Docker, pentru acest proiect).

    **1.5.5. Competențe Specifice Detaliate pentru Team_9 (MicroPython, RPi Pico W Hardware, HTTP, Interfațare Periferice)**
    *Studenții din Team_9 (Cadar Andreea, Pista Darius) se vor aventura în lumea sistemelor embedded, combinând programarea hardware cu interacțiunile de rețea.*
    *   **Raspberry Pi Pico W și MicroPython (Obiectiv Principal):**
        *   **Setup Mediu de Dezvoltare:** Instalarea Thonny IDE (sau configurarea VS Code cu extensii pentru MicroPython/Pico W). Flash-uirea celui mai recent firmware MicroPython stabil pe placa RPi Pico W. Stabilirea unei conexiuni seriale (REPL) cu placa pentru programare și debugging.
        *   **Fundamente MicroPython:** Sintaxa de bază Python aplicată în contextul MicroPython (diferențe față de CPython, limitări de resurse). Lucrul cu modulele built-in specifice MicroPython.
        *   **Programare GPIO:** Controlul LED-ului onboard (și, opțional, al altor LED-uri externe) pentru a oferi feedback vizual utilizatorului (ex: status conexiune WiFi, succes/eroare trimitere date). Citirea stării unui buton (opțional, pentru a declanșa o acțiune).
        *   **Conectivitate WiFi:** Utilizarea modulului `network` pentru a scana rețelele WiFi disponibile, a se conecta la o rețea specificată (SSID și parolă stocate securizat într-un fișier `config.py`, neinclus în Git), a verifica statusul conexiunii și a obține adresa IP. Implementarea mecanismelor de reîncercare automată a conexiunii în caz de eșec.
        *   **Realizarea de Request-uri HTTP/HTTPS (cu `urequests`):**
            *   Importarea și utilizarea bibliotecii `urequests` (o versiune light a `requests` pentru MicroPython).
            *   Construirea și trimiterea de request-uri `POST` către API-ul MuleSoft dedicat scannerului.
            *   Formatarea corectă a header-elor HTTP (ex: `Content-Type: application/json`).
            *   Serializarea datelor (codul de bare și timestamp) în format JSON pentru a fi trimise în corpul request-ului.
            *   **Gestionarea HTTPS și a Certificatelor Self-Signed:** Aceasta este o provocare în MicroPython cu `urequests`. Soluția cea mai probabilă pentru mediul local va fi **să se configureze `urequests` (dacă permite) să nu valideze certificatul SSL al serverului (API-ul MuleSoft)**. Aceasta este o vulnerabilitate de securitate într-un mediu de producție, dar este o abordare pragmatică și acceptabilă pentru acest proiect de practică local, și trebuie documentată clar ca atare. Alternativ, dacă API-ul MuleSoft poate fi expus și pe HTTP (doar pentru RPi Pico și doar în rețeaua locală), aceasta ar simplifica request-ul de pe Pico, dar ar introduce alte considerații de securitate. **Se va alege soluția cea mai fezabilă în timpul alocat.**
            *   Procesarea răspunsului de la API-ul MuleSoft: citirea status code-ului HTTP și a corpului răspunsului JSON (dacă există).
        *   **Interfațarea cu Scannerul de Coduri de Bare USB (HID):**
            *   **Cercetare și Implementare:** Aceasta este cea mai exploratorie parte. Obiectivul este ca Pico W să citească secvența de caractere trimisă de un scanner USB generic care emulează o tastatură (HID). Posibile abordări (de investigat de Team_9 cu sprijinul Tutorelui):
                1.  **Emulare USB Host Minimală pe Pico W (dacă există biblioteci MicroPython simple):** Anumite plăci și firmware-uri pot avea suport limitat pentru a acționa ca un USB host și a citi de la dispozitive HID simple. Necesită biblioteci specifice și poate fi complex.
                2.  **Citire Serială (dacă scannerul poate fi configurat în mod serial sau se folosește un convertor USB-Serial):** Unii scanneri pot fi comutați într-un mod de emulare port serial (COM), ceea ce ar face citirea mult mai simplă folosind interfața UART a Pico W.
                3.  **Soluție de Backup (Simulare Input):** Dacă interfațarea directă a scannerului se dovedește prea complexă sau consumatoare de timp pentru MVP, se va implementa o metodă de **input manual al codului de bare prin consola serială REPL a Pico W**. Studentul va tasta codul de bare în Thonny, iar scriptul MicroPython îl va prelua și procesa ca și cum ar veni de la scanner. Aceasta asigură că restul logicii (WiFi, HTTP request) poate fi testat și demonstrat. **Este crucial ca Team_9 să documenteze clar metoda finală aleasă și orice limitări.**
        *   **Structurarea Codului MicroPython:** Organizarea codului în funcții reutilizabile (ex: pentru conectare WiFi, trimitere request HTTP, citire scanner).
        *   **Debugging Scripturi MicroPython:** Utilizarea intensivă a `print()`-urilor trimise către consola REPL (Thonny) pentru a urmări execuția și valorile variabilelor. Gestionarea excepțiilor cu `try...except`.

    **1.5.6. Competențe Specifice Detaliate pentru Rolul de QA și Coordonare Documentație (Culesca Teodora Maria, Team_7)**
    *Deși toți studenții sunt responsabili pentru calitatea și documentarea muncii lor, Teodora va avea un rol transversal de a sprijini și coordona aceste eforturi la nivel de proiect.*
    *   **Principii Fundamentale de Quality Assurance (QA):**
        *   Înțelegerea importanței testării în ciclul de viață al dezvoltării software.
        *   Diferențierea între tipurile de bază de teste: testare funcțională (verifică dacă o funcționalitate face ce ar trebui), testare de integrare (verifică dacă modulele funcționează corect împreună – la nivel de API-uri în acest caz).
        *   Conceptul de caz de test (test case): input-uri, acțiuni, output așteptat, output actual.
    *   **Testarea API-urilor cu Postman (Obiectiv Principal):**
        *   Instalarea și familiarizarea cu interfața Postman.
        *   Crearea și organizarea request-urilor HTTP (GET, POST) într-o colecție Postman dedicată pentru API-urile expuse de MuleSoft.
        *   Configurarea corectă a request-urilor: URL, metodă HTTP, headere (ex: `Content-Type`, `Accept`, headere de autentificare simple dacă se implementează), body (JSON pentru request-urile POST).
        *   Utilizarea variabilelor de mediu și de colecție în Postman pentru a gestiona URL-urile de bază ale API-urilor, porturile și alte valori configurabile.
        *   **Scrierea de Teste (Aserțiuni) în Postman:** Utilizarea tab-ului "Tests" din Postman pentru a scrie scripturi JavaScript simple care validează răspunsurile API:
            *   Verificarea status code-ului HTTP (ex: `pm.response.to.have.status(200)`).
            *   Verificarea prezenței anumitor câmpuri în răspunsul JSON (ex: `pm.expect(jsonData).to.have.property('id')`).
            *   Verificarea tipului de date al câmpurilor (ex: `pm.expect(jsonData.price).to.be.a('number')`).
            *   Verificarea valorilor specifice (ex: `pm.expect(jsonData.name).to.eql("Expected Product Name")`).
        *   Rularea colecțiilor de teste și interpretarea rezultatelor.
        *   Exportarea colecțiilor Postman (ca JSON) pentru a fi versionate pe GitHub.
    *   **Planificarea și Execuția Testării Funcționale Manuale:**
        *   Colaborarea cu fiecare echipă pentru a înțelege funcționalitățile implementate în fiecare sprint.
        *   Crearea unui document simplu de Plan de Testare (poate fi un fișier Markdown) care listează principalele funcționalități de testat și scenariile cheie (pozitive și negative) pentru MVP.
        *   Executarea testelor manuale pe interfața Frontend React, pe fluxurile ETL Talend și MuleSoft (verificând datele în ClickHouse), și pe sistemul de scanare RPi Pico.
    *   **Raportarea și Urmărirea Defectelor (Bugs) în Jira:**
        *   Crearea de tichete de tip "Bug" în Jira pentru fiecare problemă identificată.
        *   Descrierea clară și detaliată a bug-ului: titlu, pași exacți pentru reproducere, rezultatul actual, rezultatul așteptat, severitate/prioritate (estimativ), capturi de ecran sau log-uri relevante.
        *   Urmărirea statusului bug-urilor și re-testarea lor după ce dezvoltatorii le marchează ca rezolvate.
    *   **Coordonarea și Revizuirea Documentației Tehnice:**
        *   Colaborarea cu fiecare echipă pentru a se asigura că fișierele `SETUP_MODUL.md` sunt complete, corecte și ușor de urmărit.
        *   Revizuirea generală a documentației de proiect pentru consistență, claritate și corectitudine gramaticală.
        *   Asistarea la consolidarea documentației finale în Sprint 4.
    *   **Promovarea Calității:** Încurajarea tuturor membrilor echipei să adopte o mentalitate orientată spre calitate și să testeze riguros propria muncă.

**1.6. Constrângerile Fundamentale și Inflexibile ale Proiectului**

Aceste constrângeri definesc limitele în cadrul cărora proiectul trebuie să se desfășoare și sunt nenegociabile. Ele influențează alegerile tehnologice, complexitatea funcționalităților și planificarea generală.

    **1.6.1. Constrângerea de Cost Zero Absolut (Tehnologii și Servicii)**
    *   **Software și Platforme:** Se vor utiliza exclusiv versiuni gratuite și/sau open-source ale tuturor tehnologiilor, bibliotecilor și platformelor de dezvoltare. Aceasta include:
        *   Sistem de Operare: Ubuntu Linux (pe VM-uri).
        *   IDE-uri: VS Code (cu extensii gratuite), Thonny IDE (pentru MicroPython).
        *   Platforme de Integrare: **Talend Open Studio for Data Integration**, **MuleSoft Anypoint Studio** (include Mule Runtime embedat pentru dezvoltare și rulare locală gratuită).
        *   Limbaje de Programare: JavaScript (React), Python (MicroPython).
        *   Bază de Date: **ClickHouse** (imagine Docker oficială).
        *   Containerizare: **Docker** și **Docker Compose**.
        *   Server Web/Reverse Proxy: **NGINX** (imagine Docker oficială).
        *   Biblioteci Frontend/Backend: Toate bibliotecile Node.js (npm) și Python (pip) trebuie să fie open-source și gratuit de utilizat.
    *   **Servicii Cloud și Găzduire:** **NU** se vor utiliza servicii cloud care implică costuri (ex: AWS EC2, S3, RDS; Azure VMs, Blob Storage; Google Cloud Platform; Heroku; Netlify/Vercel cu planuri plătite). Întreaga aplicație și toate componentele sale trebuie să poată fi rulate și demonstrate exclusiv local, pe mașinile virtuale ale studenților. Nu se vor folosi trial-uri de servicii plătite care expiră.
    *   **Impact:** Această constrângere dictează alegerea tehnologiilor și poate limita anumite funcționalități care ar depinde de servicii cloud specifice (ex: servicii de notificare push, stocare fișiere la scară mare etc., care nu sunt oricum în scopul acestui MVP).

    **1.6.2. Constrângerea de Timp (Structura pe Sprinturi și Ore Alocate)**
    *   Proiectul este riguros structurat în sprinturi, fiecare cu o durată fixă și un număr specific de ore de lucru efectiv alocate per student. Respectarea acestor intervale este esențială pentru finalizarea MVP-ului.
        *   **Sprint 1 (Fundație și Setup Mediu Linux):** Perioadă: **ÎNCHEIAT**. Studenții au mașinile virtuale Ubuntu funcționale și s-au familiarizat cu comenzile de bază Linux.
        *   **Sprint 2 (Analiză Proiect, Setup Detaliat Medii de Dezvoltare Specifice, Primul "Hello World" Funcțional per Modul):**
            *   Perioadă: **19/05/2025 - 30/05/2025** (asumând că datele sunt pentru 2025; a se ajusta dacă anul este altul).
            *   Timp Alocat per Student: **8 ore de lucru efectiv**.
            *   Obiectiv Principal: Înțelegerea completă a acestui document (README.md), instalarea și configurarea tuturor mediilor de dezvoltare specifice pentru modulul/tehnologiile alocate (React/Vite, Anypoint Studio, Talend Studio, Docker, Thonny/MicroPython, Postman) și realizarea cu succes a unui exemplu "Hello World" funcțional sau a unei operațiuni de bază pentru fiecare.
        *   **Sprint 3 (Dezvoltare Module Fundamentale, Integrare Componente, Testare și Realizare MVP):**
            *   Perioadă: **Urmează după Sprint 2** (datele exacte vor fi stabilite, ex: 23/06/2025 – 04/07/2025, dacă se respectă structura inițială de pauză pentru sesiune).
            *   Timp Alocat per Student: **60 de ore de lucru efectiv**.
            *   Obiectiv Principal: Dezvoltarea funcționalităților de bază ale tuturor modulelor (Frontend, API-uri MuleSoft, Job-uri Talend, Script RPi Pico, Configurații Docker/NGINX), integrarea acestora pentru a forma un flux funcțional end-to-end și testarea MVP-ului.
        *   **Sprint 4 (Documentație Tehnică Finală, Pregătire CV-uri, Realizare și Susținere Prezentare Finală Proiect):**
            *   Perioadă: **Urmează după Sprint 3** (ex: 07/07/2025 – 11/07/2025).
            *   Timp Alocat per Student: **20 de ore de lucru efectiv**.
            *   Obiectiv Principal: Consolidarea și finalizarea întregii documentații tehnice a proiectului, pregătirea de către fiecare student a secțiunilor relevante pentru CV-ul personal și crearea/susținerea unei prezentări finale comprehensive a proiectului și a experienței de învățare.
    *   **Impact:** Complexitatea funcționalităților implementate trebuie să fie realistă pentru timpul alocat. Prioritizarea corectă a task-urilor în fiecare sprint este crucială. Orice întârziere într-un sprint poate afecta negativ sprinturile următoare.

    **1.6.3. Constrângerea Nivelului de Start (Abordare "De la Zero" pentru Tehnologii Noi)**
    *   Se pornește de la premisa fundamentală că studenții participanți (anul 3) au cunoștințe de programare de bază (ex: variabile, structuri de control, funcții, concepte OOP într-un limbaj precum Java sau C++) dobândite în cadrul cursurilor universitare și au finalizat cu succes Sprintul 1 (setup VM Ubuntu, comenzi CLI Linux).
    *   Pentru tehnologiile specifice acestui proiect – **React, MuleSoft Anypoint Platform, Talend Open Studio, ClickHouse, Docker, NGINX, MicroPython** – se asumă un nivel de cunoștințe inițial **zero sau minim**.
    *   Curba de învățare, în special pentru platformele de integrare MuleSoft și Talend, precum și pentru conceptele de containerizare cu Docker și configurarea NGINX, este recunoscută ca fiind potențial abruptă.
    *   **Impact:**
        *   Acest document (README.md) și ghidarea constantă din partea Tutorelui (Petrut Constantin) sunt esențiale pentru a facilita procesul de învățare.
        *   Task-urile din Sprint 2 (setup și "Hello World") sunt cruciale pentru a construi o fundație minimă.
        *   Complexitatea funcționalităților dezvoltate în Sprint 3 va fi adaptată pentru a fi realizabilă de către începători ghidați. Se va pune accent pe înțelegerea conceptelor de bază și pe implementarea unor scenarii simple, dar complete.
        *   Este esențial ca studenții să aloce timp suficient pentru studiu individual (documentație oficială, tutoriale) și să nu ezite să pună întrebări.

    **1.6.4. Constrângerea Mediului de Dezvoltare și Rulare (VM Ubuntu, Docker, Native Java Runtimes)**
    *   **Sistem de Operare Standard:** Toți studenții vor utiliza mașini virtuale **Ubuntu Linux** (aceeași versiune, configurată în Sprint 1) ca mediu de dezvoltare principal. Aceasta asigură consistența și evită problemele legate de diferențele între sistemele de operare host.
    *   **Versiuni Software:** Se vor stabili și utiliza versiuni specifice (sau cel puțin compatibile) pentru software-ul cheie (ex: Node.js, JDK pentru Talend/MuleSoft, Python, Docker) pentru a minimiza problemele de compatibilitate. Acestea vor fi specificate în fișierele `SETUP_MODUL.md`.
    *   **Mediu de Rulare Hibrid:**
        *   **Componente Containerizate (Docker):** Baza de date ClickHouse și serverul web NGINX (care servește build-ul React) vor rula în containere Docker, gestionate prin Docker Compose. Aceasta asigură portabilitatea și izolarea acestor servicii.
        *   **Componente Rulate Nativ:** Platformele de dezvoltare **Talend Open Studio** și **MuleSoft Anypoint Studio** (care include propriul Mule runtime embedat) vor fi instalate și rulate **direct pe mașina virtuală Ubuntu** a studenților din Team_1. Această abordare a fost aleasă pentru a simplifica procesul de învățare inițial al acestor platforme complexe, evitând adăugarea complexității containerizării lor (care poate fi un subiect avansat în sine). Aceste aplicații native vor interacționa cu serviciile din Docker (ClickHouse) prin porturile expuse de Docker pe interfața de rețea a VM-ului.
        *   **Raspberry Pi Pico W:** Va rula MicroPython și va comunica prin rețeaua WiFi locală cu API-ul MuleSoft de pe VM-ul studentului din Team_1.
    *   **Impact:** Studenții trebuie să înțeleagă atât conceptele de containerizare (pentru o parte a stack-ului), cât și cum să instaleze și să ruleze aplicații Java complexe (Talend, MuleSoft) direct pe Linux. Gestionarea corectă a rețelei locale și a porturilor devine importantă pentru comunicarea între componentele native și cele containerizate.

---
