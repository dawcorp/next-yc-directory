"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
}
