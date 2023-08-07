import Navigation from '../features/navigation/Navigation';
import Footer from '../ui/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
