// useState をインポート
import { useState } from 'react'
// Layout コンポーネントをインポート
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  // useState を使ってページの状態を管理: page
  const [page, setPage] = useState('home')

  return (
    <Layout>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </Layout>
  )
}

export default App
