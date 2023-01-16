import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { Image } from "next/image";
export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex items-center justify-between">
      <Link
        href={"/"}
        className="text-2xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600"
      >
        shesh
      </Link>
      <ul>
        {!user && (
          <Link legacyBehavior href={"/auth/signup"}>
            <a className="px-3 py-2 text-md bg-red-500 text-white rounded-2xl">
              Sign up
            </a>
          </Link>
        )}

        {user && (
          <div>
            <Link href={"/dashboard"}>
              <img
                src={user.photoURL}
                alt="avatar"
                className="rounded-[50%] w-10 h-10"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
