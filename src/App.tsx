import './App.css';
import { Layout } from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path='/' element={<h1> Home </h1>} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
