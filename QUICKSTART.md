# 🚀 Quick Start Guide - Event-Planer Berlin

## 5 Minuten zum Laufen

### Schritt 1: Repository klonen
```bash
git clone https://github.com/powerbrot/eventplaner.git
cd eventplaner
```

### Schritt 2: Dependencies installieren
```bash
npm install
```

### Schritt 3: Entwicklungsserver starten
```bash
npm start
```

Die App öffnet sich automatisch auf `http://localhost:3000` 🎉

---

## 🔍 Erste Schritte in der App

### Filter ausprobieren
1. Öffne das linke **Filter Panel**
2. Stelle den **Maximal-Preis** auf €80
3. Wähle einen **Bezirk** (z.B. Mitte)
4. Die Ergebnisse aktualisieren sich live!

### Sortierung ändern
1. Im Filter Panel oben: **Sortieren nach**
2. Wähle verschiedene Optionen:
   - 📍 Entfernung (Nähe)
   - ⭐ Bewertung (beste zuerst)
   - 💰 Preis (günstig zuerst)
   - 👥 Kapazität (große zuerst)
   - 🔥 Beliebtheit (meiste Reviews)

### Location Details anschauen
1. Klicke auf eine **Location Card**
2. Ein Modal öffnet sich mit:
   - Vollständige Informationen
   - Alle Amenities
   - Kontakt-Optionen

---

## 📋 Verfügbare Kommandos

```bash
# Entwicklungsserver starten
npm start

# Production Build erstellen
npm run build

# Tests ausführen
npm test

# Eject (⚠️ kann nicht rückgängig gemacht werden)
npm run eject
```

---

## 🎯 Was kann ich machen?

### ✅ Filterbare Parameter

**Preis**
- Slider: €50 - €250 pro Stunde

**Kapazität**
- Eingabe für Min/Max Personenzahl

**Raumgröße**
- Klein, Mittel, Groß

**Bezirke**
- Alle Berliner Bezirke
- Multi-Select

**Ausstattung**
- WLAN, Ton-/Lichttechnik, Parkplätze, Bar, Catering, etc.
- Multiple Auswahl mit AND-Logik

**Bewertung**
- 0.0 bis 5.0 Sterne Mindestbewertung

---

## 💡 Tipps & Tricks

### 🔄 Filter zurücksetzen
Klick auf den **"Zurücksetzen"** Button im Filter Panel

### 🔍 Besondere Kombinationen
- Budget + Klein: Unter €80, bis 150 Personen
- Premium + Groß: Über €150, 350+ Personen
- Mit Catering + Bar: Für Events mit Verpflegung

### 📱 Mobile Nutzung
- Filter-Panel scrollbar oben
- Locations in Single-Column
- Touch-freundliche Buttons

---

## 📚 Weitere Dokumentation

- **README.md** - Projekt-Übersicht
- **DEVELOPMENT.md** - Detaillierte Entwickler-Doku
- **FEATURES.md** - Vollständige Feature-Liste
- **CONTRIBUTING.md** - Wie du mithelfen kannst

---

## ❓ Häufig Gestellte Fragen

### Q: Warum funktioniert der Start nicht?
**A:** Stelle sicher, dass:
- Node.js 16+ installiert ist
- `npm install` ausgeführt wurde
- Port 3000 frei ist

### Q: Wie kann ich eine neue Location hinzufügen?
**A:** Bearbeite `src/services/LocationService.ts` und füge zur `mockLocations` Array eine neue Location hinzu.

### Q: Kann ich die App auf einen Server deployen?
**A:** Ja! Führe `npm run build` aus und hoste den `build/`-Ordner auf:
- Vercel
- Netlify
- GitHub Pages
- Eigener Server

### Q: Kann ich die Filter-Logik ändern?
**A:** Ja! Ändere die `filterLocations()` Methode in `src/services/LocationService.ts`

---

## 🐛 Probleme?

### Port 3000 ist bereits besetzt
```bash
# Finde Prozess auf Port 3000
lsof -ti:3000

# Kill den Prozess
kill -9 <PID>

# Oder starte auf anderem Port
PORT=3001 npm start
```

### Module nicht gefunden?
```bash
# Lösche node_modules und package-lock.json
rm -rf node_modules package-lock.json

# Installiere neu
npm install
```

### Performance Issues?
- Browser DevTools öffnen (F12)
- Performance Tab nutzen
- React DevTools Extension installieren

---

## 🌟 Nächste Schritte

1. **Erkunde den Code** - Schau dir `src/components/` an
2. **Modifiziere Locations** - Ändere Daten in `LocationService.ts`
3. **Passe Design an** - Bearbeite CSS-Dateien
4. **Erweitere Features** - Füge neue Filter hinzu
5. **Deploy** - Veröffentliche deine Version

---

## 📞 Support

Probleme oder Fragen?
- 📖 Lese die README.md
- 🐛 Erstelle ein Issue auf GitHub
- 💬 Kontaktiere die Maintainer

---

**Viel Spaß mit dem Event-Planer! 🎉**

Generiert: 4. Dezember 2025
