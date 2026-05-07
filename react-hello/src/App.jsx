import styles from './App.module.css'
import Header from './components/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Anime Station</h2>
        <div>ここになんか作品</div>
      </main>
    </div>
  )
}

export default App
