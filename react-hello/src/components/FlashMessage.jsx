
function FlashMessage({ message, type = 'error' }) {
    return (
        <div>
            <div>{message}</div>
        </div>
    )
}

export default FlashMessage
