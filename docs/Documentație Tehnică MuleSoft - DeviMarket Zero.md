# Documentație Tehnică MuleSoft - DeviMarket Zero

---

## 1. Rolul General al MuleSoft în DeviMarket Zero:

MuleSoft reprezintă platforma centrală API a proiectului DeviMarket Zero, având rolul de a:

- Gestiona accesul la date și servicii prin API-uri bine definite.
- Asigura integrarea între dispozitivele hardware (RPi Pico), sursele externe de produse (API-uri terțe), și baza de date performantă ClickHouse.
- Gestiona fluxuri de procesare și transformare a datelor, inclusiv validare și normalizare, folosind DataWeave.
- Oferi o interfață securizată și extensibilă pentru frontend-ul React și alte consumatoare ale API-urilor.

---

## 2. Aplicații MuleSoft Majore și Detalii Implementare




### 2.1 Scanner API - `/api/scanner/product_scan`

- **RAML:** [src/main/resources/api/scanare-produs-api.raml](https://github.com/Serathill/devi-market-zero/blob/0b3800f87bd10e6c4dacc1d3bd1e4cea833bc141/src/main/resources/api/scanare-produs-api.raml)
  
  
### 2.2 Scopurile și logica flow-urilor din MuleSoft:

A. Fluxul de Scanare Produs (post:/product_scan:application\json:scanare-produs-api-config):
Acest flux este punctul de intrare pentru datele trimise de scannerul Raspberry Pi Pico și este esențial pentru adăugarea sau actualizarea produselor în timp real. La primirea unei cereri de la scanner, fluxul validează mai întâi dacă datele esențiale (barcode și scan_timestamp) sunt prezente și corecte; în caz contrar, oprește execuția cu o eroare. Apoi, normalizează datele primite (standardizează codul de bare și formatează data) și interoghează baza de date pentru a verifica dacă produsul există deja. Dacă produsul este nou, fluxul încearcă să insereze o nouă înregistrare, gestionând eventualele erori de scriere printr-un bloc Try. Dacă produsul există deja, fluxul confirmă operațiunea ca o "actualizare" și returnează un răspuns corespunzător. Întregul proces este conceput pentru a fi robust, returnând mesaje de eroare clare și statusuri HTTP corecte (201 Created pentru inserare, 200 OK pentru actualizare) pentru a asigura o comunicare fiabilă cu dispozitivul hardware.

B.  Fluxul de Listare Produse(get:\products:scanare-produs-api-config):
Acest flux este motorul care alimentează cu date interfața web și este special conceput pentru a oferi o experiență de navigare eficientă prin paginare. Când primește o cerere GET, fluxul extrage și validează parametrii de page și limit, asigurându-se că aceștia sunt în limite rezonabile. Logica sa inteligentă constă în executarea a două interogări SQL distincte și secvențiale: prima extrage "felia" exactă de produse pentru pagina solicitată, folosind clauzele LIMIT și OFFSET, în timp ce a doua calculează numărul total de produse din tabel. La final, fluxul asamblează un răspuns JSON complex, care combină lista de produse (data) cu un obiect de metadate (metadata) ce conține informații critice pentru paginare, precum pagina curentă, numărul total de pagini și numărul total de produse, oferind astfel Frontend-ului tot ce are nevoie pentru a construi o interfață de navigare completă.

C.  Fluxul de Transfer Automat de Produse (product-transferFlow)
Acest flux implementează un proces de migrare de date complet automatizat, conceput pentru a transfera produse dintr-o bază de date sursă ("clickhouse_db_franceza") în baza de date principală a proiectului(devimarket_db.products). Declanșat periodic la fiecare oră de un Scheduler, fluxul extrage mai întâi toate produsele active("is_active=1") care nu au fost încă transferate din tabela clickhouse_db_franceza.products_fr. Apoi, printr-o componentă Transform Message, fluxul mapează și redenumește câmpurile din structura sursă în cea a tabelei destinație (de ex: product_title devine name), generează un cod de bare nou și unic (uuid()) și setează o etichetă de origine (source_etl). Piesa centrală a logicii este o buclă For Each care procesează fiecare produs transformat individual. În interiorul buclei, produsul este mai întâi inserat în tabela principală devimarket_db.products. Imediat după inserarea cu succes, o operațiune Update este executată pe tabela sursă pentru a marca produsul respectiv ca fiind transferat (is_transfered = 1), asigurând astfel că nu va fi procesat din nou la următoarea rulare a fluxului. Utilizarea extensivă a componentelor Logger oferă o vizibilitate clară asupra fiecărui pas, de la numărul de produse extrase până la confirmarea fiecărei inserări și actualizări.


### 2.3 Explicarea transformărilor DataWeave complexe:

  Fluxul de Scanare Produs (post:/product_scan:application\json:scanare-produs-api-config)
Transformarea DataWeave din acest flux joacă un rol important în normalizarea și pregătirea datelor pentru a garanta integritatea și compatibilitatea cu baza de date. În primul rând, aplică operațiuni de "curățare a datelor" asupra codului de bare, eliminând spațiile goale și convertind textul în majuscule, o practică esențială pentru a preveni înregistrările duplicate și pentru a asigura o formă standardizată și unică. În al doilea rând, transformarea gestionează data și ora scanării. Aceasta convertește formatul timestamp standard (ISO 8601) primit de la dispozitivul extern în formatul specific cerut de coloana DateTime din ClickHouse, prevenind astfel erorile de scriere în baza de date.
<img width="958" alt="image" src="https://github.com/user-attachments/assets/03155f6a-2d76-407a-9135-40b045fe343f" />
<img width="958" alt="image" src="https://github.com/user-attachments/assets/a522d406-9902-4645-bdf4-8bcb9ed846c8" />



  Fluxul de Transfer Automat (product-transferFlow)
Acest flux conține două transformări DataWeave esențiale. Prima este "esența" procesului de ETL, unde, folosind funcția map, fiecare produs din sursa de date este transformat pentru a se potrivi cu structura tabelei destinație. Această mapare implică redenumirea câmpurilor (ex: product_title devine name), ceea ce decuplează complet sistemele, și generarea de date noi, cum ar fi un uuid() unic pentru codul de bare, asigurând o identificare unică în noul sistem. A doua transformare, mult mai complexă, se execută în interiorul buclei For Each și este critică pentru gestionarea structurilor de date complexe precum atributele (obiecte) și tag-urile (array-uri). Aceasta convertește în mod programatic aceste structuri native într-un format de string literal (ex: "{'cheie': 'valoare'}" sau "['tag1', 'tag2']"), care este compatibil cu modul în care ClickHouse stochează tipurile de date Map și Array în coloane de tip String, pregătind astfel payload-ul pentru a fi inserat corect și fără erori în baza de date.
<img width="954" alt="image" src="https://github.com/user-attachments/assets/1f0315f6-6389-4174-b5e7-385144b17cb0" />
<img width="955" alt="image" src="https://github.com/user-attachments/assets/450a1162-3474-4bcb-9aa2-bc73649d7774" />
<img width="800" alt="image" src="https://github.com/user-attachments/assets/5910387a-15e0-4be7-80bf-83ae2e815069" />
<img width="955" alt="image" src="https://github.com/user-attachments/assets/b2618e21-bfe3-4cfb-98d4-ef23108847fe" />



  Fluxul de Listare Produse pentru Frontend (get:\products:scanare-produs-api-config)
Acest flux conține două transformări DataWeave esențiale care lucrează împreună pentru a construi un răspuns complex și complet funcțional pentru paginare. Prima transformare este un constructor dinamic de query SQL, unde, pe baza parametrilor de page și limit primiți, se calculează valoarea offset și se asamblează bucățile unui query SQL (WHERE, ORDER BY, LIMIT OFFSET) într-un obiect structurat. A doua transformare, și cea mai importantă pentru utilizatorul final, este asamblatorul de răspuns final. După ce datele au fost extrase din baza de date, acest script DataWeave ia lista de produse și o combină cu metadatele de paginare (cum ar fi currentPage, totalCount și totalPages, calculat dinamic), împachetându-le într-un singur obiect JSON, curat și bine structurat. Această transformare oferă Frontend-ului (aplicației React) absolut toate informațiile de care are nevoie pentru a afișa atât lista de produse pentru pagina curentă, cât și controalele de navigare complete (ex: "Pagina 2 din 15").
<img width="959" alt="image" src="https://github.com/user-attachments/assets/fb85e973-c3a3-4220-afae-1f97d0964c4a" />
<img width="957" alt="image" src="https://github.com/user-attachments/assets/429c506e-a6c7-4a60-bbe1-01215bb26413" />


