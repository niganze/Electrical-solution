import { BrowserRouter, Routes, Route } from 'react-router-dom';
Layout
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import SingleProject from './pages/Singleproject';
import SingleBlog from './pages/SingleBlog';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
           <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<SingleProject />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<SingleBlog />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;