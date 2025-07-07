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
<br><br>
<img width="958" alt="image" src="https://github.com/user-attachments/assets/03155f6a-2d76-407a-9135-40b045fe343f" />
<br><br>
<img width="958" alt="image" src="https://github.com/user-attachments/assets/a522d406-9902-4645-bdf4-8bcb9ed846c8" />
<br><br>


  Fluxul de Transfer Automat (product-transferFlow)
Acest flux conține două transformări DataWeave esențiale. Prima este "esența" procesului de ETL, unde, folosind funcția map, fiecare produs din sursa de date este transformat pentru a se potrivi cu structura tabelei destinație. Această mapare implică redenumirea câmpurilor (ex: product_title devine name), ceea ce decuplează complet sistemele, și generarea de date noi, cum ar fi un uuid() unic pentru codul de bare, asigurând o identificare unică în noul sistem. A doua transformare, mult mai complexă, se execută în interiorul buclei For Each și este critică pentru gestionarea structurilor de date complexe precum atributele (obiecte) și tag-urile (array-uri). Aceasta convertește în mod programatic aceste structuri native într-un format de string literal (ex: "{'cheie': 'valoare'}" sau "['tag1', 'tag2']"), care este compatibil cu modul în care ClickHouse stochează tipurile de date Map și Array în coloane de tip String, pregătind astfel payload-ul pentru a fi inserat corect și fără erori în baza de date.
<br><br>
<img width="954" alt="image" src="https://github.com/user-attachments/assets/1f0315f6-6389-4174-b5e7-385144b17cb0" /> 
<br><br>
<img width="955" alt="image" src="https://github.com/user-attachments/assets/450a1162-3474-4bcb-9aa2-bc73649d7774" />
<br><br>
<img width="800" alt="image" src="https://github.com/user-attachments/assets/5910387a-15e0-4be7-80bf-83ae2e815069" />
<br><br>
<img width="955" alt="image" src="https://github.com/user-attachments/assets/b2618e21-bfe3-4cfb-98d4-ef23108847fe" />
<br><br>



  Fluxul de Listare Produse pentru Frontend (get:\products:scanare-produs-api-config)
Acest flux conține două transformări DataWeave esențiale care lucrează împreună pentru a construi un răspuns complex și complet funcțional pentru paginare. Prima transformare este un constructor dinamic de query SQL, unde, pe baza parametrilor de page și limit primiți, se calculează valoarea offset și se asamblează bucățile unui query SQL (WHERE, ORDER BY, LIMIT OFFSET) într-un obiect structurat. A doua transformare, și cea mai importantă pentru utilizatorul final, este asamblatorul de răspuns final. După ce datele au fost extrase din baza de date, acest script DataWeave ia lista de produse și o combină cu metadatele de paginare (cum ar fi currentPage, totalCount și totalPages, calculat dinamic), împachetându-le într-un singur obiect JSON, curat și bine structurat. Această transformare oferă Frontend-ului (aplicației React) absolut toate informațiile de care are nevoie pentru a afișa atât lista de produse pentru pagina curentă, cât și controalele de navigare complete (ex: "Pagina 2 din 15").
<br><br>
<img width="959" alt="image" src="https://github.com/user-attachments/assets/fb85e973-c3a3-4220-afae-1f97d0964c4a" />
<br><br>
<img width="957" alt="image" src="https://github.com/user-attachments/assets/429c506e-a6c7-4a60-bbe1-01215bb26413" />
<br><br>


### 2.4 Configurația Conectorului de Bază de Date (Database_Config):

Configurația centrală a conectorului este piesa fundamentală care permite aplicației Mule să comunice cu instanța ClickHouse. Se observă câteva aspecte cheie:

Tipul Conexiunii: Se folosește o conexiune de tip Generic Connection care se bazează pe standardul JDBC (Java Database Connectivity).

Driver JDBC: Este specificat explicit driverul necesar pentru ClickHouse (com.clickhouse.jdbc.ClickHouseDriver). Acest lucru implică faptul că fișierul .jar al driverului trebuie adăugat ca dependență în proiectul Mule.

URL-ul de Conectare: jdbc:clickhouse:https://cd1snbyswh.germanywestcentral.azure.clickhouse.cloud:8443/default?ssl=true&compress=0

Insight-uri:

Conexiune Cloud: Proiectul se conectează la o instanță ClickHouse găzduită în cloud (pe Azure), nu la una locală (în Docker, cum era planul inițial). 

