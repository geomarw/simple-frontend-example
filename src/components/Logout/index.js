import { api } from "../../helpers";

const handleClick = async (setLoggedUser, setIsLoading, setUsers) => {
  try {
    setIsLoading(true);
    await api.get(`/auth/logout`);
    setLoggedUser(null);
    setUsers([]);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

const Logout = ({ setLoggedUser, setIsLoading, setUsers }) => (
  <button onClick={() => handleClick(setLoggedUser, setIsLoading, setUsers)}>
    Logout
  </button>
);

export default Logout;
