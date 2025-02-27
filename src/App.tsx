import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Empty } from './components/List/Empty';
import { HeaderList } from './components/List/HeaderList';
import { Item } from './components/List/Item';

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfo}>
          <Input />
          <Button />
        </div>
        <div className={styles.taskList}>
          <HeaderList />
          <div>
            <Item />
            <Item />
            <Item />
          </div>
          <Empty />
        </div>
      </section>
    </main>
  );
}

export default App;
