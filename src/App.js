import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import GuestBook from './pages/GuestBook';
import Example from './pages/Example';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main/>} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/guestbook" element={<GuestBook />} />
          <Route path="/example" element={<Example />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
