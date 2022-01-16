import { User } from "..";

const Profile = ({ user }) => {
  if (!user) return <h1>Profile not found</h1>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
        </tr>
      </thead>
      <tbody>
        <User key={user.id} {...user} />
      </tbody>
    </table>
  );
};

export default Profile;
