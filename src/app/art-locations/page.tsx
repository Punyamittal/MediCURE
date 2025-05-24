'use client';

import { useState } from 'react';
import Map from '@/components/Map';
import { MAPBOX_CONFIG } from '@/config/mapbox';

// Example art locations data with real coordinates
const artLocations = [
  {
    id: '1',
    title: 'The High Line Art',
    description: 'Contemporary art installations along the elevated park',
    coordinates: [-74.0049, 40.7484] as [number, number],
  },
  {
    id: '2',
    title: 'Museum of Modern Art (MoMA)',
    description: 'World-renowned modern art museum with rotating exhibitions',
    coordinates: [-73.9776, 40.7614] as [number, number],
  },
  {
    id: '3',
    title: 'The Met Fifth Avenue',
    description: 'Iconic museum featuring art from around the world',
    coordinates: [-73.9632, 40.7794] as [number, number],
  },
  {
    id: '4',
    title: 'Whitney Museum',
    description: 'Contemporary American art museum with stunning views',
    coordinates: [-74.0089, 40.7396] as [number, number],
  },
  {
    id: '5',
    title: 'Guggenheim Museum',
    description: 'Famous spiral building housing modern and contemporary art',
    coordinates: [-73.9590, 40.7829] as [number, number],
  }
];

export default function ArtLocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = artLocations.filter(location =>
    location.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Art Locations</h1>
      
      <div className="card mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search art locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input w-full"
          />
        </div>
        
        <Map
          initialCenter={MAPBOX_CONFIG.defaultCenter}
          initialZoom={12}
          markers={filteredLocations}
          onMarkerClick={setSelectedLocation}
        />
      </div>

      {selectedLocation && (
        <div className="card">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {artLocations.find(loc => loc.id === selectedLocation)?.title}
          </h2>
          <p className="text-text mb-4">
            {artLocations.find(loc => loc.id === selectedLocation)?.description}
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">Get Directions</button>
            <button className="btn-secondary">Save Location</button>
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLocations.map((location) => (
          <div 
            key={location.id} 
            className="card cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedLocation(location.id)}
          >
            <h3 className="text-xl font-bold text-primary mb-2">{location.title}</h3>
            <p className="text-text">{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 