import styles from './styles.module.scss';

interface ISubscribeProps {
  priceId: string;
}
export function SubscribeButton({priceId}: ISubscribeProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}