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
    const getPromptDetails = async () => {
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

    if (sheetId) getPromptDetails();
  }, [sheetId]);

  return (
    <SheetForm
      type="Edit"
      sheet={sheet}
      setSheet={setSheet}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
};

export default UpdateSheet;
