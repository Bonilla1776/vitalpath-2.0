'use client';

import Image from 'next/image';

export default function Home() {
  const loginUrl =
    'https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_login_flow&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login';

  const registerUrl =
    'https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login';

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/landingbg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Logos */}
        <div className="flex items-center space-x-6 mb-8">
          <Image
            src="/images/ualr-logo.png"
            alt="UALR Logo"
            width={100}
            height={100}
            className="object-contain h-16 w-auto"
          />
          <Image
            src="/images/vitalpath-logo.png"
            alt="VitalPath Logo"
            width={100}
            height={100}
            className="object-contain h-16 w-auto"
          />
        </div>

        {/* Center card */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-purple-700">Welcome to the VitalPath Study</h1>
          <p className="text-gray-700 text-lg">
            Begin your transformation journey. Register or log in to participate.
          </p>
          <div className="space-y-4">
            <a
              href={registerUrl}
              className="block w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Join the Study
            </a>
            <a
              href={loginUrl}
              className="block w-full border border-purple-600 text-purple-600 font-semibold py-3 rounded-lg hover:bg-purple-50 transition"
            >
              Returning User Login
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}






