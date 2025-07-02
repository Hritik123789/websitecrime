import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Shield, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-gray-900">CrimeShield</span>
              <span className="text-sm text-gray-600 hidden sm:block">| भारत सुरक्षा पोर्टल</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
              होम
            </Link>
            <Link href="/report" className="text-gray-700 hover:text-orange-600 font-medium">
              रिपोर्ट करें
            </Link>
            <Link href="/map" className="text-gray-700 hover:text-orange-600 font-medium">
              मैप देखें
            </Link>
            <Link href="/alerts" className="text-gray-700 hover:text-orange-600 font-medium">
              अलर्ट सेटअप
            </Link>
            <Link href="/trends" className="text-gray-700 hover:text-orange-600 font-medium">
              ट्रेंड्स
            </Link>
            <div className="flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-full">
              <Phone className="h-4 w-4 text-red-600" />
              <span className="text-red-600 font-semibold text-sm">100</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              होम / Home
            </Link>
            <Link href="/report" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              रिपोर्ट करें / Report
            </Link>
            <Link href="/map" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              मैप देखें / View Map
            </Link>
            <Link href="/alerts" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              अलर्ट सेटअप / Setup Alerts
            </Link>
            <Link href="/trends" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
              ट्रेंड्स / Trends
            </Link>
            <div className="px-3 py-2">
              <div className="flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-full w-fit">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-red-600 font-semibold">Emergency: 100</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}