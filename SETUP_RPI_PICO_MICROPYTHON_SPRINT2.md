SETUP\_RPI\_PICO\_MICROPYTHON\_SPRINT2.md

Documentatie pentru conectarea unui Raspberry Pi Pico si a unui Wemos D1 Mini (ESP8266), flash firmware, folosirea MicroPython-ului, conectarea la reteaua WiFi si trimiterea unui request GET.

---

## 1. Instalarea Firmware-ului MicroPython

###  Instalare Thonny

- Descarcă Thonny IDE de la: [https://thonny.org](https://thonny.org)

###  Instalare MicroPython pe Raspberry Pi Pico

1. Ține apăsat butonul **BOOTSEL** de pe placa Pico
2. Conectează Pico la PC prin cablu USB
3. În Thonny:
   - Mergi la `Tools → Options → Interpreter`
   - Selectează: `MicroPython (Raspberry Pi Pico)`
   - Port: automat detectat sau selectare manuală
   - Click: `Install or Update Firmware`
   - Se selectează automat firmware-ul recomandat
   - Click: `Install`

###  Instalare MicroPython pe Wemos D1 Mini (ESP8266)

1. Descarcă cea mai nouă versiune de firmware pentru ESP8266 de la:
   - [https://micropython.org/download/ESP8266\_GENERIC/](https://micropython.org/download/ESP8266_GENERIC/)
2. Deschide Command Prompt și rulează comenzile (înlocuiește `COMX` cu portul Wemos):

```bash
python -m esptool --port COMX erase_flash
python -m esptool --port COMX write_flash --flash_size=detect -fm dio 0x00000 esp8266.bin
```

3. În Thonny:
   - Mergi la `Tools → Options → Interpreter`
   - Selectează: `MicroPython (ESP8266)`
   - Selectează portul corespunzător
   - Click `OK`

---

## 2. Fișiere proiect în Thonny

### `config.py`

```python
# WiFi credentials
WIFI_SSID = "x"
WIFI_PASSWORD = "y"
```

### `main.py`

```python
import network
import urequests
import time
from config import WIFI_SSID, WIFI_PASSWORD

def connect():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print("Connecting to network...")
        wlan.connect(WIFI_SSID, WIFI_PASSWORD)
        timeout = 10
        while not wlan.isconnected() and timeout > 0:
            time.sleep(1)
            timeout -= 1
    if wlan.isconnected():
        print("Connected! IP:", wlan.ifconfig()[0])
        return True
    else:
        print("Failed to connect.")
        return False

if connect():
    print("Sending GET request...")
    response = urequests.get("http://jsonplaceholder.typicode.com/posts/1")
    print("Status code:", response.status_code)
    print("Response body:\n", response.text)
    response.close()
```

---

##  Rulare proiect

1. Creează fișierele `main.py` și `config.py` în Thonny
2. Salvează-le pe dispozitivul Wemos (ESP8266)
3. Rulează `main.py`
4. Verifică rezultatul în consola **REPL** din Thonny

---

## Depanare (Troubleshooting)

- Verifică dacă ai setat corect SSID și parola WiFi
- Verifică dacă portul este selectat corect în Thonny
- Dacă apar caractere ciudate în REPL, reinstalează firmware-ul
- Dacă `urequests` nu este găsit, copiază manual fișierul `urequests.py` pe placă

---
