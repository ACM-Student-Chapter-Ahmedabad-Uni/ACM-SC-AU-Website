import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import logo from './logo.svg';

const App = () => {
  return (
    <div className="">
      <Header className=" h-20"/>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
