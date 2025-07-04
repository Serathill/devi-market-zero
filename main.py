# main.py
# RPi Pico - Sends scanned JSON data directly over USB Serial.
# Team_9 - Real-Time Version

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
