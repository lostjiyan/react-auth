import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Signup() {
  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  if (user) route.push("/dashboard");
  return (
    <div className="shadow-xl mt-40 p-10 shadow-red-600/20 rounded-md">
      <div>
        <h1 className="text-lg">Dont have an account?</h1>
        <div className="flex items-center justify-center">
          <button onClick={GoogleLogin} className="flex items-center mt-8">
            <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
