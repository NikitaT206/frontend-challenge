import styles from './Cat.module.css'
import { useSelector } from 'react-redux'

export default function Cat({cat, onLikeButtonClick}) {
  const favoriteCats = useSelector(state => state.favoriteCats.favoriteCats)

  const isLiked = favoriteCats.some(c => c.id === cat.id)

  function onLikeButtonClickHandler() {
    onLikeButtonClick(cat)
  }
  
  return (
    <div className={styles.container}>
      <img className={styles.image} src={cat.url} alt='cat'/>
      <button 
        className={isLiked ? styles.likeButtonActive : styles.likeButton} 
        type='button' 
        onClick={onLikeButtonClickHandler}
      ></button>
    </div>
  )
}