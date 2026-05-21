import styles from './App.module.css'
import Header from './components/Header';
import Footer from './components/Footer';
import WorkList from './components/WorkList';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';
// モックデータの読み込み
import { works } from './data/works';
// useState をインポート: 状態管理のために必要
import { useState } from 'react';

function App() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [query, setQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState('すべて')
  // works の中から、genre を抜き取って重複を排除して配列
  const genres = ['すべて', ...new Set(works.map((w) => w.genre))]

  // 全作品 works から、title を 検索キーワード query で検索
  const filteredWorks = works.filter((work) =>
    work.title.includes(query)
  )

  return (
    <div className={styles.app}>
      <Header />

      <SearchBar
        query={query}
        onQueryChange={setQuery}
      />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>作品リスト</h2>
        <WorkList
          works={filteredWorks}
          onSelect={(work) => setSelectedWork(work)}
        />
      </main>

      <Footer />

      {selectedWork && (
        <Modal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </div>
  )
}

export default App
