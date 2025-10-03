import React from 'react';
import visa from '../assets/payments/paymentIcon-visa.svg';
import masterCard from '../assets/payments/paymentIcon-masterCard.svg';
import swift from '../assets/payments/paymentIcon-swift.svg';
import neteller from '../assets/payments/paymentIcon-neteller.svg';
import skrill from '../assets/payments/paymentIcon-skrill.svg';
import pagsmile from '../assets/payments/paymentIcon-pagsmile.svg';
import fatoorah from '../assets/payments/paymentIcon-fatoorah.svg';
import pluswallets from '../assets/payments/paymentIcon-pluswallets.svg';
import thaiQR from '../assets/payments/paymentIcon-thaiQR.svg';
import paytrust from '../assets/payments/paymentIcon-payRetailers.svg';
import payRetailers from '../assets/payments/paymentIcon-payRetailers.svg';
import korapay from '../assets/payments/paymentIcon-korapay.svg';
import paymentAsia from '../assets/payments/paymentIcon-paymentAsia.svg';
import boleto from '../assets/payments/paymentIcon-boleto.svg';
import pix from '../assets/payments/paymentIcon-pix.svg';
import spe from '../assets/payments/paymentIcon-spe.svg';
import praxis from '../assets/payments/paymentIcon-praxis.svg';
import gcash from '../assets/payments/paymentIcon-gcash.svg';
import dragonPay from '../assets/payments/paymentIcon-dragonPay.svg';
import globepay from '../assets/payments/globepay.svg';

const paymentLogos = [
  visa,
  masterCard,
  swift,
  neteller,
  skrill,
  pagsmile,
  fatoorah,
  pluswallets,
  thaiQR,
  paytrust,
  payRetailers,
  korapay,
  paymentAsia,
  boleto,
  pix,
  spe,
  praxis,
  gcash,
  dragonPay,
  globepay,
];

const borderColors = [
  '#3b82f6', // blue
  '#ec4899', // pink
  '#f59e42', // orange
  '#a78bfa', // purple
  '#10b981', // green
  '#f43f5e', // red
  '#6366f1', // indigo
  '#fbbf24', // yellow
  '#06b6d4', // cyan
  '#8b5cf6', // violet
  '#22d3ee', // teal
  '#eab308', // amber
  '#f472b6', // rose
  '#84cc16', // lime
  '#f87171', // red
  '#0ea5e9', // sky
  '#facc15', // yellow
  '#a3e635', // light green
  '#f472b6', // rose
  '#818cf8', // indigo
];

const LiquidityProviders: React.FC = () => {
  return (
    <section className="relative py-8 px-2 gradient-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {paymentLogos.map((logo, idx) => (
            <div
              key={logo}
              className={
                'bg-[#0a1f0e] rounded-xl flex items-center justify-center h-14 sm:h-16 md:h-20 p-2 shadow-lg transition-transform duration-300 hover:scale-105'
              }
              style={{
                minHeight: 56,
                borderBottom: `4px solid ${borderColors[idx % borderColors.length]}`,
              }}
            >
              <img
                src={logo}
                alt={logo.replace('paymentIcon-', '').replace('.svg', '')}
                className="max-h-7 md:max-h-8 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiquidityProviders;