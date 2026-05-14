import styles from './App.module.css'
import Header from './components/Header';
import Footer from './components/Footer';
import WorkList from './components/WorkList';
// モックデータの読み込み
import { works } from './data/works';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>作品リスト</h2>
        <WorkList
          works={works}
          onSelect={(work) => console.log(work)}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
