import React, { useEffect } from 'react';
import { Shield, ArrowLeft, Mail, Lock, CheckCircle2, FileText, Globe } from 'lucide-react';

export default function PrivacyPolicy({ onBackHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onBackHome) onBackHome();
                else window.location.href = '/';
              }}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors bg-slate-100 hover:bg-indigo-50 px-3 py-1.5 rounded-lg cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
              <img src="/worksensy.png" alt="Worksensy Logo" className="w-6 h-6 rounded-md object-cover" />
              <span className="font-bold text-slate-900 text-sm">Worksensy Legal</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Meta Platform Compliant
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-12">
          {/* Header Banner */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Shield className="w-3.5 h-3.5" />
              Legal & Privacy Protection
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: March 2026 &bull; Effective for Worksensy CRM & Meta Lead Ads Integration
            </p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed text-[15px]">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">1</span>
                Introduction
              </h2>
              <p>
                Welcome to <strong>Worksensy</strong> ("we", "our", or "us"). We operate the Operations OS & CRM platform available at{' '}
                <a href="https://worksensy.com" className="text-indigo-600 hover:underline font-medium">https://worksensy.com</a>.
                We are deeply dedicated to safeguarding user privacy and personal data. This Privacy Policy governs our data handling practices,
                especially concerning customer information captured through our integrations with <strong>Meta Technologies (Facebook & Instagram Lead Ads)</strong>.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">2</span>
                Information We Collect
              </h2>
              <p className="mb-3">
                When you interact with our platform or when our business clients connect their Meta advertising accounts to Worksensy CRM, we may process:
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <span><strong>Meta Lead Ads Inquiry Data:</strong> Full Name, Email Address, Phone Number, City, and customized form responses submitted by prospective customers through Facebook and Instagram Instant Lead Ads.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <span><strong>Authentication & Token Credentials:</strong> Meta Page Access Tokens and App Scopes required to subscribe to Meta Webhooks for real-time lead generation sync.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <span><strong>Account Information:</strong> Business name, manager contact info, and internal sales agent user accounts.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">3</span>
                How We Use the Information
              </h2>
              <p className="mb-3">The data we process is used exclusively for legitimate business purposes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Instant Lead Routing</h4>
                  <p className="text-xs text-slate-600">To deliver incoming Meta Lead Ad submissions straight to your CRM pipeline within seconds.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Sales Team Follow-ups</h4>
                  <p className="text-xs text-slate-600">To allow authorized sales representatives to contact interested clients regarding their inquiries.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Activity Tracking & Logs</h4>
                  <p className="text-xs text-slate-600">To maintain audit logs, quotation history, and sales performance metrics.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Security & Abuse Prevention</h4>
                  <p className="text-xs text-slate-600">To detect and prevent unauthorized API calls or duplicate lead spam.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">4</span>
                Zero Third-Party Data Selling
              </h2>
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-sm">
                <strong>Strict Policy:</strong> Worksensy will <u>NEVER</u> sell, rent, license, or barter user data or incoming lead details to any data broker, advertiser, or third party for promotional campaigns. Your data remains strictly your property.
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">5</span>
                Data Security & Encryption
              </h2>
              <p>
                We adopt rigorous technical safeguards including TLS/SSL encryption for data in transit and AES-256 encryption for stored tokens and access credentials. All databases are hosted in isolated VPCs with automated firewall monitoring.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">6</span>
                Your Data Deletion Rights
              </h2>
              <p className="mb-2">
                In strict adherence to Meta Platform Terms and global regulations (GDPR/CCPA), every individual has the absolute right to request
                the permanent erasure of their personal information from our system.
              </p>
              <p>
                Please refer to our step-by-step instructions at{' '}
                <a href="/data-deletion" className="text-indigo-600 font-semibold hover:underline">
                  Worksensy User Data Deletion Instructions
                </a>{' '}
                or email our compliance desk at{' '}
                <a href="mailto:support@worksensy.com" className="text-indigo-600 font-semibold hover:underline">
                  support@worksensy.com
                </a>.
              </p>
            </section>

            {/* Section 7 */}
            <section className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">7</span>
                Contact & Compliance Officer
              </h2>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-sm space-y-2">
                <p><strong>Brand / Entity:</strong> Worksensy Technologies</p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span><strong>Support & Inquiries:</strong> <a href="mailto:support@worksensy.com" className="text-indigo-600 hover:underline">support@worksensy.com</a></span>
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-500" />
                  <span><strong>Official Website:</strong> <a href="https://worksensy.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">https://worksensy.com</a></span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
