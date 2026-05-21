import styles from './SearchBar.module.css'

function SearchBar({ query, onQueryChange }) {
    return (
        <div className={styles.searchBar}>
            <section className={styles.section}>
                <input
                    className={styles.input}
                    type="text"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                />
            </section>
            <section>
                ジャンル選択
            </section>
        </div>
    )
}

export default SearchBar
