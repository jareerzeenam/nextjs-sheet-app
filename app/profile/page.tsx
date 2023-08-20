'use client';

import { useSession } from 'next-auth/react';

import Profile from '@/components/Profile';
import { redirect } from 'next/navigation';

const MyProfile = () => {
  const { data: session } = useSession();

  if (!session?.user) return redirect('/denied');
  // if (!session?.user) return;

  return (
    <Profile
      name="My"
      user={session ? session.user : null}
      desc="Welcome to your personalized profile page"
    />
  );
};

export default MyProfile;
