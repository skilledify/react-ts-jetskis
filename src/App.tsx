import type { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router';
import { AppRoutes } from "./constants/global.constants";

import {MainLayout} from "./layouts/MainLayout/MainLayout";

import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import  NotFoundPage  from "./pages/NotFoundPage/NotFoundPage";


// import ScrollToTop from "./components/ScrollToTop";


const App: FC = () => {
  return (
    <>
      <BrowserRouter basename="/react-ts-jetskis">
        {/* <ScrollToTop/> */}
          <Routes>
        {/* Родительский роут с MainLayout */}
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path={AppRoutes.PRODUCTCARD_PAGE} element={<ProductCardPage />} />
              <Route path={AppRoutes.CATALOG_PAGE} element={<CatalogPage/>} />
          </Route>

        {/* Страница 404 без Header и Footer */}
          <Route path={AppRoutes.NOTFOUND_PAGE} element={<NotFoundPage />} />
      </Routes>
        
        
        </BrowserRouter>

   </>
  );
};
export default App;