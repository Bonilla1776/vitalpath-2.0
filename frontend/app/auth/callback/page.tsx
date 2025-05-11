'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CallbackPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');
    const verifier = sessionStorage.getItem('pkce_verifier');

    const handleError = (msg: string, detail?: unknown) => {
      console.error('[PKCE Callback Error]', msg, detail || '');
      setErrorMessage(msg);
    };

    if (error === 'access_denied') {
      router.push('/login');
      return;
    }

    if (!code || !verifier) {
      handleError('Missing authorization code or PKCE verifier.');
      return;
    }

    const run = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/exchange-token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, code_verifier: verifier }),
        });

        const contentType = res.headers.get('content-type') || '';
        const isJson = contentType.includes('application/json');
        const bodyText = await res.text();

        console.groupCollapsed('[Exchange Response]');
        console.log('Status:', res.status);
        console.log('Content-Type:', contentType);
        console.log('Raw Body:', bodyText);
        console.groupEnd();

        if (!res.ok) {
          handleError('Token exchange failed', bodyText);
          return;
        }

        const data = isJson ? JSON.parse(bodyText) : {};
        sessionStorage.setItem('id_token', data.id_token || '');
        router.push('/consent');
      } catch (err) {
        handleError('Unexpected error during authentication.', err);
      }
    };

    run();
  }, [router]);

  return (
    <div className="text-center mt-24 text-white">
      {errorMessage ? (
        <>
          <p className="text-red-500 font-semibold">{errorMessage}</p>
          <p className="mt-2">Check console logs and try logging in again.</p>
        </>
      ) : (
        <p>Processing authentication...</p>
      )}
    </div>
  );
}

