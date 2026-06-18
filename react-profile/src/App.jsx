// useState をインポート
import { useState } from 'react'
// Layout コンポーネントをインポート
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  // useState を使ってページの状態を管理: page
  const [page, setPage] = useState('home')

  return (
    <Layout>
      {page === 'home' && <Home /> }
    </Layout>
  )
}

export default App
