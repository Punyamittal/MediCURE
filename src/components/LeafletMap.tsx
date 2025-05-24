'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const artLocations = [
  {
    id: 1,
    name: 'Central Park Art',
    description: 'Outdoor installations and sculptures in Central Park.',
    coordinates: [40.7829, -73.9654],
  },
  {
    id: 2,
    name: 'MoMA',
    description: 'Museum of Modern Art, world-class exhibitions.',
    coordinates: [40.7614, -73.9776],
  },
  {
    id: 3,
    name: 'The Met',
    description: 'The Metropolitan Museum of Art, iconic collections.',
    coordinates: [40.7794, -73.9632],
  },
  {
    id: 4,
    name: 'Whitney Museum',
    description: 'Contemporary American art museum with stunning views.',
    coordinates: [40.7396, -74.0089],
  },
  {
    id: 5,
    name: 'Guggenheim Museum',
    description: 'Famous spiral building housing modern and contemporary art.',
    coordinates: [40.7829, -73.9590],
  },
];

export default function LeafletMap() {
  return (
    <MapContainer center={[40.76, -73.97]} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {artLocations.map((loc) => (
        <Marker key={loc.id} position={loc.coordinates as [number, number]}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            {loc.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 