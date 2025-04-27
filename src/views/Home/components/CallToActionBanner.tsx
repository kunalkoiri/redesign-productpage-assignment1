import React from 'react';
import { Button } from '@/components/ui';

const CallToActionBanner: React.FC<{ scrollToSection: () => void }> = ({ scrollToSection }) => {
  return (
    <div className="py-16 px-6 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Join thousands of healthcare providers who are transforming their business with AI.</p>
        <Button block variant="solid" className="rounded-md max-w-[200px]" onClick={scrollToSection}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CallToActionBanner;
