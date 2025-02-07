import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user)
    return (
      <div>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </div>
    );

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <h1> {user.firstName}!</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
