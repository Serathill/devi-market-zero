# Setup Ghid Postman QA - Sprint 2

Acest document oferă instrucțiuni pas cu pas pentru instalarea și configurarea Postman, crearea de colecții și cereri, scrierea de teste de bază și exportul colecțiilor. Este esențial pentru orice nou membru al echipei QA sau pentru un recenzor extern care dorește să configureze rapid mediul Postman pentru proiectul nostru.

## 1. Pre-condiții

Asigură-te că sistemul tău îndeplinește următoarele cerințe minime:

* Sistem de operare: Windows 10/11, macOS (orice versiune recentă), sau distribuție Linux compatibilă.
* Conexiune la internet stabilă pentru descărcare.

## 2. Instalarea Postman

Urmează acești pași pentru a instala Postman pe sistemul tău:

1.  **Descarcă Postman:** Accesează link-ul oficial de descărcare Postman:
    * **Link de descărcare:** [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
    * **Versiune Recomandată:**v10.24.10**

2.  **Instalare:**
    * **Windows/macOS:** Rulează fișierul de instalare descărcat (`.exe` pentru Windows, `.dmg` pentru macOS) și urmează instrucțiunile de pe ecran. Instalarea este de obicei directă.
    * **Linux:** Descarcă arhiva tar.gz, extrage-o și rulează executabilul Postman. Alternativ, poți folosi managerul de pachete al distribuției tale (ex: `snap install postman` pentru Ubuntu).

3.  **Lansează Postman:** După finalizarea instalării, lansează aplicația Postman.

4.  **Crează/Conectează-te la un Cont Postman (Opțional, dar Recomandat):**
    * Poți alege să te conectezi cu un cont Google, sau să creezi un cont Postman nou. Acest lucru permite sincronizarea colecțiilor tale în cloud.
    * Dacă nu dorești să te conectezi, poți folosi Postman ca utilizator "offline" sau "local scratchpad", dar vei pierde beneficiile de sincronizare.

## 3. Configurare Spațiu de Lucru și Import Colecții

Pentru a începe lucrul eficient:

1.  **Creează un Nou Spațiu de Lucru (Workspace):**
    * În Postman, click pe meniul "Workspaces" (de obicei în colțul din stânga sus) și selectează "Create Workspace".
    * Numește spațiul de lucru
    * Setează vizibilitatea la "Personal" sau "Team" dacă lucrezi într-o echipă Postman.

2.  **Importă Colecțiile Existente de API (Dacă Există):**
    * **Metoda 1: Import din Fișier:**
        * Obține fișierul de colecție Postman (`.json`) de la managerul de proiect sau de la un coleg. Acesta ar trebui să se găsească în repository-ul GitHub: `/docs/team_7_qa_postman/Postman_Collections/`.
        * În Postman, click pe butonul "Import" din colțul din stânga sus.
        * Selectează "Upload Files" și navighează la fișierul `.json` al colecției.
        * Selectează opțiunile de import și confirmă.
    * **Metoda 2: Import din Link (dacă colecția este publică sau partajată prin link):**
        * Click pe "Import" -> "Link" și introdu URL-ul colecției.

3.  **Configurează Variabilele de Mediu:**
    * **Importă Environment-ul:** Similar cu colecțiile, importă fișierul de mediu (`.json`) dacă există, de obicei din același folder GitHub.
    * **Actualizează Variabilele:** Asigură-te că variabilele precum `base_url`, `api_key`, sau `authentication_token` sunt setate corect pentru mediul tău de dezvoltare local sau de staging.
        * Click pe selectorul de medii din dreapta sus (unde scrie "No Environment").
        * Selectează "Manage Environments" și editează variabilele necesare.
        * Exemple de variabile de mediu esențiale:
            * `base_url`:`https://api.devimarket-uat.internal/api`
            * `productId`: `[abc123]`
            * `invalidId`: `[fake999]`

## 4. Crearea unei Cereri Simple ("Hello World")

Pentru a verifica funcționalitatea de bază:

1.  **Creează o Nouă Cerere:**
    * În Postman, click pe butonul `+` de lângă tab-ul "New Request".
    * Selectează metoda HTTP (ex: `GET`).
    * Introdu un URL de test (ex: un endpoint local al API-ului nostru care returnează "Hello World" sau un endpoint public, cum ar fi `https://postman-echo.com/get?foo1=bar1&foo2=bar2`).
    * Exemplu pentru proiectul nostru:
        * **Metodă:** `GET`
        * **URL:** `{{base_url}}/api/v1/hello` (asigură-te că `base_url` este configurat în mediu)
    * Click pe "Send". Ar trebui să vezi răspunsul în secțiunea "Response".

## 5. Scrierea Testelor de Bază

Postman permite adăugarea de teste JavaScript pentru a valida răspunsurile API.

1.  **Deschide Tab-ul "Tests":**
    * Într-o cerere existentă, mergi la tab-ul "Tests" (lângă "Params", "Authorization", "Headers", etc.).

2.  **Scrie un Test Simplu:**
    * **Test pentru Codul de Stare (Status Code):**
        ```javascript
        pm.test("Status code is 200 OK", function () {
            pm.response.to.have.status(200);
        });
        ```
    * **Test pentru Corpul Răspunsului (Response Body) - Text:**
        ```javascript
        pm.test("Response body contains 'Hello World'", function () {
            pm.expect(pm.response.text()).to.include("Hello World");
        });
        ```
    * **Test pentru Corpul Răspunsului (Response Body) - JSON:**
        ```javascript
        pm.test("Response is JSON and has 'message' property", function () {
            pm.response.to.be.json;
            const responseData = pm.response.json();
            pm.expect(responseData).to.have.property('message');
            pm.expect(responseData.message).to.eql("Hello World!");
        });
        ```

3.  **Rulează Cererea:** Trimite cererea din nou. Rezultatele testelor vor apărea în tab-ul "Test Results" de sub răspuns.

## 6. Exportul Colecțiilor Postman

Pentru a partaja colecțiile tale cu alți membri ai echipei:

1.  **Selectează Colecția:**
    * În bara laterală din stânga, dă click dreapta pe colecția pe care vrei să o exportezi.

2.  **Exportează Colecția:**
    * Selectează "Export".
    * Alege formatul "Collection v2.1 (Recommended)".
    * Click pe "Export" și salvează fișierul `.json` într-o locație relevantă (ex: în folderul `Postman_Collections` din repository-ul nostru GitHub).

## 7. Depanare și Soluții Comune (Troubleshooting)

Această secțiune va fi actualizată pe măsură ce întâlnim noi probleme.

* **Problema: Cererea eșuează cu "Could not send request" sau "Connect ECONNREFUSED".**
    * **Soluție:** Asigură-te că API-ul la care încerci să te conectezi (ex: aplicația MuleSoft, React dev server, sau stiva Docker) rulează și este accesibil la `base_url` specificat în variabilele tale de mediu. Verifică porturile și adresele IP.
* **Problema: "SSL Error: SELF_SIGNED_CERT_IN_CHAIN".**
    * **Soluție:** Dacă utilizezi certificate SSL auto-semnate în mediul tău local (Docker/Nginx), Postman poate bloca cererile. Poți dezactiva temporar verificarea certificatelor SSL în Postman: Mergi la **Settings (rotița dințată în dreapta sus) -> General -> SSL certificate verification** și setează la `OFF`. **Atenție:** Nu face asta în medii de producție.
* **Problema: Variabilele de mediu nu se aplică corect.**
    * **Soluție:** Asigură-te că ai selectat mediul corect din lista derulantă din dreapta sus a ecranului Postman. Verifică de două ori denumirile variabilelor în mediu și în cereri (`{{nume_variabila}}`).
* **Problema: Testele JavaScript nu rulează sau dau erori neașteptate.**
    * **Soluție:** Verifică sintaxa JavaScript în tab-ul "Tests". Folosește consola de dezvoltator din Postman (View -> Developer -> Show DevTools) pentru a depana erorile de script.
* **Problema: Nu pot importa o colecție/mediu.**
    * **Soluție:** Asigură-te că fișierul `.json` nu este corupt și este un fișier de colecție/mediu Postman valid. Verifică dacă ai permisiunile necesare pentru a accesa fișierul.

---
