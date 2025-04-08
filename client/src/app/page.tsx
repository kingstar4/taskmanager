"use client";
import Project from './dashboard/page';
// import Auth from './(components)/Auth';
// import DashboardWrapper from './DashboardWrapper';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* <Auth /> */}
      {/* <DashboardWrapper>{children}</DashboardWrapper> */}
      <Project/>
    </main>
  );
}