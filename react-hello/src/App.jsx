import styles from './App.module.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Anime Station</h2>
        <div>ここになんか作品</div>
      </main>

      <Footer />
    </div>
  )
}

export default App
