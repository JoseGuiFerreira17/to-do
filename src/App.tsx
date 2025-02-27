import { FormEvent, useState } from 'react';
import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Empty } from './components/List/Empty';
import { HeaderList } from './components/List/HeaderList';
import { Item } from './components/List/Item';

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [textTaskInput, setTextTaskInput] = useState('');

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    if (!textTaskInput) return;

    const newTask: ITask = {
      id: Math.random(),
      text: textTaskInput,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
    setTextTaskInput('');
  }
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfo}>
          <Input
            onChange={(e) => setTextTaskInput(e.target.value)}
            value={textTaskInput}
          />
          <Button onClick={handleAddTask} />
        </div>
        <div className={styles.taskList}>
          <HeaderList />
          <div>
            <Item />
            {tasks.map((task) => {
              return <Item />;
            })}
          </div>
          <Empty />
        </div>
      </section>
    </main>
  );
}

export default App;
