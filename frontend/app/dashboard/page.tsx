'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface DashboardData {
  id: number;
  email: string;
  full_name?: string;
  consent_given: boolean;
  discovery_complete: boolean;
}

export default function DashboardPage() {
  const router = useRouter();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setDashboardData(response.data);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [router]);

  if (loading) {
    return <div className="text-center mt-24 text-white">Loading dashboard...</div>;
  }

  if (!dashboardData) {
    return (
      <div className="text-center mt-24 text-red-500">
        Failed to load dashboard. Please log in again.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to Your Dashboard</h1>
      <p className="text-lg text-gray-300">
        Hello, {dashboardData.full_name || dashboardData.email}!
      </p>
      <div className="mt-8 flex flex-col gap-4">
        <div className="p-4 bg-purple-800 rounded-lg shadow-md">
          <p className="text-white font-semibold">Consent Given: {dashboardData.consent_given ? '✅ Yes' : '❌ No'}</p>
          <p className="text-white font-semibold">Discovery Complete: {dashboardData.discovery_complete ? '✅ Yes' : '❌ No'}</p>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          You can update your health metrics and chat with the AI Health Coach soon!
        </p>
      </div>
    </div>
  );
}

