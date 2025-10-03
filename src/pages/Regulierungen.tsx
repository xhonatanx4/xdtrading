import React from 'react';
import RegulatoryEntitiesSection from '../components/RegulatoryEntitiesSection';
import FinancialSecuritySection from '../components/FinancialSecuritySection';
import CallToActionSection from '../components/CallToActionSection';

const Regulierungen: React.FC = () => {
  return (
    <div>
      <RegulatoryEntitiesSection />
      <FinancialSecuritySection />
      <CallToActionSection />
    </div>
  );
};

export default Regulierungen; 