Securitate (SSL): Parametrul ssl=true indică faptul că se stabilește o conexiune securizată (criptată) între aplicația Mule și baza de date.

Performanță: Parametrul compress=0 dezactivează compresia datelor pe conexiune. De obicei, compresia este utilă la transferul unor volume foarte mari de date.

Credențiale: Conexiunea este autentificată folosind un utilizator (default) și o parolă, care sunt stocate direct în configurație. 

Interogările Cheie (Key Queries) din Fiecare Flux:

1. Fluxul de Scanare Produs

Interogarea de Verificare (db:select):

Query: SELECT 1 FROM devimarket_db.product_scan WHERE barcode = :barcode LIMIT 1

Scop: Aceasta este o interogare de tip "lookup", extrem de eficientă. Nu este interesată de datele produsului, ci doar de existența lui. SELECT 1 este mai rapid decât SELECT * deoarece nu trebuie să citească nicio valoare din coloane. LIMIT 1 îi spune bazei de date să se oprească imediat ce găsește o potrivire, optimizând și mai mult căutarea.

Interogarea de Inserare (db:insert):

Query: INSERT INTO devimarket_db.product_scan(barcode, timestamp) VALUES (:barcode, :clickhouse_formatted_timestamp)

Scop: Adaugă o nouă înregistrare în tabela de scanări. Folosește din nou parametri denumiți pentru a insera în mod sigur valorile de barcode și timestamp (pre-formatat în DataWeave) în coloanele corespunzătoare.

2. Fluxul de Listare Produse 

Interogarea Dinamică pentru Date (db:select - primul):

Query: #[vars.sqlQuery as String]

Scop: Această interogare este construită dinamic în pașii anteriori ai fluxului, asamblând bucăți de text pentru a forma un query complet, cum ar fi: SELECT * FROM devimarket_db.products WHERE is_active = 1 ORDER BY name ASC LIMIT 50 OFFSET 0. Execută interogarea pentru a prelua numărul exact de produse necesar pentru pagina curentă.

Interogarea pentru Numărul Total (db:select - al doilea):

Query: SELECT COUNT(*) AS total FROM devimarket_db.products

Scop: Calculează numărul total de produse din tabel. Acest număr este apoi folosit în DataWeave pentru a calcula totalPages și totalCount din metadatele răspunsului, permițând Frontend-ului să construiască corect controalele de paginare.

3. Fluxul de Transfer Automat 

Interogarea de Extragere (db:select):

Query: SELECT * FROM clickhouse_db_franceza.products_fr WHERE is_active=1 AND is_transfered=0

Scop: Selectează toate produsele active din tabela sursă (products_fr) care nu au fost încă marcate ca transferate. Acest filtru (is_transfered=0) este critic pentru a asigura că fluxul nu procesează aceleași date de mai multe ori la rulări succesive.

Interogarea de Inserare (db:insert):

Query: INSERT INTO devimarket_db.products (...) VALUES (:id, :barcode, ...)

Scop: Inserează produsul transformat și mapat în tabela principală, devimarket_db.products. Folosește parametrizare completă pentru a mapa fiecare câmp din payload-ul DataWeave la coloana corespunzătoare din baza de date.

Interogarea de Actualizare a Statusului (db:update):

Query: UPDATE clickhouse_db_franceza.products_fr SET is_transfered = 1 WHERE product_id = :product_id

Scop: Aceasta este "cheia" care închide bucla procesului de migrare. Imediat după ce un produs a fost inserat cu succes în tabela destinație, acest query actualizează înregistrarea corespunzătoare din tabela sursă, setând is_transfered la 1. Astfel, la următoarea rulare a Scheduler-ului, acest produs nu va mai fi selectat de interogarea de extragere.

### 2.5 Configurația HTTP:

-http:listener-config: Definește o configurație reutilizabilă pentru unul sau mai mulți listeneri HTTP din aplicația noastră. <br><br>
-http:listener-connection: Acesta este nucleul configurației.
<br><br>
-host="0.0.0.0": Aceasta este o setare importantă pentru un mediu de dezvoltare. Îi spune aplicației Mule să asculte cereri pe toate interfețele de rețea disponibile ale mașinii pe care rulează, nu doar pe localhost (127.0.0.1). Acest lucru face ca API-ul să fie accesibil de pe alte dispozitive din aceeași rețea, cum ar fi Raspberry Pi Pico sau calculatorul unui coleg.
<br><br>
-port="8081": Aplicația va asculta conexiuni pe portul TCP 8081.
<br><br>
<img width="793" alt="image" src="https://github.com/user-attachments/assets/96030463-5caf-477c-bbdc-ac33a088f4f4" />

