'use client';

import { useSession } from 'next-auth/react';

import Profile from '@/components/Profile';

const MyProfile = () => {
  const { data: session } = useSession();

  return (
    <Profile
      name="My"
      data={session ? session.user : null}
      desc="Welcome to your personalized profile page"
    />
  );
};

export default MyProfile;
