'use client';
import Link from 'next/link';

const denied = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <Link href="/" className="text-3xl">
        Return to Home Page
      </Link>
    </div>
  );
};

export default denied;
