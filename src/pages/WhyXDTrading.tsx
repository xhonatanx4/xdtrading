import React from 'react';
import XDTradingAdvantages from '../components/XDTradingAdvantages';
import XDTradingHistoryAndFeatures from '../components/XDTradingHistoryAndFeatures';
import CallToActionSection from '../components/CallToActionSection';

const WhyXDTrading: React.FC = () => {
  return (
    <div>
        <XDTradingAdvantages />
        <XDTradingHistoryAndFeatures />
        <CallToActionSection />
    </div>
  );
};

export default WhyXDTrading;

