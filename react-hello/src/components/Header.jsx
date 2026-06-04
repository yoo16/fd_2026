// ES7 React/Redux/GraphQL/React-Native snippets をインストール
// rafce と入力して、Enter を押すと、以下のコードが出力される

import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import ThemeButton from './ThemeButton';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.title}>Anime Station</div>
            <ThemeButton />
        </header>
    )
}

export default Header