import React, { useEffect } from 'react';
import { Trash2, ArrowLeft, Mail, ShieldAlert, CheckCircle2, Clock, Globe } from 'lucide-react';

export default function DataDeletion({ onBackHome }) {
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
              <span className="font-bold text-slate-900 text-sm">Worksensy Compliance</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Meta Policy Sec 4.b
          </span>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-12">
          {/* Header Banner */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Trash2 className="w-3.5 h-3.5" />
              User Data Privacy & Rights
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              User Data Deletion Instructions
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              How to request complete deletion of your Facebook & Instagram Lead information from Worksensy CRM
            </p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed text-[15px]">
            <p>
              According to the <strong>Meta Platform Developer Policy (Section 4.b)</strong> and international data privacy laws (GDPR, CCPA),
              any user who interacts with the Worksensy application or submits their contact details through a Facebook Lead Ad
              has the absolute right to request the permanent deletion of their data.
            </p>

            {/* Method 1 */}
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Option 1: Disconnect & Revoke via Facebook Settings
                  </h3>
                  <p className="text-xs text-slate-500">Fastest method if you connected your Facebook Account / Page</p>
                </div>
              </div>

              <ol className="space-y-3 pl-4 border-l-2 border-indigo-200 text-sm text-slate-700 ml-4">
                <li>
                  <strong>Step 1:</strong> Log into your Facebook account and navigate to <strong>Settings & Privacy &gt; Settings</strong>.
                </li>
                <li>
                  <strong>Step 2:</strong> In the left navigation bar, click on <strong>Apps and Websites</strong>.
                </li>
                <li>
                  <strong>Step 3:</strong> Find <strong>Worksensy</strong> under your active apps.
                </li>
                <li>
                  <strong>Step 4:</strong> Click the <strong>Remove</strong> button.
                </li>
                <li>
                  <strong>Step 5:</strong> Check the box to confirm deletion of associated app permissions and click <strong>Remove</strong>. Facebook will automatically notify Worksensy to revoke tokens.
                </li>
              </ol>
            </div>

            {/* Method 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Option 2: Direct Erasure Request via Email (Lead Form Submissions)
                  </h3>
                  <p className="text-xs text-slate-500">For customers who filled out a Facebook Lead Ad form</p>
                </div>
              </div>

              <p className="text-sm mb-4">
                If you submitted your personal contact information (Phone, Name, Email) through an advertisement and want it purged from our databases:
              </p>

              <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm space-y-2 mb-4">
                <p>
                  <strong>Send Email To:</strong>{' '}
                  <a href="mailto:support@worksensy.com" className="text-indigo-600 font-semibold hover:underline">
                    support@worksensy.com
                  </a>
                </p>
                <p>
                  <strong>Subject Line:</strong> <code className="bg-slate-100 text-indigo-700 px-2 py-0.5 rounded font-mono text-xs">Meta User Data Deletion Request</code>
                </p>
                <p>
                  <strong>Information to Include:</strong> Your Full Name, Phone Number, or Email address that was entered in the lead form so we can identify your lead record.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span><strong>Turnaround Time:</strong> All data is permanently purged from production systems within <strong>48 to 72 hours</strong>, and a confirmation email is sent back to you.</span>
              </div>
            </div>

            {/* What Happens After Deletion */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">What happens when your data is deleted?</h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Your contact details (phone, email, name) are permanently dropped from the CRM database.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>All active sales follow-up reminders and activity logs linked to your record are wiped.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Your record cannot be restored once the purge cycle completes.</span>
                </li>
              </ul>
            </section>

            {/* Assistance Contact */}
            <section className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Have any questions?</h4>
                <p className="text-xs text-slate-500">Contact our data protection team anytime.</p>
              </div>
              <a
                href="mailto:support@worksensy.com"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                Email Support Team
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
