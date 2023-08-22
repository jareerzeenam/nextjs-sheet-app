'use client';

import { useState } from 'react';
import SheetForm from '@/components/SheetForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CreateSheet = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  const [sheet, setSheet] = useState({
    name: '',
    amount: '',
    startDate: '',
    endDate: '',
    creator: session?.user.id,
  });

  const createSheet = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/sheets/store', {
        method: 'POST',
        body: JSON.stringify(sheet),
      });

      if (response.ok) {
        router.push('/sheets');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <SheetForm
        type="Create"
        sheet={sheet}
        setSheet={setSheet}
        submitting={submitting}
        handleSubmit={createSheet}
      />
    </div>
  );
};

export default CreateSheet;
