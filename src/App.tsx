import styles from './App.module.css';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfo}></div>
        <div className={styles.taskList}></div>
      </section>
    </>
  );
}

export default App;
