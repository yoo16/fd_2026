import styles from './App.module.css'
import Header from './components/Header';
import Footer from './components/Footer';
import WorkList from './components/WorkList';
import Modal from './components/Modal';
// モックデータの読み込み
import { works } from './data/works';
// useState をインポート: 状態管理のために必要
import { useState } from 'react';

function App() {
  const [selectedWork, setSelectedWork] = useState(null)

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>作品リスト</h2>
        <WorkList
          works={works}
          onSelect={(work) => console.log(work)}
        />
      </main>

      <Footer />

      {selectedWork && (
        <Modal
          work={works[0]}
          onClose={() => console.log('Modal closed')}
        />
      )}
      }
    </div>
  )
}

export default App
