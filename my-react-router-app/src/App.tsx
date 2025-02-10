import { Link, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Settings from "./components/Settings";
import { Suspense } from "react";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>  
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="overview" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Overview />
            </Suspense>
          }>

          </Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={true}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
