import { Route, Routes } from "react-router"
import { Suspense, lazy } from "react"

import Layout from "../Layout/Layout"
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";


// import css from './App.module.css'

export default function App() {
  const HomePage = lazy(()=> import('../../pages/HomePage/HomePage'));
  const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
  const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));
  const NotFoundPage = lazy(()=> import('../../pages/NotFoundPage/NotFoundPage'));
  
  return (
    <>

  
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
<Route path="/" element={<Layout />} > 
    <Route index element={<HomePage/>} />
    <Route path="catalog" element={<CatalogPage/>}/>
    <Route path="catalog/:id" element={<CamperPage/>}>
        <Route path="features" element={<Features />} />
        <Route path="reviews" element={<Reviews />} />
    </Route>

    <Route path="*" element={<NotFoundPage />} />
</Route>



      </Routes>
      
      </Suspense>
    </>
  )
};
