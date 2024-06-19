"use client";
import { signIn } from "next-auth/react";
 
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(ev: { preventDefault: () => void }) {
    ev.preventDefault();

    await signIn("credentials", { username, password, callbackUrl: "/" });
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="username"
          name="username"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Login</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
      </form>
    </section>
  );
}
