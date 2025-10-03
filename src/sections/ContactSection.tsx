import React, { useState, useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

function generateReference() {
  return 'REF-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}

const REDIRECT_URL = "https://discord.gg/cAqxqN4bUT";
const EMAIL_FUNCTION_URL = "/.netlify/functions/sendEmail";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    agree: false,
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setForm({ ...form, phone: value });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, agree: e.target.checked });
  };

  const isFormValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    privacyConsent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReference(generateReference());
    setError('');
    try {
      const response = await fetch(EMAIL_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(data.error || 'Fehler beim Senden der Nachricht.');
        return;
      }
      setSubmitted(true);
    } catch (err) {
      setError('Fehler beim Senden der Nachricht.');
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="relative flex flex-col">
      {/* Centered content with more top padding from header */}
      <div className="flex-1 flex flex-col pb-8 px-4">
        <main className="flex-1 flex items-center justify-center z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full glassmorphism rounded-2xl overflow-hidden shadow-2xl">
            {/* Left Side - Form or Thank You */}
            <div className="p-8 flex flex-col justify-center min-h-[600px]" style={{ background: '#0a1f0e' }}>
              <div className={`transition-all duration-700 ${submitted ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 relative'}`}>
                <h2 className="text-3xl font-bold mb-6 gradient-text-green">Contact XD Trading</h2>
                <p className="text-gray-300 mb-6">Get in touch with our team for questions about courses, VIP signals, or community support.</p>
                <form name="contact" method="POST" onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">First Name*</label> 
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="w-full p-3 rounded-md bg-gray-700/60 text-white focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">Last Name*</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="w-full p-3 rounded-md bg-gray-700/60 text-white focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">Phone Number*</label>
                    <PhoneInput
                      country={'us'}
                      value={form.phone}
                      onChange={handlePhoneChange}
                      inputClass="w-full p-3 rounded-md bg-gray-700/60 text-white focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur"
                      buttonClass="bg-gray-700/60"
                      dropdownClass="bg-gray-800 text-white"
                      containerClass="w-full"
                      specialLabel=""
                      enableSearch
                      inputProps={{ name: 'phone', required: true }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full p-3 rounded-md bg-gray-700/60 text-white focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <div className="flex flex-col gap-3 text-xs text-gray-400">
                      {/* Privacy Consent */}
                      <div className="flex items-center space-x-2">
                        <div className="relative flex-shrink-0" style={{ minWidth: 32, minHeight: 32 }}>
                          <input
                            type="checkbox"
                            checked={privacyConsent}
                            onChange={e => setPrivacyConsent(e.target.checked)}
                            id="privacy_consent"
                            name="privacy_consent"
                            required
                            className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                            aria-label="Privacy policy consent"
                          />
                          <label htmlFor="privacy_consent" className="inline-flex items-center justify-center align-middle transition-colors duration-300 select-none w-8 h-8 cursor-pointer">
                            <CheckCircle
                              size={20}
                              className={`transition-colors duration-300 ${privacyConsent ? 'text-green-400' : 'text-gray-600'}`}
                              fill="none"
                            />
                          </label>
                        </div>
                        <label htmlFor="privacy_consent" className="ml-2 cursor-pointer select-none flex-1">
                          I agree to the privacy policy and to be contacted by XD Trading
                        </label>
                      </div>
                    </div>
                  </div>
                  {error && <div className="text-red-400 mb-4">{error}</div>}
                  <button
                    type="submit"
                    className={`w-full py-3 rounded-md font-bold transition-all duration-300 backdrop-blur text-black text-base ${isFormValid ? 'green-button cursor-pointer hover:scale-105' : 'bg-gray-700 cursor-not-allowed opacity-60 text-white'}`}
                    disabled={!isFormValid}
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Thank you message */}
              <div className={`transition-all duration-700 flex flex-col items-center justify-center text-center ${submitted ? 'opacity-100 relative animate-fadeInUp' : 'opacity-0 pointer-events-none absolute'}`} style={{ minHeight: 400 }}>
                <CheckCircle size={48} className="text-green-400 mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold mb-2 gradient-text-green">Thank You for Contacting Us!</h2>
                <p className="text-gray-300 mb-2">Your message has been successfully submitted.</p>
                <p className="text-gray-400 text-sm">Reference number: <span className="font-mono text-green-400">{reference}</span></p>
                <p className="text-green-300 mt-4">You will be redirected to our Discord server in 3 seconds:<br />
                  <a href={REDIRECT_URL} className="underline break-all" target="_blank" rel="noopener noreferrer">Join XD Trading Discord</a>
                </p>
              </div>
            </div>
            {/* Right Side - XD Trading Logo */}
            <div className="relative hidden md:flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a1f0e 0%, #051008 100%)' }}>
              <div className="text-center">
                {/* Large XD Box */}
                <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-green-500/30">
                  <span className="text-black font-black text-6xl">XD</span>
                </div>
                {/* Trading Text */}
                <h2 className="text-6xl font-black gradient-text-green mb-4">TRADING</h2>
                {/* Tagline */}
                <p className="text-green-400 text-lg font-medium">Professional Trading Excellence</p>
                <p className="text-gray-400 text-sm mt-2 font-bold tracking-wider">DISCORD | TELEGRAM</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactSection;