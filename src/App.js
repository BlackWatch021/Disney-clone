import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
