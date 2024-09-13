import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/index';

const Index:React.FC = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
        <Footer/>
    </div>
  );
};

export default Index;