import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';

function App() {
  return (
    <>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfo}>
          <Input />
          <Button />
        </div>
        <div className={styles.taskList}></div>
      </section>
    </>
  );
}

export default App;
