import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css'

export default function Header() {
  const [current, setCurrent] = useState('one')
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link 
          className={current === 'one' ? styles.linkActive : styles.link} 
          to={'/frontend-challenge'}
          onClick={() => setCurrent('one')}
        >Все котики</Link>
        <Link 
          className={current === 'two' ? styles.linkActive : styles.link} 
          to={'/frontend-challenge/favorites'}
          onClick={() => setCurrent('two')}
        >Любимые котики</Link>
      </nav>
    </header>
  )
}