'use client';

import { User } from 'next-auth';

type ProfileProps = {
  name: string;
  user: User | null;
  desc: string;
};

const Profile: React.FC<ProfileProps> = ({ name, user, desc }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">
        <span className="blue_gradient">{name} Profile</span>
      </h1>

      <p className="desc text-left">{user?.role}</p>
      <p className="desc text-left">{user?.name}</p>
      <p className="desc text-left">{user?.email}</p>
      <p className="desc text-left">{desc}</p>
    </section>
  );
};

export default Profile;
