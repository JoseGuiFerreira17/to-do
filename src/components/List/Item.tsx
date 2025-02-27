import { Check, Trash } from '@phosphor-icons/react';
import styles from './Item.module.css';
import { ITask } from '../../App';
import { useState } from 'react';

interface ItemProps {
  task: ITask;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export function Item({ task, removeTask, toggleTask }: ItemProps) {
  const [showModal, setShowModal] = useState(false);

  const checkboxCheckedClassName = task.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];
  const paragraphCheckedClassName = task.isChecked
    ? styles['paragraph-checked']
    : '';

  function handleRemove() {
    setShowModal(true);
  }

  function confirmRemove() {
    removeTask(task.id);
    setShowModal(false);
  }

  function handleToggle() {
    toggleTask(task.id);
  }

  return (
    <div className={styles.item}>
      <div>
        <label htmlFor="checkbox" onClick={handleToggle}>
          <input readOnly type="checkbox" checked={task.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassName}`}>
            {task.isChecked && <Check size={12} />}
          </span>
          <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
            {task.text}
          </p>
        </label>
      </div>
      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>

      {showModal && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.modal}>
            <p>Tem certeza que deseja excluir esta tarefa?</p>
            <div>
              <button onClick={confirmRemove}>Sim</button>
              <button onClick={() => setShowModal(false)}>Não</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
