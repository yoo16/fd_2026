import { useState, useEffect } from 'react'

function useWorks() {
    // 作品データを管理するための状態
    const [works, setWorks] = useState([])

    // コンポーネントが初回読み込まれたときに
    useEffect(() => {
        // APIサーバから作品データを取得
        async function fetchWorks() {
            const response = await fetch('http://localhost:3001/works')
            const data = await response.json()
            setWorks(data)
        }
        fetchWorks()
    }, [])

    // 作品データを返す
    return { works }
}

export default useWorks