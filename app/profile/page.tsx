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
    const hasConfirmed = confirm(
      'Are you sure you want to delete this sheet?'
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/sheets/${sheet._id.toString()}`, {
          method: 'DELETE',
        });

        const filteredSheets = sheets.filter(
          (s) => s._id !== sheet._id
        );

        setSheets(filteredSheets);
      } catch (error) {
        console.log(error);
      }
    }
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
