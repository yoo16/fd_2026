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
            {work.title}
        </div>
    )
}

export default WorkCard