'use client';

import { User } from 'next-auth';
import SheetCard from './SheetCard';

type ProfileProps = {
  name: string;
  user: User | null;
  desc: string;
  data: any;
  handleEdit: any;
  handleDelete: any;
};

const Profile: React.FC<ProfileProps> = ({
  name,
  user,
  desc,
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">
        <span className="blue_gradient">{name} Profile</span>
      </h1>

      <p className="desc text-left">{user?.role}</p>
      <p className="desc text-left">{user?.name}</p>
      <p className="desc text-left">{user?.email}</p>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((sheet) => (
          <SheetCard
            key={sheet._id}
            sheet={sheet}
            handleEdit={() => handleEdit && handleEdit(sheet)}
            handleDelete={() => handleDelete && handleDelete(sheet)}
            handleTagClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
