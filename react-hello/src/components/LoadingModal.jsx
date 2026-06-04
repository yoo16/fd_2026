import Spinner from './Spinner'
import styles from './LoadingModal.module.css'

function LoadingModal() {
    return (
        <div className={styles.overlay}>
            <Spinner />
            <p>読み込み中...</p>
        </div>
    )
}

export default LoadingModal