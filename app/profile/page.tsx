'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@/components/Profile';

const MyProfile = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (session && session.user) {
        const response = await fetch(
          `api/users/${session.user.id}/sheets`
        );
        const data = await response.json();
        setSheets(data);
      }
    };

    fetchPosts();
  }, [session]);

  const handleEdit = (sheet) => {
    router.push(`/sheets/update?id=${sheet._id}`);
  };

  const handleDelete = async (sheet) => {
    alert('delete');
  };

  return (
    <Profile
      name="My"
      user={session ? session.user : null}
      desc="Welcome to your personalized profile page"
      data={sheets}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
