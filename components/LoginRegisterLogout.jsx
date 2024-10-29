import React from 'react'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from 'next/link';

const LoginRegisterLogout = () => {

const { data: session, status } = useSession();

  return (
    <div className="flex w-full flex-row items-center justify-end gap-4 text-white">
      {!session ? (
        <Link href="/register" className="">
          Registreer
        </Link>
      ) : (
        ""
      )}

      <div className="flex gap-4 justify-center items-center">
        {!session?.user ? (
          <Link href="/login" className="flex w-full justify-end pr-3">
            Inloggen
          </Link>
        ) : (
          <Link href="/profile">
            <span className="flex items-center justify-start">{`Hi, ${session?.user?.username}`}</span>
          </Link>
        )}

        {session?.user && (
          <button
            className="mr-4"
            onClick={() => {
              signOut({ callbackUrl: "/", redirect: true });
            }}
          >
            <span>Uitloggen</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default LoginRegisterLogout
