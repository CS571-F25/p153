import { HashRouter, Route, Routes } from 'react-router';
import { useEffect, useState } from "react";
import './App.css';
import Home from './components/Home';
import Recipes from './components/Recipes';
import NavBar from './components/NavBar';
import SubmitRecipe from './components/SubmitRecipe';
import initialRecipes from "./data/recipes";

function App() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : initialRecipes;
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleLike = (id) => {
    setRecipes(prev =>
      prev.map(r =>
        r.id === id ? { ...r, likes: r.likes + 1 } : r
      )
    );
  };

  const handleAddRecipe = (newRecipe) => {
  setRecipes(prev => [
    {
      ...newRecipe,
      id: Date.now(),
      likes: 0
    },
    ...prev
  ]);
};


  return <HashRouter>
    <div className="app-bg">
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home recipes={recipes} onLike={handleLike} />}/>
        <Route path="/recipes" element={<Recipes recipes={recipes} onLike={handleLike} />} />
        <Route path="/submit" element={<SubmitRecipe onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </div>
  </HashRouter>
}

export default App
