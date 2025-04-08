"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      onClick={() => signIn("github")}
      className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100"
    >
      Login
    </button>
  );
}
