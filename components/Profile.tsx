type UserData = {
  name: string;
  email: string;
};

type ProfileProps = {
  name: string;
  data: UserData | null | undefined;
  desc: string;
};

const Profile: React.FC<ProfileProps> = ({ name, data, desc }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">
        <span className="blue_gradient">{name} Profile</span>
      </h1>

      <p className="desc text-left">{data?.name}</p>
      <p className="desc text-left">{data?.email}</p>
      <p className="desc text-left">{desc}</p>
    </section>
  );
};

export default Profile;
