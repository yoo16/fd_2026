import styles from './WorkCard.module.css'

function WorkCard({ work, onSelect }) {
    return (
        <div className={styles.card} onClick={() => onSelect(work)}>
            {work.title}
        </div>
    )
}

export default WorkCard