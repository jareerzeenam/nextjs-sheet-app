'use client';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text">Jareer's Sheet App</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/#!" className="black_btn">
            Create Post
          </Link>

          <button
            type="button"
            onClick={() => {}}
            className="outline_btn"
          >
            Sign Out
          </button>

          {/* only if loggs in  */}
          <Link href="/#!">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
