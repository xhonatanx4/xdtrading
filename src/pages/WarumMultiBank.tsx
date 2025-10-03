import React from 'react';
import MultiBankAdvantages from '../components/MultiBankAdvantages';
import MultiBankHistoryAndFeatures from '../components/MultiBankHistoryAndFeatures';
import CallToActionSection from '../components/CallToActionSection';

const WarumMultiBank: React.FC = () => {
  return (
    <div>
        <MultiBankAdvantages />
        <MultiBankHistoryAndFeatures />
        <CallToActionSection />
    </div>
  );
};

export default WarumMultiBank; 