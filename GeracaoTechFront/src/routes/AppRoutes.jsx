import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/homePage/HomePage';
import ProductListingPage from '../pages/productListingPage/ProductListingPage';
import NotFound from '../pages/NotFound/NotFound';
import ProductViewPage from '../pages/productViewPage/ProductViewPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="produtos" element={<ProductListingPage />} />
                    <Route path="produto/:id" element={<ProductViewPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};
export default AppRoutes;