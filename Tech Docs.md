Documentație Tehnică: Sistemul de Scanare cu Raspberry Pi Pico

### Prezentare generala a sistemului
Acest document detaliază proiectarea și implementarea sistemului de scanare a codurilor de bare. Scopul principal a fost capturarea codurilor de bare ale produselor și transmiterea acestora către un endpoint API MuleSoft.

Arhitectura finală constă dintr-un sistem format din două părți:
1. Dispozitiv de Captură RPi Pico: Un Raspberry Pi Pico standard este responsabil pentru toată interacțiunea hardware. Singurul său rol este să citească un cod de bare de la apasarea unui buton, la un scanner TTL atașat, să ofere feedback fizic imediat printr-un LED și un buzzer, să formateze datele într-un payload JSON standardizat și să transmită acest payload instantaneu prin conexiunea sa serială USB.
2. Script de Transmisie pe PC: Un script Python (sender.py) care rulează pe un PC conectat ascultă continuu portul serial al Pico-ului. La primirea unui payload JSON, îl trimite imediat către API-ul MuleSoft printr-o cerere HTTPS POST.

### Partea 1: Dispozitivul de Captură RPi Pico

Componenete Hardware:
- Microcontroler: Raspberry Pi Pico .
- Scanner coduri de bare: Modul scanner coduri de bare E2100 RS232( cu semnale TTL).
- Adaptor: Placă adaptoare FPC (Flexible Printed Circuit) cu 12 pini.
- Componente de Feedback: LED standard pentru indicarea stării. Buzzer pasiv pentru confirmarea sonoră a scanării.

### Diagrama Conexiunilor Hardware

Componentele au fost conectate astfel:
Alimentare Modul Scanner:
- Scanner 5V -> 5V USB wire;
- Scanner GND -> USB GND;
Date Scanner către Pico (Comunicare UART):
- Scanner TX -> RPi Pico GP1 (UART0 RX) (Aici s-a folosit un divizor de tensiune deoarece scanner-ul trimitea semnale de 5V, in timp ce Pico accepta 3.3V. Divisor realizat prin 2 rezistente de 10-20 kilo Ohm);
- Scanner RX -> RPi Pico GP0 (UART0 TX);
Componente de Feedback către Pico:
- Anod LED (+) -> Rezistor 220Ω -> RPi Pico GP16;
- Catod LED (-) -> RPi Pico GND;
- Pin Pozitiv Buzzer (+) -> RPi Pico GP7 (prin Conectorul FPC Pin 9);
- Pin Negativ Buzzer (-) -> RPi Pico GND;
Actionare sistem:
- Buton -> pin-ul de trigger al scanner-ului si GND Pico.


### Metoda de Intrare a Codului de Bare (Critic)

- Metoda de citire a codurilor de bare a fost determinată de hardware-ul disponibil.
- Metoda Finală Implementată: UART (Universal Asynchronous Receiver-Transmitter)
- Motivație: Modulul de scanare este un dispozitiv serial TTL, proiectat să comunice prin liniile TX (transmitere) și RX (recepție). UART este protocolul standard pentru acest tip de comunicare, fiind alegerea naturală și corectă. - S-a folosit interfața UART hardware a Pico-ului (UART0) pentru o citire fiabilă și performantă.
- Implementare: Clasa machine.UART din MicroPython a fost inițializată pentru a asculta pe pinii corespunzători (GP1). Când butonul hardware al scannerului este apăsat, acesta scanează un cod și trimite datele rezultate ca un flux de biți prin linia sa TX, pe care Pico o recepționează pe linia sa RX.
- Alte Metode Luate în Considerare și Respinse:
USB HID (Human Interface Device): Această metodă nu a fost aplicabilă, deoarece scannerul nu este un dispozitiv care emulează o tastatură USB, ci o componentă serială de nivel scăzut.


### Logica Scriptului MicroPython (main.py)
Scriptul main.py de pe Pico este o buclă infinită, suplă, proiectată pentru o singură sarcină: capturarea și redirecționarea datelor.

Inițializare: Configurează pinii GPIO pentru LED (GP16) și Buzzer (GP7) ca ieșiri. Inițializează interfața UART0 cu rata de transfer corectă (9600 baud). Setează starea inițială (LED aprins, buzzer oprit).

Bucla Principală: Bucla while True verifică continuu dacă sosesc date pe portul UART folosind uart.any().

Eveniment de Scanare: Când sunt detectate date:
 - LED-ul se stinge și buzzerul emite un sunet scurt pentru a semnala că o scanare este în curs.
 - Scriptul citește toți biții disponibili din bufferul UART folosind uart.read().
 - Datele brute (bytes) sunt decodificate într-un șir de caractere UTF-8 și se elimină orice spațiu gol de la început sau sfârșit.
 - Codul de bare curățat este trimis funcției de procesare.
 - LED-ul se reaprinde pentru a semnala starea "Gata de scanare" (Ready).
 - Procesarea Datelor: Funcția process_and_send_over_serial preia codul de bare, generează un timestamp curent în format ISO 8601, construiește un obiect JSON și tipărește șirul JSON final la ieșirea standard, care este conexiunea serială USB.


