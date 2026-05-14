import styles from './WorkList.module.css'
import WorkCard from './WorkCard'

function WorkList({ works, onSelect }) {
    return (
        <div>
            <div className={styles.count}>{works.length}作品</div>
            <div className={styles.grid}>
                {
                    works.map(work => (
                        <WorkCard
                            key={work.id}
                            work={work}
                            onSelect={onSelect} />
                    ))
                }
            </div>
        </div>
    )
}

export default WorkList