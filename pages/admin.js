import { useState } from 'react';
import { Search, Filter, Download, Eye, MoreVertical } from 'lucide-react';
import ComplaintCard from '../components/ComplaintCard';

export default function Admin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [crimeTypeFilter, setCrimeTypeFilter] = useState('all');

  // Sample complaints data
  const complaints = [
    {
      id: 'CR-001',
      reporterName: 'राज कुमार',
      crimeType: 'चोरी / Theft',
      location: 'कनॉट प्लेस, दिल्ली',
      description: 'मेरे घर में चोरी हुई है। सभी गहने और नकदी चोरी हो गई है।',
      date: '2024-01-15',
      status: 'investigating',
      priority: 'High'
    },
    {
      id: 'CR-002',
      reporterName: 'Anonymous',
      crimeType: 'उत्पीड़न / Harassment',
      location: 'बांद्रा, मुंबई',
      description: 'कार्यक्षेत्र में यौन उत्पीड़न की घटना हुई है।',
      date: '2024-01-14',
      status: 'pending',
      priority: 'High'
    },
    {
      id: 'CR-003',
      reporterName: 'सुनीता शर्मा',
      crimeType: 'साइबर क्राइम / Cybercrime',
      location: 'कोरमंगला, बेंगलुरु',
      description: 'ऑनलाइन धोखाधड़ी के द्वारा 50,000 रुपए की हानि हुई है।',
      date: '2024-01-13',
      status: 'resolved',
      priority: 'Medium'
    },
    {
      id: 'CR-004',
      reporterName: 'अमित पटेल',
      crimeType: 'हमला / Assault',
      location: 'सेक्टर 18, नोएडा',
      description: 'सड़क पर अज्ञात व्यक्तियों द्वारा हमला किया गया।',
      date: '2024-01-12',
      status: 'investigating',
      priority: 'High'
    }
  ];

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.reporterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || complaint.status === statusFilter;
    const matchesCity = cityFilter === 'all' || complaint.location.toLowerCase().includes(cityFilter);
    const matchesCrimeType = crimeTypeFilter === 'all' || complaint.crimeType.includes(crimeTypeFilter);

    return matchesSearch && matchesStatus && matchesCity && matchesCrimeType;
  });

  const exportToCSV = () => {
    const csvContent = [
      ['ID', 'Reporter', 'Crime Type', 'Location', 'Date', 'Status', 'Priority'],
      ...filteredComplaints.map(complaint => [
        complaint.id,
        complaint.reporterName,
        complaint.crimeType,
        complaint.location,
        complaint.date,
        complaint.status,
        complaint.priority
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'complaints.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            एडमिन पैनल / Admin Panel
          </h1>
          <p className="text-gray-600">
            शिकायत प्रबंधन और निगरानी / Complaint Management and Monitoring
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">कुल शिकायतें</p>
                <p className="text-2xl font-bold text-gray-900">{complaints.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">लंबित</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {complaints.filter(c => c.status === 'pending').length}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Filter className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">जांच में</p>
                <p className="text-2xl font-bold text-blue-600">
                  {complaints.filter(c => c.status === 'investigating').length}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">हल हो गए</p>
                <p className="text-2xl font-bold text-green-600">
                  {complaints.filter(c => c.status === 'resolved').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Download className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                खोजें / Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="ID, नाम, स्थान..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                स्थिति / Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">सभी / All</option>
                <option value="pending">लंबित / Pending</option>
                <option value="investigating">जांच में / Investigating</option>
                <option value="resolved">हल हो गए / Resolved</option>
                <option value="closed">बंद / Closed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                शहर / City
              </label>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">सभी शहर / All Cities</option>
                <option value="delhi">दिल्ली / Delhi</option>
                <option value="mumbai">मुंबई / Mumbai</option>
                <option value="bangalore">बेंगलुरु / Bangalore</option>
                <option value="kolkata">कोलकाता / Kolkata</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                अपराध प्रकार / Crime Type
              </label>
              <select
                value={crimeTypeFilter}
                onChange={(e) => setCrimeTypeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">सभी प्रकार / All Types</option>
                <option value="चोरी">चोरी / Theft</option>
                <option value="हमला">हमला / Assault</option>
                <option value="उत्पीड़न">उत्पीड़न / Harassment</option>
                <option value="साइबर">साइबर क्राइम / Cybercrime</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={exportToCSV}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Download className="h-4 w-4 mr-2" />
                CSV Export
              </button>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              शिकायतें ({filteredComplaints.length}) / Complaints
            </h2>
          </div>

          {filteredComplaints.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500">कोई शिकायत नहीं मिली / No complaints found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredComplaints.map(complaint => (
                <ComplaintCard key={complaint.id} complaint={complaint} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}