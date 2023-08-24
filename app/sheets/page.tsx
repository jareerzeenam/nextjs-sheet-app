'use client';

import SheetCard from '@/components/SheetCard';
import { Sheet } from '@/typings';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Sheets = () => {
  const { data: session } = useSession();

  const [allSheets, setAllSheets] = useState([]);

  const fetchSheets = async () => {
    const response = await fetch('/api/sheets');

    const data = await response.json();

    setAllSheets(data);
  };

  useEffect(() => {
    fetchSheets();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-5xl py-10">Sheets</h1>

      {(session?.user?.role === 'Admin' ||
        session?.user?.role === 'Owner') && (
        <Link href="/sheets/create" className="black_btn">
          Create Sheet
        </Link>
      )}

      <div className="flex flex-wrap gap-5">
        {allSheets.map((sheet: Sheet) => (
          <SheetCard key={sheet._id} sheet={sheet} />
        ))}
      </div>
    </div>
  );
};

export default Sheets;
