'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_CONFIG } from '@/config/mapbox';

// Initialize Mapbox with token
mapboxgl.accessToken = MAPBOX_CONFIG.token;

interface MapProps {
  initialCenter?: [number, number];
  initialZoom?: number;
  markers?: Array<{
    id: string;
    coordinates: [number, number];
    title: string;
    description?: string;
  }>;
  onMarkerClick?: (markerId: string) => void;
}

export default function Map({
  initialCenter = MAPBOX_CONFIG.defaultCenter,
  initialZoom = MAPBOX_CONFIG.defaultZoom,
  markers = [],
  onMarkerClick,
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAPBOX_CONFIG.defaultStyle,
        center: initialCenter,
        zoom: initialZoom,
        attributionControl: true,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        setMapLoaded(true);
        setError(null);
      });

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setError('Failed to load map. Please try again later.');
      });

      return () => {
        if (map.current) {
          map.current.remove();
          map.current = null;
        }
      };
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Failed to initialize map. Please check your configuration.');
    }
  }, [initialCenter, initialZoom]);

  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    try {
      // Remove existing markers
      const existingMarkers = document.getElementsByClassName('mapboxgl-marker');
      while (existingMarkers[0]) {
        existingMarkers[0].remove();
      }

      // Add new markers
      markers.forEach((marker) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.backgroundImage = 'url(/map-marker.svg)';
        el.style.backgroundSize = 'cover';
        el.style.cursor = 'pointer';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <h3 class="text-primary font-bold">${marker.title}</h3>
          ${marker.description ? `<p class="text-text">${marker.description}</p>` : ''}
        `);

        new mapboxgl.Marker(el)
          .setLngLat(marker.coordinates)
          .setPopup(popup)
          .addTo(map.current!);

        el.addEventListener('click', () => {
          if (onMarkerClick) {
            onMarkerClick(marker.id);
          }
        });
      });
    } catch (err) {
      console.error('Error adding markers:', err);
      setError('Failed to add markers to the map.');
    }
  }, [markers, mapLoaded, onMarkerClick]);

  if (error) {
    return (
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-background flex items-center justify-center">
        <div className="text-text text-center p-4">
          <p className="text-red-500 mb-2">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      {!mapLoaded && (
        <div className="absolute inset-0 bg-background flex items-center justify-center">
          <div className="text-text">Loading map...</div>
        </div>
      )}
    </div>
  );
} 