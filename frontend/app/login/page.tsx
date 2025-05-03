'use client';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0 scale-[1.05] object-top"
      >
        <source src="/LoginPageVideo.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white/60 backdrop-blur-lg p-10 rounded-lg shadow-2xl text-center space-y-6 max-w-xl w-full">
          <h1 className="text-3xl font-bold text-purple-700">
            Returning User Login
          </h1>
          <p className="text-lg text-gray-700">
            Sign in with your Azure account to access your dashboard and continue your transformation journey.
          </p>
          <a
            href="https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-8 rounded-full transition"
          >
            Login with Azure B2C
          </a>
        </div>
      </div>
    </div>
  );
}
