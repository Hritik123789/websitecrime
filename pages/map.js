import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Filter, Info } from 'lucide-react';
import HeatmapLegend from '../components/HeatmapLegend';

// Dynamically import MapComponent to avoid SSR issues
const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-200 animate-pulse rounded-lg"></div>
});

export default function Map() {
  const [filters, setFilters] = useState({
    crimeType: 'all',
    timeRange: '30days',
    city: 'all'
  });

  const crimeTypes = [
    { value: 'all', label: 'सभी अपराध / All Crimes' },
    { value: 'theft', label: 'चोरी / Theft' },
    { value: 'assault', label: 'हमला / Assault' },
    { value: 'harassment', label: 'उत्पीड़न / Harassment' },
    { value: 'cybercrime', label: 'साइबर क्राइम / Cybercrime' }
  ];

  const timeRanges = [
    { value: '7days', label: 'पिछले 7 दिन / Last 7 days' },
    { value: '30days', label: 'पिछले 30 दिन / Last 30 days' },
    { value: '90days', label: 'पिछले 90 दिन / Last 90 days' }
  ];

  const cities = [
    { value: 'all', label: 'सभी शहर / All Cities' },
    { value: 'delhi', label: 'दिल्ली / Delhi' },
    { value: 'mumbai', label: 'मुंबई / Mumbai' },
    { value: 'bangalore', label: 'बेंगलुरु / Bangalore' },
    { value: 'kolkata', label: 'कोलकाता / Kolkata' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            अपराध हीटमैप
          </h1>
          <p className="text-lg text-gray-600">
            Crime Heatmap - India
          </p>
          <p className="text-sm text-gray-500 mt-2">
            लाइव अपराध डेटा और हॉटस्पॉट / Live crime data and hotspots
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  फिल्टर / Filters
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    अपराध का प्रकार / Crime Type
                  </label>
                  <select
                    value={filters.crimeType}
                    onChange={(e) => setFilters({...filters, crimeType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {crimeTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    समय सीमा / Time Range
                  </label>
                  <select
                    value={filters.timeRange}
                    onChange={(e) => setFilters({...filters, timeRange: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {timeRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    शहर / City
                  </label>
                  <select
                    value={filters.city}
                    onChange={(e) => setFilters({...filters, city: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {cities.map(city => (
                      <option key={city.value} value={city.value}>
                        {city.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Legend */}
            <HeatmapLegend />

            {/* Safety Tips */}
            <div className="bg-blue-50 rounded-lg p-4 mt-6">
              <div className="flex items-center mb-2">
                <Info className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-semibold text-blue-900">सुरक्षा सुझाव</h4>
              </div>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• लाल क्षेत्रों से बचें</li>
                <li>• रात में अकेले न घूमें</li>
                <li>• आपातकाल में 100 डायल करें</li>
                <li>• Avoid red zones</li>
                <li>• Don't walk alone at night</li>
                <li>• Dial 100 in emergency</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="h-96 lg:h-[600px]">
                <MapComponent filters={filters} />
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">1,247</div>
                <p className="text-gray-600">इस महीने की रिपोर्ट</p>
                <p className="text-sm text-gray-500">Reports this month</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">23</div>
                <p className="text-gray-600">हॉटस्पॉट क्षेत्र</p>
                <p className="text-sm text-gray-500">Hotspot areas</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">89%</div>
                <p className="text-gray-600">सुरक्षित क्षेत्र</p>
                <p className="text-sm text-gray-500">Safe areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}