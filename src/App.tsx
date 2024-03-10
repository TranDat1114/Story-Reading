
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '@components/layout/layout';

const LoadingPage = lazy(() => import('@components/pages/loading'));
const HomePage = lazy(() => import('@/components/pages/home'));
const NovelsPage = lazy(() => import('@/components/pages/novels'));
const GenrePage = lazy(() => import('@components/pages/genres'));
const RankingPage = lazy(() => import('@components/pages/rankings'));
const DieuKhoanPage = lazy(() => import('@components/pages/dieukhoan'));
const BaoMatPage = lazy(() => import('@components/pages/baomat'));
const FaqsPage = lazy(() => import('@components/pages/faqs'));
const NotFound404Page = lazy(() => import('@components/pages/not-found-404'));
const NovelChapterPage = lazy(() => import('@components/pages/novel-chapter'));
const ProfilePage = lazy(() => import('@components/pages/profile'));

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingPage />}>
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
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
