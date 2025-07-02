import { useEffect, useRef } from 'react';

export default function MapComponent({ filters }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current) {
      // Dynamically import Leaflet
      import('leaflet').then((L) => {
        // Fix for default markers
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        // Initialize map centered on India
        const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5);
        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Sample crime data for major Indian cities
        const crimeData = [
          { lat: 28.6139, lng: 77.2090, city: 'Delhi', crimes: 45, risk: 'high' },
          { lat: 19.0760, lng: 72.8777, city: 'Mumbai', crimes: 38, risk: 'high' },
          { lat: 12.9716, lng: 77.5946, city: 'Bangalore', crimes: 22, risk: 'medium' },
          { lat: 22.5726, lng: 88.3639, city: 'Kolkata', crimes: 31, risk: 'high' },
          { lat: 13.0827, lng: 80.2707, city: 'Chennai', crimes: 18, risk: 'medium' },
          { lat: 17.3850, lng: 78.4867, city: 'Hyderabad', crimes: 15, risk: 'medium' },
          { lat: 18.5204, lng: 73.8567, city: 'Pune', crimes: 12, risk: 'low' },
          { lat: 23.0225, lng: 72.5714, city: 'Ahmedabad', crimes: 20, risk: 'medium' },
          { lat: 26.9124, lng: 75.7873, city: 'Jaipur', crimes: 14, risk: 'medium' },
          { lat: 26.8467, lng: 80.9462, city: 'Lucknow', crimes: 16, risk: 'medium' }
        ];

        // Add markers for each city
        crimeData.forEach(location => {
          const color = location.risk === 'high' ? 'red' : 
                       location.risk === 'medium' ? 'orange' : 'green';
          
          const circle = L.circle([location.lat, location.lng], {
            color: color,
            fillColor: color,
            fillOpacity: 0.3,
            radius: location.crimes * 1000
          }).addTo(map);

          circle.bindPopup(`
            <div class="p-2">
              <h3 class="font-bold">${location.city}</h3>
              <p>Reports: ${location.crimes}</p>
              <p>Risk Level: ${location.risk}</p>
            </div>
          `);
        });

        // Add heatmap effect using circles
        const heatmapData = [
          [28.6139, 77.2090, 0.8], // Delhi
          [19.0760, 72.8777, 0.7], // Mumbai
          [22.5726, 88.3639, 0.6], // Kolkata
          [12.9716, 77.5946, 0.4], // Bangalore
          [13.0827, 80.2707, 0.3], // Chennai
        ];

        heatmapData.forEach(([lat, lng, intensity]) => {
          const heatCircle = L.circle([lat, lng], {
            color: 'red',
            fillColor: 'red',
            fillOpacity: intensity * 0.3,
            radius: 50000,
            stroke: false
          }).addTo(map);
        });
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update map when filters change
  useEffect(() => {
    if (mapInstanceRef.current) {
      // Here you would typically update the map data based on filters
      console.log('Filters updated:', filters);
    }
  }, [filters]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}