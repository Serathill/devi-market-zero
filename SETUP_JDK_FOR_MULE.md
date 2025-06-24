# Setup JDK for MuleSoft (Anypoint Studio)

---

## 1. Download & Install OpenJDK 11

- Accesează [Adoptium Temurin Releases](https://adoptium.net/temurin/releases/?version=11)
- Descarcă varianta **MSI pentru Windows x64**
- Rulează instalarea cu opțiunile implicite
- Ține minte calea unde s-a instalat JDK-ul


---

## 2. Setează JAVA_HOME (dacă nu s-a setat automat)

- Apasă `Win + S` și caută „variabile de mediu”
- Click pe „Editare variabile de mediu pentru contul dvs.”
- Sub „Variabile utilizator”, apasă **„Nou”**
- Nume variabilă:  JAVA_HOME
- Valoare: calea către folderul JDK (fără `\bin`)

---

## 3. Adaugă JAVA_HOME în Path

- În aceeași fereastră, selectează variabila `Path` → **Editare** → **Nou**
- Adaugă:  %JAVA_HOME%\bin
- Salvează modificările și închide ferestrele

---

## 4. Verifică instalarea

Deschide un Command Prompt nou și tastează:

```cmd
echo %JAVA_HOME%
java -version
javac -version

Rezultatul așteptat:
echo %JAVA_HOME% → calea către JDK 11
java -version → afișează versiunea 11.0.xx
javac -version → afișează versiunea 11.0.xx

