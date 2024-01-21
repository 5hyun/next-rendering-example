import React from "react";
import { useRouter } from "next/router";

interface Props {
  users: { id: number; name: string }[];
}
function Isr({ users }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }

  return (
    <div>
      <h1>Incremental Static Rendering</h1>
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
    revalidate: 60,
  };
}

export default Isr;
