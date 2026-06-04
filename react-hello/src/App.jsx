import styles from './App.module.css'
import Header from './components/Header';
import Footer from './components/Footer';
import WorkList from './components/WorkList';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';
// ローディングモーダルのコンポーネント
import LoadingModal from './components/LoadingModal';
// フラッシュメッセージのコンポーネント
import FlashMessage from './components/FlashMessage';
// モックデータの読み込み
// import { works } from './data/works';
import useWorks from './hooks/useWorks';
// useState をインポート: 状態管理のために必要
// useEffect をインポート: データのフェッチや副作用の処理に必要
import { useState, useEffect } from 'react';

function App() {
  // カスタムHooksを使って、works を読み込み
  const { works, loading, error } = useWorks()

  const [selectedWork, setSelectedWork] = useState(null)
  const [query, setQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState('すべて')
  // works の中から、genre を抜き取って重複を排除して配列
  const genres = ['すべて', ...new Set(works.map((w) => w.genre))]

  // 全作品 works から、title を 検索キーワード query で検索
  const filteredWorks = works
    .filter((w) => selectedGenre === 'すべて' || w.genre === selectedGenre)
    .filter((w) => w.title.includes(query))

  useEffect(() => {
    console.log('毎回実行')
  });

  useEffect(() => {
    console.log('初回のみ実行')
  }, []);

  useEffect(() => {
    console.log(selectedGenre + 'に変更されたときに実行')
  }, [selectedGenre]);

  return (
    <div className={styles.app}>
      <LoadingModal isOpen={loading} message="Loading..." />

      <Header />

      <FlashMessage message={error} type="success" />

      <SearchBar
        query={query}
        onQueryChange={setQuery}
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
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
