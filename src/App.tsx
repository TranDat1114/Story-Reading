
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '@components/layout/layout';
// import LoadingPage from '@components/pages/loading';
import HomePage from '@/components/pages/home';
import NovelsPage from '@/components/pages/novels';
import GenrePage from '@components/pages/genres';
import RankingPage from '@components/pages/rankings';
import DieuKhoanPage from '@components/pages/dieukhoan';
import BaoMatPage from '@components/pages/baomat';
import FaqsPage from '@components/pages/faqs';
import NotFound404Page from '@components/pages/not-found-404';
import NovelChapterPage from '@components/pages/novel-chapter';
import ProfilePage from '@components/pages/profile';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/novels" element={<NovelsPage />} />
            <Route path="/novels/:bookName" element={<NovelsPage />} />
            <Route path="/novels/:novelName/:chapterNumber" element={<NovelChapterPage />} />
            <Route path="/genres" element={<GenrePage />} />
            <Route path="/rankings" element={<RankingPage />} />
            <Route path="/rankings/:rankingName" element={<RankingPage />} />
            <Route path="/terms" element={<DieuKhoanPage />} />
            <Route path="/privacy" element={<BaoMatPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound404Page />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
