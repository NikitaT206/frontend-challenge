import { useEffect } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Cats from '../Cats/Cats';
import Loader from '../Loader/Loader';
import FavoriteCats from '../FavoriteCats/FavoriteCats';
import { useSelector } from 'react-redux';

function App() {
  const loader = useSelector(state => state.cats.loader)
  const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)

  useEffect(() => {
    localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats))
  }, [favoriteCats])

  return (
    <div className={styles.app}>
      <Header/>
      <Routes>
        <Route path='/frontend-challenge' element={<Cats/>}/>
        <Route path='/frontend-challenge/favorites' element={<FavoriteCats/>}/>
      </Routes>
      {loader && <Loader/>}
    </div>
  )
}

export default App
