import React from 'react';
import { Target, TrendingUp, Rocket, GraduationCap, Gem, Bot, Star, Smartphone, Trophy } from 'lucide-react';
// Removed direct image imports as they are now in the public folder
// import award1 from '../assets/awards/1.webp';
// import award2 from '../assets/awards/2.webp';
// import award3 from '../assets/awards/3.webp';
// import award4 from '../assets/awards/4.webp';
// import award5 from '../assets/awards/5.webp';
// import award6 from '../assets/awards/6.webp';
// import award7 from '../assets/awards/7.webp';
// import award8 from '../assets/awards/8.webp';
// Flag imports
import at from '../assets/flags/at.webp';
import de from '../assets/flags/de.webp';
import us from '../assets/flags/us.webp';
import mx from '../assets/flags/mx.webp';
import ky from '../assets/flags/ky.webp';
import vg from '../assets/flags/vg.webp';
import ie from '../assets/flags/ie.webp';
import br from '../assets/flags/br.webp';
import tr from '../assets/flags/tr.webp';
import cy from '../assets/flags/cy.webp';
import inFlag from '../assets/flags/in.webp';
import th from '../assets/flags/th.webp';
import ae from '../assets/flags/ae.webp';
import au from '../assets/flags/au.webp';
import sc from '../assets/flags/sc.webp';
import mu from '../assets/flags/mu.webp';
import zh from '../assets/flags/zh.webp';
import hk from '../assets/flags/hk.webp';
import ph from '../assets/flags/ph.webp';
import sg from '../assets/flags/sg.webp';
import vu from '../assets/flags/vu.webp';
import stripedBg from '../assets/striped-background-colored.webp';

const licenses = [
  { flag: at, company: 'MEX Asset Management', country: 'Austria', authority: 'FMA' },
  { flag: de, company: 'MEX Asset Management', country: 'Germany', authority: 'BaFIN' },
  { flag: us, company: 'MultiBank Exchange', country: 'United States of America' },
  { flag: mx, company: 'MultiBank Latam', country: 'Mexico' },
  { flag: ky, company: 'MEX Atlantic Corporation', country: 'Cayman Islands', authority: 'CIMA' },
  { flag: vg, company: 'MultiBank FX International', country: 'BVI', authority: 'FSC' },
  { flag: ie, company: 'MEX Capital Finance', country: 'Ireland' },
  { flag: br, company: 'MultiBank Brasil', country: 'Brasil' },
  { flag: tr, company: 'MEX Technology', country: 'Turkey' },
  { flag: cy, company: 'MEX Prime', country: 'Cyprus' },
  { flag: cy, company: 'MEX Europe Ltd', country: 'Cyprus', authority: 'CYSEC' },
  { flag: inFlag, company: 'MEXD WORLDWIDE', country: 'INDIA', authority: 'IFU' },
  { flag: th, company: 'MultiBank Thailand', country: 'Thailand' },
  { flag: ae, company: 'MEX Global Financial Services', country: 'United Arab Emirates', authority: 'SCA' },
  { flag: ae, company: 'MultiBank Group HQ', country: 'United Arab Emirates' },
  { flag: ae, company: 'MEX Digital FZE', country: 'United Arab Emirates', authority: 'VARA' },
  { flag: au, company: 'MEX Exchange', country: 'Australia', authority: 'ASIC' },
  { flag: au, company: 'MEX Digital', country: 'Australia', authority: 'AUSTRAC' },
  { flag: sc, company: 'MB Group Limited', country: 'Seychelles', authority: 'FSAS' },
  { flag: mu, company: 'MEXFM Securities Ltd', country: 'Mauritius', authority: 'FSCM' },
  { flag: zh, company: 'IKON Financial', country: 'Tianjin, China', authority: 'TFG' },
  { flag: hk, company: 'MEX Fintech', country: 'Hong Kong' },
  { flag: ph, company: 'MultiBank Philippines', country: 'Philippines' },
  { flag: sg, company: 'MEX Global Markets', country: 'Singapore', authority: 'MAS' },
  { flag: vu, company: 'MEX Pacific', country: 'Vanuatu', authority: 'VFSC' },
];

const awards = [
  { img: '/assets/awards/1.webp', title: 'Most Valuable Asset-Backed Token 2025' },
  { img: '/assets/awards/2.webp', title: 'Best Global ECN Broker 2025' },
  { img: '/assets/awards/3.webp', title: 'Most Reputable Forex Broker 2025' },
  { img: '/assets/awards/4.webp', title: 'Best Social Trading Solution' },
  { img: '/assets/awards/5.webp', title: 'Best Client Funds Protection' },
  { img: '/assets/awards/6.webp', title: 'Best Mobile FX Trading App' },
  { img: '/assets/awards/7.webp', title: 'Best Prime Trading Broker' },
  { img: '/assets/awards/8.webp', title: 'Best Global Regulated Broker 2024' },
];

