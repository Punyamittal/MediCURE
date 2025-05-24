'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { artLocations } from './sampleData';

// You'll need to replace this with your actual Mapbox token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });
    mapRef.current = map;

    // Add markers and popups
    artLocations.forEach((loc) => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.background = '#2563eb';
      el.style.width = '24px';
      el.style.height = '24px';
      el.style.borderRadius = '50%';
      el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
      el.style.display = 'flex';
      el.style.justifyContent = 'center';
      el.style.alignItems = 'center';
      el.style.cursor = 'pointer';
      el.innerHTML = `<span style="color:white;font-size:16px;">🎨</span>`;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div style="min-width:180px;">
          <h3 style="font-size:1.1rem;font-weight:bold;margin-bottom:0.25rem;">${loc.title}</h3>
          <p style="font-size:0.95rem;">${loc.description}</p>
        </div>`
      );

      new mapboxgl.Marker(el)
        .setLngLat(loc.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
} 