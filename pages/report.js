import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FileText, Upload, Shield, CheckCircle } from 'lucide-react';

export default function Report() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const crimeTypes = [
    'चोरी / Theft',
    'डकैती / Robbery', 
    'हमला / Assault',
    'उत्पीड़न / Harassment',
    'साइबर क्राइम / Cybercrime',
    'धोखाधड़ी / Fraud',
    'घरेलू हिंसा / Domestic Violence',
    'यौन उत्पीड़न / Sexual Harassment',
    'अन्य / Other'
  ];

  const indianCities = [
    'दिल्ली / Delhi',
    'मुंबई / Mumbai',
    'बेंगलुरु / Bangalore',
    'कोलकाता / Kolkata',
    'चेन्नई / Chennai',
    'हैदराबाद / Hyderabad',
    'पुणे / Pune',
    'अहमदाबाद / Ahmedabad',
    'जयपुर / Jaipur',
    'लखनऊ / Lucknow',
    'अन्य / Other'
  ];

  const onSubmit = (data) => {
    console.log('Report submitted:', data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              रिपोर्ट सफलतापूर्वक जमा की गई
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Report Successfully Submitted
            </p>
            <p className="text-gray-600 mb-6">
              आपकी रिपोर्ट ID: <span className="font-mono font-bold">CR-{Date.now()}</span>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              हमारी टीम जल्द ही आपकी रिपोर्ट की समीक्षा करेगी। आपातकालीन स्थिति में तुरंत 100 पर कॉल करें।
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              नई रिपोर्ट करें / New Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            अपराध रिपोर्ट करें
          </h1>
          <p className="text-lg text-gray-600">
            Report a Crime
          </p>
          <p className="text-sm text-gray-500 mt-2">
            सभी जानकारी सुरक्षित और गोपनीय है / All information is secure and confidential
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Anonymous Toggle */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="anonymous"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="text-sm font-medium text-gray-700">
                गुमनाम रिपोर्ट करें / Submit Anonymous Report
              </label>
            </div>

            {/* Personal Information */}
            {!isAnonymous && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    पूरा नाम / Full Name
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: !isAnonymous })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="आपका नाम / Your name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">Name is required</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    फोन नंबर / Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
            )}

            {/* Crime Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  अपराध का प्रकार / Crime Type *
                </label>
                <select
                  {...register('crimeType', { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">चुनें / Select</option>
                  {crimeTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.crimeType && (
                  <p className="text-red-600 text-sm mt-1">Crime type is required</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  शहर / City *
                </label>
                <select
                  {...register('city', { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">चुनें / Select</option>
                  {indianCities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-600 text-sm mt-1">City is required</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                विस्तृत स्थान / Detailed Location *
              </label>
              <input
                type="text"
                {...register('location', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="सड़क, इलाका, लैंडमार्क / Street, Area, Landmark"
              />
              {errors.location && (
                <p className="text-red-600 text-sm mt-1">Location is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                घटना का विवरण / Incident Description *
              </label>
              <textarea
                {...register('description', { required: true })}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="घटना का विस्तृत विवरण दें / Provide detailed description of the incident"
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1">Description is required</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  दिनांक / Date *
                </label>
                <input
                  type="date"
                  {...register('date', { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                {errors.date && (
                  <p className="text-red-600 text-sm mt-1">Date is required</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  समय / Time
                </label>
                <input
                  type="time"
                  {...register('time')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                फाइल अपलोड करें / Upload Files
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  फोटो, वीडियो या दस्तावेज़ अपलोड करें / Upload photos, videos or documents
                </p>
                <input
                  type="file"
                  {...register('files')}
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx"
                  className="mt-2"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium text-lg"
              >
                रिपोर्ट जमा करें / Submit Report
              </button>
            </div>
          </form>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-red-100 border border-red-400 rounded-lg p-4">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-red-600 mr-2" />
            <p className="text-red-800 font-medium">
              आपातकालीन स्थिति में तुरंत 100 पर कॉल करें / In emergency, call 100 immediately
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}