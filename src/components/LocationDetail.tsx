import React from 'react';
import { Location } from '../types';
import '../styles/LocationDetail.css';

interface LocationDetailProps {
  location: Location;
  onClose: () => void;
}

const LocationDetail: React.FC<LocationDetailProps> = ({ location, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="detail-header">
          <h1>{location.name}</h1>
          <div className="header-info">
            <span className="rating">⭐ {location.rating} ({location.reviews} Bewertungen)</span>
            <span className={`size-badge size-${location.size}`}>{location.size.toUpperCase()}</span>
          </div>
        </div>

        <div className="detail-section">
          <h2>📍 Standort</h2>
          <p className="address">{location.address}</p>
          <p className="district">Bezirk: <strong>{location.district}</strong></p>
          {location.distance !== undefined && (
            <p className="distance">Entfernung: <strong>{location.distance} km</strong></p>
          )}
          <p className="coordinates">
            Koordinaten: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </p>
        </div>

        <div className="detail-section">
          <h2>👥 Kapazität & Größe</h2>
          <p>
            <strong>Maximale Personenzahl:</strong> {location.capacity} Personen
          </p>
          <p>
            <strong>Raumgröße:</strong> {location.size.charAt(0).toUpperCase() + location.size.slice(1)}
          </p>
        </div>

        <div className="detail-section">
          <h2>💰 Preise</h2>
          <p>
            <strong>Preis pro Stunde:</strong> €{location.pricePerHour}
          </p>
          <p className="price-info">
            Geschätzter Tagespreis (8h): €{location.pricePerHour * 8}
          </p>
        </div>

        <div className="detail-section">
          <h2>🎯 Ausstattung</h2>
          <div className="amenities-grid">
            {location.amenities.map((amenity, idx) => (
              <div key={idx} className="amenity-item">
                <span className="amenity-icon">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-actions">
          <button className="btn btn-primary">📧 Anfrage senden</button>
          <button className="btn btn-secondary">📍 Auf Karte anzeigen</button>
          <button className="btn btn-secondary">❤️ Zu Favoriten hinzufügen</button>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
