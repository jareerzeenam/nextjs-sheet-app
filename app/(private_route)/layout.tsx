import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

interface Props {
  children: ReactNode;
}
export default async function PrivateLayouts({ children }: Props) {
  const session = await getServerSession(options);

  // return the user to sign in page if user not found in session
  if (!session?.user) redirect('api/auth/signin');

  return <>{children}</>;
}
