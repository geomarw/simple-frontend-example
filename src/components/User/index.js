const User = ({ id, name, email, role }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{email}</td>
    <td>{role}</td>
  </tr>
);

export default User;
