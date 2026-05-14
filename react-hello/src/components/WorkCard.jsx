import styles from './WorkCard.module.css'

function WorkCard({ work, onSelect }) {
    return (
        <div className={styles.card} onClick={() => onSelect(work)}>
            {/* 画像領域 */}
            <div className={styles.thumbnailWrapper}>
                <img src={work.image}
                    className={styles.thumbnail}
                    alt={work.title} />
            </div>
            {/* 作品の情報 */}
            <div className={styles.body}>
                <h2 className={styles.title}>{work.title}</h2>
            </div>
        </div>
    )
}

export default WorkCard