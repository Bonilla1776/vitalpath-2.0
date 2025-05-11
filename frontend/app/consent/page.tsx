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
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gray-50 p-6">
      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl max-w-3xl w-full space-y-8 overflow-y-auto max-h-screen">
        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">Informed Consent Form</h1>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p className="text-center text-lg font-semibold text-gray-800">Welcome to the Journey Toward Better Health!</p>
          <p>Thank you for considering joining our innovative study! We are excited about the opportunity to explore how AI-driven health coaching can help individuals like you make meaningful improvements in their health and well-being. Before you decide, please take a moment to review this form. It explains everything you need to know about the study, including its purpose, what’s involved, and your rights as a participant.</p>

          <hr />

          <h2 className="text-lg font-semibold text-purple-700">Title of Study</h2>
          <p><strong>Exploring the Effectiveness of AI-Driven Health Coaching on Health Behavior Change</strong></p>

          <h2 className="text-lg font-semibold text-purple-700">Principal Investigator</h2>
          <p>John-Eric Bonilla, PhD Candidate<br/>University of Arkansas at Little Rock<br/>Contact: jbonilla@ualr.edu</p>

          <h2 className="text-lg font-semibold text-purple-700">Graduate Research Advisor</h2>
          <p>Professor Xiaowei Xu, PhD<br/>University of Arkansas at Little Rock<br/>Contact: xwxu@ualr.edu | (501) 916-5233</p>

          <hr />

          <h2 className="text-lg font-semibold text-purple-700">What’s This Study About?</h2>
          <p>We’re on a mission to revolutionize personal health! This research focuses on how cutting-edge, AI-driven health coaching can empower you to create lasting, positive changes in critical health areas like diet, exercise, stress management, and even quitting smoking. By participating, you’ll not only embark on your personal wellness journey but also contribute to advancing technology for a healthier future.</p>

          <h2 className="text-lg font-semibold text-purple-700">Who Can Participate?</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>✅ 18 years or older.</li>
            <li>✅ Interested in improving your health behaviors.</li>
            <li>✅ Comfortable using digital platforms and AI tools.</li>
            <li>✅ Willing to engage with the AI coach weekly for 12 weeks.</li>
          </ul>
          <p className="mt-2 font-semibold">You’re not eligible if:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>❌ Under 18 years old.</li>
            <li>❌ Uncomfortable with digital tools or AI.</li>
            <li>❌ Cannot commit to study’s time requirements.</li>
          </ul>

          <h2 className="text-lg font-semibold text-purple-700">What Will You Be Doing?</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Duration: 12 weeks (one session per week).</li>
            <li>Work with AI coach to set personalized health goals and receive tailored coaching.</li>
            <li>Share progress through simple questionnaires.</li>
          </ul>

          <h2 className="text-lg font-semibold text-purple-700">What Are the Risks and Benefits?</h2>
          <p><strong>Potential Risks:</strong> Minor risk of data breaches (we use strong security), and mild emotional discomfort when discussing health.</p>
          <p><strong>Benefits:</strong> Personalized coaching, improved health, contributing to innovative research.</p>

          <h2 className="text-lg font-semibold text-purple-700">Your Privacy is Our Priority</h2>
          <p>All your data remains confidential, stored securely, and results will only be presented in group form.</p>

          <h2 className="text-lg font-semibold text-purple-700">Your Participation is Completely Voluntary</h2>
          <p>You may leave at any time by notifying us via email.</p>

          <h2 className="text-lg font-semibold text-purple-700">Compensation</h2>
          <p>No financial compensation, but you gain free access to cutting-edge health coaching.</p>

          <h2 className="text-lg font-semibold text-purple-700">Need More Information?</h2>
          <p>Contact John-Eric Bonilla at jbonilla@ualr.edu. For participant rights questions: IRB Office (501) 916-6209 | irb@ualr.edu.</p>

          <hr />

          <p className="font-semibold text-gray-800 text-center mt-4">
            By checking below and submitting, you confirm:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
            <li>I have read and understood the information above.</li>
            <li>I confirm I am 18 years or older.</li>
            <li>I understand my participation is voluntary and I can withdraw at any time.</li>
          </ul>

          {/* Agreement checkbox */}
          <div className="mt-6 flex items-start space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-purple-600"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="text-gray-700">I agree to participate in this research study.</span>
          </div>

          {/* Submit button */}
          <button
            onClick={handleAgree}
            disabled={!agree || submitting}
            className={`w-full mt-6 py-3 rounded-full font-semibold transition ${
              !agree || submitting
                ? 'bg-purple-300 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            {submitting ? 'Submitting...' : 'Submit Consent'}
          </button>
        </div>
      </div>
    </div>
  );
}
