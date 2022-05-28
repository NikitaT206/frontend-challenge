import styles from './FavoriteCats.module.css'
import Cat from '../Cat/Cat'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteCats, setFavoriteLoader, setFavoriteLimit } from '../../store/actions/favoriteCats'
import { useEffect } from 'react'

export default function FavoriteCats() {
  const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)
  const dispatch = useDispatch()

  function removeFromFavorite(cat) {
    dispatch(setFavoriteCats(favoriteCats.filter(item => item.id !== cat.id)))
  }

  useEffect(() => {
    dispatch(setFavoriteCats(favoriteCats))
  }, [favoriteCats])

  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {favoriteCats.map(cat => {
          return <Cat cat={cat} key={cat.id} onLikeButtonClick={removeFromFavorite}/>
        })}
      </ul>
    </section>
  )
}