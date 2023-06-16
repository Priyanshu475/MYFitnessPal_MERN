import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Calculate from './pages/Calculate'
import Learn from './pages/Learn'
import Chest from './components/chest'
import Back from './components/back'
import Shoulders from './components/shoulders'
import Arms from './components/arms'
import Legs from './components/legs'
import Core from './components/core'
import Footer from './components/Footer'
import Main from './pages/Main'
import Nutrient from './components/CalculateContent'


function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route 
              path="/user" 
              element={user ? <Home /> : <Navigate to="/" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/user" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/user" />} 
            />
            <Route 
            path="/user/Calculate"
            element={user ? <Calculate /> : <Navigate to="/" />}
            />
            <Route
            path="/user/learn"
            element={user ? <Learn /> : <Navigate to="/" />}
            />
            <Route
            path='/user/learn/chest'
            element={user ? <Chest/> : <Navigate to="/" />}
            />
            <Route
            path='/user/learn/back'
            element={user ? <Back/> : <Navigate to="/" />}
            />
            <Route
            path='/user/learn/shoulders'
            element={user ? <Shoulders/> : <Navigate to="/" />}
            />
            <Route
            path='/user/learn/arms'
            element={user ? <Arms/> : <Navigate to="/" />}
            />
            <Route
            path='/user/learn/core'
            element={user ? <Core/> : <Navigate to="/" />}
            />
            <Route
            path='/user/learn/legs'
            element={user ? <Legs/> : <Navigate to="/" />}
            />
            <Route
            path='/user/CalorieCalculate'
            element={user ? <Nutrient/> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
