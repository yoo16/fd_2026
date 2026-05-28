import { useState, useEffect } from 'react'

function useWorks() {
    // 作品データを管理するための状態
    const [works, setWorks] = useState([])

    // コンポーネントが初回読み込まれたときにAPIサーバから作品データを取得
    useEffect(() => {

    }, [])

    // 作品データを返す
    return { works }
}

export default useWorks