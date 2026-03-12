import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => (
  <>
    <TopBar />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Layout;
