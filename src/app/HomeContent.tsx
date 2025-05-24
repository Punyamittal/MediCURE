"use client";

import dynamic from 'next/dynamic';
import Map from '@/components/Map';
import { MAPBOX_CONFIG } from '@/config/mapbox';

const MapComponent = dynamic(() => import('@/components/map/MapComponent'), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-gray-100 animate-pulse" />
});

const LeafletMap = dynamic(() => import('@/components/LeafletMap'), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-gray-100 animate-pulse" />
});

const homeMarkers = [
  {
    id: '1',
    coordinates: [-74.0060, 40.7128] as [number, number],
    title: 'Central Park Art',
    description: 'Outdoor installations and sculptures in Central Park.'
  },
  {
    id: '2',
    coordinates: [-73.9776, 40.7614] as [number, number],
    title: 'MoMA',
    description: 'Museum of Modern Art, world-class exhibitions.'
  },
  {
    id: '3',
    coordinates: [-73.9632, 40.7794] as [number, number],
    title: 'The Met',
    description: 'The Metropolitan Museum of Art, iconic collections.'
  }
];

export default function HomeContent() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Art & Culture Near You
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore public art, cultural events, and connect with local artists in your area
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Public Art Map</h2>
        <LeafletMap />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-primary">Upcoming Events</h3>
          <p className="text-gray-600">Discover storytelling sessions, cultural festivals, and art exhibitions happening near you.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-primary">Local Artists</h3>
          <p className="text-gray-600">Connect with talented artists in your community and explore their work.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-primary">Cultural Venues</h3>
          <p className="text-gray-600">Find galleries, museums, and cultural centers in your area.</p>
        </div>
      </section>
    </div>
  );
} 