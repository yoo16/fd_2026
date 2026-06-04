import Spinner from './Spinner'
import styles from './LoadingModal.module.css'

function LoadingModal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <Spinner />
                <p className={styles.message}>
                    読み込み中...
                </p>
            </div>
        </div>
    )
}

export default LoadingModal