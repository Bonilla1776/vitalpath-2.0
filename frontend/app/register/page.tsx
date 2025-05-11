'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post(
        'https://vitalpath-backend.gentlepebble-9bae58f5.westus2.azurecontainerapps.io/auth/register',
        { email, password, full_name: fullName }
      );
      router.push('/login');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Registration failed:', err.message);
        setError('Registration failed. Please try again.');
      } else {
        console.error('Unknown registration error:', err);
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/RegisterPageVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Form */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl max-w-md w-full mx-4">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">
          Create Your Account
        </h1>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-full transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-white/80">
          Already have an account?{' '}
          <span
            onClick={() => router.push('/login')}
            className="text-purple-300 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
