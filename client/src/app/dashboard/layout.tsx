// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardWrapper from "../DashboardWrapper";
// import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/api/auth/signin");
  // }

  return <DashboardWrapper>{children}</DashboardWrapper>;
}
