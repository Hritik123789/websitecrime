import Link from 'next/link';
import { Shield, MapPin, Bell, TrendingUp, Phone, Users, FileText, AlertTriangle } from 'lucide-react';
import AlertBanner from '../components/AlertBanner';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Alert Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AlertBanner 
          message="सुरक्षा अलर्ट: दिल्ली में बढ़े हुए चोरी के मामले। सावधान रहें। / Safety Alert: Increased theft cases in Delhi. Stay vigilant."
          type="warning"
        />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              CrimeShield
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-orange-100">
              भारत सुरक्षा पोर्टल
            </p>
            <p className="text-lg md:text-xl mb-8 text-orange-100">
              India's Public Safety Portal
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              अपराध की रिपोर्ट करें, सुरक्षा मैप देखें, और अपने क्षेत्र में सुरक्षित रहें।
              <br />
              Report crimes, view safety maps, and stay secure in your area.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          त्वरित कार्य / Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/report" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-500">
              <FileText className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">रिपोर्ट करें</h3>
              <p className="text-gray-600">Report Crime</p>
              <p className="text-sm text-gray-500 mt-2">अपराध की तुरंत रिपोर्ट करें</p>
            </div>
          </Link>

          <Link href="/map" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <MapPin className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">मैप देखें</h3>
              <p className="text-gray-600">View Map</p>
              <p className="text-sm text-gray-500 mt-2">अपराध हॉटस्पॉट देखें</p>
            </div>
          </Link>

          <Link href="/alerts" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-500">
              <Bell className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">अलर्ट सेटअप</h3>
              <p className="text-gray-600">Setup Alerts</p>
              <p className="text-sm text-gray-500 mt-2">सुरक्षा अलर्ट प्राप्त करें</p>
            </div>
          </Link>

          <Link href="/trends" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ट्रेंड्स</h3>
              <p className="text-gray-600">View Trends</p>
              <p className="text-sm text-gray-500 mt-2">अपराध के आंकड़े देखें</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            हमारा प्रभाव / Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25,847</div>
              <p className="text-gray-600">रिपोर्ट की गई / Reports Filed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">18,392</div>
              <p className="text-gray-600">हल किए गए मामले / Cases Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1.2M+</div>
              <p className="text-gray-600">सक्रिय उपयोगकर्ता / Active Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">आपातकालीन संपर्क / Emergency Contacts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-red-700 p-6 rounded-lg">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">100</div>
              <p>पुलिस / Police</p>
            </div>
            <div className="text-center bg-red-700 p-6 rounded-lg">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">1091</div>
              <p>महिला हेल्पलाइन / Women Helpline</p>
            </div>
            <div className="text-center bg-red-700 p-6 rounded-lg">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">1930</div>
              <p>साइबर क्राइम / Cyber Crime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}