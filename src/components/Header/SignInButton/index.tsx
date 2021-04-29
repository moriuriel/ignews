import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./styles.module.scss";

const handleSignIn = () => signIn('github');
const handleSignOut = () => signOut();

export function SignInButton() {
  const [session] = useSession();

  const handleAuth = session ? handleSignOut : handleSignIn;
  
  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={handleAuth}
    >
      <FaGithub color={session ? "#04d361" : "#eba417"} />
      {session ? session.user.name : "Signin with Github"}
      {session && <FiX color="#737380" className={styles.closeIcon} />}
    </button>
  );
}
