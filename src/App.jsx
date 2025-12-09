import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Recipes from './components/Recipes'
import NavBar from './components/NavBar'
import SubmitRecipe from './components/SubmitRecipe'
import AboutMe from './components/AboutMe'

function App() {
  return <HashRouter>

    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/submit" element={<SubmitRecipe />} />
      <Route path="/about" element={<AboutMe/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
