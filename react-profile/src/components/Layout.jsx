import styles from './Layout.module.css'
import { Home } from 'lucide-react'

function Layout({ children, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>サイトタイトル</h1>

        <nav className={styles.nav}>
          <button className={styles.navButton} onClick={() => onNavigate('home')}>
            <Home size={20} />
            Home
          </button>
          <button className={styles.navButton} onClick={() => onNavigate('about')}>About</button>
        </nav>

      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  )
}

export default Layout
