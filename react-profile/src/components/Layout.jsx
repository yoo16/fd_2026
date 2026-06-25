import styles from './Layout.module.css'
import { Home, Info, Sparkles, BadgeCheck } from 'lucide-react'
import { motion } from 'motion/react'
// エイリアス（別名）※これはやってもいいし、やらなくてもいい
const Motion = motion

function Layout({ children, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <Motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h1 className={styles.brand}>
          <Sparkles size={24} className={styles.brandIcon} />
          サイトタイトル
        </h1>

        <nav className={styles.nav}>
          <button className={styles.navButton} onClick={() => onNavigate('home')}>
            <Home size={20} />
            Home
          </button>
          <button className={styles.navButton} onClick={() => onNavigate('about')}>
            <Info size={20} />
            About
          </button>
        </nav>

      </Motion.header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>
          <BadgeCheck size={16} aria-hidden="true" />
          2026 My App
        </p>
      </footer>
    </div>
  )
}

export default Layout
