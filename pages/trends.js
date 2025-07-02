import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Calendar, MapPin, AlertCircle } from 'lucide-react';

export default function Trends() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedCity, setSelectedCity] = useState('all');

  // Sample data for charts
  const monthlyData = [
    { month: 'जन/Jan', theft: 45, assault: 23, harassment: 12, cybercrime: 18 },
    { month: 'फर/Feb', theft: 52, assault: 19, harassment: 15, cybercrime: 22 },
    { month: 'मार/Mar', theft: 38, assault: 28, harassment: 18, cybercrime: 25 },
    { month: 'अप्र/Apr', theft: 41, assault: 25, harassment: 14, cybercrime: 20 },
    { month: 'मई/May', theft: 48, assault: 31, harassment: 16, cybercrime: 28 },
    { month: 'जून/Jun', theft: 55, assault: 27, harassment: 19, cybercrime: 32 }
  ];

  const cityData = [
    { city: 'दिल्ली/Delhi', crimes: 234 },
    { city: 'मुंबई/Mumbai', crimes: 198 },
    { city: 'बेंगलुरु/Bangalore', crimes: 156 },
    { city: 'कोलकाता/Kolkata', crimes: 143 },
    { city: 'चेन्नई/Chennai', crimes: 121 }
  ];

  const crimeTypeData = [
    { name: 'चोरी/Theft', value: 35, color: '#ef4444' },
    { name: 'हमला/Assault', value: 25, color: '#f97316' },
    { name: 'साइबर/Cyber', value: 20, color: '#eab308' },
    { name: 'उत्पीड़न/Harassment', value: 12, color: '#22c55e' },
    { name: 'अन्य/Other', value: 8, color: '#6366f1' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            अपराध ट्रेंड्स और आंकड़े
          </h1>
          <p className="text-lg text-gray-600">
            Crime Trends and Statistics
          </p>
          <p className="text-sm text-gray-500 mt-2">
            भारत में अपराध के पैटर्न और विश्लेषण / Crime patterns and analysis in India
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                समय अवधि / Time Period
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="weekly">साप्ताहिक / Weekly</option>
                <option value="monthly">मासिक / Monthly</option>
                <option value="yearly">वार्षिक / Yearly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                शहर / City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">सभी शहर / All Cities</option>
                <option value="delhi">दिल्ली / Delhi</option>
                <option value="mumbai">मुंबई / Mumbai</option>
                <option value="bangalore">बेंगलुरु / Bangalore</option>
                <option value="kolkata">कोलकाता / Kolkata</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                फिल्टर लागू करें / Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">1,247</div>
            <p className="text-gray-600">कुल रिपोर्ट</p>
            <p className="text-sm text-gray-500">Total Reports</p>
            <div className="text-sm text-red-600 mt-1">↑ 12% इस महीने</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">456</div>
            <p className="text-gray-600">चोरी के मामले</p>
            <p className="text-sm text-gray-500">Theft Cases</p>
            <div className="text-sm text-orange-600 mt-1">↑ 8% इस महीने</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">234</div>
            <p className="text-gray-600">साइबर क्राइम</p>
            <p className="text-sm text-gray-500">Cybercrime</p>
            <div className="text-sm text-blue-600 mt-1">↑ 25% इस महीने</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
            <p className="text-gray-600">समाधान दर</p>
            <p className="text-sm text-gray-500">Resolution Rate</p>
            <div className="text-sm text-green-600 mt-1">↑ 3% इस महीने</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Trends */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              मासिक ट्रेंड / Monthly Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="theft" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="assault" stroke="#f97316" strokeWidth={2} />
                <Line type="monotone" dataKey="cybercrime" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Crime Types Distribution */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              अपराध के प्रकार / Crime Types Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={crimeTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {crimeTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* City-wise Data */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            शहरवार आंकड़े / City-wise Statistics
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="crimes" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Insights and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-orange-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                मुख्य अंतर्दृष्टि / Key Insights
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                साइबर क्राइम में 25% की वृद्धि देखी गई है
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                दिल्ली में सबसे अधिक अपराध रिपोर्ट हुए हैं
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                रात्रि समय (10 PM - 6 AM) में 40% अधिक घटनाएं
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                महिला सुरक्षा हेल्पलाइन का उपयोग बढ़ा है
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                सुरक्षा सुझाव / Safety Recommendations
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                रात में अकेले बाहर न निकलें
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                साइबर सुरक्षा के नियमों का पालन करें
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                आपातकाल में तुरंत 100 पर कॉल करें
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                अपने परिवार को अपनी लोकेशन बताकर रखें
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}