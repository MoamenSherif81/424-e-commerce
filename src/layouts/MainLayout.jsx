import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

export default function MainLayout() {
  return (
    <div>
      <NavBar />

      <Outlet />

    </div>
  )
}