### Construcția Payload-ului JSON
Scriptul construiește un obiect JSON cu o structură precisă, cerută de API-ul MuleSoft.
Structura:
```
{
    "barcode": "...",
    "scan_timestamp": "..."
}
```
- barcode: Șirul de caractere curat al codului de bare, primit de la scanner.
- scan_timestamp: Un șir de caractere formatat ISO 8601. Un detaliu critic este includerea sufixului Z (YYYY-MM-DDTHH:MM:SSZ) pentru a denota fusul orar UTC, deoarece acest lucru a fost necesar pentru a preveni erorile de tip 400/500 Bad Request din partea API-ului.


### Sistemul de Feedback Fizic (LED & Buzzer)

- Stare	LED (GP16)->Buzzer (GP7)->Descriere
- Repaus / Gata	Aprins continuu->Oprit	->Sistemul este pornit și gata de scanare.
- În Curs de Scanare->Stins	->Beep ->O scanare a fost inițiată.
- Scanare finalizată->Aprins continuu->Oprit->Datele au fost procesate și trimise. Sistemul este din nou gata.

### Partea 2: Scriptul de Transmisie pe PC (sender.py)
Deoarece modelul de RPi Pico folosit nu dispunea de WiFi, comunicarea în rețea a fost transferată unui script Python care rulează pe un PC conectat.

### Scop și Logică
Scriptul sender.py acționează ca o punte între Pico și internet. Folosește biblioteca pyserial pentru a deschide o conexiune la portul COM al Pico-ului și biblioteca requests pentru a comunica cu API-ul MuleSoft. Rulează într-o buclă infinită, asigurând o conexiune persistentă.

### Cererea HTTPS POST către API-ul MuleSoft
Când scriptul primește un șir JSON valid de la Pico:
- Construiește o cerere HTTPS POST folosind requests.post().
- Endpoint: https://devi-market-zero-ypueen.2ky3l1-1.deu-c1.eu1.cloudhub.io/api/product_scan
- Headere: Setează header-ul Content-Type: application/json, esențial pentru ca API-ul să interpreteze corect corpul cererii.
- Body: Datele JSON primite sunt transmise direct ca și corp al cererii.
- Gestionarea Certificatului SSL/TLS: Biblioteca requests din Python standard este robustă și gestionează automat validarea certificatelor TLS standard. 

###  Provocări Întâmpinate și Soluții
Provocare: Eroare API 400 Bad Request.

Problemă: Cererile API inițiale, atât din Postman cât și din script, erau respinse.

Soluție: După o depanare atentă, am descoperit că API-ul necesita ca timestamp-ul ISO 8601 să fie în format UTC, marcat explicit cu sufixul Z. Funcția create_iso_timestamp de pe Pico a fost modificată pentru a adăuga acest Z, ceea ce a rezolvat imediat eroarea.

Provocare: Flux de lucru ineficient, bazat pe fișiere.

Problemă: Designul inițial, care implica salvarea unui fișier de log pe Pico și descărcarea manuală a acestuia pe PC, era lent, predispus la erori și nescalabil.

Soluție: Sistemul a fost re-arhitecturat într-un model de comunicare serială în timp real. Pico-ul transmite acum datele direct prin USB, iar scriptul de pe PC ascultă și le redirecționează instantaneu. Acest lucru a eliminat pasul manual și a făcut sistemul mult mai eficient.

Provocare: Implementare WIFI.

Problema: Componenta nefunctionala, initial s-a dorit sa se foloseasca o placa Wemos D1 mini ca si modul wifi pentru Pico, dar dupa realizarea modulului hardware si testarea codului, s-a observat nefuctionalitatea placi.

Solutie: pentru a se intalnii deadline-ul Sprint-ului, s-a renuntat la implemnetarea conexiunii wifi.

### Instrucțiuni de Configurare și Operare
 ## Cerințe Preliminare
- Un PC cu Python 3 instalat.
- VS Code (recomandat) și Thonny IDE instalate.
- Biblioteci Python necesare pe PC: ``` pip install requests pyserial ```
### Configurare Pico
- Conectați componentele hardware la Pico conform descrierii "Diagrama Conexiunilor Hardware".
- Conectați Pico-ul la PC prin cablu USB.
- Deschideți scriptul final main.py în Thonny.
- Salvați scriptul pe Raspberry Pi Pico.
- Rulați scriptul. Pico-ul este acum activ și gata de scanare.
Important: Închideți complet Thonny IDE pentru a elibera portul COM, astfel încât scriptul de pe PC să-l poată folosi.
### Configurare PC
- În Windows, deschideți Device Manager -> Ports (COM & LPT) pentru a afla numărul portului COM al Pico-ului (de ex., COM3).
- Deschideți scriptul sender.py în VS Code.
- Actualizați variabila PICO_COM_PORT de la începutul scriptului cu numărul corect al portului COM.
- Deschideți un terminal în VS Code (Terminal > New Terminal).
- Rulați comanda: python sender.py
### Operare
Cu ambele părți rulate, sistemul este complet operațional.
Terminalul de pe PC va afișa: "Successfully connected to Pico... Listening for data...".
Folosiți scannerul pentru a scana un cod de bare.
Observați terminalul de pe PC. Acesta va afișa instantaneu JSON-ul primit și mesajul de succes sau eroare de la API-ul MuleSoft.