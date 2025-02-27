import styles from './HeaderList.module.css';

export function HeaderList() {
  return (
    <header className={styles.headerList}>
      <aside>
        <p>
          Tarefas criadas <span>0</span>
        </p>
      </aside>
      <aside>
        <p>
          Concluídas <span>0</span>
        </p>
      </aside>
    </header>
  );
}
