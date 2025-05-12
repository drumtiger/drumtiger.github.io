import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main/>} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
