import React from "react";

interface Props {
  users: { id: number; name: string }[];
}
function Ssr({ users }: Props) {
  return (
    <div>
      <h1>Server Side Rendering</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Ssr;
