# sender.py
# PC Script - Listens to a COM port for JSON data from the Pico and sends it to an API.
# Team_9 - Real-Time Version

import serial
import requests
import json
import time

# --- CONFIGURARE ---
# !!! IMPORTANT: Schimbați 'COM3' cu portul COM corect al Pico-ului vostru !!!
PICO_COM_PORT = 'COM8' 
BAUD_RATE = 115200 # Standard baud rate for Pico's USB serial

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