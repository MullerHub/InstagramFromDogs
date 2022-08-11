import React from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as StatsFoto } from '../../Assets/estatisticas.svg'
import { ReactComponent as AddFotos } from '../../Assets/adicionar.svg'
import { ReactComponent as Fechar } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext)
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos /> 
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <StatsFoto />
        {mobile && 'Estatisticas'}

        </NavLink>
      <NavLink to="/conta/postar">
        <AddFotos />
        {mobile && 'Adicionar fotos'}
        </NavLink>
      <button onClick={userLogout}>
        <Fechar />
        {mobile && 'Sair'}

        </button>
    </nav>
  )
}

export default UserHeaderNav
