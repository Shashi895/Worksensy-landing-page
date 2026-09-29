import React, { useEffect } from 'react';
import { FileCheck, ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

export default function TermsOfService({ onBackHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
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
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
            Terms of Use
          </span>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-12">
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <FileCheck className="w-3.5 h-3.5" />
              User Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: March 2026 &bull; Worksensy Operations OS & CRM
            </p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using Worksensy CRM ("Service") operated by Worksensy Technologies, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Description of the Service</h2>
              <p>
                Worksensy provides a cloud-based CRM and workflow operating system that allows businesses to streamline lead management, track customer sales pipelines, generate quotations, and synchronize incoming inquiries from advertising platforms including <strong>Meta Lead Ads</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Meta Lead Ads Compliance & Ethics</h2>
              <p className="mb-2">
                Users integrating their Facebook Pages or Meta Advertising accounts with Worksensy agree to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm">
                <li>Comply fully with Meta's Commercial Terms and Developer Policies.</li>
                <li>Only contact consumers who have intentionally submitted inquiries through legitimate lead forms.</li>
                <li>Respect all opt-out and data deletion requests received from prospective customers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Limitation of Liability</h2>
              <p>
                Worksensy Technologies will not be liable for any indirect, incidental, or consequential damages resulting from downtime of third-party APIs (including Meta Graph API or hosting providers).
              </p>
            </section>

            <section className="pt-6 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Questions Regarding Terms?</h2>
              <p className="text-sm text-slate-500">
                Contact our legal team at <a href="mailto:support@worksensy.com" className="text-indigo-600 hover:underline">support@worksensy.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
