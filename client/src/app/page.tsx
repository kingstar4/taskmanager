"use client";

import AuthGate from "./(components)/AuthGate";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <AuthGate>
        <div>Redirecting...</div>
      </AuthGate>
    </main>
  );
}