import { Check, Trash } from '@phosphor-icons/react';
import styles from './Item.module.css';

export function Item() {
  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" />
          <span className={styles.checkbox}>
            <Check size={12} />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            eos error ducimus.
          </p>
        </label>
      </div>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
