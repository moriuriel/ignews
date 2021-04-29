import { signIn, useSession } from "next-auth/client";
import styles from "./styles.module.scss";

interface ISubscribeProps {
  priceId: string;
}
export function SubscribeButton({ priceId }: ISubscribeProps) {
  const [session] = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