const AwardsTimeline: React.FC = () => {
  // Duplicate awards for seamless looping
  const scrollingAwards = [...awards, ...awards];
  return (
    <section className="py-16 px-0 w-full relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src={stripedBg} alt="Background" className="w-full h-full object-cover opacity-100" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Monthly Results Box (Left) */}
          <div className="flex-1 bg-[#0a1f0e] rounded-3xl p-8 md:p-12 shadow-xl border border-green-900/40 flex flex-col items-center min-h-[400px]">
            <h3 className="text-green-400 uppercase font-semibold tracking-wider mb-2 text-center">MONTHLY RESULTS</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Consistent Profitable Trading</h2>
            <p className="text-lg text-gray-300 text-center mb-8 max-w-md">
              Track our proven trading performance with transparent monthly results showing consistent profits and risk management.
            </p>
            <div className="w-full max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
              <ul className="flex flex-col gap-4">
                {[
                  { month: 'January 2025', profit: '+$12,450', winRate: '87%', trades: 45 },
                  { month: 'December 2024', profit: '+$8,920', winRate: '82%', trades: 38 },
                  { month: 'November 2024', profit: '+$15,670', winRate: '89%', trades: 52 },
                  { month: 'October 2024', profit: '+$11,200', winRate: '85%', trades: 41 },
                  { month: 'September 2024', profit: '+$9,850', winRate: '79%', trades: 35 },
                  { month: 'August 2024', profit: '+$13,400', winRate: '91%', trades: 48 },
                  { month: 'July 2024', profit: '+$10,750', winRate: '83%', trades: 42 },
                  { month: 'June 2024', profit: '+$14,320', winRate: '88%', trades: 55 }
                ].map((result, idx) => (
                  <li key={idx} className="flex items-center justify-between gap-4 bg-[#0f2515] rounded-xl p-4 border border-green-900/40 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-white font-semibold text-sm leading-tight">{result.month}</span>
                      <span className="text-gray-300 text-xs leading-tight">{result.trades} trades • {result.winRate} win rate</span>
                    </div>
                    <span className="text-green-400 font-bold text-sm">{result.profit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Community Growth Box (Right) */}
          <div className="flex-1 bg-[#0a1f0e] rounded-3xl p-8 md:p-12 shadow-xl border border-green-900/40 flex flex-col">
            <h3 className="text-green-400 uppercase font-semibold tracking-wider mb-2 text-center">COMMUNITY GROWTH</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">2000+ Active Trading Members</h2>
            <p className="text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Our community has grown exponentially across Discord and Telegram. From humble beginnings to 2000+ active traders sharing knowledge and success stories daily.
            </p>
            <div className="relative overflow-hidden" style={{height: 340}}>
              <div className="awards-scroll flex flex-col gap-8" style={{animation: 'awards-scroll 18s linear infinite'}}>
                {[
                  { icon: Target, title: 'Discord Server Launch', date: 'Jan 2024', color: 'text-blue-400' },
                  { icon: TrendingUp, title: '100 Members Milestone', date: 'Feb 2024', color: 'text-green-400' },
                  { icon: Rocket, title: 'VIP Signals Launch', date: 'Mar 2024', color: 'text-red-400' },
                  { icon: GraduationCap, title: 'Trading Course Release', date: 'Apr 2024', color: 'text-purple-400' },
                  { icon: Gem, title: '500 Members Reached', date: 'Jun 2024', color: 'text-yellow-400' },
                  { icon: Bot, title: 'Trading Bot Launch', date: 'Aug 2024', color: 'text-cyan-400' },
                  { icon: Star, title: '1000 Members Milestone', date: 'Oct 2024', color: 'text-orange-400' },
                  { icon: Smartphone, title: 'Telegram Integration', date: 'Nov 2024', color: 'text-indigo-400' },
                  { icon: Trophy, title: '2000+ Active Members', date: 'Jan 2025', color: 'text-pink-400' },
                  { icon: Target, title: 'Discord Server Launch', date: 'Jan 2024', color: 'text-blue-400' },
                  { icon: TrendingUp, title: '100 Members Milestone', date: 'Feb 2024', color: 'text-green-400' },
                  { icon: Rocket, title: 'VIP Signals Launch', date: 'Mar 2024', color: 'text-red-400' },
                  { icon: GraduationCap, title: 'Trading Course Release', date: 'Apr 2024', color: 'text-purple-400' },
                  { icon: Gem, title: '500 Members Reached', date: 'Jun 2024', color: 'text-yellow-400' },
                  { icon: Bot, title: 'Trading Bot Launch', date: 'Aug 2024', color: 'text-cyan-400' },
                  { icon: Star, title: '1000 Members Milestone', date: 'Oct 2024', color: 'text-orange-400' },
                  { icon: Smartphone, title: 'Telegram Integration', date: 'Nov 2024', color: 'text-indigo-400' },
                ].map((milestone, idx) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div key={idx} className="bg-[#0f2515] rounded-2xl shadow-lg p-6 flex items-center gap-6 border border-green-900/40 w-full max-w-md mx-auto">
                      <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 border border-gray-600/50">
                        <IconComponent size={24} className={milestone.color} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-lg font-semibold leading-tight">{milestone.title}</span>
                        <span className="text-green-400 text-sm">{milestone.date}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <style>{`
                @keyframes awards-scroll {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
                  background: #0a1f0e;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #00cc6a;
                  border-radius: 6px;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsTimeline; 