
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import PropertyPage from './pages/PropertyPage'
import PropertyDetailsPage from './pages/PropertyDetailsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/properties' element={<PropertyPage/>} />
        <Route path='/propertyDetail/:id' element={<PropertyDetailsPage/>} />


      </Routes>
    </>
  )
}

export default App
