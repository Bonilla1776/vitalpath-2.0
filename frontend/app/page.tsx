'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio('/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audio.play().catch((err) => {
      console.warn('Audio autoplay blocked:', err);
    });

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/LandingPage10secvid.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between px-6 py-12 sm:px-12 md:px-24 lg:px-32">
        {/* Top Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4 items-center">
            <Image src="/ualr-logo.png" alt="UA Little Rock Logo" width={90} height={90} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug text-white drop-shadow-lg">
            AI-Driven Motivational Interviewing
            <span className="block text-purple-300 mt-2">
              A Scalable Model for Personalized Health Coaching
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            Join us in redefining behavioral health through compassionate, intelligent technology.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Your personal AI Health Coach listens deeply and supports your long-term well-being.',
            'VitalPath uses AI to reflect your values and help you overcome real-world obstacles.',
            'Discover what becomes possible when technology truly understands your wellness journey.',
          ].map((text, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-3xl rounded-xl p-6 transition hover:scale-105 hover:bg-white/10 shadow-md"
            >
              <p className="text-md md:text-lg text-purple-300 font-medium">{text}</p>
            </div>
          ))}
        </div>

        {/* CTA Text */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-300 animate-pulse">
            Begin Your Health Transformation Journey Today
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
            <button
              onClick={() => router.push('/register')}
              className="bg-white/10 backdrop-blur-xl hover:bg-white/20 transition text-white px-8 py-4 rounded-full font-bold shadow-md animate-pulse"
            >
              Join the Study
            </button>

            <button
              onClick={() => router.push('/login')}
              className="bg-white/10 backdrop-blur-xl hover:bg-white/20 transition text-white px-8 py-4 rounded-full font-bold shadow-md animate-pulse"
            >
              Return User Login
            </button>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="absolute bottom-6 right-6 z-20">
          <Image src="/vitalpath-logo.png" alt="VitalPath Logo" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}















