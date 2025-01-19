import { Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
  const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
  const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));
  const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
  const Features = lazy(() => import('../Features/Features'));
  const Reviews = lazy(() => import('../Reviews/Reviews'));
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CamperPage />}>
              <Route index element={<Features />} />
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
