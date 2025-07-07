# Documentație Tehnică MuleSoft - DeviMarket Zero

---

## 1. Rolul General al MuleSoft în DeviMarket Zero

MuleSoft reprezintă platforma centrală API a proiectului DeviMarket Zero, având rolul de a:

- Gestiona accesul la date și servicii prin API-uri bine definite.
- Asigura integrarea între dispozitivele hardware (RPi Pico), sursele externe de produse (API-uri terțe), și baza de date performantă ClickHouse.
- Gestiona fluxuri de procesare și transformare a datelor, inclusiv validare și normalizare, folosind DataWeave.
- Oferi o interfață securizată și extensibilă pentru frontend-ul React și alte consumatoare ale API-urilor.

---

## 2. Aplicații MuleSoft Majore și Detalii Implementare

### 2.1 Scanner API - `/api/scanner/product_scan`

- **RAML:** [scanner-api.raml](link_catre_fisierul_RAML)
  
- **Scop:** Primirea codurilor de bare scanate de pe RPi Pico, validarea datelor, și inserarea sau actualizarea produselor în ClickHouse.

- **Flux Principal:**

  1. Recepționează payload JSON cu coduri de bare.
  2. Validare schemă și conținut.
  3. Transformare DataWeave pentru pregătirea interogărilor ClickHouse.
  4. Execută query de upsert în tabelul `products`.
  5. Returnează statusul operațiunii.

- **DataWeave exemplu:**

  ```dw
  %dw 2.0
  output application/json
  var product = payload.product
  ---
  {
    id: product.id,
    name: product.name,
    barcode: product.barcode,
    price: product.price as Number,
    updated_at: now() as String {format: "yyyy-MM-dd'T'HH:mm:ssZ"}
  }
