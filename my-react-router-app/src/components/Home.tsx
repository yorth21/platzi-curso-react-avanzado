import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const goToAbout = () => {
    navigate("/about")
  }
  
  return (
    <section>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/product/1">Prodcut 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
      </ul>
      <button onClick={goToAbout}>Go to About</button>
    </section>
  )
}

export default Home
