# SETUP_POSTMAN_QA_SPRINT2.md

Documentație pentru instalarea și utilizarea Postman în scopul testării API-urilor în Sprintul 2, dedicată sistemelor Manjaro Linux. Include pași de instalare, prezentare UI, creare de request-uri, colecții, teste de bază, export și exemple.

##Cerințe

- Sistem de operare: Manjaro Linux (sau orice sistem Arch-based)
- Acces la terminal (cu `yay` sau `pamac`)
- Conexiune internet
- Docker (opțional, pentru testarea locală a API-urilor)

##Instalare Postman în Manjaro

###Cu `yay` (recomandat):

```bash
yay -S postman-bin
```

###Alternativ, cu `pamac`:

```bash
pamac build postman-bin
```

###Lansare aplicație:

```bash
postman &
```

> Dacă nu ai `yay` instalat:

```bash
sudo pacman -S yay
```

---

##Interfața Postman (overview)

- **New**: creează request-uri, colecții, environment-uri
- **Collections**: grupuri de request-uri organizate
- **Request tab**: alege metoda (GET/POST/etc), scrii URL-ul, body, headers
- **Console**: vezi log-uri cu Ctrl + Alt + C

---

##Creare request nou

1. Click pe **"+"** sau "New → HTTP Request"
2. Selectează metoda (GET, POST, etc.)
3. Introdu URL-ul (ex: `http://localhost:8000/api/products`)
4. Adaugă headers și/sau body
5. Click pe **Send**
6. Verifică răspunsul în partea de jos (status, body, headers)

---

##Creare colecție

1. Mergi la tab-ul **Collections**
2. Click pe **New Collection**
3. Dă-i un nume (ex: `Sprint2 QA Tests`)
4. Salvează request-urile în colecție
5. Poți adăuga: descrieri, test scripts, variabile

---

##Scriere teste de bază în Postman

În tab-ul `Tests` al unui request, adaugă:

```javascript
pm.test("Status code este 200", () => {
  pm.response.to.have.status(200);
});

pm.test("Răspunsul conține câmpul 'name'", () => {
  const jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property("name");
});
```

---

##Export colecție

1. Mergi la colecția dorită în sidebar
2. Click dreapta → **Export**
3. Alege formatul `Collection v2.1`
4. Salvează `.json` pentru partajare/import

---

##Exemplu concret: Testarea unui API de produse

### Endpoint testat:

```http
GET http://localhost:8000/api/products
```

### Test inclus în tab-ul `Tests`:

```javascript
pm.test("Lista de produse nu este goală", () => {
  const data = pm.response.json();
  pm.expect(data.length).to.be.above(0);
});
```

### Alte endpoint-uri din colecția Sprint2:

- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

---
