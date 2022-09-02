import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
function App() {
  return (
    <div className="app">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={Home}/>
       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
