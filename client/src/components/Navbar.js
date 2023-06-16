import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <div>
    {user && (
<nav class="navbar">
      <div class="navbar-container container">
          <input type="checkbox" name="" id=""></input>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/user">Back to Dashboard</Link></li>
              <li><Link to="/user/learn">Learn Exercise</Link></li>
              <li><Link to="/user/Calculate">Calculate Essentials</Link></li>
              <li><Link to="/user/CalorieCalculate">Nutritional details</Link></li>
              <li><button onClick={handleClick}>Logout</button></li>
          </ul>
          <h1 className="logo-11">  MYFitnessPal</h1>
      </div>
  </nav>
    )}
        {!user && (
<nav class="navbar">
      <div class="navbar-container container">
          <input type="checkbox" name="" id=""></input>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Register</Link></li>
          </ul>
          <img src='https://media.istockphoto.com/id/1093329548/vector/logo-dumbbell-in-flat-style-physical-exercise-fitness-equipment-workout-concept.jpg?s=612x612&w=0&k=20&c=d25KOu5AmCuv9IO-e-dUFt_fEwHtuqx55sWJ820evQ8=' alt='' className='logo-1'/>
          <h1 className="logo-11">  MYFitnessPal</h1>
      </div>
  </nav>
    )}
    </div>
  )
}

export default Navbar