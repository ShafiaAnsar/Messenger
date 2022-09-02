import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="app">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={Home}/>
       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
