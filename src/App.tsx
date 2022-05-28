import './App.css';
import { Layout } from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { Dasboard } from './enums/Dashboard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path='/' element={<h1> Home </h1>} />
            <Route
              path='/products'
              element={<ProductsPage dashboard={Dasboard.Home} />}
            />
            <Route
              path='/deals'
              element={<ProductsPage dashboard={Dasboard.Deals} />}
            />
            <Route path='/product' element={<h1>Producto</h1>} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
