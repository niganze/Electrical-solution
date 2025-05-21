import { BrowserRouter, Routes, Route } from "react-router-dom";
Layout;
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import SingleProject from "./pages/Singleproject";
import SingleBlog from "./pages/SingleBlog";
import AdminLayout from "./admin/AdminLayout";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Dashboard from "./admin/Dashboard";
import Team from "./admin/Team";
import Testi from "./admin/Testi";
import Project from "./admin/Project";
import Blog from "./admin/Blog";
import MEPCostEstimator from "./admin/MEPCostEstimator";
import Partners from "./admin/Partners";
import CreateProject from "./admin/CreateProject";
import CreateBlog from "./admin/CreateBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<SingleProject />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="projects" element={<Project />} />
          <Route path="createproject" element={<CreateProject />} />
          <Route path="projects/:id" element={<CreateProject />} />
          <Route path="blogs/:id" element={<CreateProject />} />
          <Route path="createblog" element={<CreateBlog />} />

          <Route path="testimonials" element={<Testi />} />
          <Route path="mepcalculations" element={<MEPCostEstimator />} />
          <Route path="partner" element={<Partners />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
