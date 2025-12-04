# 🎉 Event-Planer Berlin - Standalone Version

## ⚡ 3 Sekunden zum Starten!

### Methode 1: Datei öffnen
```bash
# Im Terminal:
open standalone.html

# ODER: Doppelklick auf standalone.html im Datei-Browser
# ODER: Rechtsklick → Mit Browser öffnen
```

### Methode 2: Mit Python Server
```bash
# Python 3
python3 -m http.server 8000

# Dann öffne: http://localhost:8000/standalone.html
```

### Methode 3: Mit Node http-server
```bash
# Installation (einmalig)
npm install -g http-server

# Starten
http-server

# Dann öffne: http://localhost:8080/standalone.html
```

---

## ✨ Was kann die Standalone Version?

✅ **Alle Filter funktionieren:**
- Preis (€50-€250/Stunde)
- Kapazität (Min/Max Personen)
- Raumgröße (Klein/Mittel/Groß)
- Bezirke (Alle Berlin-Bezirke)
- Ausstattung (WLAN, Ton-/Lichttechnik, etc.)
- Bewertung (0.0-5.0 Sterne)

✅ **Alle Sortierungen funktionieren:**
- Entfernung
- Bewertung
- Preis
- Kapazität
- Beliebtheit

✅ **Responsive auf allen Geräten:**
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

✅ **Interaktive Features:**
- Live-Filter-Updates
- Modal mit Location-Details
- Smooth Animationen
- Dark Hover-Effekte

---

## 🎯 Erste Schritte

1. **Öffne `standalone.html`** ← Das war's!
2. **Probiere die Filter**: Links im Panel
3. **Wähle eine Location**: Click auf die Karte
4. **Sehe Details**: Modal öffnet sich
5. **Zurück**: Click auf X oder außerhalb des Modals

---

## 💡 Tipps & Tricks

### Budget-Suche
1. Schiebe "Maximal-Preis" auf €80
2. Wähle Größe "Klein" oder "Mittel"
3. 📍 Perfekt für kleinere Events!

### Premium-Suche
1. Stelle "Maximal-Preis" auf €200+
2. Wähle Größe "Groß"
3. Selektiere Ausstattung (alle relevant)
4. 🎉 Für große Events mit Extras!

### Beliebte Locations
1. Sortiere nach "Beliebtheit"
2. Sieh zuerst die meisten Reviews
3. ⭐ Bewährte Favoriten zuerst

### In der Nähe
1. Sortiere nach "Entfernung"
2. Nähere Locations zuerst
3. 📍 Spart Anfahrtszeit!

---

## 🚀 Technische Details

Die Standalone Version:
- ✅ Läuft **offline** (keine Internet nötig außer beim Download)
- ✅ Keine Installation nötig
- ✅ Nutzt React 18 über CDN
- ✅ Alle Filter & Sortierung funktionieren
- ✅ Mock-Daten (10 Demo-Locations)
- ✅ Responsive CSS
- ✅ Moderne JavaScript

### Browser-Kompatibilität
- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 📝 Daten ändern?

**Die Standalone-Version mit eigenem Daten bearbeiten:**

Öffne `standalone.html` mit einem Text-Editor und suche nach `mockLocations`:

```javascript
const mockLocations = [
    {
        id: '1',
        name: 'Spreebogen Lofts',
        // ... mehr Daten
    },
    // Weitere Locations...
];
```

Ändere Name, Preis, Capacity, etc. und speichern → Reload! ✨

---

## 🎨 Styling anpassen?

Die komplette CSS ist im `<style>` Tag:

```html
<style>
    /* Alle Farben hier */
    /* Layouts hier */
    /* Responsive hier */
</style>
```

Einfach bearbeiten und speichern → Reload!

---

## ❓ FAQ

**Q: Brauche ich Node.js?**  
**A:** Nein! Einfach standalone.html öffnen und fertig.

**Q: Funktioniert das offline?**  
**A:** Nach dem Download ja! React wird von CDN geladen.

**Q: Kann ich meine Daten speichern?**  
**A:** In dieser Version nicht (wäre eine Erweiterung). Daten sind in-memory.

**Q: Kann ich das auf einen Server uploaden?**  
**A:** Ja! FTP/SFTP die standalone.html auf deinen Server und öffne sie im Browser.

---

## 📞 Support

- 📖 Siehe README.md für mehr Info
- 🐛 Probleme? Schau DEVELOPMENT.md
- 🤝 Beitragen? Siehe CONTRIBUTING.md

---

**Viel Spaß mit dem Event-Planer! 🎉**

Generiert: 4. Dezember 2025
