import { PlusCircle } from '@phosphor-icons/react';
import styles from './Button.module.css';

export function Button({
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button className={styles.button} {...rest}>
      Criar
      <PlusCircle size={16} />
    </button>
  );
}
