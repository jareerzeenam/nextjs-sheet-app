'use client';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <h1 className="text-6xl">Hello, {session?.user?.name}</h1>
      ) : (
        <h1 className="text-6xl">Hello Next Sheet App</h1>
      )}
    </>
  );
}
