import React, { useEffect, useState } from "react";

export default function Csr() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Client Side Rendering</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
