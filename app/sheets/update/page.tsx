'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SheetForm from '@/components/SheetForm';

const UpdateSheet = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sheetId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [sheet, setSheet] = useState({
    name: '',
    amount: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    const getSheetDetails = async () => {
      const response = await fetch(`/api/sheets/${sheetId}`);
      const data = await response.json();

      // set sheet data
      setSheet({
        name: data.name,
        amount: data.amount,
        startDate: data.startDate,
        endDate: data.endDate,
      });
    };

    if (sheetId) getSheetDetails();
  }, [sheetId]);

  // UPDATE sheet
  const updateSheet = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!sheetId) return alert('Sheet ID not found !');

    try {
      const response = await fetch(`/api/sheets/${sheetId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: sheet.name,
          amount: sheet.amount,
          startDate: sheet.startDate,
          endDate: sheet.endDate,
        }),
      });

      if (response.ok) {
        router.push('/profile');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SheetForm
      type="Update"
      sheet={sheet}
      setSheet={setSheet}
      submitting={submitting}
      handleSubmit={updateSheet}
    />
  );
};

export default UpdateSheet;
