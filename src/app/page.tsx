import { auth0 } from "@/lib/auth0";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth0.getSession();

  console.log(session);
  // If no session, show sign-up and login buttons
  if (!session?.user) {
    return redirect("/auth/login");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="">Hi,{session.user.name}</div>
      <Link href={"/auth/logout"} prefetch={false}>
        <button>Logout</button>
      </Link>
    </div>
  );
}
