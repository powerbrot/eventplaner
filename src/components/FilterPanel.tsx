import React from 'react';
import { FilterOptions, SortOption } from '../types';
import '../styles/FilterPanel.css';

interface FilterPanelProps {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  districts: string[];
  amenitiesOptions: string[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  setFilters,
  sortBy,
  setSortBy,
  districts,
  amenitiesOptions,
}) => {
  const handlePriceChange = (value: number) => {
    setFilters({ ...filters, priceMax: value });
  };

  const handleCapacityMinChange = (value: number) => {
    setFilters({ ...filters, capacityMin: value });
  };

  const handleCapacityMaxChange = (value: number) => {
    setFilters({ ...filters, capacityMax: value });
  };

  const handleDistrictToggle = (district: string) => {
    const currentDistricts = filters.districts || [];
    const newDistricts = currentDistricts.includes(district)
      ? currentDistricts.filter((d) => d !== district)
      : [...currentDistricts, district];
    setFilters({ ...filters, districts: newDistricts });
  };

  const handleSizeToggle = (size: 'klein' | 'mittel' | 'groß') => {
    const currentSizes = filters.size || [];
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter((s) => s !== size)
      : [...currentSizes, size];
    setFilters({ ...filters, size: newSizes });
  };

  const handleAmenityToggle = (amenity: string) => {
    const currentAmenities = filters.amenities || [];
    const newAmenities = currentAmenities.includes(amenity)
      ? currentAmenities.filter((a) => a !== amenity)
      : [...currentAmenities, amenity];
    setFilters({ ...filters, amenities: newAmenities });
  };

  const handleRatingChange = (value: number) => {
    setFilters({ ...filters, ratingMin: value });
  };

  const resetFilters = () => {
    setFilters({});
    setSortBy('distance');
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2>🔍 Filter & Sortierung</h2>
        <button className="reset-btn" onClick={resetFilters}>
          Zurücksetzen
        </button>
      </div>

      {/* Sortierung */}
      <div className="filter-group">
        <h3>Sortieren nach</h3>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="filter-select">
          <option value="distance">📍 Entfernung</option>
          <option value="rating">⭐ Bewertung</option>
          <option value="price">💰 Preis</option>
          <option value="capacity">👥 Kapazität</option>
          <option value="popularity">🔥 Beliebtheit</option>
        </select>
      </div>

      {/* Preis */}
      <div className="filter-group">
        <h3>Maximal-Preis</h3>
        <div className="slider-container">
          <input
            type="range"
            min="50"
            max="250"
            step="10"
            value={filters.priceMax || 250}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="slider"
          />
          <span className="slider-value">€{filters.priceMax || 250}/Stunde</span>
        </div>
      </div>

      {/* Kapazität */}
      <div className="filter-group">
        <h3>Kapazität (Personen)</h3>
        <div className="capacity-inputs">
          <div className="input-group">
            <label>Min:</label>
            <input
              type="number"
              min="0"
              max="1000"
              value={filters.capacityMin || 0}
              onChange={(e) => handleCapacityMinChange(Number(e.target.value))}
              className="number-input"
            />
          </div>
          <div className="input-group">
            <label>Max:</label>
            <input
              type="number"
              min="0"
              max="1000"
              value={filters.capacityMax || 1000}
              onChange={(e) => handleCapacityMaxChange(Number(e.target.value))}
              className="number-input"
            />
          </div>
        </div>
      </div>

      {/* Größe */}
      <div className="filter-group">
        <h3>Raumgröße</h3>
        <div className="checkbox-group">
          {['klein', 'mittel', 'groß'].map((size) => (
            <label key={size} className="checkbox-label">
              <input
                type="checkbox"
                checked={(filters.size || []).includes(size as 'klein' | 'mittel' | 'groß')}
                onChange={() => handleSizeToggle(size as 'klein' | 'mittel' | 'groß')}
              />
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Bezirke */}
      <div className="filter-group">
        <h3>Bezirke</h3>
        <div className="checkbox-group">
          {districts.map((district) => (
            <label key={district} className="checkbox-label">
              <input
                type="checkbox"
                checked={(filters.districts || []).includes(district)}
                onChange={() => handleDistrictToggle(district)}
              />
              {district}
            </label>
          ))}
        </div>
      </div>

      {/* Ausstattung */}
      <div className="filter-group">
        <h3>Ausstattung</h3>
        <div className="checkbox-group">
          {amenitiesOptions.map((amenity) => (
            <label key={amenity} className="checkbox-label">
              <input
                type="checkbox"
                checked={(filters.amenities || []).includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      {/* Bewertung */}
      <div className="filter-group">
        <h3>Mindest-Bewertung</h3>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={filters.ratingMin || 0}
            onChange={(e) => handleRatingChange(Number(e.target.value))}
            className="slider"
          />
          <span className="slider-value">⭐ {(filters.ratingMin || 0).toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
