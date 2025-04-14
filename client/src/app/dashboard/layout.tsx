'use client';

import DashboardWrapper from "../DashboardWrapper";
import AuthGate from "../(components)/AuthGate";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGate>
      <DashboardWrapper>{children}</DashboardWrapper>
    </AuthGate>
  );
}
