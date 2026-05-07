// ES7 React/Redux/GraphQL/React-Native snippets をインストール
// rafce と入力して、Enter を押すと、以下のコードが出力される

import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>Anime Station</div>
        </header>
    )
}

export default Header