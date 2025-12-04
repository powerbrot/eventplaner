# Event-Planer Berlin Development Guide

## Überblick

Der Event-Planer Berlin ist eine moderne React + TypeScript Web-Anwendung zum Suchen, Filtern und Sortieren von Event-Locations in Berlin. Die Anwendung bietet eine intuitive Benutzeroberfläche mit erweiterten Filtermöglichkeiten.

## Projektstruktur

```
eventplaner/
├── public/                      # Statische Dateien
│   └── index.html
├── src/
│   ├── components/             # React-Komponenten
│   │   ├── FilterPanel.tsx      # Filter & Sortierung
│   │   ├── LocationCard.tsx     # Location Card UI
│   │   └── LocationDetail.tsx   # Detail Modal
│   ├── services/               # Business Logic
│   │   └── LocationService.ts   # API/Location Service
│   ├── styles/                 # CSS-Dateien
│   │   ├── App.css
│   │   ├── FilterPanel.css
│   │   ├── LocationCard.css
│   │   ├── LocationDetail.css
│   │   └── index.css
│   ├── types.ts                # TypeScript Interfaces
│   ├── App.tsx                 # Hauptkomponente
│   └── index.tsx               # Entry Point
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Filter & Sortierungsfunktionen

### Filterbare Parameter

1. **Preis**
   - Maximal-Preis pro Stunde
   - Slider von €50 bis €250
   - Real-time Anpassung

2. **Kapazität**
   - Minimale Personenzahl
   - Maximale Personenzahl
   - Bereichsangabe möglich

3. **Raumgröße**
   - Klein (bis 150 Personen)
   - Mittel (150-350 Personen)
   - Groß (350+ Personen)

4. **Bezirke**
   - Alle Berliner Bezirke
   - Multi-Select möglich
   - Automatisch aus Daten generiert

5. **Ausstattung/Amenities**
   - Ton-/Lichttechnik
   - WLAN
   - Parkplätze
   - Bar/Getränke
   - Catering
   - Dekoration
   - Sicherheit
   - Multi-Select mit AND-Logik

6. **Bewertung**
   - Minimum Stern-Bewertung
   - 0.0 bis 5.0 Sterne
   - Nur Locations mit Mindestbewertung anzeigen

### Sortierungsoptionen

- **📍 Entfernung**: Nach Nähe (km)
- **⭐ Bewertung**: Nach Kundenbewertung (5.0 bis 0.0)
- **💰 Preis**: Nach Stundentarif (günstig zu teuer)
- **👥 Kapazität**: Nach max. Personenzahl (groß zu klein)
- **🔥 Beliebtheit**: Nach Anzahl Bewertungen

## Installation & Setup

### Voraussetzungen

- Node.js 16+ 
- npm oder yarn

### Installation

```bash
# Repository klonen
git clone https://github.com/powerbrot/eventplaner.git
cd eventplaner

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm start
```

Die Anwendung wird automatisch auf `http://localhost:3000` geöffnet.

## Production Build

```bash
npm run build
```

Dieser Befehl erstellt einen optimierten Build im `build/`-Verzeichnis.

## LocationService API

### Wichtige Methoden

#### `getLocations(): Promise<Location[]>`
Lädt alle verfügbaren Locations.

```typescript
const locations = await LocationService.getLocations();
```

#### `filterLocations(locations, filters): Location[]`
Filtert Locations basierend auf Filter-Objekten.

```typescript
const filtered = LocationService.filterLocations(locations, {
  priceMax: 100,
  capacityMin: 100,
  districts: ['Mitte', 'Kreuzberg'],
  amenities: ['WLAN', 'Parkplätze']
});
```

#### `sortLocations(locations, sortBy): Location[]`
Sortiert Locations nach verschiedenen Kriterien.

```typescript
const sorted = LocationService.sortLocations(locations, 'rating');
// Optionen: 'distance' | 'rating' | 'price' | 'capacity' | 'popularity'
```

#### `calculateDistance(lat1, lng1, lat2, lng2): number`
Berechnet die Entfernung zwischen zwei GPS-Koordinaten in km.

## Location Interface

```typescript
interface Location {
  id: string;
  name: string;
  address: string;
  district: string;
  lat: number;
  lng: number;
  capacity: number;
  pricePerHour: number;
  rating: number;
  reviews: number;
  amenities: string[];
  size: 'klein' | 'mittel' | 'groß';
  distance?: number;
}
```

## Styling & Design

- **Farbe Primär**: #667eea (Lila)
- **Farbe Sekundär**: #764ba2 (Dunkelviolett)
- **Hintergrund**: #f5f5f5 (Hellgrau)
- **Font**: System Fonts (Apple System, Segoe UI, Roboto)
- **Layout**: CSS Grid & Flexbox

### Responsive Design

- **Desktop**: Sidebar + Grid Layout
- **Tablet (1024px)**: Flexible Grid
- **Mobile (768px)**: Single Column Layout

## Komponenten

### App.tsx
Hauptkomponente mit State Management:
- Locations Laden
- Filtering & Sorting Logic
- Modal Management

### FilterPanel.tsx
Alle Filter-Optionen und Sortierung:
- Preis-Slider
- Kapazitäts-Eingabe
- Checkbox-Listen für Bezirke & Amenities
- Reset-Button

### LocationCard.tsx
Einzelne Location Karte:
- Kurz-Info (Name, Adresse, Preis)
- Bewertungs-Badge
- Amenities Preview
- Click-Handler für Detail-Modal

### LocationDetail.tsx
Modal mit ausführlichen Informationen:
- Alle Details
- Amenities Grid
- Action Buttons (Anfrage, Karte, Favoriten)

## Demo-Locations

Die Anwendung enthält 10 Demo-Locations in verschiedenen Berlin-Bezirken:

1. **Spreebogen Lofts** (Mitte) - Groß, Premium
2. **Kreuzberg Event Space** (Kreuzberg) - Mittel, Budget
3. **Friedrichshain Warehouse** (Friedrichshain) - Groß, Premium
4. **Charlottenburg Palace Room** (Charlottenburg) - Mittel, Standard
5. **Neukölln Urban Space** (Neukölln) - Mittel, Budget
6. **Tiergarten Boutique Hall** (Tiergarten) - Klein, Standard
7. **Prenzlauer Berg Studio** (Prenzlauer Berg) - Mittel, Standard
8. **Spandau Industrial Hall** (Spandau) - Groß, Standard
9. **Schöneberg Elegant Room** (Schöneberg) - Klein, Budget
10. **Lichtenberg Modern Space** (Lichtenberg) - Mittel, Budget

## Zukünftige Erweiterungen

- [ ] Integration mit echten Location-APIs
- [ ] Benutzer-Authentifizierung
- [ ] Favoriten-System
- [ ] Booking-Funktion
- [ ] Zahlungsintegration
- [ ] Google Maps Integration
- [ ] Email-Anfragen versenden
- [ ] Galerie/Fotos für Locations
- [ ] Bewertungs- & Review-System
- [ ] Verfügbarkeits-Kalender

## Troubleshooting

### Port 3000 bereits in Verwendung?
```bash
lsof -ti:3000 | xargs kill -9
npm start
```

### Dependencies Probleme?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fehler?
```bash
npm run build -- --reset-cache
```

## Contributing

Contributions sind willkommen! Bitte erstellen Sie einen Pull Request mit:
- Aussagekräftige Commit-Nachrichten
- Tests für neue Features
- Aktualisierte README bei größeren Änderungen

## Lizenz

MIT
