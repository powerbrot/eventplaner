# Event-Planner Berlin

Ein moderner Web-Anwendung zum Finden, Filtern und Sortieren von Event-Locations in Berlin.

## 🚀 Schneller Start

### Option 1: Standalone Version (direkt im Browser!)
Öffne einfach die `standalone.html` Datei direkt im Browser - **keine Installation nötig!**
```bash
# Oder von GitHub aus:
open standalone.html
```

### Option 2: Mit Vite (Entwicklung)
```bash
npm install
npm run dev
# Öffnet automatisch auf http://localhost:3000
```

### Option 3: Production Build
```bash
npm install
npm run build
npm run preview
```

---

## ✨ Features

- 📍 Findet alle Event-Locations in Berlin
- 🔍 Intelligentes Filtern nach verschiedenen Kriterien
- 📊 Sortierung nach relevanten Parametern
- 🎨 Moderne und responsive UI
- ⚡ Sehr schnelle Performance

## 🔧 Filterbare Parameter

- **Raumgröße**: Klein, Mittel, Groß
- **Ausstattung**: Ton-/Lichttechnik, WLAN, Bar, Parkplätze, Catering, Dekoration, Sicherheit
- **Kapazität**: Personenzahl (min/max)
- **Preiskategorie**: €50 - €250/Stunde
- **Lage**: Alle Berliner Bezirke
- **Bewertung**: 0.0 - 5.0 Sterne

## 📊 Sortieroptionen

- Nach Entfernung
- Nach Bewertung
- Nach Preis
- Nach Kapazität
- Nach Beliebtheit

## 🏗️ Technologie Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5 (super schnell!)
- **Styling**: CSS 3 (Grid & Flexbox)
- **Standalone Version**: Pure React mit Babel (kein Build nötig)

## Installation

### Option 1: Direkt im Browser (standalone.html)
Keine Installation nötig! Einfach die Datei öffnen:
```bash
open standalone.html
# oder doppelklick in der Datei-Browser
```

### Option 2: Mit Node.js

```bash
npm install
npm run dev
```

## Entwicklung

```bash
npm run dev
```

Die Anwendung öffnet sich auf `http://localhost:3000`

## Production Build

```bash
npm run build
```

Der Build-Output ist im `dist/` Verzeichnis.

## Demo-Daten

Die Anwendung enthält 10 Sample-Daten für verschiedene Event-Locations in Berlin mit realistischen Eigenschaften:

1. **Spreebogen Lofts** - Mitte (500 Personen, €150/h)
2. **Kreuzberg Event Space** - Kreuzberg (200 Personen, €80/h)
3. **Friedrichshain Warehouse** - Friedrichshain (800 Personen, €200/h)
4. **Charlottenburg Palace Room** - Charlottenburg (150 Personen, €120/h)
5. **Neukölln Urban Space** - Neukölln (300 Personen, €60/h)
6. **Tiergarten Boutique Hall** - Tiergarten (100 Personen, €90/h)
7. **Prenzlauer Berg Studio** - Prenzlauer Berg (250 Personen, €95/h)
8. **Spandau Industrial Hall** - Spandau (600 Personen, €140/h)
9. **Schöneberg Elegant Room** - Schöneberg (120 Personen, €85/h)
10. **Lichtenberg Modern Space** - Lichtenberg (180 Personen, €70/h)

## Verwendung

### Standalone Version
1. Öffne `standalone.html` im Browser
2. Nutze die Filter und Sortierung
3. Klick auf eine Location für Details
4. **Fertig!** Keine Installation nötig

### Vite Version
1. Installiere Dependencies: `npm install`
2. Starte Entwicklungsserver: `npm run dev`
3. Öffne `http://localhost:3000`
4. Nutze Filter und Sortierung
5. Klick auf eine Location für Details

## 📱 Responsive Design

- ✅ Desktop (1400px+)
- ✅ Tablet (1024px)
- ✅ Mobile (< 768px)

## Lizenz

MIT
