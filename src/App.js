import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
function App() {
  return (
    
    <div className="app">
      
       <BrowserRouter>
      
       <Routes>
       <Navbar/>
        <Route path='/register' element={Register}/>
        <Route path='/' element={Home}/>
       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
