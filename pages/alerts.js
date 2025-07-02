import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Bell, MapPin, Phone, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Alerts() {
  const [isSetup, setIsSetup] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Alert setup:', data);
    setIsSetup(true);
  };

  const enableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationEnabled(true);
          console.log('Location enabled:', position.coords);
        },
        (error) => {
          console.error('Location error:', error);
          alert('कृपया लोकेशन की अनुमति दें / Please allow location access');
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Bell className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            सुरक्षा अलर्ट सेटअप
          </h1>
          <p className="text-lg text-gray-600">
            Setup Safety Alerts
          </p>
          <p className="text-sm text-gray-500 mt-2">
            खतरनाक क्षेत्र में प्रवेश पर SMS अलर्ट प्राप्त करें / Get SMS alerts when entering dangerous areas
          </p>
        </div>

        {!isSetup ? (
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Location Permission */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      लोकेशन एक्सेस / Location Access
                    </h3>
                    <p className="text-sm text-blue-700">
                      अलर्ट के लिए आपकी लोकेशन की आवश्यकता है
                    </p>
                  </div>
                </div>
                <button
                  onClick={enableLocation}
                  disabled={locationEnabled}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    locationEnabled 
                      ? 'bg-green-100 text-green-800 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {locationEnabled ? 'सक्षम / Enabled' : 'सक्षम करें / Enable'}
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  मोबाइल नंबर / Mobile Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', { 
                    required: true,
                    pattern: /^[6-9]\d{9}$/
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="10 अंकों का मोबाइल नंबर / 10-digit mobile number"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    कृपया वैध मोबाइल नंबर दर्ज करें / Please enter valid mobile number
                  </p>
                )}
              </div>

              {/* Emergency Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  आपातकालीन संपर्क / Emergency Contact
                </label>
                <input
                  type="tel"
                  {...register('emergencyContact')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="आपातकाल में सूचित करने के लिए / To notify in emergency"
                />
              </div>

              {/* Alert Preferences */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  अलर्ट प्राथमिकताएं / Alert Preferences
                </label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('alertTypes.highRisk')}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      उच्च जोखिम क्षेत्र / High risk areas
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('alertTypes.mediumRisk')}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      मध्यम जोखिम क्षेत्र / Medium risk areas
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('alertTypes.nightTime')}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      रात्रि समय अलर्ट / Night time alerts (10 PM - 6 AM)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('alertTypes.crimeReports')}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      नई अपराध रिपोर्ट / New crime reports in area
                    </label>
                  </div>
                </div>
              </div>

              {/* Alert Radius */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  अलर्ट रेडियस / Alert Radius
                </label>
                <select
                  {...register('radius')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="500">500 मीटर / 500 meters</option>
                  <option value="1000">1 किमी / 1 kilometer</option>
                  <option value="2000">2 किमी / 2 kilometers</option>
                  <option value="5000">5 किमी / 5 kilometers</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!locationEnabled}
                  className={`px-8 py-3 rounded-lg font-medium text-lg ${
                    locationEnabled
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  अलर्ट सेटअप करें / Setup Alerts
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              अलर्ट सफलतापूर्वक सेटअप हो गए!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Alerts Successfully Setup!
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="text-green-800">
                आपको खतरनाक क्षेत्र में प्रवेश पर SMS अलर्ट मिलेंगे।
                <br />
                You will receive SMS alerts when entering dangerous areas.
              </p>
            </div>
            <button
              onClick={() => setIsSetup(false)}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              सेटिंग्स बदलें / Change Settings
            </button>
          </div>
        )}

        {/* Sample Alerts */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            नमूना अलर्ट / Sample Alerts
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium">उच्च जोखिम क्षेत्र अलर्ट</p>
                <p className="text-red-700 text-sm">
                  आप एक खतरनाक क्षेत्र में प्रवेश कर रहे हैं। सावधान रहें।
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <Bell className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-yellow-800 font-medium">रात्रि सुरक्षा अलर्ट</p>
                <p className="text-yellow-700 text-sm">
                  रात का समय है। अकेले न घूमें और सुरक्षित रहें।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}