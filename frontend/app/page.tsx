'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const MotionHeading = motion.h1;
const MotionText = motion.p;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover object-top scale-105 z-0"
      >
        <source src="/LandingPage10secvid.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-10 py-12 md:py-24 min-h-screen gap-10">
        <div className="bg-white/60 rounded-lg p-6 shadow-lg text-center">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Image src="/ualr-logo.png" alt="UA Little Rock Logo" width={100} height={100} />
            <Image src="/vitalpath-logo.png" alt="VitalPath Logo" width={100} height={100} />
          </div>

          <MotionHeading
            className="text-4xl md:text-5xl font-extrabold text-purple-700 mt-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-green-400">VitalPath</span>{' '}
            <span className="text-purple-700">Research</span> 🌿
          </MotionHeading>

          <MotionText
            className="text-xl text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Begin Your 100-Day Transformation Journey, and discover your potential with AI
          </MotionText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-white/60 rounded-lg p-6 shadow-lg">
            <p className="text-purple-700">
              Your personal AI Health Coach is ready to listen deeply, spark inspiration, and provide unwavering support as you create lasting well-being.
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-6 shadow-lg">
            <p className="text-purple-700">
              VitalPath uses advanced AI to ask the right questions at the right time, reflecting your own wisdom back to you and gently guiding you past obstacles toward the changes that matter most to you.
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-6 shadow-lg">
            <p className="text-purple-700">
              Discover what becomes possible when technology truly understands and supports your wellness journey.
            </p>
          </div>
        </div>

        <div className="bg-white/60 py-4 px-6 rounded-lg shadow-lg text-center">
          <p className="text-purple-700 font-medium">
            Participation is free and limited to 100 individuals. Join now to secure your spot!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/registration"
            className="px-10 py-6 bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-full font-bold transition"
          >
            Join the Study
          </a>
          <a
            href="/login"
            className="px-10 py-6 border-2 border-purple-600 text-purple-600 text-lg rounded-full font-bold hover:bg-purple-50 transition"
          >
            Return User Login
          </a>
        </div>

        <p className="text-sm pt-10 text-gray-500 text-center">
          VitalPath Innovations, LLC • Research led by John-Eric Bonilla • UA Little Rock
        </p>
      </div>
    </div>
  );
}

