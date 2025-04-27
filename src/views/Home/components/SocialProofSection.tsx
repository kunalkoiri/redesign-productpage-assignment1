import React from 'react';

const SocialProofSection: React.FC = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Trusted by Leading Healthcare Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-50 rounded-lg shadow-lg p-6">
            <p className="text-lg font-semibold text-gray-800">
              "This platform has revolutionized how we interact with our patients."
            </p>
            <p className="mt-4 text-gray-600">Dr. Jane Doe, Specialist</p>
          </div>

          
          <div className="flex items-center justify-center">
            <img src="/path/to/logo.png" alt="Partner Logo" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
