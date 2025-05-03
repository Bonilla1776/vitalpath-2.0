'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function ConsentPage() {
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleAgree = async () => {
    if (!agree) return;
    setSubmitting(true);
    try {
      await axios.post('/api/consent', { consentGiven: true });
      router.push('/discovery');
    } catch (error) {
      console.error('Consent submission failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4 flex flex-col items-center gap-6">
      <div>
        <img
          src="/images/join-study-illustration.png"
          alt="Join Study Illustration"
          className="w-48 h-48 object-contain"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Informed Consent
      </h1>
      <p className="text-md text-center text-gray-700">
        By clicking Agree, you consent to participate in the research study as outlined.
      </p>
      <div className="flex flex-col items-start gap-4 pt-2 w-full">
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="text-gray-800">I have read and agree to the terms.</span>
        </label>
        <button
          onClick={handleAgree}
          disabled={!agree || submitting}
          className={`px-6 py-3 rounded-full font-semibold text-white transition duration-200 ${
            !agree || submitting
              ? 'bg-purple-300 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {submitting ? 'Submitting...' : 'Agree and Continue'}
        </button>
      </div>
    </div>
  );
}