import { useEffect, useState } from "react";
import { api } from "../../helpers";
import { User } from "..";

const getUsers = async (setUsers, setIsLoading) => {
  try {
    const res = await api.get(`/api/users`);
    setUsers(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

const UsersList = ({ users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers(setUsers, setIsLoading);

    return () => {
      api.cancel();
    };
  }, []);

  if (isLoading) return <h1>Loading users...</h1>;

  if (users.length === 0) return <h1>No users found</h1>;

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
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
