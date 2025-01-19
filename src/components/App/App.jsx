import { Route, Routes } from "react-router"
import { Suspense, lazy } from "react"

import Layout from "../Layout/Layout"



// import css from './App.module.css'

export default function App() {
  const HomePage = lazy(()=> import('../../pages/HomePage/HomePage'));
  const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
  const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));
  const NotFoundPage = lazy(()=> import('../../pages/NotFoundPage/NotFoundPage'));
  const Features = lazy(() => import('../Features/Features'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
  return (
    <>

  
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
<Route path="/" element={<Layout />} > 
    <Route index element={<HomePage/>} />
    <Route path="catalog" element={<CatalogPage/>}/>
    <Route path="catalog/:id" element={<CamperPage/>}>
    <Route index element={<Features />} />
        <Route  path="features"  element={<Features />} />
        <Route path="reviews" element={<Reviews />} />
    </Route>

    <Route path="*" element={<NotFoundPage />} />
</Route>



      </Routes>
      
      </Suspense>
    </>
  )
};
