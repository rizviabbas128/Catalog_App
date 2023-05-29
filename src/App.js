import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetail from './pages/CountryDetail';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/country/:id' element={<CountryDetail/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
