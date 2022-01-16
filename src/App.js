import { useState } from "react";
import "./App.css";
import { Login, Logout, UsersList, Profile } from "./components";

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Users</h1>
      {loggedUser ? (
        <>
          <Logout
            setLoggedUser={setLoggedUser}
            setIsLoading={setIsLoading}
            setUsers={setUsers}
          />
          {loggedUser.role === "adm" ? (
            <UsersList
              users={users}
              setUsers={setUsers}
              setIsLoading={setIsLoading}
            />
          ) : (
            <Profile user={[loggedUser]} />
          )}
        </>
      ) : (
        <Login setLoggedUser={setLoggedUser} setIsLoading={setIsLoading} />
      )}
    </>
  );
};

export default App;
