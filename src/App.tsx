import './App.css'
import Foter from './components/foter'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Product from './Pages/Product'
import AllCategory from './Pages/Products'
function App() {
  return (
  <div>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shop" element={<AllCategory />} />
            <Route path="product/:id" element={<Product />} />
</Routes> 
    <Foter/>
  </div>
  )
}
export default App
