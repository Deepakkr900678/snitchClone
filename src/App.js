import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Search from './components/Search';
import './App.css';


function App() {
  return (
    <div className='flex min-h-screen w-screen flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
