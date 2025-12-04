import { Location } from '../types';

// Mock-Daten für Berlin Event-Locations
export const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Spreebogen Lofts',
    address: 'Mitte, Berlin',
    district: 'Mitte',
    lat: 52.5200,
    lng: 13.4050,
    capacity: 500,
    pricePerHour: 150,
    rating: 4.8,
    reviews: 245,
    amenities: ['Ton-/Lichttechnik', 'WLAN', 'Parkplätze', 'Bar', 'Catering'],
    size: 'groß',
    distance: 2.5,
  },
  {
    id: '2',
    name: 'Kreuzberg Event Space',
    address: 'Reichenberger Str. 165',
    district: 'Kreuzberg',
    lat: 52.4988,
    lng: 13.4143,
    capacity: 200,
    pricePerHour: 80,
    rating: 4.6,
    reviews: 189,
    amenities: ['WLAN', 'Bar', 'Dekoration'],
    size: 'mittel',
    distance: 3.2,
  },
  {
    id: '3',
    name: 'Friedrichshain Warehouse',
    address: 'Ostkreuz, Friedrichshain',
    district: 'Friedrichshain',
    lat: 52.5050,
    lng: 13.4516,
    capacity: 800,
    pricePerHour: 200,
    rating: 4.7,
    reviews: 312,
    amenities: ['Ton-/Lichttechnik', 'Parkplätze', 'Bar', 'Sicherheit', 'Catering'],
    size: 'groß',
    distance: 4.1,
  },
  {
    id: '4',
    name: 'Charlottenburg Palace Room',
    address: 'Spandauer Damm 20-24',
    district: 'Charlottenburg',
    lat: 52.5198,
    lng: 13.2954,
    capacity: 150,
    pricePerHour: 120,
    rating: 4.9,
    reviews: 178,
    amenities: ['Ton-/Lichttechnik', 'WLAN', 'Dekoration', 'Catering'],
    size: 'mittel',
    distance: 5.3,
  },
  {
    id: '5',
    name: 'Neukölln Urban Space',
    address: 'Leinestr. 1',
    district: 'Neukölln',
    lat: 52.4765,
    lng: 13.4251,
    capacity: 300,
    pricePerHour: 60,
    rating: 4.4,
    reviews: 126,
    amenities: ['WLAN', 'Bar'],
    size: 'mittel',
    distance: 4.8,
  },
  {
    id: '6',
    name: 'Tiergarten Boutique Hall',
    address: 'Straße des 17. Juni',
    district: 'Tiergarten',
    lat: 52.5165,
    lng: 13.3499,
    capacity: 100,
    pricePerHour: 90,
    rating: 4.5,
    reviews: 98,
    amenities: ['Ton-/Lichttechnik', 'Catering', 'Parkplätze'],
    size: 'klein',
    distance: 2.1,
  },
  {
    id: '7',
    name: 'Prenzlauer Berg Studio',
    address: 'Stargarder Str. 70',
    district: 'Prenzlauer Berg',
    lat: 52.5400,
    lng: 13.4130,
    capacity: 250,
    pricePerHour: 95,
    rating: 4.7,
    reviews: 167,
    amenities: ['WLAN', 'Bar', 'Dekoration', 'Sicherheit'],
    size: 'mittel',
    distance: 3.7,
  },
  {
    id: '8',
    name: 'Spandau Industrial Hall',
    address: 'Zitadellenweg 16',
    district: 'Spandau',
    lat: 52.5368,
    lng: 13.1995,
    capacity: 600,
    pricePerHour: 140,
    rating: 4.3,
    reviews: 145,
    amenities: ['Ton-/Lichttechnik', 'Parkplätze', 'Bar', 'Sicherheit'],
    size: 'groß',
    distance: 8.2,
  },
  {
    id: '9',
    name: 'Schöneberg Elegant Room',
    address: 'Martin-Luther-Str. 103',
    district: 'Schöneberg',
    lat: 52.4850,
    lng: 13.3450,
    capacity: 120,
    pricePerHour: 85,
    rating: 4.6,
    reviews: 112,
    amenities: ['Ton-/Lichttechnik', 'WLAN', 'Catering'],
    size: 'klein',
    distance: 6.1,
  },
  {
    id: '10',
    name: 'Lichtenberg Modern Space',
    address: 'Friedensstr. 43',
    district: 'Lichtenberg',
    lat: 52.5150,
    lng: 13.4850,
    capacity: 180,
    pricePerHour: 70,
    rating: 4.2,
    reviews: 87,
    amenities: ['WLAN', 'Bar', 'Parkplätze'],
    size: 'mittel',
    distance: 5.9,
  },
];

// API-Service zur Verwaltung von Locations
export class LocationService {
  // Simuliert das Abrufen aller Locations
  static getLocations(): Promise<Location[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockLocations);
      }, 500);
    });
  }

  // Filtert Locations basierend auf den Filteroptionen
  static filterLocations(locations: Location[], filters: any): Location[] {
    return locations.filter((location) => {
      // Preisfilter
      if (filters.priceMax && location.pricePerHour > filters.priceMax) {
        return false;
      }

      // Kapazitätsfilter
      if (filters.capacityMin && location.capacity < filters.capacityMin) {
        return false;
      }
      if (filters.capacityMax && location.capacity > filters.capacityMax) {
        return false;
      }

      // Größenfilter
      if (filters.size && filters.size.length > 0 && !filters.size.includes(location.size)) {
        return false;
      }

      // Bezirkfilter
      if (filters.districts && filters.districts.length > 0 && !filters.districts.includes(location.district)) {
        return false;
      }

      // Amenitiesfilter
      if (filters.amenities && filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every((amenity: string) =>
          location.amenities.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }

      // Bewertungsfilter
      if (filters.ratingMin && location.rating < filters.ratingMin) {
        return false;
      }

      return true;
    });
  }

  // Sortiert Locations basierend auf der Sortieroption
  static sortLocations(locations: Location[], sortBy: string): Location[] {
    const sorted = [...locations];

    switch (sortBy) {
      case 'distance':
        return sorted.sort((a, b) => (a.distance || 0) - (b.distance || 0));
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'price':
        return sorted.sort((a, b) => a.pricePerHour - b.pricePerHour);
      case 'capacity':
        return sorted.sort((a, b) => b.capacity - a.capacity);
      case 'popularity':
        return sorted.sort((a, b) => b.reviews - a.reviews);
      default:
        return sorted;
    }
  }

  // Berechnet die Entfernung zwischen zwei Koordinaten (vereinfachte Haversine-Formel)
  static calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371; // Erdradius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round((R * c) * 10) / 10;
  }
}
