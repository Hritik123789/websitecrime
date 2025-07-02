import { AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

export default function AlertBanner({ message, type = 'warning', onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const bgColor = type === 'danger' ? 'bg-red-100 border-red-500' : 'bg-yellow-100 border-yellow-500';
  const textColor = type === 'danger' ? 'text-red-800' : 'text-yellow-800';
  const iconColor = type === 'danger' ? 'text-red-600' : 'text-yellow-600';

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div className={`${bgColor} border-l-4 p-4 mb-4 rounded-r-lg`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <AlertTriangle className={`h-5 w-5 ${iconColor} mr-3`} />
          <p className={`${textColor} font-medium`}>{message}</p>
        </div>
        <button
          onClick={handleClose}
          className={`${textColor} hover:opacity-75`}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}