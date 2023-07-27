import { useState, useEffect, ChangeEvent } from "react";

interface User {
  id: string;
  name: string;
}

const getUser = () => {
  const ret: User = { id: "1", name: "Robin" };
  return Promise.resolve(ret);
};

function Search() {
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const loadUser = async () => {
      const u: User = await getUser();
      setUser(u);
    };

    loadUser();
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}

      <input type="input" value="Search:" onChange={handleChange} />

      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default Search;
