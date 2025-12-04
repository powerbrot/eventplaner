import React, { useState, useEffect } from 'react';
import { Location, FilterOptions, SortOption } from '../types';
import { LocationService } from '../services/LocationService';
import FilterPanel from './FilterPanel';
import LocationCard from './LocationCard';
import LocationDetail from './LocationDetail';
import '../styles/App.css';

const App: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [sortBy, setSortBy] = useState<SortOption>('distance');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  // Lade Locations beim Start
  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await LocationService.getLocations();
        setLocations(data);
        setFilteredLocations(data);
      } catch (error) {
        console.error('Fehler beim Laden der Locations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, []);

  // Filtere und sortiere Locations wenn Filter oder Sortierung sich ändern
  useEffect(() => {
    let result = LocationService.filterLocations(locations, filters);
    result = LocationService.sortLocations(result, sortBy);
    setFilteredLocations(result);
  }, [filters, sortBy, locations]);

  // Extrahiere unique Werte für Filter-Optionen
  const districts = Array.from(new Set(locations.map((loc) => loc.district))).sort();
  const allAmenities = Array.from(
    new Set(locations.flatMap((loc) => loc.amenities))
  ).sort();

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Lade Locations...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🎉 Event-Planer Berlin</h1>
          <p>Finde die perfekte Location für dein Event in Berlin</p>
        </div>
      </header>

      <div className="app-container">
        <aside className="sidebar">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
            districts={districts}
            amenitiesOptions={allAmenities}
          />
        </aside>

        <main className="main-content">
          <div className="results-header">
            <h2>
              {filteredLocations.length} Location{filteredLocations.length !== 1 ? 's' : ''} gefunden
            </h2>
            <p className="results-info">
              Sortiert nach: <strong>{sortBy === 'distance' ? 'Entfernung' : sortBy === 'rating' ? 'Bewertung' : sortBy === 'price' ? 'Preis' : sortBy === 'capacity' ? 'Kapazität' : 'Beliebtheit'}</strong>
            </p>
          </div>

          {filteredLocations.length === 0 ? (
            <div className="no-results">
              <p>😞 Keine Locations gefunden, die deinen Kriterien entsprechen.</p>
              <p>Versuche, deine Filter anzupassen.</p>
            </div>
          ) : (
            <div className="locations-grid">
              {filteredLocations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  onClick={setSelectedLocation}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {selectedLocation && (
        <LocationDetail
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
};

export default App;
