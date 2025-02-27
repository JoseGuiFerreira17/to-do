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

  const tasksCompletedsCount = tasks.filter((task) => task.isChecked).length;
  const tasksCount = tasks.length;

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

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleCheckTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
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
          <HeaderList count={tasksCount} completed={tasksCompletedsCount} />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  task={task}
                  removeTask={handleRemoveTask}
                  toggleTask={handleCheckTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
