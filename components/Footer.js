import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">CrimeShield</span>
            </div>
            <p className="text-gray-300 mb-4">
              भारत का सबसे भरोसेमंद सुरक्षा पोर्टल। अपराध की रिपोर्ट करें, सुरक्षित रहें।
            </p>
            <p className="text-gray-300">
              India's most trusted safety portal. Report crimes, stay safe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">त्वरित लिंक</h3>
            <ul className="space-y-2">
              <li><a href="/report" className="text-gray-300 hover:text-orange-500">अपराध रिपोर्ट करें</a></li>
              <li><a href="/map" className="text-gray-300 hover:text-orange-500">सुरक्षा मैप</a></li>
              <li><a href="/alerts" className="text-gray-300 hover:text-orange-500">अलर्ट सेटअप</a></li>
              <li><a href="/trends" className="text-gray-300 hover:text-orange-500">अपराध ट्रेंड्स</a></li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">आपातकालीन संपर्क</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">पुलिस: 100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">महिला हेल्पलाइन: 1091</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">साइबर क्राइम: 1930</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CrimeShield India. सभी अधिकार सुरक्षित। | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}