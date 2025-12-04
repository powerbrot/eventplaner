import React, { useState, useEffect } from 'react';
import { Location } from '../types';
import '../styles/LocationCard.css';

interface LocationCardProps {
  location: Location;
  onClick: (location: Location) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, onClick }) => {
  return (
    <div className="location-card" onClick={() => onClick(location)}>
      <div className="card-header">
        <h3 className="location-name">{location.name}</h3>
        <span className="rating-badge">⭐ {location.rating}</span>
      </div>

      <div className="card-info">
        <p className="address">📍 {location.address}</p>
        <p className="district">Bezirk: {location.district}</p>
      </div>

      <div className="card-details">
        <div className="detail-item">
          <span className="label">Kapazität:</span>
          <span className="value">{location.capacity} Personen</span>
        </div>
        <div className="detail-item">
          <span className="label">Preis/Stunde:</span>
          <span className="value">€{location.pricePerHour}</span>
        </div>
        {location.distance !== undefined && (
          <div className="detail-item">
            <span className="label">Entfernung:</span>
            <span className="value">{location.distance} km</span>
          </div>
        )}
      </div>

      <div className="card-size">
        <span className={`size-badge size-${location.size}`}>{location.size.toUpperCase()}</span>
      </div>

      <div className="card-amenities">
        {location.amenities.slice(0, 3).map((amenity, idx) => (
          <span key={idx} className="amenity-tag">
            {amenity}
          </span>
        ))}
        {location.amenities.length > 3 && <span className="amenity-tag">+{location.amenities.length - 3}</span>}
      </div>

      <div className="card-reviews">
        <span className="reviews-count">{location.reviews} Bewertungen</span>
      </div>
    </div>
  );
};

export default LocationCard;
