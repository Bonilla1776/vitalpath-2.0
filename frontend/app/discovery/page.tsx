'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function DiscoveryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    healthGoal: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    const token = sessionStorage.getItem('access_token');
    if (!token) {
      console.error('No access token found.');
      router.push('/login');
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/discovery`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      router.push('/dashboard');
    } catch (error) {
      console.error('Discovery submission failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Discovery Questionnaire</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          className="border rounded p-3"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded p-3"
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="healthGoal"
          placeholder="Your Main Health Goal"
          value={formData.healthGoal}
          onChange={handleChange}
          className="border rounded p-3"
        />
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="px-6 py-3 mt-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700"
        >
          {submitting ? 'Submitting...' : 'Submit and Continue'}
        </button>
      </div>
    </div>
  );
}
