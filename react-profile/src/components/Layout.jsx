import styles from './Layout.module.css'

function Layout({ children, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>サイトタイトル</h1>

        <nav>
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('about')}>About</button>
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
