import styles from './HeaderList.module.css';

interface HeaderListProps {
  count: number;
  completed: number;
}

export function HeaderList({ count, completed }: HeaderListProps) {
  return (
    <header className={styles.headerList}>
      <aside>
        <p>
          Tarefas criadas <span>{count}</span>
        </p>
      </aside>
      <aside>
        <p>
          Concluídas <span>{completed}</span>
        </p>
      </aside>
    </header>
  );
}
