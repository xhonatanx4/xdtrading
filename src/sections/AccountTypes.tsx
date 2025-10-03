import React from 'react';
import { GraduationCap, Bell, Crown, Check } from 'lucide-react';

interface AccountCardProps {
  title: string;
  titleColor: string;
  description: string;
  minDepositValue: string;
  spreadsValue: string;
  leverageValue: string;
  borderColor: string;
  icon: React.ReactNode;
}

const FeatureRow: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <div className="flex items-center mb-1.5">
    <Check size={20} className="text-green-400 mr-2" />
    <span>{text}</span>
  </div>
);

const AccountCard: React.FC<AccountCardProps> = ({
  title,
  titleColor,
  description,
  minDepositValue,
  spreadsValue,
  leverageValue,
  borderColor,
  icon
}) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border-t-4 ${borderColor} hover:bg-white/10 transition-all duration-300 animate-fadeInUp flex flex-col`}>
      <div className="mb-6 flex flex-col items-start">
        <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mb-4 border border-gray-600/50">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 mt-4">
          <span className={titleColor}>{title}</span>
        </h3>
        <p className="text-gray-300 min-h-[80px]">{description}</p>
      </div>
      <div className="flex-1 flex flex-col gap-2 mt-2">
        <FeatureRow text={<span>Price: <span className="text-green-500">{minDepositValue}</span></span>} />
      </div>
    </div>
  );
};

const AccountTypes: React.FC = () => {
  return (
    <section className="gradient-bg2 pt-0 pb-0">
      <div className="section-container">
        <div className="text-center mb-16">
          <h3 className="gradient-text-green uppercase font-semibold tracking-wider mb-2">PRICING</h3>
          <h2 className="section-heading">Choose the Perfect Plan for Your Trading Journey</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AccountCard
            title="Course"
            titleColor="text-blue-500"
            description="Complete trading education with lifetime access. Master market analysis, risk management, and proven strategies used by professionals."
            minDepositValue="$350"
            spreadsValue=""
            leverageValue=""
            borderColor="border-blue-500"
            icon={<GraduationCap size={48} className="text-blue-400" />}
          />
          <AccountCard
            title="VIP Signals"
            titleColor="text-red-500"
            description="Professional VIP trading signals with real-time updates, layering strategies, and advanced risk management techniques."
            minDepositValue="$200/month"
            spreadsValue=""
            leverageValue=""
            borderColor="border-red-500"
            icon={<Bell size={48} className="text-red-400" />}
          />
          <AccountCard
            title="VIP Management"
            titleColor="text-yellow-500"
            description="Professional account management service. We trade with your funds, you keep 70% of profits. Zero risk to your principal amount."
            minDepositValue="Contact"
            spreadsValue=""
            leverageValue=""
            borderColor="border-yellow-500"
            icon={<Crown size={48} className="text-yellow-400" />}
          />
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;