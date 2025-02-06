import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex items-center justify-center h-screen">
      <div>{user.email}</div>;
    </div>
  );
};

export default Dashboard;