## 3.Documentarea configurațiilor globale, erorilor și componentelor reutilizabile

Configurații Globale (Global Configurations):
Sunt elemente centralizate și reutilizabile, definite o singură dată și apoi referite în multiple locuri din aplicație. Acest lucru simplifică mentenanța și asigură consistența.
<br><br>
APIkit Config (scanare-produs-api-config)
Scop: Aceasta este configurația principală pentru APIkit Router. Ea leagă aplicația Mule de contractul API definit în fișierul scanare-produs-api.raml. APIkit o folosește pentru a valida cererile primite față de specificație și pentru a le direcționa automat către fluxurile corespunzătoare. 
<br><br>
HTTP Listener Config (HTTPS_Listener_config)
Scop: Definește un punct de intrare (endpoint) pentru toate cererile HTTP. 
Pentru detaliile cheie, vezi 2.5.
<br><br>
Database Config (Database_Config)
Scop: Centralizează toate detaliile necesare pentru a stabili o conexiune cu baza de date ClickHouse. Orice componentă din aplicație care trebuie să interacționeze cu baza de date (ex: db:select, db:insert, db:update) va refolosi această configurație.
Detalii Cheie:
Vezi 2.4.
<br><br>
Strategii de Gestionare a Erorilor (Error Handling Strategies)
Aplicația folosește o abordare pe mai multe niveluri pentru a gestiona erorile, ceea ce este o bună practică pentru a asigura vigurozitatea.
<br><br>
Nivel 1: Gestionarea Erorilor de API (în scanare-produs-api-main)
Strategie: Se folosește componenta On Error Propagate pentru a prinde erori specifice, generate de APIkit.
Implementare: Pentru fiecare tip de eroare comună (ex: APIKIT:BAD_REQUEST, APIKIT:NOT_FOUND, APIKIT:METHOD_NOT_ALLOWED), există un bloc dedicat. În interiorul fiecărui bloc:
O componentă Transform Message construiește un răspuns JSON standardizat și prietenos (ex: { "message": "Resource not found" }).
O variabilă httpStatus este setată la codul de eroare HTTP corespunzător (ex: 400, 500).
Scop: Această strategie asigură că, indiferent de problemă, clientul API-ului nu primește un stack trace tehnic, ci un mesaj de eroare consistent și ușor de înțeles.
<br><br>
Nivel 2: Gestionarea Erorilor de Business (în fluxul post:\product_scan...)
Strategie: Se folosește o combinație de validare proactivă și gestionare a excepțiilor la nivel de flux.
Implementare:
Validare Proactivă (Raise Error): Înainte de a procesa datele, un bloc Choice verifică dacă payload-ul este valid. Dacă nu, se aruncă o eroare customizată (PRODUCT:NOT_VALID), oprind execuția înainte de a ajunge la baza de date.
Gestionare Erori de Bază de Date (Try Scope): Operațiunea db:insert, care este o operațiune critică ce poate eșua, este încapsulată într-un bloc Try. Acest bloc are propriul său On Error Propagate care prinde doar erorile apărute la inserare, le înregistrează în log și construiește un răspuns JSON specific pentru eșecul de inserare.
Gestionare Generală (error-handler la final): La finalul fluxului, un error-handler de tip "catch-all" prinde orice altă eroare neașteptată, o înregistrează și returnează un mesaj de eroare generic pentru a proteja detaliile interne.
<br><br>
Componente Reutilizabile
Deși proiectul nu definește sub-fluxuri (private flows) separate pentru reutilizare, conceptul de reutilizare este implementat prin configurațiile globale menționate mai sus.
Componenta Reutilizabilă Principală: Cea mai importantă componentă reutilizabilă este Database_Config. Fără aceasta, fiecare din cele șase conectori de bază de date (db:select, db:insert, db:update) din aplicația noastră ar fi trebuit să aibă URL-ul, driverul și credențialele definite individual.
Reutilizare Implicită: APIkit Router este, prin natura sa, o componentă reutilizabilă care aplică aceleași reguli de validare și rutare pentru toate endpoint-urile definite în RAML, fără a fi nevoie să scrii cod de validare manual pentru fiecare.
