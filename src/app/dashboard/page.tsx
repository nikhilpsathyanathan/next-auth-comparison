import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
export const dynamic = "force-dynamic";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div>{user.email}</div>;
    </div>
  );
};

export default Dashboard;
