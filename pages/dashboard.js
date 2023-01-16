import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
// import { useRouter } from "next/router";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (user)
    return (
      <div className="flex flex-col mt-20 gap-4">
        <h1 className="text-xl font-bold">Hello {user.displayName}!</h1>
        <h2>What do you want to do?</h2>
        <button onClick={() => auth.signOut()}>Sign me out</button>
      </div>
    );
}
