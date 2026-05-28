import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

function useWorks() {
    // 作品データを管理するための状態
    const [works, setWorks] = useState([])

    // コンポーネントが初回読み込まれたときに
    useEffect(() => {
        // APIサーバから作品データを取得
        async function fetchWorks() {
            // json-server に APIリクエスト
            const response = await fetch(`${API_URL}/works`)
            // JSONをJSオブジェクトに変換
            const data = await response.json()
            // 作品データを状態に保存
            setWorks(data)
        }
        // 作品データを取得する関数実行
        fetchWorks()
    }, [])

    // 作品データを返す
    return { works }
}

export default useWorks