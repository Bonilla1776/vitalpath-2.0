'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const REGISTER_URL =
  'https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login';

const LOGIN_URL =
  'https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_login_flow&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2;
      audio.play().catch(() => {
        // Autoplay restrictions; user interaction needed
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/LandingPage10secvid.mp4" type="video/mp4" />
      </video>

      {/* Ambient audio */}
      <audio ref={audioRef} src="/ambient.mp3" loop />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between px-6 py-12 sm:px-12 md:px-24 lg:px-32">
        {/* Logo + Heading */}
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-6 items-center">
            <Image src="/ualr-logo.png" alt="UA Little Rock Logo" width={100} height={100} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug text-white drop-shadow-lg animate-fade-in">
            AI-Driven Motivational Interviewing
            <span className="block text-purple-300 mt-2">
              A Scalable Model for Personalized Health Coaching
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200 animate-fade-in delay-150">
            Join us in redefining behavioral health through compassionate, intelligent technology.
          </p>
        </div>

        {/* Mission cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up delay-300">
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

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center space-y-6 text-center animate-fade-in delay-500">
          <p className="bg-purple-800/70 px-6 py-3 rounded-full font-semibold text-lg shadow-md">
            Participation is free and limited to 100 individuals. Join now to secure your spot!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => (window.location.href = REGISTER_URL)}
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-full font-bold shadow-lg animate-pulse"
            >
              Join the Study
            </button>
            <button
              onClick={() => (window.location.href = LOGIN_URL)}
              className="border-2 border-purple-400 hover:bg-purple-600 hover:text-white transition text-purple-200 px-8 py-3 rounded-full font-bold shadow-lg animate-pulse"
            >
              Return User Login
            </button>
          </div>
        </div>

        {/* Footer logo */}
        <div className="absolute bottom-6 right-6 opacity-70">
          <Image src="/vitalpath-logo.png" alt="VitalPath Logo" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}











