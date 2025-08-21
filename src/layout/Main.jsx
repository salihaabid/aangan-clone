import { Outlet } from 'react-router-dom';
import '../App.css';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import SearchBar from '../ui/SearchBar';
import ScrollToTop from '../ui/ScrollTop';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Main() {
  return (
    <div className='bg-light-beige'>
      {/* <ToastContainer /> */}
      <Navbar />
      <SearchBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      {/* <div className="min-h-screen bg-light-beige flex items-center justify-center">
      <h1 className="text-4xl text-red-900 font-bold">
        Tailwind v4 + DaisyUI Works 🎉
      </h1> */}
      {/* </div> */}
    </div>
  );
}
