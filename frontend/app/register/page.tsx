'use client';

import { motion } from 'framer-motion';

const MotionHeading = motion.h1;
const MotionText = motion.p;

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0 scale-[1.05] object-top"
      >
        <source src="/RegisterPageVideo.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12 md:px-10 md:py-24">
        <div className="bg-white/60 backdrop-blur-lg rounded-lg shadow-xl text-center p-6 space-y-6 max-w-2xl w-full">
          <div className="flex justify-center gap-6 flex-wrap mb-4">
            <img src="/ualr-logo.png" alt="UA Little Rock Logo" width={100} height={100} />
            <img src="/vitalpath-logo.png" alt="VitalPath Logo" width={100} height={100} />
          </div>

          <MotionHeading
            className="text-4xl font-extrabold text-purple-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join the VitalPath Study
          </MotionHeading>

          <MotionText
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Begin your transformation journey. Register now to participate.
          </MotionText>

          <a
            href="https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login&code_challenge_method=S256&code_challenge=wq2h8bl4wt5yC8oSiSJ-nvC1sgIIN_dXzKEDM2xM2zw"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-8 rounded-full mt-8 transition"
          >
            Register with Azure B2C
          </a>
        </div>
      </div>
    </div>
  );
}
