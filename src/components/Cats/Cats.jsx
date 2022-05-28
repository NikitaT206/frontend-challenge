import styles from './Cats.module.css'
import Cat from '../Cat/Cat'
import { useEffect } from 'react'
import { fetchCats, setCats, setLoader, setLimit } from '../../store/actions/cats'
import { setFavoriteCats } from '../../store/actions/favoriteCats'
import { useDispatch, useSelector } from 'react-redux'

export default function Cats() {

  const dispatch = useDispatch()
  const cats = useSelector(state => state.cats.cats)
  const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)
  const limit = useSelector(state => state.cats.limit)
  const limitedCats = useSelector(state => state.cats.limitedCats)

  useEffect(() => {
    dispatch(fetchCats())
  }, [])

  useEffect(() => {
    dispatch(setCats(cats.slice(0, limit)))
  }, [cats, limit])

  useEffect(() => {
    const scroll = () => {
      if (parseInt(document.documentElement.getBoundingClientRect().bottom) <= window.innerHeight) {
        dispatch(setLoader(true))
        setTimeout(() => {
          dispatch(setLimit())
          dispatch(setLoader(false))
        }, 1000)
         
      }
    }
    document.addEventListener('scroll', scroll)
    return () => document.removeEventListener('scroll', scroll)
 
  }, [])

  function addToFavorite(cat) {
    const isLiked = favoriteCats.some(c => c.id === cat.id)
    if (!isLiked) {
      dispatch(setFavoriteCats([...favoriteCats, cat]))
    } else {
      dispatch(setFavoriteCats(favoriteCats.filter(item => item.id !== cat.id)))
    }
  }
  
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {limitedCats.map(cat => {
          return <Cat cat={cat} key={cat.id} onLikeButtonClick={addToFavorite}/>
        })}
      </ul>
    </section>
  )
}