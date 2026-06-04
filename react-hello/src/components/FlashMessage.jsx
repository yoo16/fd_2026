import styles from './FlashMessage.module.css'

function FlashMessage({ message, type = 'error' }) {
    return (
        <div className={`${styles.flash} ${styles[type]}`}>
            <div>{message}</div>
        </div>
    )
}

export default FlashMessage
