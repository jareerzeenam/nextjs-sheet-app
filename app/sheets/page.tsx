'use client';

import { Sheet } from '@/typings';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Sheets = () => {
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
      <Link href="/sheets/create" className="black_btn">
        Create Sheet
      </Link>
      <div className="flex flex-wrap gap-5">
        {allSheets.map((sheet: Sheet) => (
          <div key={sheet._id} className="p-5 shadow bg-white">
            <p className="font-bold">{sheet.name}</p>
            <p>Belongs to : {sheet.creator?.email}</p>
            <p>Rs.{sheet.amount}</p>
            <p>Start: {sheet.startDate}</p>
            <p>End : {sheet.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sheets;
