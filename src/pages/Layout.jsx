import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadProfile from '../components/DownloadProfile';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Download Profile Button - visible on all pages */}
      <DownloadProfile />
      
      {/* Main content container */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;