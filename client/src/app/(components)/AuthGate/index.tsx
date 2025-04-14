"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Auth from "@/app/(components)/Auth";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthGate = ({ children }: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (session && !error) {
      router.replace('/dashboard');
    }
  }, [session, router, error]);

  if (status === "loading") {
    return (
      <div className="text-center flex flex-col items-center justify-center w-full">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (!session || error) {
    return <Auth />;
  }

  return <>{children}</>;
};

export default AuthGate;
