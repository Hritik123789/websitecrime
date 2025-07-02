import { Calendar, MapPin, User, FileText } from 'lucide-react';

export default function ComplaintCard({ complaint }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'investigating': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'लंबित / Pending';
      case 'investigating': return 'जांच में / Investigating';
      case 'resolved': return 'हल हो गया / Resolved';
      case 'closed': return 'बंद / Closed';
      default: return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {complaint.crimeType} - {complaint.id}
          </h3>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
            {getStatusText(complaint.status)}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{complaint.date}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{complaint.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>{complaint.reporterName || 'Anonymous'}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-start space-x-2">
          <FileText className="h-4 w-4 text-gray-400 mt-1" />
          <p className="text-sm text-gray-700 line-clamp-3">
            {complaint.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Priority: <span className="font-medium">{complaint.priority}</span>
        </div>
        <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}