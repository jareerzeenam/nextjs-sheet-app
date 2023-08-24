'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ShowSheet = ({ params }) => {
  const router = useRouter();

  const [sheet, setSheet] = useState();

  const sheetId = params.id;

  useEffect(() => {
    const getSheetDetails = async () => {
      const response = await fetch(`/api/sheets/${sheetId}`);
      const data = await response.json();

      console.log(data);

      setSheet(data);
    };

    if (sheetId) getSheetDetails();
  }, [sheetId]);

  return (
    <div>
      <h2 className="font-bold text-5xl">{sheet?.name}</h2>
      <p>{sheet?.amount}</p>
      <p>{sheet?.startDate}</p>
      <p>{sheet?.endDate}</p>
      <p>{sheet?.creator?.username}</p>

      <button className="black_btn" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
};

export default ShowSheet;
