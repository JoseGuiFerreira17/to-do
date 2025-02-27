import { Check, Trash } from '@phosphor-icons/react';
import styles from './Item.module.css';
import { ITask } from '../../App';

interface ItemProps {
  task: ITask;
}

export function Item({ task }: ItemProps) {
  const checkboxCheckedClassName = task.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];

  console.log(checkboxCheckedClassName);

  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked={task.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassName}`}>
            {task.isChecked && <Check size={12} />}
          </span>
          <p>{task.text}</p>
        </label>
      </div>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
