'use client';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
// import { redirect } from 'next/navigation';

const Nav = () => {
  const { data: session } = useSession();

  /**
   * Below commented section allows to redirect user to login if un-unauthenticated
   * to enable this uncomment above import redirect
   */

  // {
  // required: true,
  // onUnauthenticated() {
  //   redirect('/api/auth/signin?callbackUrl=/server');
  // },
  // }

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="Sheet Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Jareer's Sheet App</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            {(session?.user?.role === 'Admin' ||
              session?.user?.role === 'Owner') && (
              <>
                <Link href="/sheets" className="black_btn">
                  Sheets
                </Link>
                <Link href="/private" className="outline_btn">
                  Private
                </Link>
              </>
            )}

            {session?.user?.role === 'Admin' && ( // Only show if user role is admin
              <Link href="/admin" className="black_btn">
                Admin Portal
              </Link>
            )}

            <Link href="/profile">
              <Image
                src={session?.user?.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="outline_btn"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => signIn()}
              className="black_btn"
            >
              Sigh In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
