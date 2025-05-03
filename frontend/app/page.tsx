'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const loginUrl =
    'https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_login_flow&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login';

  const registerUrl =
    'https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login';

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Full-bleed video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.45]"
      >
        <source src="/videos/landingbg.mp4" type="video/mp4" />
      </video>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 py-12 text-center">
        {/* Logos */}
        <div className="flex justify-center items-center space-x-6 mb-8 animate-fade-in">
          <Image src="/images/ualr-logo.png" alt="UALR Logo" width={80} height={80} />
          <Image src="/images/vitalpath-logo.png" alt="VitalPath Logo" width={80} height={80} />
        </div>

        {/* Hero Text */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-purple-300 drop-shadow-md animate-fade-up"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Welcome to the VitalPath Study
        </motion.h1>

        <motion.p
          className="max-w-xl mt-4 text-lg text-gray-200 animate-fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Begin your transformation journey. Register or log in to participate.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 w-full max-w-sm space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href={registerUrl}
            className="block w-full text-center bg-purple-600 hover:bg-purple-700 transition text-white font-bold py-3 rounded-full shadow-lg animate-pulse"
          >
            Join the Study
          </a>
          <a
            href={loginUrl}
            className="block w-full text-center border-2 border-purple-300 hover:bg-purple-600 hover:text-white transition text-purple-200 font-bold py-3 rounded-full shadow-lg animate-pulse"
          >
            Returning User Login
          </a>
        </motion.div>
      </div>
    </div>
  );
}





