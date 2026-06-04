import Spinner from './Spinner'

function LoadingModal() {
    return (
        <div>
            <Spinner />
            <p>読み込み中...</p>
        </div>
    )
}

export default LoadingModal