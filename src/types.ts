export interface Location {
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

export interface FilterOptions {
  priceMax?: number;
  capacityMin?: number;
  capacityMax?: number;
  amenities?: string[];
  districts?: string[];
  size?: ('klein' | 'mittel' | 'groß')[];
  ratingMin?: number;
}

export type SortOption = 'distance' | 'rating' | 'price' | 'capacity' | 'popularity';
