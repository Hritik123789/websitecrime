export default function HeatmapLegend() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-gray-900 mb-3">सुरक्षा स्तर / Safety Levels</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-700">सुरक्षित / Safe</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-sm text-gray-700">सावधान / Caution</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-700">खतरनाक / Dangerous</span>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-600">
        <p>* डेटा पिछले 30 दिनों के आधार पर</p>
        <p>* Data based on last 30 days</p>
      </div>
    </div>
  );
}