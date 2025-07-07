SETUP\_RPI\_PICO\_MICROPYTHON\_SPRINT2.md

Documentatie pentru realizarea unui scanner functional folosind un Raspberry Pi Pico.

---
### Componenete
- Raspberry Pi Pico
- Modul scanner coduri de bare E2100 RS232
- Modul FPC GroundStudio (12 pini)


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

###  Incarcare cod prin Thonny

1. Conecteaza Pico la PC
2. Selectează: `MicroPython (Raspberry Pi Pico)`
3. Incarca codul:
 ```# main.py

import machine
import time
import json
import sys

# --- 1. Configuration ---
LED_PIN = 16
BUZZER_PIN = 7
UART_ID = 0
UART_TX_PIN = 0
UART_RX_PIN = 1
BAUDRATE = 9600

# --- 2. Initialization ---
led = machine.Pin(LED_PIN, machine.Pin.OUT)
buzzer = machine.Pin(BUZZER_PIN, machine.Pin.OUT)
uart = machine.UART(UART_ID, baudrate=BAUDRATE, tx=machine.Pin(UART_TX_PIN), rx=machine.Pin(UART_RX_PIN))

# --- 3. Helper Functions ---
def buzz(duration=0.1):
    buzzer.on()
    time.sleep(duration)
    buzzer.off()

def create_iso_timestamp():
    """Creates a timestamp in ISO 8601 format with 'Z' for UTC."""
    now = time.localtime()
    return "{:04d}-{:02d}-{:02d}T{:02d}:{:02d}:{:02d}Z".format(now[0], now[1], now[2], now[3], now[4], now[5])

def process_and_send_over_serial(barcode):
    """Creates the JSON payload and prints it to the USB serial output."""
    print(f"\n[PICO] Barcode captured: {barcode}")
    
    try:
        timestamp = create_iso_timestamp()
        payload = {
            "barcode": barcode,
            "scan_timestamp": timestamp
        }
        json_payload_string = json.dumps(payload)
        
        # --- THIS IS THE KEY CHANGE ---
        # Print the final JSON. The PC script will listen for this.
        print(json_payload_string)
        # ---------------------------
        
        print(f"[PICO] Sent to PC over serial.")

    except Exception as e:
        print(f"[PICO-ERROR] Could not process scan: {e}")

# --- 4. Main Application Logic ---
def main():
    print("[PICO] Serial communication mode initialized.")
    led.on()
    buzzer.off()
    print("[PICO] System Ready. Awaiting barcode scan...")
    
    while True:
        if uart.any():
            led.off()
            buzz(0.15)
            raw_data = uart.read()
            if raw_data:
                barcode = raw_data.decode('utf-8').strip()
                if barcode:
                   process_and_send_over_serial(barcode)
            led.on()
        
        time.sleep(0.05)

# --- 5. Start the Program ---
if __name__ == "__main__":
    main()
```
Cod "main.py", realizarea scanari unui cod de bare, stingerea unui led cand scanner-ul este activ, realizarea unui sunet cand codul este scanat cu succes, si pastrarea acestuia pe pico.

### Trimiterea codurilor catre baza de date

In VS Code:
```
import serial
import requests
import json
import time

# --- CONFIGURARE ---

PICO_COM_PORT = 'COM8' 
BAUD_RATE = 115200

API_URL = "https://devi-market-zero-ypueen.2ky31l-1.deu-c1.eu1.cloudhub.io/api/product_scan"
API_HEADERS = {'Content-Type': 'application/json'}

def send_to_api(json_data):
    """Tries to send a single JSON payload to the API."""
    try:
        # The data is already a string, so we first load it into a dict
        # to ensure it's valid JSON, then send it.
        payload = json.loads(json_data)
        
        print(f"\n[PC] Received valid JSON. Sending to API...")
        print(f"  > Payload: {payload}")
        
        response = requests.post(API_URL, json=payload, headers=API_HEADERS)
        
        if 200 <= response.status_code < 300:
            print(f"  > SUCCESS! Status: {response.status_code}")
        else:
            print(f"  > API ERROR! Status: {response.status_code}, Response: {response.text}")
            # In a real app, you might save failed requests to a file here.
            
    except json.JSONDecodeError:
        print(f"[PC-ERROR] Received data is not valid JSON: {json_data}")
    except requests.exceptions.RequestException as e:
        print(f"[PC-ERROR] Network error, could not send to API: {e}")

def listen_to_pico():
    """Main function to listen to the serial port."""
    print(f"Attempting to connect to Pico on {PICO_COM_PORT}...")
    
    while True: # Loop forever to try and reconnect if Pico is disconnected
        try:
            # The 'with' statement handles opening and closing the port
            with serial.Serial(PICO_COM_PORT, BAUD_RATE, timeout=1) as ser:
                print(f"Successfully connected to Pico on {PICO_COM_PORT}. Listening for data...")
                
                while True: # Loop to read data continuously
                    # Read one line from the serial port, decode it, and strip whitespace
                    line = ser.readline().decode('utf-8').strip()
                    
                    if line:
                        # We are looking for lines that start with '{' because
                        # our Pico script prints the JSON payload.
                        if line.startswith('{') and line.endswith('}'):
                            send_to_api(line)
                        else:
                            # Print other messages from the Pico for debugging
                            print(f"[PICO-DEBUG] {line}")

        except serial.SerialException:
            print(f"Connection failed or lost on {PICO_COM_PORT}. Retrying in 5 seconds...")
            time.sleep(5)

# --- Start the Listener ---
if __name__ == "__main__":
    listen_to_pico()
 ```

 Rularea acestui cod(sender.py) cat timp scanner-ul este conectat si functional, trimiterea datelor automat catre baza de date.

