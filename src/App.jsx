import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Exercisepage from './pages/Exercisepage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App p-20 max-sm:p-8 overflow-x-hidden">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise/:id' element={ <Exercisepage /> } />
     </Routes>
     <Footer />
    </div>
  )
}

export default App
