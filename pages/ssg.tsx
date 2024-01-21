import React from "react";
import { useRouter } from "next/router";

interface Props {
  users: { id: number; name: string }[];
}
function Ssg({ users }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }

  return (
    <div>
      <h1>Static Side Rendering</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Ssg;
